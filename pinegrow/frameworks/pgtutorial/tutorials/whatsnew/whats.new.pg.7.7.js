$(function(){$("body").one("pinegrow-ready",function(e,t){class o extends PgTutorialWhatsNew{constructor(){super(isApp()?"7.7":"1.0.13","."),this.lesson_FancyHeading(),this.lesson_ReleaseNotes("https://pinegrow.com/release_notes/pinegrow-web-editor-7-7-august-31-2023/")}lesson_FancyHeading(){var e=this.newLesson("fancyheading");e.name="Create a Fancy Heading block",e.short_description="Use editable tags and block settings to create a versatile heading block.",e.tags=["wordpress"],e.description=e.makeDesc("863909826",`<p>${e.short_description}</p>`,`<ol>
<li>Select the <b>${this.select("h1")}</b> element.</li>
<li>Go to the <b>WordPress panel</b>.</li>
<li>Explore the <b>${this.showWPActionName("Block",'[data-action="cms-block"]',!0)}</b> and <b>${this.showWPActionName("Block Attributes",'[data-action="cms-block-field"]',!0)}</b> actions.</li>

<li>Click on <b>${this.showWPActionAddItem("Add attribute","cms-block-field")}</b> to add a new block attribute.</li>
<li>Set <b>${this.showWPActionField("Attribute id","cms-block-field","",2)}</b> to <code>level</code>, <b>${this.showWPActionField("Title","cms-block-field","title",2)}</b> to <code>Heading level</code> and <b>${this.showWPActionField("Use as","cms-block-field","type",2)}</b> to <code>Tag</code>.</li>

<li>Open the <b>Attribute options</b> section.</li>

<li>Set <b>${this.showWPActionField("Control type","cms-block-field","control",2)}</b> to <code>Select</code></li>
<li>Set <b>${this.showWPActionField("Values","cms-block-field","values",2)}</b> to <pre>h1
h2
h3
h4</pre></li>
<li><b>Export the plugin</b> <code>Fancy Heading</code>, activate it in WordPress and test the block.${isApp()?" Note, you will have to select the export folder before the first export.":""}</li>

<li>Try the Open in Wrapper feature:</li>
<li>Go to the <b>Project panel</b>.</li>
<li><code>Right-click</code> on the file <b>${this.showProjectFile("index.html")}</b>.</li>
<li>Select the <b>Open in wrapper</b> command.</li>
<li><p>Set <b>URL of the page</b> to display the component on the target website during editing.</p></li>
<li>Leave the <b>CSS Selector</b> field empty to display the component in the first <code>article</code>, <code>main</code> or <code>body</code> element. Or, enter the selector of the element on the page where the block should be displayed during editing.</li>
<li>Click on the <b>Save &amp; open</b> button.</li>
</ol>
`),this.addWPSettings(e,"plugin","Fancy Heading","fancy_heading"),e.addPage("index.html",`<!DOCTYPE html> 
<html lang="en" wp-template> 
    <head> 
        <meta charset="utf-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <meta name="description" content=""> 
        <meta name="author" content=""> 
        <title>New page</title>         
        <link href="css/normalize.css" rel="stylesheet">  
        <link href="style.css" rel="stylesheet"> 
    </head>     
    <body style="padding: 38px;">
        <h1 cms-block="fancy-heading" cms-block-title="Fancy Heading" cms-block-style="style.css" cms-block-field="text" cms-block-field-type="content" cms-block-field-title="Heading text" cms-block-field-default-value="_none_" cms-block-type="native-hybrid" class="fancy-heading">A Fancy Heading Goes Here!</h1>
    </body>     
</html>`),e.addStylesheet("style.css",`
.fancy-heading {
    padding: 20px; 
    background: linear-gradient(90deg, #f953c6, #b91d73); 
    color: white; 
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.7); 
    border-radius: 4px;
}

`),e.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),e.subtitles=`1
00:00:01,000 --> 00:00:08,000
Hi, in this tutorial we will take a look at two new Pinegrow features that give us even more control over

2
00:00:08,000 --> 00:00:15,000
developing custom WordPress blocks. So let's take a look at what we have on the page now.

3
00:00:15,000 --> 00:00:24,000
So, here we have an H1 that represents our fancy heading block.

4
00:00:24,000 --> 00:00:31,000
And if we go into the WordPress panel, we see that the block action is already added.

5
00:00:31,000 --> 00:00:37,000
And the ID is fancy heading, the title is fancy heading.

6
00:00:37,000 --> 00:00:45,000
And if we go down into more options, we can notice that the block type is set to hybrid.

7
00:00:45,000 --> 00:00:52,000
And this means that the block will be kind of a classic React block in the editor,

8
00:00:52,000 --> 00:00:59,000
giving the content editor the best possible editing experience, while at the same time,

9
00:00:59,000 --> 00:01:04,000
it will be rendered as a dynamic PHP block on the frontend.

10
00:01:05,000 --> 00:01:15,000
So that the block is always up to date, without us having to resave the pages or templates,

11
00:01:15,000 --> 00:01:20,000
if we do a change to the structure of the block.

12
00:01:20,000 --> 00:01:30,000
And down here in style, we can see that the block includes style CSS, both on the frontend and in the editor.

13
00:01:30,000 --> 00:01:39,000
And style CSS defines a fancy heading rule that visually implements the design of this block.

14
00:01:39,000 --> 00:01:45,000
So we have padding, background gradients, color, text shadow, and so on.

15
00:01:45,000 --> 00:01:58,000
And going down, still on H1 element, we have block attribute action that makes the content of this element editable.

16
00:01:58,000 --> 00:02:07,000
So the attribute ID is text, the title is heading text, and this is used as the content of the element.

17
00:02:07,000 --> 00:02:14,000
And if we take a peek into the attribute options, the default value is set to none.

18
00:02:14,000 --> 00:02:17,000
So underscore, none, underscore.

19
00:02:17,000 --> 00:02:22,000
And this makes the default value empty.

20
00:02:22,000 --> 00:02:31,000
Because what we want is when the user adds our block to the page, it should probably be empty without any content.

21
00:02:31,000 --> 00:02:41,000
And by default, if this is not set, then whatever is the current content of the element will be used as the default value.

22
00:02:41,000 --> 00:02:45,000
So let's test the block to see what we have so far.

23
00:02:45,000 --> 00:02:49,000
So go to WordPress and say export the plugin.

24
00:02:49,000 --> 00:02:57,000
And first we have to select the folder into which the plugin will be exported.

25
00:02:57,000 --> 00:03:03,000
And this is usually within WP content plugins folder.

26
00:03:03,000 --> 00:03:06,000
So let's select it.

27
00:03:06,000 --> 00:03:11,000
This is WP content, plugins, and I already created fancy heading folder.

28
00:03:11,000 --> 00:03:14,000
So I select it now.

29
00:03:14,000 --> 00:03:20,000
You probably first have to create this folder.

30
00:03:20,000 --> 00:03:26,000
And I'm ready to save settings and export the plugin.

31
00:03:26,000 --> 00:03:35,000
And we get a notice that the main PHP file for the plugin was created in our source project.

32
00:03:35,000 --> 00:03:41,000
Now let's jump into WordPress dashboard in plugins where we can see our fancy heading.

33
00:03:41,000 --> 00:03:44,000
And let's activate it.

34
00:03:44,000 --> 00:03:47,000
And with this it is ready to be used.

35
00:03:47,000 --> 00:03:51,000
So let's jump into the site editor.

36
00:03:51,000 --> 00:03:59,000
And here I'm using one of those like empty boilerplate block themes.

37
00:03:59,000 --> 00:04:05,000
Because it's fun to also see how our blocks can be used in the content of full site editing.

38
00:04:05,000 --> 00:04:10,000
Not just as a content of posts and pages.

39
00:04:10,000 --> 00:04:15,000
Let's select index template.

40
00:04:15,000 --> 00:04:18,000
And then go here to add content.

41
00:04:18,000 --> 00:04:20,000
So add block.

42
00:04:20,000 --> 00:04:25,000
And here it is our fancy heading ready to be used.

43
00:04:25,000 --> 00:04:29,000
Hello.

44
00:04:29,000 --> 00:04:31,000
How are you?

45
00:04:31,000 --> 00:04:36,000
So you can notice that it's fully editable right here on the page.

46
00:04:36,000 --> 00:04:39,000
So let's save it.

47
00:04:39,000 --> 00:04:42,000
And preview the site.

48
00:04:42,000 --> 00:04:44,000
And here it is.

49
00:04:44,000 --> 00:04:48,000
If we now go into inspect.

50
00:04:48,000 --> 00:04:50,000
We noticed two things.

51
00:04:50,000 --> 00:04:58,000
So one is that we are using h1 and we're kind of stuck with using h1 for the heading.

52
00:04:58,000 --> 00:05:08,000
And the second is that we also got like this really long class automatically generated by WordPress.

53
00:05:08,000 --> 00:05:14,000
So first let's make the tag element editable.

54
00:05:14,000 --> 00:05:17,000
So this is a new feature in Pinegrow.

55
00:05:17,000 --> 00:05:25,000
And to use it we simply add a new attribute.

56
00:05:25,000 --> 00:05:29,000
Here in block attributes of the h1 element.

57
00:05:29,000 --> 00:05:32,000
And let's say this will be level.

58
00:05:32,000 --> 00:05:36,000
The title will be heading level.

59
00:05:36,000 --> 00:05:39,000
And it will be used as a tag.

60
00:05:39,000 --> 00:05:41,000
Element tag.

61
00:05:41,000 --> 00:05:45,000
And then control type should be select.

62
00:05:45,000 --> 00:05:51,000
And the values can be h1, h2, h3, and h4.

63
00:05:51,000 --> 00:05:55,000
Let's export the project.

64
00:05:55,000 --> 00:05:59,000
And go back into WordPress site editor.

65
00:05:59,000 --> 00:06:03,000
Reload this.

66
00:06:03,000 --> 00:06:09,000
And we select the block and now we have the additional property that controls the heading level.

67
00:06:09,000 --> 00:06:14,000
So h1, h2, h3.

68
00:06:14,000 --> 00:06:17,000
So let's set h3.

69
00:06:17,000 --> 00:06:19,000
Save it.

70
00:06:19,000 --> 00:06:22,000
And reload the page.

71
00:06:22,000 --> 00:06:26,000
Just to make sure that everything is correct.

72
00:06:26,000 --> 00:06:32,000
Go to inspect and here we can see now h3 is used for displaying this element.

73
00:06:32,000 --> 00:06:36,000
So the second point how to get rid of this class.

74
00:06:36,000 --> 00:06:41,000
So usually these classes are not a problem.

75
00:06:41,000 --> 00:06:50,000
And they even give us a way to for example to scope our CSS styling to this particular block.

76
00:06:50,000 --> 00:06:56,000
If we would not have our own class we could use this one.

77
00:06:56,000 --> 00:07:01,000
But for some cases like when we are developing blocks that should really be bare bones.

78
00:07:01,000 --> 00:07:06,000
Kind of just used for the side structure.

79
00:07:06,000 --> 00:07:10,000
And we want to minimize all the classes and attributes.

80
00:07:10,000 --> 00:07:15,000
We can now disable the auto-generated class.

81
00:07:15,000 --> 00:07:18,000
Go back to Pinegrow.

82
00:07:18,000 --> 00:07:21,000
And we have to go to the block action.

83
00:07:21,000 --> 00:07:23,000
More options.

84
00:07:23,000 --> 00:07:26,000
And down here we have supports field.

85
00:07:26,000 --> 00:07:34,000
And that activates like various WordPress editor features for this block.

86
00:07:34,000 --> 00:07:43,000
And to disable auto-generated classes we will use class name equals false.

87
00:07:43,000 --> 00:07:48,000
So export the plugin.

88
00:07:48,000 --> 00:07:53,000
And if we now just reload the page.

89
00:07:53,000 --> 00:07:57,000
We can notice that the WordPress class is gone.

90
00:07:57,000 --> 00:08:05,000
And notice that we didn't have to go into the template editor and re-save the template.

91
00:08:05,000 --> 00:08:10,000
We simply reloaded the page and the block was up to date.

92
00:08:10,000 --> 00:08:14,000
And the reason is that we are using hybrid block type.

93
00:08:14,000 --> 00:08:23,000
So that means it's reacting the editor but dynamically rendered on the front end every time the page is displayed.

94
00:08:23,000 --> 00:08:26,000
So this was very easy to achieve.

95
00:08:26,000 --> 00:08:29,000
But let's take a look at something more.

96
00:08:29,000 --> 00:08:34,000
Like these are existing Pinegrow features but I heard that many people are not aware of them.

97
00:08:34,000 --> 00:08:37,000
So it's a good opportunity to showcase them.

98
00:08:37,000 --> 00:08:44,000
So now when we added this block we see it kind of on a blank page in isolation.

99
00:08:44,000 --> 00:08:50,000
And we don't really see how it will appear on the target website.

100
00:08:50,000 --> 00:08:55,000
And to allow us to do that we can go into the project panel.

101
00:08:55,000 --> 00:09:01,000
And then right click on index.html file and select open in wrapper.

102
00:09:01,000 --> 00:09:09,000
And then we enter the URL of the page where we want to view this block.

103
00:09:09,000 --> 00:09:14,000
So in this case this is just the front page of our project.

104
00:09:14,000 --> 00:09:19,000
Save and open and again save and close because the document will be kind of re-opened.

105
00:09:19,000 --> 00:09:22,000
So we have to save the changes.

106
00:09:22,000 --> 00:09:30,000
And here it is. We can now see our block right there on the front page of our website.

107
00:09:30,000 --> 00:09:35,000
And you might wonder why do we have like two block instances.

108
00:09:35,000 --> 00:09:43,000
So one, the one we can edit with the blue border is our like the source block.

109
00:09:43,000 --> 00:09:50,000
The content of index.html document.

110
00:09:50,000 --> 00:09:59,000
And then the second one is just a part of the front page where we actually added this block into the layout.

111
00:09:59,000 --> 00:10:03,000
So it's just there as a part of the wrapper page.

112
00:10:03,000 --> 00:10:11,000
And the wrapper elements have like orange menus and borders and can't really be edited.

113
00:10:11,000 --> 00:10:15,000
We can select them but they get this wrap notice.

114
00:10:15,000 --> 00:10:22,000
So we can only edit the elements with the blue border.

115
00:10:22,000 --> 00:10:26,000
So why can we then select these elements as well?

116
00:10:26,000 --> 00:10:28,000
Well, we could style these elements.

117
00:10:28,000 --> 00:10:38,000
We could like here in the style editor, we could create styles or edit CSS rules that target these elements on the page.

118
00:10:38,000 --> 00:10:41,000
But that's not like the subject for this tutorial.

119
00:10:41,000 --> 00:10:45,000
So let's go back to our block.

120
00:10:45,000 --> 00:10:48,000
And down here in support.

121
00:10:48,000 --> 00:10:51,000
OK, so let's first do something else.

122
00:10:52,000 --> 00:10:57,000
At this point we have the whole page, like the whole website loaded.

123
00:10:57,000 --> 00:11:09,000
So it means all the styling, all the CSS variables are here loaded and ready for us to be used when designing our custom block.

124
00:11:09,000 --> 00:11:16,000
So instead of having this hard-coded linear gradient, let's get rid of it.

125
00:11:17,000 --> 00:11:20,000
And then go down here into background.

126
00:11:20,000 --> 00:11:24,000
Click on this exclamation icon.

127
00:11:24,000 --> 00:11:27,000
And then go into CSS variables.

128
00:11:27,000 --> 00:11:37,000
And now here we have a bunch of gradient presets implemented as CSS variables.

129
00:11:37,000 --> 00:11:39,000
So maybe this one.

130
00:11:39,000 --> 00:11:42,000
Oh yeah, this one is nice.

131
00:11:42,000 --> 00:11:57,000
See, we can use all the variables, all the gradients, all the colors or sizes that are defined by the block theme or a classic theme and exported as CSS variables.

132
00:11:57,000 --> 00:11:59,000
That's very cool.

133
00:11:59,000 --> 00:12:03,000
And in addition to that we can also go into block action.

134
00:12:03,000 --> 00:12:13,000
And here in supports we can enable additional features such as background color, text color, gradient, font size.

135
00:12:13,000 --> 00:12:15,000
So let's try with this.

136
00:12:15,000 --> 00:12:18,000
Export the plugin.

137
00:12:18,000 --> 00:12:19,000
Oh, and this is interesting.

138
00:12:19,000 --> 00:12:24,000
So here we got the message that some CSS changes are not saved yet.

139
00:12:24,000 --> 00:12:27,000
And therefore they were not exported.

140
00:12:27,000 --> 00:12:37,000
So it's a good idea to save changes before exporting the project.

141
00:12:37,000 --> 00:12:43,000
If we want to get like... and that only affects CSS styling changes.

142
00:12:43,000 --> 00:12:55,000
So if we have made changes to CSS styling and didn't save it when doing the export, those changes will not be exported.

143
00:12:55,000 --> 00:12:58,000
So that's why we get the warning.

144
00:12:58,000 --> 00:13:05,000
And if we want all the current CSS changes to be exported, we have to save the document first.

145
00:13:05,000 --> 00:13:07,000
So we did that.

146
00:13:07,000 --> 00:13:11,000
And now let's jump into the WordPress.

147
00:13:11,000 --> 00:13:13,000
Let's reload our site, yes.

148
00:13:13,000 --> 00:13:18,000
And we can see that now we are using the WordPress gradient.

149
00:13:18,000 --> 00:13:24,000
And if we go here, reload the editor.

150
00:13:24,000 --> 00:13:28,000
And now our blog also got styles controls in WordPress.

151
00:13:28,000 --> 00:13:38,000
So we can select another gradient, for example.

152
00:13:38,000 --> 00:13:48,000
And we can change the text color, the text size, and more.

153
00:13:48,000 --> 00:13:58,000
So notice that as soon as we set the background, like the blog got additional padding, so it became bigger.

154
00:13:58,000 --> 00:14:11,000
And if we go into inspect, we can notice that WordPress added a special class, like HasBackground to the element.

155
00:14:11,000 --> 00:14:16,000
And this class then adds this additional padding.

156
00:14:17,000 --> 00:14:30,000
But surprisingly, if we view the frontend, the class is here, but the styling is not defined.

157
00:14:30,000 --> 00:14:37,000
So there is no additional padding around this element.

158
00:14:37,000 --> 00:14:40,000
So this is one of those WordPress things.

159
00:14:40,000 --> 00:14:43,000
And what we can do...

160
00:14:43,000 --> 00:14:46,000
So go back to PineGrow.

161
00:14:46,000 --> 00:14:59,000
And now we will create a new CSS rule that will target all fancy headings that also have HasBackground class.

162
00:14:59,000 --> 00:15:08,000
And we will simply... so here we have padding 20, so we will also set padding to 20.

163
00:15:08,000 --> 00:15:14,000
And we set the padding to 20 on all sides.

164
00:15:14,000 --> 00:15:16,000
Save the changes.

165
00:15:16,000 --> 00:15:20,000
Export the plugin.

166
00:15:20,000 --> 00:15:24,000
Reload the page in the editor.

167
00:15:24,000 --> 00:15:35,000
And now this additional padding is gone and the blog looks exactly the same in the editor and on the frontend.

168
00:15:35,000 --> 00:15:44,000
And the last thing to explore, so now how to get rid of this wrapper if we want to see the page as it is.

169
00:15:44,000 --> 00:15:47,000
We can go back to Project Panel.

170
00:15:47,000 --> 00:15:51,000
Right-click on Index.html and just say Open.

171
00:15:51,000 --> 00:15:58,000
So this opens the page as itself, standalone, without the wrapper.

172
00:15:58,000 --> 00:16:10,000
But of course now the WordPress styling is not loaded on the page, so we don't see the gradient that is defined by WordPress CSS variable.

173
00:16:10,000 --> 00:16:21,000
So viewing the page in the wrapper is very handy when we want to use the side styling in our custom blogs.

174
00:16:21,000 --> 00:16:25,000
So hopefully this tutorial was useful.

175
00:16:25,000 --> 00:16:28,000
Have fun and see you next time.

`,this.addLesson(e)}}new o})});