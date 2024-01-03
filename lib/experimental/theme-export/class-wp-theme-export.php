<?php
/**
 * WP_Theme_Export class
 *
 * @package   WordPress
 * @since	  6.5.0
 */

if ( class_exists( 'WP_Theme_Export' ) ) {
	return;
}

/**
 * Core class used to generate a theme export file.
 *
 * @since	  6.5.0
 */
class WP_Theme_Export {
	public function __construct() {
		// empty.
	}

	/**
	 * Generate the theme export file.
	 *
	 * @since 6.5.0
	 */
	public function generate_theme_export() {
		global $wp_version;

		if ( ! class_exists( 'ZipArchive' ) ) {
			return new WP_Error( 'missing_zip_package', __( 'Zip Export not supported.' ) );
		}

		$obscura    = wp_generate_password( 12, false, false );
		$theme_name = basename( get_stylesheet() );
		$filename   = get_temp_dir() . $theme_name . $obscura . '.zip';

		$zip = new ZipArchive();
		if ( true !== $zip->open( $filename, ZipArchive::CREATE | ZipArchive::OVERWRITE ) ) {
			return new WP_Error( 'unable_to_create_zip', __( 'Unable to open export file (archive) for writing.' ) );
		}

		$zip->addEmptyDir( 'templates' );
		$zip->addEmptyDir( 'parts' );

		// Get path of the theme.
		$theme_path = wp_normalize_path( get_stylesheet_directory() );

		// Create recursive directory iterator.
		$theme_files = new RecursiveIteratorIterator(
			new RecursiveDirectoryIterator( $theme_path ),
			RecursiveIteratorIterator::LEAVES_ONLY
		);

		// Make a copy of the current theme.
		foreach ( $theme_files as $file ) {
			// Skip directories as they are added automatically.
			if ( ! $file->isDir() ) {
				// Get real and relative path for current file.
				$file_path     = wp_normalize_path( $file );
				$relative_path = substr( $file_path, strlen( $theme_path ) + 1 );

				if ( ! wp_is_theme_directory_ignored( $relative_path ) ) {
					$zip->addFile( $file_path, $relative_path );
				}
			}
		}

		// Load templates into the zip file.
		$templates = get_block_templates();
		foreach ( $templates as $template ) {
			$template->content = traverse_and_serialize_blocks(
				parse_blocks( $template->content ),
				'_remove_theme_attribute_from_template_part_block'
			);

			$zip->addFromString(
				'templates/' . $template->slug . '.html',
				$template->content
			);
		}

		// Load template parts into the zip file.
		$template_parts = get_block_templates( array(), 'wp_template_part' );
		foreach ( $template_parts as $template_part ) {
			$zip->addFromString(
				'parts/' . $template_part->slug . '.html',
				$template_part->content
			);
		}

		// Load theme.json into the zip file.
		$tree = WP_Theme_JSON_Resolver::get_theme_data( array(), array( 'with_supports' => false ) );
		// Merge with user data.
		$tree->merge( WP_Theme_JSON_Resolver::get_user_data() );

		$theme_json_raw = $tree->get_data();
		// If a version is defined, add a schema.
		if ( $theme_json_raw['version'] ) {
			$theme_json_version = 'wp/' . substr( $wp_version, 0, 3 );
			$schema             = array( '$schema' => 'https://schemas.wp.org/' . $theme_json_version . '/theme.json' );
			$theme_json_raw     = array_merge( $schema, $theme_json_raw );
		}

		// Convert to a string.
		$theme_json_encoded = wp_json_encode( $theme_json_raw, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );

		// Replace 4 spaces with a tab.
		$theme_json_tabbed = preg_replace( '~(?:^|\G)\h{4}~m', "\t", $theme_json_encoded );

		// Add the theme.json file to the zip.
		$zip->addFromString(
			'theme.json',
			$theme_json_tabbed
		);

		// Save changes to the zip file.
		$zip->close();

		return $filename;
	}
}