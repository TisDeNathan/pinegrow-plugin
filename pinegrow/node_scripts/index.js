if(!isApp()) {
    function dynamicallyLoadScript(url) {
        var script = document.createElement("script");
        script.src = url;

        document.head.appendChild(script);
    }

    // Add scripts
    //dynamicallyLoadScript("node_scripts/postcss/index.js");

    //used in dart-sass
    window.Buffer = {
        from: function(data) {
            return data;
        }
    }

    window.require = function(what) {
        switch (what) {
            case 'nw.gui':
                return {
                    Window: {
                        get: function() {
                            return {
                                window: window,
                                on: function() {

                                },
                                off: function() {

                                }
                            }
                        }
                    },
                    Clipboard: {
                        get: function() {
                            return {
                                get: function() {
                                    return '';
                                }
                            }
                        },
                        aaaget: async function() {
                            return await navigator.clipboard.readText();
                        }
                    }
                }
            case 'path':
                return {
                    sep: '/',
                    basename: function(file) {
                        return crsaGetNameFromUrl(file);
                    },
                    dirname: function(file) {
                        return crsaGetBaseForUrl(file);
                    }
                }
            case 'url':
                return {
                    resolve: function(base, url) {
                        return (new URL(url, base)).toString();
                    }
                }
            case 'postcss':
                return window.postcss;
            case 'dart-sass':
                return window.dartSass;
            default:
                return null;
        }
    }
}