"use strict";const path=require("node:path"),runnerPath=path.join(__dirname,"runner").replace(/\\/g,"/");require.extensions[".scss"]=(e,r)=>{var n=r.replace(/\\/g,"/");return e._compile(`
    const runner = require('${runnerPath}')
    runner('${n}', { describe, it })
    `,r)};