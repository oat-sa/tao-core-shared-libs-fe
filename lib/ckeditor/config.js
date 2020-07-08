/**
 * Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};

CKEDITOR.on('instanceReady', function(event) {
	event.editor.on('beforeCommandExec', function(event) {
		// Show the paste dialog for the paste buttons and context-menu paste
		if (event.data.name == 'paste') {
			event.editor._.forcePasteDialog = true;

			return;
		}

		// Don't show the paste dialog for Ctrl/Cmd + Shift + V
		if (event.data.name === 'pastetext' && event.data.commandData.from === 'keystrokeHandler') {

			event.cancel();
		}
	})
});

