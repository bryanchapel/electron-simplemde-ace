const SimpleMDE = require('simplemde');
require('./ace/src/ace.js');
require('./ace/src/mode-markdown.js');

// let editor = new SimpleMDE({
//     element: document.getElementById('Editor'),
//     autofocus: true,
// });

var editor = ace.edit("editor");
var MarkdownMode = ace.require("./ace/mode/markdown").Mode;

editor.setTheme("./ace/theme/twilight");
editor.session.setMode(new MarkdownMode());

// console.log(editor);

// module.exports = editor;