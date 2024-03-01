$(function(){$("body").one("pinegrow-ready",function(e,a){class t extends PgTutorial{constructor(){super(),this.name=`What's new in Pinegrow 7`,this.description=`Learn about the new class power tools, CSS media tabs, placeholders and more.`,this.prefix="whats_new_pg_70",this.registerThisTutorial=!0,this.warnOnRandomAccess=!1,this.allowRandomAccess=!0,this.mainLesson=null,this.pinegrow_json=`{"files":{},"open-pages":["index.html"],"urls":{"index.html":{"open-with-wrapper":false}},"wp-theme-info":{"dir":null,"name":"Cool Blocks","slug":"cool_blocks","auto_increment_version":"1","page":"index.html","wpseo":"true","wpjquery":"false","generator":"true","images":{},"blocks_type":"native-auto","pg_version":"1.0","blocks_editor_styles":[],"project_type":"plugin","blocks_inline_svg":"false","wc_enabled":"false","project_version":"1.0.0"},"wp-insight":{"menus":["primary","social"],"taxonomies":["category","post_tag"],"customizer_sections":[],"customizer_controls":[],"post_types":["attachment","page","post"],"template_parts":[],"sidebars":[],"master_pages":[],"image_sizes":["full","large","medium","medium_large","post-thumbnail","thumbnail"],"custom_funcs":[],"block_categories":[]}}`,this.lesson_InsertPanel(),this.lesson_EmptyPlaceholder(),this.lesson_Wrapper(),this.lesson_CSSMediaTabs(),this.lesson_CSSGridGap(),this.lesson_ClassPreviewBootstrap(),this.lesson_ClassPreviewTailwind(),this.lesson_ClassButtonsTailwind(),this.lesson_PGIA_Media(),this.lesson_PGIA_PlayOnMove(),this.lesson_ReleaseNotes()}newLesson(e){var a=new PgTutorialLesson(this.prefix+e,null,null);return a.onCheck=function(e,a){var t=null;t?(a.result="error",a.message=t):a.result="ok"},a}lesson_InsertPanel(){var e=this.newLesson("insertpanel");e.name="Insert button in the toolbar",e.short_description="Use the new Insert button to easily add elements and components to the page.",e.tags=["html"],e.description=e.makeDesc("775380074",`<p>${e.short_description}</p>`,`<ol>
<li>Click the <b>Insert button</b> to open the Library panel.</li>
<li>Drag a <b>${this.showLibElement(this.showElement("div"),".crsa-factory-element-type-html-div")}</b> to the page.</li>
<li>Reopen the <b>Library panel</b> and switch to the <b>${this.showLibElement("Images tab",".pg-page-lib-tabs .tabs .pg-button-toolbar-item:nth-child(2)")}</b> and drag an image to the page.</li>
<li>Reopen the <b>Library panel</b>.</li>
<li><b>${this.showLibElement("Pin the panel",".pg-quick-win-header-icon .icon-Pin")}</b> to keep the panel open.</li>
<li>Open the framework specific <b>${this.showLibElement("Blocks / Components tabs",".pg-page-lib-tabs .tabs .pg-button-toolbar-item:nth-child(3)")}</b> and drag a component to the page or to the <b>Tree panel</b>.</li>
<li>You can also <b>${this.showLibElement("add your own page libraries",".pg-page-lib-tabs .icons .pg-button-toolbar-item:nth-child(1)")}</b> to the panel.</li>

<li>Click on the <b>Insert button</b> to hide and show the panel.</li>
<li>Press the plus key ${pgShowKbd("+")} to open the Library panel.</li>
<li>The <b>Library panel in the fixed UI</b> is still there, if you prefer to use it.</li>
<li>Check out <b><a href="https://pinegrow.com/docs/master-pinegrow/the-library-panel/" class="external">the guide about the Library panel</a></b> to learn more about this powerful tool.</li>
</ol>
`),e.addPage("index.html",`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Blank Template for Bootstrap</title>
        <!-- Bootstrap core CSS -->
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- Custom styles for this template -->
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
</div>
        <!-- Bootstrap core JavaScript
    ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="assets/js/popper.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
`),e.addStylesheet("style.css",""),e.addBootstrap(),e.subtitles=`1
00:00:01,280 --> 00:00:04,710
Pinegrow 7 comes with
a handy new way to open the

2
00:00:04,710 --> 00:00:06,600
library panel from the toolbar.

3
00:00:07,290 --> 00:00:13,350
Click on the insert button to open
the library panel, and from here

4
00:00:13,355 --> 00:00:16,230
we can drag elements to the page.

5
00:00:16,590 --> 00:00:20,400
The list tab contains HTML
elements and framework

6
00:00:20,400 --> 00:00:23,010
components organized in sections.

7
00:00:24,330 --> 00:00:26,680
Let's drag a DIV to the page.

8
00:00:27,375 --> 00:00:32,324
The library panel closes automatically
after we drag the element.

9
00:00:32,714 --> 00:00:39,495
To insert more elements, reopen the
library panel and switch to images tab.

10
00:00:41,565 --> 00:00:45,345
From here, we can drag one of
the free Unsplash images to the

11
00:00:45,345 --> 00:00:49,215
page and the panel closed again.

12
00:00:50,084 --> 00:00:55,515
And if you want to keep the
panel open, toggle the pin.

13
00:00:57,195 --> 00:01:05,055
and now when we drag an element to
the page, the panel disappears while

14
00:01:05,055 --> 00:01:11,475
we are dragging the element and let's
drag drop it into the three panel.

15
00:01:12,015 --> 00:01:15,825
This gives us more precision over
the placement of the element.

16
00:01:16,905 --> 00:01:20,505
And then because the
panel is pined, it comes.

17
00:01:21,645 --> 00:01:25,395
So one detail, and that's not
new, I just want to mention it.

18
00:01:25,815 --> 00:01:31,845
Notice that new elements are collapsed
in the three panel, and now if we

19
00:01:31,845 --> 00:01:39,855
would want to add, let's say, an H2
into such an element that is collapsed

20
00:01:39,855 --> 00:01:45,375
on the page, by default, we can't
drop it inside the collapse element.

21
00:01:45,585 --> 00:01:47,325
So we have to hold down shift.

22
00:01:48,315 --> 00:01:53,745
and then we can do that, we can
drop the element inside the element

23
00:01:53,745 --> 00:01:56,385
that is collapsed in the tree.

24
00:01:57,075 --> 00:02:01,395
So to close the panel, we can either
use this icon here or we can just

25
00:02:01,395 --> 00:02:03,465
click again on the insert button.

26
00:02:04,455 --> 00:02:10,455
And to quickly display the library
panel, just press the plus key.

27
00:02:11,565 --> 00:02:17,185
And as before the library panel is
still displayed in the static ui.

28
00:02:18,990 --> 00:02:23,940
and if you don't need to use this
panel anymore, it makes sense to hide

29
00:02:23,940 --> 00:02:30,090
it in the window show hide panels
library so that the user interface

30
00:02:30,090 --> 00:02:32,640
gets a little bit uncluttered.

31
00:02:33,060 --> 00:02:36,720
If you are used to the old
library panel, the new insert

32
00:02:36,720 --> 00:02:39,030
button might feel a bit strange.

33
00:02:39,524 --> 00:02:45,165
But give it a try, and once you get
used to it, it becomes a very efficient

34
00:02:45,225 --> 00:02:47,924
tool for adding elements to the page.

`,this.addLesson(e)}lesson_EmptyPlaceholder(){var e=this.newLesson("emptyplaceholder");e.name="Empty placeholder toggle",e.short_description="Empty placeholder attribute makes empty elements visible in Pinegrow.",e.tags=["html"],e.description=e.makeDesc("775383134",`<p>Before Pinegrow 7, the class <code>pg-empty-placeholder</code> was used to give height and background to empty elements. Attribute <code>data-empty-placeholder</code> is now used instead.</p>`,`<ol>
<li>Open the <b>Library panel</b>.</li>
<li>Drag a <b>${this.showLibElement(this.showElement("div"),".crsa-factory-element-type-html-div")}</b> to the page.</li>
<li>Notice that the element has minimum height and background texture.</li>
<li>Use the ${this.tooltip("empty placeholder icon","empty_placeholder")} in the selected element menu to toggle the placeholder.</li>
<li>Make sure the placeholder is activated.</li>
<li>Drag a <b>${this.showLibElement(this.showElement("h1"),".crsa-factory-element-type-html-h1")}</b> inside the ${this.showElement("div")}.</li>
<li>The empty placeholder was removed because the element has content now.</li>
<li>Select the <b>${this.select("h1")}</b> element and <b>Delete it</b>.</li>
<li>Turn on the ${this.tooltip("empty placeholder","empty_placeholder")} on the DIV.</li>
</ol>
`),e.addPage("index.html",`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link href="css/normalize.css" rel="stylesheet"><link href="css/style.css" rel="stylesheet">
        </head><body></body></html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),e.subtitles=`1
00:00:00,710 --> 00:00:10,710
Pinegrow seven changes how it handles displaying empty
elements, DIV, section, and other HTM elements such as

2
00:00:10,710 --> 00:00:15,210
this one, have height zero when displayed on the page.

3
00:00:15,540 --> 00:00:21,210
And this makes it hard to see the layout and to drop elements inside them.

4
00:00:21,990 --> 00:00:28,290
To help with this, Pinegrow makes empty elements
visible by adding a minimum height and dashed back.

5
00:00:29,790 --> 00:00:42,390
in previous versions, a special class called pg empty placeholder or was used to
style empty elements, but then this class often showed up in unexpected places.

6
00:00:43,170 --> 00:00:56,680
That's why Pinegrow seven, uses a data attribute instead, data empty
placeholder, and it also adds a tool to easily toggle the placeholder.

7
00:00:57,270 --> 00:00:58,410
So let's take a look.

8
00:00:58,710 --> 00:01:06,750
Click on the insert button to display the library
panel, and from there, drag a DIV to the page.

9
00:01:07,830 --> 00:01:11,910
Notice that the DIV has minimum height and dashed background.

10
00:01:12,330 --> 00:01:23,910
This helps you to see the element on the page and use the new empty
placeholder icon in the selected element menu to toggle the placeholder.

11
00:01:24,825 --> 00:01:32,145
Now it's off, and now it's back on, and the icon
is green if the empty placeholder is active.

12
00:01:33,505 --> 00:01:37,095
Normally you don't have to manually turn off the placeholder.

13
00:01:37,845 --> 00:01:38,925
Let me show you why.

14
00:01:39,315 --> 00:01:53,325
So make sure that the placeholder is active, and then drag H1 element
inside the DIV and Pinegrow automatically removes the empty placeholder.

15
00:01:54,060 --> 00:01:56,640
Because the element is not empty anymore.

16
00:01:57,090 --> 00:02:02,130
We can see here the DIV now has content so it's not empty.

17
00:02:02,700 --> 00:02:14,760
But if we delete the content element, Pinegrow will not
automatically add the empty placeholder back on the deal, and

18
00:02:14,760 --> 00:02:20,040
we can use the placeholder tool to do that manually if needed.

`,this.addLesson(e)}lesson_Wrapper(){var e=this.newLesson("wrapper");e.name="Open in wrapper",e.short_description=`Display components and blocks on a remote page during editing.`,e.tags=["html","css"],e.description=e.makeDesc("776400067",`<p>${e.short_description}</p>`,`<ol>
<li>Go to the <b>Project panel</b>.</li>
<li><code>Right-click</code> on the file <b>${this.showProjectFile("index.html")}</b>.</li>
<li>Select the <b>Open in wrapper</b> command.</li>
<li><p>Set <b>URL of the page</b> to <code>https://pinegrow.com</code> to display the component on the target website during editing.</p></li>
<li>Leave the <b>CSS Selector</b> field empty to display the component in the first <code>article</code>, <code>main</code> or <code>body</code> element. Or, enter the selector of the element on the page where the block should be displayed during editing.</li>
<li>Click on the <b>Save &amp; open</b> button.</li>
<li>Use the <b>Tree panel</b> to help you navigate the structure of the component.</li>
<li>Use the <b>Style panel</b> to adjust the design to the target website.</li>
<li><b>Preview the page</b> in the browser</b>.</li>
<li>To go back to editing the standalone page, <code>right-click</code> on the file <b>${this.showProjectFile("index.html")}</b> and select <b>Open</b> command.</li>
<li>To adjust wrapper settings, <code>right-click</code> on the file <b>${this.showProjectFile("index.html")}</b> and select <b>Wrapper settings...</b> command.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section class="happy-holidays-banner">
            <div class="happy-holidays-banner-image">
                <img src="https://images.unsplash.com/photo-1610562275255-03b7fa0d4655?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDJ8fGNocmlzdG1hcyUyMGNvb2tpZXN8ZW58MHx8fHwxNjY5NzQ5NjIx&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1400&h=800&fit=crop"/>
            </div>
            <div class="happy-holidays-banner-text">
                <h3>Happy 2023!</h3>
                <p>With best wishes from the Pinegrow team</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",`.happy-holidays-banner {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    grid-template-rows: 20px auto 20px;
    grid-template-areas: '. . . .' '. content content .' '. . . .';
}

.happy-holidays-banner .happy-holidays-banner-image {
    grid-area: 1 / 1 / 4 / 5;
}

.happy-holidays-banner-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.happy-holidays-banner .happy-holidays-banner-text {
    grid-area: content;
    align-self: center;
    background-color: rgba(0, 0, 0, 0.69);
    padding: 10px 30px 20px;
    color: rgba(255, 255, 255, 0.91);
}

.happy-holidays-banner-text h3 {
    font-weight: 100;
    font-size: 50px;
}

.happy-holidays-banner-text p {
    font-size: 30px;
    font-weight: lighter;
}`),e.subtitles=`1
00:00:00,630 --> 00:00:06,360
Imagine that you are building a component
that will be displayed on an existing website.

2
00:00:07,110 --> 00:00:16,669
Wouldn't it be great to be able to visualize how the component will
appear on the target website while you are working on it in Pinegrow?

3
00:00:17,610 --> 00:00:21,840
Now you can, with Open in Wrapper feature.

4
00:00:22,920 --> 00:00:32,215
In this example, we are working on a Happy 2023
banner that will be displayed on pinegrow.com.

5
00:00:33,345 --> 00:00:44,464
To open the page in the context of the Pinegrow website, go
to the projects panel, and then right click on index.Html.

6
00:00:45,275 --> 00:00:48,945
There we have the Open in wrapper feature.

7
00:00:50,205 --> 00:01:06,225
A dialog box pops up, and here we have to tell Pinegrow which, which
remote webpage should be used for displaying the content of index html.

8
00:01:06,225 --> 00:01:11,790
So let's say https://pinegrow.com.

9
00:01:15,320 --> 00:01:24,695
We can also specify CSS selector of the element on this
page where the content should be displayed, and if you leave

10
00:01:24,714 --> 00:01:30,164
it empty, then Pinegrow will look for the element ARTICLE.

11
00:01:30,675 --> 00:01:35,445
If that is not found, it will look for MAIN, and if that is not found BODY.

12
00:01:35,955 --> 00:01:42,005
So let's just use defaults, say Save and open.

13
00:01:43,604 --> 00:01:59,470
Here we have the pinegrow.com page loaded, and in the page
we have the content of the body element of index.hTml.

14
00:02:00,120 --> 00:02:14,035
So here it is, and this helps us to see how the component we are
building we'll appear on the page, where we have the page global

15
00:02:14,055 --> 00:02:21,405
styles and the HTML layout affecting the display of the component.

16
00:02:22,455 --> 00:02:34,695
And because we have the CSS selector empty, the component is
displayed in the MAIN element , at the beginning of the MAIN element.

17
00:02:36,600 --> 00:02:43,350
If we check the Tree panel, we see that the structure of index.Html is shown.

18
00:02:43,739 --> 00:02:49,774
So the pinegrow.com is used as a context, as a, as just a wrapper.

19
00:02:50,674 --> 00:02:56,519
We are not supposed to edit the  content ,of the Pinegrow website.

20
00:02:57,780 --> 00:03:08,299
The opening wrapper feature just lets us
display our document inside a remote website.

21
00:03:08,299 --> 00:03:22,030
If you try to select any of the elements on of the wrapper page, we
get these dynamic elements and we can't really do much with them.

22
00:03:22,280 --> 00:03:32,250
But if we select anything that belongs to
the index.html, we can edit it as usually.

23
00:03:32,880 --> 00:03:35,820
And we can see the structure in the Tree panel.

24
00:03:36,810 --> 00:03:51,990
And now we can use the style panel to adjust the styling
so that it fits the target page, pinegrow.com in our case.

25
00:03:53,980 --> 00:04:05,080
For this example, you might notice we used the
styles scoped to happy-holidays-banner class.

26
00:04:10,440 --> 00:04:18,404
This prevents the styles of the component from leaking
out and affecting other elements on the target website.

27
00:04:18,945 --> 00:04:31,234
So that's a good practice to follow when we are designing components that
will be integrated somewhere else that, that we use very narrow CSS selectors.

28
00:04:32,494 --> 00:04:47,055
For example, let's change the background color, make it
compatible with the brand  colors on Pinegrow website.

29
00:04:47,055 --> 00:04:55,035
So let's pick up the blue from the header and make it a bit transparent.

30
00:04:57,660 --> 00:04:59,810
And sorry about using cookies.

31
00:05:00,360 --> 00:05:08,650
If you are getting hungry, watching them, well treat
yourself to something delicious while you're at it.

32
00:05:09,650 --> 00:05:13,510
Or change the image to something non-edible.

33
00:05:15,150 --> 00:05:19,830
Here we can notice that the section gets some kind of padding.

34
00:05:20,469 --> 00:05:27,780
Pinegrow.com probably has a global style for
section element that adds the bottom padding.

35
00:05:27,780 --> 00:05:29,040
And we don't want it here.

36
00:05:29,045 --> 00:05:34,590
So just go to padding, set this to zero.

37
00:05:36,210 --> 00:05:40,170
And here we have a border on top.

38
00:05:40,170 --> 00:05:42,840
We can add that to the bottom as well.

39
00:05:42,840 --> 00:05:59,130
We can pick the color from the border that we have here.

40
00:06:03,870 --> 00:06:04,920
So here it is.

41
00:06:05,790 --> 00:06:08,595
And we can even preview the page in the browser.

42
00:06:09,115 --> 00:06:14,540
Here we see a remote page with our banner.

43
00:06:15,470 --> 00:06:25,800
To go back to editing the standalone page, go to the
Project panel, right click on index.hTml and select Open.

44
00:06:27,710 --> 00:06:29,230
Save changes if needed.

45
00:06:29,250 --> 00:06:34,440
This will reopen the page in a standalone document.

46
00:06:35,640 --> 00:06:49,935
And if you want to change the wrapper, right click on the file name and go
into wrapper settings where we can change the URL or change the selector.

47
00:06:50,415 --> 00:07:01,755
And after making a change, we have to go back and say, Open in wrapper,
if we want to display the page in the wrapper with new settings.

48
00:07:03,034 --> 00:07:12,900
Open in wrapper is a very handy feature when we are building
custom Gutenberg blocks for WordPress, for example, and it lets

49
00:07:12,900 --> 00:07:22,210
us use the target website as a wrapper so that we can adjust
the design of the block to the website where it will be used.

50
00:07:23,130 --> 00:07:26,850
It's very useful if you're working on blocks or components.

`,this.addLesson(e)}lesson_PGIA_Media(){var e=this.newLesson("pgia_media");e.name="Responsive interactions",e.tags=["Interactions"],e.short_description="Create responsive animations with fluid switching between the small and large screen versions.",e.description=e.makeDesc("775386750",`<p>${e.short_description}</p>`,`
<ol>
<li>Select the <b>${this.select("div")}</b> element.</li>
<li>Open the <b>Interactions panel</b>.</li>
<li><b>${this.tooltip("Turn on Test clicks","test_clicks")}</b> so that the page handles the clicks.</li>
<li>Click on the purple box to trigger the ${this.showInteraction("first animation","interaction",1)}.</li>
<li>Click on the ${this.showInteraction("Play button of the 2nd animation","interaction",2,"play")} to play the animation. That animation is not yet connected to any event.</li>
<li>Open ${this.showInteraction("Advanced options","interaction",1,"options")} on the first interaction.</li>
<li>Set ${this.showInteraction("Enable on","interaction",1,"enable_on")} field to <code>Large screen</code>.</li>
<li>Open ${this.showInteraction("Advanced options","interaction",2,"options")} on the second interaction.</li>
<li>Set ${this.showInteraction("Enable on","interaction",2,"enable_on")} field to <code>Small screen</code>.</li>
<li>Set its ${this.showInteraction("Trigger","interaction",2,"trigger")} field to <code>Click</code>.</li>
<li>You might have to <b>Refresh the page</b> after making changes to the <code>Enable on</code> fields.</li>
<li>Play with the animation on different screen sizes.</li>
<li>Try setting the Trigger of both animations to <code>Page &amp; Window</code> -&gt; <code>Load - Immediately</code> and resize the page.</li>
</ol>

`),e.addPage("index.html",`<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <meta name="description" content=""> 
        <meta name="author" content=""> 
        <title>New page</title>         
        <link href="css/normalize.css" rel="stylesheet"> 
        <link href="css/style.css" rel="stylesheet"> 
        <script>/* Pinegrow Interactions, do not remove */ (function(){try{if(!document.documentElement.hasAttribute('data-pg-ia-disabled')) { window.pgia_small_mq=typeof pgia_small_mq=='string'?pgia_small_mq:'(max-width:767px)';window.pgia_large_mq=typeof pgia_large_mq=='string'?pgia_large_mq:'(min-width:768px)';var style = document.createElement('style');var pgcss='html:not(.pg-ia-no-preview) [data-pg-ia-hide=""] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=""] {opacity:1;visibility:visible;display:block;}';if(document.documentElement.hasAttribute('data-pg-id') && document.documentElement.hasAttribute('data-pg-mobile')) {pgia_small_mq='(min-width:0)';pgia_large_mq='(min-width:99999px)'} pgcss+='@media ' + pgia_small_mq + '{ html:not(.pg-ia-no-preview) [data-pg-ia-hide="mobile"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="mobile"] {opacity:1;visibility:visible;display:block;}}';pgcss+='@media ' + pgia_large_mq + '{html:not(.pg-ia-no-preview) [data-pg-ia-hide="desktop"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="desktop"] {opacity:1;visibility:visible;display:block;}}';style.innerHTML=pgcss;document.querySelector('head').appendChild(style);}}catch(e){console&&console.log(e);}})()</script>
        <link rel="stylesheet" href="simple.css">
    </head>     
    <body>
        <div class="actor" data-pg-ia='{"l":[{"a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"background":"linear-gradient(90deg, #f46b45, #eea849)","y":-100}}]}]},"trg":"click"},{"trg":"no","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"background":"linear-gradient(90deg, #56ab2f, #a8e063)","y":100}}]}]}}]}'>What&apos;s UP &amp; ORANGE on large screen and DOWN &amp; GREEN on small screen?</div>
        <script type="text/javascript" src="pgia/lib/pgia.js"></script>
    </body>     
</html>
`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",`body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.actor {
    max-width: 80%;
    width: 420px;
    padding: 20px;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    background: linear-gradient(90deg, #DA22FF, #9733EE);
}`),e.addPGIA(),e.subtitles=`1
00:00:00,570 --> 00:00:10,500
Pinegrow 7 makes it possible to create responsive animations
with fluid switching between the small and large screen versions.

2
00:00:11,680 --> 00:00:21,240
Although it was possible to create interactions that only ran on small
other large screens, once the page was loaded, the interactions were fixed.

3
00:00:21,540 --> 00:00:28,860
So if you resized the page from large to small size,
the large version of interactions kept running.

4
00:00:29,390 --> 00:00:33,280
The only way to switch was by reloading the page.

5
00:00:33,830 --> 00:00:34,810
Not anymore.

6
00:00:35,250 --> 00:00:40,590
Interactions are now responsive without having to reload the page.

7
00:00:40,620 --> 00:00:41,700
So let's take a look.

8
00:00:42,510 --> 00:00:48,180
Select the DIV element on the page and open the interactions panel.

9
00:00:49,410 --> 00:00:51,780
The element has two interactions.

10
00:00:51,870 --> 00:00:58,320
The first one is triggered by the click event, and the second one is not active.

11
00:00:59,160 --> 00:01:06,270
Turn on test clicks so that the page handles the
clicks and that we can test the interactions.

12
00:01:07,380 --> 00:01:13,595
Then click on the purple box and it triggers the first animation.

13
00:01:14,975 --> 00:01:27,870
And if we click on the play button of the second animation, we play
the second animation, which makes the box green and moves it down.

14
00:01:29,880 --> 00:01:33,480
And this animation is not yet connected to any event.

15
00:01:35,310 --> 00:01:45,090
Let's open advanced options on the first interaction
and here set "Enable on" to large screen.

16
00:01:46,110 --> 00:01:50,060
This makes the interaction only trigger on large screens.

17
00:01:53,060 --> 00:01:56,280
Open advanced options on the second interaction.

18
00:01:57,530 --> 00:02:06,810
Here set "Enable on" to small screens and also set
the trigger of the second interaction to Click.

19
00:02:07,260 --> 00:02:16,350
And after making changes to "Enable on" fields, it
might be required to reload, refresh the page view.

20
00:02:16,920 --> 00:02:18,000
So let's do that.

21
00:02:18,390 --> 00:02:22,290
And now we are displaying the page on the large size.

22
00:02:23,280 --> 00:02:35,430
And if we click on the element, the orange animation is played,
and when we resize the page to small size, the large animation

23
00:02:35,430 --> 00:02:39,600
is reset and the element returns to its original state.

24
00:02:40,350 --> 00:02:48,870
And now if we click on it, the green animation is played,
the second animation that is defined on the small screen.

25
00:02:49,860 --> 00:02:55,219
Again, if we enlarge the page, the element gets reset.

26
00:02:55,689 --> 00:02:59,960
And if we click, the large orange animation is played.

27
00:03:01,340 --> 00:03:09,480
We can change the trigger of both animations to page load immediately.

28
00:03:16,890 --> 00:03:22,530
And now when we resize the page we see what happens.

29
00:03:22,530 --> 00:03:31,260
So if we start on the large screen, the large animation is
played, and then when we resize it down, it resets to the initial

30
00:03:31,260 --> 00:03:35,640
position, and then the green animation is played immediately.

31
00:03:36,330 --> 00:03:38,345
So this creates this nice effect.

32
00:03:40,114 --> 00:03:46,140
You might wonder, how do we decide which size is large and which size is small?

33
00:03:47,410 --> 00:04:08,934
And if you take a look at the code, by default the
Small  Media query targets, maximum width  of 767 pixels.

34
00:04:10,125 --> 00:04:14,995
And then the large media query targets values above  that.

35
00:04:16,144 --> 00:04:23,474
And if you want to customize these values,
you just have to redefine these two variables.

36
00:04:23,564 --> 00:04:34,245
pgia_large_mq and pgia_small_mq, and you have to redefine
them before this script is included in the header.

37
00:04:34,250 --> 00:04:37,634
So you would have to redefine them somewhere up here.

38
00:04:39,085 --> 00:04:42,565
We have information about that in our documentation.

`,this.addLesson(e)}lesson_PGIA_PlayOnMove(){var e=this.newLesson("pgia_play_on_move");e.name="Play on playhead move",e.tags=["Interactions"],e.short_description=`Simplify scroll interactions by playing the animation whenever the playhead moves.`,e.description=e.makeDesc("775386997",`<p>${e.short_description}</p>`,`
<ol>
<li>Select the <b>${this.select("header")}</b> element.</li>
<li>Open the <b>Interactions panel</b>.</li>
<li>Go to the ${this.showInteraction("Interaction 3","interaction",3)} and click on the ${this.showInteraction("Edit animation","interaction",3,"edit")} button.</li>
<li>Scroll the page up and down quickly, and try to get the animation stuck.</li>
<li>Click on the ${this.showTimeline("Play HIDE transform","transform",1,1)} to open the Transform editor.</li>
<li>Click on the ${this.showTimeline("Add property","edit_transform_add")} button and select <code>Interactions</code> -&gt; <code>Play when the playhead moves</code>.</li>
<li>Add the same property to the ${this.showTimeline("Play SHOW transform","transform",2,1)}.</li>
<li>Try getting the animation stuck now. It should not happen anymore.</li>
</ol>

`),e.addPage("index.html",`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <title>New page</title>
        <link rel="stylesheet" href="css/normalize.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        <script>/* Pinegrow Interactions, do not remove */ (function(){try{if(!document.documentElement.hasAttribute('data-pg-ia-disabled')) { window.pgia_small_mq=typeof pgia_small_mq=='string'?pgia_small_mq:'(max-width:767px)';window.pgia_large_mq=typeof pgia_large_mq=='string'?pgia_large_mq:'(min-width:768px)';var style = document.createElement('style');var pgcss='html:not(.pg-ia-no-preview) [data-pg-ia-hide=""] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=""] {opacity:1;visibility:visible;display:block;}';if(document.documentElement.hasAttribute('data-pg-id') && document.documentElement.hasAttribute('data-pg-mobile')) {pgia_small_mq='(min-width:0)';pgia_large_mq='(min-width:99999px)'} pgcss+='@media ' + pgia_small_mq + '{ html:not(.pg-ia-no-preview) [data-pg-ia-hide="mobile"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="mobile"] {opacity:1;visibility:visible;display:block;}}';pgcss+='@media ' + pgia_large_mq + '{html:not(.pg-ia-no-preview) [data-pg-ia-hide="desktop"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="desktop"] {opacity:1;visibility:visible;display:block;}}';style.innerHTML=pgcss;document.querySelector('head').appendChild(style);}}catch(e){console&&console.log(e);}})()</script>
    </head>
    <body>
        <header data-pg-ia='{"l":[{"name":"Hide","trg":"no","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"y":-100}}]}]},"po":"true","rstr":"true"},{"name":"Show","trg":"no","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"y":0}}]}]},"po":"true", "rstr":"true"},{"trg":"scrolling","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":5,"l":{"pgia":{"play":"Hide","dir":"f"}}}]},{"t":"","l":[{"t":"tween","p":0,"d":5,"l":{"pgia":{"play":"Show","dir":"b"}}}]}]}}]}'>Fancy retractable header&nbsp;</header>
        <div class="scrollable-area"></div>
        <script type="text/javascript" src="pgia/lib/pgia.js"></script>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",`body { margin: 0; padding: 0; height: 200vh;} header { height: 80px; background: red; text-align: center; display: flex; align-items: center; justify-content: center; color: #fff; position: fixed; width: 100%; left: 0; top: 0; }`),e.addPGIA(),e.subtitles=`1
00:00:00,390 --> 00:00:09,810
This new interactions feature lets us simplify scroll interactions
by playing the target animation whenever the play head moves.

2
00:00:10,020 --> 00:00:12,115
Let's take a look at an example.

3
00:00:13,020 --> 00:00:22,890
This page has a fancy header that should be hidden when we
scroll down, and then again shown when we scroll back up.

4
00:00:23,850 --> 00:00:27,880
Select the header and go to the interactions panel.

5
00:00:28,419 --> 00:00:31,290
There we have three interactions.

6
00:00:32,580 --> 00:00:35,670
The first one defines the Hide animation.

7
00:00:36,780 --> 00:00:47,280
The second one defines the Show animation, and the third one
plays these two animations together when we scroll the page.

8
00:00:48,390 --> 00:00:53,245
So let's click on edit animation of the third interaction.

9
00:00:54,855 --> 00:01:06,465
If the information panel gets too squished or we can't see the timeline
editor, you can move the information panel wherever you wish if you have

10
00:01:06,470 --> 00:01:13,525
enough place on the screen, or you can even float it up in the floating window.

11
00:01:14,955 --> 00:01:22,065
You just rearrange your work workspace so that you can see all the panels.

12
00:01:22,244 --> 00:01:27,274
And here we want to have a clear view of the timeline editor.

13
00:01:28,425 --> 00:01:31,184
This interaction has two transforms.

14
00:01:31,604 --> 00:01:44,205
The first one plays the Hide animation when the playhead
is moving forward, and it plays the Show animation.

15
00:01:44,970 --> 00:01:55,810
When the playhead is moving backward, this
is defined by the play direction parameter.

16
00:01:57,620 --> 00:02:07,740
We are using Play animation to play the Hide animation
that is also defined here on the same element.

17
00:02:10,320 --> 00:02:14,970
So everything works fine, right?

18
00:02:17,309 --> 00:02:26,429
Unless we start to scroll up and down rapidly, and then the header gets stuck.

19
00:02:27,059 --> 00:02:28,109
So what happened?

20
00:02:29,369 --> 00:02:37,160
By default Play triggers only when the playhead enters the transform.

21
00:02:38,250 --> 00:02:46,030
And if the play head stays over this transform, the
animation is not replayed when the play head moves.

22
00:02:46,030 --> 00:02:50,220
So, if I do this, nothing will happen.

23
00:02:50,790 --> 00:02:57,955
And if I go up, the play head reaches the
beginning of transform, the position zero.

24
00:02:58,745 --> 00:03:11,910
Then when I go down and go back up the animation is played again
because going back to zero resets the inner state of the transform

25
00:03:12,450 --> 00:03:16,410
and the flag that the animation was already played resets.

26
00:03:17,100 --> 00:03:35,100
But if we stay here without going back to the initial position, without going
back to zero of the transform, then the hide animation was already played and

27
00:03:35,100 --> 00:03:43,080
will not be replayed as long as the playhead stays within these transforms.

28
00:03:43,920 --> 00:03:53,040
So what we need is a way to tell the Play that
it should be played whenever the play head moves.

29
00:03:53,820 --> 00:03:59,595
And that's exactly what the new Play when playhead moves option does.

30
00:03:59,985 --> 00:04:13,605
So click, here on the Hide transform, and then go to add
property -> Interactions -> Play when playhead moves.

31
00:04:14,565 --> 00:04:15,915
And this should be checked.

32
00:04:15,975 --> 00:04:17,255
It's checked by default.

33
00:04:18,284 --> 00:04:26,460
Then click on the second transform and do the same: add
property -> Interactions -> Play when play head moves.

34
00:04:27,930 --> 00:04:39,180
So let's try to get the animation stuck now, and
we can't, whatever we do, it works correctly.

35
00:04:39,270 --> 00:04:41,380
It doesn't get stuck anymore.

36
00:04:42,710 --> 00:04:43,290
Why?

37
00:04:44,200 --> 00:04:55,805
Because now the header is hidden and then when we scroll
up, this will move the playhead in this direction.

38
00:04:56,975 --> 00:05:05,685
Because we have play on move set and we have backward
direction set, the show animation will be played.

39
00:05:06,255 --> 00:05:07,005
Let's try.

40
00:05:08,055 --> 00:05:08,775
Here it is.

41
00:05:08,895 --> 00:05:16,035
And again, when we move the play head
forward, the Hide animation will be played.

42
00:05:17,745 --> 00:05:19,815
And this happens on every move.

43
00:05:20,175 --> 00:05:31,155
So, It sounds a bit wasteful,  triggering one animation so
often, and of course there is some overhead, but not so much.

44
00:05:31,245 --> 00:05:31,755
Why?

45
00:05:32,565 --> 00:05:44,815
If we take a look at the how hide animation is
defined, it's simply twins the transform Y to  -100.

46
00:05:45,465 --> 00:05:50,250
And if the element is already positioned there, then nothing really happens.

47
00:05:50,520 --> 00:05:54,360
It just twins from -100 to -100.

48
00:05:55,710 --> 00:06:10,190
And it's important that our animation works not from a set predefined
fixed point, but from whatever is currently the value of Y.

49
00:06:10,890 --> 00:06:29,640
For example, if we add a set,  and say, transform should be zero, this means
that this animation should always start from Y zero and then animate to there.

50
00:06:30,450 --> 00:06:41,350
And now if we take a look, what happens, it doesn't look good
because whenever the animation is triggered, it always starts from 0.

51
00:06:42,130 --> 00:06:53,815
,But the header is actually not on zero because it is moved by
either previous run of the Hide animation or by the Show animation.

52
00:06:54,825 --> 00:07:07,905
So in this case, we can't use the set here and our animation should
always play from the current state, from the current position.

53
00:07:08,430 --> 00:07:15,270
And that's why we also have here Restart on play, set on both animations.

54
00:07:15,840 --> 00:07:28,140
Restart on play because we want animation to forget any stored position and
instead start from the actual position at the time the animation is played.

55
00:07:29,580 --> 00:07:42,510
So that's why we have this here and without this setting
the animation would play from its internally stored

56
00:07:43,080 --> 00:07:48,210
value of Y transform, and this is not always correct.

57
00:07:48,990 --> 00:07:51,640
So that's why we need restart on play.

58
00:07:55,470 --> 00:08:06,165
We also use Stop other animations on both of those so that when
Show starts to play, it'll stop the Hide animation and vice versa.

`,this.addLesson(e)}lesson_CSSMediaTabs(){var e=this.newLesson("css_media_tabs");e.name="Media size tabs in Visual CSS editor",e.short_description="Use Visual CSS editor media size tabs to easily create responsive designs.",e.tags=["css"],e.description=e.makeDesc("775386102",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("header")}</b> element.</li>
<li>Open the <b>Style panel</b>.</li>
<li>Make sure the ${this.rule("header")} is selected.</li>
<li>Click on the ${this.showStyleSizeTab("MD")}.</li>
<li>Click on the ${this.showStyleSizeTabCreateRule()} button.</li>
<li>Notice that the new <code>.header</code> rule was created under <code>@media (min-width: 769px)</code>.</li>
<li>Set the <b>Background image</b> to <code>pines_medium.jpg</code>.</li>
<li>Use controls in <b>Flex Container</b> section to position the heading.</li>
<li><b>Right-click</b> on the ${this.showStyleSizeTab("LG")} to switch to that size and to resize the page view.</li>
<li>Click on the ${this.showStyleSizeTabCreateRule()} button.</li>
<li>Notice that the new <code>.header</code> rule was created under <code>@media (min-width: 1025px)</code>.</li>
<li>Set the <b>Background image</b> to <code>pines_large.jpg</code>.</li>
<li>Use controls in <b>Flex Container</b> section to position the heading.</li>
<li>Use <b>Visual CSS editor settings</b> to toggle automatic page view resizing.</li>
</ol>

`),e.addPage("index.html",`<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <meta name="description" content=""> 
        <meta name="author" content=""> 
        <title>New page</title>         
        <link href="css/normalize.css" rel="stylesheet"> 
        <link href="style.css" rel="stylesheet"> 
    </head>     
    <body>
        <header>
            <h1>Welcome to The Misty Pines Resort &amp; Spa</h1>
        </header>
    </body>     
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("style.css",`header {
background-image: url('pines_small.jpg');
    padding: 40px;
    color: #ecf4e1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 400px;
}

header h1 {
    background-color: rgba(36, 65, 55, 0.6);
    padding: 20px;
    max-width: 600px;
    margin: 0;
}`),e.addResource("pines_large.jpg","https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2200&h=800&q=80"),e.addResource("pines_medium.jpg","https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80"),e.addResource("pines_small.jpg","https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"),e.subtitles=`1
00:00:00,510 --> 00:00:08,550
Pinegrow 7 makes it easy to create responsive designs
with new media size tabs in the visual CSS editor.

2
00:00:08,990 --> 00:00:19,140
Here, we have a design that works well on small
screens, but can be improved on larger displays.

3
00:00:20,130 --> 00:00:21,060
So let's do that.

4
00:00:22,290 --> 00:00:27,689
Select the header element on the page and open the style panel.

5
00:00:28,610 --> 00:00:37,455
Make sure that the header CSS rule is
selected at the top of the visual CSS editor.

6
00:00:37,515 --> 00:00:49,614
We have tabs for media sizes, and media sizes are defined by
active framework or with page manage break points feature.

7
00:00:52,215 --> 00:00:57,105
Click on the MD tab to switch to styling the medium screen.

8
00:00:59,355 --> 00:01:01,995
And media tabs follow the mobile first approach.

9
00:01:01,995 --> 00:01:06,375
So this means that the medium size targets the medium size and above.

10
00:01:07,575 --> 00:01:25,545
So 768 pixels and up the rule for medium size is not yet defined press to
create the rule button to create the new empty CSS rule for this media.

11
00:01:28,095 --> 00:01:40,544
and let's set the background image to pines_medium.Jpg.

12
00:01:42,884 --> 00:01:54,715
So now we have a better quality background image for this size,
and we can use the flex container controls to position the element.

13
00:01:57,695 --> 00:02:12,750
By default, switching the media sizes does not resize the page, but
if you click with the right button, the page is resized as well.

14
00:02:13,380 --> 00:02:20,570
So here we clicked with the right button on
the LG size, and that also resized the page.

15
00:02:22,800 --> 00:02:31,810
Let's create the rule  and set background image to pines_large.jpg.

16
00:02:36,280 --> 00:02:43,924
Again, we can use flex container controls to position the title.

17
00:02:49,135 --> 00:03:05,700
Use the settings menu to keep the selected media tab size
synchronized with the page view size when the sync is enabled.

18
00:03:06,300 --> 00:03:17,489
Selecting the media size tab, resizes the page and
resizing the page selects the active media size tab.

`,this.addLesson(e)}lesson_CSSGridGap(){var e=this.newLesson("grid_gap");e.name="Advanced gap controls in CSS Grid editor",e.short_description="Use separate controls for column and row gap to finetune your CSS grid layout.",e.tags=["css"],e.description=e.makeDesc("775386451",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("section")}</b> element.</li>
<li>Open the <b>CSS grid</b> editor.</li>
<li>Set the <b>${this.showGridElement("Gap column",".crsa-field-gap")}</b> to <code>20px</code>.</li>
<li>Notice that column gaps and row gaps are the same.</li>
<li>Turn off the <b>${this.showGridElement("Equal gaps",".crsa-field-gap-eq")}</b> toggle.</li>
<li>Set the <b>${this.showGridElement("Gap row",".crsa-field-gap-row")}</b> to <code>40px</code>.</li>
<li>Notice that you can now separately control gaps between columns and rows.</li>
</ol>

`),e.addPage("index.html",`<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <meta name="description" content=""> 
        <meta name="author" content=""> 
        <title>New page</title>         
        <link href="css/normalize.css" rel="stylesheet"> 
        <link href="css/style.css" rel="stylesheet"> 
    </head>     
    <body>
        <section class="grid">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </section>
    </body>     
</html>
`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",`
                .grid > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    background: linear-gradient(146deg, #ffe259 0%, #ffa751 100%);
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px;
}
`),e.subtitles=`1
00:00:00,550 --> 00:00:06,060
Pinegrow 7 adds advanced controls for CSS grid column and row gaps.

2
00:00:06,180 --> 00:00:12,150
Here we have a simple CSS grid layout with three columns and three rows.

3
00:00:12,690 --> 00:00:16,379
And here is the structure, the HTML structure.

4
00:00:16,820 --> 00:00:21,090
So let's add some gap between the grid items.

5
00:00:22,410 --> 00:00:33,420
Let's select the section element where the
grid is and then open the CSS grid editor.

6
00:00:38,640 --> 00:00:42,910
Set the first gap to 20 pixels.

7
00:00:44,340 --> 00:00:47,490
Notice that column gaps in row gaps are the same.

8
00:00:48,630 --> 00:00:53,490
If we change this value, they both change at the same time.

9
00:00:54,450 --> 00:00:56,760
And here we have an equal icon.

10
00:00:57,970 --> 00:00:59,210
Turn it off.

11
00:01:00,285 --> 00:01:06,525
And now we can set different values for column gap and row gap.

12
00:01:07,095 --> 00:01:14,895
So let's set 40 pixels for the row and 20 for columns.

13
00:01:15,945 --> 00:01:22,695
To use same values for both gaps, just reactivate the equal icon.

`,this.addLesson(e)}lesson_ClassPreviewBootstrap(){var e=this.newLesson("class_preview_bs");e.name="Preview Bootstrap property controls",e.short_description="See the effect of property values while hovering over them.",e.tags=["bootstrap"],e.description=e.makeDesc("775386556",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("h1")}</b> element.</li>
<li>Open the <b>Properties panel</b>.</li>
<li>Hover the mouse pointer over the <b>${this.showBSField("Text color","emphasis")}</b> control.</li>
<li>Click on a value in the <b>${this.showBSField("Text color","emphasis")}</b> control to set the value.</li>
<li>Open the <b>${this.showBSField("Font weight","fontweight")}</b> control and hover over the list values.</li>
<li>Hover over the checkbox controls such as <b>${this.showBSField("Lead","lead")}</b> to preview their effects.</li>
<li>Note, the preview only works for class-based controls. For example, it does not work with <b>${this.showBSField("Heading level",".crsa-field-bs5-headlevel")}</b> because that control changes the element tag, not its class.</li>
<li>Press ${pgShowKbd("SHIFT")} ${pgShowKbd("SHIFT")} to display <b>Floating tools</b>.</li>
<li>Make sure floating tools are in the Set mode and try hovering over tool values.</li>
</ol>
`),e.addPage("index.html",`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Blank Template for Bootstrap</title>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
</div>
        <!-- Bootstrap core JavaScript
    ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <section class="bg-light pt-5 text-center text-secondary">
            <div class="container">
                <div class="pt-5 row">
                    <div class="col-lg-8 mx-auto">
                        <p class="h6 text-primary text-uppercase">The Latest</p>
                        <h1 class="fw-bold mb-3 text-danger">The Natural Experience</h1>
                        <p class="fw-light h2 mb-4">
                                Our ability to feel, act and communicate is indistinguishable from magic. </p>
                        <a href="#" class="btn btn-primary pb-2 pe-4 ps-4 pt-2">Get It Now</a>
                        <div class="bg-white mb-n5 mt-5 p-5" style="border-radius: 0.5rem;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1026.792 968.525" class="img-fluid">
                                <path data-name="Path 1" d="M983.42 377.219s131.86 243.87-64.25 384.63-302.92-55.05-460.02 111.77c-115.88 123.05-507.49-87.82-343.37-297.42s299.69-230.47 302.78-453.4 382.48-144.76 564.86 254.42z" fill="#cce9ff" opacity=".51"/>
                                <g data-name="Group 56">
                                    <path data-name="Path 2" d="M169.8 110.879h714.13a27.984 27.984 0 0127.98 27.98v505.97a27.984 27.984 0 01-27.98 27.98H169.8a27.984 27.984 0 01-27.98-27.98v-505.97a27.984 27.984 0 0127.98-27.98z" fill="#f7f7f7"/>
                                    <path data-name="Path 3" d="M911.92 137.149c0-14.51-10.18-26.27-22.75-26.27h-724.6c-12.56 0-22.75 11.76-22.75 26.27v499.88h770.09v-499.88z" fill="#084970"/>
                                    <path data-name="Rectangle 1" fill="#d3d3d3" d="M172.28 152.449h712.2v443.89h-712.2z"/>
                                    <g data-name="Group 3">
                                        <path data-name="Path 4" d="M541.76 451.829H59.87a17.167 17.167 0 01-17.17-17.17v-246.67a17.167 17.167 0 0117.17-17.17h481.89a17.167 17.167 0 0117.17 17.17v246.66a17.163 17.163 0 01-17.17 17.18z" fill="#cce9ff"/>
                                        <g data-name="Group 1">
                                            <path data-name="Path 5" d="M266.64 360.829v-24.55a1.04 1.04 0 00-2.08 0v24.55a3.684 3.684 0 00-3.37 3.65v18.28a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.02a3.684 3.684 0 003.37-3.65v-18.28a3.675 3.675 0 00-3.37-3.64z" fill="#2a94f4"/>
                                            <path data-name="Path 6" d="M285.47 325.089v-24.55a1.04 1.04 0 00-2.08 0v24.55a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.692 3.692 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 7" d="M304.3 299.049v-11.01a1.035 1.035 0 00-1.04-1.02 1.022 1.022 0 00-1.04 1.02v11.01a3.684 3.684 0 00-3.37 3.65v86.01a3.692 3.692 0 003.37 3.65v24.56a1.035 1.035 0 001.04 1.02 1.022 1.022 0 001.04-1.02v-24.56a3.684 3.684 0 003.37-3.65v-86.01a3.685 3.685 0 00-3.37-3.65z" fill="#ffbe55"/>
                                            <path data-name="Path 8" d="M323.13 324.109v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.685 3.685 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 9" d="M341.96 345.309v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v31.82a3.692 3.692 0 003.37 3.65v38.1a1.04 1.04 0 002.08 0v-38.1a3.684 3.684 0 003.37-3.65v-31.82a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 10" d="M360.78 356.659v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v18.28a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-18.28a3.677 3.677 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 11" d="M379.61 358.619v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v4.73a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-4.73a3.677 3.677 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 12" d="M398.44 313.259v-24.55a1.04 1.04 0 00-2.08 0v24.55a3.684 3.684 0 00-3.37 3.65v31.82a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-31.82a3.684 3.684 0 00-3.37-3.65z" fill="#ffbe55"/>
                                            <path data-name="Path 13" d="M417.27 291.229v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 14" d="M436.1 255.489v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v86.01a3.684 3.684 0 003.37 3.65v11.01a1.035 1.035 0 001.04 1.02 1.022 1.022 0 001.04-1.02v-11.01a3.684 3.684 0 003.37-3.65v-86.01a3.685 3.685 0 00-3.37-3.65z" fill="var(--bs-danger)"/>
                                            <path data-name="Path 15" d="M454.93 277.279v-24.56a1.04 1.04 0 00-2.08 0v24.56a3.684 3.684 0 00-3.37 3.65v31.82a3.692 3.692 0 003.37 3.65v24.55a1.04 1.04 0 002.08 0v-24.55a3.684 3.684 0 003.37-3.65v-31.82a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 16" d="M473.76 247.429v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v4.73a3.692 3.692 0 003.37 3.65v11.01a1.035 1.035 0 001.04 1.02 1.022 1.022 0 001.04-1.02v-11.01a3.684 3.684 0 003.37-3.65v-4.73a3.685 3.685 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 17" d="M492.59 232.899v-11a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.687 3.687 0 00-3.37-3.66z" fill="#2a94f4"/>
                                            <path data-name="Path 18" d="M511.42 208.749v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v72.46a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-72.46a3.684 3.684 0 00-3.37-3.65z" fill="#ffbe55"/>
                                            <path data-name="Path 19" d="M530.25 241.039v-51.65a1.04 1.04 0 00-2.08 0v51.65a3.684 3.684 0 00-3.37 3.65v113.1a3.692 3.692 0 003.37 3.65v24.56a1.04 1.04 0 002.08 0v-24.56a3.684 3.684 0 003.37-3.65v-113.1a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                        </g>
                                        <path data-name="Rectangle 2" fill="#2a94f4" d="M69.96 201.399h172.23v11.31H69.96z"/>
                                        <path data-name="Rectangle 3" fill="#ffbe55" d="M69.96 222.099h110.67v11.31H69.96z"/>
                                        <path data-name="Rectangle 4" fill="var(--bs-danger)" d="M69.96 262.989h138.49v11.31H69.96z"/>
                                        <path data-name="Rectangle 5" fill="#2a94f4" d="M69.96 242.969H220.4v11.31H69.96z"/>
                                        <g data-name="Group 2">
                                            <path data-name="Path 20" d="M133.2 296.029a67.778 67.778 0 1056.94 120.12l-40.47-54.38z" fill="#2a94f4"/>
                                            <path data-name="Path 21" d="M213.57 339.189a67.774 67.774 0 00-80.37-43.16l16.47 65.75z" fill="#ffbe55"/>
                                            <path data-name="Path 22" d="M213.57 339.189l-63.91 22.59 40.47 54.38a67.79 67.79 0 0023.44-76.97z" fill="#2a94f4"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 55">
                                        <path data-name="Path 23" d="M974.34 528.969H608.93a14.788 14.788 0 01-14.79-14.79v-242.64a14.788 14.788 0 0114.79-14.79h365.41a14.788 14.788 0 0114.79 14.79v242.64a14.8 14.8 0 01-14.79 14.79z" fill="#cce9ff"/>
                                        <g data-name="Group 11">
                                            <g data-name="Group 4">
                                                <path data-name="Path 24" d="M618.67 489.799a.491.491 0 01.49-.49.508.508 0 01.51.49.519.519 0 01-.51.51.515.515 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.512.512 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.508.508 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.508.508 0 01.51.49.5.5 0 01-.51.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.508.508 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 5">
                                                <path data-name="Path 25" d="M673.87 490.109a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.5.5 0 01-.49.51.506.506 0 01-.51-.51zm0-2.64a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.64a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.64a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.489.489 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.508.508 0 01-.49.51.506.506 0 01-.51-.51zm0-2.63a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.51-.51zm0-2.64a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.64a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 6">
                                                <path data-name="Path 26" d="M731.47 489.689a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.508.508 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.506.506 0 01.51.51.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.5.5 0 01.51.49.512.512 0 01-.51.51.515.515 0 01-.49-.51zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.508.508 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.506.506 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.512.512 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.508.508 0 01.49-.51.506.506 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.512.512 0 01-.51.51.508.508 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 7">
                                                <path data-name="Path 27" d="M791.03 491.299a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.5.5 0 01-.49-.49zm0-2.65a.478.478 0 01.49-.49.489.489 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 8">
                                                <path data-name="Path 28" d="M849.03 490.889a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 9">
                                                <path data-name="Path 29" d="M907.02 490.109a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.508.508 0 01-.49-.51zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 10">
                                                <path data-name="Path 30" d="M965.44 490.779a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.485.485 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.489.489 0 01-.49-.51zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.489.489 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                        </g>
                                        <g data-name="Group 20">
                                            <g data-name="Group 12">
                                                <path data-name="Path 31" d="M617.61 475.639v-3.11c13.71 0 20.53-9.17 27.74-18.88 7.36-9.9 14.96-20.13 30.24-20.13 13.81 0 20.62-7.4 27.84-15.23 7.35-7.98 14.95-16.24 30.13-16.24 15.42 0 23.01 13.76 30.36 27.07 7.23 13.09 14.05 25.46 27.63 25.46 13.45 0 20.62-17.75 27.55-34.92 7.32-18.12 14.89-36.86 30.44-36.86 15.43 0 23.03 14.3 30.37 28.13 7.23 13.62 14.06 26.48 27.62 26.48 13.44 0 20.62-17.95 27.55-35.3 7.32-18.32 14.89-37.26 30.44-37.26v3.11c-13.44 0-20.62 17.95-27.55 35.3-7.32 18.32-14.89 37.26-30.44 37.26-15.44 0-23.03-14.3-30.37-28.13-7.23-13.62-14.06-26.48-27.62-26.48-13.45 0-20.62 17.75-27.55 34.92-7.32 18.12-14.89 36.86-30.44 36.86-15.42 0-23.01-13.76-30.35-27.07-7.23-13.09-14.05-25.46-27.63-25.46-13.81 0-20.62 7.4-27.84 15.23-7.35 7.98-14.95 16.24-30.13 16.24-13.71 0-20.53 9.17-27.74 18.88-7.37 9.89-14.98 20.13-30.25 20.13z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 13">
                                                <path data-name="Path 32" d="M622.37 474.009a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 14">
                                                <path data-name="Path 33" d="M677.57 434.979a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 15">
                                                <path data-name="Path 34" d="M735.17 403.859a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 16">
                                                <path data-name="Path 35" d="M794.73 456.129a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 17">
                                                <path data-name="Path 36" d="M852.72 384.359a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 18">
                                                <path data-name="Path 37" d="M910.71 438.969a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 19">
                                                <path data-name="Path 38" d="M968.71 366.409a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                        </g>
                                        <g data-name="Group 54">
                                            <g data-name="Group 21">
                                                <path data-name="Rectangle 6" fill="#ffbe55" d="M621.63 306.459h8.63v23.44h-8.63z"/>
                                            </g>
                                            <g data-name="Group 22">
                                                <path data-name="Rectangle 7" fill="#2a94f4" d="M634.87 296.149h8.63v33.75h-8.63z"/>
                                            </g>
                                            <g data-name="Group 23">
                                                <path data-name="Rectangle 8" fill="#2a94f4" d="M621.56 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 24">
                                                <path data-name="Rectangle 9" fill="#ffbe55" d="M653.5 292.749h8.63v37.15h-8.63z"/>
                                            </g>
                                            <g data-name="Group 25">
                                                <path data-name="Rectangle 10" fill="#2a94f4" d="M666.74 281.499h8.63v48.4h-8.63z"/>
                                            </g>
                                            <g data-name="Group 26">
                                                <path data-name="Rectangle 11" fill="#2a94f4" d="M653.44 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 27">
                                                <path data-name="Rectangle 12" fill="#ffbe55" d="M685.38 292.749h8.63v37.15h-8.63z"/>
                                            </g>
                                            <g data-name="Group 28">
                                                <path data-name="Rectangle 13" fill="#2a94f4" d="M698.62 303.529h8.63v26.37h-8.63z"/>
                                            </g>
                                            <g data-name="Group 29">
                                                <path data-name="Rectangle 14" fill="#2a94f4" d="M685.31 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 30">
                                                <path data-name="Rectangle 15" fill="#ffbe55" d="M717.25 311.319h8.63v18.58h-8.63z"/>
                                            </g>
                                            <g data-name="Group 31">
                                                <path data-name="Rectangle 16" fill="#2a94f4" d="M730.49 304.469h8.63v25.43h-8.63z"/>
                                            </g>
                                            <g data-name="Group 32">
                                                <path data-name="Rectangle 17" fill="#2a94f4" d="M717.18 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 33">
                                                <path data-name="Rectangle 18" fill="#ffbe55" d="M749.12 296.149h8.63v33.75h-8.63z"/>
                                            </g>
                                            <g data-name="Group 34">
                                                <path data-name="Rectangle 19" fill="#2a94f4" d="M762.36 284.029h8.63v45.87h-8.63z"/>
                                            </g>
                                            <g data-name="Group 35">
                                                <path data-name="Rectangle 20" fill="#2a94f4" d="M749.06 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 36">
                                                <path data-name="Rectangle 21" fill="#ffbe55" d="M781 297.899h8.63v31.99H781z"/>
                                            </g>
                                            <g data-name="Group 37">
                                                <path data-name="Rectangle 22" fill="#2a94f4" d="M794.24 313.019h8.63v16.88h-8.63z"/>
                                            </g>
                                            <g data-name="Group 38">
                                                <path data-name="Rectangle 23" fill="#2a94f4" d="M780.93 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 39">
                                                <path data-name="Rectangle 24" fill="#ffbe55" d="M812.87 294.149h8.63v35.74h-8.63z"/>
                                            </g>
                                            <g data-name="Group 40">
                                                <path data-name="Rectangle 25" fill="#2a94f4" d="M826.11 301.649h8.63v28.24h-8.63z"/>
                                            </g>
                                            <g data-name="Group 41">
                                                <path data-name="Rectangle 26" fill="#2a94f4" d="M812.8 333.039h22.02v2.88H812.8z"/>
                                            </g>
                                            <g data-name="Group 42">
                                                <path data-name="Rectangle 27" fill="#ffbe55" d="M844.74 301.649h8.63v28.24h-8.63z"/>
                                            </g>
                                            <g data-name="Group 43">
                                                <path data-name="Rectangle 28" fill="#2a94f4" d="M857.98 311.319h8.63v18.58h-8.63z"/>
                                            </g>
                                            <g data-name="Group 44">
                                                <path data-name="Rectangle 29" fill="#2a94f4" d="M844.67 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 45">
                                                <path data-name="Rectangle 30" fill="#ffbe55" d="M876.61 296.149h8.63v33.75h-8.63z"/>
                                            </g>
                                            <g data-name="Group 46">
                                                <path data-name="Rectangle 31" fill="#2a94f4" d="M889.85 284.759h8.63v45.13h-8.63z"/>
                                            </g>
                                            <g data-name="Group 47">
                                                <path data-name="Rectangle 32" fill="#2a94f4" d="M876.55 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 48">
                                                <path data-name="Rectangle 33" fill="#ffbe55" d="M908.49 297.899h8.63v31.99h-8.63z"/>
                                            </g>
                                            <g data-name="Group 49">
                                                <path data-name="Rectangle 34" fill="#2a94f4" d="M921.73 290.099h8.63v39.8h-8.63z"/>
                                            </g>
                                            <g data-name="Group 50">
                                                <path data-name="Rectangle 35" fill="#2a94f4" d="M908.42 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 51">
                                                <path data-name="Rectangle 36" fill="#ffbe55" d="M940.36 278.889h8.63v51.01h-8.63z"/>
                                            </g>
                                            <g data-name="Group 52">
                                                <path data-name="Rectangle 37" fill="#2a94f4" d="M953.6 286.899h8.63v43h-8.63z"/>
                                            </g>
                                            <g data-name="Group 53">
                                                <path data-name="Rectangle 38" fill="#2a94f4" d="M940.29 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g data-name="Group 62">
                                    <g data-name="Group 60">
                                        <g data-name="Group 57">
                                            <path data-name="Path 39" d="M112.43 938.429c-14-8.55 40.3-153.63 65.42-215.6 24.58-60.62-62.47-83.37-82.93-9.33-10.49 37.95-11.03 178.22 17.51 224.93z" fill="#084970"/>
                                            <path data-name="Path 40" d="M112.43 938.429s-28.76-141.91 29.62-243.8" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.063"/>
                                        </g>
                                        <g data-name="Group 58">
                                            <path data-name="Path 41" d="M67.86 766.099c-43.85-62.14-87.53-11.22-58.46 31.72s103.19 140.15 103.19 140.15-.88-109.73-44.73-171.87z" fill="#0e538c"/>
                                            <path data-name="Path 42" d="M112.6 937.969s-34.81-102.65-81.35-165.61" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                        <g data-name="Group 59">
                                            <path data-name="Path 43" d="M183.02 779.439c59.72-35.42 70.01 13.11 44.04 43.77s-120.65 106.28-120.65 106.28 16.89-114.63 76.61-150.05z" fill="#0e538c"/>
                                            <path data-name="Path 44" d="M107.2 923.879s25.41-58.09 105.75-126.84" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 61" fill="#ffbe55">
                                        <path data-name="Rectangle 39" d="M77.73 915.409h60.45v12.23H77.73z"/>
                                        <path data-name="Path 45" d="M88.51 963.419h38.9l7.56-35.78H80.95z" fill="var(--bs-danger)"/>
                                    </g>
                                </g>
                                <g data-name="Group 68">
                                    <g data-name="Group 66">
                                        <g data-name="Group 63">
                                            <path data-name="Path 46" d="M799.73 940.849c-12.65-7.73 36.4-138.79 59.1-194.77 22.2-54.77-56.43-75.32-74.92-8.43-9.47 34.28-9.96 161 15.82 203.2z" fill="#2890dd"/>
                                            <path data-name="Path 47" d="M799.73 940.849s-25.98-128.2 26.76-220.24" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.063"/>
                                        </g>
                                        <g data-name="Group 64">
                                            <path data-name="Path 48" d="M759.47 785.169c-39.61-56.13-79.07-10.14-52.81 28.66s93.22 126.61 93.22 126.61-.8-99.14-40.41-155.27z" fill="#2a94f4"/>
                                            <path data-name="Path 49" d="M799.88 940.429s-31.45-92.74-73.49-149.61" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                        <g data-name="Group 65">
                                            <path data-name="Path 50" d="M863.5 797.209c53.95-32 63.25 11.84 39.79 39.54s-108.99 96.01-108.99 96.01 15.25-103.55 69.2-135.55z" fill="#2a94f4"/>
                                            <path data-name="Path 51" d="M795.01 927.699s22.95-52.48 95.54-114.58" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 67" fill="#ffbe55">
                                        <path data-name="Rectangle 40" d="M768.39 920.049H823v11.04h-54.61z"/>
                                        <path data-name="Path 52" d="M778.12 963.419h35.14l6.83-32.32h-48.8z" fill="var(--bs-danger)"/>
                                    </g>
                                </g>
                                <g data-name="Group 83">
                                    <path data-name="Path 53" d="M926.66 411.629l-9.29 11.88-16.37-5.88c.19-2.08-2.22-8.53-1.38-16.21l1.3-11.66 23.61-10.31.71-.31c-.01.13-.02.26-.02.39-.07 1.03-.11 2.04-.13 3.03a166.923 166.923 0 001.57 29.07z" fill="#fee3ca"/>
                                    <path data-name="Path 54" d="M925.22 379.539c-.07 1.03-.11 2.04-.13 3.03-4.57 5.37-15.31 16.83-25.47 18.86l1.3-11.66 23.61-10.31z" fill="#eacdb5"/>
                                    <path data-name="Path 55" d="M895.89 391.849s30.89 1.41 31.48-17.84 4.96-32.04-14.74-33.75-23.76 5.52-25.51 11.89.75 38.83 8.77 39.7z" fill="#fee3ca"/>
                                    <path data-name="Path 56" d="M927.36 373.999s-2.31-25.69-29.83-24.77-15.61-25.11 8.03-28.94c0 0-2.47 9.17 12.41 10.62 31.23 3.04 12.17 39.02 9.39 43.09z" fill="#0e538c"/>
                                    <path data-name="Path 57" d="M927.18 374.059s3.76-8.6 2.15-11.82-4.36 3.19-4.36 3.19-2.63 6.48-1.55 8.09 3.76.54 3.76.54z" fill="#fee3ca"/>
                                    <g data-name="Group 70">
                                        <path data-name="Path 58" d="M950.42 943.279l21.32-.64-3.82-31.02-19.73 3.02z" fill="#fee3ca"/>
                                        <g data-name="Group 69">
                                            <path data-name="Path 59" d="M979.11 962.839c2.44-8.17-3.29-14.11-5.09-21.32-1.11-4.45-23.45-7.2-25.67 2.55a53.342 53.342 0 00-.42 18.77z" fill="#474747"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 71">
                                        <path data-name="Path 60" d="M831.71 944.069h21.85l2.14-35.38-21.31-1.35z" fill="#fee3ca"/>
                                        <path data-name="Path 61" d="M853.56 941.529H833.2s-2.23 0-8.91 7-22.62.32-29.94 14.32h60.81c-.01-.01 6.03-11.14-1.6-21.32z" fill="#474747"/>
                                    </g>
                                    <g data-name="Group 72">
                                        <path data-name="Path 62" d="M947.46 575.609l26.19 354.46h-26.19l-45.53-257.94-44.09 257.94h-25.88l23.99-354.46z" fill="#0e538c"/>
                                    </g>
                                    <g data-name="Group 74">
                                        <path data-name="Path 63" d="M791.63 442.989s-5.19-8.36-4.44-13.07.75-10.38-1.82-13.59-1.89-7-4.6-5.96c-.86.33-.45 6.02.79 8.71 0 0-7.68-15.62-8.79-17.39a1.453 1.453 0 00-2.77.82s-.84-1.65-2.24-.94c-1.2.61-.6 2.52-.55 3.35a1.8 1.8 0 00-1.6 2.18 19.3 19.3 0 00.57 2.92s-.85.17-1.05 1.71a10.846 10.846 0 00.85 4.85c1.71 3.88.48 4.7 2.28 8.6s6.29 4.34 8.32 11.85 2.83 9.63 2.83 9.63z" fill="#fee3ca"/>
                                        <g data-name="Group 73">
                                            <path data-name="Path 64" d="M856.73 424.929c-5.08.77-23.05 38.36-32.92 56.18l-9.86 17.82-23.86-61.09a13.578 13.578 0 00-12.73 5.73s12.73 82.41 15.91 91.64 13.05 15.91 30.55-6.05 47.73-64.59 50.27-69.36 12.02-39.32-17.36-34.87z" fill="var(--bs-danger)"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 76">
                                        <g data-name="Group 75">
                                            <path data-name="Path 65" d="M953.32 500.829c-8.27 44.24-5.85 74.78-5.85 74.78h-91.52s-3.8-142.81-1.7-147.65c3.82-8.77 42.19-20.92 42.19-20.92l8.53 12.94 23.95-12.85s26.62 7.79 32.66 9.38c1.79.48 2.51 4.17 2.42 10.28-.15 14.55-4.86 42.89-10.68 74.04z" fill="#ffbe55"/>
                                        </g>
                                        <path data-name="Path 66" d="M953.32 500.829c-8.27 44.24-5.85 74.78-5.85 74.78h-10.62s2.88-108.97 18.7-143.96c2.38-5.28 5.28-6.54 8.46-4.86-.16 14.55-4.87 42.89-10.69 74.04z" fill="#ffbe55"/>
                                    </g>
                                    <path data-name="Rectangle 41" fill="#073951" d="M855.83 575.609h91.63v8.03h-91.63z"/>
                                    <g data-name="Group 80">
                                        <g data-name="Group 77">
                                            <path data-name="Path 67" d="M873.48 538.259H762.91l-26.49-72.79a4.739 4.739 0 014.45-6.36h100.49a4.74 4.74 0 014.45 3.12z" fill="#2a94f4"/>
                                        </g>
                                        <g data-name="Group 78">
                                            <path data-name="Path 68" d="M939.2 545.139H829.32a3.44 3.44 0 01-3.44-3.44 3.44 3.44 0 013.44-3.44h109.89a3.44 3.44 0 013.44 3.44 3.455 3.455 0 01-3.45 3.44z" fill="#474747"/>
                                        </g>
                                        <g data-name="Group 79">
                                            <path data-name="Path 69" d="M873.14 545.139H763.25a3.44 3.44 0 01-3.44-3.44 3.44 3.44 0 013.44-3.44h109.89a3.44 3.44 0 013.44 3.44 3.44 3.44 0 01-3.44 3.44z" fill="#0e538c"/>
                                        </g>
                                    </g>
                                    <path data-name="Path 70" d="M899.44 403.939s.03 9.81 5.54 14.44a44.526 44.526 0 00-9.11 10.1 54.3 54.3 0 01.59-21.44z" fill="#ffbe55"/>
                                    <path data-name="Path 71" d="M925.57 403.579s-7.71 12.36-20.59 14.8a108.428 108.428 0 016.7 13.28c6.41-4.36 15.45-15.45 17.24-24.53z" fill="#ffbe55"/>
                                    <path data-name="Path 72" d="M948.9 450.359l5.23 61.21-10.46 7.31c0-.01 5.79-51.19 5.23-68.52z" fill="#db9e46"/>
                                    <g data-name="Group 82">
                                        <path data-name="Path 73" d="M876.68 533.599s-9.5-.46-13.11-2.45-12.7-2.37-14.57-2.37-.12 3.11 2.12 3.49a14.853 14.853 0 014.98 2.37s-14.07 1.25-17.56 1-7.6.75-6.35 2.49a4.855 4.855 0 003.36 1.87s1 2.62 2.99 2.99a4.578 4.578 0 003.61 2.24 14.076 14.076 0 003.74 1.25s10.21 1.99 16.06 1 15.92-1.59 15.92-1.59z" fill="#fee3ca"/>
                                        <g data-name="Group 81">
                                            <path data-name="Path 74" d="M961.23 416.419s15.32 2.32 21.68 27.14-6.35 77.29-11.01 94.7c-2.73 10.19-95.44 10.19-95.44 10.19a142.45 142.45 0 01-1.74-17.85s63.29-10.31 76.66-18.49c0 0-2.85-42.36-3.48-58.68-.63-16.55-2.47-35.3 13.33-37.01z" fill="var(--bs-danger)"/>
                                        </g>
                                    </g>
                                </g>
                                <g data-name="Group 100">
                                    <g data-name="Group 85">
                                        <path data-name="Path 75" d="M314.18 447.859l6.27-7.16s4.09-7.5 5.86-10.22 7.36-7.77 8.45-9 1.98 1.09.82 3.27-2.92 6.91-2.92 6.91 12.05-8.2 15.59-10.25 5.11-.48 4.84.41c0 0 2.18 1.77.41 3.48 0 0 1.91 1.98-.75 4.09 0 0 1.98 1.98-1.84 4.43s-6 9.95-11.86 12.27a45.143 45.143 0 00-15.75 11.03z" fill="#fee3ca"/>
                                        <g data-name="Group 84">
                                            <path data-name="Path 76" d="M214.15 451.059s9.4 9.23 26.95 26.8c15.83 15.85 33.21 25.98 42.04 20.44s48.02-46.7 48.02-46.7l-11.93-11.75-40.97 35.16s-26.92-25.75-32.54-30.04-24.56-12.34-30.52-5.64-1.05 11.73-1.05 11.73z" fill="var(--bs-danger)"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 87">
                                        <path data-name="Path 77" d="M216.32 937.119h16.03l2.1-23.66-19.58-1.95z" fill="#fee3ca"/>
                                        <g data-name="Group 86">
                                            <path data-name="Path 78" d="M216.32 937.119s-4.03 5.11-2.4 16.41c.77 5.36 12.44 5.01 32.14 5.01h15.29s5.71-6.17-3.37-8.98c-22.16-6.86-25.62-12.44-25.62-12.44z" fill="#474747"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 89">
                                        <path data-name="Path 79" d="M165.4 941.159l-18.94-.56 3.39-27.56 17.53 2.68z" fill="#fee3ca"/>
                                        <g data-name="Group 88">
                                            <path data-name="Path 80" d="M139.91 958.549c-2.17-7.26 2.92-12.53 4.52-18.94.99-3.96 20.84-6.39 22.8 2.26a47.6 47.6 0 01.38 16.68z" fill="#474747"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 90">
                                        <path data-name="Path 81" d="M226.03 365.839s10.25 3.09 9.43 17.56-4.4 21.57-.15 36.72 6.67 35.05-19.35 33.35-33.8-3.86-42.57 1.24-33.3-17.26-21.39-32.49 16.88-24.21 14.63-37.52 7.98-26.21 24.24-30.17c13.65-3.33 41.07-4.7 35.16 11.31z" fill="#084970"/>
                                    </g>
                                    <g data-name="Group 92">
                                        <g data-name="Group 91">
                                            <path data-name="Path 82" d="M157.64 502.879c3.38 17.32 3.01 30.09 3.02 60.39h75.27s-2.08-24.42 1.31-39.42a22.01 22.01 0 012.45-6.75c5.36-8.57 10.17-16.57 10.22-25.4a25.453 25.453 0 00-.88-6.62c-3.1-11.55-7.76-37.14-13.56-44.24-5.79-7.12-34.61-6.21-34.61-6.21s-37.69.11-48.98 6.43c-3.01 1.68-4.16 5.47-4.4 10.01-.78 14.11 7.47 37.99 10.16 51.81z" fill="#0e538c"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 94">
                                        <g data-name="Group 93" fill="#fee3ca">
                                            <path data-name="Path 83" d="M219.7 435.439a37.165 37.165 0 01-1.97 11.21 12.07 12.07 0 01-17.87 6.36c-6.58-4.17-14.69-10.36-18.84-17.53 0-.01 19.93-2.2 38.68-.04z"/>
                                            <path data-name="Path 84" d="M215.38 435.019s-5.23-.53-5.23-6.67-.61-17.81-.61-17.81l-19.68 1.67s1.67 19.28-1.5 22.81l-3.17 3.54s27.02 4.59 30.19-3.54z"/>
                                        </g>
                                        <path data-name="Path 85" d="M210.14 425.879s-12.94 2-19.85-3.5l-.44-10.17 20.28 4.39v9.28z" fill="#eacdb5"/>
                                    </g>
                                    <g data-name="Group 96">
                                        <path data-name="Path 86" d="M226.06 374.089s10.86 49.44-13.98 51.49-26.43-23.74-26.43-23.74-6.04-2.32-6.28-7.85c-.23-5.36 6.76-2.4 6.76-2.4s-3.81-20.24 11.63-24.8c16.23-4.8 26.22.19 28.3 7.3z" fill="#fee3ca"/>
                                        <g data-name="Group 95">
                                            <path data-name="Path 87" d="M224.53 368.019s-9.07 25.71-38.4 23.56c0 0-4.98-19.74 1.16-26.99s30.17-9.07 37.24 3.43z" fill="#084970"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 97">
                                        <path data-name="Path 88" d="M160.66 563.269s-26.53 51.76-18.11 363.83l29.09 2.9s18.21-212.75 24-276.25c.67 4.41 17.25 276.25 17.25 276.25h23.53s30.49-330.37-.5-366.73z" fill="#2a94f4"/>
                                    </g>
                                    <path data-name="Path 89" d="M181.02 435.469s10.78 85.62 8.84 127.8-43.51 87.09-43.51 87.09 4.15-49.78 9.2-82.18 1.25-69.92-3.11-83.79-9.41-40.37-.56-43.34 29.14-5.58 29.14-5.58z" fill="#ffbe55"/>
                                    <g data-name="Group 99">
                                        <path data-name="Path 90" d="M170.56 568.179l8.89 3.4s8.45 1.24 11.62 1.95 9.84 4.21 11.37 4.81-.34 2.23-2.78 1.9-7.49-.34-7.49-.34 11.87 8.45 15.02 11.07 2.22 4.63 1.29 4.68c0 0-.91 2.66-3.12 1.59 0 0-1.19 2.48-4.1.72 0 0-1.17 2.54-4.79-.19s-11.41-2.17-15.62-6.87a45.233 45.233 0 00-15.8-10.95z" fill="#fee3ca"/>
                                        <g data-name="Group 98">
                                            <path data-name="Path 91" d="M154.43 440.739s-15.96 8.21-26.57 30.67c-10.76 22.79-20.53 45.72-20.47 55.82.07 10.42 61.4 56.38 61.4 56.38l8.92-14.74-42-42.02a5.923 5.923 0 01-1.13-6.8c4.92-10.02 18.09-36.73 21.53-42.35 4.72-7.71 13.67-23.21 7.74-29.94s-9.42-7.02-9.42-7.02z" fill="var(--bs-danger)"/>
                                        </g>
                                    </g>
                                    <path data-name="Path 92" d="M219.7 435.439s16.95 27.81 12.25 56.61-6.14 29.98-5.71 61.13 13.43 81.65 23.39 100.48c0 0 3.16-36.67-4.32-70.04s-9.06-41.39-7.33-53.95 8.39-19.58 11.18-31.88-.76-19.9-3.74-30.65-7.8-26.61-7.8-26.61-9.69-4.36-17.92-5.09z" fill="#ffbe55"/>
                                </g>
                                <g data-name="Group 102">
                                    <g data-name="Group 101">
                                        <path data-name="Path 93" d="M40.71 968.419h932.84c12.59 0 25.21.24 37.81 0 .55-.01 1.1 0 1.65 0 6.43 0 6.45-10 0-10H80.17c-12.59 0-25.21-.24-37.81 0-.55.01-1.1 0-1.65 0-6.43 0-6.44 10 0 10z" fill="#d3d3d3"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script src="assets/js/popper.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
`),e.addBootstrap(),e.subtitles=`1
00:00:00,580 --> 00:00:08,070
Pinegrow 7 brings a very useful improvement to
controls that represent Bootstrap utility classes.

2
00:00:08,700 --> 00:00:14,130
Select the H1 element on the page and open the properties panel.

3
00:00:15,240 --> 00:00:21,660
Here we have a bunch of controls for Bootstrap
utilities such as tech size, color, and so on.

4
00:00:22,680 --> 00:00:31,014
As we hover over color values the colors are previewed on the selected element.

5
00:00:32,795 --> 00:00:36,315
Click on the value to set it to the element.

6
00:00:36,825 --> 00:00:40,155
This also works for the select fields.

7
00:00:40,905 --> 00:00:51,045
Open the font weight control, and then hover over
its values and they get previewed on the page.

8
00:00:52,095 --> 00:00:55,364
The same works for checkbox control.

9
00:00:58,200 --> 00:01:02,910
The preview only works for controls that represent utility classes.

10
00:01:03,660 --> 00:01:14,340
For example, preview does not work on heading level control
because this control changes the tag, not the class of the element.

11
00:01:17,039 --> 00:01:19,680
Preview works with floating tools as well.

12
00:01:20,220 --> 00:01:23,670
Press shift shift to bring up the floating tools.

13
00:01:24,285 --> 00:01:29,935
Or use the Window -> Show and Hide panels -> floating tools menu.

14
00:01:32,815 --> 00:01:49,575
Make sure that the mode is set to set, not to the paint mode,
and now hovering our values, previews their effect on the page.

`,this.addLesson(e)}lesson_ClassPreviewTailwind(){var e=this.newLesson("class_preview_tw");e.name="Preview Tailwind CSS property controls",e.short_description="See the effect of property values while hovering over them.",e.tags=["tailwind css"],e.description=e.makeDesc("775386650",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("h1")}</b> element.</li>
<li>Open the <b>Properties panel</b>.</li>
<li>Open the color picker for <b>${this.showTWField("Text color","text-color")}</b> and hover the mouse over color values.</li>
<li>Click on a value in the color picker to set the value.</li>
<li>Open the <b>${this.showTWField("Font size","font-size")}</b> control and hover over the list values.</li>
<li>Hover the mouse pointer over the <b>${this.showTWField("Text align","text-align")}</b> values.</li>
<li>Press ${pgShowKbd("SHIFT")} ${pgShowKbd("SHIFT")} to display <b>Floating tools</b>.</li>
<li>Make sure floating tools are in the Set mode and try hovering over tool values.</li>
</ol>
`),this.tailwindIndexHTML=`<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
        <title>New page</title>         
        <script src="https://cdn.tailwindcss.com/"></script>         
    </head>     
    <body> 
        <section class="bg-gray-100 relative text-gray-500"> 
            <div class="container mx-auto pt-24 px-4"> 
                <div class="flex flex-wrap -mx-4"> 
                    <div class="mx-auto px-4 text-center w-full lg:w-2/3"> 
                        <p class="font-medium mb-2 text-blue-600 uppercase">The Latest</p> 
                        <h1 class="font-extrabold mb-4 text-6xl text-gray-800">The Natural Experience</h1> 
                        <p class="font-light leading-tight mb-6 text-3xl">Our ability to feel, act and communicate is indistinguishable from magic.</p> <a href="#" class="bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white uppercase">Get It Now</a> 
                        <div class="-mb-32 bg-white mt-10 p-16 rounded-lg"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1026.792 968.525" class="w-full">
                                <path data-name="Path 1" d="M983.42 377.219s131.86 243.87-64.25 384.63-302.92-55.05-460.02 111.77c-115.88 123.05-507.49-87.82-343.37-297.42s299.69-230.47 302.78-453.4 382.48-144.76 564.86 254.42z" fill="#cce9ff" opacity=".51"/>
                                <g data-name="Group 56">
                                    <path data-name="Path 2" d="M169.8 110.879h714.13a27.984 27.984 0 0127.98 27.98v505.97a27.984 27.984 0 01-27.98 27.98H169.8a27.984 27.984 0 01-27.98-27.98v-505.97a27.984 27.984 0 0127.98-27.98z" fill="#f7f7f7"/>
                                    <path data-name="Path 3" d="M911.92 137.149c0-14.51-10.18-26.27-22.75-26.27h-724.6c-12.56 0-22.75 11.76-22.75 26.27v499.88h770.09v-499.88z" fill="#084970"/>
                                    <path data-name="Rectangle 1" fill="#d3d3d3" d="M172.28 152.449h712.2v443.89h-712.2z"/>
                                    <g data-name="Group 3">
                                        <path data-name="Path 4" d="M541.76 451.829H59.87a17.167 17.167 0 01-17.17-17.17v-246.67a17.167 17.167 0 0117.17-17.17h481.89a17.167 17.167 0 0117.17 17.17v246.66a17.163 17.163 0 01-17.17 17.18z" fill="#cce9ff"/>
                                        <g data-name="Group 1">
                                            <path data-name="Path 5" d="M266.64 360.829v-24.55a1.04 1.04 0 00-2.08 0v24.55a3.684 3.684 0 00-3.37 3.65v18.28a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.02a3.684 3.684 0 003.37-3.65v-18.28a3.675 3.675 0 00-3.37-3.64z" fill="#2a94f4"/>
                                            <path data-name="Path 6" d="M285.47 325.089v-24.55a1.04 1.04 0 00-2.08 0v24.55a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.692 3.692 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 7" d="M304.3 299.049v-11.01a1.035 1.035 0 00-1.04-1.02 1.022 1.022 0 00-1.04 1.02v11.01a3.684 3.684 0 00-3.37 3.65v86.01a3.692 3.692 0 003.37 3.65v24.56a1.035 1.035 0 001.04 1.02 1.022 1.022 0 001.04-1.02v-24.56a3.684 3.684 0 003.37-3.65v-86.01a3.685 3.685 0 00-3.37-3.65z" fill="#ffbe55"/>
                                            <path data-name="Path 8" d="M323.13 324.109v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.685 3.685 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 9" d="M341.96 345.309v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v31.82a3.692 3.692 0 003.37 3.65v38.1a1.04 1.04 0 002.08 0v-38.1a3.684 3.684 0 003.37-3.65v-31.82a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 10" d="M360.78 356.659v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v18.28a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-18.28a3.677 3.677 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 11" d="M379.61 358.619v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v4.73a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-4.73a3.677 3.677 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 12" d="M398.44 313.259v-24.55a1.04 1.04 0 00-2.08 0v24.55a3.684 3.684 0 00-3.37 3.65v31.82a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-31.82a3.684 3.684 0 00-3.37-3.65z" fill="#ffbe55"/>
                                            <path data-name="Path 13" d="M417.27 291.229v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 14" d="M436.1 255.489v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v86.01a3.684 3.684 0 003.37 3.65v11.01a1.035 1.035 0 001.04 1.02 1.022 1.022 0 001.04-1.02v-11.01a3.684 3.684 0 003.37-3.65v-86.01a3.685 3.685 0 00-3.37-3.65z" fill="#ffbe55"/>
                                            <path data-name="Path 15" d="M454.93 277.279v-24.56a1.04 1.04 0 00-2.08 0v24.56a3.684 3.684 0 00-3.37 3.65v31.82a3.692 3.692 0 003.37 3.65v24.55a1.04 1.04 0 002.08 0v-24.55a3.684 3.684 0 003.37-3.65v-31.82a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 16" d="M473.76 247.429v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v4.73a3.692 3.692 0 003.37 3.65v11.01a1.035 1.035 0 001.04 1.02 1.022 1.022 0 001.04-1.02v-11.01a3.684 3.684 0 003.37-3.65v-4.73a3.685 3.685 0 00-3.37-3.65z" fill="#2a94f4"/>
                                            <path data-name="Path 17" d="M492.59 232.899v-11a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v45.37a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-45.37a3.687 3.687 0 00-3.37-3.66z" fill="#2a94f4"/>
                                            <path data-name="Path 18" d="M511.42 208.749v-11.01a1.04 1.04 0 00-2.08 0v11.01a3.684 3.684 0 00-3.37 3.65v72.46a3.692 3.692 0 003.37 3.65v11.01a1.04 1.04 0 002.08 0v-11.01a3.684 3.684 0 003.37-3.65v-72.46a3.684 3.684 0 00-3.37-3.65z" fill="#ffbe55"/>
                                            <path data-name="Path 19" d="M530.25 241.039v-51.65a1.04 1.04 0 00-2.08 0v51.65a3.684 3.684 0 00-3.37 3.65v113.1a3.692 3.692 0 003.37 3.65v24.56a1.04 1.04 0 002.08 0v-24.56a3.684 3.684 0 003.37-3.65v-113.1a3.684 3.684 0 00-3.37-3.65z" fill="#2a94f4"/>
                                        </g>
                                        <path data-name="Rectangle 2" fill="#2a94f4" d="M69.96 201.399h172.23v11.31H69.96z"/>
                                        <path data-name="Rectangle 3" fill="#ffbe55" d="M69.96 222.099h110.67v11.31H69.96z"/>
                                        <path data-name="Rectangle 4" fill="#ffbe55" d="M69.96 262.989h138.49v11.31H69.96z"/>
                                        <path data-name="Rectangle 5" fill="#2a94f4" d="M69.96 242.969H220.4v11.31H69.96z"/>
                                        <g data-name="Group 2">
                                            <path data-name="Path 20" d="M133.2 296.029a67.778 67.778 0 1056.94 120.12l-40.47-54.38z" fill="#2a94f4"/>
                                            <path data-name="Path 21" d="M213.57 339.189a67.774 67.774 0 00-80.37-43.16l16.47 65.75z" fill="#ffbe55"/>
                                            <path data-name="Path 22" d="M213.57 339.189l-63.91 22.59 40.47 54.38a67.79 67.79 0 0023.44-76.97z" fill="#2a94f4"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 55">
                                        <path data-name="Path 23" d="M974.34 528.969H608.93a14.788 14.788 0 01-14.79-14.79v-242.64a14.788 14.788 0 0114.79-14.79h365.41a14.788 14.788 0 0114.79 14.79v242.64a14.8 14.8 0 01-14.79 14.79z" fill="#cce9ff"/>
                                        <g data-name="Group 11">
                                            <g data-name="Group 4">
                                                <path data-name="Path 24" d="M618.67 489.799a.491.491 0 01.49-.49.508.508 0 01.51.49.519.519 0 01-.51.51.515.515 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.512.512 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.508.508 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.508.508 0 01.51.49.5.5 0 01-.51.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.508.508 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 5">
                                                <path data-name="Path 25" d="M673.87 490.109a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.5.5 0 01-.49.51.506.506 0 01-.51-.51zm0-2.64a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.64a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.64a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.489.489 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.508.508 0 01-.49.51.506.506 0 01-.51-.51zm0-2.63a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.51-.51zm0-2.64a.5.5 0 01.51-.51.5.5 0 01.49.51.491.491 0 01-.49.49.483.483 0 01-.51-.49zm0-2.64a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49zm0-2.65a.5.5 0 01.51-.49.491.491 0 01.49.49.491.491 0 01-.49.49.5.5 0 01-.51-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 6">
                                                <path data-name="Path 26" d="M731.47 489.689a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.508.508 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.506.506 0 01.51.51.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.5.5 0 01.51.49.512.512 0 01-.51.51.515.515 0 01-.49-.51zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.508.508 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.506.506 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.512.512 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.508.508 0 01.49-.51.506.506 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.512.512 0 01-.51.51.508.508 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 7">
                                                <path data-name="Path 27" d="M791.03 491.299a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.51.5.5 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.51.51.5.5 0 01-.51.49.5.5 0 01-.49-.49zm0-2.65a.478.478 0 01.49-.49.489.489 0 01.51.49.5.5 0 01-.51.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.5.5 0 01.51.49.5.5 0 01-.51.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 8">
                                                <path data-name="Path 28" d="M849.03 490.889a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51zm0-2.64a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.508.508 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 9">
                                                <path data-name="Path 29" d="M907.02 490.109a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.508.508 0 01-.49-.51zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.64a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.491.491 0 01-.49-.49zm0-2.65a.491.491 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.515.515 0 01-.49-.51z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 10">
                                                <path data-name="Path 30" d="M965.44 490.779a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.485.485 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.489.489 0 01-.49-.51zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.5.5 0 01-.49.51.489.489 0 01-.49-.51zm0-2.63a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.64a.5.5 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.508.508 0 01-.49-.51zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.473.473 0 01-.49-.49zm0-2.64a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.64a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.478.478 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.508.508 0 01-.49.51.5.5 0 01-.49-.51zm0-2.63a.489.489 0 01.49-.51.5.5 0 01.49.51.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49zm0-2.65a.484.484 0 01.49-.49.491.491 0 01.49.49.491.491 0 01-.49.49.484.484 0 01-.49-.49z" fill="#ffbe55"/>
                                            </g>
                                        </g>
                                        <g data-name="Group 20">
                                            <g data-name="Group 12">
                                                <path data-name="Path 31" d="M617.61 475.639v-3.11c13.71 0 20.53-9.17 27.74-18.88 7.36-9.9 14.96-20.13 30.24-20.13 13.81 0 20.62-7.4 27.84-15.23 7.35-7.98 14.95-16.24 30.13-16.24 15.42 0 23.01 13.76 30.36 27.07 7.23 13.09 14.05 25.46 27.63 25.46 13.45 0 20.62-17.75 27.55-34.92 7.32-18.12 14.89-36.86 30.44-36.86 15.43 0 23.03 14.3 30.37 28.13 7.23 13.62 14.06 26.48 27.62 26.48 13.44 0 20.62-17.95 27.55-35.3 7.32-18.32 14.89-37.26 30.44-37.26v3.11c-13.44 0-20.62 17.95-27.55 35.3-7.32 18.32-14.89 37.26-30.44 37.26-15.44 0-23.03-14.3-30.37-28.13-7.23-13.62-14.06-26.48-27.62-26.48-13.45 0-20.62 17.75-27.55 34.92-7.32 18.12-14.89 36.86-30.44 36.86-15.42 0-23.01-13.76-30.35-27.07-7.23-13.09-14.05-25.46-27.63-25.46-13.81 0-20.62 7.4-27.84 15.23-7.35 7.98-14.95 16.24-30.13 16.24-13.71 0-20.53 9.17-27.74 18.88-7.37 9.89-14.98 20.13-30.25 20.13z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 13">
                                                <path data-name="Path 32" d="M622.37 474.009a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 14">
                                                <path data-name="Path 33" d="M677.57 434.979a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 15">
                                                <path data-name="Path 34" d="M735.17 403.859a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 16">
                                                <path data-name="Path 35" d="M794.73 456.129a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 17">
                                                <path data-name="Path 36" d="M852.72 384.359a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 18">
                                                <path data-name="Path 37" d="M910.71 438.969a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                            <g data-name="Group 19">
                                                <path data-name="Path 38" d="M968.71 366.409a3.2 3.2 0 10-3.2 3.21 3.205 3.205 0 003.2-3.21z" fill="#ffbe55"/>
                                            </g>
                                        </g>
                                        <g data-name="Group 54">
                                            <g data-name="Group 21">
                                                <path data-name="Rectangle 6" fill="#ffbe55" d="M621.63 306.459h8.63v23.44h-8.63z"/>
                                            </g>
                                            <g data-name="Group 22">
                                                <path data-name="Rectangle 7" fill="#2a94f4" d="M634.87 296.149h8.63v33.75h-8.63z"/>
                                            </g>
                                            <g data-name="Group 23">
                                                <path data-name="Rectangle 8" fill="#2a94f4" d="M621.56 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 24">
                                                <path data-name="Rectangle 9" fill="#ffbe55" d="M653.5 292.749h8.63v37.15h-8.63z"/>
                                            </g>
                                            <g data-name="Group 25">
                                                <path data-name="Rectangle 10" fill="#2a94f4" d="M666.74 281.499h8.63v48.4h-8.63z"/>
                                            </g>
                                            <g data-name="Group 26">
                                                <path data-name="Rectangle 11" fill="#2a94f4" d="M653.44 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 27">
                                                <path data-name="Rectangle 12" fill="#ffbe55" d="M685.38 292.749h8.63v37.15h-8.63z"/>
                                            </g>
                                            <g data-name="Group 28">
                                                <path data-name="Rectangle 13" fill="#2a94f4" d="M698.62 303.529h8.63v26.37h-8.63z"/>
                                            </g>
                                            <g data-name="Group 29">
                                                <path data-name="Rectangle 14" fill="#2a94f4" d="M685.31 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 30">
                                                <path data-name="Rectangle 15" fill="#ffbe55" d="M717.25 311.319h8.63v18.58h-8.63z"/>
                                            </g>
                                            <g data-name="Group 31">
                                                <path data-name="Rectangle 16" fill="#2a94f4" d="M730.49 304.469h8.63v25.43h-8.63z"/>
                                            </g>
                                            <g data-name="Group 32">
                                                <path data-name="Rectangle 17" fill="#2a94f4" d="M717.18 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 33">
                                                <path data-name="Rectangle 18" fill="#ffbe55" d="M749.12 296.149h8.63v33.75h-8.63z"/>
                                            </g>
                                            <g data-name="Group 34">
                                                <path data-name="Rectangle 19" fill="#2a94f4" d="M762.36 284.029h8.63v45.87h-8.63z"/>
                                            </g>
                                            <g data-name="Group 35">
                                                <path data-name="Rectangle 20" fill="#2a94f4" d="M749.06 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 36">
                                                <path data-name="Rectangle 21" fill="#ffbe55" d="M781 297.899h8.63v31.99H781z"/>
                                            </g>
                                            <g data-name="Group 37">
                                                <path data-name="Rectangle 22" fill="#2a94f4" d="M794.24 313.019h8.63v16.88h-8.63z"/>
                                            </g>
                                            <g data-name="Group 38">
                                                <path data-name="Rectangle 23" fill="#2a94f4" d="M780.93 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 39">
                                                <path data-name="Rectangle 24" fill="#ffbe55" d="M812.87 294.149h8.63v35.74h-8.63z"/>
                                            </g>
                                            <g data-name="Group 40">
                                                <path data-name="Rectangle 25" fill="#2a94f4" d="M826.11 301.649h8.63v28.24h-8.63z"/>
                                            </g>
                                            <g data-name="Group 41">
                                                <path data-name="Rectangle 26" fill="#2a94f4" d="M812.8 333.039h22.02v2.88H812.8z"/>
                                            </g>
                                            <g data-name="Group 42">
                                                <path data-name="Rectangle 27" fill="#ffbe55" d="M844.74 301.649h8.63v28.24h-8.63z"/>
                                            </g>
                                            <g data-name="Group 43">
                                                <path data-name="Rectangle 28" fill="#2a94f4" d="M857.98 311.319h8.63v18.58h-8.63z"/>
                                            </g>
                                            <g data-name="Group 44">
                                                <path data-name="Rectangle 29" fill="#2a94f4" d="M844.67 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 45">
                                                <path data-name="Rectangle 30" fill="#ffbe55" d="M876.61 296.149h8.63v33.75h-8.63z"/>
                                            </g>
                                            <g data-name="Group 46">
                                                <path data-name="Rectangle 31" fill="#2a94f4" d="M889.85 284.759h8.63v45.13h-8.63z"/>
                                            </g>
                                            <g data-name="Group 47">
                                                <path data-name="Rectangle 32" fill="#2a94f4" d="M876.55 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 48">
                                                <path data-name="Rectangle 33" fill="#ffbe55" d="M908.49 297.899h8.63v31.99h-8.63z"/>
                                            </g>
                                            <g data-name="Group 49">
                                                <path data-name="Rectangle 34" fill="#2a94f4" d="M921.73 290.099h8.63v39.8h-8.63z"/>
                                            </g>
                                            <g data-name="Group 50">
                                                <path data-name="Rectangle 35" fill="#2a94f4" d="M908.42 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                            <g data-name="Group 51">
                                                <path data-name="Rectangle 36" fill="#ffbe55" d="M940.36 278.889h8.63v51.01h-8.63z"/>
                                            </g>
                                            <g data-name="Group 52">
                                                <path data-name="Rectangle 37" fill="#2a94f4" d="M953.6 286.899h8.63v43h-8.63z"/>
                                            </g>
                                            <g data-name="Group 53">
                                                <path data-name="Rectangle 38" fill="#2a94f4" d="M940.29 333.039h22.02v2.88h-22.02z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g data-name="Group 62">
                                    <g data-name="Group 60">
                                        <g data-name="Group 57">
                                            <path data-name="Path 39" d="M112.43 938.429c-14-8.55 40.3-153.63 65.42-215.6 24.58-60.62-62.47-83.37-82.93-9.33-10.49 37.95-11.03 178.22 17.51 224.93z" fill="#084970"/>
                                            <path data-name="Path 40" d="M112.43 938.429s-28.76-141.91 29.62-243.8" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.063"/>
                                        </g>
                                        <g data-name="Group 58">
                                            <path data-name="Path 41" d="M67.86 766.099c-43.85-62.14-87.53-11.22-58.46 31.72s103.19 140.15 103.19 140.15-.88-109.73-44.73-171.87z" fill="#0e538c"/>
                                            <path data-name="Path 42" d="M112.6 937.969s-34.81-102.65-81.35-165.61" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                        <g data-name="Group 59">
                                            <path data-name="Path 43" d="M183.02 779.439c59.72-35.42 70.01 13.11 44.04 43.77s-120.65 106.28-120.65 106.28 16.89-114.63 76.61-150.05z" fill="#0e538c"/>
                                            <path data-name="Path 44" d="M107.2 923.879s25.41-58.09 105.75-126.84" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 61" fill="#ffbe55">
                                        <path data-name="Rectangle 39" d="M77.73 915.409h60.45v12.23H77.73z"/>
                                        <path data-name="Path 45" d="M88.51 963.419h38.9l7.56-35.78H80.95z"/>
                                    </g>
                                </g>
                                <g data-name="Group 68">
                                    <g data-name="Group 66">
                                        <g data-name="Group 63">
                                            <path data-name="Path 46" d="M799.73 940.849c-12.65-7.73 36.4-138.79 59.1-194.77 22.2-54.77-56.43-75.32-74.92-8.43-9.47 34.28-9.96 161 15.82 203.2z" fill="#2890dd"/>
                                            <path data-name="Path 47" d="M799.73 940.849s-25.98-128.2 26.76-220.24" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.063"/>
                                        </g>
                                        <g data-name="Group 64">
                                            <path data-name="Path 48" d="M759.47 785.169c-39.61-56.13-79.07-10.14-52.81 28.66s93.22 126.61 93.22 126.61-.8-99.14-40.41-155.27z" fill="#2a94f4"/>
                                            <path data-name="Path 49" d="M799.88 940.429s-31.45-92.74-73.49-149.61" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                        <g data-name="Group 65">
                                            <path data-name="Path 50" d="M863.5 797.209c53.95-32 63.25 11.84 39.79 39.54s-108.99 96.01-108.99 96.01 15.25-103.55 69.2-135.55z" fill="#2a94f4"/>
                                            <path data-name="Path 51" d="M795.01 927.699s22.95-52.48 95.54-114.58" fill="none" stroke="#fff" stroke-miterlimit="10"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 67" fill="#ffbe55">
                                        <path data-name="Rectangle 40" d="M768.39 920.049H823v11.04h-54.61z"/>
                                        <path data-name="Path 52" d="M778.12 963.419h35.14l6.83-32.32h-48.8z"/>
                                    </g>
                                </g>
                                <g data-name="Group 83">
                                    <path data-name="Path 53" d="M926.66 411.629l-9.29 11.88-16.37-5.88c.19-2.08-2.22-8.53-1.38-16.21l1.3-11.66 23.61-10.31.71-.31c-.01.13-.02.26-.02.39-.07 1.03-.11 2.04-.13 3.03a166.923 166.923 0 001.57 29.07z" fill="#fee3ca"/>
                                    <path data-name="Path 54" d="M925.22 379.539c-.07 1.03-.11 2.04-.13 3.03-4.57 5.37-15.31 16.83-25.47 18.86l1.3-11.66 23.61-10.31z" fill="#eacdb5"/>
                                    <path data-name="Path 55" d="M895.89 391.849s30.89 1.41 31.48-17.84 4.96-32.04-14.74-33.75-23.76 5.52-25.51 11.89.75 38.83 8.77 39.7z" fill="#fee3ca"/>
                                    <path data-name="Path 56" d="M927.36 373.999s-2.31-25.69-29.83-24.77-15.61-25.11 8.03-28.94c0 0-2.47 9.17 12.41 10.62 31.23 3.04 12.17 39.02 9.39 43.09z" fill="#0e538c"/>
                                    <path data-name="Path 57" d="M927.18 374.059s3.76-8.6 2.15-11.82-4.36 3.19-4.36 3.19-2.63 6.48-1.55 8.09 3.76.54 3.76.54z" fill="#fee3ca"/>
                                    <g data-name="Group 70">
                                        <path data-name="Path 58" d="M950.42 943.279l21.32-.64-3.82-31.02-19.73 3.02z" fill="#fee3ca"/>
                                        <g data-name="Group 69">
                                            <path data-name="Path 59" d="M979.11 962.839c2.44-8.17-3.29-14.11-5.09-21.32-1.11-4.45-23.45-7.2-25.67 2.55a53.342 53.342 0 00-.42 18.77z" fill="#474747"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 71">
                                        <path data-name="Path 60" d="M831.71 944.069h21.85l2.14-35.38-21.31-1.35z" fill="#fee3ca"/>
                                        <path data-name="Path 61" d="M853.56 941.529H833.2s-2.23 0-8.91 7-22.62.32-29.94 14.32h60.81c-.01-.01 6.03-11.14-1.6-21.32z" fill="#474747"/>
                                    </g>
                                    <g data-name="Group 72">
                                        <path data-name="Path 62" d="M947.46 575.609l26.19 354.46h-26.19l-45.53-257.94-44.09 257.94h-25.88l23.99-354.46z" fill="#0e538c"/>
                                    </g>
                                    <g data-name="Group 74">
                                        <path data-name="Path 63" d="M791.63 442.989s-5.19-8.36-4.44-13.07.75-10.38-1.82-13.59-1.89-7-4.6-5.96c-.86.33-.45 6.02.79 8.71 0 0-7.68-15.62-8.79-17.39a1.453 1.453 0 00-2.77.82s-.84-1.65-2.24-.94c-1.2.61-.6 2.52-.55 3.35a1.8 1.8 0 00-1.6 2.18 19.3 19.3 0 00.57 2.92s-.85.17-1.05 1.71a10.846 10.846 0 00.85 4.85c1.71 3.88.48 4.7 2.28 8.6s6.29 4.34 8.32 11.85 2.83 9.63 2.83 9.63z" fill="#fee3ca"/>
                                        <g data-name="Group 73">
                                            <path data-name="Path 64" d="M856.73 424.929c-5.08.77-23.05 38.36-32.92 56.18l-9.86 17.82-23.86-61.09a13.578 13.578 0 00-12.73 5.73s12.73 82.41 15.91 91.64 13.05 15.91 30.55-6.05 47.73-64.59 50.27-69.36 12.02-39.32-17.36-34.87z" fill="#ffbe55"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 76">
                                        <g data-name="Group 75">
                                            <path data-name="Path 65" d="M953.32 500.829c-8.27 44.24-5.85 74.78-5.85 74.78h-91.52s-3.8-142.81-1.7-147.65c3.82-8.77 42.19-20.92 42.19-20.92l8.53 12.94 23.95-12.85s26.62 7.79 32.66 9.38c1.79.48 2.51 4.17 2.42 10.28-.15 14.55-4.86 42.89-10.68 74.04z" fill="#ffbe55"/>
                                        </g>
                                        <path data-name="Path 66" d="M953.32 500.829c-8.27 44.24-5.85 74.78-5.85 74.78h-10.62s2.88-108.97 18.7-143.96c2.38-5.28 5.28-6.54 8.46-4.86-.16 14.55-4.87 42.89-10.69 74.04z" fill="#ffbe55"/>
                                    </g>
                                    <path data-name="Rectangle 41" fill="#073951" d="M855.83 575.609h91.63v8.03h-91.63z"/>
                                    <g data-name="Group 80">
                                        <g data-name="Group 77">
                                            <path data-name="Path 67" d="M873.48 538.259H762.91l-26.49-72.79a4.739 4.739 0 014.45-6.36h100.49a4.74 4.74 0 014.45 3.12z" fill="#2a94f4"/>
                                        </g>
                                        <g data-name="Group 78">
                                            <path data-name="Path 68" d="M939.2 545.139H829.32a3.44 3.44 0 01-3.44-3.44 3.44 3.44 0 013.44-3.44h109.89a3.44 3.44 0 013.44 3.44 3.455 3.455 0 01-3.45 3.44z" fill="#474747"/>
                                        </g>
                                        <g data-name="Group 79">
                                            <path data-name="Path 69" d="M873.14 545.139H763.25a3.44 3.44 0 01-3.44-3.44 3.44 3.44 0 013.44-3.44h109.89a3.44 3.44 0 013.44 3.44 3.44 3.44 0 01-3.44 3.44z" fill="#0e538c"/>
                                        </g>
                                    </g>
                                    <path data-name="Path 70" d="M899.44 403.939s.03 9.81 5.54 14.44a44.526 44.526 0 00-9.11 10.1 54.3 54.3 0 01.59-21.44z" fill="#ffbe55"/>
                                    <path data-name="Path 71" d="M925.57 403.579s-7.71 12.36-20.59 14.8a108.428 108.428 0 016.7 13.28c6.41-4.36 15.45-15.45 17.24-24.53z" fill="#ffbe55"/>
                                    <path data-name="Path 72" d="M948.9 450.359l5.23 61.21-10.46 7.31c0-.01 5.79-51.19 5.23-68.52z" fill="#db9e46"/>
                                    <g data-name="Group 82">
                                        <path data-name="Path 73" d="M876.68 533.599s-9.5-.46-13.11-2.45-12.7-2.37-14.57-2.37-.12 3.11 2.12 3.49a14.853 14.853 0 014.98 2.37s-14.07 1.25-17.56 1-7.6.75-6.35 2.49a4.855 4.855 0 003.36 1.87s1 2.62 2.99 2.99a4.578 4.578 0 003.61 2.24 14.076 14.076 0 003.74 1.25s10.21 1.99 16.06 1 15.92-1.59 15.92-1.59z" fill="#fee3ca"/>
                                        <g data-name="Group 81">
                                            <path data-name="Path 74" d="M961.23 416.419s15.32 2.32 21.68 27.14-6.35 77.29-11.01 94.7c-2.73 10.19-95.44 10.19-95.44 10.19a142.45 142.45 0 01-1.74-17.85s63.29-10.31 76.66-18.49c0 0-2.85-42.36-3.48-58.68-.63-16.55-2.47-35.3 13.33-37.01z" fill="#ffbe55"/>
                                        </g>
                                    </g>
                                </g>
                                <g data-name="Group 100">
                                    <g data-name="Group 85">
                                        <path data-name="Path 75" d="M314.18 447.859l6.27-7.16s4.09-7.5 5.86-10.22 7.36-7.77 8.45-9 1.98 1.09.82 3.27-2.92 6.91-2.92 6.91 12.05-8.2 15.59-10.25 5.11-.48 4.84.41c0 0 2.18 1.77.41 3.48 0 0 1.91 1.98-.75 4.09 0 0 1.98 1.98-1.84 4.43s-6 9.95-11.86 12.27a45.143 45.143 0 00-15.75 11.03z" fill="#fee3ca"/>
                                        <g data-name="Group 84">
                                            <path data-name="Path 76" d="M214.15 451.059s9.4 9.23 26.95 26.8c15.83 15.85 33.21 25.98 42.04 20.44s48.02-46.7 48.02-46.7l-11.93-11.75-40.97 35.16s-26.92-25.75-32.54-30.04-24.56-12.34-30.52-5.64-1.05 11.73-1.05 11.73z" fill="#ffbe55"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 87">
                                        <path data-name="Path 77" d="M216.32 937.119h16.03l2.1-23.66-19.58-1.95z" fill="#fee3ca"/>
                                        <g data-name="Group 86">
                                            <path data-name="Path 78" d="M216.32 937.119s-4.03 5.11-2.4 16.41c.77 5.36 12.44 5.01 32.14 5.01h15.29s5.71-6.17-3.37-8.98c-22.16-6.86-25.62-12.44-25.62-12.44z" fill="#474747"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 89">
                                        <path data-name="Path 79" d="M165.4 941.159l-18.94-.56 3.39-27.56 17.53 2.68z" fill="#fee3ca"/>
                                        <g data-name="Group 88">
                                            <path data-name="Path 80" d="M139.91 958.549c-2.17-7.26 2.92-12.53 4.52-18.94.99-3.96 20.84-6.39 22.8 2.26a47.6 47.6 0 01.38 16.68z" fill="#474747"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 90">
                                        <path data-name="Path 81" d="M226.03 365.839s10.25 3.09 9.43 17.56-4.4 21.57-.15 36.72 6.67 35.05-19.35 33.35-33.8-3.86-42.57 1.24-33.3-17.26-21.39-32.49 16.88-24.21 14.63-37.52 7.98-26.21 24.24-30.17c13.65-3.33 41.07-4.7 35.16 11.31z" fill="#084970"/>
                                    </g>
                                    <g data-name="Group 92">
                                        <g data-name="Group 91">
                                            <path data-name="Path 82" d="M157.64 502.879c3.38 17.32 3.01 30.09 3.02 60.39h75.27s-2.08-24.42 1.31-39.42a22.01 22.01 0 012.45-6.75c5.36-8.57 10.17-16.57 10.22-25.4a25.453 25.453 0 00-.88-6.62c-3.1-11.55-7.76-37.14-13.56-44.24-5.79-7.12-34.61-6.21-34.61-6.21s-37.69.11-48.98 6.43c-3.01 1.68-4.16 5.47-4.4 10.01-.78 14.11 7.47 37.99 10.16 51.81z" fill="#0e538c"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 94">
                                        <g data-name="Group 93" fill="#fee3ca">
                                            <path data-name="Path 83" d="M219.7 435.439a37.165 37.165 0 01-1.97 11.21 12.07 12.07 0 01-17.87 6.36c-6.58-4.17-14.69-10.36-18.84-17.53 0-.01 19.93-2.2 38.68-.04z"/>
                                            <path data-name="Path 84" d="M215.38 435.019s-5.23-.53-5.23-6.67-.61-17.81-.61-17.81l-19.68 1.67s1.67 19.28-1.5 22.81l-3.17 3.54s27.02 4.59 30.19-3.54z"/>
                                        </g>
                                        <path data-name="Path 85" d="M210.14 425.879s-12.94 2-19.85-3.5l-.44-10.17 20.28 4.39v9.28z" fill="#eacdb5"/>
                                    </g>
                                    <g data-name="Group 96">
                                        <path data-name="Path 86" d="M226.06 374.089s10.86 49.44-13.98 51.49-26.43-23.74-26.43-23.74-6.04-2.32-6.28-7.85c-.23-5.36 6.76-2.4 6.76-2.4s-3.81-20.24 11.63-24.8c16.23-4.8 26.22.19 28.3 7.3z" fill="#fee3ca"/>
                                        <g data-name="Group 95">
                                            <path data-name="Path 87" d="M224.53 368.019s-9.07 25.71-38.4 23.56c0 0-4.98-19.74 1.16-26.99s30.17-9.07 37.24 3.43z" fill="#084970"/>
                                        </g>
                                    </g>
                                    <g data-name="Group 97">
                                        <path data-name="Path 88" d="M160.66 563.269s-26.53 51.76-18.11 363.83l29.09 2.9s18.21-212.75 24-276.25c.67 4.41 17.25 276.25 17.25 276.25h23.53s30.49-330.37-.5-366.73z" fill="#2a94f4"/>
                                    </g>
                                    <path data-name="Path 89" d="M181.02 435.469s10.78 85.62 8.84 127.8-43.51 87.09-43.51 87.09 4.15-49.78 9.2-82.18 1.25-69.92-3.11-83.79-9.41-40.37-.56-43.34 29.14-5.58 29.14-5.58z" fill="#ffbe55"/>
                                    <g data-name="Group 99">
                                        <path data-name="Path 90" d="M170.56 568.179l8.89 3.4s8.45 1.24 11.62 1.95 9.84 4.21 11.37 4.81-.34 2.23-2.78 1.9-7.49-.34-7.49-.34 11.87 8.45 15.02 11.07 2.22 4.63 1.29 4.68c0 0-.91 2.66-3.12 1.59 0 0-1.19 2.48-4.1.72 0 0-1.17 2.54-4.79-.19s-11.41-2.17-15.62-6.87a45.233 45.233 0 00-15.8-10.95z" fill="#fee3ca"/>
                                        <g data-name="Group 98">
                                            <path data-name="Path 91" d="M154.43 440.739s-15.96 8.21-26.57 30.67c-10.76 22.79-20.53 45.72-20.47 55.82.07 10.42 61.4 56.38 61.4 56.38l8.92-14.74-42-42.02a5.923 5.923 0 01-1.13-6.8c4.92-10.02 18.09-36.73 21.53-42.35 4.72-7.71 13.67-23.21 7.74-29.94s-9.42-7.02-9.42-7.02z" fill="#ffbe55"/>
                                        </g>
                                    </g>
                                    <path data-name="Path 92" d="M219.7 435.439s16.95 27.81 12.25 56.61-6.14 29.98-5.71 61.13 13.43 81.65 23.39 100.48c0 0 3.16-36.67-4.32-70.04s-9.06-41.39-7.33-53.95 8.39-19.58 11.18-31.88-.76-19.9-3.74-30.65-7.8-26.61-7.8-26.61-9.69-4.36-17.92-5.09z" fill="#ffbe55"/>
                                </g>
                                <g data-name="Group 102">
                                    <g data-name="Group 101">
                                        <path data-name="Path 93" d="M40.71 968.419h932.84c12.59 0 25.21.24 37.81 0 .55-.01 1.1 0 1.65 0 6.43 0 6.45-10 0-10H80.17c-12.59 0-25.21-.24-37.81 0-.55.01-1.1 0-1.65 0-6.43 0-6.44 10 0 10z" fill="#d3d3d3"/>
                                    </g>
                                </g>
                            </svg>                             
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
        </section>
    </body>     
</html>`,e.addPage("index.html",this.tailwindIndexHTML),e.subtitles=`1
00:00:00,430 --> 00:00:08,010
Pinegrow 7 brings a very useful improvement to
controls that represent Tailwind utility classes.

2
00:00:08,610 --> 00:00:12,750
Select H1 element and open the properties panel.

3
00:00:14,010 --> 00:00:20,940
Here we have a bunch of controls for Tailwind
utilities such as text size, color and so on.

4
00:00:21,870 --> 00:00:33,780
Click on the text color control to open the color picker and
hover our values to see them previewed on the selected element.

5
00:00:35,519 --> 00:00:37,620
Click on the color to set the value.

6
00:00:39,000 --> 00:00:42,120
This also works with select fields.

7
00:00:42,390 --> 00:00:50,489
Open the font size and cover over the possible values,
and they are again, previewed on the selected element.

8
00:00:53,519 --> 00:00:56,560
Preview works with floating tools as well.

9
00:00:57,360 --> 00:01:05,035
Press shift shift to bring up the floating tools or use
Window -> Show and hide panels -> Floating tools menu.

10
00:01:07,634 --> 00:01:29,595
Make sure that they are in set mode, not in paint mode, and now hovering our
colors and different property values previews them on the selected element.

`,this.addLesson(e)}lesson_ClassButtonsTailwind(){var e=this.newLesson("class_buttons_tw");e.name="Quickly select Tailwind CSS class property value",e.short_description="Click on a class button to select a different utility class value.",e.tags=["tailwind css"],e.description=e.makeDesc("775386714",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("h1")}</b> element.</li>
<li>Open the <b>Properties panel</b>.</li>
<li>Go to the <b>${this.showTWField("list of classes",".pg-el-classes-control")}</b> assigned to the selected element.</li>
<li>Click on any Tailwind CSS class and change its value from the dropdown menu.</li>
<li>Click on any Tailwind CSS color class to open the color picker.</li>
</ol>
`),e.addPage("index.html",this.tailwindIndexHTML),e.subtitles=`1
00:00:00,210 --> 00:00:02,700
Here is another cool Tailwind feature.

2
00:00:03,120 --> 00:00:08,010
Select the H1 element on the page and go to property panel.

3
00:00:09,210 --> 00:00:15,360
There we have a section showing all the classes
that are assigned to the selected element.

4
00:00:16,290 --> 00:00:22,110
Click on any Tailwind class to display the
dropdown where you can change its values.

5
00:00:22,170 --> 00:00:28,430
For example, click on font extra bolt to change the font weight.

6
00:00:31,250 --> 00:00:35,280
Click on any color class to open the color picker.

7
00:00:35,550 --> 00:00:44,940
The values are previewed on the selected element,
and when we click the value, the class gets replaced.

8
00:00:45,500 --> 00:00:49,200
This makes manipulating tailored classes a lot quicker.

`,this.addLesson(e)}lesson_ReleaseNotes(){var e=this.newLesson("wpreleasenotes");e.name="WordPress &amp; WooCommerce Release notes →",e.short_description="Learn more about what else is new in WordPress and WooCommerce add-ons.",e.tags=["wordpress"],e.external_url="https://pinegrow.com/release_notes/pinegrow-7-november-28-2022/#wordpress",this.addLesson(e)}}new t})});