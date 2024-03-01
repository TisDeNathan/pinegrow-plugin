$(function(){$("body").one("pinegrow-ready",function(e,n){function a(e,n,a,i,o,t){var r=new PgComponentType(s+e,n);return r.selector=a,r.code=i,r.empty_placeholder=!0,r.tags="major",r.on_can_insert_into=o,t&&$.each(t,function(e,n){r[e]=n}),d.addComponentType(r),r}function i(e,n){for(var a=e;a&&!a.rootNode;){if(!a.isSelector(n))return!1;a=a.parent}return!0}function o(e){return e.isSelector(p)}function t(e,n){return!(e.closest(v)||"body"!==e.tagName&&!i(e,"div,body,html"))}for(var d=new PgFramework("pg.dm.lib.components","PG DM Lib"),s=(d.type="pg.dm.lib",d.allow_single_type=!0,d.description="",d.author="Pinegrow",d.author_link="http://pinegrow.com",d.default=pgIsMagic(),"pg.dm.lib."),r=(n.addFramework(d),[]),l=[],c=[],v="header,section,footer",p=v+",div",u=(r.push(a("header","Header","header",`<header></header>`,t)),r.push(a("section","Section","section",`<section></section>`,t)),r.push(a("footer","Footer","footer",`<footer></footer>`,t)),r.push(a("div","Div","div",`<div></div>`,function(e){return!!i(e,"div,body,html,"+v)})),r.push(a("columns.centered","Columns - Centered",".container",`<div class="container"><div class="row"><div class="col-md-4 pg-empty-placeholder"></div><div class="col-md-4 pg-empty-placeholder"></div><div class="col-md-4 pg-empty-placeholder"></div></div></div>`,function(e,n){return e.isSelector(v)})),r.push(a("columns","Columns",".container-fluid",`<div class="container-fluid"><div class="row"><div class="col-md-4"></div><div class="col-md-4"></div><div class="col-md-4"></div></div></div>`)),"h1,h2,h3,h4,h5,h6"),m="p,span,button,.btn,b,em,i",h=1;h<=6;h++)l.push(a("h"+h,"H"+h,"h"+h,`<h${h}>Heading ${h}</h${h}>`,o));l.push(a("p","Paragraph","p",`<p>This is some nice text.</p>`,o)),l.push(a("img","Image","img",`<img src="${n.getPlaceholderImage()}">`,function(e,n){return o(e)||e.isSelector("p")})),l.push(a("button","Button",".btn",`<button class="btn btn-primary">Click me</button>`,function(e,n){return o(e)||e.isSelector("p")})),l.push(a("icon","Icon",".far,.fas,.fab",`<i class="far fa-star"></i>`,function(e,n){return o(e)||e.isSelector(u+","+m.replace(",i",""))},{empty_placeholder:!1}));var b=a("navbar","Navbar",".navbar",function(){var e=getUniqueId("navbarToggler"),n=getUniqueId("navbarDropdownMenuLink");return`<nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">Brand</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#${e}" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="${e}">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Disabled</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="${n}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="${n}">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>`},function(e){return!!i(e,"div,body,html,header,section,footer")}),b=(b.on_filter_tree_children=function(e){var n=[];return n=(n=n.concat(e.find(".navbar-brand"))).concat(e.find(".navbar-nav"))},b.on_get_minitree_structure=function(e){c_navbar_brand,c_navbar_sections,c_navbar_link,c_dropdown,c_navbar_form},d.componentFiltersTree(b),c.push(b),a("navbar.nav.item","Navbar Nav Item",".nav-item",`<li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>`)),b=(b.on_filter_tree_children=function(e){return[]},d.componentFiltersTree(b),c.push(a("div","Slider","div",`<div></div>`)),c.push(a("div","Tabs","div",`<div></div>`)),c.push(a("div","Accordion","div",`<div></div>`)),c.push(a("div","Modal","div",`<div></div>`)),c.push(a("div","Dropdown","div",`<div></div>`)),new PgFrameworkLibSection("pg.dm.lib.containers","Layout"));b.setComponentTypes(r),d.addLibSection(b),(b=new PgFrameworkLibSection("pg.dm.lib.content","Content")).setComponentTypes(l),d.addLibSection(b),(b=new PgFrameworkLibSection("pg.dm.lib.components","Components")).setComponentTypes(c),d.addLibSection(b),a("body","Body","body",`<div></div>`).action_menu={add:[s+"header",s+"section",s+"footer",s+"navbar"],on_add:function(e,n,a,i){a.type==s+"header"||a.type==s+"navbar"||a.type!=s+"footer"&&i?e.prepend(n):e.append(n)}}})});