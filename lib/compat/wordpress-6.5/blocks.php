<?php
/**
 * Temporary compatibility shims for block APIs present in Gutenberg.
 *
 * @package gutenberg
 */

/**
 * Shim for the `variation_callback` block type argument.
 *
 * @param array $args The block type arguments.
 * @return array The updated block type arguments.
 */
function gutenberg_register_block_type_args_shim( $args ) {
	if ( isset( $args['variation_callback'] ) && is_callable( $args['variation_callback'] ) ) {
		$args['variations'] = call_user_func( $args['variation_callback'] );
		unset( $args['variation_callback'] );
	}
	return $args;
}

if ( ! method_exists( 'WP_Block_Type', 'get_variations' ) ) {
	add_filter( 'register_block_type_args', 'gutenberg_register_block_type_args_shim' );
}

/**
 * Registers the metadata block attribute for all block types.
 *
 * @param array $args Array of arguments for registering a block type.
 * @return array $args
 */
function gutenberg_register_metadata_attribute( $args ) {
	// Setup attributes if needed.
	if ( ! isset( $args['attributes'] ) || ! is_array( $args['attributes'] ) ) {
		$args['attributes'] = array();
	}

	if ( ! array_key_exists( 'metadata', $args['attributes'] ) ) {
		$args['attributes']['metadata'] = array(
			'type' => 'object',
		);
	}

	return $args;
}
add_filter( 'register_block_type_args', 'gutenberg_register_metadata_attribute' );

/**
 * Registers a new block style for one or more block types.
 *
 * @param string|array $block_name       Block type name including namespace or array of namespaced block type names.
 * @param array        $style_properties Array containing the properties of the style name, label,
 *                                       style_handle (name of the stylesheet to be enqueued),
 *                                       inline_style (string containing the CSS to be added),
 *                                       style_data (theme.json-like object to generate CSS from).
 *
 * @return bool True if all block styles were registered with success and false otherwise.
 */
function gutenberg_register_block_style( $block_name, $style_properties ) {
	if ( ! is_string( $block_name ) && ! is_array( $block_name ) ) {
		_doing_it_wrong(
			__METHOD__,
			__( 'Block name must be a string or array.', 'gutenberg' ),
			'5.3.0'
		);

		return false;
	}

	$block_names = is_string( $block_name ) ? array( $block_name ) : $block_name;
	$result      = true;

	foreach ( $block_names as $name ) {
		if ( ! WP_Block_Styles_Registry::get_instance()->register( $name, $style_properties ) ) {
			$result = false;
		}
	}

	return $result;
}
