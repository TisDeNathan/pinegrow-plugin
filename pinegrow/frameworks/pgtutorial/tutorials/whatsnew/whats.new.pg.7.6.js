$(function(){$("body").one("pinegrow-ready",function(e,t){class o extends PgTutorialWhatsNew{constructor(){super(isApp()?"7.6":"1.0.12","Discover the power of Hybrid WordPress blocks."),this.lesson_HybridBlocks(),this.lesson_ReleaseNotes("https://pinegrow.com/release_notes/pinegrow-web-editor-7-6-june-28-2023/")}lesson_HybridBlocks(){var e=this.newLesson("hybridblocks");e.name="Create a Hybrid WordPress block",e.short_description="Use Hybrid blocks to avoid block recovery and re-saving posts whenever block changes.",e.tags=["wordpress"],e.description=e.makeDesc("838911589",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("card div","div.info-card")}</b> element.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Explore the <b>${this.showWPActionName("Block",'[data-action="cms-block"]',!0)}</b> action on the element.</li>
<li>Open the ${this.showWPActionMoreOptions("More options","cms-block")} section.</li>
<li>Set the <b>${this.showWPActionField("Block type","cms-block","type")}</b> to <code>Hybrid block</code>.</li>
<li><b>Export the plugin</b> <code>Hybrid Card Example</code>, activate it in WordPress and test the block.${isApp()?" Note, you will have to select the export folder before the first export.":""}</li>

<li>Modify the block (for example, add a divider or change the order of elements...).</li>
<li><b>Export the plugin</b> and reload the front-end page where the block is displayed. Notice that changes are immediatelly visible on the page.</li>
<li>Edit the page in WordPress editor. Notice that the block recovery notice is not shown and that you can edit the block as if it would be a normal React block.</li>
</ol>
`),this.addWPSettings(e,"plugin","Hybrid Info Card","info_card_example"),e.addPage("index.html",`<!DOCTYPE html> 
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
        <div cms-block="info-card" cms-block-title="Info Card Example" cms-block-style="style.css" cms-block-type="native" class="info-card">
    <h2 cms-block-field="card_title" cms-block-field-title="Card title" cms-block-field-type="content">Card title</h2>
    <div class="info-card-description" cms-block-field="description" cms-block-field-type="content" cms-block-field-title="Description" cms-block-field-control="richtext">Description...</div>
    <div class="info-card-grid">
        <img src="https://pinegrow.com/placeholders/img17.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="Image"/>
        <div cms-block-inner-content>Inner content... anything can go in here...</div>
    </div>
</div>
    </body>     
</html>`),e.addStylesheet("style.css",`
.info-card {
    max-width: 540px; 
    padding: 20px; 
    border: 1px solid rgba(0, 0, 0, 0.18); 
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2); 
    margin: 40px auto;
}

.info-card .info-card-grid {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto; 
    gap: 20px;
}

.info-card .info-card-grid img {
    max-width: 100%;
}

.info-card .info-card-description {
    margin-top: 10px; 
    margin-bottom: 10px;
}
`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.subtitles=`1
00:00:01,000 --> 00:00:04,000
Recovering blocks and resaving posts sucks.

2
00:00:04,000 --> 00:00:06,000
We have some good news.

3
00:00:06,000 --> 00:00:10,000
The new hybrid block type completely removes the need to do both.

4
00:00:10,000 --> 00:00:12,000
Let's take a closer look.

5
00:00:12,000 --> 00:00:14,000
Here, we have a simple block.

6
00:00:14,000 --> 00:00:22,000
It's an info card with an editable title, description, image, and inner content area that can take any sub-block.

7
00:00:22,000 --> 00:00:28,000
Now the block type we're using here is the default one, which is a regular JavaScript React-based block.

8
00:00:28,000 --> 00:00:31,000
This is the standard type most people use.

9
00:00:31,000 --> 00:00:37,000
Alright, now that we've got our block set up, let's go ahead and export the plugin.

10
00:00:37,000 --> 00:00:46,000
If we're using Pinegrow on a desktop, like I am right now, we'll need to open up the theme settings, and from there, select the export folder.

11
00:00:46,000 --> 00:00:54,000
Now the folder we're going to select should ideally be located in the wp-content-slash-plugins folder.

12
00:00:54,000 --> 00:01:02,000
Once you've got your folder selected, save your settings, and now, let's move on to exporting the plugin.

13
00:01:02,000 --> 00:01:08,000
With that done, we can now make the leap into the WordPress dashboard and give our block a test run.

14
00:01:08,000 --> 00:01:16,000
First, we have to navigate to the plugins section and activate our newly created hybrid info card plugin.

15
00:01:16,000 --> 00:01:20,000
Now let's jump to a sample page to see our block in action.

16
00:01:20,000 --> 00:01:23,000
And here, we should be able to find our info card example.

17
00:01:23,000 --> 00:01:26,000
Let's add it to the page.

18
00:01:26,000 --> 00:01:29,000
Let's open up the sidebar now.

19
00:01:29,000 --> 00:01:36,000
Now remember, this is a React-editable block, so we have the convenience of editing the information right here on the page.

20
00:01:36,000 --> 00:01:40,000
Pretty cool, right?

21
00:01:40,000 --> 00:01:46,000
Let's go ahead and add a description and change the image to personalize our block.

22
00:01:46,000 --> 00:01:53,000
I'm going to skip over these details for now and just jump ahead to show you the page that I've created.

23
00:01:53,000 --> 00:02:02,000
This page uses our info card block to display four distinct stories about surfing. Looks good, right?

24
00:02:02,000 --> 00:02:07,000
This represents a typical situation we often encounter in our projects.

25
00:02:07,000 --> 00:02:13,000
Our custom blocks, like the one we just created, are used for displaying the content in a bunch of different places.

26
00:02:13,000 --> 00:02:18,000
And if we go into the editor, you'll see that the content is really easy to edit.

27
00:02:18,000 --> 00:02:21,000
Just click around the block and edit the content.

28
00:02:21,000 --> 00:02:25,000
Now let's make a change to our React block and see what happens.

29
00:02:25,000 --> 00:02:35,000
Let's add a vertical line below the description for a little extra flair.

30
00:02:35,000 --> 00:02:42,000
We'll hide the visual helper for now so that we can see it better.

31
00:02:42,000 --> 00:02:47,000
Let's do some basic styling to make our block look even better.

32
00:02:47,000 --> 00:02:52,000
We'll just use inline styles to keep it simple.

33
00:02:52,000 --> 00:02:58,000
Let's add a bit of margin on the bottom and on the top to give our block some breathing room.

34
00:02:58,000 --> 00:03:06,000
Let's make the width 70%. This will give our block a nice, balanced look.

35
00:03:06,000 --> 00:03:10,000
And we'll set the margin left to zero.

36
00:03:10,000 --> 00:03:18,000
Also, let's set the top border to 1px for a clean, sharp look.

37
00:03:18,000 --> 00:03:26,000
And there it is, our nice divider. It looks great. But what happens to our blocks?

38
00:03:26,000 --> 00:03:32,000
Now we go again and export the plugin. Let's refresh our page to see the changes.

39
00:03:32,000 --> 00:03:36,000
But wait, the divider is missing. Any idea why that might be?

40
00:03:36,000 --> 00:03:40,000
It seems like the old version of blocks are shown, but why is that?

41
00:03:40,000 --> 00:03:46,000
Well, it's because we are using React blocks, and React blocks are rendered at the time when we save the page,

42
00:03:46,000 --> 00:03:52,000
not when the page is displayed. The rendered HTML is stored in the page content.

43
00:03:52,000 --> 00:03:56,000
This means we have to go back into the editor and edit every page where these blocks are used.

44
00:03:56,000 --> 00:03:59,000
That's a hassle, right?

45
00:03:59,000 --> 00:04:06,000
The first step to getting the updated blocks to show up is to recover each block.

46
00:04:06,000 --> 00:04:13,000
The structure of the block has changed, and WordPress compares it to the previously saved version.

47
00:04:13,000 --> 00:04:19,000
If it doesn't match, the block needs to be recovered. WordPress has no way to do that automatically.

48
00:04:19,000 --> 00:04:27,000
After clicking four times on the block recover for each block, we finally see our updated block. Phew!

49
00:04:27,000 --> 00:04:32,000
Now we can save it and view it on the page. Ready to see the result?

50
00:04:32,000 --> 00:04:38,000
But imagine having hundreds of pages with hundreds of such blocks. Can you imagine the workload?

51
00:04:38,000 --> 00:04:42,000
Doing this process on each single block instance is a huge pain, isn't it?

52
00:04:42,000 --> 00:04:48,000
First of all, having to find all the pages where the block is used, then opening these pages in the editor,

53
00:04:48,000 --> 00:04:53,000
recovering each block instance and saving the page. Sounds tedious, right?

54
00:04:53,000 --> 00:04:57,000
It's a long, error-prone process, far from the ideal.

55
00:04:57,000 --> 00:05:01,000
And that's the problem with native React-based blocks.

56
00:05:01,000 --> 00:05:09,000
Let's go back to PineGrow and see how we can solve this. Go back to the block action.

57
00:05:09,000 --> 00:05:15,000
Let's change the block type to DynamicPHPBlock. What are dynamic blocks?

58
00:05:15,000 --> 00:05:19,000
DynamicPHP blocks are rendered on the server with PHP code.

59
00:05:19,000 --> 00:05:24,000
They are rendered at the time the page is displayed. Because of that, they are always up to date.

60
00:05:24,000 --> 00:05:30,000
Let's change the block. For example, let's swap the order of the image and the content.

61
00:05:30,000 --> 00:05:35,000
Export the plugin again.

62
00:05:35,000 --> 00:05:40,000
Simply reloading the page should be enough to see the change.

63
00:05:40,000 --> 00:05:49,000
But here we actually encountered one situation which occurs when we change the block type from React-based to dynamic.

64
00:05:49,000 --> 00:05:55,000
If blocks have inner content area, then for some reason the blocks get shown inside themselves.

65
00:05:55,000 --> 00:05:59,000
It might be a WordPress bug. Anyway, we have a simple solution.

66
00:05:59,000 --> 00:06:07,000
What we have to do is to edit the page and recover the blocks. This fixes the problem.

67
00:06:07,000 --> 00:06:14,000
But from here on, everything should work normally.

68
00:06:14,000 --> 00:06:21,000
Whenever we make a change to the block, we can export the block and refresh the page.

69
00:06:21,000 --> 00:06:32,000
The change is immediately visible. Isn't that great?

70
00:06:32,000 --> 00:06:37,000
You might ask, what's the drawback of using PHP blocks?

71
00:06:37,000 --> 00:06:45,000
They are always up to date, and they remove all the hassle of having to manually update and resave every post where the block is used.

72
00:06:45,000 --> 00:06:48,000
Why don't we just use dynamic blocks and be done with it?

73
00:06:48,000 --> 00:06:58,000
The difference is in the editor. If we now go into the editor and we try to edit the dynamic block, we can't do any editing on the page itself.

74
00:06:58,000 --> 00:07:07,000
So we have to use the sidebar for all changes. Depending on how much editable content there is in the block, this is quite a big tradeoff.

75
00:07:07,000 --> 00:07:14,000
Also when we type, when we do every change, there is a slight delay because the block gets rendered on the server side.

76
00:07:14,000 --> 00:07:18,000
So the editing experience is kind of clunky. Not the best, right?

77
00:07:18,000 --> 00:07:26,000
Compared to this, editing React blocks is so much smoother. Now this leads us to our new hybrid blocks.

78
00:07:26,000 --> 00:07:31,000
Let's again go to the block action. This time we set the block type to hybrid.

79
00:07:31,000 --> 00:07:35,000
Hybrid blocks combine the best of React blocks and dynamic PHP blocks.

80
00:07:35,000 --> 00:07:39,000
When the block is shown in the editor, a React version is used.

81
00:07:39,000 --> 00:07:42,000
This gives us the seamless, snappy editing experience.

82
00:07:42,000 --> 00:07:48,000
But when the block is shown on the front end of the site, PHP version of the block is used.

83
00:07:48,000 --> 00:07:55,000
Normally, it would be a huge pain to create such blocks because you would have to create two versions of the block for each block.

84
00:07:55,000 --> 00:08:02,000
We would need to create a React version, which is difficult by itself, and then an additional PHP version.

85
00:08:02,000 --> 00:08:07,000
And then we would have to maintain these two versions whenever we change something.

86
00:08:07,000 --> 00:08:14,000
But with PineGrow, it's super easy. All we have to do is change the block type to hybrid and export the project.

87
00:08:14,000 --> 00:08:21,000
Then, in the editor, we get a smooth React-based editing experience with in-place editing.

88
00:08:21,000 --> 00:08:27,000
Every change happens instantly. There is no friction.

89
00:08:27,000 --> 00:08:30,000
There is no waiting, no delays.

90
00:08:30,000 --> 00:08:33,000
We can edit information right on the page.

91
00:08:33,000 --> 00:08:39,000
But when the blocks are displayed on the front end, we get the benefit of them being always up to date.

92
00:08:39,000 --> 00:08:46,000
Let's try if it works. Change the block again. Let's move this line below the title.

93
00:08:46,000 --> 00:08:53,000
Let's transform the title to H3.

94
00:08:53,000 --> 00:08:57,000
Export the plugin again.

95
00:08:57,000 --> 00:09:00,000
Refresh the page.

96
00:09:00,000 --> 00:09:08,000
Everything is up to date immediately. If we go into the editor, there is no need to recover our blocks.

97
00:09:08,000 --> 00:09:13,000
We can edit the content seamlessly through the block editor right there on the page.

98
00:09:13,000 --> 00:09:17,000
We get the best of two worlds. We get two blocks for the price of one.

99
00:09:17,000 --> 00:09:23,000
Changing such blocks is simple as well. Just do the change in PineGrow and re-export the project.

100
00:09:23,000 --> 00:09:28,000
There is no extra work involved. All that we had to do was simply change the block type to hybrid.

101
00:09:28,000 --> 00:09:34,000
We can do this individually for each block, or we can change the project plugin setting.

102
00:09:34,000 --> 00:09:41,000
In the settings, we have a block section where we can select the default block type.

103
00:09:41,000 --> 00:09:51,000
If we select hybrid block, then all the blocks that don't say otherwise will use project settings and will be hybrid blocks.

104
00:09:51,000 --> 00:09:57,000
This feature removes a lot of hassle and friction when using custom blocks on real-world WordPress sites.

105
00:09:57,000 --> 00:10:01,000
All our blocks are always up to date, and there is no need to recover blocks anymore.

106
00:10:01,000 --> 00:10:05,000
No need to re-save the posts to display the updated block.

107
00:10:05,000 --> 00:10:09,000
And we still get a smooth and snappy editing experience in the WordPress editor.

108
00:10:09,000 --> 00:10:16,000
New hybrid blocks in Pinegrow really remove all friction from using custom blocks on WordPress sites. Enjoy!

`,this.addLesson(e)}}new o})});