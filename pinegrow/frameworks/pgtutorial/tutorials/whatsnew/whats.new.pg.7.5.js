$(function(){$("body").one("pinegrow-ready",function(e,t){class i extends PgTutorialWhatsNew{constructor(){super(isApp()?"7.5":"1.0.11","Learn how to use a powerful new WordPress Block Condition action and new way of using Design panel background images in Tailwind CSS."),this.lesson_BlockCondition(),this.lesson_BlockConditionWeatherCard(),this.lesson_BlockConditionRating(),this.lesson_TailwindBackgroundImage(),this.lesson_ReleaseNotes("https://pinegrow.com/release_notes/pinegrow-web-editor-7-5-may-29-2023/")}lesson_BlockCondition(){var e=this.newLesson("insertpanel");e.name="Displaying optional link with Block Condition",e.short_description="Use Block Condition action to display linked heading only if link is set.",e.tags=["wordpress"],e.description=e.makeDesc("828539210",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("h2")}</b> element and <b>Duplicate</b> it.</li>
<li><b>Remove the link</b> on the <b>${this.select("second h2","h2:nth-of-type(2)")}</b>.</li>
<li>Click on the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action to add it to the <b>${this.select("second h2","h2:nth-of-type(2)")}</b>.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>card_title</code>. No need to set the Title because the attribute is already defined on the first H2.</li>

<li>Select the <b>${this.select("first h2","h2")}</b> element.</li>
<li>Add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action to the selected heading.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-condition","")}</b> to <code>card_link</code> to show the heading if the Card link is set.</li>

<li>Select the <b>${this.select("second h2","h2:nth-of-type(2)")}</b> element.</li>
<li>Add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action to the selected heading.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-condition","")}</b> to <code>card_link</code>.</li>
<li>Check the <b>${this.showWPActionField("Not","cms-block-condition","not")}</b> to show the heading if the link is NOT set.</li>

<li><b>Export the plugin</b> <code>Card Link Example</code>, activate it in WordPress and test the block.${isApp()?" Note, you will have to select the export folder before the first export.":""}</li>
</ol>
`),this.addWPSettings(e,"plugin","Card Link Example","card_link_example"),e.addPage("index.html",`<!DOCTYPE html> 
<html lang="en" wp-template> 
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
        <div class="card" cms-block="card" cms-block-title="Card Link Example" cms-block-style="style.css">
            <h2><a href="" cms-block-field="card_link" cms-block-field-type="link" cms-block-field-title="Card link" cms-block-field-2="card_title" cms-block-field-title-2="Card title" cms-block-field-type-2="content">Card title</a></h2>
        </div>
    </body>     
</html>`),e.addStylesheet("style.css",`
.card {
    max-width: 540px; 
    padding: 20px; 
    margin-left: auto; 
    margin-right: auto; 
    border-radius: 5px; 
    border: 1px solid rgba(0, 0, 0, 0.64);
}`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.subtitles=`1
00:00:01,000 --> 00:00:07,000
In this example, we have a card block with a block action that defines a custom Gutenberg block.

2
00:00:07,000 --> 00:00:11,000
Inside the card, there's an h2 containing a link.

3
00:00:11,000 --> 00:00:17,000
This link has two editable attributes, card link, which is the URL where the link points to,

4
00:00:17,000 --> 00:00:21,000
and card title, which controls the content of the title element.

5
00:00:21,000 --> 00:00:24,000
Our goal is to make the link optional.

6
00:00:24,000 --> 00:00:29,000
If there's no link defined on the block, we don't want to show the link element.

7
00:00:29,000 --> 00:00:34,000
Instead, we prefer to display a simple h2 with the card title attribute.

8
00:00:34,000 --> 00:00:38,000
Let's see how to do this using the new block condition action.

9
00:00:38,000 --> 00:00:42,000
First, select the h2 element and duplicate it.

10
00:00:42,000 --> 00:00:44,000
We'll have two different h2 titles.

11
00:00:45,000 --> 00:00:50,000
One will contain the link, and the other will be a plain h2 without a link.

12
00:00:50,000 --> 00:00:58,000
Now, let's remove the existing link from the h2 element by going to the properties panel and clicking the Remove Link button.

13
00:00:58,000 --> 00:01:02,000
However, this also removed the card title attribute.

14
00:01:02,000 --> 00:01:09,000
To fix this, keep the h2 selected, and in the WordPress panel, use the block attributes action.

15
00:01:09,000 --> 00:01:14,000
Use the same attribute defined on the first h2, which is card title.

16
00:01:14,000 --> 00:01:21,000
There's no need to specify the title field because the card title attribute is already defined on the first h2 element.

17
00:01:21,000 --> 00:01:28,000
On the second h2 element, we only want to use the value of this attribute as the content of the h2.

18
00:01:28,000 --> 00:01:33,000
Currently, both titles would always be displayed, which is not what we want.

19
00:01:33,000 --> 00:01:38,000
Let's select the first h2 and add a block condition action.

20
00:01:38,000 --> 00:01:41,000
The attribute ID should be card link.

21
00:01:41,000 --> 00:01:45,000
This will make the h2 visible only if the card link attribute is set.

22
00:01:45,000 --> 00:01:52,000
Then, on the second h2, we'll add a block condition again, using the card link attribute.

23
00:01:52,000 --> 00:01:57,000
This time, we'll negate the expression and select the Not option.

24
00:01:57,000 --> 00:02:02,000
This means that the second h2 will be displayed when the card link is not set.

25
00:02:02,000 --> 00:02:05,000
So, we have two conditions.

26
00:02:05,000 --> 00:02:14,000
The first h2 is displayed when the card link is set, and the second h2 without a link is displayed when the card link attribute is not set.

27
00:02:14,000 --> 00:02:18,000
Now, let's test and export the plugin.

28
00:02:18,000 --> 00:02:23,000
The first time we export the project, we need to select the export folder.

29
00:02:23,000 --> 00:02:30,000
Open theme settings and navigate to the plugin folder within the plugins folder of your local WordPress installation.

30
00:02:30,000 --> 00:02:38,000
I've previously created this folder, but if it doesn't exist, create the folder where the plugin will be exported, and then select it.

31
00:02:38,000 --> 00:02:41,000
Save the settings.

32
00:02:41,000 --> 00:02:46,000
Export the plugin, and notice that the plugin file was added to the project.

33
00:02:46,000 --> 00:02:53,000
Now, we can go to our WordPress dashboard, where we have the cardLink example plugin listed among the plugins.

34
00:02:53,000 --> 00:03:00,000
Let's activate it and go to a page to try it out.

35
00:03:00,000 --> 00:03:05,000
Insert the cardLink example, and here it is.

36
00:03:05,000 --> 00:03:13,000
We can set the title, and notice that it's just an h2 with no link at the moment, because the link is not selected.

37
00:03:13,000 --> 00:03:19,000
If we select a link, the first h2 is displayed, the one that contains the link.

38
00:03:19,000 --> 00:03:29,000
This way, as far as the content editor is concerned, they'll always see just one h2, either with a link or without a link, depending on the value of the card link attribute.

`,this.addLesson(e)}lesson_BlockConditionWeatherCard(){var e=this.newLesson("weathercard");e.name="Weather Card with conditional images",e.short_description="Use Block Condition action to display images based on the attribute value.";e.tags=["wordpress"],e.description=e.makeDesc("828539283",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("first SVG rain icon","svg.bi-cloud-rain-heavy")}</b> element.</li>
<li>Switch to the <b>WordPress panel</b>.</li>
<li>Add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action to the selected icon.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-condition","")}</b> to <code>Weather type</code>.</li>
<li>Set the <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> to <code>Rainy</code>.</li>
<li>Select the <b>${this.select("SVG cloudy icon","svg.bi-cloud")}</b> and add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action with the <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> set to <code>Cloudy</code>.</li>
<li>Select the <b>${this.select("SVG sun with clouds icon","svg.bi-cloud-sun")}</b> and add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action with the <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> set to <code>Sun &amp; Clouds</code>.</li>
<li>Select the <b>${this.select("SVG sun icon","svg.bi-sun")}</b> and add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action with the <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> set to <code>Sunny</code>.</li>
<li><b>Export the plugin</b> <code>${"Weather Card"}</code>, activate it in WordPress and test the block.${isApp()?" Note, you will have to select the export folder before the first export.":""}</li>
</ol>
`),this.addWPSettings(e,"plugin","Weather Card","weather_card"),e.addPage("index.html",`<!DOCTYPE html> 
<html lang="en" wp-template> 
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
        <div class="weather-card" cms-block="weather-card" cms-block-title="Post weather" cms-block-style="style.css" cms-block-description="Display the weather at the time the post was published.">
            <div class="row" style="display: flex; justify-content: space-between; align-items: center;">
                <div class="col">
                    <h2>Post Weather</h2>
                    <p class="type" cms-block-field="type" cms-block-field-type="content" cms-block-field-title="Weather type" cms-block-field-control="select" cms-block-field-values="Sunny
Sun & Clouds
Cloudy
Rainy">Sunny</p>
                    <p class="temperature" cms-block-field="temperature" cms-block-field-type="content" cms-block-field-title="Temperature" cms-block-field-control="input" cms-block-field-expression="{{ temperature }}℃">30℃</p>
                </div>
                <div class="col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-rain-heavy" viewBox="0 0 16 16">
                        <path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
                        <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
                        <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>
                </div>
            </div>
        </div>
    </body>     
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("style.css",`
.weather-card {
    max-width: 540px; 
    padding: 20px 40px 20px 20px; 
    margin-left: auto; 
    margin-right: auto; 
    border-radius: 5px; 
    border: 1px solid rgba(0, 0, 0, 0.64); 
}

.weather-card svg {
    width: 100px; 
    height: 100px; 
    display: block;
}

.weather-card .type {
    font-size: 40px; 
    margin-top: 0; 
    margin-bottom: 20px;
}

.weather-card .temperature {
    font-size: 60px; 
    margin-bottom: 0; 
    margin-top: 10px; 
    font-weight: 900;
}

.weather-card h2 {
    text-transform: uppercase; 
    opacity: 0.5;
}`),e.subtitles=`1
00:00:01,000 --> 00:00:04,000
Here's a custom Gutenberg blog that shows the weather.

2
00:00:04,000 --> 00:00:10,000
It has a temperature attribute with an expression that adds degrees Celsius to the attribute value.

3
00:00:10,000 --> 00:00:18,000
It also has a type property, which is a select with values like sunny, sun and clouds, cloudy and rainy.

4
00:00:18,000 --> 00:00:23,000
Now, we want to display an appropriate icon based on the selected type value.

5
00:00:23,000 --> 00:00:27,000
We'll use the new block condition action for this.

6
00:00:27,000 --> 00:00:30,000
First, let's select the rainy icon.

7
00:00:30,000 --> 00:00:32,000
Add a block condition action.

8
00:00:32,000 --> 00:00:36,000
Set the attribute ID to weather type and the value to rainy.

9
00:00:37,000 --> 00:00:40,000
Next, do the same for the cloudy weather.

10
00:00:40,000 --> 00:00:44,000
Attribute ID is type and the value is cloudy.

11
00:00:44,000 --> 00:00:46,000
Repeat this step.

12
00:00:47,000 --> 00:00:53,000
Make sure to use the same values as defined in the type attribute, sun and clouds, sun and clouds.

13
00:00:53,000 --> 00:00:59,000
Lastly, for the sunny icon, add a block condition with the attribute type and the value as sunny.

14
00:01:00,000 --> 00:01:07,000
We've used the block condition action on each icon to display it only when the attribute type value matches the icon.

15
00:01:08,000 --> 00:01:10,000
Now let's export the plugin.

16
00:01:10,000 --> 00:01:12,000
Select the export folder.

17
00:01:12,000 --> 00:01:14,000
I've created one beforehand.

18
00:01:14,000 --> 00:01:17,000
If you haven't, create a folder and select it.

19
00:01:17,000 --> 00:01:19,000
Then, export the plugin.

20
00:01:19,000 --> 00:01:25,000
The plugin is exported and the main PHP file for the plugin is generated and placed in the project.

21
00:01:26,000 --> 00:01:29,000
Go to the WordPress dashboard and click on plugins.

22
00:01:29,000 --> 00:01:31,000
Activate our weather card.

23
00:01:32,000 --> 00:01:34,000
Let's use the block on a sample page.

24
00:01:34,000 --> 00:01:36,000
Here is our post weather block.

25
00:01:36,000 --> 00:01:37,000
Let's test it.

26
00:01:38,000 --> 00:01:42,000
For temperature, enter the value without the Celsius, like 20.

27
00:01:42,000 --> 00:01:45,000
Then, try sunny, sun with clouds.

28
00:01:45,000 --> 00:01:48,000
Cloudy and rainy.

29
00:01:48,000 --> 00:02:15,000
In this way, we've used the block condition action to display the correct icon for the weather type attribute.

`,this.addLesson(e)}lesson_BlockConditionRating(){var e=this.newLesson("ratingcard"),t=(e.name="Star rating card",e.short_description="Use Block Condition action to implement a star rating card with customizable icon.","Star Rating Card");e.tags=["wordpress"],e.description=e.makeDesc("828539346",`<p>${e.short_description}</p>`,`<ol>
<li>Use ${pgShowKbd("CMD")} + Click to select all 5 <b>${this.select("full stars","svg.bi-star-fill")}</b>.</li>
<li>Switch to the <b>WordPress panel</b>.</li>

<li>Add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action to the selected stars.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-condition","")}</b> to <code>Rating</code>.</li>
<li>Set the <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> to <code>1</code>.</li>
<li>Set the <b>${this.showWPActionField("Operator","cms-block-condition","operator")}</b> to <code>&gt;= (larger or equal)</code>.</li>

<li>Now, select each <b>${this.select("full star","svg.bi-star-fill")}</b> one by one and set their <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> field on the Block Condition action to <code>1, 2, 3, 4, 5</code> respectively.</li>


<li>Use ${pgShowKbd("CMD")} + Click to select all 5 <b>${this.select("empty stars","svg.bi-star")}</b>.</li>
<li>Add the <b>${this.showWPActionName("Block Condition",'[data-action="cms-block-condition"]')}</b> action to the selected stars.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-condition","")}</b> to <code>Rating</code>.</li>
<li>Set the <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> to <code>1</code>.</li>
<li>Set the <b>${this.showWPActionField("Operator","cms-block-condition","operator")}</b> to <code>&lt; (smaller)</code>.</li>

<li>Now, select each <b>${this.select("empty star","svg.bi-star")}</b> one by one and set their <b>${this.showWPActionField("Value","cms-block-condition","value")}</b> field on the Block Condition action to <code>1, 2, 3, 4, 5</code> respectively.</li>

<li><b>Export the plugin</b> <code>${t}</code>, activate it in WordPress and test the block.${isApp()?" Note, you will have to select the export folder before the first export.":""}</li>
</ol>

<h3>Bonus task: Make the icons editable</h3>
<ol>
<li>Use ${pgShowKbd("CMD")} + Click to select all 5 <b>${this.select("full stars","svg.bi-star-fill")}</b>.</li>
<li>Click on the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action to add it to the selected icons.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>icon_full</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title")}</b> to <code>Icon full</code>.</li>

<li>Use ${pgShowKbd("CMD")} + Click to select all 5 <b>${this.select("empty stars","svg.bi-star")}</b>.</li>
<li>Click on the <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]')}</b> action to add it to the selected icons.</li>
<li>Set the <b>${this.showWPActionField("Attribute id","cms-block-field")}</b> to <code>icon_empty</code>.</li>
<li>Set the <b>${this.showWPActionField("Title","cms-block-field","title")}</b> to <code>Icon empty</code>.</li>

<li>Enable Inline SVG support for Blocks in Theme / Plugin Settings if you wish to use inline SVG icons.</li>

<li><b>Export the plugin</b> and test the block.</li>

</ol>
`),this.addWPSettings(e,"plugin",t,"star_rating_card"),e.addPage("index.html",`<!DOCTYPE html> 
<html lang="en" wp-template> 
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
        <div class="star-rating-card" cms-block="star-rating-card" cms-block-title="Star Rating Card" cms-block-style="style.css" cms-block-field="rating" cms-block-field-type="none" cms-block-field-title="Rating" cms-block-field-control="input">
            <h2>Rating</h2>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
            </div>
        </div>
    </body>     
</html>`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.addStylesheet("style.css",`

.star-rating-card {
    max-width: 540px; 
    padding: 20px; 
    margin-left: auto; 
    margin-right: auto; 
    border-radius: 5px; 
    border: 1px solid rgba(0, 0, 0, 0.64);
}

.star-rating-card div {
    display: flex;
    gap: 3px;
}

.star-rating-card svg {
    width: 30px;
    height: 30px;
    color: orange;
}`),e.subtitles=`1
00:00:01,000 --> 00:00:07,000
We'll use the block condition action to create a simple star rating block. Let's see what we have here.

2
00:00:08,000 --> 00:00:15,000
We've got a block action that defines our star rating card, with a CSS style containing the styling for the block.

3
00:00:16,000 --> 00:00:20,000
The card has a rating attribute, which is a value from 1 to 5.

4
00:00:21,000 --> 00:00:24,000
Our goal is to display stars based on this rating value.

5
00:00:24,000 --> 00:00:31,000
First, we need to ensure enough full stars are displayed. If the rating is 3, then 3 stars should be displayed.

6
00:00:32,000 --> 00:00:35,000
If it's 5, 5 stars should be displayed, and so on.

7
00:00:37,000 --> 00:00:40,000
To do this, we'll use Pinegrow's multi-select feature.

8
00:00:41,000 --> 00:00:48,000
First, select the first full star, then hold down Command, or Control on Windows and Linux, and click the rest of the full stars.

9
00:00:48,000 --> 00:00:55,000
Next, click on block condition action. This adds the action to all selected elements. We'll use the rating attribute.

10
00:00:57,000 --> 00:01:00,000
Let's say the value is 1, then we can choose an operator.

11
00:01:01,000 --> 00:01:07,000
Here we'll select larger or equal. The first star will be displayed if the rating is larger or equal to 1.

12
00:01:08,000 --> 00:01:15,000
For the second star, the value should be 2, since we want to display this star only if the rating is greater or equal to 2.

13
00:01:15,000 --> 00:01:22,000
For the third star, the value is 3, for the fourth, it's 4, and for the fifth star, the value is 5.

14
00:01:23,000 --> 00:01:25,000
Now let's do something similar for the empty stars.

15
00:01:26,000 --> 00:01:31,000
We'll use the block condition again with the rating attribute, but this time, the operator will be smaller.

16
00:01:32,000 --> 00:01:37,000
So the first empty star will be displayed if the rating value is less than 1. The second one will be 2.

17
00:01:37,000 --> 00:01:47,000
The third one will be 3, the fourth one will be 4, and the last one will be 5. So the last star will be displayed only when the rating is less than 5. Does that make sense?

18
00:01:49,000 --> 00:01:55,000
Now let's test the block. First we need to export the plugin, but we have to select the export folder first.

19
00:01:56,000 --> 00:02:01,000
I've already created one, but you'll need to create one in your plugins folder of your local WordPress installation.

20
00:02:01,000 --> 00:02:07,000
Save, and export the plugin. The plugin file is generated in the source project. Now let's try it out.

21
00:02:08,000 --> 00:02:14,000
First, go to plugins and activate our new WeatherStar rating card plugin. Then, go to the pages.

22
00:02:15,000 --> 00:02:24,000
Add the star rating card to the page and test different ratings, like 1, 2, 3, 4, and 5. It works perfectly.

23
00:02:24,000 --> 00:02:33,000
Save the page. Now let's go back to PineGrow and find a way to make these icons customizable, so we can change the icon used to display the rating.

24
00:02:34,000 --> 00:02:40,000
First, create an attribute for the full stars. Select the 5 full stars and add a block attribute section.

25
00:02:41,000 --> 00:02:46,000
The attribute ID is iconFull, and the title is iconFull.

26
00:02:46,000 --> 00:02:58,000
The attribute will be used as an image. Next, select the 5 empty stars and add a block attribute. This time the attribute ID is iconEmpty, and the title is iconEmpty.

27
00:02:59,000 --> 00:03:08,000
If we want to use inline SVG images, go to plugin settings and enable Allow using inline SVG images in block attributes in the block section.

28
00:03:08,000 --> 00:03:15,000
Save settings, and export the plugin. Now let's reload the page and recover the block.

29
00:03:16,000 --> 00:03:25,000
Here, we can select the images that represent the full icon and empty icon. We have the option to edit the SVG icon. Let's clear this up.

30
00:03:26,000 --> 00:03:32,000
We'll use bootstrap icons. Find a circle. To use a full circle, just copy the SVG code.

31
00:03:32,000 --> 00:03:40,000
Paste it here. You can see that now we use full circles instead of full stars. Let's do the same for the empty icon.

32
00:03:41,000 --> 00:03:48,000
Let's copy the empty circle. Replace the SVG code. And now we have it.

33
00:03:49,000 --> 00:03:56,000
Our rating uses our custom icons to display the rating. I think it deserves 5 stars or 5 stars.

34
00:03:56,000 --> 00:04:06,000
I think it deserves 5 stars or 5 circles because it was very easy to make with the help of the new block condition action.

`,this.addLesson(e)}lesson_TailwindBackgroundImage(){var e=this.newLesson("tw_bck_image");e.name="Tailwind Design Panel background image",e.short_description="Use Design Panel image with Background image visual control.",e.tags=["tailwind css"],e.description=e.makeDesc("830928511",`<p>${e.short_description}</p>`,`<ol>
<li>Open the <b>Design panel</b>.</li>
<li>Explore the <b>${this.showDesignField("background image","background-image")}</b> settings. Open <code>Image options</code> section.</li>
<li>Uncheck the <b>${this.showDesignField("Only use the image for colors","background-image_for_colors")}</b> option.</li>
<li>Set the <b>${this.showDesignField("Selector","background-selector")}</b>  to <code>none</code>.</li>
<li>Select the <b>${this.select("section")}</b> element.</li>
<li>Open the <b>Properties panel</b>. Note: this tutorial assumes you are using Visual controls, not the Class tree mode.</li>
<li>Set the <b>${this.showTWField("Background image","background-image")}</b> to <code>design-image</code>.</li>
<li>Set the <b>${this.showTWField("Background size","background-size")}</b> to <code>cover</code>.</li>
<li>Switch to the ${this.showTWSizeTab("lg","LG size")}.</li>
<li>Set the <b>${this.showTWField("Background image","background-image")}</b> to <code>design-image-large</code>.</li>
</ol>
`),this.tailwindIndexHTML=`<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
        <title>New page</title>                  
        <link href="tailwind_theme/tailwind.css" rel="stylesheet" type="text/css">
    </head>     
    <body> 
        <section class="bg-gray-100 relative text-gray-500"> 
            <div class="container mx-auto pb-36 pt-36 px-4"> 
                <div class="flex flex-wrap -mx-4"> 
                    <div class="mx-auto px-4 text-center w-full lg:w-2/3"> 
                        <p class="font-medium mb-2 text-blue-600 uppercase">The Latest</p> 
                        <h1 class="font-extrabold mb-4 text-6xl text-gray-800">The Natural Experience</h1> 
                        <p class="font-light leading-tight mb-6 text-3xl">Our ability to feel, act and communicate is indistinguishable from magic.</p> <a href="#" class="bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white uppercase">Get It Now</a>                          
                    </div>                     
                </div>                 
            </div>             
        </section>
    </body>     
</html>`,e.addPage("index.html",this.tailwindIndexHTML),e.addPage("tailwind_theme/tailwind.css",`a,hr{color:inherit}progress,sub,sup{vertical-align:baseline}blockquote,body,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,menu,ol,p,pre,ul{margin:0}[type=checkbox]:checked,[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked,[type=radio]:checked:focus,[type=radio]:checked:hover{border-color:transparent;background-color:currentColor}[type=file],table{border-color:inherit}.relative,sub,sup{position:relative}.text-blue-600,.text-gray-500,.text-gray-800,.text-white{--tw-text-opacity:1}*,::after,::before{box-sizing:border-box;border:0 solid #e5e7eb;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[type=checkbox],[type=file]{border-radius:0}::after,::before{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}body{line-height:inherit}hr{height:0;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}fieldset,legend{padding:0}menu,ol,ul{list-style:none;padding:0}textarea{resize:vertical}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus{outline:transparent solid 2px;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow:0 0 #0000}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:transparent solid 2px;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-width:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:ButtonText solid 1px;outline:-webkit-focus-ring-color auto 1px}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container,.w-full{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}.lg\\:w-2\\/3{width:66.666667%}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.mx-auto{margin-left:auto;margin-right:auto}.-mx-4{margin-left:-1rem;margin-right:-1rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.inline-block{display:inline-block}.flex{display:flex}.flex-wrap{flex-wrap:wrap}.rounded-sm{border-radius:.125rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.pb-36{padding-bottom:9rem}.pt-36{padding-top:9rem}.text-center{text-align:center}.text-6xl{font-size:3.75rem;line-height:1}.text-3xl{font-size:1.875rem;line-height:2.25rem}.font-medium{font-weight:500}.font-extrabold{font-weight:800}.font-light{font-weight:300}.uppercase{text-transform:uppercase}.leading-tight{line-height:1.25}.text-gray-500{color:rgb(107 114 128 / var(--tw-text-opacity))}.text-blue-600{color:rgb(37 99 235 / var(--tw-text-opacity))}.text-gray-800{color:rgb(31 41 55 / var(--tw-text-opacity))}.text-white{color:rgb(255 255 255 / var(--tw-text-opacity))}body,html{min-height:100vh}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}`),e.addPage("pinegrow.json",`{"files":{"index.html":{"frameworks":["Tailwind Design Panel background image","pg.insight.events","pg.tw.lib","pg.css.grid","pg.image.overlay","pg.code-validator","pg.project.items","pg.asset.manager","pg.ai.lib","tw","pg.html","pg.components"]}},"open-pages":["index.html"],"urls":{"index.html":{"open-with-wrapper":false,"open-page-views":[{"w":1024,"h":0}]}},"active-design-provider":"tw","breakpoints":[],"frameworks":["Tailwind Design Panel background image","pg.insight.events","pg.tw.lib","pg.css.grid","pg.image.overlay","pg.code-validator","pg.project.items","pg.asset.manager","pg.ai.lib","tw","pg.html","pg.components"],"recent-classes":[]}`),e.addPage("projectdb.pgml",`<project>
    <documents></documents>
    <dmdesigns>
        <dmdesign active>
            <dmdesignskill skill="tw.colors">
                <dmcolor key="gray" color="rgba(107,114,128,1)" shade-50="rgba(249,250,251,1)" shade-100="rgba(243,244,246,1)" shade-200="rgba(229,231,235,1)" shade-300="rgba(209,213,219,1)" shade-400="rgba(156,163,175,1)" shade-500="rgba(107,114,128,1)" shade-600="rgba(75,85,99,1)" shade-700="rgba(55,65,81,1)" shade-800="rgba(31,41,55,1)" shade-900="rgba(17,24,39,1)"/>
                <dmcolor key="red" color="rgba(239,68,68,1)" shade-50="rgba(254,242,242,1)" shade-100="rgba(254,226,226,1)" shade-200="rgba(254,202,202,1)" shade-300="rgba(252,165,165,1)" shade-400="rgba(248,113,113,1)" shade-500="rgba(239,68,68,1)" shade-600="rgba(220,38,38,1)" shade-700="rgba(185,28,28,1)" shade-800="rgba(153,27,27,1)" shade-900="rgba(127,29,29,1)"/>
                <dmcolor key="yellow" color="rgba(245,158,11,1)" shade-50="rgba(255,251,235,1)" shade-100="rgba(254,243,199,1)" shade-200="rgba(253,230,138,1)" shade-300="rgba(252,211,77,1)" shade-400="rgba(251,191,36,1)" shade-500="rgba(245,158,11,1)" shade-600="rgba(217,119,6,1)" shade-700="rgba(180,83,9,1)" shade-800="rgba(146,64,14,1)" shade-900="rgba(120,53,15,1)"/>
                <dmcolor key="green" color="rgba(16,185,129,1)" shade-50="rgba(236,253,245,1)" shade-100="rgba(209,250,229,1)" shade-200="rgba(167,243,208,1)" shade-300="rgba(110,231,183,1)" shade-400="rgba(52,211,153,1)" shade-500="rgba(16,185,129,1)" shade-600="rgba(5,150,105,1)" shade-700="rgba(4,120,87,1)" shade-800="rgba(6,95,70,1)" shade-900="rgba(6,78,59,1)"/>
                <dmcolor key="blue" color="rgba(59,130,246,1)" shade-50="rgba(239,246,255,1)" shade-100="rgba(219,234,254,1)" shade-200="rgba(191,219,254,1)" shade-300="rgba(147,197,253,1)" shade-400="rgba(96,165,250,1)" shade-500="rgba(59,130,246,1)" shade-600="rgba(37,99,235,1)" shade-700="rgba(29,78,216,1)" shade-800="rgba(30,64,175,1)" shade-900="rgba(30,58,138,1)"/>
                <dmcolor key="indigo" color="rgba(99,102,241,1)" shade-50="rgba(238,242,255,1)" shade-100="rgba(224,231,255,1)" shade-200="rgba(199,210,254,1)" shade-300="rgba(165,180,252,1)" shade-400="rgba(129,140,248,1)" shade-500="rgba(99,102,241,1)" shade-600="rgba(79,70,229,1)" shade-700="rgba(67,56,202,1)" shade-800="rgba(55,48,163,1)" shade-900="rgba(49,46,129,1)"/>
                <dmcolor key="purple" color="rgba(139,92,246,1)" shade-50="rgba(245,243,255,1)" shade-100="rgba(237,233,254,1)" shade-200="rgba(221,214,254,1)" shade-300="rgba(196,181,253,1)" shade-400="rgba(167,139,250,1)" shade-500="rgba(139,92,246,1)" shade-600="rgba(124,58,237,1)" shade-700="rgba(109,40,217,1)" shade-800="rgba(91,33,182,1)" shade-900="rgba(76,29,149,1)"/>
                <dmcolor key="pink" color="rgba(236,72,153,1)" shade-50="rgba(253,242,248,1)" shade-100="rgba(252,231,243,1)" shade-200="rgba(251,207,232,1)" shade-300="rgba(249,168,212,1)" shade-400="rgba(244,114,182,1)" shade-500="rgba(236,72,153,1)" shade-600="rgba(219,39,119,1)" shade-700="rgba(190,24,93,1)" shade-800="rgba(157,23,77,1)" shade-900="rgba(131,24,67,1)"/>
            </dmdesignskill>
            <dmdesignskill skill="fonts"></dmdesignskill>
            <dmdesignskill skill="background" image_for_colors="true" advanced="true" filter_blur="0" filter_brightness="100" filter_contrast="100" filter_grayscale="0" filter_hue-rotate="0" filter_invert="0" filter_opacity="100" filter_saturate="100" filter_sepia="0" image="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDUyfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY4NTMyNzUwMnww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1400&h=800&fit=crop"></dmdesignskill>
            <dmdesignskill skill="tailwind"></dmdesignskill>
        </dmdesign>
    </dmdesigns>
    <dmlocked tw-colors-gray="true" tw-colors-red="true" tw-colors-yellow="true" tw-colors-green="true" tw-colors-blue="true" tw-colors-indigo="true" tw-colors-purple="true" tw-colors-pink="true"></dmlocked>
</project>`),e.subtitles=`1
00:00:01,000 --> 00:00:10,000
The background image from the Tailwind Design panel is now available as a value for the background image control in the Properties panel.

2
00:00:21,000 --> 00:00:24,000
Let's take a closer look at the details.

3
00:00:24,000 --> 00:00:39,000
Before, if a background image was selected in the Design panel, we only had the option to use the image for colors without displaying it on the page.

4
00:00:43,000 --> 00:00:48,000
Or if this option is unchecked, the image would automatically display on the element matching the selector.

5
00:00:48,000 --> 00:01:03,000
The default value for the selector is body, but in many cases like here we used a class like poster or similar to specify where the background image should be displayed.

6
00:01:04,000 --> 00:01:06,000
Now we have another option.

7
00:01:06,000 --> 00:01:12,000
First, we can disable the automatic display by checking the option to only use the image for colors.

8
00:01:12,000 --> 00:01:21,000
However, the downside of this option is that we cannot select different image sizes for different media devices like small and large.

9
00:01:23,000 --> 00:01:27,000
Another way to avoid automatic display is to use value none as the selector.

10
00:01:27,000 --> 00:01:35,000
Now the image isn't displayed, while this still lets us select the small image version and the large image version.

11
00:01:35,000 --> 00:01:42,000
Just a note, if we're using unsplash images like in this case, then the small and large image versions are generated automatically.

12
00:01:44,000 --> 00:01:52,000
To use the background image, go to the Properties panel, down to the Background section, where we have the background image control.

13
00:01:52,000 --> 00:02:00,000
Usually we have gradient values listed here, but now we also have two values, design image and design image large.

14
00:02:03,000 --> 00:02:06,000
Let's set design image, which is the smaller version of the image.

15
00:02:08,000 --> 00:02:10,000
And in this case we also want to set no repeat.

16
00:02:10,000 --> 00:02:20,000
And size to cover. On larger device sizes we can use design image large, so we use a higher resolution image on large and up media sizes.

17
00:02:24,000 --> 00:02:27,000
This makes it very convenient to use the image on large devices.

18
00:02:29,000 --> 00:02:31,000
Now we can also use the image on medium devices.

19
00:02:31,000 --> 00:02:38,000
And we can use the image on medium devices.

20
00:02:38,000 --> 00:02:41,000
This makes it very convenient to use the image on multiple elements.

21
00:02:43,000 --> 00:02:49,000
Let's go down to the mailing list element and use the design panel image as the background here as well.

22
00:02:49,000 --> 00:02:56,000
Next, switch to large size and select design image large.

23
00:03:00,000 --> 00:03:06,000
And as before we have to manually set background repeat to no repeat, and background size to cover.

24
00:03:06,000 --> 00:03:18,000
This new option makes working with design panel background images easier. Hope you find it helpful.

`,this.addLesson(e)}}new i})});