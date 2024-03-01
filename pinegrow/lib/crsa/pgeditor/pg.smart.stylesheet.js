var PgSmartStylesheet=function(){var n=null,r=null,s=(require("node-sass"),{}),i=(this.addPart=function(t,e){s[t]=e},this.updatePart=function(t){},function(t,e){return`/* Part: ${t} ${e?"End":"Begin"} */`});this.update=function(){new CrsaProfile;n="",$.each(s,function(t,e){n+=i(t)+"\n"+e+"\n"+i(t,!0)+"\n\n"}),r&&(r.setNeedFormatting(!0),r.setSource(n,function(){r.loaded=!0,pinegrow.dispatchEvent("on_css_source_changed",null,{list:[r],eventType:"smart"}),$("body").trigger("crsa-stylesheets-properties-changed")}))},this.init=function(){var t=pinegrow.getCurrentProject(),e=t.getAbsoluteUrl("assets/scss/components.scss");r=pinegrow.stylesheets.getByUrl(e),console.log("SmartCSS",r),t.smartStylesheet=this}},PgSmartScript=function(){function t(t,e){return`/* Part: ${t} ${e?"End":"Begin"} */`}var s={};this.addPart=function(t,e,n){s[t]=e;var r=n.getPage();r&&pinegrow.executeScriptInPage(r,e)},this.updatePart=function(t){};this.update=function(){new CrsaProfile;$.each(s,function(t,e){0})},this.init=function(){var t=pinegrow.getCurrentProject();t.getAbsoluteUrl("assets/js/components.js");t.smartScript=this}};$(function(){$("body").one("pinegrow-ready",function(t,e){var n;!1&&pgIsDev()&&pgf.smart_blocks&&(e.showQuickError("Experimental Blocks are active! Should not be in release version."),n=new PgSmartStylesheet,e.addEventHandler("on_page_stylesheets_loaded",function(t){n.init(),n.addPart("bubi",`
h1 {
color: pink;
}
`),n.addPart("miskolin",`
p {
font-size:20px;
}
`),n.update()}))})});