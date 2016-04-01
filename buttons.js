$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eraser', function(textarea, selectionStart, selectionEnd) {
			if (selectionStart === selectionEnd) {
				controls.insertIntoTextarea(textarea, '<del></del><ins></ins>');
				controls.updateTextareaSelection(textarea, selectionStart + 5, selectionStart + 5);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '<del>', '</del><ins>text</ins>');
				controls.updateTextareaSelection(textarea, selectionEnd + 16, selectionEnd + 20);
			}
		});
		composer.addButton('fa fa-info-circle', function(textarea, selectionStart, selectionEnd) {
			if (selectionStart === selectionEnd) {
				controls.insertIntoTextarea(textarea, '<abbr title="title"></abbr>');
				controls.updateTextareaSelection(textarea, selectionStart + 13, selectionStart + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '<abbr title="', '">Text</abbr>');
				controls.updateTextareaSelection(textarea, selectionEnd + 15, selectionEnd + 19);
			}
		});
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			if (selectionStart === selectionEnd) {
				controls.insertIntoTextarea(textarea, '[spoiler]text[/spoiler]');
				controls.updateTextareaSelection(textarea, selectionStart + 9, selectionStart + 13);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '[spoiler]', '[/spoiler]');
				controls.updateTextareaSelection(textarea, selectionStart + 9, selectionEnd + 9);
			}
		});
	});
});
