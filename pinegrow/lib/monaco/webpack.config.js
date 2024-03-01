const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {"pg.monaco": {import: './entry.js'}},
    output: {
        path: path.resolve(__dirname, 'dist'),
        //publicPath: '/lib/monaco/dist/',
        filename: 'pg.monaco.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttfpppppp$/,
                use: ['file-loader']
            },
        ]
    },

    plugins: [
        new MonacoWebpackPlugin({
            languages: ["css", "html", "javascript", "json", "less", "typescript", "php", "pug", "scss", "xml", "razor", "csharp"],
            // features: ["codeAction", "colorPicker", "comment", "contextmenu", "find",'coreCommands',  "folding", "format", "inPlaceReplace", "indentation", "inlayHints", "inlineCompletions", 'gotoError', 'gotoLine', 'gotoSymbol', 'quickHelp', 'quickOutline', "parameterHints", "rename", "snippets", "suggest",'wordHighlighter', 'wordOperations', 'wordPartOperations' ],
            globalAPI: true
        })
    ]
};