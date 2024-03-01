$('body').one('pinegrow-ready', function (e, pinegrow) {

    class pgMonacoIntellisense {
        pg;
        jquery;
        window;
        focusedUrl;
        Context = {
            frameworks: {
                tw: [],
                bs: [],
                foundation: []
            },
            paths: []
        }
        canComplete = /(id|class|className)\s*=\s*("|")(?:(?!\2).)*$/si;
        findLinkHref = /(href|src)\s*=\s*("|")((?:(?!\1).)+)\1/si;
        monaco;

        constructor(monaco) {
            this.monaco = monaco;
            this.init();
        }

        init() {
            let checkState = setInterval(() => {
                if (document.readyState == 'complete') {
                    try {
                        clearInterval(checkState);
                        let $this = this
                        if (window.opener == undefined) {
                            $this.jquery = $;
                            $this.window = window;
                            $this.pg = (() => pinegrow)();
                        } else {
                            $this.jquery = (() => window.opener.pgEditorAttributeIntellisense.jquery)()
                            $this.pg = (() => window.opener.pgEditorAttributeIntellisense.pg)()
                            $this.window = (() => window.opener.pgEditorAttributeIntellisense.window)()
                            $this.Context = (() => window.opener.pgEditorAttributeIntellisense.Context)()
                        }

                        $this.pg.addEventHandler('on_page_closed', function (page) {
                            if ($this?.Context[page.url]?.htmlIntellisense) {
                                $this.Context[page.url].htmlIntellisense.dispose();
                                $this.clearContext(page.url, false);
                            }
                        });

                        // $this.pg.addEventHandler('on_page_loaded', async function (page, project) {
                        //     await $this.setHtmlCompletion(page.url, null, "html");
                        // });

                        $this.pg.addEventHandler('on_project_loaded', async function (page, project) {
                            // await $this.setHtmlCompletion(window, page.url);
                        });

                        $this.pg.addEventHandler('on_project_closed', async function (page) {
                            await $this.clearContext(null, true);
                        });

                    } catch (e) {
                        console.log(e)
                    }
                }
            }, 500)

        }

        /**
         * @param {string} url
         * @param {monaco} m
         * @param {string} mode
         * **/
        async setHtmlCompletion(url, m, mode) {
            try {
                switch (mode) {
                    case "html":
                    case "php":
                        let editor;
                        let $this = this

                        if (!$this.Context[url]) {
                            $this.Context[url] = Object.create(null);
                            $this.Context[url].classes = []
                            $this.Context[url].ids = []
                            $this.Context[url].mode = mode;
                        } else {
                            // if ($this?.Context[url]?.mode !== mode && $this?.Context[url]?.htmlIntellisense) {
                            $this?.Context[url]?.htmlIntellisense?.dispose();
                            // $this?.Context[url]?.htmlIntellisense = null;
                            // }
                        }

                        if (m) {
                            editor = m;
                        } else {
                            editor = this.monaco
                        }

                    /**
                     *
                     * @param {editor.ITextModel} model
                     * @param {Position} position
                     * @param {CompletionContext} context
                     * @param {CancellationToken} token
                     */
                    async function completion(model, position, context, token) {
                        if ($this.focusedUrl == url) {
                            let word = model.getWordUntilPosition(position);

                            let range = {
                                startLineNumber: position.lineNumber,
                                endLineNumber: position.lineNumber,
                                startColumn: model.getLineMinColumn(position.lineNumber),
                                endColumn: position.column
                            }

                            let currentLine = model.getValueInRange(range);

                            let callSuggestions = currentLine.match($this.canComplete);

                            range.startColumn = word.startColumn;
                            range.endColumn = word.endColumn;

                            if (callSuggestions) {
                                switch (callSuggestions[1]) {
                                    case "class":
                                    case "classname":
                                        await $this.getStyleSheets(range, url);
                                        let intellisenseDataClass = $this.Context[url].classes
                                        return {suggestions: intellisenseDataClass.length > 0 ? intellisenseDataClass : []}
                                    case "id":
                                        await $this.getIds(range, url)
                                        let intellisenseDataId = $this.Context[url].ids
                                        return {suggestions: intellisenseDataId.length > 0 ? intellisenseDataId : []}
                                    default:
                                        return {suggestions: []}
                                }
                            } else {
                                if (currentLine.match($this.findLinkHref)) {
                                    await $this.getPaths(range);
                                }
                            }
                        }
                    }

                        /**@var {monaco.IDisposable}*/
                        $this.Context[url].htmlIntellisense = editor.languages.registerCompletionItemProvider(mode, {
                            provideCompletionItems: await completion,
                            triggerCharacters: [":", " ", ""]
                        })
                        break;
                }
            } catch (e) {
                console.log(e)
            }

        }

        /**
         * @description Use this to clear store completion item on close page or project
         * **/
        clearContext(url, isProject) {

            let $this = this;

            if (isProject) {
                $this.Context.paths = [];
                $this.Context.frameworks = {
                    tw: [],
                    bs: [],
                    foundation: []
                }
                return;
            }

            $this.Context[url].htmlIntellisense.dispose();
            delete $this.Context[url];
        }

        async getStyleSheets(range, url) {
            try {
                let $this = this;
                let frameworkSet = new Set();
                let frameworkClasses;

                let page = $this.pg.getCrsaPageForUrl(url)
                page.getStylesheets();
                let pageStyles = $this.pg.insight.getClassesForPage(page)

                let isTw = page.findFrameworkOfType('tailwind');

                $this.Context[url].classes = []
                await Array.from(pageStyles).forEach(classes => {
                    /**@var {monaco.languages.CompletionItem}**/
                    let completeItem = {
                        label: classes?.name ?? classes,
                        kind: this.monaco.languages.CompletionItemKind.Class,
                        detail: classes?.sources ? classes?.sources[0] : null,
                        insertText: classes?.name ?? classes,
                        insertTextRules: this.monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        range: range
                    }
                    $this.Context[url].classes.push(completeItem)
                });

                if (isTw) {
                    let getTwList = isTw.getAllTWClasses();
                    $this.Context.frameworks.tw = [];

                    Array.from(getTwList).forEach(twClasses => {
                        if (!twClasses.match(/^-\w+/ig)) {
                            /**@var {monaco.languages.CompletionItem}**/
                            let completeItem = {
                                label: twClasses?.name ?? twClasses,
                                kind: this.monaco.languages.CompletionItemKind.Class,
                                detail: twClasses?.sources ? twClasses?.sources[0] : null,
                                insertText: twClasses?.name ?? twClasses,
                                insertTextRules: this.monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                                range: range
                            }
                            $this.Context.frameworks.tw.push(completeItem)
                        }

                    });

                    frameworkSet = new Set($this.Context.frameworks.tw.map(l => l.label))
                    frameworkClasses = $this.Context.frameworks.tw;

                    let merged = [...frameworkClasses, ...$this.Context[url].classes.filter(d => !frameworkSet.has(d.label))]
                    $this.Context[url].classes = merged;

                }
            } catch (e) {
                console.log(e)
            }
        }

        async getIds(range, url, page) {
            try {
                let $this = this;

                let ids = $this.pg.insight.getValuesForAttribute('id')
                // if(ids.length !== $this.Context[url].ids.length ){
                $this.Context[url].ids = [];
                await Array.from(ids).forEach(id => {
                    /**@var {monaco.languages.CompletionItem}**/
                    let completeItem = {
                        label: id.name,
                        kind: this.monaco.languages.CompletionItemKind.Variable,
                        insertText: id.name,
                        insertTextRules: this.monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        range: range
                    }
                    $this.Context[url].ids.push(completeItem)

                });
            } catch (e) {
                console.log(e)
            }
        }

        async getPaths(range, win) {

        }

        /**
         * @param {CrsaFile[]} project
         * */
        async crawlProject(project) {
            let $this = this;
            let excludeFolders = ["_pgbackup", "_pginfo", "node_modules", "bin", "obj"];

            project.forEach((ctx) => {
                let path = $this.Context.paths
                let getFolder = ctx.path.replace(this.projectRoot, "").split(this.separator);

                if (!excludeFolders.includes(ctx.name))
                    if (ctx.isFile) {

                        switch (getFolder.length) {
                            case 0:
                                if (!path["/"]) {
                                    path["/"] = new FileInfo();
                                }
                                path["/"].files.push(ctx);
                                path = path["/"].folders
                                break;

                            default:
                                getFolder.forEach((file, index) => {
                                    if (!path[file] && ctx.name !== file) {
                                        path[file] = new FileInfo();
                                    } else {
                                        if (!path.files)
                                            path = new FileInfo()
                                    }

                                    if (getFolder[getFolder.length - 1] == getFolder[index])
                                        path.files.push(file);

                                    path = path[file].folders
                                })


                                break;
                        }


                    } else {
                        let arr = getFolder.reverse();

                        for (const arrKey of arr) {
                            if (arrKey.length == 0) {
                                if (!path["/"]) {
                                    path["/"] = new FileInfo();
                                }
                                path = path["/"].folders
                            }
                        }
                        this.crawlProject(ctx.children);
                    }

            })
        }
    }

    window.pgMonacoIntellisense = pgMonacoIntellisense;

})

