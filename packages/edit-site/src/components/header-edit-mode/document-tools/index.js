/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { privateApis as editorPrivateApis } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { store as editSiteStore } from '../../../store';
import { unlock } from '../../../lock-unlock';

const { DocumentTools: EditorDocumentTools } = unlock( editorPrivateApis );

export default function DocumentTools() {
	const { isVisualMode } = useSelect( ( select ) => {
		const { getEditorMode } = select( editSiteStore );

		return {
			isVisualMode: getEditorMode() === 'visual',
		};
	}, [] );

	return (
		<EditorDocumentTools
			disableBlockTools={ ! isVisualMode }
			listViewLabel={ __( 'List View' ) }
		/>
	);
}
