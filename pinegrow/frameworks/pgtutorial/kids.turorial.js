$(function(){$("body").one("pinegrow-ready",function(e,l){window.PgSafeUnsplashImages=new PgSafeUnsplashImages,window.PgSafeUnsplashImages.load("images/kids/kids-images.json");function s(e,t,o,i,a){var l=`<img src="images/kids/${e}.png" class="${t="pg-kids-head-alien top-right-inverse "+t||""} pg-info-panel-draggable" data-code="${pgEncodeAttribute(`<img src="images/kids/${e}.png">`)}" style="`;return o&&(l+=`width:${o};`),i&&(l+=`top:${i};`),a&&(l+=`right:${a};`),l+='">'}function t(e,t,o,i){i=i||"png",o=o||"alien",t=t||15;for(var a=1;a<=t;a++)e.addResource(""+o+a+`.`+i,`images/kids/${o}${a}.`+i)}function o(e){t(e,5,"background","jpg"),t(e,7,"rocket"),t(e,15),t(e,10,"landscape"),t(e,15,"food"),t(e,6,"picture","jpg"),t(e,7,"spacerides","jpg"),t(e,6,"planet","jpg")}l.addEventHandler("on_image_categories_loaded",function(e,t){function o(e,t,o,i){for(var a={key:e,images:{}},l=1;l<=o;l++){var n="htmlplanet-"+ ++r;a.images[n]=`images/kids/${t}${l}.`+i}s[e]=a}var r=0,s={};o("Aliens","alien",15,"png"),o("Backgrounds","background",5,"jpg"),o("Rockets","rocket",7,"png"),o("Landscape","landscape",10,"png"),o("Planets","planet",6,"jpg"),o("Food","food",15,"png"),o("Pictures","picture",6,"jpg"),o("Space rides","spacerides",7,"jpg"),t.push({key:"HTML Planet",top:!0,header:"HTML Planet images",subcats:s,sizes:null})}),l.kidsTutorial=tutorial;var i=`
    html {
        height:100%;
    }
    
    body {
        min-height:100%;
        margin:0;
        padding:0;
    }
    
    * {
        box-sizing: border-box;
    }
`,a=new PgTutorialLesson("intro_lesson","alien13","Are you ready for the HTML adventure?","l1"),n=(a.demo=!0,a.name=`Take a space ride to HTML Planet`,a.display_title=`Take a space ride to HTML Planet`+s("alien13","second",null,"-40px")+s("rocket2",null,null,"-40px"),a.description=makeDesc("568004696",``,`<p>Look around the editor and then take off with the rocket:</p>
            <ol>
            <li>Click on the <b>Watch the video</b> button.</li>
            <li>Click anywhere in this text to highlight this step.</li>
            <li>Click on the underlined text, for example ${select("the image of Zootata","img[src*='alien']")} to see where things are located on the screen.</li>
            <li>Great, you are ready to go!</li>
</ol>
`),`
body {
    padding: 40px;
    background-image: url('images/kids/background1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow:hidden;
}

img[src*="rocket"]  {
position:absolute;bottom:0px;right:400px;
filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22));
transition: transform 5s cubic-bezier(0.86, 0.02, 1.00, 1.00);
}
h1 {
color:#ffffff;
width:320px;
max-width:80%;
text-align:left;
position:absolute;
bottom:300px;
right:40px;
font-size:40px;
}
img[src*="landscape"]  {
position:absolute;left:0;bottom:0;width:100%;
}
img[src*="alien"]  {
position:absolute;bottom:40px;right:70px;
filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22));
transition: transform 2s, opacity 0.25s;
}
.fly {
transform: translate(10vw, -130vh) rotate(26deg);
}
.jump {
transform: translate(-300px, -30px) scale(0.5);
}
.go-in {
   opacity:0;
}
`),n=(a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <img src="rocket4.png" width="200px"/>
        <h1>Hi, I&apos;m Zootata!<br>Do you want to join me on a space ride?</h1>
        <img src="landscape5.png" />
        <img src="alien13.png" width="240px" />
    </body>
</html>`),a.inject_css=n,a.addStylesheet("style.css",""),o(a),a.onCheck=function(e,t){var o,i,a;e.sourceNode.find("img").forEach(function(e){var t=e.getAttribute("src")||"";0<=t.indexOf("rocket")?i=e:0<=t.indexOf("alien")&&(o=e)}),o?((a=e.sourceNode.findOne("h1"))&&a.html("Let's go 😀"),t.result="ok",o.addClass("jump"),setTimeout(function(){o.addClass("go-in"),i&&i.addClass("fly")},2500),t.delay=4e3):(t.message="Oops... Zootata is missing! Did you delete the alien image? No problem, use the Undo to bring her back, or Restart the adventure.",t.result="error"),t.decoration=s("alien13","check-box")},tutorial.addLesson(a),"Headings, paragraphs, images and links"),a=new PgTutorialLesson("h1","alien1",n,"l1"),r=(a.demo=!0,a.name=`Meet the h1 element`,a.display_title=`Meet the ${showElement("h1")} element`+s("alien1"),a.description=makeDesc("483417920",`<p>The ${showElement("h1")} (Heading 1) element is used for the main heading (title) of the page.</p>`,`<p>Add the heading to Blotomic's message:</p>
            <ol>
            <li><b>Drag the H1 element</b> to the top of the message:<br>${a.getHtmlForLibButton(tag("h1","Change me!"),"<h1>Change me!</h1>",null,null,"body > h1:first-child","Place the H1 at the top of the yellow box.")}</li>
            <li>Make sure that the ${select("H1 element","h1")} is selected on the page (selected element has a blue border and a menu). Click on the element to select it.</li>
            <li><b>Activate the text editor</b> by clicking on the ${tooltip("text editor","edit_text")} icon in the blue menu above the H1 element.</li>
            <li><b>Change the text</b> in the heading. For example, write <code>A special message</code>.</li>
            <li>Click on the <b>${tooltip("Done button","edit_text_done")}</b> in the blue Text edit menu above the element when you're done with changing the text.</li>
            <li><b>Open the ${tooltip("code editor","code_editor")}</b> to see how the H1 element looks in the code.</li>
            <!-- <li><b>Change the text</b> of the title using the code editor.</li> -->
</ol>
`),a.video=`https://youtube.com/bubi`,`
html {
    background-image: url('images/kids/alien1.png');
    background-repeat: no-repeat; 
    background-position: right bottom; 
    min-height: 100%; 
    background-size: 50%;
}

body {
    margin-left: 40px; 
    margin-top: 40px; 
    width: 50%; 
    max-width: 600px; 
    min-height: 10px;
    height: auto;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 30px; 
    padding-right: 30px; 
    padding-bottom: 30px; 
    box-shadow: 5px 15px 37px rgba(0, 0, 0, 0.27); 
    background-color: rgba(255, 244, 185, 0.81);
}
`),d=(a.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><p>Hello! My name is Blotomic. Welcome to HTML Planet! Here you will get to learn HTML and CSS. We also have many fun adventures for you. With the help of HTML Planet you'll be able to make super cool websites in no time! Good luck, I hope you'll enjoy it!</p></body></html>`),a.inject_css=r,a.addStylesheet("style.css",""),o(a),a.setLibrary({content:{h1:{code:`<h1>I am the title</h1>`}}}),a.setStyle(!1),`<br><br>Use the ${tooltip("structure panel","structure")} to fix the problem.`),c=(a.onCheck=function(e,t){var o=null,i=e.sourceNode.find("h1");0===i.length?o="There is <b>no H1 element</b> on the page.":1<i.length?o=`There should be <b>only one H1</b> on the page. `+d:0<=i[0].text().toLowerCase().indexOf("change me")?o="Use the Text edit tool to change the title of the message.":i[0].validateTree().length?o="The H1 element has <b>code errors</b>. Go to the code editor and check for missing &lt; and &gt; or incorrectly closed tags.":0===i[0].text().trim().length?o="The H1 needs some text.":i[0].prev()&&(o="The H1 element should be <b>at the top of the yellow page</b>."),o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien1","check-box")},tutorial.addLesson(a),new PgTutorialLesson("p","alien1",n,"l2")),r=(c.demo=!0,c.name=`The P paragraph`,c.display_title=`The ${showElement("p")} paragraph`+s("alien1"),c.description=makeDesc("483913547",`<p>The ${showElement("p")} element represents a paragraph and is used for displaying text.</p>`,`<p>Blotomic's message is just one big chunk of text. Use the ${showElement("p")} element to divide it into more paragraphs.
</p>
            <ol>
            <li><b>Click on the message text</b> to select the ${select("p")} element.</li>
            <li><b>Activate the text editor</b> by clicking on the ${tooltip("text editor","edit_text")} icon in the blue menu above the element.</li>
            <li><b>Split the paragraph</b> into four paragraphs by pressing the ${pgShowKbd("ENTER")} key in the text.</li>
            <li>Press the <b>${tooltip("Done button","edit_text_done")}</b> in the text editor menu when you're done with changing the text.</li>
            <li><b>Open the ${tooltip("code editor","code_editor")}</b> to explore the code.</li>
            <li><b>PRO Tip:</b> You can select the ${select("whole message","body")} and activate the ${tooltip("text editor","edit_text")} there to easily edit all the text.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><h1>A special message</h1><p>Hello! My name is Blotomic. Welcome to HTML Planet! Here you will get to learn HTML and CSS. We also have many fun adventures for you. With the help of HTML Planet you will be able to make super cool websites in no time! Good luck, I hope you will enjoy it!</p></body></html>`),c.inject_css=r,c.addStylesheet("style.css",""),c.onCheck=function(e,t){var o=null,i=e.sourceNode.find("p");if(i.length<3)o=`<p>Split the paragraph P into at least three paragraphs (P elements).</p><p>Use the <b>Edit text</b> tool and press ${pgShowKbd("ENTER")} key to split the paragraph.</p>`;else for(var a=0;a<i.length;a++)if(i[a].isEmpty()){o=`<p>The ${S(a+1)} paragraph is empty. Each paragraph should contain a chunk of text.</p>`;break}o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien1","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("img","alien1",n,"l3")),c=(r.demo=!0,r.name=`The amazing IMG`,r.display_title=`The amazing `+showElement("img")+s("alien1"),r.description=makeDesc("483916801",`<p>The ${showElement("img")} element is used for displaying images.</p>`,`<p>Discover different aliens from HTML Planet:
</p>
            <ol>
            <li><b>Drag the image</b> of an alien to the page:<br>${a.getHtmlForLibButton(tag("img",null,{src:"alien1.png"}),'<img src="alien1.png">')}</li>
            <li>Go to the <b>${tooltip("attributes panel","attributes_panel")}</b>.</li>
            <li>Make sure the ${select("img")} element is selected.</li>
            <li><b>Change the source</b> attribute, from <code>alien1.png</code> up to <code>alien15.png</code>.</li>
            <li>Open the <b>${tooltip("code editor","code_editor")}</b> and explore the code.</li>
</ol>
`),r.video=`https://youtube.com/bubi`,r.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body></body></html>`),r.inject_css=`
    body {
        padding:40px;
    }
`,r.addStylesheet("style.css",""),r.onCheck=function(e,t){var o=null,i=e.sourceNode.find("img");i.length<1?o=`<p>Drag the alien image to the page!`:(i=i[0].getAttribute("src"))&&i.match(/^alien[1-9][1-5]?\.png$/)||(o=`<p>Go to the <b>Attributes panel</b> and set the <b>Src</b> attribute to any value from <code>alien1.png</code> to <code>alien15.png</code>.</p>`),o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien1","check-box")},o(r),tutorial.addLesson(r),new PgTutorialLesson("img_size","alien3",n,"l4")),a=(c.demo=!0,c.name=`The IMG width &amp; height`,c.display_title=`The ${showElement("img")} width &amp; height`+s("alien3"),c.description=makeDesc("483919149",`<p>The width and height attributes set the size of the ${showElement("img")}.</p>`,`<p>Make the alien Bloby fit into the box:
</p>
            <ol>
            <li><b>Click on the ${select("img")}</b> to select it.</li>
            <li>Go to the <b>${tooltip("attributes panel","attributes_panel")}</b>.</li>
            <li><b>Adjust the ${field("width","prop:width")} and ${field("height","prop:height")}</b> attributes to fit Bloby into the box. But he should not be too small.</li>
            <li>Open the <b>${tooltip("code editor","code_editor")}</b> and explore the code.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><img src="alien3.png" width="500"></body></html>`),c.inject_css=`
    body {
        padding:40px;
    }
    
    body:before {
        content: '';
        width:300px;
        height:300px;
        max-width:90%;
        max-height:90vh;
        display:block;
        position:absolute;
        background:#f1f1f1;
        border:4px dashed #aaaaaa;
        top:10px;
        left:10px;
    }
    
    img {
        position:absolute;
        top:10px;
        left:10px;
    }
`,c.addStylesheet("style.css",""),o(c),c.onCheck=function(e,t){var o,i=null,a=e.sourceNode.findOne("img");a?(o=(a=a.get$DOMElement()).width(),a=a.height(),305<o||305<a?i=`<p>Bloby is too big!</p>`:(o<100||a<100)&&(i=`<p>Bloby is too small!</p>`)):i=`<p>Where is Bloby? Use Undo or restart the adventure to get him back.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien3","check-box")},tutorial.addLesson(c),new PgTutorialLesson("page","alien4",n,"l5")),p=(a.demo=!0,a.name=`The page structure`,a.display_title=`The page structure`+s("alien4"),a.description=makeDesc("483922455",`<p>The main element of the page is the ${showElement("html")} element.</p>`,`<p>Explore the page structure:
</p>
            <ol>
            <li>Note, there is nothing to edit in this adventure. Just explore the page structure.</li>
            <li>Open the <b>${tooltip("code editor","code_editor")}</b> and explore the structure of the page.</li>
            <li><b>${escapeHtmlCode("<!doctype html>")}</b> tells that HTML language is used to describe the page.</li>
            <li>The <b>${select("html")}</b> element represents the whole page.</li>
            <li>The <b>${select("head")}</b> element contains information about the page.</li>
            <li>The <b>${select("body")}</b> element is the visible part of the page with texts and images.</li>
            <li>Use the <b>${tooltip("structure panel","structure")}</b> to explore the structure of the page.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html><html><head>
<link href="tailwind_theme/tailwind.css" rel="stylesheet">
<link href="style.css" rel="stylesheet">
</head><body><h1>Hello, there!</h1><p>The content of the Body element is displayed on the page.</p><img src="alien4.png" width="140"></body></html>`),a.inject_css=`body {
        padding:40px;
    }`,a.addStylesheet("style.css",""),a.onCheck=function(e,t){t.result="ok",t.decoration=s("alien4","check-box")},o(a),tutorial.addLesson(a),new PgTutorialLesson("restaurant","alien7",n,"l6")),h=(p.demo=!0,p.name=`Bloobeek's Restaurant`,p.display_title=`Bloobeek's Restaurant`+s("alien7",null,"70px"),`<div class="pg-info-panel-img-grid">`);h=(h=(h=(h=(h=(h=(h=(h+=p.getHtmlForLibButton("H1",`<h1>Yummy Star Munch</h1>`,null,"Restaurant name 1"))+p.getHtmlForLibButton("H1",`<h1>Savour’ita</h1>`,null,"Restaurant name 2"))+p.getHtmlForLibButton("H1",`<h1>Bloobeek's Fancy Flavour</h1>`,null,"Restaurant name 3"))+p.getHtmlForLibButton("P",`<p>Savor the great taste of alien-made food. Our delicious menu will boggle your brain. Our breathtaking choices include:</p>`,null,"Welcome message"))+p.getHtmlForLibButton("P",`<p>Black matter donut with soothing space slime</p>`,null,"Dish name 1"))+p.getHtmlForLibButton("P",`<p>Dragon brains with a hint of slimy bubbles</p>`,null,"Dish name 2"))+p.getHtmlForLibButton("P",`<p>Moon rocks with a sprinkle of purple star powder</p>`,null,"Dish name 3"))+p.getHtmlForLibButton(`<img src="images/kids/alien7.png">`,`<img src="alien7.png">`,"image","Bloobeek");for(var u=1;u<=15;u++)h+=p.getHtmlForLibButton(`<img src="images/kids/food${u}.png">`,`<img src="food${u}.png">`,"image","Food image "+u);h+="</div>",p.description=makeDesc("483924832",`<p>Create the menu for Bloobeek's restaurant using ${showElement("h1")},  ${showElement("p")} and  ${showElement("img")} elements. Have fun!</p>
${h}
`,``),p.video=`https://youtube.com/bubi`,p.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body></body></html>`),p.inject_css=`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Cormorant+Garamond:wght@300&display=swap');
        
    body {
        padding:40px;
        text-align:center;
        font-family: 'Cormorant Garamond', serif;
        max-width:800px;
        margin:0 auto;
    }
    
    h1 {
        font-family: 'Amatic SC', cursive;
        font-size: 50px;
    }
    
    img {
    }
    
    p {
        font-size: 20px;
        margin: 20px 0;
    }
    
`,p.addStylesheet("style.css",""),o(p),p.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("img"),a=e.sourceNode.findOne("h1"),l=e.sourceNode.findOne("p");i?a?l||(o="<p>Add some text describing the food and the restaurant.</p>"):o="<p>The restaurant needs a name. Use H1 for the name.</p>":o="<p>Add some images so that visitors can see the food.</p>",o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien7","check-box")},tutorial.addLesson(p);function b(e){for(var t="",o=1;o<=8;o++)t+=e.getHtmlForLibButton(`<img src="images/kids/alien${o}.png">`,`<img src="alien${o}.png" class="alien">`,"image","Alien "+o);for(o=1;o<=5;o++)3!==o&&(t+=e.getHtmlForLibButton(`<img src="images/kids/background${o}.jpg">`,`<img src="background${o}.jpg" width="100%" height="100%" class="background">`,"image","Background "+o));for(o=1;o<=10;o++)t+=e.getHtmlForLibButton(`<img src="images/kids/landscape${o}.png">`,`<img src="landscape${o}.png" width="100%" class="landscape">`,"image","Landscape "+o);for(o=1;o<=7;o++)t+=e.getHtmlForLibButton(`<img src="images/kids/rocket${o}.png">`,`<img src="rocket${o}.png" class="rocket">`,"image","Rocket "+o);for(o=1;o<=15;o++)t+=e.getHtmlForLibButton(`<img src="images/kids/food${o}.png">`,`<img src="food${o}.png">`,"image","Food image "+o);return t}var r=n,c=new PgTutorialLesson("link","alien4",r,"l7"),a=(c.demo=!0,c.name=`Link, the teleporter`,c.display_title=`Link ${showElement("a")}, the teleporter`+s("alien4"),c.description=makeDesc("484308050",`<p>Anchor ${showElement("a")} is used to create hyperlinks which teleport you from one page to another when you click on them.</p>`,`<p>Help the two aliens visit each other:
</p>
            <ol>
            <li>On the page <b>${page("alien1")}</b>, select the ${select("Visit Alien 2 paragraph","p")}.</li>
            <li>Go to the ${tooltip("attributes panel","attributes_panel")} and click on <b>${field("Create link","prop:html-link-create button")}</b> button.</li>
            <li>Set the <b>${field("href","prop:html-link-href")}</b> attribute to <code>alien2.html</code>.</li>
            <li>Click on the ${tooltip("click icon","click_icon")} to test the link.</li>
            <li>On the page <b>${page("alien2")}</b>, create a link to <code>alien1.html</code>.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("alien1.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><h1>Hi! I'm Alien 1</h1><img src="alien4.png" height="200"><p>Visit Alien 2.</p></body></html>`),c.addPage("alien2.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><h1>Hi! I'm Alien 2</h1><img src="alien5.png" height="200"><p>Visit Alien 1.</p></body></html>`),c.inject_css=`
    body {
        padding:40px;
        text-align:center;
        font-size:24px;
    }
    
    img {
       
    }
`,c.addStylesheet("style.css",""),o(c),c.onCheck=function(e,t,o){var i=null,a=o["alien1.html"],l=o["alien2.html"],a=a.sourceNode.findOne("a"),l=l.sourceNode.findOne("a");a?"alien2.html"!==a.getAttr("href")?i=`<p>On alien1.html, set Link <b>Href</b> attribute to <code>alien2.html</code>.</p>`:l?"alien1.html"!==l.getAttr("href")&&(i=`<p>On alien2.html, set Link <b>Href</b> attribute to <code>alien1.html</code>.</p>`):i=`<p>On alien2.html, use Create link button to create a link around the Visit Alien 1 paragraph.</p>`:i=`<p>On alien1.html, use Create link button to create a link around the Visit Alien 2 paragraph.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien4","check-box")},tutorial.addLesson(c),new PgTutorialLesson("link_text","alien7",r,"l8")),n=(a.demo=!0,a.name=`Create a link with the text editor`,a.display_title=`Create a link ${showElement("a")} with the text editor`+s("alien7",null,"70px"),a.description=makeDesc("484310688",`<p>Use the text edit tool to link just a part of a text.</p>`,`<p>Help Bloobeek show his favorite alien food:
</p>
            <ol>
            <li>On the page <b>${page("index")}</b>, select the heading ${select("h1")}.</li>
            <li>Activate the ${tooltip("edit text","edit_text")} tool.</li>
            <li>Highlight the word <b>&quot;here&quot;</b>.</li>
            <li>Click on the <b>${tooltip("Link button","edit_text_link")}</b> in the blue text edit menu above the element and set the Href to <code>food.html</code>. Click on the <b>Create</b> button.</li>
            <li>Click <b>${tooltip("Done","edit_text_done")}</b> button to exit text editing.</li>
            <li><b>Select the ${select("a")} link</b> and test it with the ${tooltip("click icon","click_icon")}.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><h1>Click here to see my favorite food!</h1><img src="alien7.png" height="200"></body></html>`),a.addPage("food.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><h1>Space dust cookie with slimy croutons</h1><img src="food5.png" height="200"></body></html>`),a.inject_css=`
    body {
        padding:40px;
        text-align:center;
        font-size:24px;
    }
    
    img {
       
    }
`,a.addStylesheet("style.css",""),a.onCheck=function(e,t,o){var i=null,a=o["index.html"],l=o["food.html"],a=a.sourceNode.findOne("a");l.sourceNode.findOne("a");a&&"here"===a.html().trim()?"food.html"!==a.getAttr("href")&&(i=`<p>On index.html, set Link <b>Href</b> attribute to <code>food.html</code>.</p>`):i=`<p>On index.html, select the paragraph, activate the Text editor, select the word <code>here</code> and click on the Link button.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien7","check-box")},o(a),tutorial.addLesson(a),new PgTutorialLesson("link_img","alien9",r,"l9")),g=(n.demo=!0,n.name=`Linking the image`,n.display_title=`Linking the ${showElement("img")} image`+s("alien9"),n.description=makeDesc("484312027",`<p>Links can also be on images.</p>`,`<p>Toosasa has a surprise for you:
</p>
            <ol>
            <li>On the page ${page("index")}, <b>select the ${select("img")}</b> element.</li>
            <li>Go to the ${tooltip("attributes panel","attributes_panel")}.</li>
            <li>Click on the <b>${field("Create link","prop:html-link-create")}</b> button.</li>
            <li>Set ${field("href","prop:html-link-href")} to <code>surprise.html</code>.</li>
            <li>Use the <b>${tooltip("click icon","click_icon")}</b> to test the link.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><h1>Click on me and see what happens!</h1><img src="alien9.png" height="200"></body></html>`),n.addPage("surprise.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><h1>I love to spin!</h1><img src="alien9.png" height="200" class="spin"></body></html>`),n.inject_css=`
    body {
        padding:40px;
        text-align:center;
        font-size:24px;
    }
    
    img {
       
    }
    
    .spin {
       animation-name: spin;
       animation-duration: 5000ms;
       animation-iteration-count: infinite;
       animation-timing-function: linear; 
    }
    
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`,n.addStylesheet("style.css",""),o(n),n.onCheck=function(e,t,o){var i=null,a=o["index.html"].sourceNode.findOne("img").parent;(a="a"!==a.tagName?null:a)&&a.findOne("img")?"surprise.html"!==a.getAttr("href")&&(i=`<p>On index.html, set Link <b>Href</b> attribute to <code>surprise.html</code>.</p>`):i=`<p>On index.html, select the image, and use Create link button to create a link.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien9","check-box")},tutorial.addLesson(n),new PgTutorialLesson("a9_teleport","alien8",r)),h=(g.name=`The link rocket adventure`,g.display_title=`The link rocket adventure`+s("alien8"),`<div class="pg-info-panel-img-grid">`);h=(h+=g.getHtmlForLibButton("H1",`<h1>My Amazing Planet</h1>`,null,"Planet name"))+b(g)+"</div>",g.description=makeDesc("AQ6Kyk7sa84",`<p>Create planets and use rocket links to travel between them.</p>
${h}
`,``),g.video=`https://youtube.com/bubi`;for(u=1;u<=3;u++)g.addPage(`planet${u}.html`,`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body></body></html>`);function m(e,t){return(e.getInlineStylePropertyValue("background-image")||"").match(/^url\(\'background[1-5]\.jpg\'\)$/)?null:`<p>Set the Background image CSS property of the <b>${t}</b> to one of the backgrounds: <code>background1.jpg</code> to <code>background5.jpg</code>.</p>`}function f(e,t){var o=e.css(t);return""===o||null===o?null:(o=(o+"").replace("px",""),isNaN(o)?o:parseFloat(o))}function y(e,t){if(t instanceof RegExp){for(var o=(a=e.getAttr("style")||"").split(";"),i=0;i<o.length;i++)if(o[i].trim().match(t))return!0;return!1}var a;return""===(a=e.getInlineStylePropertyValue(t))||null===a?null:(a=(a+"").replace("px",""),isNaN(a)?a:parseFloat(a))}function x(i){var a=[];return l.getStylesheets().forEach(function(e){if(e.rootNode)for(var t=0;t<e.rootNode.nodes.length;t++){var o=e.rootNode.nodes[t];"rule"===o.type&&pgcssh.getSelectorWithoutPgId(o.selector).trim()===i&&a.push(o)}}),a}function k(e,t,o){for(var i=0;i<e.length;i++)for(var a=0;a<e[i].nodes.length;a++)if("decl"===e[i].nodes[a].type)if("string"==typeof t){if(e[i].nodes[a].prop===t&&(!o||o===e[i].nodes[a].value))return!0}else if(e[i].nodes[a].prop.match(t))return!0;return!1}g.addStylesheet("style.css",`
        @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
        
    html {
        height:100%;
    }
    
    body {
        padding:0;
        margin:0;
        font-family: 'Do Hyeon', sans-serif;
        height:100%;
        display: flex;
        flex-direction: row;
        justify-items: revert;
        align-items: flex-end;
        justify-content: center;
        overflow:hidden;
    }
    
    * {
        z-index:2;
        position:relative;
    }
    
    h1 {
        font-size: 50px;
        color:white;
        position:absolute;
        top: 6%;
        text-align: center;
        left: 0;
        right: 0;
        text-shadow:1px 1px 3px rgba(0,0,0,0.25);
        padding:0 40px;
    }
    
    img {
        margin:0 20px 10px 20px;
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22))
    }
    
    
    img.background {
        position:absolute;
        left:0;
        top:0;
        z-index:0;
        //width: 100%;
        //height: 100%;
        //object-fit: cover;
        filter:none;
        margin:0;
    }
    
    img.landscape {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        z-index:1;
        //width: 100%;       
        //object-fit: cover;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.2));
        margin:0;
    }
    
    img.rocket {
        margin-bottom:20px;
    }
    
    
    
    p {
        font-size: 20px;
        margin: 20px 0;
    }
    
`),t(g,8),t(g,10,"landscape"),t(g,5,"background","jpg"),t(g,7,"rocket");var c="Styling the text",a=new PgTutorialLesson("font_size","alien5",c),n=(a.name=`How big is the text?`,a.display_title=`How big is the text?`+s("alien5",null,"50px"),a.description=makeDesc("484316380",`<p>The size of letters is set with the <code>font-size</code> CSS property.</p>`,`<p>Help Rooky read the message:</p>
            <ol>
            <li><b>Click on the text</b> to select the ${select("p")} element.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>In the <b>Text section</b>, set the <b>${field("Size","style:font-size")}</b> property to at least <code>20px</code>. Don't forget the <code>px</code> unit!</li>
            <li><b>Open the ${tooltip("code editor","code_editor")}</b> to see the property in the code.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><img src="alien5.png"><p>Hi Rooky! Do you want to come to my home for lunch? I invented a new yummy dish called Burp Balls Stew but I’m afraid to eat it because it looks like it will explode. Come around noon, we’ll have lots of fun. Yours, Bloobeek.</p></body></html>`),a.addStylesheet("style.css",``),a.inject_css=`
html {
    background-image: url('images/kids/background1.jpg');
    background-repeat: no-repeat; 
    background-position: right bottom; 
    min-height: 100%; 
    background-size: cover;
}

p {
    margin-left: 40px; 
    margin-top: 40px; 
    width: 50%; 
    max-width: 600px; 
    padding-top:30px;
    padding-left: 30px; 
    padding-right: 30px; 
    padding-bottom: 30px; 
    box-shadow: 5px 15px 37px rgba(0, 0, 0, 0.27); 
    background-color: rgba(255, 255, 255, 0.9);
    font-size:8px;
}

img {
    position:absolute;
    right:20px;
    bottom:20px;
}
`,o(a),a.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("p");i?(i=i.get$DOMElement(),parseFloat((i.css("fontSize")||"").replace("px",""))<20&&(o=`<p>The font size should be at least <code>20px</code>.</p>`)):o=`<p>Did you delete the text? No problem, use Undo or restart the lesson.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},tutorial.addLesson(a),new PgTutorialLesson("color","alien7",c)),r=(n.name=`Let's color the text!`,n.display_title=`Let's color the text!`+s("alien7",null,"70px"),n.description=makeDesc("487103559",`<p>Use the CSS property <code>color</code> to set the text color.</p>`,`<p>Help Bloobeek advertise his restaurant on the night sky:</p>
            <ol>
            <li><b>Click on the text</b> to select the ${select("h1")} element.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>In the <b>Text section</b>, open the <b>${field("color picker","style:color .color-value-placeholder")}</b> in the <b>${field("Color","style:color")}</b> field.</li>
            <li>In the color picker, select a <b>bright color</b> and then click on the <b>Choose</b> button to close the color picker.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><img src="alien7.png" height="200"><h1>Today's Special: Get extra Super Slimy Space Jelly when you order a plate of Burp Balls Stew!</h1></body></html>`),n.inject_css=`
html {
    background-image: url('images/kids/background1.jpg');
    background-repeat: no-repeat; 
    background-position: right bottom; 
    min-height: 100%; 
    background-size: cover;
}

h1 {
    margin-left: 4vh;
    margin-top: auto;
    margin-top: 4vh;
    max-width: 320px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    border-radius: 50%;
    padding-top: 70px;
    padding-bottom: 70px;
    box-shadow: inset 9px 5px 20px 0px rgba(255,255,255,0.4);
}

img {
    position:absolute;
    right:20px;
    bottom:20px;
}
`,n.addStylesheet("style.css",""),o(n),n.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("h1");i?(i=i.get$DOMElement().css("color"),chroma(i).luminance()<.35?o="<p>The color is too dark. Many aliens won't be able to see the sign.</p>":chroma(i).alpha()<.4&&(o=`<p>The color is too transparent.</p>`)):o=`<p>Did you delete the text? No problem, use Undo or restart the lesson.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien7","check-box")},tutorial.addLesson(n),new PgTutorialLesson("span_color","alien10",c)),a=(r.name=`Color the words to launch!`,r.display_title=`Color the words to launch!`+s("alien10"),r.description=makeDesc("487106373",`<p>Wrap a part of the text with a ${showElement("span")} element in order to style it.</p>`,`<p>Launch the rocket by coloring the color words:</p>
            <ol>
            <li><b>Click on the text</b> to select the ${select("h1")} element.</li>
            <li>Activate the <b>${tooltip("text editor","edit_text")}</b>.</li>
            <li>Highlight the word <b>red</b> and click on the <b>${tooltip("Span button","edit_text_span")}</b>.</li>
            <li>Click on <b>${tooltip("Done","edit_text_done")}</b> to finish editing the text.</li>
            <li><b>Select the ${select("span")} element</b> and change its <b>Text color</b> in the ${tooltip("style panel","style")}.</li>
            <li>Do the same for <b>orange</b> and <b>green</b>.</li>
</ol>
`),r.video=`https://youtube.com/bubi`,r.addPage("index.html",`<!doctype html>
        <html>
        <head>
        <link href="style.css" rel="stylesheet">
            </head>
            <body>
            <img src="background5.jpg" width="100%" height="100%" class="background">
            <img src="rocket4.png">
            <h1>Launch sequence activated on red, orange green!</h1>
            </body>
            </html>`),r.inject_css=`
        
    html {
        height:100%;
    }
    
    body {
        padding:0;
        margin:0;
        height:100%;
        display: flex;
        flex-direction: row;
        justify-items: revert;
        align-items: flex-end;
        justify-content: center;
        overflow:hidden;
    }
    
    
    h1 {
        font-size: 50px;
        color:white;
        position:absolute;
        top: 6%;
        text-align: center;
        left: 0;
        right: 0;
        text-shadow:1px 1px 3px rgba(0,0,0,0.25);
        padding:0 40px;
    }
    
    * {
        z-index:2;
    }
    
    img {
        transition: transform 5s cubic-bezier(0.86, 0.02, 1.00, 1.00);
    }
    
    
    
    img.background {
        position:absolute;
        left:0;
        top:0;
        z-index:0;
        //width: 100%;
        //height: 100%;
        //object-fit: cover;
        filter:none;
        margin:0;
    }
    
    img[src*="rocket"] {
        margin:0 20px 10px 20px;
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22))
        margin-bottom:20px;
        transform: rotate(0deg) translate(-99px, 125px);
    }
    
    img.fly {
        transform: translate(10vw, -130vh) rotate(26deg);
     }
    
`,r.addStylesheet("style.css",""),o(r),r.onCheck=function(e,t){for(var o=null,i=e.sourceNode.find("span"),a=["red","orange","green"],l=0;l<a.length;l++){var n,r=a[l];if(i.length<=l?o=`<p>Use the Edit text tool to create a span around the word ${r}.</p>`:i[l].text().trim().toLowerCase().startsWith(r)?(n=i[l].get$DOMElement().css("color"),70<chroma.distance(r,n)?o=`<p>The color of the word ${r} should be more ${r}.</p>`:chroma(n).alpha()<.7&&(o=`<p>The color of the word ${r} is too transparent.</p>`)):o=`<p>The span should be around the word ${r}.</p>`,o)break}o||e.sourceNode.find("img").forEach(function(e){e.hasClass("background")||e.addClass("fly")}),o?(t.result="error",t.message=o):(t.delay=4e3,t.result="ok"),t.decoration=s("alien10","check-box")},tutorial.addLesson(r),new PgTutorialLesson("font_family","alien13",c)),n=(a.name=`Find the font!`,a.display_title=`Find the font!`+s("alien13",null,null,"-30px"),a.description=makeDesc("487110709",`<p>Use the <code>font-family</code> CSS property to set the shape of the letters.</p>`,`<p>Help Zootata make the poster more interesting by choosing a suitable font:</p>
            <ol>
            <li><b>Click on the text</b> to select the ${select("h1")} element.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Select the font combination in the <b>${field("Font family","style:font-family")}</b> field.</li>
            <li>Try out different fonts to see which one fits the best.</li>
</ol>
`),a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <h1>Super fun space rides to Wobbly Jelly asteroid belt!</h1>
        <img src="background1.jpg" width="100%" height="100%" class="background">
        <img src="rocket2.png" class="rocket" width="203">
        <img src="landscape3.png" width="100%" class="landscape">
    </body>
</html>`),a.inject_css=`
    html {
        height:100%;
    }
    
    body {
        padding:0;
        margin:0;
        height:100%;
        display: flex;
        flex-direction: row;
        justify-items: revert;
        align-items: flex-end;
        justify-content: center;
        overflow:hidden;
    }
    
    
    h1 {
        font-size: 50px;
        color:white;
        position:absolute;
        top: 6%;
        text-align: center;
        left: 0;
        right: 0;
        text-shadow:1px 1px 3px rgba(0,0,0,0.25);
        padding:0 40px;
    }
    
    * {
        z-index:2;
    }
    
     img.landscape {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        z-index:1;
        //width: 100%;       
        //object-fit: cover;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.2));
        margin:0;
    }
    
    img.background {
        position:absolute;
        left:0;
        top:0;
        z-index:0;
        //width: 100%;
        //height: 100%;
        //object-fit: cover;
        filter:none;
        margin:0;
    }
    
    img[src*="rocket"] {
        margin:0 20px 10px 20px;
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22))
        margin-bottom:20px;
    }
    
    @keyframes jello {
      11.1% {
        transform: none
      }
      22.2% {
        transform: skewX(-12.5deg) skewY(-12.5deg)
      }
      33.3% {
        transform: skewX(6.25deg) skewY(6.25deg)
      }
      44.4% {
        transform: skewX(-3.125deg) skewY(-3.125deg)
      }
      55.5% {
        transform: skewX(1.5625deg) skewY(1.5625deg)
      }
      66.6% {
        transform: skewX(-0.78125deg) skewY(-0.78125deg)
      }
      77.7% {
        transform: skewX(0.390625deg) skewY(0.390625deg)
      }
      88.8% {
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg)
      }
      100% {
        transform: none
      }
    }

    .jello {
      animation: jello 2s infinite;
      transform-origin: center
    }
   
`,a.addStylesheet("style.css",""),o(a),a.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("h1");i?i.getInlineStylePropertyValue("font-family")||(o=`<p>Set the Font family CSS property for the heading.</p>`):o=`<p>Did you delete the text? No problem, use Undo or restart the lesson.</p>`,o?(t.result="error",t.message=o):(t.result="ok",t.delay=2e3,e.sourceNode.find("img,h1").forEach(function(e){e.hasClass("background")||e.addClass("jello")})),t.decoration=s("alien13","check-box")},tutorial.addLesson(a),new PgTutorialLesson("a14_div","alien13")),h=(n.name=`Super fun space rides`,n.display_title=`Super fun space rides`+s("alien13",null,null,"-30px"),`<div class="pg-info-panel-img-grid">`),r=(h=(h=(h+=n.getHtmlForLibButton("H1",`<h1>This is a cool heading</h1>`,null,"Heading"))+n.getHtmlForLibButton("P",`<p>A paragraph is a chunk of text about something very interesting.</p>`,null,"Paragraph"))+b(n)+"</div>",n.description=makeDesc("AQ6Kyk7sa84",`<p>Zootata hired you to create a website for her space adventure company.</p> `+h,null),n.video=`https://youtube.com/bubi`,n.addPage("page1.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <h1>Super fun space rides!</h1>
        <p>Do you want to travel all around the Universe and visit cool places? Well, you’ve hit the jackpot!</p>
        <p>We are running fun space rides from HTML Planet to:</p>
        <p>Slimy Space balls - 20 Space Coins</p>
        <p>Bouncy balloon Planet - 25 Space Coins</p>
        <p>The bubble swamp - 10 Space Coins</p>
        <p>All rides include yummy snacks such as Sticky Boomballs, Smelly Rock Tenticles and Wigly Fuzzworms.</p>
        <p>See you soon!</p>
    </body>
</html>`),n.addPage("page2.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
    </body>
</html>`),n.addPage("page3.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
    </body>
</html>`),n.addStylesheet("style.css",`
        
    html {
        height:100%;
    }
    
    body {
        padding: 20px 40px 140px;
        margin: 0;
        min-height: 100%;
        //display: flex;
        //flex-direction: column;
        box-sizing: border-box;
        position: relative;
        text-align: center;
    }
    
    div {
        position:absolute;
        top: 6%;
        text-align: center;
        left: 0;
        right: 0;
        padding:0 40px;
    }
    
    h1 {
        //font-size: 50px;
       // text-shadow:1px 1px 3px rgba(0,0,0,0.25);
    }
    
    h1, p {
        max-width:500px;
        z-index:10;
    }
    
    * {
        z-index:2;
        position:relative;
    }
    
     img.landscape {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        z-index:1;
        //width: 100%;       
        //object-fit: cover;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.2));
        margin:0;
    }
    
    img.background {
        position:absolute;
        left:0;
        top:0;
        z-index:0;
        //width: 100%;
        //height: 100%;
        //object-fit: cover;
        filter:none;
        margin:0;
    }
    
    aaimg.rocket {
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22))
        position:absolute;
        right:20px;
        bottom:10px;
    }
    
    aaimg.alien {
        margin:0 20px 10px 20px;
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22))
        margin-bottom:20px;
        position:absolute;
        right:20px;
        bottom:20px;
    }
   
`),t(n,5,"background","jpg"),t(n,7,"rocket"),t(n,15),t(n,10,"landscape"),t(n,15,"food"),n.onCheck=function(e,t){e.sourceNode.find("img,h1").forEach(function(e){e.hasClass("background")||e.addClass("jello")});t.result="ok",t.delay=2e3,t.decoration=s("alien3","check-box")},new PgTutorialLesson("line_height","alien1",c)),a=(r.name=`Line height to the rescue!`,r.display_title=`Line height to the rescue!`+s("alien1"),r.description=makeDesc("487113294",`<p>Use the <code>line-height</code> CSS property to set the height of lines of text.</p>`,`<p>Unscramble the secret message:
</p>
            <ol>
            <li><b>Click on the text</b> to select the ${select("p")} element.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Use the <b>${field("Height","style:line-height")}</b> field in the Text section to set the <code>line-height</code>.</li>
            <li>Try values with a unit (for example <code>32px</code>) and without a unit (for example <code>1.3</code>).</li>
</ol>
`),r.video=`https://youtube.com/bubi`,r.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <img src="landscape10.png" width="100%" class="landscape">
        <img src="background1.jpg" width="100%" height="100%" class="background">
        <p>Far far away from HTML Planet, in deep space where nobody lives lies the super deep Black Hole. But do you know who lives in the super deep Black Hole? A super cute alien with super fluffy fur! To visit teleport to coordinates ABFE541-HW63. See you soon!
</p>
    </body>
</html>`),r.addPage("example.html",`<!doctype html><html><head><link href="example.css" rel="stylesheet">
</head><body><p>One summer day on the HTML Planet Bloobeek decided to go for a walk. It was a huge undertaking – a long journey, including the trek of six to seven hours, and a massive trek to see an entire planet covered in sunny grassy fields. Lots of space sheeps came on board, and the whole thing was a spectacular sight. He returned late in the evening.</p></body></html>`),r.inject_css=`
        
    html {
        height:100%;
    }
    
    body {
        padding:0;
        margin:0;
        height:100%;
        display: flex;
        flex-direction: row;
        justify-items: revert;
        align-items: flex-end;
        justify-content: center;
        overflow:hidden;
    }
    
    
    p {
        font-size: 28px;
        font-family: Impact, Charcoal, sans-serif;
        color:white;
        position:absolute;
        top: 6%;
        text-align: center;
        left: 40px;
        right:40px;
        //width: 50%; 
    //max-width: 600px; 
        text-shadow:1px 1px 3px rgba(0,0,0,0.25);
        padding:0 20px;
        //box-shadow: 5px 15px 37px rgba(0, 0, 0, 0.27); 
    //background-color: rgba(255, 244, 185, 0.81);
        line-height:1px;
    }
    
    * {
        z-index:2;
    }
    
     img.landscape {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        z-index:1;
        //width: 100%;       
        //object-fit: cover;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.2));
        margin:0;
    }
    
    img.background {
        position:absolute;
        left:0;
        top:0;
        z-index:0;
        //width: 100%;
        //height: 100%;
        //object-fit: cover;
        filter:none;
        margin:0;
    }
    
    
`,r.addStylesheet("style.css",""),o(r),r.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("p");i?(i=i.getInlineStylePropertyValue("line-height"))?0<=i.indexOf("px")?(i=parseFloat(i.replace("px","")))<28?o=`<p>The line height is too small.</p>`:100<i&&(o=`<p>The line height is too large.</p>`):(i=parseFloat(i))<1?o=`<p>The line height is too small.</p>`:5<i&&(o=`<p>The line height is too large.</p>`):o=`<p>Set the Line height CSS property for the paragraph.</p>`:o=`<p>Did you delete the text? No problem, use Undo or restart the lesson.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien1","check-box")},tutorial.addLesson(r),new PgTutorialLesson("text_style","alien11",c)),n=(a.name=`Text styling riddles`,a.display_title=`Text styling riddles`+s("alien11"),a.description=makeDesc("487115943",``,`<p>Style each paragraph according to what it says:
</p>
            <ol>
            <li><b>Click on the text</b> to select a ${select("p")} element.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Use one of the text styling properties on each paragraph: <code>${field("font-weight","style:font-weight")}</code>, <code>${field("letter-spacing","style:letter-spacing")}</code>, <code>${field("font-style","style:font-style")}</code>, <code>${field("font-variant","style:font-variant")}</code>, <code>${field("text-decoration","style:text-decoration")}</code>, <code>${field("text-transform","style:text-transform")}</code> and <code>${field("text-align","style:text-align")}</code>.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <img src="background4.jpg" width="100%" height="100%" class="background">
        <p>I am very brave and bold!</p>
        <p>My letters are verrrrrry far apart.</p>
        <p>The strong wind leaned me to the right side.</p>
        <p>My letters are all Big, but some are Bigger.</p>
        <p>I used to be a good idea, but now I am crossed out.</p>
        <p>All my letters are big, all are the same size.</p>
        <p>I am in the center of things!</p>
        <p>I am stuck to the right edge.</p>
        <p>I have multiple lines and nicely take up the space from the left edge to the right edge. My words flow like a calm surface of a mountain lake. Only my last line ends wherever it falls.</p>
    </body>
</html>`),a.addPage("example.html",`<!doctype html><html><head><link href="example.css" rel="stylesheet">
</head><body><p>One summer day on HTML Planet, Bloobeek decided to go for a walk. It was a huge undertaking – a long journey, including the trek of six to seven hours, and a massive trek to see an entire planet covered in sunny grassy fields. Lots of space sheeps came on board, and the whole thing was a spectacular sight. He returned late in the evening.</p></body></html>`),a.inject_css=`
        
    html {
        height:100%;
    }
    
    body {
        padding:40px;
        margin:0;
        min-height:100%;
        position:relative;
        box-sizing: border-box;
    }
    
    
    p {
        font-size: 20px;
        font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;;
        position: relative;
    }
    
    * {
        z-index:2;
        position:relative;
    }
    
     img.landscape {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        z-index:1;
        //width: 100%;       
        //object-fit: cover;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.2));
        margin:0;
        opacity:0.4;
    }
    
    img.background {
        position:absolute;
        left:0;
        top:0;
        z-index:0;
        //width: 100%;
        //height: 100%;
        //object-fit: cover;
        filter:none;
        margin:0;
    }
    
    
`,a.addStylesheet("style.css",""),o(a),a.onCheck=function(e,t){for(var o,i=null,a=[{prop:"font-weight",val:"bold"},{prop:"letter-spacing",val:""},{prop:"font-style",val:"italic"},{prop:"font-variant",val:"small-caps"},{prop:"text-decoration",val:"line-through"},{prop:"text-transform",val:"uppercase"},{prop:"text-align",val:"center"},{prop:"text-align",val:"right"},{prop:"text-align",val:"justify"}],l=e.sourceNode.find("p"),n=0;n<a.length&&(l.length<=n?i=`<p>Did you delete the text? No problem, use Undo or restart the lesson.</p>`:(o=l[n].getInlineStylePropertyValue(a[n].prop))?a[n].val&&a[n].val!=o&&(i=`<p>The paragraph ${n+1} should have the CSS property <b>${a[n].prop}</b> set to <code>${a[n].val}</code>.</p>`):i=`<p>The paragraph ${n+1} should have the CSS property <b>${a[n].prop}</b>.</p>`,!i);n++);i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien11","check-box")},tutorial.addLesson(a),new PgTutorialLesson("parent_style","alien13",c)),r=(n.name=`Space drama with parent elements`,n.display_title=`Space drama with parent elements`+s("alien13","second",null,"-40px")+s("alien1"),n.description=makeDesc("487501174",`<p>Set style on the parent element to quickly style all elements inside it.</p>`,`<p>Help Blotomic learn his lines:
</p>
            <ol>
            <li>Click on the empty page area to <b>select the ${select("body")} element</b>.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Set <b>${field("Font family","style:font-family")}</b> to <code>Courier New, Courier, monospace</code> (scroll to the end of the font selection box) and <b>Font size</b> to <code>18px</code>.</li>
            <li>Select <b>Blotomic's lines</b> one by one and make them <code>bold</code> using the <b>${field("Font weight","style:font-weight")}</b> CSS property.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <h1>The space trip to the center of the Wobbly Jelly Asteroid Belt</h1>

<p>- Scene 1 -</p>

<p>Zootata: Oh no! Our rocket engine is on fire!</p>

<p>Blotomic: Quick, spray it with anti-fire dust!</p>

<p>Zootata: Where is it? Did you pack the anti-fire dust?</p>

<p>Blotomic: What?! I thought you packed it.</p>

<p>(Zootata sighs and puts hands on her head.)</p>

<p>Zootata: What shall we do now?</p> 

<p>Blotomic: I will put on my space suit, go out and close the fuel valve.</p>

<p>Zootata: Be careful, it’s dangerous. We are flying almost at the speed of light.</p>

<p>(Blotomic puts on his space suit and leaves the rocket, switches on the radio.)</p>

<p>Blotomic: Zootata, can you hear me?</p>

<p>Zootata: Loud and clear.</p>

<p>Blotomic: I see the problem. A lump of space lava got stuck in the engine.</p>

<p>- End of scene 1 -</p>

    </body>
</html>`),o(n),n.inject_css=`
body {
padding:40px 80px;
}
`,n.addStylesheet("style.css",``),n.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("body");if((i.getInlineStylePropertyValue("font-family")+"").indexOf("Courier")<0)o=`<p>Set the Font family CSS property of the <b>body</b> to <code>Courier New</code>.</p>`;else if(i.getInlineStylePropertyValue("font-size")+""!="18px")o=`<p>Set the Font size CSS property of the <b>body</b> to <code>18px</code>.</p>`;else for(var a=e.sourceNode.find("p"),l=0;l<a.length;l++)if(0<=a[l].text().indexOf("Blotomic:")){if("bold"!=a[l].getInlineStylePropertyValue("font-weight")){o=`<p>The sentance &quot;${a[l].text()}&quot; should be bold.</p>`;break}}else if("bold"==a[l].getInlineStylePropertyValue("font-weight")){o=`<p>The sentance &quot;${a[l].text()}&quot; should not be bold.</p>`;break}o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien1","check-box")},tutorial.addLesson(n),"Backgrounds"),a=new PgTutorialLesson("background_color","alien13",r),c=(a.name=`More space drama with background color`,a.display_title=`More space drama with background color`+s("alien13","second",null,"-40px")+s("alien1"),a.description=makeDesc("487503138",`<p>Use the <code>background-color</code> CSS property to color the background.</p>`,`<p>Help Zootata and Blotomic read the script by setting the background color:
</p>
            <ol>
            <li>Click on the empty page area to <b>select the ${select("body")} element</b>.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>In the <b>Background section</b> use the <b>${field("Color","style:background-color")}</b> field to set the <code>background-color</code>. Click on the ${field("color square","style:background-color .color-value-placeholder")} on the right side of the field to open the color picker.</li>
            <li>Select a background color on which both dark and light text is readable.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
<h1>The space trip to the center of the Wobbly Jelly Asteroid Belt</h1>
        <p style="text-align: center;">- Scene 2 -</p>
        <p>(Blotomic uses his gloves to try pulling the space lava out of the engine.)</p>
        <p>Blotomic: <span style="color: #ffffff; border-bottom: 1px dashed #979797;">It&rsquo;s too hot and sticky!</span> Can you come and help me?</p>
        <p>Zootata: I’m coming!</p>
        <p>Blotomic: Hurry up!</p>
        <p>(Zootata grabs her <span style="color: #ffffff; border-bottom: 1px dashed #979797;">slime puller</span>, puts on her space suit and leaves their rocket.)</p>
        <p>Zootata: Lets pull together! <span style="color: #ffffff; border-bottom: 1px dashed #979797;">Three, two, one, PULL!</span></p>
        <p>(They both pull and tug as strong as they can. <span style="color: #ffffff; border-bottom: 1px dashed #979797;">The chunk of lave flies out of the engine.</span>)</p>
        <p>Blotomic: Yes! We did it!</p>
        <p>(Zootata and Blotomic return to the rocket door but <span style="color: #ffffff; border-bottom: 1px dashed #979797;">the door is shut</span>.)</p>
        <p>Zootata: Oh no&hellip; <span style="color: #ffffff; border-bottom: 1px dashed #979797;">The door is locked!</span></p>
        <p>Blotomic: It must have happened <span style="color: #ffffff; border-bottom: 1px dashed #979797;">when we pulled on the lava and the rocket shook.</span></p>
        <p style="text-align: center;">- End of Scene 2 -</p>


    </body>
</html>`),a.addPage("example.html",`<!doctype html><html><head><link href="example.css" rel="stylesheet">
</head><body><p>One summer day on HTML Planet, Bloobeek decided to go for a walk.</p><p>It was a huge undertaking – a long journey, including the trek of six to seven hours, and a massive trek to see an entire planet covered in sunny grassy fields.</p><p>Lots of space sheeps came on board, and the whole thing was a spectacular sight. He returned late in the evening.</p></body></html>`),o(a),a.inject_css=`
body {
padding:40px 80px;
font-size:18px;
font-family: 'Courier New', Courier, monospace;
}
`,a.addStylesheet("style.css",``),a.onCheck=function(e,t){var o=null;(o=e.sourceNode.findOne("body").getInlineStylePropertyValue("background-color")?o:`<p>Set the Background color CSS property of the <b>body</b> to a suitable color.</p>`)?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien1","check-box")},tutorial.addLesson(a),new PgTutorialLesson("background_image","alien3",r)),n=(c.name=`Background image for the perfect photo`,c.display_title=`Background image for the perfect photo`+s("alien3"),c.description=makeDesc("487504382",`<p>Use the <code>background-image</code> CSS property to display an image in the background of an element.</p>`,`<p>Help Bloby choose the background for his photo:
</p>
            <ol>
            <li><b>Click on the ${select("body")} element</b> to select it.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Enter <code>background1.jpg</code> into the <b>${field("Image","style:background-image")}</b> field in the <b>Background section</b>.</li>
            <li>Try also <code>background2.jpg</code>, <code>background3.jpg</code>, <code>background4.jpg</code> and <code>background5.jpg</code> and choose your favorite.</li>
            <li><b>Hint:</b> Open the ${field("image gallery","style:background-image .crsa-pick-file")} and select the image there.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><img src="alien3.png" width="340"></body></html>`),`
        html { height: 100%;}
    body {
        padding:40px;
        overflow:hidden;
        height:100%;
    }
    
    img {
        position:absolute;
        bottom:-80px;
        left:20%;
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22));
    }
`),a=(c.inject_css=n,c.addStylesheet("style.css",""),o(c),c.onCheck=function(e,t){var o=null;(o=(e.sourceNode.findOne("body").getInlineStylePropertyValue("background-image")||"").match(/^url\(\'background[1-5]\.jpg\'\)$/)?o:`<p>Set the Background image CSS property of the <b>body</b> to one of the backgrounds: <code>background1.jpg</code> to <code>background5.jpg</code>.</p>`)?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien3","check-box")},tutorial.addLesson(c),new PgTutorialLesson("background_repeat","alien5",r)),n=(a.name=`Multiplying planet backgrounds`,a.display_title=`Multiplying planet backgrounds`+s("alien5",null,"60px"),a.description=makeDesc("487506612",`<p>Use the <code>background-repeat</code> CSS property to control how the background image is repeated.</p>`,`<p>Play around with the Planet multiplying machine:
</p>
            <ol>
            <li><b>Select the ${select("body")}</b> element.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Enter <code>planet1.jpg</code> into the <b>${field("Image","style:background-image")}</b> field in the <b>Background section</b>.</li>
            <li>Try different values of <b>${field("Repeat","style:background-repeat")}</b> property and see what happens.</li>
            <li>You can also multiply planets <code>planet2.jpg</code>, <code>planet3.jpg</code>, <code>planet4.jpg</code>, <code>planet5.jpg</code> and <code>planet6.jpg</code>.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body></body></html>`),`
        html { height: 100%;}
    body {
        padding:40px;
        overflow:hidden;
        height:100%;
    }
    
    img {
        position:absolute;
        bottom:-80px;
        left:20%;
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22));
    }
`),c=(a.inject_css=n,a.addStylesheet("style.css",``),o(a),a.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("body");(i.getInlineStylePropertyValue("background-image")||"").match(/^url\(\'planet[1-6]\.jpg\'\)$/)?i.getInlineStylePropertyValue("background-repeat")||(o=`<p>Set the Background repeat CSS property of the <b>body</b> element.</p>`):o=`<p>Set the Background image CSS property of the <b>body</b> to one of the planets: <code>planet1.jpg</code> to <code>planet6.jpg</code>.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},tutorial.addLesson(a),new PgTutorialLesson("background_position","alien15",r)),n=(c.name=`Use the background position to save the planet`,c.display_title=`Use the background position to save the planet`+s("alien15"),c.description=makeDesc("487507710",`<p>Use the <code>background-position</code> CSS property to position the background image.</p>`,`<p>Move the planet into the <b>right bottom</b> corner to save it from the asteroid:
</p>
            <ol>
            <li><b>Click on the ${select("body")}</b> element to select it.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Try different values of the <b>Background position</b> property to see what happens.</li>
            <li>Set the <b>Background position</b> property to <code>right bottom</code> in order to move the planet to the safe corner.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body style="background-image: url('planet1.jpg'); background-repeat: no-repeat;><h1>Asteroid<br>hit zone!</h1></body></html>`),`
        html { height: 100%;}
    body {
        padding:30px;
        overflow:hidden;
        height:100%;
    }
    
    h1 {
        background-color: rgba(255, 0, 0, 0.62); width: 300px; height: 300px; text-align: center; display: flex; flex-direction: column; justify-content: center; border-radius: 150px; color: rgba(0, 0, 0, 0.81); font-size: 47px; font-family: Impact, Charcoal, sans-serif; margin-top: 0; margin-bottom: 0;
        pointer-events:none;
    }
`),a=(c.inject_css=n,c.addStylesheet("style.css",``),o(c),c.onCheck=function(e,t){var o=null;(o="right bottom"!=e.sourceNode.findOne("body").getInlineStylePropertyValue("background-position")?`<p>Set the Background position CSS property of the <b>body</b> to <code>right bottom</code>.</p>`:o)?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},tutorial.addLesson(c),new PgTutorialLesson("background_size","alien3",r)),n=(a.name=`Background size for Bloby's photo`,a.display_title=`Background size for Bloby's photo`+s("alien3",null,null,"-30px"),a.description=makeDesc("487508987",`<p>Use the <code>background-size</code> CSS property to control the size of the background image.</p>`,`<p>Help Bloby take a photo in front of his house:
</p>
            <ol>
            <li><b>Click on the ${select("body")}</b> element to select it.</li>
            <li>Go to the <b>${tooltip("style panel","style")}</b>.</li>
            <li>Set <b>${field("Background Size","style:background-size")}</b> to <code>cover</code> or <code>contain</code>.</li>
            <li>Combine the size with background <b>${field("Repeat","style:background-repeat")}</b>, <b>${field("Position","style:background-position")}</b> and <b>${field("Color","style:background-color")}</b> to create the perfect background.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body style="background-image:url('background3.jpg');><img src="alien3.png" width="340"></body></html>`),`
        html { height: 100%;}
    body {
        padding:40px;
        overflow:hidden;
        height:100%;
        box-sizing: border-box;
    }
    
    img {
        position:absolute;
        bottom:-80px;
        left:20%;
        filter: drop-shadow(3px 7px 4px rgba(0,0,0,0.22));
    }
`),c=(a.inject_css=n,a.addStylesheet("style.css",``),o(a),a.onCheck=function(e,t){var o=null;(o=e.sourceNode.findOne("body").getInlineStylePropertyValue("background-size")?o:`<p>Set the Background size CSS property of the <b>body</b> element.</p>`)?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien3","check-box")},tutorial.addLesson(a),new PgTutorialLesson("a23_fun_grid","alien3")),h=(c.name=`Background image for the perfect photo`,c.display_title=`Background image for the perfect photo`+s("alien3"),`<div class="pg-info-panel-img-grid">`),n=(h=(h=(h+=c.getHtmlForLibButton("H1",`<h1>This is a cool heading</h1>`,null,"Heading"))+c.getHtmlForLibButton("P",`<p>A paragraph is a chunk of text about something very interesting.</p>`,null,"Paragraph"))+b(c)+"</div>",c.description=makeDesc("AQ6Kyk7sa84",`<p>Use <code>background-image</code> CSS property to display an image in the background of an element.</p> `+h,null),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html><html><head><link href="style.css" rel="stylesheet">
</head><body><div></div><div></div></body></html>`),`
        html { height: 100%;}
    body {
        padding:40px;
        box-sizing: border-box;
        min-height:calc(100%);
        //display:grid;
        //grid-template-columns:1fr 1fr 1fr;
        //grid-template-rows:1fr 1fr 1fr;
        //grid-gap:20px;
        font-size:18px;
    }
    
    aadiv {
        //box-shadow:2px 2px 8px rgba(0,0,0,0.2);
        //overflow:hidden;
        //text-align:center;
        position: absolute;
        left:0;
        top:0;
        bottom:0;
        right:0;
    }
    
    h1 {
    margin:10px;
    }
    
    p {
    margin:10px;
    }
`),r=(c.addStylesheet("style.css",n),t(c,5,"background","jpg"),t(c,7,"rocket"),t(c,15),t(c,10,"landscape"),t(c,15,"food"),`Fun project - Rooky's card`),a=new PgTutorialLesson("card_div","alien5",r),n=(a.name=`Rooky's card - Div, the handy box`,a.display_title=`Rooky's card - Div, the handy box`+s("alien5",null,"60px"),a.description=makeDesc("487510599",`<p>The ${showElement("div")} element is used for grouping and styling other HTML elements.</p>`,`<p>Start creating a business card for Rooky:</p>
<ol>
            <li>Select the <b>${select("body element","body")}</b>, go to the ${tooltip("style panel","style")} and set its <b>${field("Background image","style:background-image")}</b> to <code>background1.jpg</code>.</li>
            <li><b>Drag the Div element</b> to the page:<br>${a.getHtmlForLibButton(tag("div",""),"<div data-empty-placeholder></div>")}</li>
            <li><b>${select("Select the Div","div")}</b> and set its <b>${field("Background color","style:background-color")}</b> to <code>white</code>.</li>
</ol>
`),a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
    </body>
</html>`),`
       
        * {
        box-sizing: border-box;
        }
        
    html {
        height:100%;
    }
    
    body {
        padding: 0;
        margin: 0;
        min-height: 100%;
    }
`),c=(a.inject_css=n,a.addStylesheet("style.css",``),a.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("body"),a=i.getInlineStylePropertyValue("background-image")||"",i=i.getInlineStylePropertyValue("background-color")||"";a||i?a&&!a.match(/^url\(\'background[1-5]\.jpg\'\)$/)?o=`<p>Set the Background image CSS property of the <b>body</b> to one of the backgrounds: <code>background1.jpg</code> to <code>background5.jpg</code>.</p>`:0==(i=e.sourceNode.find("div")).length?o=`<p>Drag the DIV element to the page.</p>`:1<i.length?o=`<p>There should be only one DIV element on the page. ${d}</p>`:i[0].getInlineStylePropertyValue("background-color")||(o=`<p>Set the Background image CSS property of the <b>DIV</b> to <code>white</code>.</p>`):o=`<p>Set the Background image CSS property of the <b>body</b> to <code>background1.jpg</code>.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},o(a),tutorial.addLesson(a),new PgTutorialLesson("card_margin","alien5",r)),c=(c.name=`Rooky's card - Outer space margins`,c.main_lesson=a,c.display_title=`Rooky's card - Outer space margins`+s("alien5",null,"60px"),c.description=makeDesc("487721552",`<p>Use <code>margin</code> CSS property to set the space around the element.</p>`,`<p>Continue creating a business card for Rooky:</p>
<ol>
            <li><b>${select("Select the Div","div")}</b> element and go to the ${tooltip("style panel","style")}.</li>
            <li>Set the <b>Margin</b> on all four sides to <code>40px</code>. Remember to put the <code>px</code> unit after the number.</li>
</ol>
`),c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background1.jpg');">
        <div style="background-color: #ffffff;" data-empty-placeholder></div>
    </body>
</html>`),c.inject_css=n,c.addStylesheet("style.css",``),c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("div");if(i)for(var a=i.get$DOMElement(),l=["margin-left","margin-top","margin-right"],n=0;n<l.length;n++){var r=f(a,l[n]);if(null===r||r<20){o=`<p>The <b>${l[n]}</b> on the DIV element should be <code>40px</code>.</p><p>Make sure that you have the <code>px</code> unit after the number, without spaces.</p>`;break}}else o=`<p>Did you delete the DIV? No problem, use Undo or restart the lesson.</p>`;o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("card_br","alien5",r)),c=(c.name=`Rooky's card - BReak the line`,c.display_title=`Rooky's card - BReak the line`+s("alien5",null,"50px"),c.main_lesson=a,c.description=makeDesc("487723919",`<p>The ${showElement("br")} element is used to create line breaks in text.</p>`,`<p>Add the text to Rooky's business card:</p>
<ol>
            <li><b>Drag the H1</b> for the name and drop it <b>inside the Div</b>, then use the <b>${tooltip("edit text","edit_text")}</b> tool to change the text to <code>Rooky Blub</code>:<br>${c.getHtmlForLibButton(tag("h1","My Name"),"<h1>My Name</h1>",null,null,"div > h1","Drag the H1 into the Div element.")}</li>
            <li><b>Drag the P</b> for the job title and place it <b>below the H1</b>, then change the text to <code>Hotel Manager</code>:<br>${c.getHtmlForLibButton(tag("p","My Job"),"<p>My Job</p>",null,null,"div > p","Drag the P into the Div element.")}</li>
            <li><b>Drag the P</b> for the contact information and place it <b>below the job title</b>:<br>${c.getHtmlForLibButton(tag("p","Phone:..."),"<p>Phone: +1234 685 5643 E-mail: rooky.blub@spacehotel.com SpaceTalk: @RookyBlub</p>",null,null,"div > p","Drag the P into the Div element.")}</li>
            <li>Activate the <b>${tooltip("edit text","edit_text")}</b> tool and use the ${pgShowKbdCombo("SHIFT+ENTER")} key to break the contact information into three lines.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background1.jpg');">
        <div style="background-color: #ffffff; margin: 40px;" data-empty-placeholder></div>
    </body>
</html>`),c.inject_css=n,c.addStylesheet("style.css",``),o(c),c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("div");if(i){for(var a,l,n=e.sourceNode.find("h1,p"),r=0;r<n.length;r++){if(n[r].parent!==i){o=`<p>The <b>${n[r].tagName}</b> should be directly in the DIV element, not in the ${n[r].parent.tagName} element. Use the Structure panel to move it.</p>`;break}if(""===n[r].text().trim()){o=`<p>The <b>${n[r].tagName}</b> should have the text. Use the Edit Text tool to edit its content.</p>`;break}}o||(a=e.sourceNode.findOne("h1"),l=e.sourceNode.findOne("p"),a?e.sourceNode.find("p").length<2?o=`<p>Drag the P element into the DIV.</p>`:e.sourceNode.find("p br").length<2?o=`<p>Break the text into at least three lines. Use Edit Text tool and press SHIFT + Enter to insert a break.</p>`:"My Name"===a.text()?o=`<p>Use the Edit Text tool to write Rooky Blub into the H1.</p>`:l&&"My Job"===l.text()&&(o=`<p>Use the Edit Text tool to write Hotel Manager into the first P.</p>`):o=`<p>Drag the H1 element into the DIV.</p>`)}else o=`<p>Did you delete the DIV? No problem, use Undo or restart the lesson.</p>`;o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},tutorial.addLesson(c),new PgTutorialLesson("card_padding","alien5",r)),c=(c.name=`Rooky's card - Pad the inner space`,c.display_title=`Rooky's card - Pad the inner space`+s("alien5",null,"50px"),c.main_lesson=a,c.description=makeDesc("487725903",`<p>Use the <code>padding</code> CSS property to set the inner space of the element.</p>`,`<p>Add spacing around the text:</p>
<ol>
    <li><b>${select("Select the Div","div")}</b> element and go to the ${tooltip("style panel","style")}.</li>
    <li>Set the <b>Padding left</b> and <b>Padding right</b> to <code>20px</code>.</li>
    <li>Set the <b>Padding top</b> to <code>10px</code>.</li>
    <li>Set the <b>Padding bottom</b> to <code>20px</code>.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background1.jpg');">
        <div style="background-color: #ffffff; margin: 40px;">
            <h1>Rooky Blub</h1>
            <p>Hotel manager</p>
            <p>Phone: +1234 685 5643<br>E-mail: rooky.blub@spacehotel.com<br>SpaceTalk: @RookyBlub</p>
        </div>
    </body>
</html>`),c.inject_css=n,c.addStylesheet("style.css",``),c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("div");if(i)for(var a=i.get$DOMElement(),l=["padding-left","padding-top","padding-right","padding-bottom"],n=0;n<l.length;n++){var r=f(a,l[n]);if(null===r||r<10){o=`<p>The <b>${l[n]}</b> on the DIV element should be at least <code>10px</code>.</p>`;break}}else o=`<p>Did you delete the DIV? No problem, use Undo or restart the lesson.</p>`;o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("card_background","alien5",r)),c=(c.name=`Rooky's card - Adding the image`,c.display_title=`Rooky's card - Adding the image`+s("alien5",null,"50px"),c.main_lesson=a,c.description=makeDesc("487726795",`<p>Use the <code>background-image</code> to add the image to the background of the element.</p>`,`<p>Add the image of Rooky to the card:</p>
<ol>
    <li><b>${select("Select the Div","div")}</b> element and go to the ${tooltip("style panel","style")}.</li>
    <li>Set the <b>Background image</b> to <code>alien5.png</code>.</li>
    <li>Set the <b>Padding left</b> to <code>160px</code>.</li>
    <li>Set the <b>Background repeat</b> to <code>no-repeat</code>.</li>
    <li>Set the <b>Background size</b> to <code>50px</code>.</li>
    <li>Set the <b>Background position</b> to <code>50px center</code>.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background1.jpg');">
        <div style="background-color: #ffffff; margin: 40px; padding: 10px 20px 20px;">
            <h1>Rooky Blub</h1>
            <p>Hotel manager</p>
            <p>Phone: +1234 685 5643<br>E-mail: rooky.blub@spacehotel.com<br>SpaceTalk: @RookyBlub</p>
        </div>
    </body>
</html>`),c.inject_css=n,c.addStylesheet("style.css",``),o(c),c.onCheck=function(e,t){var o,i=null,a=e.sourceNode.findOne("div");a?(o=a.get$DOMElement(),o=f(o,"padding-left"),(a.getInlineStylePropertyValue("background-image")||"").match(/^url\(\'alien[1]?[0-9]\.png\'\)$/)?!o||o<100?i=`<p>Set the Padding left CSS property of the <b>DIV</b> to <code>160px</code>.</p>`:"no-repeat"!==a.getInlineStylePropertyValue("background-repeat")?i=`<p>Set the Background repeat CSS property of the <b>DIV</b> to <code>no-repeat</code>.</p>`:a.getInlineStylePropertyValue("background-size")?a.getInlineStylePropertyValue("background-position")||(i=`<p>Set the Background size CSS property of the <b>DIV</b> to <code>50px center</code>.</p>`):i=`<p>Set the Background size CSS property of the <b>DIV</b> to <code>60px</code>.</p>`:i=`<p>Set the Background image CSS property of the <b>DIV</b> to <code>alien5.png</code>.</p>`):i=`<p>Did you delete the DIV? No problem, use Undo or restart the lesson.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien5","check-box")},tutorial.addLesson(c),new PgTutorialLesson("card_dimensions","alien5",r)),c=(c.name=`Rooky's card - Making the card fit`,c.display_title=`Rooky's card - Making the card fit`+s("alien5",null,"50px"),c.main_lesson=a,c.description=makeDesc("487728336",`<p>Use the <code>width</code> CSS property to set the width of the element.</p>`,`<p>Set the size for Rooky's card:</p>
<ol>
    <li><b>${select("Select the Div","div")}</b> element and go to the ${tooltip("style panel","style")}.</li>
    <li>Scroll down to the <b>Dimensions section</b>.</li>
    <li>Set the <b>Width</b> to <code>450px</code>.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background1.jpg');">
        <div style="background-color: #ffffff; margin: 40px; padding: 10px 20px 20px 160px; background-image: url('alien5.png'); background-repeat: no-repeat; background-size: 60px; background-position: 50px center;">
            <h1>Rooky Blub</h1>
            <p>Hotel manager</p>
            <p>Phone: +1234 685 5643<br>E-mail: rooky.blub@spacehotel.com<br>SpaceTalk: @RookyBlub</p>
        </div>
    </body>
</html>`),c.inject_css=n,c.addStylesheet("style.css",``),c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("div");i?(!(i=y(i,"width"))||i<400)&&(o=`<p><b>Width</b> on the DIV element should be at least <code>400px</code>.</p>`):o=`<p>Did you delete the DIV? No problem, use Undo or restart the lesson.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("card_border","alien5",r)),r=(c.name=`Rooky's card - Adding border for a final touch`,c.display_title=`Rooky's card - Adding border for a final touch`+s("alien5",null,"50px"),c.main_lesson=a,c.description=makeDesc("487729234",`<p>Use the <code>border</code> and <code>border-radius</code> CSS properties to style the edges of the element.</p>`,`<p>Make Rooky's card even more special:</p>
<ol>
    <li><b>${select("Select the Div","div")}</b> element and go to the ${tooltip("style panel","style")}.</li>
    <li>Scroll down to the <b>Border</b> section.</li>
    <li>Play around with different border designs. Select the <b>Border style</b> to show the border and set its <b>Border width</b> and <b>Border color</b>. Use the <b>Equal borders</b> button to make the border same on all four sides.</li>
    <li>Set <b>Border radius</b> to round the corners. Use the <b>Equal radius</b> button to make all corners the same.</li>
    <li>Use all your styling skills to design a truly unique card.</li>
    <li>${tooltip("Turn off the menus","menu_toggle")} to better see the selected element.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background1.jpg');">
        <div style="background-color: #ffffff; margin: 40px; padding: 10px 20px 20px 160px; background-image: url('alien5.png'); background-repeat: no-repeat; background-size: 60px; background-position: 50px center; width: 450px;">
            <h1>Rooky Blub</h1>
            <p>Hotel manager</p>
            <p>Phone: +1234 685 5643<br>E-mail: rooky.blub@spacehotel.com<br>SpaceTalk: @RookyBlub</p>
        </div>
    </body>
</html>`),c.inject_css=n,c.addStylesheet("style.css",n),c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("div");i?"none"==(i=i.get$DOMElement()).css("border-top-style")?o=`<p>Set the border style of the DIV element.</p>`:"none"!=i.css("border-top-style")&&f(i,"border-top-width")||(o=`<p>Set the border width of the DIV element.</p>`):o=`<p>Did you delete the DIV? No problem, use Undo or restart the lesson.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien5","check-box")},o(c),tutorial.addLesson(c),"Positioning elements"),a=new PgTutorialLesson("bubbles_create","alien9",r),n=(a.name=`Absolutely fun bubbles - Creating a bubble`,a.display_title=`Absolutely fun bubbles - Creating a bubble`+s("alien9",null,null,"-40px"),a.description=makeDesc("487967032",`<p>Use the <code>%</code> unit to create easily resizable designs.</p>`,`<p>Create a space bubble for Toosasa:</p>
<ol>
    <li>Select the ${select("body")} element.</li>
    <li>Set the <b>Background image</b> of the <b>Body</b> to <code>background4.jpg</code>.</li>
    <li><b>Drag the Div element</b> to the page:<br>${a.getHtmlForLibButton(tag("div",""),"<div data-empty-placeholder></div>",null,null,"body > div","Drag the Div into the Body element, not into another Div.")}</li>
    <li>Set the <b>Background color</b>  of the <b>Div</b> to a transparent white color.</li>
    <li>Set the <b>Width</b> and <b>Height</b> to <code>300px</code>.</li>
    <li>Turn off the ${tooltip("empty placeholder","empty_placeholder")}.</li>
    <li>Set the <b>Border radius</b> of all corners to <code>50<b>%</b></code>. Remember to use the <code>%</code> unit.</li>
    <li>Add <code>alien9.png</code> as the <b>Background image</b>, set <b>Background repeat</b> to <code>No repeat</code> and <b>Background position</b> to <code>center center</code>.</li>
    <li>Set the <b>Background size</b> to <code>60%</code>.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
    </body>
</html>`),a.inject_css=i,a.addStylesheet("style.css",``),a.onCheck=function(e,t){var o,i=null,a=e.sourceNode.findOne("body");(i=m(a,"Body"))||((a=e.sourceNode.findOne("div"))?(o=a.get$DOMElement(),a.getInlineStylePropertyValue("background-color")?f(o,"width")!==f(o,"height")?i=`<p>Set Width and Height of the DIV to <code>300px</code>.</p>`:a.hasAttribute("data-empty-placeholder")?i=`<p>Switch off the empty placeholder on the DIV so that you can see the real dimensions of the DIV.</p>`:"50%"!=a.getInlineStylePropertyValue("border-radius")?i=`<p>Set Border radius of all four corners of the DIV element to <code>50<b>%</b></code>. Remember to use the <code>%</code> unit.`:(e="DIV",(i=(a.getInlineStylePropertyValue("background-image")||"").match(/^url\(\'alien([1-9]|1[0-5])\.png\'\)$/)?null:`<p>Set the Background image CSS property of the <b>${e}</b> to one of the alien: <code>alien1.png</code> to <code>alien15.png</code>.</p>`)||("no-repeat"!=a.getInlineStylePropertyValue("background-repeat")?i=`<p>Set Background repeat of the DIV to <code>no-repeat</code>.</p>`:"center center"!=a.getInlineStylePropertyValue("background-position")?i=`<p>Set Background position of the DIV to <code>center center</code>.</p>`:(a.getInlineStylePropertyValue("background-size")||"").match(/^[2-8][0-9]\%$/)||(i=`<p>Set Background size of the DIV to <code>60%</code>.</p>`))):i=`<p>Set the background color of the DIV to a transparent white color.</p>`):i=`<p>Drag the DIV element to the page.</p>`),i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien9","check-box")},o(a),tutorial.addLesson(a),new PgTutorialLesson("bubbles_absolute","alien9",r)),c=(n.name=`Absolutely fun bubbles - Let's move the bubble`,n.display_title=`Absolutely fun bubbles - Let's move the bubble`+s("alien9",null,null,"-40px")+s("alien10",null,"90px","-54px","70px")+s("alien11",null,"80px","-50px","170px"),n.main_lesson=a,n.description=makeDesc("487972999",`<p>Use <code>position:absolute;</code> and CSS properties <code>left</code>, <code>top</code>, <code>right</code> and <code>bottom</code> to position elements anywhere on the screen.</p>`,`<p>Move the bubble around:</p>
<ol>
    <li><b>${select("Select the bubble Div","div")}</b> and go to the <b>Position section</b> of the ${tooltip("style panel","style")}.</li>
    <li>Set <b>Position</b> to <code>absolute</code>.</li>
    <li>Move the bubble by setting its distance from the <b>Left</b>, <b>Top</b>, <b>Right</b> or <b>Bottom</b> edge.<br><br>
    Remember to delete the Left value if you set the Right, and the other way around. The same for Top and Bottom.</li>
    <li>${tooltip("Duplicate","duplicate")} the bubble to <b>create more bubbles</b>. Use the ${tooltip("Structure panel","structure")} to see and select overlapping bubbles.</li>
        <li>Use <b>Background image</b> to add other aliens (for example <code>alien1.png</code> and so on) and use <b>Position fields</b> to put them in different positions around the page. For extra fun, resize the bubbles.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
        <html>
        <head>
        <link href="style.css" rel="stylesheet">
            </head>
            <body style="background-image: url('background4.jpg'); background-repeat: no-repeat; background-size: cover;">
            <div style="background-color: rgba(255, 255, 255, 0.53); width: 300px; height: 300px; border-radius: 50%; background-image: url('alien9.png'); background-repeat: no-repeat; background-position: center center; background-size: 60%;"></div>
            </body>
            </html>`),n.inject_css=i,n.addStylesheet("style.css",``),n.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("div");i?"absolute"!=i.getInlineStylePropertyValue("position")?o=`<p>Set the Position of the DIV to <code>absolute</code>.</p>`:i.getInlineStylePropertyValue("top")||i.getInlineStylePropertyValue("bottom")||i.getInlineStylePropertyValue("left")||i.getInlineStylePropertyValue("right")?e.sourceNode.find("div")<3&&(o=`<p>Make two more bubbles by duplicating the first bubble and moving them to different positions.</p>`):o=`<p>Set Top, Left, Bottom or Right properties to move the bubble.</p>`:o=`<p>Did you delete the bubble? No problem, use Undo or restart the adventure.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien9","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("bubbles_zindex","alien9",r)),n=(c.name=`Absolutely fun bubbles - Who's at the top?`,c.display_title=`Absolutely fun bubbles - Who's at the top?`+s("alien9",null,null,"-40px")+s("alien10",null,"90px","-54px","70px")+s("alien11",null,"80px","-50px","170px"),c.main_lesson=a,c.description=makeDesc("487977424",`<p>Use the <code>z-index</code> CSS property to set which element is at the top.</p>`,`<p>Arrange bubbles from top to bottom:</p>
<ol>
    <li><b>Make the bubbles overlap</b> by setting their absolute positions.</li>
    <li>You can change the color of bubbles to better see how they overlap (select a bubble and change its <b>Background color</b>).</li>
    <li>Play around with the <b>Z-Index</b> property to stack them in different ways.</li>
    <li>Use numeric values without units, such as <code>1</code>, <code>2</code>, <code>3</code>... The larger the number, the higher the element is.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background4.jpg'); background-repeat: no-repeat; background-size: cover;">
        <div style="background-color: rgba(255, 221, 44, 0.53); width: 300px; height: 300px; border-radius: 50%; background-image: url('alien11.png'); background-repeat: no-repeat; background-position: center center; background-size: 55%; position: absolute; left: 276px; top: 51px;"></div>
        <div style="background-color: rgba(192, 157, 255, 0.53); width: 300px; height: 300px; border-radius: 50%; background-image: url('alien9.png'); background-repeat: no-repeat; background-position: center center; background-size: 60%; position: absolute; right: 100px; bottom: 41px;"></div>
        <div style="background-color: rgba(44, 255, 187, 0.53); width: 300px; height: 300px; border-radius: 50%; background-image: url('alien10.png'); background-repeat: no-repeat; background-position: center center; background-size: 55%; position: absolute; left: 40px; top: 120px;"></div>
    </body>
</html>`),c.inject_css=i,c.addStylesheet("style.css",i),c.onCheck=function(e,t){var o=null,i=e.sourceNode.find("div");if(i.length<2)o=`<p>Did you delete one or more bubbles? No problem, use Undo or restart the adventure.</p>`;else{for(var a=0;a<i.length;a++){var l=!1;if(i[a].getInlineStylePropertyValue("z-index")){l=!0;break}}l||(o=`<p>Set Z Index of bubble DIVs to arrange their stacking order.</p>`)}o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien9","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("relative_key","alien13",r)),a=(n.name=`Unlocking the door with the relative position`,n.display_title=`Unlocking the door with the relative position`+s("alien13","second",null,"-40px")+s("alien1"),n.description=makeDesc("488386850",`<p>Use the <code>position:relative</code> CSS statement to move elements from their original position.</p>`,`<p>Help Zootata and Blotomic unlock the space ship door:</p>
<ol>
    <li>Select ${select("a green floating part Div","div.key")}.</li>
    <li>Set its <b>Position</b> to <code>relative</code>.</li>
    <li>Use the <b>Top</b> or <b>Bottom</b> properties to move the part down to the base.</li>
    <li>Do the same for all the floating parts.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-image: url('background1.jpg'); background-repeat: no-repeat; background-size: cover; padding: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="width: 100%; min-width:300px; max-width:600px;">
            <div style="display: flex; flex-direction: row; align-items: flex-start; justify-content: space-evenly;">
                <div class="key" style="height: 100px;"></div>
                <div class="key" style="height: 80px;"></div>
                <div class="key" style="height: 60px;"></div>
                <div class="key" style="height: 120px;"></div>
            </div>
            <div class="base" style="margin-top: 20px;">
                <span style="text-transform: uppercase; font-size: 20px; font-family: 'Arial Black', Gadget, sans-serif;">Emergency key</span> 
                <br>Slide the floating parts down to open
            </div>
        </div>
    </body>
</html>`),n.addStylesheet("style.css",""),n.inject_css=i+`
.base {
    background-color: #f98c41; 
    height: 82px; 
    border-bottom-left-radius: 20px; 
    border-bottom-right-radius: 20px; 
    text-align: center; 
    padding-top: 18px; 
    font-family: Arial, Helvetica, sans-serif; 
    border-top: 4px solid #ffffff;    
}

.key {
background-color: #25ae4e;
height: 100px; 
border-top: 16px solid #fff400; 
border-top-left-radius: 10px; 
border-top-right-radius: 10px;
margin-right:20px;
display:inline-block;
flex-grow:1;
flex-shrink:1;
min-width:50px;
}
.key:last-child {
    margin-right:0;
}

`,n.onCheck=function(e,t){var o=null,i=e.sourceNode.find("div.key");if(i.length<4)o=`<p>There should be four keys in the lock. Use Undo or restart the lesson if you deleted some.</p>`;else for(var a=[40,60,80,20],l=0;l<i.length;l++){if("relative"!=i[l].getInlineStylePropertyValue("position")){o=`<p>The key ${l+1} should have Position set to <code>relative</code>.</p>`;break}if(2<=Math.abs((y(i[l],"top")||0)-a[l])&&2<=Math.abs((y(i[l],"bottom")||0)+a[l])){o=`<p>The key ${l+1} should have Top set to <code>${a[l]}px</code>.</p>`;break}}o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),"CSS rules &amp; classes"),c=new PgTutorialLesson("shop_rules","alien2",a),r=(c.name=`CSS rules in the picture shop`,c.display_title=`CSS rules in the picture shop`+s("alien2",null,null,"-40px"),c.description=makeDesc("488390762",`<p>CSS rules let us style a group of elements, for example all images.</p>`,`<p>Help Mooteetee create frames for her pictures:</p>
<ol>
    <li><b>${select("Select an image","img")}</b> and go to the ${tooltip("style panel","style")}.</li>
    <li>Click on the <b>Create new CSS rule</b> button.</li>
    <li>Enter <code>img</code> as the selector. This rule will style all images (${showElement("img")} elements) on the page.</li>
    <li>Click on the <b>Create button</b>. Keep the new rule selected and set the style with <b>Border style</b>, <b>Border width</b>, <b>Border color</b>, <b>Border radius</b>, <b>Margin</b> and other CSS properties.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-color: #ebe6df; padding: 20px; text-align: center;">
        <img src="picture1.jpg" height="200px">
        <img src="picture2.jpg" height="200px"> 
        <img src="picture3.jpg" height="200px"> 
        <img src="picture4.jpg" height="200px"> 
        <img src="picture5.jpg" height="200px"> 
        <img src="picture6.jpg" height="200px"> 
    </body>
</html>`),c.addStylesheet("style.css",""),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o=null,i=x("img");0===i.length?o=`<p>Create a new CSS rule with the selector <code>img</code>.</p>`:k(i,/^border/)?k(i,/^margin/)||(o=`<p>Select the <code>img</code> rule in the Style panel and set margins.</p>`):o=`<p>Select the <code>img</code> rule in the Style panel and set the border.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien2","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("shop_location","alien2",a)),n=(r.name=`Where is the CSS rule?`,r.display_title=`Where is the CSS rule?`+s("alien2",null,null,"-40px"),r.main_lesson=c,r.description=makeDesc("488395679",`<p>CSS rules are stored in stylesheet files. The ${showElement("link")} element is used to connect stylesheets with the page.</p>`,`<p>Explore the code and try changing the CSS rule:</p>
<ol>
    <li>Open the <b>${tooltip("code editor","code_editor")}</b>.</li>
    <li>In the code editor, go to <b>${codeEditor("style.css")}</b> tab.</li>
    <li><b>${select("Select an image","img")}</b> on the page.</li>
    <li>Make sure the ${rule("img")} is selected in the ${tooltip("style panel","style")}.</li>
    <li>Use the ${tooltip("style panel","style")} to change the design of the ${rule("img")} and notice how the CSS code is changing (when using color picker, click on Choose in the picker to see the change in the code).</li>
</ol>
`),r.video=`https://youtube.com/bubi`,r.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-color: #ebe6df; padding: 20px; text-align: center;">
        <img src="picture1.jpg" height="200px">
        <img src="picture2.jpg" height="200px"> 
        <img src="picture3.jpg" height="200px"> 
        <img src="picture4.jpg" height="200px"> 
        <img src="picture5.jpg" height="200px"> 
        <img src="picture6.jpg" height="200px"> 
    </body>
</html>`),r.addStylesheet("style.css",`img {
    margin-right: 20px;
    margin-bottom: 20px;
    border: 10px ridge #ffffff;
}
`),r.inject_css=i,r.open_all_files_in_code=!0,r.onCheck=function(e,t){var o,i=null;o=null,l.getStylesheets().forEach(function(e){e.url&&0<=e.url.indexOf("/style.css")&&(o=e)}),(i=o&&!o.changed?`<p>Go ahead, try changing a CSS rule and observe the change in the style.css code editor.`:i)?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien2","check-box")},o(r),tutorial.addLesson(r),new PgTutorialLesson("shop_style","alien2",a)),r=(n.name=`CSS rules and the Style attribute`,n.display_title=`CSS rules and the Style attribute`+s("alien2",null,null,"-40px"),n.main_lesson=c,n.description=makeDesc("488396963",`<p>CSS rules and Style attribute can work together.</p>`,`<p>Make one of the frames special by changing the element style:</p>
<ol>
    <li>Select the <b>${select("second image","img:nth-child(2)")}</b>.</li>
    <li>In the ${tooltip("style panel","style")}, select the <b>Style attribute</b> to edit the <code>style</code> attribute of the Rocket ${select("img","img:nth-child(2)")} element.</li>
    <li>Change the <b>Border color</b> or other CSS properties of the Style attribute.</li>
    <li>Select the ${rule("img")} and see what happens if you change it.</li>
    <li>Notice that the Style attribute properties override the properties of the <code>img</code> CSS rule.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body style="background-color: #ebe6df; padding: 20px; text-align: center;">
        <img src="picture1.jpg" height="200px">
        <img src="picture2.jpg" height="200px"> 
        <img src="picture3.jpg" height="200px"> 
        <img src="picture4.jpg" height="200px"> 
        <img src="picture5.jpg" height="200px"> 
        <img src="picture6.jpg" height="200px"> 
    </body>
</html>`),n.addStylesheet("style.css",`img {
    margin-right: 20px;
    margin-bottom: 20px;
    border: 10px ridge #ffffff;
}
`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne('img[src="picture2.jpg"]');i?(i.getAttr("style")||"").match(/border/)||(o=`<p>Select the rocket image, select the Style attribute and set the border.</p>`):o=`<p>Did you delete the rocket picture? No problem, use Undo or restart the lesson.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien2","check-box")},o(n),tutorial.addLesson(n),"CSS rules &amp; classes"),a=new PgTutorialLesson("class_buttons","alien15",r),c=(a.name=`Spaceship button classes - Creating the layout`,a.display_title=`Spaceship button classes - Creating the layout`+s("alien15",null,null,"-40px"),a.description=makeDesc("488399088",`<p>Use ${showElement("button")} elements is create clickable buttons.</p>`,`<p>Add buttons and edit their labels:</p>
<ol>
     <li>Drag <code>six</code> <b>${showElement("button")} elements</b> to the page:<br>${a.getHtmlForLibButton(tag("button","Press me"),"<button>Press me</button>")}</li>
    <li>Select each ${select("button")} one by one and use the <b>${tooltip("text edit","edit_text")}</b> tool to set button names such as <code>On</code>, <code>Off</code>, <code>Speed up</code>, <code>Slow down</code>, <code>Space horn</code> and <code>Eject</code>.</li>
    <li>Note, pressing the ${pgShowKbd("ENTER")} key while editing the text will create new button elements. Select and delete such unwanted elements.</li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
    </body>
</html>`),a.addStylesheet("style.css",`
`),i+`
body {
padding:20px;
}`),n=(a.inject_css=c,a.open_all_files_in_code=!0,a.onCheck=function(e,t){var o=null,i=e.sourceNode.find("button");if(i.length<6)o=`<p>Drag more buttons to the page. There should be at least six.</p>`;else for(var a=0;a<i.length;a++)if("Press me"===i[a].text()){o=`<p>Use the Edit text tool to change the label of the button ${a+1}.</p>`;break}o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},o(a),tutorial.addLesson(a),new PgTutorialLesson("class_buttons_rule","alien15",r)),n=(n.name=`Spaceship button classes - The dot space button rule`,n.display_title=`Spaceship button classes - The dot space button rule`+s("alien15",null,null,"-40px"),n.main_lesson=a,n.description=makeDesc("488402079",`<p>Selectors of CSS rules for classes have a <code>.</code> in front of the class name.</p>`,`<p>Create a CSS rule for the class <code>space-button</code>:</p>
<ol>
     <li><b>Select the first ${select("button")}</b> and go to the ${tooltip("style panel","style")}.</li>
     <li>Click on the <b>Create new CSS rule</b> button.</li>
     <li>Enter <code>.space-button</code> in the selector field (don't forget the dot <code>.</code>) and click on <b>Create</b>.</li>
     <li>Keep the new rule <code>.space-button</code> selected and set the <b>Background color</b>.</li>
     <li><b>Open the ${tooltip("code editor","code_editor")}</b> to check out the HTML and CSS code. Notice the <code>class</code> attribute on the first ${showElement("button")} element.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <button>On</button>
        <button>Off</button>
        <button>Speed up</button>
        <button>Slow down</button>
        <button>Space horn</button>
        <button>Eject</button>        
    </body>
</html>`),n.addStylesheet("style.css",`
`),n.inject_css=c,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=x(".space-button");0===i.length?o=`<p>Create a new CSS rule with the selector <code>.space-button</code>.</p>`:0===e.sourceNode.find("button.space-button").length?o=`<p>Add the <code>space-button</code> class to the first button by keeping the Add class checked when you create the CSS rule.</p>`:k(i,"background-color")||(o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its Background color.</p>`),o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("class_buttons_style","alien15",r)),n=(n.name=`Spaceship button classes - Designing the buttons`,n.display_title=`Spaceship button classes - Designing the buttons`+s("alien15",null,null,"-40px"),n.main_lesson=a,n.description=makeDesc("488806481",`<p>Use the Style panel to style the selected CSS rule.</p>`,`<p>Style the <code>.space-button</code> CSS rule to design the buttons:</p>
<ol>
     <li>Select the first <b>${select("button")} element</b> and go to the ${tooltip("style panel","style")}.</li>
     <li>Make sure the ${rule(".space-button")} is selected.</li>
     <li>Set the <b>Width</b> to <code>150px</code> and the <b>Height</b> to <code>80px</code>.</li>
     <li>Set the <b>Margin top</b>, <b>Margin left</b> and <b>Margin right</b> to <code>10px</code>.</li>
     <li>Set the <b>Font family</b> to <code>Arial</code>, <b>Font size</b> to <code>16px</code>, <b>Text transform</b> and <code>uppercase</code>.</li>
     <li>Set the <b>Padding left</b> and <b>Padding right</b> to <code>10px</code> to add inner space.</li>
     <li>Set the <b>Border style</b> to <code>solid</code> (the first choice), <b>Border width</b> to <code>10px</code>, <b>Border color</b> to a shade of gray and <b>Border radius</b> to <code>20px</code>.</li>
    <li>These values are just examples. Feel free to create your own design.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <button class="space-button">On</button>
        <button>Off</button>
        <button>Speed up</button>
        <button>Slow down</button>
        <button>Space horn</button>
        <button>Eject</button>          
    </body>
</html>`),n.addStylesheet("style.css",`
.space-button {
}
`),n.inject_css=c,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=x(".space-button");0===i.length?o=`<p>Create a new CSS rule with the selector <code>.space-button</code>.</p>`:k(i,"width")?k(i,"height")?k(i,/^margin/)?k(i,/^padding/)?k(i,"font-family")?k(i,"font-size")?k(i,"text-transform")?k(i,/^border/)||(o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Border</b>.</p>`):o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Text transform</b> to <code>uppercase</code>.</p>`:o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Font size</b>.</p>`:o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Font family</b>.</p>`:o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Padding</b>.</p>`:o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Margins</b>.</p>`:o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Height</b> to <code>80px</code>.</p>`:o=`<p>Select the <code>.space-button</code> rule in the Style panel and set its <b>Width</b> to <code>150px</code>.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("class_buttons_adding_classes","alien15",r)),n=(n.name=`Spaceship button classes - Adding the class to all buttons`,n.display_title=`Spaceship button classes - Adding the class to all buttons`+s("alien15",null,null,"-40px"),n.main_lesson=a,n.description=makeDesc("488809154",`<p>Use the <b>Classes</b> section in the <b>Attributes panel</b> to add existing classes to elements.</p>`,`<p>Add the class <code>space-button</code> to the rest of the buttons:</p>
<ol>
     <li>Select the <b>${select("second button","button:nth-child(2)")}</b> and go to the <b>${tooltip("attributes panel","attributes_panel")}</b>.</li>
    <li>In the <b>Classes</b> section click on the <code>space-button</code> class to add it to the selected element.</li>
    <li>Do the same for the rest of the ${showElement("button")} elements.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <button class="space-button">On</button>
        <button>Off</button>
        <button>Speed up</button>
        <button>Slow down</button>
        <button>Space horn</button>
        <button>Eject</button>              
    </body>
</html>`),n.addStylesheet("style.css",`
.space-button {
    width: 150px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    padding-left: 10px;
    padding-right: 10px;
    border: 10px solid #5a5a5a;
    border-radius: 20px;
}
`),n.inject_css=c,n.open_all_files_in_code=!0,n.onCheck=function(e,t){for(var o=null,i=e.sourceNode.find("button"),a=0;a<i.length;a++)if(!i[a].hasClass("space-button")){o=`<p>The button ${a+1} doesn't have the class <code>space-button</code>.</p>`;break}if(!o)for(i=e.sourceNode.find(".space-button"),a=0;a<i.length;a++)if("button"!==i[a].tagName){o=`<p>The ${i[a].tagName} element should not have the class <code>space-button</code>.</p>`;break}o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("class_buttons_subclasses","alien15",r)),n=(n.name=`Spaceship button classes - A smart way to color the buttons`,n.display_title=`Spaceship button classes - A smart way to color the buttons`+s("alien15",null,null,"-40px"),n.main_lesson=a,n.description=makeDesc("488810750",`<p>HTML elements can have more than one class. Properties of their CSS rules are combined.</p>`,`<p>Create classes for green buttons:</p>
<ol>
     <li>Select the <b>${select("ON button","button")}</b> and go to the ${tooltip("style panel","style")}.</li>
     <li>Click on the <b>Create new CSS rule</b> button and enter the selector <code>.green-space-button</code>. Click on Create.</li>
     <li>Set the <b>Background color</b> to green and the <b>Border color</b> to darker shade of green. Use the <b>Equal borders</b> button to make all borders the same.</li>
     <li>Select the <b>${select("Speed up","button:nth-child(3)")}</b> button. Go to the <b>${tooltip("attributes panel","attributes_panel")}</b> and in <b>Classes</b> section add the <code>green-space-button</code> class.</li>
     <li>Try changing the ${rule(".space-button")} and see what happens.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <button class="space-button">On</button>
        <button class="space-button">Off</button>
        <button class="space-button">Speed up</button>
        <button class="space-button">Slow down</button>
        <button class="space-button">Space horn</button>
        <button class="space-button">Eject</button>       
    </body>
</html>`),n.addStylesheet("style.css",`
.space-button {
    width: 150px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    padding-left: 10px;
    padding-right: 10px;
    border: 10px solid #5a5a5a;
    border-radius: 20px;
}

`),n.inject_css=c,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=x(".green-space-button");0===i.length?o=`<p>Create a new CSS rule with the selector <code>.green-space-button</code>.</p>`:0===e.sourceNode.find("button.green-space-button").length?o=`<p>Add the <code>green-space-button</code> class to the first button by keeping the Add class checked when you create the CSS rule.</p>`:k(i,"background-color")?k(i,/^border/)?e.sourceNode.find("button.green-space-button").length<2&&(o=`<p>Add the class <code>green-space-button</code> to at least one other button. Use the Attributes panel to do that.</p>`):o=`<p>Select the <code>.green-space-button</code> rule in the Style panel and set its Border color to a shade of green.</p>`:o=`<p>Select the <code>.green-space-button</code> rule in the Style panel and set its Background color to a shade of green.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("class_buttons_red","alien15",r)),n=(n.name=`Spaceship button classes - The red button`,n.display_title=`Spaceship button classes - The red button`+s("alien15",null,null,"-40px"),n.main_lesson=a,n.description=makeDesc("488813037",`<p>The order of CSS rules in the code is important.</p>`,`<p>Create the CSS rule for the red button:</p>
<ol>
     <li>Select the <b>${select("Eject button","button:nth-child(6)")}</b> and go to the ${tooltip("style panel","style")}.</li>
     <li>Click on the <b>Create new CSS rule</b> button and enter the selector <code>.red-space-button</code>. Then click on Create.</li>
     <li>Set the <b>Background color</b> to red and the <b>Border color</b> to a darker shade of red. Use the equal button to make all borders the same.</li>
     <li>Open the ${tooltip("code editor","code_editor")} and take a look at the ${codeEditor("style.css code","style.css")}. The rule that comes later in the code is more important.</li>
     <li>The style panel displays the rules from the most important down to the least important.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <button class="green-space-button space-button">On</button>
        <button class="space-button">Off</button>
        <button class="green-space-button space-button">Speed up</button>
        <button class="space-button">Slow down</button>
        <button class="space-button">Space horn</button>
        <button class="space-button">Eject</button>     
    </body>
</html>`),n.addStylesheet("style.css",`
.space-button {
    width: 150px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    padding-left: 10px;
    padding-right: 10px;
    border: 10px solid #5a5a5a;
    border-radius: 50px;
}

.green-space-button {
    background-color: #00dd0d;
    border-color: #068f00;
}

`),n.inject_css=c,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=x(".red-space-button");0===i.length?o=`<p>Create a new CSS rule with the selector <code>.red-space-button</code>.</p>`:0===e.sourceNode.find("button.red-space-button").length?o=`<p>Add the <code>red-space-button</code> class to a button by keeping the Add class checked when you create the CSS rule.</p>`:k(i,"background-color")?k(i,/^border/)||(o=`<p>Select the <code>.red-space-button</code> rule in the Style panel and set its Border color to a shade of red.</p>`):o=`<p>Select the <code>.red-space-button</code> rule in the Style panel and set its Background color to a shade of red.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("class_buttons_hover","alien15",r)),r=(n.name=`Spaceship button classes - Hover and active`,n.display_title=`Spaceship button classes - Hover and active`+s("alien15",null,null,"-40px"),n.main_lesson=a,n.description=makeDesc("488814213",`<p>Use CSS rules with <code>:hover</code> and <code>:active</code> to style elements when the mouse pointer is over them and when they are clicked.</p>`,`<p>Create CSS rules for hover (mouse over) and active (click) states:</p>
<ol>
     <li><b>${select("Select a button","button")}</b> and go to the ${tooltip("style panel","style")}.</li>
     <li>Click on the <b>Create new CSS rule</b> button and enter the selector <code>.space-button:hover</code>. Then click on Create.</li>
     <li>Change the <b>Border width</b> to a different value, for example <code>5px</code>. Use the <b>Equal borders</b> button to set the width on all fours sides. <b>Move the mouse over the buttons</b> to see the effect.</li>
     <li><b>Create new CSS rule</b> for <code>.space-button:active</code>. Set <b>Position</b> to <code>relative</code> and <b>Top</b> to <code>5px</code>. In the <b>Border</b> section set the <b>Outline</b> to <code>none</code>.</li>
     <li>Try clicking on buttons.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <button class="green-space-button space-button">On</button>
        <button class="space-button">Off</button>
        <button class="green-space-button space-button">Speed up</button>
        <button class="space-button">Slow down</button>
        <button class="space-button">Space horn</button>
        <button class="red-space-button space-button">Eject</button>    
    </body>
</html>`),n.addStylesheet("style.css",`
.space-button {
    width: 150px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    padding-left: 10px;
    padding-right: 10px;
    border: 10px solid #5a5a5a;
    border-radius: 50px;
}

.green-space-button {
    background-color: #00dd0d;
    border-color: #068f00;
}

.red-space-button {
    background-color: #ff5d5d;
    border-color: #d30000;
}
`),n.inject_css=c,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=x(".space-button:hover");0===i.length?o=`<p>Create a new CSS rule with the selector <code>.space-button:hover</code>.</p>`:k(i,/^border/)?0===(i=x(".space-button:active")).length?o=`<p>Create a new CSS rule with the selector <code>.space-button:active</code>.</p>`:k(i,"position")?k(i,"top")?k(i,"outline")||(o=`<p>Select the <code>.space-button:active</code> rule in the Style panel and set its Outline to <code>none</code>.</p>`):o=`<p>Select the <code>.space-button:active</code> rule in the Style panel and set its Top to <code>5px</code>.</p>`:o=`<p>Select the <code>.space-button:active</code> rule in the Style panel and set its Position to <code>relative</code>.</p>`:o=`<p>Select the <code>.space-button:hover</code> rule in the Style panel and set its Border.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien15","check-box")},o(n),tutorial.addLesson(n),"Fun project - Create a Super Space Rides website"),a=new PgTutorialLesson("zootata_website_structure","alien13",r),S=(a.name=`Super Space Rides - The structure`,a.display_title=`Super Space Rides - The structure`+s("alien13",null,null,"-30px"),a.description=makeDesc("489265274",`<p>Use <b>${showElement("header")}</b>, <b>${showElement("section")}</b> and <b>${showElement("footer")}</b> HTML elements to organize the website content.</p>`,`<p>Create the structure for the website:</p>
<ol>
     <li><b>Drag the Header element</b> to the top of the page. We will use it for the main heading and the company introduction.<br>${a.getHtmlForLibButton(tag("header",""),"<header data-empty-placeholder></header>",null,null,"body > header","The Header should be the first element in the Body.")}</li>
     <li><b>Add four Section elements</b> for Space rides, Video, Quotes and Contact us sections:<br>${a.getHtmlForLibButton(tag("section",""),"<section data-empty-placeholder></section>",null,null,"body > section","The Section should be in the Body element, not in Header or in another Section.")}</li>
      <li><b>Place the Footer element</b> at the bottom of the page. The footer will contain the company address.<br>${a.getHtmlForLibButton(tag("footer",""),"<footer data-empty-placeholder></footer>",null,null,"body > footer","The Footer should be the last element in the Body.")}</li>
     <li>Use the <b>Structure panel</b> to check that the order of the elements is correct:
     <pre>
Body
    <b>header</b>
    <b>section</b>
    <b>section</b>
    <b>section</b>
    <b>section</b>
    <b>footer</b></pre>
     </li>
</ol>
`),a.video=`https://youtube.com/bubi`,a.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
    </body>
</html>`),a.addStylesheet("style.css",`
`),a.inject_css=i,a.open_all_files_in_code=!0,function(e){switch(e){case 1:return"first";case 2:return"second";case 3:return"third";default:return e+"th"}}),c=(a.onCheck=function(e,t){for(var o=null,i=["header","section","section","section","section","footer"],a=e.sourceNode.find("header,section,footer"),l=0;l<i.length&&(a.length<=l||a[l].tagName!==i[l]?o=`<p>The ${S(l+1)} element in the Body should be a <b>${i[l]}</b>.</p>`:"body"!==a[l].parent.tagName&&(o=`<p>The ${a[l].tagName} should be in the Body element.</p>`),!o);l++);o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(a),tutorial.addLesson(a),new PgTutorialLesson("zootata_website_ids","alien13",r)),n=(c.name=`Super Space Rides - Give names to elements`,c.display_title=`Super Space Rides - Give names to elements`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("489270095",`<p>Use the <b>id</b> attribute to give names to important HTML elements.</p>`,`<p>Give names to all section elements:</p>
<ol>
    <li><b>Select the first ${select("section")}</b> element.</li>
    <li>Go to the <b>${tooltip("attributes panel","attributes_panel")}</b>.</li>
    <li>Set <b>Id</b> to <code>rides</code>.</li>
    <li>Set the ids of the other three sections to <code>video</code>, <code>quotes</code> and <code>contact</code>.</li>
     <li>Use the <b>${tooltip("structure panel","structure")}</b> to check that the order and ids of the elements are correct:
     <pre>
Body
    header
    section#<b>rides</b>
    section#<b>video</b>
    section#<b>quotes</b>
    section#<b>contact</b>
    footer</pre>
     </li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header data-empty-placeholder></header>
        <section data-empty-placeholder></section>
        <section data-empty-placeholder></section>
        <section data-empty-placeholder></section>
        <section data-empty-placeholder></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),c.addStylesheet("style.css",`
`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o=null,i=["rides","video","quotes","contact"],a=e.sourceNode.find("section");if(4!==a.length)o=`<p>There should be four Section elements on the page. ${d}</p>`;else for(var l=0;l<a.length;l++)if(a[l].getAttr("id")!==i[l]){o=`<p>The id of the ${S(l+1)} section should be <b>${i[l]}</b>.</p>`;break}o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("zootata_website_header","alien13",r)),c=(n.name=`Super Space Rides - The header`,n.display_title=`Super Space Rides - The header`+s("alien13",null,null,"-30px"),n.main_lesson=a,n.description=makeDesc("489276444",`<p>The header is the most important part of a website.</p>`,`<p>Let's create the header:</p>
<ol>
     <li><b>Drag the Heading 1</b> to into the ${select("header")}.<br>${n.getHtmlForLibButton(tag("h1","Super Space Rides"),"<h1>Super Space Rides</h1>",null,null,"header > h1","Drag the H1 into the Header element.")}</li>
     <li><b>Place the Paragraph</b> with the description below the heading.<br>${n.getHtmlForLibButton(tag("p","Join Zootata..."),"<p>Join Zootata on amazing rides around the universe!</p>",null,null,"header > p","Drag the P into the Header element.")}</li>
     <li><b>${select("Select the Header","header")}</b> and set <b>Padding left</b>, <b>Padding top</b> and <b>Padding right</b> to <code>40px</code>. Set <b>Padding bottom</b> to <code>180px</code>.</li>
      <li>Keep the Header selected and set <b>Background image</b> to <code>spacerides1.jpg</code>, <b>Background repeat</b> to <code>no repeat</code>, <b>Background size</b> to <code>cover</code> and <b>Background position</b> to <code>right bottom</code>.</li>
      <li>Set the <b>Text color</b> of the Header to <code>white</code>.</li>
      <li><b>Save the style</b> in a new CSS rule with the selector <code>header</code>.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header data-empty-placeholder></header>
        <section data-empty-placeholder id="rides"></section>
        <section data-empty-placeholder id="video"></section>
        <section data-empty-placeholder id="quotes"></section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),n.addStylesheet("style.css",`
`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o,i=null,a=e.sourceNode.find("header");0===a.length?i=`<p>Where did the Header element go? Use Undo or restart the adventure.</p>`:1!==(o=a[0].find("> h1")).length?i=`<p>The header should contain one H1 element.</p>`:1!==(a=a[0].find("> p")).length?i=`<p>The header should contain one P element.</p>`:a[0].prev()!==o[0]?i=`<p>H1 should come before the P element.</p>`:0===(a=x("header")).length?i=`<p>Create a new CSS rule with the selector <code>header</code>.</p>`:k(a,/^padding/)?k(a,"background-image","url('spacerides1.jpg')")?k(a,"background-repeat","no-repeat")?k(a,"background-size","cover")?k(a,"background-position","right bottom")?k(a,"color")||(i=`<p>Set Text color for the <code>header</code> CSS rule to <code>white</code>.</p>`):i=`<p>Set Background position for the <code>header</code> CSS rule to <code>right bottom</code>.</p>`:i=`<p>Set Background size for the <code>header</code> CSS rule to <code>cover</code>.</p>`:i=`<p>Set Background repeat for the <code>header</code> CSS rule to <code>no-repeat</code>.</p>`:i=`<p>Set Background image for the <code>header</code> CSS rule to <code>spacerides1.jpg</code>.</p>`:i=`<p>Set Padding for the <code>header</code> CSS rule.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("zootata_website_rides_1","alien13",r)),n=(c.name=`Super Space Rides - Our Rides - Content`,c.display_title=`Super Space Rides - Our Rides - Content`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("489279335",`<p>Use <b>headings ${showElement("h2")}</b> and <b>${showElement("h3")}</b> for sub-headings and sub-sub-headings.</p>`,`<p>Let's create the Our Rides section:</p>
<ol>
     <li><b>Drag the content</b> into the Section#rides.<br>
     ${c.getHtmlForLibButton(tag("h2","Our Rides"),"<h2>Our Rides</h2>",null,null,"#rides > h2","Drag the H2 into the Section#rides element.")}
     ${c.getHtmlForLibButton(tag("p","Introduction..."),"<p>We have many different space rides. Find the one that is perfect for you!</p>",null,null,"#rides > p","Drag the P into the Section#rides element.")}
     ${c.getHtmlForLibButton(tag("p","Ride 1..."),"<p>Wobbly Jelly Asteroid Belt - Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>",null,null,"#rides > p","Drag the P into the Section#rides element.")}
     ${c.getHtmlForLibButton(tag("p","Ride 2..."),"<p>Underground Space Cave - Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>",null,null,"#rides > p","Drag the P into the Section#rides element.")}
     ${c.getHtmlForLibButton(tag("p","Ride 3..."),"<p>Black Hole Retreat - Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>",null,null,"#rides > p","Drag the P into the Section#rides element.")}
     </li>
      <li>Select the <b>${showElement("p")} describing the first ride</b> and activate the ${tooltip("text editor","edit_text")}. Place the cursor after the ride name, delete spaces and the hyphen and then press the ${pgShowKbd("ENTER")} key to split it into two paragraphs.</li>
      <li>Click on the <b>${tooltip("Done button","edit_text_done")}</b> to stop editing the text.</li>
      <li>Select the <b>${select("<p> with the ride name","#rides > p:nth-of-type(2)")}</b>, click on the ${tooltip("more actions","more_actions")} icon in the selected element menu and select <b>Change to ${showElement("h3")}</b></li>
      <li>Do the same for the other two rides: split their paragraph in two and change the ride name to H3.</li>
      <li><b>${select("Select the Section","section#rides")}</b> and set <b>Padding</b> to <code>40px</code> on all sides. <b>Save the style</b> as a new CSS rule with the selector <code>section</code>.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section data-empty-placeholder id="rides"></section>
        <section data-empty-placeholder id="video"></section>
        <section data-empty-placeholder id="quotes"></section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),c.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}
`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("#rides");if(i){var a=i.findOne("> h2");if(a)if(a.next()&&"p"===a.next().tagName){var l=i.find("> h3");if(3!==l.length)o=`<p>The Rides section should have three H3 elements - one for each ride.</p>`;else{for(var n=0;n<l.length;n++)l[n].next()&&"p"===l[n].next().tagName||(o=`<p>A paragraph with the ride description should come after the ${S(n+1)} ride heading.</p>`);o||(0===(a=x("section")).length?o=`<p>Create a CSS rule with the selector <code>section</code>.`:k(a,/padding/)||(o=`<p>Set the padding on the CSS rule <code>section</code>.`))}}else o=`<p>A paragraph with the section description should come after the H2 element.</p>`;else o=`<p>The rides section should have a Heading 2 for the title.</p>`}else o=`<p>Where did the Section#rides go? Use Undo or restart the adventure.</p>`;o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("zootata_website_rides_2","alien13",r)),c=(n.name=`Super Space Rides - Our Rides - Floating images`,n.display_title=`Super Space Rides - Our Rides - Floating images`+s("alien13",null,null,"-30px"),n.main_lesson=a,n.description=makeDesc("489283547",`<p>Use the <b>float</b> CSS property to make the elements float on the <code>left</code> or <code>right</code> side of the content.</p>`,`<p>Let's add images to Our Rides section:</p>
<ol>
     <li><b>Drag the image</b> and place it after the H3 heading of the first ride (Wobbly Asteroid Field):<br>
     ${n.getHtmlForLibButton(`<img src="images/kids/spacerides2.jpg">`,`<img src="spacerides2.jpg">`,"image",null,"#rides > img","Drag the IMG into the Section#rides element.")}
     </li>
       <li><b>In the ${tooltip("Style panel","style")}</b> go to the Dimensions and set the <b>Width</b> to <code>280px</code>.</li>
       <li>In <b>Display section</b> set the <b>Float</b> to <code>left</code>.</li>
       <li>Set <b>Margin right</b> to <code>20px</code> and <b>Margin bottom</b> to <code>40px</code>.</li>
       <li><b>${select("Select the next H3","section#rides h3:nth-of-type(2)")}</b> with the name of the second ride and set <b>Clear</b> property to <code>both</code>.</li>
       
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section data-empty-placeholder id="video"></section>
        <section data-empty-placeholder id="quotes"></section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),n.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("#rides");i?(i=i.findOne("> h3"))?i.next()&&"img"===i.next().tagName?(i=i.next(),y(i,"width")?"left"!==y(i,"float")?o=`<p>Set the Float of the IMG Style attribute to <code>left</code>.</p>`:y(i,"margin-right")?y(i,"margin-bottom")||(o=`<p>Set the Margin right of the IMG Style attribute to <code>40px</code>.</p>`):o=`<p>Set the Margin right of the IMG Style attribute to <code>20px</code>.</p>`:o=`<p>Set the Width of the IMG Style attribute to <code>280px</code>.</p>`):o=`<p>The ride image should come directly after the first ride H3 heading.</p>`:o=`<p>The rides section should have a Heading 3 for each ride.</p>`:o=`<p>Where did the Section#rides go? Use Undo or restart the adventure.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("zootata_website_rides_3","alien13",r)),n=(c.name=`Super Space Rides - Our Rides - More images &amp; CSS Rules`,c.display_title=`Super Space Rides - Our Rides - More images &amp; CSS Rules`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("489288292",`<p>Use the <b>float</b> CSS property to make the elements float on the <code>left</code> or <code>right</code> side of the content.</p>`,`<p>Let's add images to Our Rides section:</p>
<ol>
    <li><b>${select("Select the image","#rides img")}</b> of the first ride in the Our Rides section.</li>
    <li>In the ${tooltip("Style panel","style")} click on the <b>Save the style</b> as a CSS rule icon on the Style attribute and create a new CSS rule with the selector <code>.image-left</code>.</li>
    <li>Select the <b>${select("heading of the second ride","section#rides h3:nth-of-type(2)")}</b> (the one that has <code>clear: both</code>) and <b>Save the style</b> as a CSS rule with the selector <code>h3</code>.</li>
     <li><b>Drag the image</b> and place it after the H3 with the name of the second ride:<br>
     ${c.getHtmlForLibButton(`<img src="images/kids/spacerides3.jpg">`,`<img src="spacerides3.jpg">`,"image",null,"#rides > img","Drag the IMG into the Section#rides element.")}
     </li>
     <li>Set <b>Width</b> to <code>280px</code> and <b>Float</b> to <code>right</code>. Set <b>Margin left</b> to <code>20px</code> and <b>Margin bottom</b> to <code>40px</code>. <b>Save the style</b> as a new CSS rule with the selector <code>.image-right</code>.</li>
       <li><b>Drag the image</b> and place it after the heading of the third ride:<br>
     ${c.getHtmlForLibButton(`<img src="images/kids/spacerides4.jpg">`,`<img src="spacerides4.jpg">`,"image",null,"#rides > img","Drag the IMG into the Section#rides element.")}
     </li>
       <li>In the <b>${tooltip("attributes panel","attributes_panel")}</b> add the class <code>image-left</code> class to the image.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" style="width: 280px; float: left; margin-right: 20px; margin-bottom: 40px;">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3 style="clear: both;">Underground Space Cave</h3>
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section data-empty-placeholder id="video"></section>
        <section data-empty-placeholder id="quotes"></section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),c.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("#rides img");i?x(".image-left").length<1||i.getAttr("style")?o=`<p>Select the first image and save its Style attribute as a new CSS rule <code>.image-left</code>.</p>`:(i=x(".image-right")).length<1||!e.sourceNode.findOne("#rides img.image-right")?o=`<p>Select the second image and save its Style attribute as a new CSS rule <code>.image-right</code>.</p>`:k(i,"float","right")?k(i,"margin-left")?k(i,"margin-bottom")?k(i,"width")?2!==e.sourceNode.find("#rides img.image-left").length&&(o=`<p>The first and the last ride image should have the class <code>image-left</code>.</p>`):o=`<p>Set Width to <code>280px</code> for the CSS rule <code>.image-right</code>.</p>`:o=`<p>Set Margin bottom to <code>40px</code> for the CSS rule <code>.image-right</code>.</p>`:o=`<p>Set Margin left to <code>20px</code> for the CSS rule <code>.image-right</code>.</p>`:o=`<p>Set Float to <code>right</code> for the CSS rule <code>.image-right</code>.</p>`:o=`<p>Where did the ride image go? Use Undo or restart the adventure.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("zootata_website_video","alien13",r)),c=(n.name=`Super Space Rides - Adding a YouTube video`,n.display_title=`Super Space Rides - Adding a YouTube video`+s("alien13",null,null,"-30px"),n.main_lesson=a,n.description=makeDesc("489710625",`<p>The ${showElement("iframe")} HTML element is used to include the content from other websites.</p>`,`<p>Let's do the Video section:</p>
<ol>
    <li><b>Drag the ${showElement("h2")} heading</b> and the <b>introduction ${showElement("p")} paragraph</b> to the #video section:<br>
    ${n.getHtmlForLibButton(tag("h2","Experience the..."),"<h2>Experience the Space Ride</h2>",null,null,"#video > h2","Drag the H2 into the Section#video element.")}
     ${n.getHtmlForLibButton(tag("p","Watch the video..."),"<p>Watch the video and experience the magic moments of Zootata's space rides:</p>",null,null,"#video > p","Drag the P into the Section#video element.")}
    </li>
    <li>Open the video on YouTube, click on <b>Share</b> and select <b>Embed</b>. Copy the code:<br>
    <a style="margin-top:10px;display:inline-block;" href="https://youtu.be/1ZcU27hgwHE" target="_blank" class="pg-button pg-button-primary">Open on YouTube</a>
    </li>
    <li><b>Add the ${showElement("iframe")} element</b> to the Video section and <b>paste the YouTube code</b> into the Iframe code box when asked:<br>
    ${n.getHtmlForLibButton(tag("iframe",""),"<iframe></iframe>",null,null,"#video > iframe","Drag the IFRAME into the Section#video element.")}
    </li>
    <li>Keep the ${select("iframe")} selected and in the ${tooltip("Style panel","style")} set its <b>Width</b> to <code>100%</code>.</li>
    <li><b>Save the style</b> as a CSS rule with the selector <code>iframe</code>.</li>
    <li>If you need to select an ${select("iframe")} use the ${tooltip("Structure panel","structure")}.</li>
    <li>Enjoy watching the video!</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section data-empty-placeholder id="video"></section>
        <section data-empty-placeholder id="quotes"></section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),n.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}
`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o,i=null,a=e.sourceNode.findOne("#video h2");a?(o=e.sourceNode.findOne("#video p"))?a.next()!==o?i=`<p>The P should come after the H2.</p>`:(a=e.sourceNode.findOne("#video iframe"))?o.next()!==a?i=`<p>The IFRAME should come after the P element.</p>`:(a.getAttr("src")||"").indexOf("youtube.com")<0?i=`<p>Paste the whole IFRAME element code from YouTube. If you made a mistake, delete the IFRAME and add a new one.</p>`:(o=x("iframe")).length<1||a.getAttr("style")?i=`<p>Select the IFRAME and save its Style attribute as a new CSS rule <code>iframe</code>.</p>`:k(o,"width","100%")||(i=`<p>Set Width to <code>100%</code> for the CSS rule <code>iframe</code>.</p>`):i=`<p>Section#video should have an IFRAME element.</p>`:i=`<p>Section#video should have a P with the description.</p>`:i=`<p>Section#video should have a H2 heading.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("zootata_website_quotes_1","alien13",r)),n=(c.name=`Super Space Rides - Happy quotes - Part 1`,c.display_title=`Super Space Rides - Happy quotes - Part 1`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("489713614",`<p>Use the ${showElement("div")} HTML element to group elements together.</p>`,`<p>Create the Quotes section:</p>
<ol>
    <li><b>Drag the ${showElement("h2")} heading</b> and the <b>introduction ${showElement("p")} paragraph</b> to the ${select("#quotes section","section#quotes")}:<br>
    ${c.getHtmlForLibButton(tag("h2","Our Happy..."),"<h2>Our Happy Customers</h2>",null,null,"#quotes > h2","Drag the H2 into the Section#quotes element.")}
     ${c.getHtmlForLibButton(tag("p","Listen to..."),"<p>Listen to our fans explain how much fun they had on our space rides:</p>",null,null,"#quotes > p","Drag the P into the Section#quotes element.")}
    </li>
    <li><b>Add the ${showElement("div")} element</b> for the first quote to the Quotes section:<br>
    ${c.getHtmlForLibButton(tag("div",""),"<div data-empty-placeholder></div>",null,null,"#quotes > div","Drag the DIV into the Section#quotes element.")}
    </li>
    <li>Add the image, quote and signature <b>into the ${select("div","section#quotes div")}</b>:<br>
    ${c.getHtmlForLibButton('<img src="images/kids/spacerides5.jpg">','<img src="spacerides5.jpg">',"image",null,"#quotes > div > img","Drag the IMG into the DIV element inside the Section#quotes element.")}
    ${c.getHtmlForLibButton(tag("p","Wow! The Black Hole..."),"<p>Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.</p>",null,null,"#quotes > div > p","Drag the P into the DIV element inside the Section#quotes element.")}
    ${c.getHtmlForLibButton(tag("p","Bloobeek"),"<p>Bloobeek</p>",null,null,"#quotes > div > p","Drag the P into the DIV element inside the Section#quotes element.")}
    </li>
    <li><b>${select("Select the image","#quotes img")}</b> and set its <b>Width</b> to <code>150px</code> and make it round by setting <b>Border radius</b> to <code>50%</code>.</li>
    <li><b>Select the ${select("div","#quotes div")}</b> and set <b>Text align</b> to <code>center</code> and <b>Padding left</b>, <b>Padding top</b> and <b>Padding right</b> to <code>20px</code>. Set <b>Padding bottom</b> to <code>1px</code>.</li>
    <li>Set <b>Border style</b> to <code>solid</code> (the first choice), <b>Border width</b> to <code>1px</code> and <b>Border color</b> to <code>gray</code>. Use the <b>Equal borders</b> button to apply the border to all four sides.</li>
    <li><b>${select("Select the <p> with the quote","section#quotes div p")}</b> and activate the ${tooltip("Edit text","edit_text")} tool. Insert an opening quote <b>&ldquo;</b> at the start and a closing quote <b>&rdquo;</b> at the end.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section data-empty-placeholder id="quotes"></section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),c.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}
`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o,i=null,a=e.sourceNode.findOne("#quotes h2");a?(o=e.sourceNode.findOne("#quotes p"))?a.next()!==o?i=`<p>The P should come after the H2.</p>`:(a=e.sourceNode.findOne("#quotes div"))?o.next()!==a?i=`<p>The DIV should come after the P element.</p>`:(o=a.findOne("img"))?y(o,"width")?"50%"!==o.getInlineStylePropertyValue("border-radius")?i=`<p>Set the Border radius of the image to <code>50%</code> in all four corners. Note the <code>%</code> unit.</p>`:"center"!==y(a,"text-align")?i=`<p>Set the Text align of the DIV to <code>center</code>.</p>`:y(a,"padding")?y(a,"border")?2!==(o=a.find("p")).length?i=`<p>The DIV should have two P elements: the quote and the signature.</p>`:0&&o[0].text().indexOf("&")<0&&o[0].text().indexOf('"')<0&&(i=`<p>Enclose the quote with double quotes.</p>`):i=`<p>Set the Border of the DIV element.</p>`:i=`<p>Set the Padding of the DIV element.</p>`:i=`<p>Set the Width CSS property of the image to <code>150px</code>.</p>`:i=`<p>The DIV element should contain an image.</p>`:i=`<p>Section#quotes should contain a DIV element.</p>`:i=`<p>Section#quotes should have a P with the description.</p>`:i=`<p>Section#quotes should have a H2 heading.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("zootata_website_quotes_2","alien13",r)),c=(n.name=`Super Space Rides - Happy quotes - Part 2`,n.display_title=`Super Space Rides - Happy quotes - Part 2`+s("alien13",null,null,"-30px"),n.main_lesson=a,n.description=makeDesc("490072603",`<p>Use the Duplicate feature to create copies of elements.</p>`,`<p>Create two more quotes:</p>
<ol>
    <li><b>Select the quote ${select("<div>","#quotes div")}</b> and <b>Save the style</b> as a CSS rule with the selector <code>.quote</code>.</li>
    <li><b>${select("Select the <img>","#quotes div img")}</b> and <b>Save the style</b> as a new CSS rule with the selector <code>.quote-image</code>.</li>
    <li><b>${select("Select the quote <div>","#quotes div")}</b> and <b>${tooltip("Duplicate the element","duplicate")}</b>.</li>
    <li><b>${select("Select the <img>","#quotes div:nth-of-type(2) img")} in the copy</b>, go to the ${tooltip("Attributes panel","attributes_panel")} and set the <b>Src</b> attribute to <code>spacerides6.jpg</code>.</li>
    <li><b>${select("Select the quote <p>","#quotes div:nth-of-type(2) p")}</b> and use the ${tooltip("Edit text","edit_text")} tool to change the text between the quotes to <code style="white-space: normal;">I'm a big fan. I skated faster than the speed of light!</code>.
    <li><b>${select("Select the signature <p>","#quotes div:nth-of-type(2) p:nth-of-type(2)")}</b> and change the text to <code>Rooky</code>.
    <li><b>${select("Select the second quote <div>","#quotes div:nth-of-type(2)")}</b> and use <b>${tooltip("duplicate","duplicate")}</b> to create the third quote with the image <code>spacerides7.jpg</code>, quote <code style="white-space: normal;">The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!</code> and signature <code>Mooteetee</code>.</li>
    <li><b>${select("Select one of the quotes <div>","#quotes div")}</b>, make sure the <code>.quote</code> CSS rule is selected and set <b>Margin top</b> and <b>Margin bottom</b> to <code>30px</code>.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div style="text-align: center; border: 1px solid #b4b4b4; padding: 20px 20px 0px; background-color: #ffffff;">
                <img src="spacerides5.jpg" style="width: 150px; border-radius: 50%;"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
        </section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),n.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}
`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null,i=x(".quote");0===i.length?o=`<p>Save the Style attribute on DIV as a new CSS rule with the selector <code>.quote</code>.</p>`:3!==e.sourceNode.find(".quote").length?o=`<p>There should be three DIVs with the class <code>quote</code> on the page. ${d}</p>`:k(i,/^margin/)||(o=`<p>Select the CSS rule <code>.quote</code> and set Margin top and bottom to <code>30px</code>.</p>`),o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("zootata_website_contact_1","alien13",r)),n=(c.name=`Super Space Rides - Contact us - Part 1`,c.display_title=`Super Space Rides - Contact us - Part 1`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("490073972",`<p>Use the <b>display</b> CSS property to set if the element is displayed inline or as a block.</p>`,`<p>Create the Contact Us section:</p>
<ol>
    <li><b>Drag the content</b> - the heading and the anchor - into the ${select("section#contact","section#contact")}.<br>
     ${c.getHtmlForLibButton(tag("h2","Want to join..."),"<h2>Want to join us on a space ride?</h2>",null,null,"#contact > h2","Drag the H2 into the Section#contact element.")}
     ${c.getHtmlForLibButton(tag("a","Link",{href:"..."}),'<a href="">Link</a>',null,null,"#contact > a","Drag the A into the Section#contact element.")}
    <li>${select("Change the <a>","#contact a")} text to <code>Get in touch!</code></li>
    <li><b>Select the ${select("contact section","#contact")}</b> and set <b>Background image</b> to <code>background1.jpg</code>, <b>Background repeat</b> to <code>no-repeat</code> and <b>Background size</b> to <code>cover</code>. Set <b>Text align</b> to <code>center</code> and <b>Text color</b> to <code>white</code>.</li>
   
    <li><b>Select the ${select("a","#contact a")}</b> and set the <b>Font size</b> to <code>25px</code>, <b>Text color</b> to <code>white</code>, <b>Padding top / bottom</b> to <code>10px</code> and <b>Padding left / right</b> to <code>30px</code>.</li>
    <li>Set <b>Background color</b> to <code>orange</code> and <b>Text decoration</b> to <code>none</code>. Use <b>Border radius</b> to round the corners.</li>
    <li>In the Style panel, go to <b>Display section</b> and set <b>Display</b> to <code>inline-block</code>. Set <b>Margin top</b> to <code>10px</code> and <b>Margin bottom</b> to <code>20px</code>.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div class="quote">
                <img src="spacerides5.jpg" class="quote-image"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
            <div class="quote">
                <img src="spacerides6.jpg" class="quote-image"/>
                <p>&ldquo;I'm a big fan. I skated faster than the speed of light!&rdquo;</p>
                <p>Rooky</p>
            </div>
            <div class="quote">
                <img src="spacerides7.jpg" class="quote-image"/>
                <p>&ldquo;The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!&rdquo;</p>
                <p>Mooteetee</p>
            </div>
        </section>
        <section data-empty-placeholder id="contact"></section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),c.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}

.quote {
    text-align: center;
    border: 1px solid #b4b4b4;
    padding: 20px 20px 0px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-image {
    width: 150px;
    border-radius: 50%;
}
`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o,i,a,l=null;e.sourceNode.findOne("#contact h2")?(o=e.sourceNode.findOne("#contact a"))?o.text().startsWith("Get")?(i=e.sourceNode.findOne("#contact"),(a=m(i,"Section"))?l=a:"no-repeat"!==y(i,"background-repeat")?l=`<p>Set the Background repeat of the Contact section to <code>no-repeat</code>.</p>`:"cover"!==y(i,"background-size")?l=`<p>Set the Background size of the Contact section to <code>cover</code>.</p>`:"center"!==y(i,"text-align")?l=`<p>Set the Text align of the Contact section to <code>center</code>.</p>`:y(i,"color")?y(o,"font-size")?y(o,"color")?y(o,/^padding/)?y(o,"background-color")?"none"!==y(o,"text-decoration")?l=`<p>Set the Text decoration of the A element to <code>none</code>.</p>`:y(o,/^border\-radius/)?"inline-block"!==y(o,"display")?l=`<p>Set the Display of the A element to <code>inline-block</code>.</p>`:y(o,/^margin/)||(l=`<p>Set the Margins of the A element.</p>`):l=`<p>Set the Border radius of the A element to round the button.</p>`:l=`<p>Set the Background color of the A element to <code>orange</code>.</p>`:l=`<p>Set the Padding of the A element.</p>`:l=`<p>Set the Text color of the A element to <code>white</code>.</p>`:l=`<p>Set the Font size of the A element to <code>25px</code>.</p>`:l=`<p>Set the Text color of the Contact section to <code>white</code>.</p>`):l=`<p>Edit the text of the A element.</p>`:l=`<p>Section#contact should have an A (anchor) element.</p>`:l=`<p>Section#contact should have a H2 heading.</p>`,l?(t.result="error",t.message=l):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("zootata_website_contact_2","alien13",r)),c=(n.name=`Super Space Rides - Contact Us - Part 2`,n.display_title=`Super Space Rides - Contact us - Part 2`+s("alien13",null,null,"-30px"),n.main_lesson=a,n.description=makeDesc("490076494",`<p>Use <code>mailto:</code> anchor links to send emails.</p>`,`<p>Let's finish the Contact section:</p>
<ol>
    <li><b>${select("Select the contact section","#contact")}</b> and <b>Save the style</b> as a new CSS rule with the selector <code>#contact</code>.</li>
    <li><b>${select("Select the button <a>","#contact a")}</b> and <b>Save the style</b> as a CSS rule with the selector <code>.big-button</code>.</li>
    <li>Keep the button selected and <b>Create new CSS rule</b> with the selector <code>.big-button:hover</code></li>
    <li>Set <b>Text decoration</b> to <code>underline</code>.</li>
    <li>Go to the ${tooltip("Attributes panel","attributes_panel")} and set the <b>Href</b> attribute to <code>mailto:zootata@example.com</code>.</li>
    <li>Keep the ${select("button","#contact a")} selected and use the ${tooltip("click icon","click_icon")} to test the link.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div class="quote">
                <img src="spacerides5.jpg" class="quote-image"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
            <div class="quote">
                <img src="spacerides6.jpg" class="quote-image"/>
                <p>&ldquo;I'm a big fan. I skated faster than the speed of light!&rdquo;</p>
                <p>Rooky</p>
            </div>
            <div class="quote">
                <img src="spacerides7.jpg" class="quote-image"/>
                <p>&ldquo;The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!&rdquo;</p>
                <p>Mooteetee</p>
            </div>
        </section>
        <section id="contact" style="background-image: url('background1.jpg'); background-repeat: no-repeat; background-size: cover; color: #ffffff; text-align: center;">
            <h2>Want to join us on a space ride?</h2>
            <a href="" style="font-size: 25px; padding: 10px 30px; background-color: #ff9400; color: #ffffff; text-decoration: none; border-radius: 25px; display: inline-block; margin-top: 10px; margin-bottom: 20px;">Get in touch!</a>
        </section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),n.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}

.quote {
    text-align: center;
    border: 1px solid #b4b4b4;
    padding: 20px 20px 0px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-image {
    width: 150px;
    border-radius: 50%;
}
`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o,i=null;0===x("#contact").length?i=`<p>Save the Style attribute of the Section#contact as the new CSS rule with the selector <code>#contact</code>.</p>`:0===x(".big-button").length?i=`<p>Save the Style attribute of the A element in the Section#contact as the new CSS rule with the selector <code>.big-button</code>.</p>`:0===(o=x(".big-button:hover")).length?i=`<p>Create a new CSS rule with the selector <code>.big-button:hover</code>.</p>`:k(o,"text-decoration","underline")?(o=e.sourceNode.findOne("#contact a"))&&(o.getAttr("href")||"").startsWith("mailto:")||(i=`<p>Set the Href attribute of the A element to <code>mailto:zootata@example.com</code>.</p>`):i=`<p>Select the CSS rule <code>.big-button:hover</code> and set Text decoration to <code>underline</code>.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("zootata_website_footer","alien13",r)),n=(c.name=`Super Space Rides - The Footer`,c.display_title=`Super Space Rides - The Footer`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("490078918",``,`<p>Create the page footer:</p>
<ol>
    <li><b>Drag the ${showElement("p")}</b> into the <b>${select("footer")}</b>.<br>
     ${c.getHtmlForLibButton(tag("p","Zootata's Super..."),"<p>Zootata's Super Space Rides. Created by [your name].</p>",null,null,"footer > p","Drag the P into the Footer element.")}
    <li>${tooltip("Edit the text","edit_text")} and use the ${tooltip("insert character","insert_char")} menu to insert a Symbol -&gt; copyright <code style="font-size:18px;">&copy;</code> character at the start.</li>
    <li><b>Select the ${select("footer")}</b> and set a dark <b>Background color</b>. Set the <b>Text color</b> to transparent white and <b>Text align</b> to <code>center</code>.</li> 
    <li>Set <b>Padding top / bottom</b> to <code>20px</code> and <b>Padding left / right</b> to <code>40px</code>.</li>
    <!--<li>Set <b>Margin top</b> to <code>0</code>.</li> -->
    <li><b>Save the style</b> as a CSS rule with the selector <code>footer</code>.</li>
    <li><b>${select("Select the contact section")}</b> and select the ${rule("#contact")}. Set <b>Padding bottom</b> to <code>120px</code>.</li>
    <li><b>Sign your made-up name</b> in the footer text.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div class="quote">
                <img src="spacerides5.jpg" class="quote-image"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
            <div class="quote">
                <img src="spacerides6.jpg" class="quote-image"/>
                <p>&ldquo;I'm a big fan. I skated faster than the speed of light!&rdquo;</p>
                <p>Rooky</p>
            </div>
            <div class="quote">
                <img src="spacerides7.jpg" class="quote-image"/>
                <p>&ldquo;The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!&rdquo;</p>
                <p>Mooteetee</p>
            </div>
        </section>
        <section id="contact">
            <h2>Want to join us on a space ride?</h2>
            <a href="mailto:zootata@example.com" class="big-button">Get in touch!</a>
        </section>
        <footer data-empty-placeholder></footer>
    </body>
</html>`),c.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}

.quote {
    text-align: center;
    border: 1px solid #b4b4b4;
    padding: 20px 20px 0px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-image {
    width: 150px;
    border-radius: 50%;
}

#contact {
    background-image: url('background1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    text-align: center;
}

.big-button {
    font-size: 25px;
    padding: 10px 30px;
    background-color: #ff9400;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
}

.big-button:hover {
    text-decoration: underline;
}
`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o=null,i=e.sourceNode.findOne("footer p");i?i.text().indexOf("&copy;")<0?o=`<p>Use the Edit text tool to insert a &copy; symbol into the footer text.</p>`:(e.sourceNode.findOne("footer"),0===(i=x("footer")).length?o=`<p>Save the Style attribute of the footer element as the new CSS rule with the selector <code>footer</code>.</p>`:k(i,"background-color")?k(i,"color")?k(i,"text-align","center")?k(i,/^padding/)||(o=`<p>Set the Padding of the <code>footer</code> CSS rule.</p>`):o=`<p>Set the Text align of the <code>footer</code> CSS rule to <code>center</code>.</p>`:o=`<p>Set the Text color of the <code>footer</code> CSS rule to a white transparent color.</p>`:o=`<p>Set the Background color of the <code>footer</code> CSS rule to a dark color.</p>`):o=`<p>The footer element should contain a P element with the website information.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("zootata_website_pageinfo","alien13",r)),c=(n.name=`Super Space Rides - Page information`,n.display_title=`Super Space Rides - Page information`+s("alien13",null,null,"-30px"),n.main_lesson=a,n.description=makeDesc("490080503",`<p>Use the ${showElement("title")} and ${showElement("meta")} elements to set the information about the page.</p>`,`<p>Describe what this webpage is about and who made it:</p>
<ol>
    <li><b>Select the ${select("html")}</b> element and go to the ${tooltip("attributes panel","attributes_panel")}.</li>
    <li>Set <b>Title</b> to <code style="white-space: normal;">Super Space Rides</code>.</li>
    <li>Set <b>Description</b> to <code style="white-space: normal;">Join Zootata on amazing rides around the universe!</code>.</li>
    <li>Set <b>Keywords</b> to <code style="white-space: normal;">Space, Adventure, Space exploration, Travel</code>.</li>
    <li>Enter your nickname in the <b>Author</b> field.</li>
    <li>Open the <b>${tooltip("code editor","code_editor")}</b> and explore the code of the ${showElement("head")} element.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div class="quote">
                <img src="spacerides5.jpg" class="quote-image"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
            <div class="quote">
                <img src="spacerides6.jpg" class="quote-image"/>
                <p>&ldquo;I'm a big fan. I skated faster than the speed of light!&rdquo;</p>
                <p>Rooky</p>
            </div>
            <div class="quote">
                <img src="spacerides7.jpg" class="quote-image"/>
                <p>&ldquo;The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!&rdquo;</p>
                <p>Mooteetee</p>
            </div>
        </section>
        <section id="contact">
            <h2>Want to join us on a space ride?</h2>
            <a href="mailto:zootata@example.com" class="big-button">Get in touch!</a>
        </section>
        <footer>
            <p>&copy; Zootata&apos;s Super Space Rides. Created by [your name].</p>
        </footer>
    </body>
</html>`),n.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}

.quote {
    text-align: center;
    border: 1px solid #b4b4b4;
    padding: 20px 20px 0px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-image {
    width: 150px;
    border-radius: 50%;
}

#contact {
    background-image: url('background1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    padding-bottom: 120px;
}

.big-button {
    font-size: 25px;
    padding: 10px 30px;
    background-color: #ff9400;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
}

.big-button:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    background-color: #060025;
    padding: 20px 40px;
    color: rgba(255, 255, 255, 0.72);
}

`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o=null;e.sourceNode.findOne("title")?e.sourceNode.findOne('meta[name="description"]')?e.sourceNode.findOne('meta[name="keywords"]')?e.sourceNode.findOne('meta[name="author"]')||(o=`<p>Select the top HTML element and set the Author in the Attributes panel.</p>`):o=`<p>Select the top HTML element and set the Keywords in the Attributes panel.</p>`:o=`<p>Select the top HTML element and set the Description in the Attributes panel.</p>`:o=`<p>Select the top HTML element and set the Title in the Attributes panel.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("zootata_website_design_1","alien13",r)),n=(c.name=`Super Space Rides - Improving the layout`,c.display_title=`Super Space Rides - Improving the layout`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("490081753",`<p>Set <b>Margin left / right</b> to <code>auto</code> to center the element.</p>`,`<p>Make sure that the page looks good on different screens:</p>
<ol>
    <li>Resize the page by dragging its right edge. If you need more space double-click on the panel tabs to collapse them.</li>
    <li><b>Select ${select("body")}</b> and set <b>Max width</b> to <code>800px</code>.</li>
    <li>Set <b>Min width</b> to <code>500px</code>.</li>
    <li>Set <b>Margin left / right</b> to <code>auto</code> to center the page.</li>
    <li>Set <b>Background image</b> to <code>background5.jpg</code>, <b>Background repeat</b> to <code>no-repeat</code>, <b>Background size</b> to <code>cover</code> and <b>Background attachment</b> to <code>fixed</code>.</li>
    <li><b>Select one of the ${select("<section> elements","section")}</b>, make sure the ${rule("section")} is selected and set its <b>Background color</b> to <code>white</code>.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
        <title>Super Space Rides</title>
        <meta name="description" content="Join Zootata on amazing rides around the universe!">
        <meta name="keywords" content="Space, Adventure, Space exploration, Travel">
        <meta name="author" content="My Name">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div class="quote">
                <img src="spacerides5.jpg" class="quote-image"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
            <div class="quote">
                <img src="spacerides6.jpg" class="quote-image"/>
                <p>&ldquo;I'm a big fan. I skated faster than the speed of light!&rdquo;</p>
                <p>Rooky</p>
            </div>
            <div class="quote">
                <img src="spacerides7.jpg" class="quote-image"/>
                <p>&ldquo;The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!&rdquo;</p>
                <p>Mooteetee</p>
            </div>
        </section>
        <section id="contact">
            <h2>Want to join us on a space ride?</h2>
            <a href="mailto:zootata@example.com" class="big-button">Get in touch!</a>
        </section>
        <footer>
            <p>&copy; Zootata&apos;s Super Space Rides. Created by [your name].</p>
        </footer>
    </body>
</html>`),c.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}

.quote {
    text-align: center;
    border: 1px solid #b4b4b4;
    padding: 20px 20px 0px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-image {
    width: 150px;
    border-radius: 50%;
}

#contact {
    background-image: url('background1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    padding-bottom: 120px;
}

.big-button {
    font-size: 25px;
    padding: 10px 30px;
    background-color: #ff9400;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
}

.big-button:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    background-color: #060025;
    padding: 20px 40px;
    color: rgba(255, 255, 255, 0.72);
}

`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o,i=null,a=e.sourceNode.findOne("body");y(a,"max-width")?y(a,"min-width")?"auto"!==y(a,"margin-left")?i=`<p>Select the BODY element and set the Margin left CSS property to <code>auto</code>.</p>`:"auto"!==y(a,"margin-right")?i=`<p>Select the BODY element and set the Margin right CSS property to <code>auto</code>.</p>`:(o=m(a,"BODY"))?i=o:"no-repeat"!==y(a,"background-repeat")?i=`<p>Select the BODY element and set the Background repeat to <code>no-repeat</code>.</p>`:"cover"!==y(a,"background-size")?i=`<p>Select the BODY element and set the Background size to <code>cover</code>.</p>`:"fixed"!==y(a,"background-attachment")?i=`<p>Select the BODY element and set the Background attachment to <code>fixed</code>.</p>`:(o=x("section"),k(o,"background-color")||(i=`<p>Select a Section element and set the Background color of the <code>section</code> CSS rule to <code>white</code>.</p>`)):i=`<p>Select the BODY element and set the Min width CSS property to <code>500px</code>.</p>`:i=`<p>Select the BODY element and set the Max width CSS property to <code>800px</code>.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c),new PgTutorialLesson("zootata_website_design_2","alien13",r)),c=(n.name=`Super Space Rides - Fonts &amp; the header`,n.display_title=`Super Space Rides - Fonts &amp; the header`+s("alien13",null,null,"-30px"),n.main_lesson=a,n.description=makeDesc("490320047",`<p>Use negative margins for fun effects.</p>`,`<p>Improve the fonts and the header:</p>
<ol>
    <li>Use the <b>${tooltip("+ Insert","insert_menu")}</b> menu to drag a <b>${showElement("div")}</b> to the end of the <b>${select("Our rides section","#rides")}</b>. Place the ${showElement("div")} <b>inside</b> the section, not after the section.</li>
    <li>Set <b>Clear</b> CSS property to <code>both</code> and <b>Save the style</b> as a CSS rule with the selector <code>.clear-floats</code>.</li>
    <li>Turn off the ${tooltip("empty placeholder","empty_placeholder")} on the selected Div.</li>
    <li><b>Select the ${select("body")}</b>, set <b>Font family</b> to <code>Arial, Helvetica, sans-serif</code> and <b>Font size</b> to <code>18px</code>.</li>
    <li><b>Save the style</b> as a CSS rule with the selector <code>body</code>.</li>
    <li><b>Select the ${select("h1","header h1")}</b> in the Header. Set <b>Font family</b> to <code>Impact, Charcoal, sans-serif</code> and <b>Font size</b> to <code>70px</code>.</li>
    <li><b>Save the style</b> as a CSS rule with the selector <code>h1</code>.</li>
    <li><b>Select the ${select("p","header p")} subheading</b> in the Header. Set <b>Font size</b> to <code>28px</code> and <b>Width</b> to <code>420px</code>. Set <b>Background color</b> to purple, <b>Padding left / right</b> to <code>20px</code> and <b>Padding top / bottom</b> to <code>10px</code>.</li>
    <li>Set <b>Margin left</b> to <code>-40px</code> and increase <b>Padding left</b> to <code>40px</code>. Round the <b>right corners</b> by <code>10px</code>.</li>
    <li>${tooltip("Turn off blue element menus","menu_toggle")} to better see the rounded corners.</li>
    <li><b>Save the style</b> as a CSS rule with the selector <code>.subheading</code>.</li>
</ol>
`),n.video=`https://youtube.com/bubi`,n.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
        <title>Super Space Rides</title>
        <meta name="description" content="Join Zootata on amazing rides around the universe!">
        <meta name="keywords" content="Space, Adventure, Space exploration, Travel">
        <meta name="author" content="My Name">
    </head>
    <body style="min-width: 500px; max-width: 800px; margin-left: auto; margin-right: auto; background-image: url('background5.jpg'); background-repeat: no-repeat; background-size: cover; background-attachment: fixed;">
        <header>
            <h1>Super Space Rides</h1>
            <p>Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div class="quote">
                <img src="spacerides5.jpg" class="quote-image"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
            <div class="quote">
                <img src="spacerides6.jpg" class="quote-image"/>
                <p>&ldquo;I'm a big fan. I skated faster than the speed of light!&rdquo;</p>
                <p>Rooky</p>
            </div>
            <div class="quote">
                <img src="spacerides7.jpg" class="quote-image"/>
                <p>&ldquo;The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!&rdquo;</p>
                <p>Mooteetee</p>
            </div>
        </section>
        <section id="contact">
            <h2>Want to join us on a space ride?</h2>
            <a href="mailto:zootata@example.com" class="big-button">Get in touch!</a>
        </section>
        <footer>
            <p>&copy; Zootata&apos;s Super Space Rides. Created by [your name].</p>
        </footer>
    </body>
</html>`),n.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
    background-color: #ffffff;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}

.quote {
    text-align: center;
    border: 1px solid #b4b4b4;
    padding: 20px 20px 0px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-image {
    width: 150px;
    border-radius: 50%;
}

#contact {
    background-image: url('background1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    padding-bottom: 120px;
}

.big-button {
    font-size: 25px;
    padding: 10px 30px;
    background-color: #ff9400;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
}

.big-button:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    background-color: #060025;
    padding: 20px 40px;
    color: rgba(255, 255, 255, 0.72);
}

`),n.inject_css=i,n.open_all_files_in_code=!0,n.onCheck=function(e,t){var o,i=null,a=e.sourceNode.findOne("#rides div.clear-floats");a?a.next()?i=`<p>The DIV with <code>.clear-floats</code> should be positioned at the very end of the #rides section. Use the Structure tree to move it around.</p>`:0===(o=x(".clear-floats")).length?i=`<p>Select the DIV and create a new class CSS rule <code>.clear-floats</code> and set <b>Clear</b> to <code>both</code>.</p>`:k(o,"clear","both")?a.hasAttribute("data-empty-placeholder")?i=`<p>Select the DIV with <code>.clear-floats</code> and switch off the empty placeholder helper.</p>`:0===(o=x("body")).length?i=`<p>Select the BODY and create a new class CSS rule <code>body</code>.</p>`:k(o,"font-family")?k(o,"font-size")?0===(o=x("h1")).length?i=`<p>Select the H1 in the Header and create a new class CSS rule <code>h1</code>.</p>`:k(o,"font-size")?0===(o=x(".subheading")).length?i=`<p>Select the P in the Header and create a new class CSS rule <code>.subheading</code>.</p>`:k(o,"font-size")?k(o,"width")?k(o,"background-color")?k(o,/^padding/)?k(o,/^margin/)?k(o,/^border/)||(i=`<p>Select the CSS rule <code>.subheading</code> and set its Border radius.</p>`):i=`<p>Select the CSS rule <code>.subheading</code> and set its Margins.</p>`:i=`<p>Select the CSS rule <code>.subheading</code> and set its Padding.</p>`:i=`<p>Select the CSS rule <code>.subheading</code> and set its Background color.</p>`:i=`<p>Select the CSS rule <code>.subheading</code> and set the Width to <code>420px</code>.</p>`:i=`<p>Select the CSS rule <code>.subheading</code> and set the Font size to <code>28px</code>.</p>`:i=`<p>Select the CSS rule <code>h1</code> and set the Font size to <code>70px</code>.</p>`:i=`<p>Select the CSS rule <code>body</code> and set the Font size to <code>18px</code>.</p>`:i=`<p>Select the CSS rule <code>body</code> and set the Font family.</p>`:i=`<p>Select the CSS rule <code>.clear-floats</code> and set <b>Clear</b> to <code>both</code>.</p>`:i=`<p>Place an empty DIV element at the end of the #rides section and create a new class CSS rule <code>.clear-floats</code> with <b>Clear</b> set to <code>both</code>.</p>`,i?(t.result="error",t.message=i):t.result="ok",t.decoration=s("alien13","check-box")},o(n),tutorial.addLesson(n),new PgTutorialLesson("zootata_website_design_3","alien13",r));c.name=`Super Space Rides - Spice up the design`,c.display_title=`Super Space Rides - Spice up the design`+s("alien13",null,null,"-30px"),c.main_lesson=a,c.description=makeDesc("490323101",`<p>Use <code>box-shadow</code> CSS property to create cool 3D effects.</p>`,`<p>Add shadows to the page:</p>
<ol>
    <li><b>Select any ${select("img","#rides img")}</b> element and make sure that <b>Style attribute</b> is selected in the Style panel.</li>
    <li>Go to the <b>Box shadow</b> section and <b>add a shadow</b> with <b>Distance</b> <code>4px</code>, <b>Angle</b> around <code>315</code> degrees, <b>Blur</b> <code>8px</code> and <code>transparent black</code> <b>Shadow color</b>.</li>
     <li><b>Save the style</b> as a new CSS rule with the selector <code>img</code>.</li>
     <li><b>Select the ${select("body")}</b> and make sure that ${rule("body")} is selected in the Style panel.</li>
    <li>Add a <b>Box shadow</b> with <b>Distance</b> <code>8px</code>, <b>Angle</b> around <code>315</code> degrees, <b>Blur</b> <code>12px</code> and <code>transparent black</code> <b>Shadow color</b>.</li>
    <li>Set the <b>Margin top</b> to <code>70px</code>.</li>
    <li>Well done! You created a real website!</li>
    <li><b>${tooltip("Preview the page","preview")}</b> in the browser.</li>
</ol>
`),c.video=`https://youtube.com/bubi`,c.addPage("index.html",`<!doctype html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
        <title>Super Space Rides</title>
        <meta name="description" content="Join Zootata on amazing rides around the universe!">
        <meta name="keywords" content="Space, Adventure, Space exploration, Travel">
        <meta name="author" content="My Name">
    </head>
    <body>
        <header>
            <h1>Super Space Rides</h1>
            <p class="subheading">Join Zootata on amazing rides around the universe!</p>
        </header>
        <section id="rides">
            <h2>Our Rides</h2>
            <p>We have many different space rides. Find the one that is perfect for you!</p>
            <h3>Wobbly Jelly Asteroid Belt</h3>
            <img src="spacerides2.jpg" class="image-left">
            <p>Travel with the speed of light to the far edge of our galaxy. Land on the jelly asteroid and get wobbly! When you get dizzy come back to the spaceship and enjoy your delicious lunch. Price: 500 Space coins.</p>
            <h3>Underground Space Cave</h3>
            <img src="spacerides3.jpg" class="image-right">
            <p>Descend  20,000 Space kilometers down into the lava planet and explore the rarest glow worms in the universe. Glow worm nest is super radioactive. You will get a special protective suit that will keep your brain safe from melting. Price: 650 Space coins.</p>
            <h3>Black Hole Retreat</h3>
            <img src="spacerides4.jpg" class="image-left">
            <p>Travel through the black matter clouds all the way to the nearest black hole. There you will enjoy special stretching exercises with our trained professionals. Some of the best acrobats have learned their skills there. Price: 1,000 Space coins.</p>
            <div class="clear-floats"></div>
        </section>
        <section id="video" style="background-color: #efefef;">
            <h2>Experience the Space Ride</h2>
            <p>Watch the video and experience the magic moments of Zootata's space rides:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZcU27hgwHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="quotes">
            <h2>Our Happy Customers</h2>
            <p>Listen to our fans explain how much fun they had on our space rides:</p>
            <div class="quote">
                <img src="spacerides5.jpg" class="quote-image"/>
                <p>&ldquo;Wow! The Black Hole was amazing. I got super stretchy, so I looked like a rope.&rdquo;</p>
                <p>Bloobeek</p>
            </div>
            <div class="quote">
                <img src="spacerides6.jpg" class="quote-image"/>
                <p>&ldquo;I'm a big fan. I skated faster than the speed of light!&rdquo;</p>
                <p>Rooky</p>
            </div>
            <div class="quote">
                <img src="spacerides7.jpg" class="quote-image"/>
                <p>&ldquo;The glow worms were 5 space bounces long. We were so deep under ground! I can't believe that Zootata was able to organize that!&rdquo;</p>
                <p>Mooteetee</p>
            </div>
        </section>
        <section id="contact">
            <h2>Want to join us on a space ride?</h2>
            <a href="mailto:zootata@example.com" class="big-button">Get in touch!</a>
        </section>
        <footer>
            <p>&copy; Zootata&apos;s Super Space Rides. Created by [your name].</p>
        </footer>
    </body>
</html>`),c.addStylesheet("style.css",`
header {
    padding: 40px 40px 180px;
    background-image: url('spacerides1.jpg');
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
}

section {
    padding: 40px;
    background-color: #ffffff;
}

.image-left {
    width: 280px;
    float: left;
    margin-right: 20px;
    margin-bottom: 40px;
}

h3 {
    clear: both;
}

.image-right {
    width: 280px;
    float: right;
    margin-left: 20px;
    margin-bottom: 40px;
}

iframe {
    width: 100%;
}

.quote {
    text-align: center;
    border: 1px solid #b4b4b4;
    padding: 20px 20px 0px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-image {
    width: 150px;
    border-radius: 50%;
}

#contact {
    background-image: url('background1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    padding-bottom: 120px;
}

.big-button {
    font-size: 25px;
    padding: 10px 30px;
    background-color: #ff9400;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
}

.big-button:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    background-color: #060025;
    padding: 20px 40px;
    color: rgba(255, 255, 255, 0.72);
}

.clear-floats {
    clear: both;
}

body {
    min-width: 500px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background-image: url('background5.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}

h1 {
    font-family: Impact, Charcoal, sans-serif;
    font-size: 70px;
}

.subheading {
    font-size: 28px;
    width: 420px;
    background-color: #b700c4;
    padding: 10px 20px 10px 40px;
    margin-left: -40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
`),c.inject_css=i,c.open_all_files_in_code=!0,c.onCheck=function(e,t){var o=null,i=x("img");0===i.length?o=`<p>Select an IMG and create a new class CSS rule <code>img</code>.</p>`:k(i,"box-shadow")||(o=`<p>Select the CSS rule <code>img</code> and set its Box shadow.</p>`),0===(i=x("body")).length?o=`<p>Where did the BODY CSS rule go? No problem, use Undo or restart the lesson.</p>`:k(i,"box-shadow")?k(i,/^margin/)||(o=`<p>Select the CSS rule <code>body</code> and set its Margin top and bottom to <code>70px</code>.</p>`):o=`<p>Select the CSS rule <code>body</code> and set its Box shadow.</p>`,o?(t.result="error",t.message=o):t.result="ok",t.decoration=s("alien13","check-box")},o(c),tutorial.addLesson(c);l.addEventHandler("on_get_new_project_templates",function(e,t){var o=[{name:"Blank page",pid:"admin/blank-page",thumb:"blank.jpg",desc:"Create from scratch",vid:"572915874",subid:"template.blank"},{name:"Mobile phone",pid:"admin/mobile-phone",thumb:"mobile-phone.jpg",desc:"Create a space phone",vid:"572915971",subid:"template.mobile"},{name:"Slideshow",pid:"admin/slideshow",thumb:"slideshow.jpg",desc:"A multi-page slideshow",vid:"572916702",subid:"template.slideshow"},{name:"Simple website",pid:"admin/simple-website",thumb:"simple-website.jpg",desc:"One-page website",vid:"572916313",subid:"template.simplewebsite"},{name:"Absolute playground",pid:"admin/absolute-playground",thumb:"absolute-playground.jpg",desc:"Absolutely positioned art",vid:"572915179",subid:"template.playground"}];"localhost"===location.hostname&&o.forEach(function(e){e.pid=e.pid.replace("admin/","mol6/")}),o.forEach(function(e){e.thumb=`images/kids/project_templates/`+e.thumb,t.push(e)})}),l.addEventHandler("on_get_actions_for_start_menu",function(e,t){var o=[],i={icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
</svg>`,label:"Parent &amp; teacher guide",desc:"Learn how to get started and get the most out of HTML Planet.",url:"https://htmlplanetforkids.com/guide.html"},a={icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
<path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
<path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
<path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>`,label:"Watch the intro video",desc:"First time here? Learn everything you need to get started.",class:"pg-lessons-intro-video",action:function(){new PgTutorialVideo("569606233",pgTutorialSubtitles.get("intro.video.kids"));l.backend.setLessonStatus({key:"intro.video.kids"},"done")}};l.currentUser.isLoggedIn()||(o.push(a),o.push({icon:`<i class="icon icon-276"></i>`,label:"Take it for a spin",desc:"Do the first ten adventures and create up to three projects.",action:function(){$("#start-tab-learn").trigger("click"),l.currentUser.registerForTrial()}}),o.push({icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>`,label:"Login",desc:"Sign into your account and continue your adventures.",action:function(){l.currentUser.showLoginForm()}})),l.currentUser.isLoggedInAndActive()?l.currentUser.isParent()?(o.push(i),o.push(a),o.push({icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>`,label:"Edit your account",desc:"Manage profile and edit child accounts.",action:function(){l.currentUser.editProfile()}})):o.push(a):o.push({icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
<path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
</svg>`,label:"Subscribe",desc:"Subscribe and get all HTML Planet features.",action:function(){l.currentUser.isLoggedIn()?l.currentUser.editProfile():l.currentUser.showRegistrationForm()},url:"https://htmlplanetforkids.com/#buy"}),o.forEach(function(e){t.push(e)})}),l.addEventHandler("on_page_changes_done",function(e){l.getCurrentProject();var t=!1;e.sourceNode.walk(function(e){return e.isElement&&e.placeholderWasAutoRemoved&&e.isEmpty()&&!e.hasAttribute(pgf.empty_ph_attribute)&&(e.setAttribute(pgf.empty_ph_attribute),t=!0),!0}),t&&l.selectedElements.reselect()}),l.addEventHandler("on_set_inline_style",function(e,t){t.css+=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}`+`
*, *:after, *:before {
    box-sizing: border-box;
}
        
html, body {
    min-height:100vh;
}

`})})});