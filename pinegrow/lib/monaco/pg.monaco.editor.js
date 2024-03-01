$('body').one('pinegrow-ready', function (e, pinegrow) {
// noinspection JSConstantReassignment

    /*** PEP monaco features
     * Spell check
     * linting
     * javascript intellisense
     * vue syntax and validation
     * create single instance for main editor
     * */

    /**
     * @summary
     * Shortcut
     * Alt + S => select element on page
     * Alt + leftClick => select element on page
     * */
    class PgMonacoEditor {
        saver = null;
        html = null;
        css = null;
        editorsArr = [];
        emmetIsEnabled = false;
        autoSuggestion = false;
        editorTheme = 'Dark';
        editorFont = 'monospace';
        editorFontSize = '12px';
        editorIndentSize = 2;
        editorIndentTab = 2;
        renderIndentGuide = true;
        languages = monaco.languages.getLanguages();
        editorCounter = 0;
        isEditor = false;
        isWindows = false;
        errorHint = {};
        actions = {};
        /**@var{monaco}*/
        monaco;
        /**
         * @var {IStandaloneCodeEditor}
         * */
        mainInstance = null;
        checkForErrors = false;

        constructor() {
            try {
                let pg;
                let editors;
                let win;

                // Set emmet
                this.ToggleEmmet();

                //set auto complete
                //let checkAutoSuggest = localStorage.getItem('settings-code-autocomplete');
                let checkAutoSuggest = pinegrow.getSetting('code-autocomplete', '1');

                this.autoSuggestion = checkAutoSuggest === '1';

                //set editor font family
                let fontFamily = localStorage.getItem('settings-code-font');
                this.editorFont =
                    fontFamily === '' ? this.editorFont : fontFamily;

                //set editor font size
                this.editorFontSize = localStorage.getItem(
                    'settings-code-size',
                );

                //set editor theme
                this.editorTheme = localStorage.getItem(
                    'settings-code-theme-cm',
                );

                //set editor indent size
                this.editorIndentSize = localStorage.getItem(
                    'settings-html-indent-size',
                );

                //set editor indent tab
                this.editorIndentTab = localStorage.getItem(
                    'settings-html-indent-tabs',
                );

                this.renderIndentGuide = localStorage.getItem(
                    'settings-html-indent-guide') == '1' ? true : false;

                //set os check
                this.isWindows = navigator.appVersion.indexOf('Win') > 0;

                let menus = monacoActions.MenuRegistry._menuItems;
                let contextMenuEntry = [...menus].find(
                    //entry => entry[0]._debugName == 'EditorContext');
                    entry => entry[0].id === 'EditorContext');
                let contextMenuLinks = contextMenuEntry[1];

                let removableIds = ['editor.action.quickCommand'];

                let removeById = (list, ids) => {
                    let node = list._first;
                    do {
                        let shouldRemove = ids.includes(node.element?.command?.id);
                        if (shouldRemove) {
                            list._remove(node);
                        }
                    } while ((node = node.next));
                };

                removeById(contextMenuLinks, removableIds);

                let checkState = setInterval(() => {
                    if (document.readyState === 'complete') {
                        try {
                            clearInterval(checkState);
                            if (window.pinegrow !== undefined) {
                                pg = (() => pinegrow)();
                                editors = monacoInstance;
                                win = (() => window)();
                            } else {
                                pg = (() => window.opener.pinegrow)();
                                editors = window.opener.monacoInstance;
                                win = (() => window.opener)();
                            }


                            function closeEditor() {
                                let getEditor = monaco.editor.getModels();

                                getEditor.forEach((val, i) => {
                                    if (i !== 0) {
                                        val.dispose();
                                    }
                                });
                            }

                            pg.addEventHandler('on_project_loaded', closeEditor);
                            pg.addEventHandler('on_project_closed', closeEditor);

                            pg.addEventHandler('on_panel_moved_in_another_window',
                                async (w) => {
                                    try {
                                        if (editors.editorsArr.length > 0) {
                                            for (const editorsArrElement of editors.editorsArr) {
                                                let file = crsaMakeFileFromUrl(editorsArrElement);
                                                await pg.openFileInCodeEditor(file);
                                            }
                                            editors.editorsArr = [];
                                        }
                                    } catch (e) {
                                        console.log(e);
                                    }
                                });

                            //this is used to fix the error when mouse leaves intellisense
                            win.addEventListener('unhandledrejection', function (event) {
                                if (event.reason && event.reason.name === 'Canceled') {
                                    event.preventDefault();
                                }
                            });

                            this.onActivation(win.monaco);
                        } catch (e) {
                            // console.log(e)
                        }
                    }
                }, 500);

            } catch (e) {
                console.log(e);
            }
        }

        /**
         * @description used to enable/disable emmet in the editor
         * **/
        ToggleEmmet = (isEnabled) => {
            switch (isEnabled) {
                case true:
                    this.html = emmet.emmetHTML(monaco);
                    this.css = emmet.emmetCSS(monaco);
                    break;

                case false:
                    if (this.html != null) {
                        this.html();
                        this.css();
                        this.html = null;
                        this.css = null;
                    }
                    break;

                default:
                    let checkEmmetStatus = localStorage.getItem('settings-editor-emmet');
                    this.ToggleEmmet(checkEmmetStatus === 'true');
                    break;
            }
        };

        /***
         * @param {editor.IStandaloneCodeEditor} editor
         * @description This is used to handle open and closing brackets
         * */
        autoCloseTags = (editor = null) => {

            let arr = ['html', 'razor', 'php', 'xml'];
            let model = editor.getModel(); // moved here to prevent it loading on event

            editor.onKeyUp(function (e) {
                // auto tag closing for html alike
                //not sure why, but the code for > and . in the monaco event was same - 84
                if (
                    e.keyCode === monaco.KeyCode.US_DOT && // added this back because in some cases the key it sees is a dot and value shown is >
                    arr.includes(model._languageIdentifier.language)
                ) {
                    //use try in case anything goes wrong
                    try {
                        //get position and word only if we need it
                        let position = editor.getPosition();
                        let word = model.getWordUntilPosition(position);

                        var line = model.getValueInRange({
                            startColumn: model.getLineMinColumn(position.lineNumber),
                            endColumn: word.endColumn,
                            startLineNumber: position.lineNumber,
                            endLineNumber: position.lineNumber,
                        });

                        //let regex = /<(\w+)(?:\s.+)?>$/; didn't match the last tag
                        let regex = /<(\w+)([^>]*)?>$/;

                        var m = line.match(regex);
                        if (m) {
                            let content;
                            let tag = m[1];
                            let isSingleTag = pgSingleTags.includes(tag.toLowerCase());

                            if (!isSingleTag) {
                                content = '</' + tag + '>';
                            }

                            if (content) {
                                //just call this is we actually have the content to insert
                                editor.trigger('setting', 'type', {text: content});
                                if (position.lineNumber !== 1) {
                                    editor.setPosition(position);
                                }
                            }
                        }
                    } catch (err) {
                        //console.error(err);
                    }
                }
            });

        };

        /***
         * @param {string} url
         * @param {window} w
         * @description This is used to handle open and closing brackets
         * */
        getLang = (url, w) => {
            try {
                let lsp = 'html';
                if (url) {
                    // check if url exist
                    let fileEXT = crsaGetExtFromUrl(url);
                    let mimeType = pinegrow.getMimeType(url);
                    // testing smart language selector
                    let lang = this.languages;

                    Array.from(lang).find((val, i) => {
                        if (val?.mimetypes?.includes(mimeType) ||
                            val?.aliases?.includes(fileEXT)) {
                            if (['javascript', 'typescript'].includes(lang[i].id)) {
                                let isTs = lang[i].id === 'typescript';
                                // this.jsConfig(w, isTs);
                            }
                            return (lsp = lang[i].id);
                        }

                        if (crsaIsRemoteUrl(url)) {
                            lsp = "html"
                        } else {
                            lsp = 'plaintext';
                        }

                    });
                } else {
                    let openPage = pinegrow.getSelectedPage();
                    if (openPage)
                        lsp = this.getLang(openPage.url);
                }

                return lsp;
            } catch (e) {
                console.log(e);
            }

        };

        /**
         * @param {string||null} url
         * @param {window} win
         * @param {number||null} id
         * @param {Element} element
         * @param {boolean} let_monaco_handle_undo
         * @param {string} mode
         * @return IStandaloneCodeEditor
         * @description Use this to create editor
         * */
        openEditor = (
            url, id = null, win, element = null,
            let_monaco_handle_undo = false, mode = null) => {
            try {
                let pgWindow;
                let pgDocument;
                let monaco;
                let lsp;
                let editor;

                if (win) {
                    // set window data
                    pgWindow = win;
                    pgDocument = pgWindow.document;
                    monaco = pgWindow.monaco;
                }

                lsp = mode ?? this.getLang(url, pgWindow);
                let section;

                /** @var {IStandaloneEditorConstructionOptions}*/
                let editorOption = {
                    contextmenu: true,
                    // lightbulb: {enabled: true},
                    "semanticHighlighting.enabled": true,
                    autoIndent: 'full',
                    acceptSuggestionOnEnter: 'smart',
                    autoClosingOvertype: 'always',
                    autoClosingBrackets: 'always',
                    autoClosingQuotes: 'always',
                    autoSurround: 'languageDefined',
                    automaticLayout: true,
                    autoDetectHighContrast: true,
                    smoothScrolling: true,
                    // hover: {enabled: true, delay: 700},
                    disableMonospaceOptimizations: true,
                    fontLigatures: false, //true, stuff like #ffffff is not nice with ligatures, might also have performance hit
                    wordBasedSuggestions: true,
                    comments: {
                        ignoreEmptyLines: true,
                        insertSpace: true,
                    },
                    parameterHints: {enabled: true, cycle: true},
                    // renderControlCharacters: true,
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    colorDecorators: true,
                    largeFileOptimizations: true,
                    folding: true,
                    fixedOverflowWidgets: true,
                    codeLens: false,
                    insertSpaces: true,
                    detectIndentation: true,
                    snippetSuggestions: 'bottom',
                    inlineHints: {enabled: true},
                    letterSpacing: 0,
                    find: {seedSearchStringFromSelection: true},
                    links: false,
                    linkedEditing: false,
                    quickSuggestionsDelay: 500,
                    trimAutoWhitespace: true,
                    renderWhitespace: 'none',
                    padding: {top: 0, bottom: 0},
                    matchBrackets: 'always',
                    showDeprecated: true,
                    wrappingIndent: 'indent',
                    wrappingStrategy: 'simple',
                    renderLineHighlight: 'line',
                    smartSelect: {selectLeadingAndTrailingWhitespace: true},
                    useShadowDOM: true,
                    showUnused: true,
                    renameOnType: true,
                    glyphMargin: true,
                    scrollbar: {alwaysConsumeMouseWheel: true, useShadows: false},
                    quickSuggestions: this.autoSuggestion,
                    renderIndentGuides: this.renderIndentGuide,
                    tabSize: this.editorIndentSize,
                    fontSize: this.editorFontSize,
                    fontFamily: this.editorFont,
                    theme: this.editorTheme ?? 'Dark',
                    minimap: {enabled: false},
                    language: lsp,
                    value: '',
                    unicodeHighlight: {
                        ambiguousCharacters: false,
                    },
                };

                this.monaco = monaco;

                if (element) {
                    section = element[0];
                } else {
                    let sec = pgDocument.getElementsByClassName(`pg-page-code-editor`);
                    section = sec[sec.length - 1];
                    // editorOption.model = monaco.editor.createModel("", lsp, new monaco.Uri().with({path:url}));
                }

                editor = monaco.editor.create(section, editorOption);

                this.autoCloseTags(editor);

                if (url && win.opener) {
                    pgEditorAttributeIntellisense.setHtmlCompletion(url, monaco, lsp);
                }

                if (!pgWindow.pinegrow) {
                    pgWindow = pgWindow.opener;
                }

                // if( !let_monaco_handle_undo ){
                //   editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_Z,
                //       function() {
                //         pgWindow.pinegrow.undoManager.undo();
                //       });
                //
                //   editor.addCommand(
                //       monaco.KeyMod.Shift | monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_Z,
                //       function() {
                //         pgWindow.pinegrow.undoManager.redo();
                //       });
                // }

                editor.$el = section;

                this.actions(lsp, editor, pgWindow, let_monaco_handle_undo);

                return editor;
            } catch (e) {
                console.log(e);
            }
        };

        // todo PEP create a way to handle linting in monaco
        /**
         * @description Use this to enable lining in editor
         * **/
        linting = () => {
        };

        /**
         * @param {string} lsp
         * @param  editor
         * **/
        actions = (lsp, editor, window, let_monaco_handle_undo) => {
            let _this = this;
            //we need undo for all page types
            if (!let_monaco_handle_undo) {
                _this.actions['PGUndo'] = 'pinegrow.editor.undo';
                editor.addAction({
                    id: _this.actions.PGUndo,
                    label: 'PG Undo',
                    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_Z],
                    run: (editor, ...fn) => {
                        // fn()
                        window.pinegrow.undoManager.undo();
                    },
                });

                _this.actions['PGRedo'] = 'pinegrow.editor.redo';
                editor.addAction({
                    id: _this.actions.PGRedo,
                    label: 'PG Undo',
                    keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_Z],
                    run: (editor, ...fn) => {
                        // fn()
                        window.pinegrow.undoManager.redo();
                    },
                });
            }

            try {
                switch (lsp) {
                    case 'html':


                        //todo PEP move auto close tag to action
                        /*
                      _this.actions['autoCloseTag'] = 'pinegrow.editor.html.autoCloseTag';
                      editor.addAction({
                        id: _this.actions.autoCloseTag,
                        label: 'Auto close tag',
                        run( editor, ...args ) {
                          let arr = [ 'html', 'razor', 'php', 'xml' ];

                          editor.onKeyUp(function( e ) {

                            let model = editor.getModel();
                            if(
                                e.browserEvent.key === '>' &&
                                arr.includes(
                                    model._languageIdentifier.language)
                            ){
                              try{
                                let position = editor.getPosition();
                                let word = model.getWordUntilPosition(
                                    position);

                                let line = model.getValueInRange({
                                  startColumn: model.getLineMinColumn(
                                      position.lineNumber),
                                  endColumn: word.endColumn,
                                  startLineNumber: position.lineNumber,
                                  endLineNumber: position.lineNumber,
                                });

                                let regex = /<(\w+)>$/;

                                let m = line.match(regex);
                                if( m ){
                                  let content;
                                  let tag = m[1];
                                  let isSingleTag = pgSingleTags.includes(
                                      tag.toLowerCase());

                                  if( !isSingleTag ){
                                    content = '</' + tag + '>';
                                  }

                                  if( content ){
                                    //just call this is we actually have the content to insert
                                    editor.trigger('setting',
                                        'type', { text: content });
                                    if( position.lineNumber !== 1 ){
                                      editor.setPosition(
                                          position);
                                    }
                                  }
                                }
                              } catch( err ){
                                console.error(err);
                              }

                            }
                          });
                        },
                      });
            */

                        //Todo PEP Section for html linter for PG will need more improvement
                        _this.actions['errorPointer'] = 'pinegrow.editor.html.errorPointer';
                        editor.addAction({
                            id: _this.actions.errorPointer,
                            label: 'Error Pointer',
                            run(editor, ...args) {
                                try {
                                    if(!editor.pgCheckForErrors) return;

                                    //var prof = new CrsaProfile();
                                    let model = editor.getModel();

                                    let p = new pgParser();

                                    p.parse(model.getValue());

                                    let errors = p.rootNode.validateTree();

                                    // Cache lint errors detected per editor
                                    if (!_this.errorHint[model.uri]) {
                                        _this.errorHint[model.uri] = {};
                                    }

                                    /**
                                     * @description use to check and clear glyph decorators from the editor
                                     * **/
                                    function clearGlyph() {
                                        let clear = _this.errorHint[model.uri];
                                        for (const clearKey in clear) {
                                            /**@var{IModelDeltaDecoration[]} **/
                                            let getDecor = model.getLineDecorations(parseInt(clearKey))
                                            let decorContent = getDecor[getDecor.length - 1]
                                            /**@var{Range}**/
                                            let range = decorContent.range
                                            range.startColumn = 0;

                                            let content = model.getValueInRange(range).trim()

                                            p.parse(content.trim())
                                            let validate = p.validate()

                                            if (validate.length > 0 && (validate[0].isValidTag() || content.length == 0)) {
                                                editor.deltaDecorations(clear[clearKey], []);
                                                delete clear[parseInt(clearKey)];
                                            }
                                            if (content.length == 0) {
                                                editor.deltaDecorations(clear[clearKey], []);
                                                delete clear[parseInt(clearKey)];
                                            }
                                        }

                                        if (errors.length == 0) {
                                            for (const clearKey in clear) {
                                                editor.deltaDecorations(clear[clearKey], []);
                                                delete clear[parseInt(clearKey)];
                                            }
                                        }
                                    }

                                    if (errors.length > 0) {

                                        for (let i = 0; i < errors.length; i++) {
                                            const errorsKey = errors[i];

                                            let getPositions = errorsKey.getPositionInSource();

                                            let posStart = model.getPositionAt(getPositions.start);
                                            let posEnd = model.getPositionAt(getPositions.end);

                                            if (!(errorsKey.isValidTag(true) && errorsKey.isValidTag())) {
                                                let line;

                                                function addDecor(range, line = null,) {
                                                    /**@var {editor.IModelDeltaDecoration}**/
                                                    let configBase = {
                                                        range: range,
                                                        options: {
                                                            isWholeLine: true,
                                                            minimap: {color: 'red'},
                                                            inlineClassName: 'monacoGlyphs'
                                                        },
                                                    };
                                                    /**@var {editor.IModelDeltaDecoration}**/
                                                    let config = configBase

                                                    /**@param {editor.IModelDeltaDecoration} cfg
                                                     * @param {number|null} singleLine
                                                     * **/
                                                    function add(cfg, singleLine = null) {
                                                        try {
                                                            let decoration;
                                                            if (singleLine) {
                                                                cfg.range.startLineNumber = cfg.range.endLineNumber = singleLine
                                                                cfg.range.startColumn = cfg.range.endColumn = 0
                                                            }

                                                            if (!_this.errorHint[model.uri][line ?? cfg.range.startLineNumber]) {
                                                                decoration = editor.deltaDecorations(
                                                                    [], [cfg]);
                                                            } else {
                                                                let oldDecor = _this.errorHint[model.uri][line ?? singleLine ?? cfg.range.startLineNumber]

                                                                decoration = editor.deltaDecorations(
                                                                    oldDecor, [cfg])
                                                            }
                                                            return decoration;
                                                        } catch (e) {
                                                            console.log(e)
                                                        }

                                                    }

                                                    if (line) {
                                                        config.options['glyphMarginClassName'] = 'errorIcon';
                                                        _this.errorHint[model.uri][line] = add(config, line);
                                                    } else {
                                                        let decorations = add(config)
                                                        //add range indicator
                                                        _this.errorHint[model.uri][posStart.lineNumber] = decorations;
                                                    }
                                                }

                                                // if (!errorsKey.isValidTag() && !errorsKey.isValidTag(true)) {
                                                //     addDecor(new monaco.Range(posStart.lineNumber, posStart.column, posEnd.lineNumber, posEnd.column));
                                                // } else
                                                if (!errorsKey.isValidTag()) {
                                                    line = posStart.lineNumber
                                                    addDecor(new monaco.Range(posStart.lineNumber, 1, posStart.lineNumber, 1), line);
                                                }

                                                if (!errorsKey.isValidTag(true)) {
                                                    line = posEnd.lineNumber
                                                    addDecor(new monaco.Range(posEnd.lineNumber, 1, posEnd.lineNumber, 1), line);
                                                }
                                            }
                                        }
                                    }
                                    clearGlyph()

                                    //prof.show('Check LINT')

                                } catch (e) {
                                    console.log(e);
                                }

                            },
                        });

                        //Todo PEP work on tag edit WIP
                        _this.actions['tagEdit'] = 'pinegrow.editor.tagEdit';
                        editor.addAction({
                            id: _this.actions.tagEdit,
                            label: 'edit tag',
                            run: (editor, ...args) => {
                                const tagNameReLeft = /<\/?[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*$/;
                                const tagNameRERight = /^[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*/;

                                let wordAtPosition = {
                                    oldWord: '',
                                    newWord: '',
                                };

                                // tag edit
                                let model = editor.getModel();
                                // let code = model.getValue();

                                let pos = editor.getPosition();
                                let word = model.getWordAtPosition(pos);

                                let find = model.findNextMatch(`(</${word}>)`, pos, true, true,
                                    null, true);
                                let selections = [];

                                //var text = editor.getValue(); getting the whole value is too much on each keystroke, especially because we don't actually need it
                                // var line = model.getValueInRange({
                                //     startColumn: model.getLineMinColumn(pos.lineNumber),
                                //     endColumn: word.endColumn,
                                //     startLineNumber: pos.lineNumber,
                                //     endLineNumber: pos.lineNumber
                                // });
                                //
                                // var idx = model.getOffsetAt(pos);
                                //
                                // if (f.length !== 0) {
                                //     Array.from(find).forEach(v => {
                                //         let range = v.range;
                                //         selections.push({
                                //             positionColumn: range.endColumn,
                                //             positionLineNumber: range.endLineNumber,
                                //             selectionStartColumn: range.startColumn,
                                //             selectionStartLineNumber: range.startLineNumber
                                //         })
                                //     });
                                //     if (selections.length > 0)
                                //         CodeEditorVsc.setSelections(selections);
                                // } else {
                                //     CodeEditorVsc.setSelection({
                                //         startColumn: 0,
                                //         startLineNumber: 0,
                                //         endColumn: 0,
                                //         endLineNumber: 0
                                //     });
                                // }

                                // monacoInstance.monaco.languages.provideSelectionRanges(model, new monacoInstance.monaco.position )
                                // var p = new pgParser();
                                // p.assignIds = false;
                                // p.parse(code, function () {
                                //     /**@var{pgParserNode}**/
                                //     let root = p.rootNode;
                                //     let currentSourceNode = root.findNodeAtSourceIndex(idx)
                                //     var sourcePos = currentSourceNode.getPositionInSource();
                                //     let findMatch = model.findMatches()
                                //
                                //     // currentSourceNode.replaceTag(currentSourceNode.tagName);
                                //
                                //     let html = root.toStringOriginal(true, pinegrow.getFormatHtmlOptions())
                                // });

                            },
                        });

                        //Todo PEP work on tag edit WIP
                        _this.actions['editSymbol'] = 'pinegrow.editor.editSymbol';
                        editor.addAction({
                            id: _this.actions.editSymbol,
                            label: 'PG Rename symbol',
                            run(editor, ...args) {
                                let d = monaco.languages.registerRenameProvider(
                                    lsp, {
                                        provideRenameEdits(
                                            model, position, newName, token) {
                                            let cursorPosition = editor.getPosition();
                                            let word = model.getWordAtPosition(
                                                cursorPosition);
                                        },
                                        resolveRenameLocation(
                                            model, position, token) {
                                            let cursorPosition = editor.getPosition();
                                            let word = model.getWordAtPosition(
                                                cursorPosition);
                                        },
                                    });
                            },
                        });


                        editor.onDidChangeModelContent((e) => {
                            //editor.getAction(_this.actions.tagEdit).run();

                            let errDet = setInterval(() => {
                                clearInterval(errDet);
                                editor.getAction(_this.actions.errorPointer).run();

                            }, 100);
                            // editor.getAction( _this.actions.editSymbol ).run();
                        });

                        break;
                }
            } catch (e) {
                console.log(e);
            }

        };

        /**
         * @param { monaco } monaco
         * @description This where every monaco registrations takes place
         * **/
        onActivation = (monaco) => {
            try {
                // Javascript Section-------------------------------------------------------------------------------
                let _this = this;

                monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);

                monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
                    {
                        target: monaco.languages.typescript.ScriptTarget.Latest,
                        allowNonTsExtensions: true,
                        allowJs: true,
                        alwaysStrict: true,
                        allowSyntheticDefaultImports: true,
                        allowUmdGlobalAccess: true,
                        checkJs: true,
                        downlevelIteration: true,
                        esModuleInterop: true,
                        importHelpers: true,
                        allowUnreachableCode: false,
                        allowUnusedLabels: false,
                        moduleResolution: 'node',
                        module: 'ES2020',
                        types: ['node'],
                    },
                );

                monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
                    {
                        noSemanticValidation: false,
                        noSyntaxValidation: false,
                        noSuggestionDiagnostics: false,
                    },
                );

                // Javascript Section End---------------------------------------------------------------------------

                // CSS Section End--------------------------------------------------------------------------------


                // CSS Section -----------------------------------------------------------------------------------

                monaco.languages.css.cssDefaults.setModeConfiguration({
                    diagnostics: true, documentHighlights: true,
                    completionItems: true, colors: true, hovers: false
                });

                monaco.languages.css.cssDefaults.setOptions({
                    validate: true,
                    lint: {
                        emptyRules: 'warning',
                    },
                });

                // CSS Section End--------------------------------------------------------------------------------


                // HTML Section -----------------------------------------------------------------------------------
                // Set formatter to work with pg default html config

                monaco.languages.registerDocumentFormattingEditProvider("html", {
                    displayName: " PG Formatter",
                    provideDocumentFormattingEdits(model, options, token) {
                        return [{
                            text: pinegrow.formatHtml(model.getValue()),
                            range: model.getFullModelRange()
                        }]
                    }
                });

                monaco.languages.html.htmlDefaults.setModeConfiguration({
                    diagnostics: true,
                    completionItems: true,
                    documentHighlights: true, rename: true, hovers: false
                });

                monaco.languages.html.htmlDefaults.setOptions({
                    data: {useDefaultDataProvider: true},
                    format: {
                        tabSize: _this.editorIndentSize,
                    },
                });
                // HTML Section End--------------------------------------------------------------------------------


            } catch (e) {
                console.log(e)
            }
        }

    }

    window.pgMonaco = PgMonacoEditor;
    window.monacoInstance = new pgMonaco();
    window.pgMonacoIntellisense = pgMonacoIntellisense;
    window.pgEditorAttributeIntellisense = new pgMonacoIntellisense(monaco);
})