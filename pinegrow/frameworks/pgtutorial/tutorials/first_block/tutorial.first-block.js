$(function(){$("body").one("pinegrow-ready",function(e,t){class o extends PgTutorial{constructor(){super(),this.name="Build your first custom WordPress block",this.description=`Learn how to build a custom Gutenberg block from scratch and export it into a plugin that can be used on any WordPress site. Also includes lessons on building the HTML structure, responsive CSS styling and CSS grid.`,this.prefix="build_your_first_block_",this.registerThisTutorial=!0,this.allowRandomAccess=!0,this.mainLesson=null,this.pinegrow_json=`{"files":{},"open-pages":["index.html"],"urls":{"index.html":{"open-with-wrapper":false}},"wp-theme-info":{"dir":null,"name":"Cool Blocks","slug":"cool_blocks","auto_increment_version":"1","page":"index.html","wpseo":"true","wpjquery":"false","generator":"true","images":{},"blocks_type":"native-auto","pg_version":"1.0","blocks_editor_styles":[],"project_type":"plugin","blocks_inline_svg":"false","wc_enabled":"false","project_version":"1.0.0"},"wp-insight":{"menus":["primary","social"],"taxonomies":["category","post_tag"],"customizer_sections":[],"customizer_controls":[],"post_types":["attachment","page","post"],"template_parts":[],"sidebars":[],"master_pages":[],"image_sizes":["full","large","medium","medium_large","post-thumbnail","thumbnail"],"custom_funcs":[],"block_categories":[]}}`,this.lesson_01_Intro(),this.lesson_02_Layout(),this.lesson_03_Grid(),this.lesson_04_ActivateWP(),this.lesson_05_DefineBlock(),this.lesson_06_Editable(),this.lesson_07_Wrapper(),this.lesson_08_CreatingCSSRules(),this.lesson_09_Styling(),this.lesson_10_Link(),this.lesson_11_ConditionalLink(),this.lesson_12_LinkLabel(),this.lesson_13_BlockIconAndCat(),this.lesson_14_Responsive(),this.lesson_15_InnerBlocks(),this.lesson_16_SubblockLayout(),this.lesson_17_SubblockGrid(),this.lesson_18_SubblockCreateBlock(),this.lesson_19_SubblockTemplate()}newLesson(e,t){var o=new PgTutorialLesson(this.prefix+e,null,null);return o.main_lesson=this.mainLesson,o.onCheck=function(e,t){var o=null;o?(t.result="error",t.message=o):t.result="ok"},t&&!isApp()&&(o.requireProducts=["wppro"],o.requireProductMissingTitle="Upgrade to PRO to continue this tutorial",o.requireProductMissingMessage=`<p>Take a look at what we will cover in the rest of the tutorial to see if the PRO edition would be useful for you.</p><div style="aspect-ratio: 1920/1080;margin-top: 20px;"><iframe src="https://player.vimeo.com/video/780794326?h=dbdb7ab7d0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`),o}lesson_01_Intro(){var e=this.newLesson("intro"),t=(e.name="Introduction",e.description=e.makeDesc("000","Intro"),e.main_lesson_project_name=this.name,e.short_description=`See what we will build and how to use the tutorial.`,isApp()?`<li>Use the <b>File menu</b> to close the project and access other project commands.</li>`:`<li>Use the <b>${this.tooltip("menu button","menu_button")}</b> to close the project and other project commands.</li>`);e.description=e.makeDesc("780792765",`<p>${e.short_description}</p>`,`
<ol>
<li>Click on the underlined text to see where things are located on the screen.</li>
<li>Click on the <b>Watch the video</b> button.</li>
${t}
</ol>
`),e.addPage("index.html",`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link href="css/normalize.css" rel="stylesheet"><link href="css/style.css" rel="stylesheet">
        </head><body></body></html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),e.subtitles=`1
00:00:00,300 --> 00:00:01,740
Hi Matjaz here.

2
00:00:02,160 --> 00:00:04,830
I will be your guide in this tutorial.

3
00:00:05,400 --> 00:00:16,830
Together we will create a custom Gutenberg block from scratch and
export it into a plugin that can be used on any WordPress site.

4
00:00:17,070 --> 00:00:26,460
Our About Me block will be fully editable, and it'll also contain sub blocks.

5
00:00:26,700 --> 00:00:35,760
Creating such custom blocks manually would require
a lot of WordPress React, JavaScript coding.

6
00:00:36,239 --> 00:00:40,500
But as you will see, Pinegrow does all of that for us.

7
00:00:41,580 --> 00:00:46,140
Do the lessons one by one in the order they're listed.

8
00:00:47,550 --> 00:00:56,489
The active lesson has orange border and the lessons
you already completed get a blue check mark.

9
00:00:57,510 --> 00:01:01,725
Start each lesson by watching a short video.

10
00:01:05,595 --> 00:01:10,515
If you have trouble with understanding my accent, use the subtitles.

11
00:01:11,655 --> 00:01:17,445
You can also click on subtitles to jump around the video.

12
00:01:19,455 --> 00:01:32,670
After you watch the video, follow the steps, click on underlined items
to get help and to reveal elements and fields in Pinegrow interface.

13
00:01:33,300 --> 00:01:40,650
When you are done with the lesson, click on the
Check button and then proceed to the next lesson.

14
00:01:43,230 --> 00:01:52,420
If you need to restart a lesson or the whole tutorial,
click on the Restart the current tutorial lesson button.

15
00:01:53,700 --> 00:02:02,370
This let you restart the tutorial from the current
lesson onward, or restart the whole tutorial project.

16
00:02:03,030 --> 00:02:04,620
Thank you for being here.

17
00:02:05,160 --> 00:02:06,600
Now let's get started.

`,this.mainLesson=e,this.addLesson(e)}lesson_02_Layout(){var e=this.newLesson("layout");e.name="Build the HTML structure",e.tags=["html"],e.short_description=`Build the HTML structure for the About Me block.`,e.description=e.makeDesc("780793061",`<p>${e.short_description}</p>`,`<p>Let's create the following HTML structure:</p>
<pre>
section     &lt;-- Main block element
  div       &lt;-- Left column
    img     &lt;-- Image
  div       &lt;-- Right column
    h3      &lt;-- Name
    p       &lt;-- Description
</pre>

<ol>
<li>Open the <b>${this.tooltip("Insert","insert_menu")}</b> panel.</li>
<li>Drag <b>${this.showLibElement(this.showElement("section"),".crsa-factory-element-type-html-section")}</b> to the page.</li>
<li>Use the <b>Tree panel</b> to inspect the HTML structure.</li>
<li>Open the <b>${this.tooltip("Insert","insert_menu")}</b> panel again.</li>
<li><p>Type or copy-paste the following into the <b>${this.showLibElement("Insert code",".pg-code-insert")}</b>:</p>
<pre>
div
  img
div
  h3 Mr. Pine Cone
  p Something about me...
</pre>
</li>
<li>Drag <b>${this.showLibElement("the created HTML",".pg-code-insert .crsa-factory-element")}</b> inside the <b>${this.select("section")}</b> on the page or in the tree.</li>
</ol>

`),e.addPage("index.html",`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link href="css/normalize.css" rel="stylesheet"><link href="css/style.css" rel="stylesheet">
        </head><body></body></html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),e.subtitles=`1
00:00:00,330 --> 00:00:05,760
We will start by creating the HTML structure for the About Me Block.

2
00:00:06,330 --> 00:00:16,860
The top element will be a SECTION, and in there we will
have two DIVs, one for the left side with the image and

3
00:00:16,860 --> 00:00:21,210
one for the right side with the heading and a paragraph.

4
00:00:22,530 --> 00:00:27,810
Click on the Insert button to open the Library panel from.

5
00:00:29,160 --> 00:00:32,489
Drag a SECTION element to the page.

6
00:00:34,019 --> 00:00:41,550
We could repeat this process for each of the other elements
that we need, but instead I will show you a quicker way.

7
00:00:41,970 --> 00:00:47,340
Open the Library panel, and there we have insert code section.

8
00:00:48,660 --> 00:00:57,760
Instead of entering the complete HTML code, we can use
simplified syntax based on the template language called PUG.

9
00:00:58,940 --> 00:01:01,485
DIV will create a DIV tag.

10
00:01:02,685 --> 00:01:07,705
Below that, we use space to indent an IMG.

11
00:01:09,315 --> 00:01:12,615
This will create the image element inside the DIV.

12
00:01:13,605 --> 00:01:30,164
Next we add another DIV on the top level and inside this
DIV we again indent with the space and add H3 with Mr.

13
00:01:30,164 --> 00:01:32,265
Pine Cone text.

14
00:01:34,065 --> 00:01:39,395
And under did this P with a placeholder text.

15
00:01:44,405 --> 00:01:54,165
We could even add classes here by
typing ". myclass", but we don't need classes yet.

16
00:01:55,615 --> 00:02:06,135
Now drag this button to the section element,
either on the page or in the Tree panel.

17
00:02:07,695 --> 00:02:11,135
Let's check the HTML structure in the Tree panel.

18
00:02:12,295 --> 00:02:17,355
If anything would be wrong here, we can easily move it around and correct it.

19
00:02:17,955 --> 00:02:30,995
And now with HTML structure for our block: the
image, H3 and the text; we are ready to move on.

20
00:02:31,925 --> 00:02:37,605
Click on the Check button  and then proceed to the next lesson.

`,this.addLesson(e)}lesson_03_Grid(){var e=this.newLesson("grid");e.name="Design the layout with CSS Grid",e.tags=["css"],e.short_description=`Use the CSS grid editor to create the two column layout.`,e.description=e.makeDesc("780419605",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("img")}</b> element and go to the <b>Style panel</b>.</li>
<li>Set the <b>Max width</b> property to <code>100%</code>.</li>
<li>Select the <b>${this.select("section")}</b> element.</li>
<li>Open the <b>CSS grid</b> editor.</li>
<li>Click on the <b>${this.showGridElement("Create CSS grid",".create-grid")}</b> button.</li>
<li>Delete one of the grid <b>${this.showGridElement("columns",".pg-dm-grid-view-grid-col")}</b> so that only two columns remain.</li>
<li>Set the <b>${this.showGridElement("row height",".pg-dm-grid-view-grid-row")}</b> to <code>auto</code>. Double-click on the field for dropdown of values.</li>
<li>Set the <b>${this.showGridElement("gap",".crsa-field-gap")}</b> to <code>20px</code>.</li>
<li>Close the CSS grid editor.</li>
</ol>

`),e.subtitles=`1
00:00:00,420 --> 00:00:12,060
We want to use CSS Grid to create two column layout for our
block, and Pinegrow comes with a powerful visual CSS editor.

2
00:00:13,230 --> 00:00:16,710
But first, we need to take care of the image size.

3
00:00:17,190 --> 00:00:27,240
By default, the image will be shown at its natural size and
possibly it'll stretch beyond the space that is allocated for it.

4
00:00:28,470 --> 00:00:42,224
So to fix, select the image and go to the style panel
and there set the maximum white, the image to 100%.

5
00:00:44,265 --> 00:00:52,455
This means that the image will never be larger than
its container and will be scaled down if needed.

6
00:00:53,325 --> 00:00:55,665
So, okay, let's do the CSS grid now.

7
00:00:56,114 --> 00:00:59,025
First, select the section element.

8
00:01:00,495 --> 00:01:04,455
and then open the CSS grid editor.

9
00:01:05,504 --> 00:01:13,155
We can move this dialogue so that we can see the
page and then click on create CSS grid button.

10
00:01:14,475 --> 00:01:25,574
This creates a default layout with three columns and one row,
so delete one of the columns so that only the two columns.

11
00:01:27,574 --> 00:01:29,745
Set the row height to auto.

12
00:01:30,255 --> 00:01:34,875
So we double click on the field to get a dropdown of useful values.

13
00:01:36,215 --> 00:01:43,785
Auto means that the height of the row will be the
same as the height of the content in this row.

14
00:01:45,585 --> 00:01:48,375
Now let's set the gap to 20 pixels.

15
00:01:49,995 --> 00:01:52,185
Close the CSS grid editor.

16
00:01:53,355 --> 00:01:55,905
And the CSS grid layout is done.

17
00:01:57,025 --> 00:02:03,230
Just for fun, let's take a look at what would
happen to the image without the max width property.

18
00:02:04,280 --> 00:02:16,740
Select the image, and here click on the Eye icon to comment out
the maximum width property and the image is now displayed at

19
00:02:16,740 --> 00:02:28,440
it at its natural size and it stretches its grid column pushing
the right column all the way to the right outside of the page.

20
00:02:30,510 --> 00:02:37,890
So let's bring back the maximum width and now we are ready for the next lesson.

`,e.addPage("index.html",`<!doctype html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
                <link href="css/style.css" rel="stylesheet"/>
                </head>
        <body>
        <section>
        <div>
        <img src="https://pinegrow.com/placeholders/img16.jpg"/>
        </div>
        <div>
        <h3>Mr. Pine Cone</h3>
        <p>Something about me...</p>
        </div>
        </section>
        </body>
        </html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),this.addLesson(e)}lesson_04_ActivateWP(){var e=this.newLesson("activatewp");e.name="Setup the WordPress export",e.tags=["wordpress"],e.short_description=`Create and activate a new WordPress plugin.`,e.description=e.makeDesc(isApp()?"787350993":"780419964",`<p>${e.short_description}</p><blockquote>Note: The first step will open a modal dialog box and you won't be able to see these instructions. Read steps 1-5 first, and then do the first step.</blockquote>`,isApp()?`<ol>
<li>Go to the <b>WordPress panel</b></li>
<li>Click on the <b>Activate WordPress</b> button.</li>
<li>Set <b>Project type</b> to <code>Plugin</code>.</li>
<li>Set <b>Plugin name</b> to <code>Cool Blocks</code> (or similar).</li>
<li>Set <b>Project slug</b> to <code>cool_blocks</code>.</li>
<li>Click on the <b>Save settings</b> button to keep the settings and close the dialog.</li>
<li>Click on the <b>WordPress menu</b> and select the <b>Export the plugin</b> command.</li>
<li>Go to the WordPress dashboard -&gt; Plugins and activate the plugin <b>Cool Blocks</b>.</li>
</ol>`:`<ol>
<li>Click on the <b>WordPress menu</b> button to activate the WordPress export.</li>
<li>Set <b>Project type</b> to <code>Plugin</code>.</li>
<li>Set <b>Plugin name</b> to <code>Cool Blocks</code> (or similar).</li>
<li>Set <b>Project slug</b> to <code>cool_blocks</code>.</li>
<li>Click on the <b>Save settings</b> button to keep the settings and close the dialog.</li>
<li>Click on the <b>WordPress menu</b> again. Now it displays the menu.</li>
<li>Select the <b>Export the plugin</b> command from the WordPress menu.</li>
<li>Go to <a href="/wp-admin/plugins.php" target="_blank">WordPress dashboard -&gt; Plugins</a> and activate the plugin <b>Cool Blocks</b>.</li>
</ol>

`),e.addPage("index.html",`<!doctype html>
<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:20px;">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" style="max-width: 100%;"/>
            </div>
            <div>
                <h3>Mr. Pine Cone</h3>
                <p>Something about me...</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),isApp()?e.subtitles=`1
00:00:01,020 --> 00:00:06,840
So far, we just used HTML and CSS to create a static version of the block.

2
00:00:07,560 --> 00:00:13,560
Now we will tell Pinegrow to export this project as a WordPress plugin.

3
00:00:14,670 --> 00:00:20,940
Go to the WordPress panel and click on the Activate WordPress button.

4
00:00:22,320 --> 00:00:25,560
This opens up the project settings dialogue.

5
00:00:26,220 --> 00:00:29,480
First, we need to decide what kind of project we are building.

6
00:00:30,135 --> 00:00:37,275
It can be a complete theme with templates
such as index.php, single.php, and so on.

7
00:00:37,785 --> 00:00:46,425
Or it can be a plugin that can be used with any
WordPress site, be it created with Pinegrow or not.

8
00:00:47,745 --> 00:00:50,955
In this project, we are not building a complete theme.

9
00:00:51,435 --> 00:00:58,785
We are creating a custom About me block
that can be used on our existing WordPress.

10
00:01:00,045 --> 00:01:03,055
So we set project type to Plugin.

11
00:01:04,185 --> 00:01:08,715
Next we give plugin a name, Cool blocks

12
00:01:11,925 --> 00:01:16,155
and set project slug to cool_blocks.

13
00:01:18,805 --> 00:01:28,695
Next, we need to select a folder into which the plugin
will be exported, and this is usually a folder inside

14
00:01:29,145 --> 00:01:35,970
wp-content/plugins folder of our local WordPress installation.

15
00:01:37,890 --> 00:01:39,700
So here is the wp-content.

16
00:01:39,720 --> 00:01:41,010
Let's go to plugins.

17
00:01:42,300 --> 00:01:52,560
And depending on your operating system, there might not be an option to
create a folder, because first we need to create the folder for the plugin.

18
00:01:53,070 --> 00:01:55,830
So what I do in this case is select Show in finder.

19
00:01:56,715 --> 00:02:00,435
And then go again, plugins, and there create the folder.

20
00:02:00,935 --> 00:02:01,815
So cool-blocks,

21
00:02:09,764 --> 00:02:12,665
and then I select the folder here.

22
00:02:17,095 --> 00:02:19,505
Now we have the plugin folder set.

23
00:02:20,405 --> 00:02:25,365
The plugin files will be exported here into this folder.

24
00:02:27,765 --> 00:02:32,715
Click on the save settings button to keep the settings and close the dialogue.

25
00:02:34,635 --> 00:02:38,505
And now the top menu has the WordPress item.

26
00:02:40,065 --> 00:02:46,245
To export the plugin, open the menu and select Export the plugin.

27
00:02:48,475 --> 00:02:54,045
Pinegrow lets us know that two files were added to our project.

28
00:02:54,630 --> 00:03:08,760
One is the plugin main PHP file, and then there is also inc/custom.php
file that can be useful for adding our own custom code to the plugin.

29
00:03:12,060 --> 00:03:26,410
Now we have to activate the plugin in WordPress, go to plugins in
WordPress dashboard, and there on our Cool blocks plugin, select Activate.

30
00:03:27,870 --> 00:03:30,510
You only need to do this step once.

31
00:03:31,620 --> 00:03:41,580
And now whenever the project is changed, we can use WordPress - Export
the plugin to export it into our local WordPress installation.

32
00:03:42,900 --> 00:03:53,615
Please note the rest of the tutorial is recorded using the Pinegrow plugin
for WordPress and there the menus on the top are slightly different.

33
00:03:55,395 --> 00:04:04,275
Although the WordPress menu looks a bit different there,
all features presented here are the same, and you can find

34
00:04:04,275 --> 00:04:09,155
the Export the plugin option under the WordPress menu.

`:e.subtitles=`1
00:00:00,870 --> 00:00:08,910
So far, we just used HTML and CSS to create an HTML static version of the block.

2
00:00:09,600 --> 00:00:15,780
And now we will tell Pinegrow to export this project as a WordPress plugin.

3
00:00:16,590 --> 00:00:21,570
Click on the WordPress menu button to activate the WordPress support.

4
00:00:23,010 --> 00:00:26,320
This opens up the project settings dialogue.

5
00:00:26,940 --> 00:00:30,945
First, we need to decide what kind of project we are building.

6
00:00:32,775 --> 00:00:40,065
It can be a theme with a bunch of templates
such as index php, single php, and so on.

7
00:00:40,515 --> 00:00:48,614
Or it can be a plugin that can be used alongside
any theme, be it created with Pinegrow or not.

8
00:00:49,394 --> 00:00:52,635
In this project, we are not building a complete theme.

9
00:00:53,084 --> 00:00:57,185
We are creating a custom About me Gutenberg block.

10
00:00:57,715 --> 00:01:00,105
That can be used on any WordPress site.

11
00:01:00,495 --> 00:01:03,225
So we set project type to plugin.

12
00:01:04,695 --> 00:01:18,065
Next we give plugin a name, Cool blocks, and set project slug to cool_blocks.

13
00:01:19,725 --> 00:01:25,035
Click on the Save settings button to keep the settings and close the dialog.

14
00:01:26,475 --> 00:01:29,745
Now click on the WordPress menu again.

15
00:01:30,435 --> 00:01:31,875
It displays the menu.

16
00:01:31,875 --> 00:01:37,245
Now select  Export the plugin command from the menu.

17
00:01:39,884 --> 00:01:46,975
The plugin export is done, and now we have to activate the plugin in WordPress.

18
00:01:54,835 --> 00:02:02,699
Go to plugins in the WordPress dashboard and activate the plugin  Cool blocks.

19
00:02:03,479 --> 00:02:06,660
We only need to do the activation step once.

20
00:02:08,150 --> 00:02:13,910
Wherever we change our project, we simply export the plugin again.

`,this.addLesson(e)}lesson_05_DefineBlock(){var e=this.newLesson("defineblock");e.name="Use the Block action to define the block",e.tags=["wordpress"],e.short_description=`Add the Block action to create a new custom block.`,e.description=e.makeDesc("780420131",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("section")}</b> element.</li>
<li>Switch to the <b>WordPress panel</b>.</li>
<li>Click on the <b>${this.showWPActionName("Block",'[data-action="cms-block"]')}</b> action to add it to the selected element.</li>
<li>Set the <b>${this.showWPActionField("Unique id","cms-block")}</b> to <code>about-me</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block","title")}</b> to <code>About me</code>.</li>
<li><b>Export the plugin</b>.</li>
<li>Go to WordPress dashboard, edit a page and add the block <code>About me</code> to the content.</li>
</ol>

`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:20px;">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" style="max-width: 100%;"/>
            </div>
            <div>
                <h3>Mr. Pine Cone</h3>
                <p>Something about me...</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,600 --> 00:00:05,580
We will use the Block action to create a new custom Guttenberg block.

2
00:00:06,420 --> 00:00:18,690
First select the top element of the block in our case, this
is the section element, and then go to the WordPress panel.

3
00:00:19,500 --> 00:00:25,290
How does Pinegrow know what WordPress features to add to our elements?

4
00:00:25,290 --> 00:00:31,215
Pinegrow is not a magic black box that would just guess what we want.

5
00:00:32,115 --> 00:00:45,435
So instead we decide how the dynamic features are implemented by adding
WordPress features or WordPress actions, as we call them, to HTML elements.

6
00:00:46,575 --> 00:00:54,405
On the top part of the WordPress panel, we have actions
that are already assigned to the selected element.

7
00:00:54,750 --> 00:00:56,640
In this case, they're none.

8
00:00:58,890 --> 00:01:02,550
In the bottom part, we have a list of all available actions.

9
00:01:03,090 --> 00:01:05,610
There are hundreds of them, but don't worry.

10
00:01:05,730 --> 00:01:09,060
In this project we will only use this three.

11
00:01:11,400 --> 00:01:20,350
So with section elements selected, click on the Block
action to add the Block action to the section element.

12
00:01:21,110 --> 00:01:26,475
Block turns the element into a custom Guttenberg block.

13
00:01:28,885 --> 00:01:38,325
Set the unique ID to about-me and the title to About me.

14
00:01:40,245 --> 00:01:41,805
This is enough for start.

15
00:01:43,245 --> 00:01:50,505
Export the plugin and let's go to the WordPress
dashboard and open a page in the editor.

16
00:01:51,840 --> 00:01:53,580
Click to add a block.

17
00:01:54,600 --> 00:01:59,175
Our custom About me block is here and we can add it to the page.

18
00:02:00,690 --> 00:02:01,110
Neat.

19
00:02:01,110 --> 00:02:01,590
Right?

20
00:02:02,220 --> 00:02:05,040
And at this stage it is completely static.

21
00:02:05,370 --> 00:02:13,680
We cannot add it the content in any way, and
we will make it editable in the next lesson.

`,this.addLesson(e)}lesson_06_Editable(){var e=this.newLesson("editable");e.name="Make the block editable",e.tags=["wordpress"],e.short_description=`Add the Block Attributes action to make the block content editable.`,e.description=e.makeDesc("780420271",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("h3")}</b> element.</li>
<li>Switch to the <b>WordPress panel</b>.</li>
<li>Click on the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action to add it to the selected heading.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>name</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title")}</b> to <code>Name</code>.</li>

<li>Select the <b>${this.select("p")}</b> element.</li>
<li>Add the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>bio</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title")}</b> to <code>Bio</code>.</li>

<li>Select the <b>${this.select("img")}</b> element.</li>
<li>Add the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>image</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title")}</b> to <code>Image</code>.</li>
<li>Notice that <b>${this.showWPActionField("Use as","cms-block-field","type")}</b> is set to <code>Image</code>.</li>

<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:20px;" cms-block="about-me" cms-block-title="About me">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" style="max-width: 100%;"/>
            </div>
            <div>
                <h3>Mr. Pine Cone</h3>
                <p>Something about me...</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:01,080 --> 00:00:06,270
We will use the Block attributes action to make the block content editable.

2
00:00:06,870 --> 00:00:13,950
First, let's do the heading, select the
H3 element and go to the WordPress panel.

3
00:00:15,210 --> 00:00:23,340
Click on the Block attributes action to add it to
the selected heading, and make the element editable.

4
00:00:24,810 --> 00:00:27,840
Set the attribute ID to name.

5
00:00:30,044 --> 00:00:32,415
And the title to name as well.

6
00:00:33,345 --> 00:00:38,595
The Use as field is automatically set as content.

7
00:00:39,405 --> 00:00:45,945
This means that the value of the attribute
will be used as the content of this element.

8
00:00:46,995 --> 00:00:55,245
Next, do the paragraph where we will show the short bio of the person.

9
00:00:56,025 --> 00:00:58,045
So select the P element.

10
00:00:58,845 --> 00:01:01,665
Again, add the Block attributes action.

11
00:01:02,175 --> 00:01:07,065
Set the id to bio and the title to Bio.

12
00:01:08,685 --> 00:01:16,185
To make the image editable select the image
element and add Block attributes action.

13
00:01:17,175 --> 00:01:22,455
Set the attribute id to image and the title to Image.

14
00:01:24,225 --> 00:01:28,455
Notice that Use as is now set to image.

15
00:01:30,085 --> 00:01:39,285
Exporte a plugin and reload the page in the editor to test the new block.

16
00:01:41,235 --> 00:01:46,125
And now we can simply edit the content either directly on the page.

17
00:01:53,970 --> 00:01:55,950
Or here in the sidebar.

18
00:02:17,250 --> 00:02:19,315
Let's replace the image as well.

19
00:02:24,285 --> 00:02:28,960
And here we can also select the image size that is displayed.

20
00:02:30,250 --> 00:02:33,030
Save the page to keep the changes.

`,this.addLesson(e)}lesson_07_Wrapper(){var e=this.newLesson("wrapper");e.name="Use the target site as the wrapper",e.tags=["html","css"],e.short_description=`Display the block on the target site during editing.`,e.description=e.makeDesc("780420497",`<p>Display the block on the target site during editing.</p>`,`<ol>
<li>Go to the <b>Project panel</b>.</li>
<li><code>Right-click</code> on the file <b>${this.showProjectFile("index.html")}</b>.</li>
<li>Select the <b>Open in wrapper</b> command.</li>
<li><p>Set <b>URL of the page</b> to <code>/</code> to display the block on the home page.</p><p>Or, you can use any other page on the site. For best results, DO NOT use a page where the block is already displayed.</li>
<li>Leave the <b>CSS Selector</b> field empty to display the block in the first <code>article</code>, <code>main</code> or <code>body</code> element. Or, enter the selector of the element on the page where the block should be displayed during editing.</li>
<li>Click on the <b>Save &amp; open</b> button.</li>
<li>Note: If you want to again display the page without the wrapper, select Open from the right-click menu in the Project panel.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:20px;" cms-block="about-me" cms-block-title="About me">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" style="max-width: 100%;" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,330 --> 00:00:12,270
The purpose of our block is to be used on an existing site with its own
layout and styling controlled by whatever theme is active on the site.

2
00:00:12,720 --> 00:00:21,220
So it would be useful to see how the block will actually
appear on the target site while we work on it in the editor.

3
00:00:21,750 --> 00:00:23,380
And we can do that in Pinegrow.

4
00:00:24,330 --> 00:00:26,010
Go to the Project panel.

5
00:00:28,545 --> 00:00:36,695
Right click on the file index.Html and select Open in wrapper command.

6
00:00:37,485 --> 00:00:39,195
The dialog box pops up.

7
00:00:39,555 --> 00:00:48,105
Set your URL of the page to / to display the block on the homepage of the site.

8
00:00:48,525 --> 00:00:59,265
We can only choose relative URLs because Pinegrow can only load documents
from the same domain due to the browsers cross origin restrictions.

9
00:01:00,644 --> 00:01:03,905
We could also use any other page from this site.

10
00:01:04,754 --> 00:01:13,875
Leave the CSS selector field empty to display the
block in the first article, main or body element.

11
00:01:15,255 --> 00:01:28,185
We could also inspect the page in development tools and find out
which selector to use to display the block in that particular element.

12
00:01:29,415 --> 00:01:32,655
And in that case, we would enter that selector here.

13
00:01:32,865 --> 00:01:37,245
But for now, let's keep it simple and let's just use default settings.

14
00:01:38,175 --> 00:01:39,945
Click on Save and open.

15
00:01:40,545 --> 00:01:53,285
And the content of the body element of our page is now
displayed inside the target page that we selected as a wrapper.

16
00:01:54,115 --> 00:02:00,285
This helps us with making the block fit into the design of the target site.

`,this.addLesson(e)}lesson_08_CreatingCSSRules(){var e=this.newLesson("creatingrules");e.name="Create CSS rules &amp; add stylesheet",e.tags=["css"],e.short_description=`Save inline styles into CSS class rules and add the stylesheet to the block.`,e.description=e.makeDesc("780420621",`<p>${e.short_description}</p>`,`<ol>
<li>Select the ${this.select("section")} element.</li>
<li>Go to the <b>Style panel</b>.</li>
<li><b>Save the inline style</b> in a CSS rule with the selector <code>.cool-blocks-about-me</code>.</li>
<li>Select the ${this.select("img")} element.</li>
<li><b>Save the inline style</b> in a CSS rule with the selector <code>.cool-blocks-about-me img</code>.</li>
<li>Select the ${this.select("section")} element.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Open the <b>${this.showWPAction("More options",`[data-action="cms-block"] .pg-action-section .icon-right`,!0)}</b> section.</li>
<li>Set the <b>${this.showWPActionField("Style","cms-block","style")}</b> field to <code>css/style.css</code>.</li>
<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:20px;" cms-block="about-me" cms-block-title="About me">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" style="max-width: 100%;" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",""),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,480 --> 00:00:04,470
Up to now we designed everything with style attributes.

2
00:00:04,770 --> 00:00:09,540
It's time to save those styles into proper CSS rules.

3
00:00:10,470 --> 00:00:17,280
So select the section element and go to  the Style panel.

4
00:00:20,190 --> 00:00:33,765
Here we have inline styles defined in the style attribute, and here
we have a plus icon to save the inline style as a new CSS rule.

5
00:00:35,355 --> 00:00:38,155
Enter the selector ".cool-blocks-about-me".

6
00:00:45,825 --> 00:00:48,165
Why do we use such a long class name?

7
00:00:48,644 --> 00:00:55,055
Keep in mind that the block will be used on
an existing site with with its own style.

8
00:00:55,800 --> 00:01:06,780
To avoid styles of our block clashing with other elements on the
site we need to use well scoped, narrow scoped CSS rule selectors.

9
00:01:07,440 --> 00:01:17,460
For example, if we could use "section" as the selector,
then this style would apply to all section elements on the.

10
00:01:19,005 --> 00:01:30,645
Or if we just used "about-me" class, there is a fair probability that
another theme or plugin is already using the class with the same name.

11
00:01:30,945 --> 00:01:36,914
So that's why we use selectors that are
truly unique to our blocks, to our plugin.

12
00:01:38,625 --> 00:01:48,675
Keep this checkbox selected so that Pinegrow will automatically
add the class "cool-blocks-about-me" to the selected element.

13
00:01:52,035 --> 00:01:57,075
And here we select the stylesheet where the style will be be created.

14
00:01:57,645 --> 00:01:59,475
So we only have one stylesheet.

15
00:02:00,225 --> 00:02:03,345
Leave it as it is and click on the Create button.

16
00:02:04,305 --> 00:02:14,805
And now we can see that we have style.css  that contains
our new CSS rule for the class "cool-blocks-about-me".

17
00:02:15,555 --> 00:02:20,355
Let's switch to the Tree panel so that we
can also see the structure of the page.

18
00:02:21,195 --> 00:02:32,435
And next, select the image element and save the inline style
in a CSS role with the selector ".cool-blocks-about-me img".

19
00:02:32,495 --> 00:02:39,080
And here we don't have to type the whole
class, we can just click on the class here.

20
00:02:40,990 --> 00:02:47,130
So we added the parent class, and then let's also click on image.

21
00:02:48,090 --> 00:02:58,860
So this rule will apply to all images within an element
with ".cool-blogs-about-me" class, click Create.

22
00:03:02,310 --> 00:03:06,340
And here we again select style.css.

23
00:03:06,900 --> 00:03:14,130
We have a new rule for all images inside our About Me block.

24
00:03:15,810 --> 00:03:28,950
And if we click here on this code icon, we can see the code of
style.css with all our block styling neatly collected here in one place.

25
00:03:30,240 --> 00:03:32,220
Let's close the code editor.

26
00:03:33,030 --> 00:03:43,860
So now we have to tell WordPress to include this style sheet whenever
the block is displayed in the block editor or on the front page.

27
00:03:44,670 --> 00:03:50,880
To do this, select the section element again and go to the WordPress panel.

28
00:03:51,550 --> 00:03:53,850
Here we have our Block action.

29
00:03:55,080 --> 00:04:05,295
Click on more options to display advanced
options  and among them we also have Style field.

30
00:04:06,365 --> 00:04:17,925
Style field tells WordPress which stylesheets to include both
in the editor and on the front end when the block is displayed.

31
00:04:19,695 --> 00:04:29,295
And if we check the  Project panel, we can see
that file style.css Is located inside CSS folder.

32
00:04:29,805 --> 00:04:38,305
So we will, for the style field, we will enter css/style.css.

33
00:04:38,955 --> 00:04:43,905
In this stylesheet will be included both in the editor and on the front end.

34
00:04:44,505 --> 00:04:52,995
If we would want to include styles or script only in
the editor, we could use editor style and editor script.

35
00:04:54,205 --> 00:05:05,640
If we would want to include the script only on the front we would set
View script, but now there is no need to to go into so many details.

36
00:05:06,270 --> 00:05:12,660
Our style.css will now be included whenever the About Me block is used.

37
00:05:13,410 --> 00:05:26,070
Export the plugin and then reload the page
in the editor to see if everything works.

38
00:05:28,034 --> 00:05:38,025
This is the first time we got this notice, and whenever block
editor detects that the structure or attributes of the block

39
00:05:38,030 --> 00:05:42,914
changed, then we get this Attempt block recovery notice.

40
00:05:43,755 --> 00:05:55,155
And while we work on blocks, when we often change it, like now, we are
adding and changing the block structure, block styling all the time.

41
00:05:55,800 --> 00:06:07,590
So almost every time we do that, we will get this notice and
we simply click on Attempt Block Recovery, and WordPress will

42
00:06:07,640 --> 00:06:20,750
update the content of this page with the latest version of our
block and we can see that there is no change in how it looks.

43
00:06:21,270 --> 00:06:29,235
And that means that everything is perfect, that
the style.css Is correctly included in the editor.

`,this.addLesson(e)}lesson_09_Styling(){var e=this.newLesson("style");e.name="Tweak the styling",e.tags=["css"],e.short_description=`Improve the design of the block with CSS styling.`,e.description=e.makeDesc("780421135",`<p>${e.short_description}</p>`,`<ol>
<li>Select the ${this.select("section")} element.</li>
<li>Go to the <b>Style panel</b>.</li>
<li>Make sure that the rule <code>.cool-blocks-about-me</code> is selected.</li>
<li>Set <b>Padding top / bottom</b> to <code>20px</code>.</li>
<li>Select the ${this.select("img")} element.</li>
<li>Make sure that the rule <code>.cool-blocks-about-me img</code> is selected.</li>
<li>Set <b>Min height</b> to <code>340px</code>.</li>
<li>Set <b>Object fit</b> to <code>cover</code>.</li>
<li>Set <b>Border radius</b> to <code>10px</code>.</li>
<li>Play around with different ways of styling the block. Use visual controls, properties or code editor. If needed, ${this.tooltip("Turn off the visual helpers","menu_toggle")} to better see the selected element.</li>
<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",`.cool-blocks-about-me {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px;
}

.cool-blocks-about-me img {
    max-width: 100%;
}`),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:01,380 --> 00:00:10,140
. Now we can have some fun with improving the design of the block
and the steps we are doing here are just a barebones example.

2
00:00:10,530 --> 00:00:15,630
You can unleash your creativity and come up with something completely different.

3
00:00:16,920 --> 00:00:19,920
First, let's add some padding to the block.

4
00:00:20,760 --> 00:00:25,150
Select the section element and go to the Style panel.

5
00:00:27,349 --> 00:00:31,455
Make sure that the rule ".cool-blocks-about-me" is selected.

6
00:00:32,714 --> 00:00:40,575
And then go down to padding and set top and bottom padding to 20 pixels.

7
00:00:44,084 --> 00:00:49,545
This adds a little bit of spacing, inner spacing to our block.

8
00:00:50,055 --> 00:00:59,295
Next, select the image element  and again, make
sure that the ".cool-blocks-about-me img" rule is

9
00:00:59,295 --> 00:01:07,455
selected and set minimum height to around 340 pixels.

10
00:01:09,195 --> 00:01:15,585
This will ensure that the image doesn't end up being too
small, even if we don't have a lot of content on this side.

11
00:01:17,055 --> 00:01:19,275
But the image proportions are now wrong.

12
00:01:19,275 --> 00:01:20,865
The image got stretched.

13
00:01:21,315 --> 00:01:30,075
And to restore the correct proportions, we
will use object-fit and set it to cover.

14
00:01:32,384 --> 00:01:35,745
Let's also add the border radios of 10 pixels.

15
00:01:36,375 --> 00:01:43,765
So here I'm pressing shift UP to increment by 10 pixels.

16
00:01:43,765 --> 00:01:45,695
Do it on all sides.

17
00:01:45,695 --> 00:01:53,145
It's sometimes hard to see what is going on
because of these blue selected element menus.

18
00:01:53,145 --> 00:02:01,455
And we can toggle them with this icon so that now our border radios is visible.

19
00:02:02,054 --> 00:02:05,595
And again, we can bring it back by clicking on the icon again.

20
00:02:06,884 --> 00:02:10,234
And when you are done, export the plugin.

21
00:02:14,325 --> 00:02:21,795
Go to the page editor and admire how great your block looks.

`,this.addLesson(e)}lesson_10_Link(){var e=this.newLesson("link");e.name="Add an editable link",e.tags=["html","wordpress"],e.short_description=`Add a Learn more link to the block.`,e.description=e.makeDesc("780421332",`<p>${e.short_description}</p>`,`<ol>
<li>Use the <b>Library panel</b> to insert an anchor ${this.showElement("a")} into the ${this.select("second <div>","div:nth-of-type(2)")}.</li>
<li><b>Activate the text editor</b> and change the link label to <code>Learn more about me</code>.</li>
<li>Click on the <b>${this.tooltip("Done button","edit_text_done")}</b> in the blue Text edit menu above the element when you're done with changing the text.</li>
<li>Or, you could use the <b>Inner HTML</b> field in the <b>Properties panel</b> to edit the link label.</li>
<li>Or, you could use the <b>${this.tooltip("element code editor","more_actions")}</b> to edit it.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Add the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>more_link</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title")}</b> to <code>Learn more link</code>.</li>
<li>Notice that <b>${this.showWPActionField("Use as","cms-block-field","type")}</b> is set to <code>Link</code>.</li>
<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),this.css_after_styling_tweaks=`.cool-blocks-about-me {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.cool-blocks-about-me img {
    max-width: 100%;
    min-height: 340px;
    object-fit: cover;
    border-radius: 10px;
}`,e.addStylesheet("css/style.css",this.css_after_styling_tweaks),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:01,200 --> 00:00:06,870
Let's improve the block by adding a "learn more" link down here.

2
00:00:07,680 --> 00:00:22,290
Click on the insert button to open the Library panel, and from there, drag
the anchor element into the second div below the paragraph with the bio.

3
00:00:24,060 --> 00:00:30,369
Let's make the view larger so that we can see what's going on.

4
00:00:30,369 --> 00:00:42,525
Activate the text editor by clicking on the text edit
icon and change the link label to "learn more about me".

5
00:00:43,815 --> 00:00:56,955
Click on the done button here above the element when you are done with changing
the text, or we can keep the element selected and go to Properties panel.

6
00:00:57,855 --> 00:01:07,304
And change the text here in in our HTML
field, or we could go and open Edit code.

7
00:01:08,994 --> 00:01:14,315
This opens the code editor for the selected element and make the changes here.

8
00:01:15,115 --> 00:01:24,855
There are many ways, many different ways of doing things in Pinegrow
and you can choose the one most suited for the task at hand.

9
00:01:25,425 --> 00:01:26,925
So now we have the link.

10
00:01:27,075 --> 00:01:32,085
Let's go to the WordPress panel and add Block attributes action.

11
00:01:33,315 --> 00:01:36,505
Set the attribute ID to learn_more.

12
00:01:41,805 --> 00:01:46,455
And the title Learn more link.

13
00:01:48,275 --> 00:01:51,555
Notice that uses is now set to link.

14
00:01:52,215 --> 00:02:00,045
This means that the value of the attribute
will be used as the HREF attribute on the link.

15
00:02:01,305 --> 00:02:03,685
Export the plugin.

16
00:02:06,664 --> 00:02:09,555
Reload the page in the editor to test the block.

17
00:02:10,095 --> 00:02:18,885
And again, because we change the structure of the block,
we get the Attempt block recovery notice and just click

18
00:02:18,885 --> 00:02:24,795
attempt block recovery, and we get our new updated block.

19
00:02:25,845 --> 00:02:29,025
We now have a link selector in the sidebar.

20
00:02:30,345 --> 00:02:35,505
It lets us look up a page or any other post.

21
00:02:36,450 --> 00:02:38,670
Or enter any custom url.

22
00:02:38,670 --> 00:02:47,430
So here, let just link it to one of the
block posts and update to save the changes.

`,this.addLesson(e)}lesson_11_ConditionalLink(){var e=this.newLesson("conditionallink");e.name=`Conditionally display the link`,e.tags=["wordpress"],e.short_description=`Display the link only when the link attribute is set.`,e.description=e.makeDesc("780421554",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("link <a>","a")}</b> element.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Open the <b>${this.showWPAction("Attribute options",`[data-action="cms-block-field"] .pg-action-section .icon-right`,!0)}</b> section on the Block Attributes action.</li>
<li>Set the <b>${this.showWPActionField("If empty","cms-block-field","if-empty")}</b> to <code>Remove the element</code>.</li>
<li>With this setting the link will only be displayed if the <code>more_link</code> attribute is set.</li>
<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p><a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_after_styling_tweaks),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,330 --> 00:00:11,220
One problem we have now is that even if the url of the
learn more link is not set, the link itself is still

2
00:00:11,225 --> 00:00:14,940
shown on the page, and that's probably not what we want.

3
00:00:15,360 --> 00:00:21,210
We need a way to display an element only if it's block attribute is set.

4
00:00:21,720 --> 00:00:23,820
And this is easy to do in Pinegrow.

5
00:00:26,100 --> 00:00:31,475
First, select the link element and go to the WordPress panel.

6
00:00:32,735 --> 00:00:43,965
Here we open attribute options and set  "If empty" to "remove the element".

7
00:00:44,625 --> 00:00:52,285
With this setting the link will only be
displayed if the more link attribute is set.

8
00:00:53,055 --> 00:01:00,180
Export the plugin and reload the editor page.

9
00:01:00,210 --> 00:01:03,150
So let's update it to test it.

10
00:01:04,530 --> 00:01:06,060
Attempt block recovery.

11
00:01:06,509 --> 00:01:21,660
So now the link is not set and that's why we can't see the anchor,
the link element was removed and if we select a link, it comes back.

12
00:01:22,350 --> 00:01:23,020
Perfect.

`,this.addLesson(e)}lesson_12_LinkLabel(){var e=this.newLesson("linklabel");e.name=`Make the link label editable`,e.tags=["wordpress"],e.short_description=`Add an editable block attribute for the link label.`,e.description=e.makeDesc("780421677",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("link <a>","a")}</b> element.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Click on the <b>${this.showWPActionAddItem("+ Add attribute",`cms-block-field`)}</b> button to add the second editable attribute.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field","2")}</b> to <code>more_link_label</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title-2")}</b> to <code>Learn more link label</code>.</li>
<li>Set the <b>${this.showWPActionField("Use as","cms-block-field","type-2")}</b> field to <code>Content</code> so that the value of the attribute replaces is used as the content of the element.</li>
<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p><a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_after_styling_tweaks),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,990 --> 00:00:04,650
How about we make the link label editable as well?

2
00:00:05,430 --> 00:00:10,860
Select the anchor element and go to the WordPress panel.

3
00:00:11,580 --> 00:00:19,200
Let's close the attribute options, but we already
have an editable attribute on this element.

4
00:00:19,770 --> 00:00:21,420
Can we add more than one?

5
00:00:21,930 --> 00:00:23,220
Yes, of course we can.

6
00:00:23,610 --> 00:00:26,760
So click on the Add attribute button.

7
00:00:27,375 --> 00:00:47,504
To add the second editable attribute, and in this case, set the
attribute ID to more_link_label and the title "Learn more link

8
00:00:48,194 --> 00:01:01,140
label", and we have to manually set Use as to content, so that
the value of the attribute is used as the content of this element.

9
00:01:02,490 --> 00:01:18,870
The first attribute more_link is used to set the HREF attribute on the element,
and then the second attribute is used to set the content of the anchor element.

10
00:01:19,440 --> 00:01:21,570
So let's export the plugin.

11
00:01:23,265 --> 00:01:25,035
And test the block.

12
00:01:28,574 --> 00:01:37,515
Select the block, and now we can edit the link label as well.

13
00:01:43,485 --> 00:01:50,684
Notice that the link will be removed if the
URL is not set, even if the label is set.

14
00:01:53,524 --> 00:02:01,995
And that's because we told Pinegrow to remove
the element if the link URL attribute is empty.

15
00:02:02,895 --> 00:02:11,955
If we bring it back the link comes back as well.

`,this.addLesson(e)}lesson_13_BlockIconAndCat(){var e=this.newLesson("blockiconcat");e.name=`Block icon and category`,e.tags=["wordpress"],e.short_description=`Create a new blocks category and add icon to the block.`,e.description=e.makeDesc("780421878",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("section")}</b> element.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Click on the <b>${this.showWPActionField("Browse icons","cms-block","icon-browse")}</b> icon and select <code>Bootstrap icons</code>.</li>
<li>This opens Bootstrap icons website in a new tab. Find a suitable icon and copy its SVG code.</li>
<li>Paste the SVG code into the <b>${this.showWPActionField("Icon","cms-block","icon")}</b> field.</li>
<li>Set the <b>${this.showWPActionField("Category","cms-block","category")}</b> field to <code>Custom</code>.</li>
<li>Set the <b>${this.showWPActionField("Custom category id","cms-block","category-custom")}</b> to <code>cool_blocks</code>.</li>
<li>Check the <b>${this.showWPActionField("Register category","cms-block","category-custom-register")}</b> checkbox.</li>
<li>Set the <b>${this.showWPActionField("Category name","cms-block","category-custom-register-name")}</b> to <code>Cool Blocks</code>.</li>
<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link" cms-block-field-2="more_link_label" cms-block-field-title-2="Learn more link label" cms-block-field-type-2="content">Learn more about me</a>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_after_styling_tweaks),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:01,410 --> 00:00:06,780
It's time that our block gets a proper icon and its own block category.

2
00:00:07,830 --> 00:00:11,550
Select the section element and go to the WordPress panel.

3
00:00:12,870 --> 00:00:17,400
And here on the Block action we have an icon field.

4
00:00:18,390 --> 00:00:22,440
And click on browse icons and select Bootstrap icons.

5
00:00:23,190 --> 00:00:28,430
Bootstrap icons has a nice collection of SVG icons.

6
00:00:29,810 --> 00:00:31,395
So let's find something.

7
00:00:33,795 --> 00:00:34,975
This icon will work.

8
00:00:35,894 --> 00:00:40,125
Select it and copy the SVG code.

9
00:00:42,075 --> 00:00:49,815
Go back to Pinegrow and enter the SVG code directly in the icon field.

10
00:00:50,535 --> 00:00:53,504
Next, set the category field to custom.

11
00:00:54,635 --> 00:01:01,205
Then enter custom category ID cool_blocks.

12
00:01:02,415 --> 00:01:06,675
And because this category doesn't exist yet, we have to register it.

13
00:01:07,455 --> 00:01:14,895
So we click register category, and then we enter the name Cool blocks.

14
00:01:18,405 --> 00:01:23,005
Export the plugin, and let's test the page.

15
00:01:25,815 --> 00:01:31,340
If we do Add block, our block is no longer here in the text category,

16
00:01:34,440 --> 00:01:43,740
Down here we have our own Cool Blocks category,
and our block has this new icon to represent it.

`,this.addLesson(e)}lesson_14_Responsive(){var e=this.newLesson("responsive");e.name=`Make the block design responsive`,e.tags=["css"],e.short_description=`Use media queries and CSS grid to create the mobile layout.`,e.description=e.makeDesc("780422031",`<p>${e.short_description}</p>`,`<ol>
<li><b>${this.tooltip("Open a new page view","","field",".page-tab-header .icon-add")}</b> to see the page in desktop and mobile view.</li>
<li>Select the <b>${this.select("section")}</b> element.</li>
<li>Go to the <b>Style panel</b>.</li>
<li>Make sure the CSS rule <code>.cool-blocks-about-me</code> is selected.</li>
<li>Switch to the <b>${this.tooltip("MD size","","field","style:niga,.crsa-css-gui .pg-dm-sizes-control [data-size='MD']")}</b>.</li>
<li>Click on the <b>${this.tooltip("Create the rule","","field","style:niga,.crsa-css-gui .pg-css-editor-no-rule-overlay button")}</b> button.</li>
<li>Open the <b>CSS grid</b> editor.</li>
<li>Delete one of the grid <b>${this.showGridElement("columns",".pg-dm-grid-view-grid-col")}</b> so that only one column remains.</li>
<li>Switch to the rule <b>${this.showGridElement("(min-width: 769px) .cool-blocks-about-me",".crsa-field-rule")}</b>.</li>
<li>Click on the <b>${this.showGridElement("Create CSS grid",".create-grid")}</b> button.</li>
<li>Delete one column and set the other two to <code>2fr</code> and <code>3fr</code>. Set the </li>
<li>Set the <b>${this.showGridElement("row height",".pg-dm-grid-view-grid-row")}</b> to <code>auto</code>. Double-click on the field for dropdown of values.</li>
<li>Close the CSS grid editor.</li>
<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_after_styling_tweaks),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:02,400 --> 00:00:11,130
The block looks good on larger screens, but gets too squished on mobile devices.

2
00:00:12,780 --> 00:00:17,865
Let's use CSS media queries to make its design responsive.

3
00:00:18,570 --> 00:00:26,790
Open a new page view to see the page, both
in desktop and mobile view at the same time.

4
00:00:27,630 --> 00:00:32,409
And this is great time saver when working on responsive design.

5
00:00:33,570 --> 00:00:44,550
Select the section element and go to the Style panel and
make sure that the ".cool-blocks-about -me" rule is selected.

6
00:00:45,600 --> 00:00:47,280
So in this case it is not.

7
00:00:47,670 --> 00:00:49,710
So we select by clicking on it.

8
00:00:51,000 --> 00:00:56,790
The visual CSS editor has media size tabs at the top.

9
00:00:59,085 --> 00:01:01,065
Switch to the medium size.

10
00:01:01,065 --> 00:01:05,785
So we click on the medium tab to switch to the medium size.

11
00:01:07,054 --> 00:01:12,645
The CSS rule for this selector for this size does not yet exist.

12
00:01:13,664 --> 00:01:17,565
So that's why we click Create the rule button.

13
00:01:19,005 --> 00:01:38,850
Now we can see that we have a new ".cool-blocks-about-me" css rule
for the  media query that targets device sizes of 769 pixels and up.

14
00:01:39,750 --> 00:01:42,365
Now open the CSS grid editor.

15
00:01:43,085 --> 00:01:45,539
Let's move it so that we can see the page.

16
00:01:48,840 --> 00:01:56,340
And here we can see all CSS rules that apply to the selected element.

17
00:01:57,179 --> 00:02:04,710
And first, make sure to select the
".cool-blocks-about-me" rule without media query.

18
00:02:05,640 --> 00:02:12,300
And here, let's delete the second column so that we only have one column.

19
00:02:12,870 --> 00:02:16,230
And design in this case will become stacked.

20
00:02:16,710 --> 00:02:19,200
The image on top and the text on the bottom.

21
00:02:20,505 --> 00:02:33,615
Now switch to the CSS rule with the media query
for the medium size and click on Create CSS grid.

22
00:02:33,615 --> 00:02:46,425
Because we only need two columns, let's remove one and let's set the first
one to two fractions and the second one to three fraction so that the

23
00:02:46,425 --> 00:02:53,295
second column is a bit bigger than than the first column with the image.

24
00:02:54,555 --> 00:03:04,695
And here we also have fixed value for the row height,
and that's why the image kind of falls out of the grid.

25
00:03:05,535 --> 00:03:16,960
So instead we have to set it to auto so that the row
height is equal  to the largest element in the row.

26
00:03:17,710 --> 00:03:30,240
The result is that on medium and larger sizes, we use the layout with two
columns and on the sizes smaller than that, we use a simple one column layout.

27
00:03:31,950 --> 00:03:34,200
We can close the CSS grid editor.

28
00:03:34,200 --> 00:03:45,605
Now let's export the plugin and test our
page  in the editor, where it looks great.

29
00:03:47,795 --> 00:03:57,054
Let's also preview it on mobile where we have stacked layout.

30
00:03:57,564 --> 00:04:00,864
Go to tablet that is the medium size.

31
00:04:00,885 --> 00:04:02,745
And here we have two columns.

32
00:04:03,825 --> 00:04:04,425
Perfect.

`,this.addLesson(e)}lesson_15_InnerBlocks(){var e=this.newLesson("innerblocks",!0);e.name=`Let user add sub-blocks to the block`,e.tags=["wordpress"],isApp()||(e.requireProducts=["wppro"]),e.short_description=`Use Block Inner Content action to add an area for sub-blocks.`,e.description=e.makeDesc("780793233",`<p></p>`,`<ol>
<li>Open the <b>${this.tooltip("Insert","insert_menu")}</b> panel.</li>
<li>Drag <b>${this.showLibElement(this.showElement("div"),".crsa-factory-element-type-html-div")}</b> to the end of the DIV that contains the heading, bio and link.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Click on the <b>${this.showWPActionName("Block Inner Content",'[data-action="cms-block-inner-content"]')}</b> action to add it to the newly inserted DIV element.</li>
<li><b>Export the plugin</b>.</li>
<li>In the WordPress block editor you can now insert blocks into the inner content DIV.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p><a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
            </div>
        </section>
    </body>
</html>`),this.css_after_responsive=`.cool-blocks-about-me {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}

@media (min-width: 769px) {
    .cool-blocks-about-me {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto;
    }
}

.cool-blocks-about-me img {
    max-width: 100%;
    min-height: 340px;
    object-fit: cover;
    border-radius: 10px;
}`,e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_after_responsive),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,330 --> 00:00:04,380
Do you know that Gutenberg blocks can contain sub blocks?

2
00:00:04,890 --> 00:00:12,810
This is a very useful feature, and let's us add
a place for sub blocks to our about me block.

3
00:00:14,370 --> 00:00:23,850
Click on Insert to open the Library panel, and
then drag a DIV to the end of the second column.

4
00:00:24,690 --> 00:00:33,015
So if we check in the Tree panel, we should
have section with two left and right column.

5
00:00:33,525 --> 00:00:38,705
And this DIV should be at the bottom of the right column DIV.

6
00:00:39,165 --> 00:00:50,254
And now go to the WordPress panel and there click on the Block
Inner Content action to add to the newly inserted DIV element.

7
00:00:51,285 --> 00:00:56,205
This action marks the element that can contain sub blocks.

8
00:00:57,315 --> 00:01:02,835
Export the plugin and reload the editor page.

9
00:01:05,415 --> 00:01:09,915
We have to again recover the block because we changed its structure.

10
00:01:10,335 --> 00:01:20,825
And when our block is selected, we now have a plus add
blocks icon that lets us insert blocks into our block.

11
00:01:20,955 --> 00:01:26,235
So for example, we can add a heading.

12
00:01:32,645 --> 00:01:33,705
Or a list

13
00:01:41,365 --> 00:01:42,175
and so on.

14
00:01:43,115 --> 00:01:48,195
Blocks of any type can go here: lists, block quotes...

15
00:01:48,675 --> 00:01:54,175
We could even insert About me block into itself.

16
00:01:55,065 --> 00:01:57,720
We'll work on that in the next lesson.

17
00:01:58,320 --> 00:02:09,150
But just to mention, there is one limitation when it comes to inner
blocks, and that is that each block can have only one area for sub blocks.

18
00:02:10,530 --> 00:02:14,689
So we could not have more than one Block Inner Content action in our block.

19
00:02:14,689 --> 00:02:23,190
We could not create a DIV in the first column
and add Block Inner Content there as well.

20
00:02:23,940 --> 00:02:29,910
And this is not the limitation of Pinegrow, but it is limitation of WordPress.

`,this.addLesson(e)}lesson_16_SubblockLayout(){var e=this.newLesson("subblocklayout",!0);e.name=`Create the counter item`,e.tags=["css"],isApp()||(e.requireProducts=["wppro"]),e.short_description=`Use HTML and CSS to create the first counter item.`,e.description=e.makeDesc("780916700",`<p>${e.short_description}</p>`,`<ol>
<li>Open the <b>${this.tooltip("Insert","insert_menu")}</b> panel.</li>
<li><p>Type or copy-paste the following into the <b>${this.showLibElement("Insert code",".pg-code-insert")}</b>:</p>
<pre>
div
  span 10
  span Prizes
</pre>
</li>
<li>Drag <b>${this.showLibElement("the created HTML",".pg-code-insert .crsa-factory-element")}</b> inside the <b>${this.select("section")}</b> into the empty DIV.</li>
<li>Go to the <b>Style panel</b>.</li>
<li>Set <b>Padding</b> to <code>10px</code> on all sides.</li>
<li>Set <b>Background color</b> to light gray.</li>
<li>Set <b>Border radius</b> to <code>10px</code> for all corners.</li>
<li><b>Save the style</b> as a new CSS rule <code>.cool-blocks-about-me-counter</code>.</li>
<li>Select the <b>${this.select("first span",".cool-blocks-about-me-counter span:first-child")}</b> that contains the number 10.</li>
<li>Set its <b>Display</b> to <code>block</code> and <b>Font size</b> to <code>24px</code>.</li>
<li><b>Save the style</b> as a new CSS rule <code>.cool-blocks-about-me-counter-number</code>.</li>
<li>Select the <b>${this.select("second span",".cool-blocks-about-me-counter span:last-child")}</b> that contains the text Prizes.</li>
<li>Set its <b>Font size</b> to <code>16px</code>.</li>
<li><b>Save the style</b> as a new CSS rule <code>.cool-blocks-about-me-counter-label</code>.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
                <div data-empty-placeholder cms-block-inner-content></div>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_after_responsive),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,210 --> 00:00:06,330
We don't want the user to add just any type of blocks to the About Me block.

2
00:00:07,080 --> 00:00:17,760
The idea is to use counters to present person's achievements,
like 10 gold medals, 88 completed projects, and so on.

3
00:00:18,900 --> 00:00:24,330
First, we need to create the HTML structure for the counter.

4
00:00:25,710 --> 00:00:27,270
Open the Library panel.

5
00:00:30,210 --> 00:00:33,330
We will use insert code to add elements quickly.

6
00:00:33,960 --> 00:00:39,600
Let's type div to create a DIV that will represent our counter.

7
00:00:39,600 --> 00:00:43,740
Then we indent the next line with spaces and we say span 10.

8
00:00:44,310 --> 00:00:53,560
So we will have a SPAN with the text 10 and another span with the text prizes.

9
00:00:54,620 --> 00:01:03,630
And now grab and drag it inside the DIV with block inner content.

10
00:01:04,710 --> 00:01:11,160
Let's make the display larger so that we can see what is going on.

11
00:01:11,610 --> 00:01:15,720
And now we will use CSS to style the counter.

12
00:01:17,010 --> 00:01:23,880
With the DIV selected go to the Style panel and set padding to 10.

13
00:01:25,600 --> 00:01:28,875
Press SHIFT UP to get 10; on all four sides.

14
00:01:30,195 --> 00:01:36,675
Go to the background section and select a light gray background color.

15
00:01:40,365 --> 00:01:46,575
Set border radius to 10 on all four sides.

16
00:01:48,035 --> 00:01:51,075
The style is set on the style attribute.

17
00:01:51,675 --> 00:01:52,805
Let's save it.

18
00:01:54,245 --> 00:01:57,055
".cool-blocks-about-me-counter".

19
00:02:00,315 --> 00:02:05,775
Again, I clicked down here on the class of the parent to save me some typing.

20
00:02:06,945 --> 00:02:08,025
Let's say creat.

21
00:02:08,745 --> 00:02:20,835
Now select the first span with the number, and said it's text size to 24 pixel.

22
00:02:23,054 --> 00:02:30,105
And display property to block so that it goes into its own line.

23
00:02:30,614 --> 00:02:39,204
Save the style as .cool-blocks-about-me-counter-number".

24
00:02:40,375 --> 00:02:51,874
Select the second span with the text and set the font size to 16.

25
00:02:53,925 --> 00:03:02,495
Save the style as .cool-blocks-about-me-label".

26
00:03:05,565 --> 00:03:12,080
Let's toggle visual helpers to admire our counter item.

27
00:03:12,840 --> 00:03:18,045
In the next video we will create more of them and design a grid layout.

`,this.addLesson(e)}lesson_17_SubblockGrid(){var e=this.newLesson("subblockgrid",!0);e.name=`Use CSS grid for counters layout`,e.tags=["css"],isApp()||(e.requireProducts=["wppro"]),e.short_description=`Use the CSS grid editor to create a three column grid for counters.`,e.description=e.makeDesc("780793414",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("counter <div>",".cool-blocks-about-me-counter")}</b> and <b>duplicate</b> the element to create <code>4</code> copies.</li>
<li>Select the <b>${this.select("parent <div>","div[cms-block-inner-content]")}</b> that contains counters (the element with Block Inner Content action).</li>
<li>Open the <b>CSS grid</b> editor.</li>
<li>Click on the <b>${this.showGridElement("Create CSS grid",".create-grid")}</b> button.</li>
<li>Set the <b>${this.showGridElement("row height",".pg-dm-grid-view-grid-row")}</b> to <code>None</code>.</li>
<li>Click on the <b>${this.showGridElement("Auto columns and rows...",".show-more")}</b> to reveal more settings.</li> 
<li>Set the <b>${this.showGridElement("Auto rows",".crsa-field-auto_row")}</b> to <code>auto</code>.</li>
<li>Set the <b>${this.showGridElement("gap",".crsa-field-gap")}</b> to <code>15px</code>.</li>
<li>Close the CSS grid editor.</li>
<li>Go to the <b>Style panel</b> and set <b>Margin top</b> to <code>40px</code>.</li>
<li><b>Save the style</b> as a new CSS rule <code>.cool-blocks-about-me-counters</code>.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
                <div cms-block-inner-content>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",`.cool-blocks-about-me {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}

@media (min-width: 769px) {
    .cool-blocks-about-me {
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-template-rows: auto;
    }
}

.cool-blocks-about-me img {
    max-width: 100%;
    min-height: 340px;
    object-fit: cover;
    border-radius: 10px;
}

.cool-blocks-about-me-counter {
    padding: 10px;
    background-color: #efeded;
    border-radius: 10px;
}

.cool-blocks-about-me-counter-number {
    display: block;
    font-size: 24px;
}

.cool-blocks-about-me-counter-label {
    font-size: 16px;
}`),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,960 --> 00:00:06,510
And remember to turn on visual helpers if you previously disabled them.

2
00:00:09,570 --> 00:00:16,470
So now we will use CSS Grid to create an
attractive grid layout for the counters.

3
00:00:17,100 --> 00:00:24,840
First, select the Counter DIV, and then
use Duplicate to create four more copies.

4
00:00:29,220 --> 00:00:31,320
Now select the parent DIV.

5
00:00:32,759 --> 00:00:43,400
That is the element with Block inner Content Action
and open the CSSgrid editor, click on Create CSS grid.

6
00:00:45,090 --> 00:00:48,120
The three column layout works okay here.

7
00:00:48,120 --> 00:00:49,590
So we, we will leave it as it.

8
00:00:51,000 --> 00:00:57,180
And then for the rows, we will not have a fixed number of rows.

9
00:00:57,180 --> 00:01:04,890
The inner blocks area here can contain as many counters as we want.

10
00:01:05,580 --> 00:01:19,480
So instead of specifying individual roles, we will just click here and say
none, which means we don't want to define template for individual rows.

11
00:01:20,250 --> 00:01:23,715
We only want to define template for columns.

12
00:01:24,825 --> 00:01:39,465
And then to handle rows, we click on Auto columns in rows, and then
we set the Auto row field to auto, which means that rows will be

13
00:01:39,555 --> 00:01:47,470
automatically created based on the number of elements in the grid.

14
00:01:48,780 --> 00:02:00,630
These rows that are automatically created should have the size auto,
which means they should be as big as the largest element they contain.

15
00:02:02,850 --> 00:02:08,264
And then let's just set the grid gap to 15.

16
00:02:10,530 --> 00:02:12,940
And it looks quite good.

17
00:02:12,959 --> 00:02:15,885
So we can close the CSS grid editor.

18
00:02:18,864 --> 00:02:30,785
Let's turn off visual helpers so that up here we can
notice there is not enough gap on the top of counters.

19
00:02:32,345 --> 00:02:46,165
Keeping the DIV that contains the counters, the one with
the grid, selected, we go to the Style panel and then add

20
00:02:46,204 --> 00:02:55,755
margin on the top 40 pixels will do and save the style.

21
00:02:56,035 --> 00:03:05,185
Use a new CSS role with the name ".cool-blocks-about-me-counters".

22
00:03:06,045 --> 00:03:11,400
Again, I save myself some typing by clicking on the name.

23
00:03:12,260 --> 00:03:16,435
Create the rule and our layout is complete.

`,this.addLesson(e)}lesson_18_SubblockCreateBlock(){var e=this.newLesson("counterblock",!0);e.name=`Create the Counter Block`,e.tags=["wordpress"],isApp()||(e.requireProducts=["wppro"]),e.short_description=`Use the Block action to define the Counter custom block.`,e.description=e.makeDesc("780793729",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("counter <div>",".cool-blocks-about-me-counter")}</b></li>
<li>Switch to the <b>WordPress panel</b>.</li>
<li>Click on the <b>${this.showWPActionName("Block",'[data-action="cms-block"]')}</b> action to add it to the selected element.</li>
<li>Set the <b>${this.showWPActionField("Unique id","cms-block")}</b> to <code>about-me-counter</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block","title")}</b> to <code>About me counter</code>.</li>
<li>Set the <b>${this.showWPActionField("Category","cms-block","category")}</b> field to <code>Custom</code>.</li>
<li>Set the <b>${this.showWPActionField("Custom category id","cms-block","category-custom")}</b> to <code>cool_blocks</code>.</li>

<li>Select the <b>${this.select("counter number <span>",".cool-blocks-about-me-counter-number")}</b>.</li>
<li>Add the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>number</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title")}</b> to <code>Number</code>.</li>

<li>Select the <b>${this.select("counter label <span>",".cool-blocks-about-me-counter-label")}</b>.</li>
<li>Add the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>label</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","Label")}</b> to <code>Label</code>.</li>

<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
                <div cms-block-inner-content class="cool-blocks-about-me-counters">
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>`),this.css_with_subblocks=`.cool-blocks-about-me {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}

@media (min-width: 769px) {
    .cool-blocks-about-me {
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-template-rows: auto;
    }
}

.cool-blocks-about-me img {
    max-width: 100%;
    min-height: 340px;
    object-fit: cover;
    border-radius: 10px;
}

.cool-blocks-about-me-counter {
    padding: 10px;
    background-color: #efeded;
    border-radius: 10px;
}

.cool-blocks-about-me-counter-number {
    display: block;
    font-size: 24px;
}

.cool-blocks-about-me-counter-label {
    font-size: 16px;
}

.cool-blocks-about-me-counters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    gap: 15px;
    margin-top: 40px;
}`,e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_with_subblocks),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,930 --> 00:00:05,700
All that is left for us to do is to create the counter block.

2
00:00:06,780 --> 00:00:12,570
Select the first counter DIV and go to WordPress panel.

3
00:00:14,310 --> 00:00:18,030
To create a block, we use the Block action.

4
00:00:19,650 --> 00:00:25,380
Click on the Block action to add it to the first counter.

5
00:00:27,700 --> 00:00:49,004
Set the unique ID to about-me-counter and title to "About me counter"
and category to custom, and then category ID should be cool_blocks.

6
00:00:50,004 --> 00:00:59,040
No need to register the category because we already
registered on the About me block definition.

7
00:00:59,940 --> 00:01:02,520
Now let's make the block editable.

8
00:01:02,940 --> 00:01:09,180
Select the span with the number and add Block attributes action.

9
00:01:09,930 --> 00:01:15,510
Attribute ID should be number, and the title should be Number as well.

10
00:01:16,770 --> 00:01:22,230
Select the span with the label and again, add Block attributes.

11
00:01:23,895 --> 00:01:28,475
The ID should be label and the title Label.

12
00:01:30,315 --> 00:01:36,045
Export the plugin and reload the page in the editor.

13
00:01:36,945 --> 00:01:43,605
Of course, we have to Attempt black block recovery
again because we change the structure of the block.

14
00:01:45,585 --> 00:01:51,085
And now here we have our counters that are fully editable.

15
00:01:55,515 --> 00:02:13,075
And nice thing with using sub locks is we can also easily reorder
them either here or we can use the structure panel to reorder them.

16
00:02:13,075 --> 00:02:23,864
To add new one counter we click on the add block button.

17
00:02:23,864 --> 00:02:33,945
We need to find the counter block to add a new one to the parent block.

18
00:02:34,575 --> 00:02:42,600
This is not so user friendly: clicking on add block
and then having to search for the counter block.

19
00:02:43,640 --> 00:02:49,920
About Me block is supposed to be only with counters as sub blocks.

20
00:02:49,920 --> 00:03:00,600
So is there any way to prevent all of these other blocks
showing up and the user having to search for the counter?

21
00:03:01,170 --> 00:03:04,380
Yes, it's possible and we will do this next.

`,this.addLesson(e)}lesson_19_SubblockTemplate(){var e=this.newLesson("subblockparents",!0);e.name=`Parents and allowed blocks`,e.tags=["wordpress"],e.short_description=`Simplify content editing by only showing Counters when editing the About me block.`,e.description=e.makeDesc("780793988",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("counter <div>",".cool-blocks-about-me-counter")}</b></li>
<li>Switch to the <b>WordPress panel</b>.</li>
<li>Open the <b>${this.showWPAction("More options",`[data-action="cms-block"] .pg-action-section .icon-right`,!0)}</b> section.</li>
<li>Set the <b>${this.showWPActionField("Parents","cms-block","parents")}</b> to <code>about-me</code>.</li>

<li>Select the <b>${this.select("parent <div>","div[cms-block-inner-content]")}</b> that contains counters (the element with Block Inner Content action).</li>
<li>Set the <b>${this.showWPActionField("Allowed","cms-block-inner-content","allowed")}</b> to <code>about-me-counter</code>.</li>

<li><b>Export the plugin</b> and test the block.</li>
</ol>
`),e.addPage("index.html",`<!doctype html>
<html wp-template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/normalize.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
                <div cms-block-inner-content class="cool-blocks-about-me-counters">
                    <div class="cool-blocks-about-me-counter" cms-block="about-me-counter" cms-block-title="About me counter" cms-block-category="custom" cms-block-category-custom="cool_blocks"><span class="cool-blocks-about-me-counter-number" cms-block-field="number" cms-block-field-type="content" cms-block-field-title="Number">10</span><span class="cool-blocks-about-me-counter-label" cms-block-field="label" cms-block-field-type="content" cms-block-field-title="Label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                    <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_with_subblocks),e.addPage("pinegrow.json",this.pinegrow_json),e.subtitles=`1
00:00:00,240 --> 00:00:04,380
Using counter blocks on their own doesn't make much sense.

2
00:00:04,740 --> 00:00:10,130
They rely on layout and styling of the About Me block to be shown correctly.

3
00:00:10,510 --> 00:00:17,700
The best way is to only show counter blocks
when the user is working on the About Me Block.

4
00:00:18,330 --> 00:00:27,150
To do that, select the Counter DIV, where we
have the block action that defines the counter.

5
00:00:29,925 --> 00:00:36,515
And here in the more options section we have the Parents field.

6
00:00:37,245 --> 00:00:42,795
That takes the list of block types into which our block can be inserte.

7
00:00:44,225 --> 00:00:52,785
Set the parents to about-me, because Counter
can only be inserted into the About me block.

8
00:00:53,565 --> 00:00:59,565
We can also limit the inner content section to only contain certain block types.

9
00:01:00,255 --> 00:01:08,095
So select the parent DIV; and we can use breadcrumbs down
here to select elements or we can use the Tree panel.

10
00:01:08,805 --> 00:01:18,164
So we have to select the DIV with Block Inner
Content action that contains our counter blocks.

11
00:01:18,375 --> 00:01:26,520
Here we have a Allowed field that lists the blocks
that are allowed in this inner content section.

12
00:01:27,360 --> 00:01:35,399
Set Allowed to about-me-counter because only counter blocks are allowed here.

13
00:01:36,330 --> 00:01:40,850
Export the plugin and reload the editor.

14
00:01:42,920 --> 00:01:44,220
Let's select the block.

15
00:01:44,940 --> 00:01:51,110
And now when we click on the add block icon a Counter is automatically added.

16
00:01:53,175 --> 00:02:00,835
Without WordPress asking us what types, what block do we wish to add.

17
00:02:00,835 --> 00:02:04,260
We can add as many as we want and rearranging them.

18
00:02:04,740 --> 00:02:06,789
It's quite fun.

19
00:02:07,910 --> 00:02:13,675
We can even imagine building a simple puzzle game with this effect.

20
00:02:15,115 --> 00:02:17,315
There is one more thing to mention.

21
00:02:17,954 --> 00:02:19,385
Let's go back to Pinegrow.

22
00:02:20,385 --> 00:02:29,970
Pinegrow uses the HTML structure of the inner
content element as a template  for the parent block.

23
00:02:30,840 --> 00:02:41,310
For example, here we have five elements and we can collapse all of them
by ALT clicking on the collapse icon, so we collapse the whole level.

24
00:02:41,790 --> 00:02:47,670
We have five elements in the block, inner content section.

25
00:02:48,975 --> 00:03:05,654
So when we add a new About Me block to the page, it comes with
five counter blocks already added to the inner content area.

26
00:03:06,435 --> 00:03:07,994
So congratulations.

27
00:03:08,535 --> 00:03:13,695
You now know how to build powerful custom Gutenberg blocks from scratch.

28
00:03:14,834 --> 00:03:20,450
This is just the tip of the iceberg of all the features available in Pinegrow.

29
00:03:21,150 --> 00:03:24,930
Check out the rest of our tutorials to learn more.

`,this.addLesson(e)}lesson_20_Finished(){var e=this.newLesson("finished");e.name=`Making the block responsive`,e.tags=["wordpress"],e.description=e.makeDesc("483417920",`<p>Create a mobile layout for the block.</p>`,`<ol>
</ol>
`),e.addPage("index.html",`<!doctype html>
                <html wp-template>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="css/normalize.css" rel="stylesheet"/>
                    <link href="css/style.css" rel="stylesheet"/>
                    </head>
                <body>
                <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="css/style.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
                    <div>
                        <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
                    </div>
                    <div>
                        <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                        <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                        <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
                        <div cms-block-inner-content class="cool-blocks-about-me-counters" cms-block-inner-content-allowed="about-me-counter">
                            <div class="cool-blocks-about-me-counter" cms-block="about-me-counter" cms-block-title="About me counter" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-parent="about-me"><span class="cool-blocks-about-me-counter-number" cms-block-field="number" cms-block-field-type="content" cms-block-field-title="Number">10</span><span class="cool-blocks-about-me-counter-label" cms-block-field="label" cms-block-field-type="content" cms-block-field-title="Label">Prizes</span>
                            </div>
                            <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                            </div>
                            <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                            </div>
                            <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                            </div>
                            <div data-pg-collapsed class="cool-blocks-about-me-counter"><span class="cool-blocks-about-me-counter-number">10</span><span class="cool-blocks-about-me-counter-label">Prizes</span>
                            </div>
                        </div>
                    </div>
                </section>
                </body>
            </html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("css/style.css",this.css_with_subblocks),e.addPage("pinegrow.json",this.pinegrow_json),this.addLesson(e)}lessonDemo(){var e=this.newLesson("intro"),l=(e.name=`Meet the h1 element`,e.display_title=`Meet the h1 element`,e.description=e.makeDesc("483417920",`<p>The ${this.showElement("h1")} (Heading 1) element is used for the main heading (title) of the page.</p>`,`<p>Add the heading to Blotomic's message:</p>
                    <ol>
                    <li><b>Drag the H1 element</b> to the top of the message:<br>${e.getHtmlForLibButton(this.tag("h1","Change me!"),"<h1>Change me!</h1>",null,null,"body > h1:first-child","Place the H1 at the top of the yellow box.")}</li>
                    <li>Make sure that the ${this.select("H1 element","h1")} is selected on the page (selected element has a blue border and a menu). Click on the element to select it.</li>
                    <li><b>Activate the text editor</b> by clicking on the ${this.tooltip("text editor","edit_text")} icon in the blue menu above the H1 element.</li>
                    <li><b>Change the text</b> in the heading. For example, write <code>A special message</code>.</li>
                    <li>Click on the <b>${this.tooltip("Done button","edit_text_done")}</b> in the blue Text edit menu above the element when you're done with changing the text.</li>
                    <li><b>Open the ${this.tooltip("code editor","code_editor")}</b> to see how the H1 element looks in the code.</li>
                    <!-- <li><b>Change the text</b> of the title using the code editor.</li> -->
        </ol>
        `),e.addPage("index.html",`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link href="style.css" rel="stylesheet">
        </head><body><p>Hello! My name is Blotomic. Welcome to HTML Planet! Here you will get to learn HTML and CSS. We also have many fun adventures for you. With the help of HTML Planet you'll be able to make super cool websites in no time! Good luck, I hope you'll enjoy it!</p></body></html>`),e.addStylesheet("style.css",""),`<br><br>Use the ${this.tooltip("structure panel","structure")} to fix the problem.`);e.onCheck=function(e,t){var o=null,s=e.sourceNode.find("h1");0===s.length?o="There is <b>no H1 element</b> on the page.":1<s.length?o=`There should be <b>only one H1</b> on the page. `+l:0<=s[0].text().toLowerCase().indexOf("change me")?o="Use the Text edit tool to change the title of the message.":s[0].validateTree().length?o="The H1 element has <b>code errors</b>. Go to the code editor and check for missing &lt; and &gt; or incorrectly closed tags.":0===s[0].text().trim().length?o="The H1 needs some text.":s[0].prev()&&(o="The H1 element should be <b>at the top of the yellow page</b>."),o?(t.result="error",t.message=o):t.result="ok"},this.addLesson(e)}}new o})});