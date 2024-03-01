class PgPublishProvider{constructor(e){this.name=e}}class PgPublishProviderNetlify extends PgPublishProvider{constructor(){super("Netlify")}hasAuthSettings(){return!!this.getAuthSettings().token}getAuthSettings(){return{token:pinegrow.getKey("netlify-token")}}saveAuthSettings(e){pinegrow.storeKey("netlify-token",e.token||null)}withAuthSettings(e){this.hasAuthSettings()?e():this.authSettings(e)}async callApi(e,t,i,s){const n=this;var o=`https://api.netlify.com/api/v1/`+e,a={method:t,mode:"cors",headers:{"Content-Type":s=s||"application/json",Authorization:`Bearer `+this.getAuthSettings().token}},o=(i&&(a.body="application/json"===s?JSON.stringify(i):i),await fetch(o,a));if(o.ok)return await o.json();throw 401===o.status&&pinegrow.showAlert(`<p>The access to your Netlify account was denied. The most likely reason is invalid access token.</p>`,"Unable to access Netlify","Cancel","Edit access token",null,function(){n.authSettings()}),(a=new Error).response=o,a}async getSites(){return await this.callApi("sites","GET")}authSettings(t){const i=this;var e=this.getAuthSettings().token,s="························",e={login:{type:"displayhtmlwithlabel",name:"Create an account",html:`<a href="https://app.netlify.com/signup" class="external pg-button" target="_blank">Create a free Netlify account</a>`},get_token:{type:"displayhtmlwithlabel",name:"Get the access token",html:`<a href="https://app.netlify.com/user/applications#personal-access-tokens" class="external pg-button" target="_blank">Go to the Netlify admin</a> and generate a personal security token. Copy the token and paste it below.`},token:{name:"Access token",type:"text",value:e=e&&s,validate:function(e,t,i){if(!i)return"Access token is required."}}},n=`<div class="pg-dialog-notice"><p>`;pinegrow.shouldStoreKeysInLocalStorage()?n+=`For security reasons, your Netlify access token is stored in your browser's local storage and is never sent to the Pinegrow server.`:n+=`Your Netlify access token is stored as a user meta value in the WordPress database. Only enter the key if you fully trust the site.`,n+="</p><p>After you enter the token it will never again be displayed in this dialog. If you want to use it with Pinegrow on other devices / browsers it is best to securely stored it in your password manager.</p></div>",pinegrow.showQuickDialog(`Netlify settings`,"Settings",`<p>Netlify is a static HTML hosting provider with a generous free tier that lets you publish up to 500 websites for free - with custom domains.</p><p>To get started with publishing projects from Pinegrow to Netlify, login or create your Netlify account and then create and copy &amp; paste the access token.</p>`+n,e,"Cancel","Save",null,function(e){e.token!==s&&i.saveAuthSettings(e),t&&t()})}createNewSite(s){const n=this;pinegrow.showQuickDialog(`Create a new site on Netlify`,"Settings",`<p>The site name must be unique accross all Netlify sites. The site domain name will be <code>[site name].netlify.app</code>.</p>`,{name:{name:"Site name",type:"text",value:"",placeholder:"Leave empty to auto generate",validate:function(e,t,i,s,n,o){return i&&!i.match(/^[a-z0-9\_\-]*$/)?"Only lowercase letters, numbers, - and _ are allowed":null}}},"Cancel","Create",function(){s&&s()},function(e,t,i){return async function(e){try{var t=await n.callApi("sites","POST",{name:e.name});s&&s(t),s=null,i()}catch(e){422===e?.response.status?pinegrow.showAlert("The site with this name already exists on Netlify. Leave the name empty to generate a unique name.","The name is already in use"):n.handleApiError(e)}}(e).then(function(){}),!1})}handleApiError(e){pinegrow.showAlert(`<p>The API call failed: ${e.toString()}</p>`,"Something went wrong when talking to Netlify"),console.error(e)}getHTMLForSelectedSiteInfo(e){var t;return e?(t='<div class="pg-publish-selected-site-info">',e.screenshot_url?t+=`<img src="${e.screenshot_url}">`:t+=`<div class="image-placeholder">No screenshot yet</div>`,t+`<div class="info">
<h4>${e.name}</h4>
<p><a href="${e.ssl_url}" target="_blank" class="external">${e.ssl_url}</a></p>
<p style="margin-bottom: 0;">Account: ${e.account_name}</p>
<p style="aamargin-bottom: 0;">Last updated: ${new Date(e.updated_at).toLocaleString()}</p>
<p style="margin-bottom: 0;"><a href="${e.admin_url}" class="external" target="_blank" style="color:inherit;">Site admin...</a></p>
</div>`+"</div>"):""}showProjectSettings(){var u=pinegrow.getCurrentProject().getProjectInfo();const h=this;this.withAuthSettings(async function(){pinegrow.showQuickMessage("Getting information from Netlify. Please wait...");function l(e){if(e)for(var t=0;t<c.length;t++)if(c[t].default_domain===e||c[t].custom_domain===e)return c[t];return null}function r(){var n=p||u.getSetting("netlify-site-domain"),s=(c.sort(function(e,t){var i=e.custom_domain||e.default_domain,s=t.custom_domain||t.default_domain;return i.toLowerCase().localeCompare(s.toLowerCase())}),"_new_"),e=((e=c.map(function(e){var t=e.custom_domain||e.default_domain;return{key:t,name:t+" - "+e.name}})).push({key:s,name:"Create new..."}),{domain:{name:"Select the site",type:"select",value:n,show_empty:!0,options:e,on_changed:function(e,t,i){i===s&&(h.createNewSite(function(e){p=e?(c.push(e),e.custom_domain||e.default_domain):null,o.hide(),r()}),i=null),n!==i&&a.html("").removeClass("info success error").hide(),n=i,o.get$Dialog().find(".pg-publish-selected-site-info-container").html(h.getHTMLForSelectedSiteInfo(l(i))),o.get$Dialog().find("code.site-name").html(n||"")}},selected_site_info:{type:"displayhtml",name:`<div class="pg-publish-selected-site-info-container">${h.getHTMLForSelectedSiteInfo(l(n))}</div>`,show_if:"domain"},publish:{type:"displayhtml",name:`<div class="pg-publish-actions">
<p>Publish the current project to the selected site <code class="site-name">${n}</code>:</p>
<button class="pg-button preview">Preview</button>
<button class="pg-button publish">Publish</button>
<div class="deploy-status"></div>
</div>`,show_if:"domain"}}),o=pinegrow.showQuickDialog(`Publish the project to Netlify`,"Publish",`<p>Deploy the project to Netlify static HTML hosting. <a href="https://pinegrow.com/docs/master-pinegrow/publish/" class="external" target="_blank">Learn more</a> about publishing to Netlify. <a href="#" class="edit-account">Edit access token...</a></p>`,e,"_none_","Close"),e=(o.get$Dialog().find(".edit-account").on("click",function(e){e.preventDefault(),h.authSettings()}),o.get$Dialog().find("button.preview")),t=o.get$Dialog().find("button.publish"),a=(addTooltip(e,"Preview the deployment without deploying it to the target site."),addTooltip(t,"Publish the project to the target site. All content of the site will be replaced. Note: You can rollback to a previous version in the Netlify admin panel."),o.get$Dialog().find(".deploy-status")),i=(a.html("").removeClass("info success error").hide(),e.on("click",function(e){i(!0,$(this),"Publishing a preview...")}),t.on("click",function(e){i(!1,$(this),"Publishing...")}),o.get$Dialog().find(".crsa-field-publish").css("align-items","flex-start").find("> div").css("flex-grow",1),p=null,function(t,i,e){var s=i.html();i.html(e).attr("disabled","disabled"),a.html("").removeClass("info success error").show(),u.setSetting("netlify-site-domain",n),u.save(),h.publishProject(n,t,function(e){a.append(`<p>${e}</p>`)},function(e){e?(a.html(`<h4>${t?"The preview is ready!":"The site is published!"}</h4>${t?`<p style="margin-bottom: 15px;">The project is not yet published on the main site. Use Publish to deploy it to the main site.</p>`:""}<p><a href="${e}" class="external pg-button pg-button-primary" style="color:white;" target="_blank">${t?"Visit the preview site":"Visit the published site"}</a></p>`),a.addClass(t?"info":"success")):a.addClass("error"),i.html(s).get(0).removeAttribute("disabled")})})}var c=await h.getSites(),p=null;r()})}publishProject(s,n,o,a){const l=this;var e=pinegrow.getCurrentProject();s&&(e=new PgProjectDownloader(e),o&&o("Collecting project files..."),e.createHeadlessZip(async function(e){o&&o("Sending files to Netlify...");async function t(){o&&o("Getting deployment information...");try{var e=await l.callApi(`sites/${s}/deploys?per_page=5`)}catch(e){return l.handleApiError(e),o&&o("Unable to get deploy information."),void(a&&a(null))}async function t(){switch((i=await l.callApi(`sites/${s}/deploys/`+i.id)).state){case"ready":o&&o("All done!"),a&&a(n?i.deploy_ssl_url:i.ssl_url);break;case"error":i.status.messages.map(function(e){return e.title}).join("<br>");o&&o("Deploy failed! More information: <br>${msg}"),a&&a(null);break;default:setTimeout(t,1e3)}}var i=e[0];o&&o("Waiting for the deployment to finish..."),await t()}try{var i=`sites/${s}/deploys`;n&&(i+="?draft=true"),await l.callApi(i,"POST",e,"application/zip");t()}catch(e){isApp()?l.handleApiError(e):setTimeout(t,1e3)}},function(e){if(1e8<e)return o&&o("The size of the collected files is larger than 100MB. This is too large for this method of publishing."),a&&a(),!1}))}}$(function(){$("head").append(`<style>
.pg-publish-selected-site-info-container {
margin-left: 200px;
}
.pg-publish-selected-site-info {
    text-align: left;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 20px;
}
.pg-publish-selected-site-info a {
text-decoration: underline;
}
.pg-publish-selected-site-info .info {}
.pg-publish-selected-site-info h4 {
margin-top: 0 !important;
}
.pg-publish-selected-site-info img, .pg-publish-selected-site-info .image-placeholder {
width: 100%;
}
.pg-publish-selected-site-info .image-placeholder {
background: #eee;
    aspect-ratio: 16/9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
}

.pg-publish-actions {
    margin-left: 200px;
    text-align: left;
    margin-top: 10px;
}

.pg-publish-actions .deploy-status {
background-color: #f2f2f2;
    padding: 15px 10px 15px;
    border-left: 4px solid #ddd;
    margin-top: 20px;
}

.pg-publish-actions .deploy-status.info {
background-color: #e9f7ff;
    border-color: var(--pg-blue);
}

.pg-publish-actions .deploy-status.success {
background-color: #e9f7ff;
    border-color: var(--pg-blue);
}

.pg-publish-actions .deploy-status.error {
background-color: #fff2f2;
    border-color: #ff5f22;
}

.pg-publish-actions .deploy-status p {
    margin-bottom: 0;
}

.pg-publish-actions .deploy-status h4 {
    margin-top:0;
    margin-bottom: 15px;
    //text-transform: none;
}
</style>`),$("body").one("pinegrow-ready",function(e,t){t.addEventHandler("on_get_project_menu_items",function(e,t){t.push({divider:!0}),t.push({label:"Publish...",func:function(){(new PgPublishProviderNetlify).showProjectSettings()},helptext:"Publish the project as a static HTML site on Netlify."})})})});