class PgSimpleJsParser{constructor(e){this.code_aware_pairs=[["/*","*/"],["//","\n"],['"','"'],["'","'"]],this.code_aware_triggers=/[\'\"\/]/,this.parse(e)}parse(e){this.tokens=this.split(e,"{")}getCode(){return this.tokens.join("{")}findTokenIndexForProp(e,t,o){void 0===t&&(t=0),void 0===o&&(o=this.tokens.length-1);var r=new RegExp("(^|[\\s\\n,])"+pgParserEscapeRegExp(e)+"\\:\\s*$");for(let s=t;s<=o;s++)if(this.tokens[s].match(r))return s+1;return-1}findEndTokenForProp(e){if(0<=e)for(var t=e,o=0,r=0,s=!1;1&&t!==this.tokens.length;){var n=this.indexOf(this.tokens[t],"}",o);if(0<=n){if(0===r){s=!0;break}r--,o=n}else t++,r++}return s?{token_idx:t,close_char_idx:n}:null}quote(e){var t=0<=e.indexOf("'")?'"':"'";return t+e+t}objToString(e){if(Array.isArray(e)){for(var t="[",o=0;o<e.length;o++)t+=this.objToString(e[o])+`,
`;return t+="]"}if("object"==typeof e){var r,t="{";for(r in e){var s=r;t+=`${s=r.match(/[0-9\s\-]/)?`'${r}'`:s}: ${this.objToString(e[r])},\n`}return t+="}"}if("number"==typeof e||"string"==typeof e)return this.quote(e)}setProp(e,t){var o=this.objToString(t),r=e.split(".");if(2===r.length){var s=this.findTokenIndexForProp(r[0]),n=this.findEndTokenForProp(s);if(!n)return console.log(`Unable to find parent property `+r[0]),!1;if(e=r[1],(i=this.findTokenIndexForProp(e,s,n.token_idx))<0)return d=this.addProp(e,o,s),n.token_idx+=d.tokens.length,!((i=this.findTokenIndexForProp(e,s,n.token_idx))<0&&(console.log(`Unable to add property ${r[0]}.${e} to JS code`),1))}else var i=this.findTokenIndexForProp(e);var d=this.findEndTokenForProp(i);if(d){s=d.token_idx,n=d.close_char_idx,r=new PgSimpleJsParser(o),d=(this.tokens[s]=this.tokens[s].substr(n+1),0<s-i&&this.tokens.splice(i,s-i),r.tokens.pop());this.tokens.splice(i,0,...r.tokens),this.tokens[i+r.tokens.length]=d+this.tokens[i+r.tokens.length];try{new Function(this.getCode())}catch(e){return console.log("Unable to update JS code",e),!1}return!0}return!1}addProp(e,t,o){var r=new PgSimpleJsParser(e+`: ${t},`),s=r.tokens.pop();return this.tokens.splice(o,0,...r.tokens),this.tokens[o+r.tokens.length]=s+this.tokens[o+r.tokens.length],r}split(e,t){return splitCodeAware(e,t,this.code_aware_pairs,this.code_aware_triggers)}indexOf(e,t,o){return indexOfCodeAware(e,t,o||0,this.code_aware_pairs,this.code_aware_triggers)}}class PgSimpleJsParserTest{constructor(){}test1(){var e=`module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
`,t=new PgSimpleJsParser(e);console.log(t.getCode(),t.getCode()===e),t.setProp("extend",{red:"red",blue:"blue"}),console.log(t.getCode(),t.getCode()===e)}test2(){var e=`module.exports = {
  content: [],
  theme: {
    extend: {
        colors: {
            pink: 'pink',
            miskolin: 'miskolin'
        }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
`,t=new PgSimpleJsParser(e);console.log(t.getCode(),t.getCode()===e),t.setProp("colors",{red:{100:"100"}}),console.log(t.getCode(),t.getCode()===e)}test3(){var e=`module.exports = {
  content: [],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
`,t=new PgSimpleJsParser(e);console.log(t.getCode(),t.getCode()===e),t.setProp("extend.colors",{red:{100:"100"}}),t.setProp("extend.colors",{blue:{100:"100"}}),console.log(t.getCode(),t.getCode()===e)}}