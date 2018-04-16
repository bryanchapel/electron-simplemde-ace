const SimpleMDE = require('./simplemde.js');
// const Ace = require('./ace/ace.js').edit('editor');

// require('./ace/theme-twilight.js');
// require('./ace/mode-markdown.js');

let Ace = new SimpleMDE({
    element: document.getElementById('editor')
});

//Ace.setTheme('ace/theme/twilight');
//Ace.session.setMode('ace/mode/markdown');

console.log(Ace.env.editor.selection.getCursor());

// module.exports = editor;