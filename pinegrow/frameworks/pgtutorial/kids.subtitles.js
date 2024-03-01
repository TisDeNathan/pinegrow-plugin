pgTutorialSubtitles.set("dummy",`hello`),pgTutorialSubtitles.set("template.mobile",`1
00:00:03,580 --> 00:00:07,850
This fun template lets you create
a mockup of a mobile device.

2
00:00:08,150 --> 00:00:12,040
Let’s take a look at how it is
made and how you can customize it.

3
00:00:12,630 --> 00:00:18,990
We have two devices on the screen:
a mobile phone and a tablet.

4
00:00:19,860 --> 00:00:22,230
Both are constructed in the same way.

5
00:00:23,700 --> 00:00:27,010
The main element is a
DIV with the class phone.

6
00:00:27,500 --> 00:00:32,810
The styling for the class phone is
defined in the CSS rule dot phone.

7
00:00:33,860 --> 00:00:37,310
There we set the width… and the height….

8
00:00:38,410 --> 00:00:41,140
Background color is used
for the frame color.

9
00:00:41,910 --> 00:00:49,399
Position is set to relative so that
we can use absolute positioning to
control position of child elements.

10
00:00:50,070 --> 00:00:52,639
Border radius smooths the corners.

11
00:00:53,549 --> 00:00:59,470
We set display to inline-block
so that we can have multiple
devices next to each other.

12
00:01:00,090 --> 00:01:02,209
Display block would show each
device in a separate row.

13
00:01:02,209 --> 00:01:04,560
Finally, margin right creates
space between the two devices.

14
00:01:05,269 --> 00:01:06,820
Let’s select the screen.

15
00:01:08,170 --> 00:01:10,409
It has the class phone-screen.

16
00:01:11,059 --> 00:01:21,940
The position is set to absolute
and top, left, right and bottom
values are used to set the distance
from the edges of the phone…

17
00:01:23,030 --> 00:01:28,039
Background image is set to cover the
whole screen without repeating itself.

18
00:01:28,900 --> 00:01:39,120
We also have a slight border radius, font
family and padding to create some space
around the inner edges of the screen.

19
00:01:41,400 --> 00:01:44,880
Place the screen content
inside the screen.

20
00:01:45,839 --> 00:01:50,410
Here we have a Heading 1 and a
paragraph with the time display.

21
00:01:51,130 --> 00:01:56,080
Both use inline styling so that we
can easily modify their appearance.

22
00:01:56,940 --> 00:02:01,309
Of course, we could also create
CSS rules for these elements.

23
00:02:02,650 --> 00:02:06,920
Next, we have an anchor element
that represents the phone button.

24
00:02:09,620 --> 00:02:16,289
It is absolutely positioned and uses
a handy trick for positioning it in
the middle of the parent element.

25
00:02:17,139 --> 00:02:18,299
The left is set to 50%.

26
00:02:20,080 --> 00:02:24,700
That pushes the left edge of the
button to the center of its parent.

27
00:02:24,700 --> 00:02:27,790
But the button starts at the center.

28
00:02:28,120 --> 00:02:29,540
That’s not what we want.

29
00:02:29,860 --> 00:02:34,120
We want the center of the button
to be at the center of the parent.

30
00:02:34,800 --> 00:02:43,940
To compensate for this we set the
margin left to the negative value
equal to the half of element’s width.

31
00:02:44,090 --> 00:02:45,890
Here, the width of the button is 40px.

32
00:02:46,600 --> 00:02:49,240
So, we set margin left to -20px.

33
00:02:51,220 --> 00:02:57,680
This pushes the button 20px to
the left and aligns it perfectly
at the center of its parent.

34
00:02:59,039 --> 00:03:03,470
We use the same trick for the div that
represents the speaker of the phone.

35
00:03:04,170 --> 00:03:10,790
Using this trick positions elements
in the center regardless of the
size of their parent element.

36
00:03:11,520 --> 00:03:22,060
That’s why we can simply change the width
and the height of the main phone element
to change dimensions of the device, while
everything stays perfectly in place.

37
00:03:22,750 --> 00:03:24,080
Enjoy the template!

`),pgTutorialSubtitles.set("template.simplewebsite",`1
00:00:03,540 --> 00:00:09,140
This template is perfect for
creating a simple website that
doesn’t have a lot of content.

2
00:00:09,630 --> 00:00:14,459
The page has a background image set on
the Body element with the body CSS rule.

3
00:00:15,059 --> 00:00:18,359
The padding creates some
space around the inner edges.

4
00:00:18,840 --> 00:00:23,700
The content of the website is placed
in the DIV element with the class page.

5
00:00:24,310 --> 00:00:34,259
The CSS rule for the class page sets
the background color and dimensions
with min and max values so that the
page looks ok on different device sizes.

6
00:00:36,080 --> 00:00:38,150
Font family is also set here.

7
00:00:38,150 --> 00:00:44,550
Box shadow adds a nice shadow effect
and border radius smooth the corners.

8
00:00:45,349 --> 00:00:49,029
The content of the website is
placed inside the page DIV.

9
00:00:49,580 --> 00:00:52,910
Feel free to change everything
and to make the design your own.

`),pgTutorialSubtitles.set("template.slideshow",`1
00:00:03,460 --> 00:00:08,010
Use the slideshow template to
create a presentation website.

2
00:00:08,929 --> 00:00:19,910
The template has four pages: the
main page called index.html and
three other slide pages, one for
each slide of the presentation.

3
00:00:21,420 --> 00:00:24,390
You can add more pages
in the project Menu.

4
00:00:25,230 --> 00:00:27,270
Let’s select the body element.

5
00:00:27,969 --> 00:00:29,990
The background image is set here.

6
00:00:30,920 --> 00:00:36,009
The Body CSS rule makes the
background image cover the whole page.

7
00:00:36,820 --> 00:00:44,700
The font family, text color, font
size and align are also set here.

8
00:00:45,870 --> 00:00:52,280
Text shadow adds the slight shadow
to the text to make the text easier
to see on different backgrounds.

9
00:00:53,400 --> 00:00:57,220
Padding creates the space around
the inner edges of the page.

10
00:00:57,600 --> 00:01:01,300
The Next and Back buttons
are both anchor elements.

11
00:01:02,460 --> 00:01:04,589
They are positioned absolutely.

12
00:01:05,259 --> 00:01:22,450
They are vertically positioned at the
middle of the page by setting the top to
50% and setting margin top to the negative
half of their height - 25px in this case
- to pull them up so that their center
is aligned with the middle of the page.

13
00:01:23,550 --> 00:01:27,410
The common design is set
with the dot button CSS rule.

14
00:01:28,100 --> 00:01:32,950
Button next places the button
20px away from the right edge.

15
00:01:33,480 --> 00:01:37,710
And button back places the back
button 20px away from the left edge.

16
00:01:39,599 --> 00:01:45,050
The button hover CSS rule sets what
happens when we hover over the button.

17
00:01:46,279 --> 00:01:51,400
To change the slide, select
the Body element and set its
background image or color.

18
00:01:51,400 --> 00:01:57,550
Add headings, paragraph and other
content inside the body element.

19
00:01:58,410 --> 00:02:04,359
To add a new slide go to the project Menu
and duplicate one of the existing pages.

20
00:02:08,569 --> 00:02:14,080
Then modify its content and
set the correct links on
its back and next buttons.

21
00:02:23,010 --> 00:02:24,339
Enjoy the template!

`),pgTutorialSubtitles.set("template.playground",`1
00:00:04,040 --> 00:00:08,970
This template has a bunch of
classes that let you play with
absolutely positioned elements.

2
00:00:09,570 --> 00:00:11,550
The gray area is a playground.

3
00:00:12,250 --> 00:00:13,900
Let’s select the gray DIV.

4
00:00:14,639 --> 00:00:20,670
It has the class playground
with a CSS rule that sets its
height and background color.

5
00:00:21,710 --> 00:00:26,450
The elements inside the gray DIV are
positioned with absolute position.

6
00:00:27,259 --> 00:00:31,919
Use left, top, right and
bottom to move them around.

7
00:00:32,740 --> 00:00:36,560
We have some ready-made classes
that you can assign to elements.

8
00:00:36,869 --> 00:00:41,080
Some set the color of the
element, others the shape.

9
00:00:42,470 --> 00:00:50,040
Note that if two color classes
are set, the one whose CSS rule
comes later in the stylesheet wins.

10
00:00:50,880 --> 00:00:53,719
The same is true for
circle and square classes.

11
00:00:54,359 --> 00:01:18,272
So, to avoid confusion, make
sure that just one color and
shape class is set on an element.

12
00:01:18,272 --> 00:01:18,400
Feel free to add more
elements into the playground.

13
00:01:18,400 --> 00:01:18,408
Set their position property to absolute,
so that you can move them around.

14
00:01:18,408 --> 00:01:21,720
You can also duplicate the
whole playground and create
many different designs.

15
00:01:21,950 --> 00:01:22,689
Have fun.

`),pgTutorialSubtitles.set("template.blank",`1
00:00:03,800 --> 00:00:05,670
Are you feeling super creative?

2
00:00:06,620 --> 00:00:10,310
Then the blank page is the
perfect starting point for you.

3
00:00:10,870 --> 00:00:13,369
The project has a single empty page.

4
00:00:13,780 --> 00:00:16,850
Use the project menu to
add more pages, if needed.

5
00:00:16,850 --> 00:00:18,560
The page is yours!

6
00:00:18,820 --> 00:00:20,350
Create anything you want!

`),pgTutorialSubtitles.set("intro.video.kids",`1
00:00:03,100 --> 00:00:05,170
We use websites every day.

2
00:00:05,500 --> 00:00:14,219
They help us to learn… find
information… communicate… and have fun.

3
00:00:14,660 --> 00:00:20,525
But do you know that behind each
website lies a fantastic world of HTML?

4
00:00:21,470 --> 00:00:24,680
HTML is a language for creating websites.

5
00:00:25,160 --> 00:00:28,879
With HTML we can bring our ideas to life.

6
00:00:29,480 --> 00:00:34,209
The HTML language has
words, called HTML elements.

7
00:00:34,739 --> 00:00:42,050
BODY… H1… P… IMG… and so on.

8
00:00:42,050 --> 00:00:50,289
The HTML elements are like Lego
blocks that are combined together to
create websites, apps and web toys.

9
00:00:50,649 --> 00:00:53,599
HTML has a best friend, called CSS.

10
00:00:54,749 --> 00:01:03,870
CSS is the language for setting
colors, sizes and other visual
qualities of HTML elements.

11
00:01:04,280 --> 00:01:11,579
And the best news is - with the
help of HTML Planet it is easy and
fun to learn both HTML and CSS.

12
00:01:11,629 --> 00:01:20,989
HTML Planet is inhabited by friendly
aliens that love to share their skills
with you through exciting adventures.

13
00:01:23,190 --> 00:01:34,990
After you pick up enough web
skills you can go to the Create
projects area and freely create
web projects based on ready-made
templates or starting from scratch.

14
00:01:35,310 --> 00:01:37,450
Are you ready for your first adventure?

15
00:01:38,680 --> 00:01:41,470
This is Zootata from HTML Planet.

16
00:01:41,770 --> 00:01:44,839
She runs a company
called Super Space Rides.

17
00:01:45,250 --> 00:01:51,080
She came down with her fastest spaceship
to take you for a ride to HTML Planet.

18
00:01:51,940 --> 00:01:57,000
When ready, click here to start
your first HTML Planet adventure!

`),pgTutorialSubtitles.set("intro_lesson",`1
00:00:03,030 --> 00:00:06,540
Welcome to your first
HTML Planet adventure!

2
00:00:06,990 --> 00:00:13,450
In this adventure we will quickly
show you around and then let you
take off in Zootata’s spaceship.

3
00:00:13,840 --> 00:00:17,619
The adventure is now open
in the HTML Planet editor.

4
00:00:18,170 --> 00:00:24,300
The left window describes the adventure
and guides you through it, step by step.

5
00:00:24,509 --> 00:00:28,880
The first thing you should do is
click on the Watch the video button.

6
00:00:31,520 --> 00:00:36,939
A short video will introduce web skills
and explain how to do the adventure.

7
00:00:37,449 --> 00:00:41,379
Use the subtitles window
to jump back to any topic.

8
00:00:42,220 --> 00:00:46,890
Just click on the text and the video
will continue playing from there.

9
00:00:47,710 --> 00:00:52,280
You can close and open the
subtitles with the Subtitles icon.

10
00:00:55,300 --> 00:01:00,980
Click on the popout icon to switch to
the editor while keeping the video open.

11
00:01:01,500 --> 00:01:04,110
Click on the small video to enlarge it.

12
00:01:04,870 --> 00:01:08,929
Click on the Close icon to
close the video completely.

13
00:01:09,730 --> 00:01:12,809
Follow the instructions
to complete the adventure.

14
00:01:12,809 --> 00:01:23,804
One neat trick is to highlight the current
step by clicking on it, so that you know
which step you are doing at the moment.

15
00:01:23,804 --> 00:01:29,960
Click on the underlined words to see
where things are located in the editor.

16
00:01:29,960 --> 00:01:34,369
After completing all the steps
click on the Check button.

17
00:01:35,160 --> 00:01:41,070
Your alien friends will check
if the adventure is completed,
or if something is missing.

18
00:01:42,009 --> 00:01:46,550
If the adventure is completed, you
can proceed to the next adventure.

19
00:01:47,379 --> 00:01:48,649
Some useful tips.

20
00:01:50,120 --> 00:01:52,780
Click on your name to open a helper menu.

21
00:01:53,080 --> 00:01:57,350
There you can choose how many
panels to display at the same time.

22
00:01:58,240 --> 00:02:02,050
If you have a smaller screen,
choose the 3 columns display.

23
00:02:03,910 --> 00:02:06,399
Panels and the page can be resized.

24
00:02:06,780 --> 00:02:09,419
Just make sure they are not too squashed.

25
00:02:11,500 --> 00:02:14,519
Don’t worry if you make a
mistake or mess things up!

26
00:02:14,880 --> 00:02:18,640
Use the Undo button to
undo the last operation.

27
00:02:19,110 --> 00:02:24,059
This is very handy if things get messed
up and you are not sure how to fix them.

28
00:02:25,160 --> 00:02:28,620
Keep clicking on the
Undo to go back in time.

29
00:02:29,750 --> 00:02:33,220
Use the Redo button to
go one step forward.

30
00:02:34,679 --> 00:02:42,410
If you want to erase what you did so
far and start from scratch, click on
the Menu button and select Restart.

31
00:02:42,410 --> 00:02:58,569
The “Save as project” button is useful
if you want to copy the current adventure
to projects, so that you can work
on it in the “Create Projects” area.

32
00:03:01,699 --> 00:03:08,530
If you want to leave the adventure
before completing it, click on the
“Go to the Start Screen” button.

33
00:03:09,020 --> 00:03:11,410
Your progress is saved automatically.

34
00:03:12,050 --> 00:03:17,380
All other panels and their features will
be introduced during next adventures.

35
00:03:17,980 --> 00:03:19,170
You are ready to go!

36
00:03:19,970 --> 00:03:30,079
Click on the Check button to start
Zootata’s spaceship and fly to HTML
Planet where Blotomic will introduce
you to your first HTML element.

37
00:03:30,389 --> 00:03:31,190
Have fun!

`),pgTutorialSubtitles.set("h1",`1
00:00:03,420 --> 00:00:07,180
Hello, welcome to your first HTML element.

2
00:00:07,530 --> 00:00:10,250
It is H1 [short for heading 1]!

3
00:00:11,559 --> 00:00:15,110
H1 is used for the main heading
or the title of the page.

4
00:00:15,500 --> 00:00:19,810
It is usually displayed
as a large, bold text.

5
00:00:20,540 --> 00:00:22,040
Let’s take a closer look.

6
00:00:22,660 --> 00:00:27,040
Like most HTML elements
H1 has a starting tag...

7
00:00:28,670 --> 00:00:30,060
and a closing tag.

8
00:00:31,460 --> 00:00:34,720
In between the tags is the
content of the element.

9
00:00:35,719 --> 00:00:39,650
You will learn more about H1
during your first adventure.

10
00:00:40,330 --> 00:00:46,629
Blotomic, an alien from HTML Planet,
sent you a special welcoming message.

11
00:00:46,920 --> 00:00:50,259
He was in a hurry and
forgot to add a title.

12
00:00:51,049 --> 00:00:55,040
Use the H1 element to create
the heading for his message.

13
00:00:56,000 --> 00:00:58,760
Drag a H1 from the instruction panel...

14
00:00:59,140 --> 00:01:00,520
to the top of the message.

15
00:01:01,900 --> 00:01:04,489
Now, Change the text of the heading.

16
00:01:05,319 --> 00:01:08,279
First, the element needs to be selected.

17
00:01:08,670 --> 00:01:12,739
When the element is selected
it has a blue menu above it.

18
00:01:13,669 --> 00:01:17,960
If the heading is not yet
selected, click on it to select it.

19
00:01:19,430 --> 00:01:24,780
to edit the text of the element Click on
the Edit text icon in the blue menu...

20
00:01:25,860 --> 00:01:27,679
Delete the existing text...

21
00:01:29,869 --> 00:01:32,170
and, write: A special...

22
00:01:34,850 --> 00:01:35,210
message...

23
00:01:37,530 --> 00:01:40,619
Click on Done button to
finish editing the text.

24
00:01:40,779 --> 00:01:40,820
Great!

25
00:01:41,590 --> 00:01:43,210
Let’s check out the code.

26
00:01:44,030 --> 00:01:48,359
Open the code editor by clicking
on the code icon in the menu…

27
00:01:50,069 --> 00:01:52,950
There we have our H1 element.

28
00:01:53,410 --> 00:01:55,270
It has a starting tag...

29
00:01:57,030 --> 00:01:58,469
and a closing tag.

30
00:01:59,920 --> 00:02:01,720
The content is in between.

31
00:02:03,000 --> 00:02:07,629
There are some other elements in the
code but we will learn about them later.

32
00:02:08,549 --> 00:02:12,450
Feel free to play around with
the page as much as you want!

33
00:02:12,970 --> 00:02:18,010
If you make a mistake which you don’t
know how to fix, just use the undo button.

34
00:02:20,110 --> 00:02:22,780
Once you are done, click the check button.

35
00:02:23,150 --> 00:02:25,580
If something is missing you’ll get a hint.

36
00:02:26,340 --> 00:02:30,040
If everything is correct you
can go to the Next Adventure.

37
00:02:30,730 --> 00:02:31,510
Good Luck!

`),pgTutorialSubtitles.set("p",`1
00:00:00,000 --> 00:00:06,258
Text on a website is usually
organized into paragraphs.

2
00:00:06,258 --> 00:00:10,430
The element P represents a paragraph.

3
00:00:10,430 --> 00:00:16,689
It has a starting tag… and a closing tag.

4
00:00:16,689 --> 00:00:20,010
In between is the paragraph text.

5
00:00:20,990 --> 00:00:27,580
Blotomic’s message is hard to read
because it’s just one big chunk
of text in a single paragraph.

6
00:00:28,349 --> 00:00:33,440
Split the message into multiple
paragraphs, so that it is easier to read.

7
00:00:34,330 --> 00:00:37,879
Let’s do it with our
handy “Edit text” tool.

8
00:00:38,540 --> 00:00:42,730
Click on the Paragraph - the
P element, to select it.

9
00:00:43,500 --> 00:00:46,199
A blue menu shows up above the element.

10
00:00:46,889 --> 00:00:49,820
There click on the Edit text icon.

11
00:00:50,679 --> 00:00:56,280
While editing the text press the enter
key to split the paragraph into two…

12
00:00:59,940 --> 00:01:01,570
Create four paragraph…

13
00:01:06,480 --> 00:01:10,240
To finish editing the text
click on the done button.

14
00:01:11,150 --> 00:01:14,390
Normally, P has some space on the top...

15
00:01:16,210 --> 00:01:20,310
and the bottom… This makes
the text easier to read.

16
00:01:22,030 --> 00:01:33,330
Looking at the code we can see every
paragraph has a starting tag… and a
closing tag… with the content in between.

17
00:01:34,440 --> 00:01:37,869
Do you want to know a neat
trick for editing the text?

18
00:01:39,250 --> 00:01:46,190
Instead of activating the Edit
text tool on each paragraph, we
can select their parent element.

19
00:01:46,840 --> 00:01:53,470
The parent element is the
element that contains them,
in this case the body element.

20
00:01:55,860 --> 00:01:59,109
Then, activate the Edit text tool there.

21
00:02:00,000 --> 00:02:05,750
Now, we can easily edit all the text
on the page, including the heading…

22
00:02:05,760 --> 00:02:15,060
When you are done with the
adventure, press the check button.

23
00:02:15,540 --> 00:02:16,270
Have fun!

`),pgTutorialSubtitles.set("img",`1
00:00:03,680 --> 00:00:06,000
Welcome to a very special element!

2
00:00:06,310 --> 00:00:09,050
It is the image IMG element.

3
00:00:09,370 --> 00:00:11,709
It is used for displaying images!

4
00:00:12,349 --> 00:00:15,530
The image element doesn’t
have the closing tag...

5
00:00:15,880 --> 00:00:19,180
because it can’t contain
other elements or text.

6
00:00:19,860 --> 00:00:27,270
H1, for example, can contain
text and other elements and
therefore, needs the closing tag.

7
00:00:28,090 --> 00:00:32,119
But how does the image element
know what image to display?

8
00:00:32,290 --> 00:00:37,670
The answer is using the
src, or source, attribute.

9
00:00:38,480 --> 00:00:42,450
Attributes are used to give
additional information to elements.

10
00:00:42,830 --> 00:00:44,780
The name of the attribute...

11
00:00:46,240 --> 00:00:48,279
is followed by an equal sign...

12
00:00:49,820 --> 00:00:52,480
then the attribute value in double quotes.

13
00:00:53,070 --> 00:00:56,500
The main attribute of the
image element is src...

14
00:00:56,860 --> 00:00:57,750
for source.

15
00:00:58,390 --> 00:01:01,860
It tells the image element
what image to show.

16
00:01:03,250 --> 00:01:07,560
For this adventure drag the
alien image to the page...

17
00:01:09,740 --> 00:01:12,470
then go to the attributes panel...

18
00:01:14,240 --> 00:01:19,870
and discover different aliens by changing
the source attribute from alien1.png...

19
00:01:22,620 --> 00:01:25,080
up to alien15.png.

20
00:01:26,490 --> 00:01:31,679
Instead of typing the image name, you
can click on the Image picker icon…

21
00:01:33,720 --> 00:01:36,360
This opens up the image gallery.

22
00:01:36,600 --> 00:01:38,850
Use the menu to choose a topic.

23
00:01:39,440 --> 00:01:45,649
Here, open the category
HTML Planet… aliens...

24
00:01:47,190 --> 00:01:50,190
Click on any image to
use it on the page...

25
00:01:54,090 --> 00:01:57,740
When you find the right image,
close the Image gallery.

26
00:01:58,590 --> 00:02:06,249
And if you are interested in the
code of the image element, open the
code editor and explore the code.

27
00:02:09,409 --> 00:02:10,149
Enjoy!

`),pgTutorialSubtitles.set("img_size",`1
00:00:03,040 --> 00:00:07,080
Did you know that the image element
has two other cool attributes?!

2
00:00:07,350 --> 00:00:07,970
They are width...

3
00:00:09,160 --> 00:00:09,970
and height….

4
00:00:10,750 --> 00:00:13,019
They determine the size of the image.

5
00:00:13,559 --> 00:00:17,959
Width and height are measured in
pixels [tiny dots on the screen].

6
00:00:18,869 --> 00:00:21,349
As before, the attribute name...

7
00:00:22,429 --> 00:00:24,069
is followed by an equal sign...

8
00:00:26,809 --> 00:00:29,520
then the attribute value in double quotes

9
00:00:30,179 --> 00:00:36,950
If you only set the width, the
height will change automatically so
that the image keeps its shape...

10
00:00:38,400 --> 00:00:42,290
. 
Use the slider to easily
change the field value.

11
00:00:42,920 --> 00:00:50,510
Move the mouse over the arrows and
hold down the mouse button while
you move the mouse up and down.

12
00:00:52,590 --> 00:01:01,649
Similarly, if you only adjust the
height, the width of the image
will change automatically so that
the image keeps its proportions…

13
00:01:03,709 --> 00:01:10,970
However, if you set both the width
and the height, the image will
be sized exactly as you set it.

14
00:01:11,359 --> 00:01:13,750
This means that the
image can be stretched...

15
00:01:15,630 --> 00:01:16,570
or squashed...

16
00:01:18,610 --> 00:01:23,500
For this adventure make the
alien Bloby fit into the box.

17
00:01:24,210 --> 00:01:27,219
First, click on the image to select it.

18
00:01:29,279 --> 00:01:31,209
Then go to the Attributes panel.

19
00:01:33,739 --> 00:01:39,190
There, adjust the width and height
attributes to fit Bloby into the box.

20
00:01:39,920 --> 00:01:42,800
However, he should not be too small.

21
00:01:44,289 --> 00:01:50,180
Have a blast and play with
different widths and heights to
see what happens to the image!

`),pgTutorialSubtitles.set("page",`1
00:00:03,500 --> 00:00:08,430
Now a good time to take a look
at the structure of a HTML page.

2
00:00:09,020 --> 00:00:10,640
Let’s take a look at the code:

3
00:00:11,450 --> 00:00:18,290
The doctype tells the browser
that this document is using
HTML code to describe the page.

4
00:00:19,180 --> 00:00:29,560
The HTML element
represents the whole page.

5
00:00:31,240 --> 00:00:33,879
Inside, it has two elements:

6
00:00:35,239 --> 00:00:40,560
The Head element is used
for information that is not
displayed directly on the page.

7
00:00:41,920 --> 00:00:46,970
For example, a link to the file that
contains the design of the page.

8
00:00:48,290 --> 00:01:05,700
The body element contains the
visible parts of the page: the
headings, texts, images and so on.

9
00:01:08,780 --> 00:01:17,710
We can see the same structure
in the Structure panel.

10
00:01:19,520 --> 00:01:21,480
Don’t worry about details.

11
00:01:21,780 --> 00:01:25,429
You’ll get more familiar with this
during your journey through HTML Planet.

12
00:01:27,509 --> 00:01:34,200
For this adventure, explore the
page structure in the code editor
and in the Structure panel.

13
00:01:34,800 --> 00:01:37,290
Click on the Check
button when you are done.

`),pgTutorialSubtitles.set("restaurant",`1
00:00:03,120 --> 00:00:04,380
Congratulations!

2
00:00:04,620 --> 00:00:06,170
You got your first job!

3
00:00:07,020 --> 00:00:12,950
Bloobeek, another alien from html
planet, hired you to create a
menu for his space restaurant.

4
00:00:13,360 --> 00:00:21,246
He gave you suggestions for the
name of the restaurant..., a
welcoming message..., dish names...

5
00:00:21,246 --> 00:00:27,301
and images of yummy alien food.

6
00:00:27,301 --> 00:00:39,412
Drag any of these elements to
the page to create the menu.

7
00:00:39,412 --> 00:01:03,939
You can resize images using the
width and height attributes… and
edit the text with the Text editor.

8
00:01:03,939 --> 00:01:05,080
If you want, use the code editor
to edit or explore the code.

9
00:01:05,080 --> 00:01:07,690
Feel free to come up with your own ideas.

10
00:01:07,990 --> 00:01:08,730
Have fun!

`),pgTutorialSubtitles.set("link",`1
00:00:03,280 --> 00:00:05,380
Welcome to the anchor element.

2
00:00:05,980 --> 00:00:12,190
Anchor is used to create links
which teleport you from one page
to another when you click on them.

3
00:00:12,990 --> 00:00:17,639
To turn text into a link, wrap
it up with an anchor element.

4
00:00:18,580 --> 00:00:21,780
As you can see, the anchor
has a starting A tag...

5
00:00:23,380 --> 00:00:27,240
and a closing A tag around the link text.

6
00:00:29,790 --> 00:00:33,080
But how does the browser know
where the link should go?

7
00:00:33,730 --> 00:00:40,310
Well, We use the href attribute to set the
address of the page where we want to go.

8
00:00:42,940 --> 00:00:53,070
In this adventure we have a project with
two pages: alien1.html and alien2.html.

9
00:00:58,410 --> 00:01:01,440
Click on the page name
to show that page...

10
00:01:04,879 --> 00:01:07,779
The two aliens would
like to visit each other.

11
00:01:08,340 --> 00:01:10,699
Create links that will connect them.

12
00:01:11,660 --> 00:01:29,669
The easiest way to make a link on the
HTML Planet is to select an element
… then go to the attributes panel… and
there click on the Create link button.

13
00:01:31,470 --> 00:01:36,720
This puts the anchor element around
the content of the selected element.

14
00:01:37,190 --> 00:01:41,900
All we have to do is to set the
href attribute for the link.

15
00:01:42,770 --> 00:01:51,330
Set the Href attribute to
alien2.html, so that the link
takes us to the second alien.

16
00:01:52,900 --> 00:01:54,370
Let’s test the link.

17
00:01:55,390 --> 00:02:00,089
First we have to select the
anchor element by clicking on it.

18
00:02:01,559 --> 00:02:06,259
To test the link, Click on the
Click icon in the blue menu.

19
00:02:07,449 --> 00:02:09,750
Notice that the link took
us to the second page.

20
00:02:09,750 --> 00:02:21,070
Do the same on alien2.html, but
this time create a link that
will go back to alien1.html.

21
00:02:23,639 --> 00:02:28,350
Use the Browser Preview icon to
open the page in the browser.

22
00:02:29,360 --> 00:02:33,179
There we can test links by
clicking on them directly.

23
00:02:33,740 --> 00:02:34,540
Good Luck!

`),pgTutorialSubtitles.set("link_text",`1
00:00:03,130 --> 00:00:07,729
Did you ever wonder how to make a
link on just one part of a text?

2
00:00:08,029 --> 00:00:08,950
It’s simple!

3
00:00:09,309 --> 00:00:12,810
Just surround that part of the
text with the anchor element!

4
00:00:17,440 --> 00:00:21,630
For this adventure, help Bloobeek
show his favorite alien food.

5
00:00:22,080 --> 00:00:28,530
Create a link around the word “here”
and point it to the page food.html.

6
00:00:31,280 --> 00:00:39,380
To do this select the heading…
then click on the text edit icon…
A text edit menu will appear.

7
00:00:40,040 --> 00:00:44,320
Next, highlight the word “here”…
and click on the “link” button.

8
00:00:45,150 --> 00:00:47,899
Enter the address of
the link’s destination.

9
00:00:48,380 --> 00:00:51,060
In our case, food.html.

10
00:00:51,660 --> 00:00:54,239
Then click on the “create” button.

11
00:00:55,029 --> 00:00:58,180
Press “Done” when you
finish editing the text.

12
00:00:58,910 --> 00:01:03,779
We can see in the code that we now have
the anchor element around the linked word.

13
00:01:06,020 --> 00:01:09,300
To test the link, select the link
and click on the “Click” icon.

14
00:01:09,300 --> 00:01:12,380
By the way, if you need to remove
a link, just select it and click
on the “Remove the link” button.

15
00:01:12,380 --> 00:01:17,149
For extra fun, you can change the
image… and the name of the food.

16
00:01:22,580 --> 00:01:23,230
Enjoy!

`),pgTutorialSubtitles.set("link_img",`1
00:00:03,360 --> 00:00:06,869
Did you know that links
can also be on images?

2
00:00:07,000 --> 00:00:15,329
Just wrap the anchor element
around the image element.

3
00:00:15,329 --> 00:00:17,330
For this adventure add a
link to the image of Toosasa.

4
00:00:17,629 --> 00:00:19,169
Select her image...

5
00:00:19,169 --> 00:00:19,658
go to the attributes panel...

6
00:00:19,658 --> 00:00:19,761
and there click the create link button.

7
00:00:19,761 --> 00:00:29,630
Then, set the Href
attribute to surprise.html!

8
00:00:30,570 --> 00:00:33,820
Finally, click on the “click”
icon and see what happens!

9
00:00:34,150 --> 00:00:34,870
Have fun!

`),pgTutorialSubtitles.set("font_size",`1
00:00:03,840 --> 00:00:08,770
So far we were adding HTML elements to
the page and changing their content.

2
00:00:09,690 --> 00:00:15,689
But how do we change the color
of text, size of letters,
set backgrounds and so on?

3
00:00:16,609 --> 00:00:18,010
We can do that with CSS.

4
00:00:18,920 --> 00:00:23,599
CSS is the language for describing
the design of HTML elements.

5
00:00:23,599 --> 00:00:24,040
Don’t worry, it’s simple.

6
00:00:24,150 --> 00:00:28,659
To set the size of letters we
use the “font-size” CSS property.

7
00:00:29,210 --> 00:00:33,589
Notice the colon that separates the
name of the property from its value.

8
00:00:34,350 --> 00:00:39,290
The value needs a unit of
measure otherwise the browser
doesn’t know what we want.

9
00:00:39,970 --> 00:00:45,860
In this example we are using
the px or Pixel unit that
represents one dot on the screen.

10
00:00:46,429 --> 00:00:49,739
There is no space between
the number and the unit.

11
00:00:50,280 --> 00:00:53,529
Finally, properties have
a semicolon at the end.

12
00:00:54,139 --> 00:00:56,760
But where do we put this CSS property?

13
00:00:57,530 --> 00:01:02,580
One way is to add it directly to the
HTML element using the style attribute.

14
00:01:05,730 --> 00:01:09,589
For this adventure, help Rooky
read the message from his friend.

15
00:01:10,209 --> 00:01:13,810
Rooky has only one eye and
doesn’t see small letters well.

16
00:01:14,450 --> 00:01:16,510
Select the message paragraph...

17
00:01:17,390 --> 00:01:19,210
and then go to the Style panel.

18
00:01:20,059 --> 00:01:26,790
There, go the Text section… and set the
Size property to at least 25 pixels.

19
00:01:29,469 --> 00:01:32,169
Don’t forget the px unit for pixel.

20
00:01:33,060 --> 00:01:37,179
Remember that there must be no space
between the number and the unit.

21
00:01:37,930 --> 00:01:40,509
However don’t make the text too large.

22
00:01:41,420 --> 00:01:46,419
You can check out the code
to see the style attribute
with the font-size property.

23
00:01:49,109 --> 00:01:50,140
Have a blast!

`),pgTutorialSubtitles.set("color",`1
00:00:03,290 --> 00:00:06,610
Would you like to know how
to change the text color?

2
00:00:07,030 --> 00:00:08,989
Well, you’re about to find out!

3
00:00:09,849 --> 00:00:14,760
You can use the CSS property
“color” to set the text color.

4
00:00:15,259 --> 00:00:21,040
Like all CSS properties, “color” has
a colon…, followed by the value...

5
00:00:22,290 --> 00:00:23,160
and finally a semicolon.

6
00:00:25,160 --> 00:00:32,369
Color value can be one of
the named colors, for example
white, black, orange and so on.

7
00:00:33,070 --> 00:00:36,470
Or, it can be any color
written in a code like this...

8
00:00:36,939 --> 00:00:37,779
or this...

9
00:00:38,389 --> 00:00:41,850
Don’t worry - we have a simple
tool that helps with that.

10
00:00:42,830 --> 00:00:50,190
Bloobeek wants to advertise his restaurant
by projecting a special deal on the night
sky with his fancy space bubble machine.

11
00:00:50,830 --> 00:00:55,150
But it turns out that the color of the
letters and the sky are very similar.

12
00:00:55,990 --> 00:00:59,260
Use the “color” property
to make the text brighter.

13
00:00:59,890 --> 00:01:08,739
Select the heading… go to the Style
panel… and in the Color field… click
on the color square on the right.

14
00:01:09,549 --> 00:01:11,479
This opens the color picker.

15
00:01:11,779 --> 00:01:21,080
Use the right slider to select a
color… Then choose a shade of the
selected color in the area on the left.

16
00:01:21,849 --> 00:01:24,970
The bottom slider makes
the color transparent.

17
00:01:27,230 --> 00:01:30,019
Click “Choose” to use the selected color.

18
00:01:30,279 --> 00:01:31,070
Have fun!

`),pgTutorialSubtitles.set("span_color",`1
00:00:03,540 --> 00:00:06,800
Sometimes we need to color
just one part of the text.

2
00:00:07,310 --> 00:00:13,730
To do this, we must first wrap this part
of the text with a "SPAN" HTML element.

3
00:00:14,349 --> 00:00:15,610
After we do this...

4
00:00:16,389 --> 00:00:18,500
we can use the style attribute...

5
00:00:19,029 --> 00:00:21,119
to design that part of the text...

6
00:00:21,939 --> 00:00:26,669
In this adventure activate
the rocket launch sequence by
coloring the words “red”...

7
00:00:27,880 --> 00:00:28,770
“orange”...

8
00:00:29,580 --> 00:00:31,700
and “green” in their colors.

9
00:00:32,469 --> 00:00:35,129
For example, make the word “red” red.

10
00:00:35,690 --> 00:00:37,980
Do the same for “orange” and “green”.

11
00:00:38,790 --> 00:00:40,560
To do that select the heading...

12
00:00:41,840 --> 00:00:44,000
and activate the text edit tool.

13
00:00:44,870 --> 00:00:49,890
Then, highlight the word “red”…
and click on the Span button...

14
00:00:50,990 --> 00:00:54,279
This wraps the highlighted
text with a span element.

15
00:00:55,500 --> 00:00:57,339
We can see this in the code.

16
00:01:01,160 --> 00:01:03,970
Click Done to finish editing the text.

17
00:01:05,110 --> 00:01:09,750
Now select the Span… and set
its color in the Style panel.

18
00:01:18,690 --> 00:01:20,469
Do the same for “orange”...

19
00:01:21,080 --> 00:01:21,530
and “green”.

20
00:01:24,230 --> 00:01:29,359
If you feel adventurous you
can play around with other Text
properties, for example Size.

21
00:01:29,359 --> 00:01:29,374
Good luck!

`),pgTutorialSubtitles.set("font_family",`1
00:00:03,750 --> 00:00:05,540
Do you know what fonts are?

2
00:00:05,830 --> 00:00:08,719
Fonts are different ways
of how letters are shaped.

3
00:00:09,050 --> 00:00:10,260
For example Arial...

4
00:00:11,050 --> 00:00:14,070
Times New Roman… and Courier New…

5
00:00:14,820 --> 00:00:22,240
We can use the “font family” CSS
property to display text with
different fonts in our website designs.

6
00:00:22,920 --> 00:00:27,540
If the font name has more than one
word, the name needs to be in quotes.

7
00:00:28,750 --> 00:00:40,119
In order for the browser to display
the font, the font needs to be
installed on the user’s device,
or included on the web page with
the service such as Google Fonts.

8
00:00:41,610 --> 00:00:45,760
To keep things simple, we will
work with already installed fonts.

9
00:00:46,230 --> 00:00:52,119
Some fonts are safe to use because
they are installed on almost
every computer or mobile device.

10
00:00:53,330 --> 00:01:03,429
We can list more than one similar fonts
in the font-family property… separated
by commas… to make sure that the
computer knows at least one of them.

11
00:01:04,269 --> 00:01:12,840
Your alien friend Zootata, asked
you to make the poster for her
adventure company more interesting,
by choosing a more suitable font.

12
00:01:13,469 --> 00:01:21,130
To do this, select the heading…
then in the Style panel… select the
font in the “Font family” field.

13
00:01:21,700 --> 00:01:25,639
Notice, that each selection lists
two or more similar fonts...

14
00:01:26,179 --> 00:01:29,250
to make sure that at least
one will be available.

15
00:01:29,900 --> 00:01:33,350
Try out different fonts and
see which one fits the best.

16
00:01:33,690 --> 00:01:34,350
Enjoy!

`),pgTutorialSubtitles.set("line_height",`1
00:00:03,690 --> 00:00:08,360
The font-size, CSS property is
used to set the size of letters.

2
00:00:08,740 --> 00:00:11,420
But how do we set the
height of lines of text?

3
00:00:12,160 --> 00:00:13,929
Take a look at this paragraph.

4
00:00:14,280 --> 00:00:18,900
It has five or more lines of text,
depending on how large your screen is.

5
00:00:20,410 --> 00:00:24,460
By changing the font size we make
the letters larger or smaller.

6
00:00:26,809 --> 00:00:30,559
By changing the line height we
set the height of text lines.

7
00:00:31,059 --> 00:00:35,650
If the line height is too small, the
text looks squished and is hard to read.

8
00:00:36,420 --> 00:00:42,470
If the line height is too large,
the text lines look like they
don’t belong to the same paragraph.

9
00:00:43,800 --> 00:00:46,750
We can use units like
pixels with the line height.

10
00:00:50,320 --> 00:00:52,940
Or, we can just write a
number, for example 1.5.

11
00:00:53,549 --> 00:00:57,730
That makes the line height
1.5 times the font size.

12
00:00:58,550 --> 00:01:04,560
This approach is recommended
because the line height will
automatically adjust to the font size.

13
00:01:06,289 --> 00:01:08,149
Are you ready for the next adventure?

14
00:01:09,170 --> 00:01:14,210
While walking around HTML Planet
you stumbled upon a secret message.

15
00:01:14,720 --> 00:01:16,479
But the message is scrambled.

16
00:01:17,000 --> 00:01:20,839
Use the Line height property to
make the message easy to read.

`),pgTutorialSubtitles.set("text_style",`1
00:00:00,730 --> 00:00:05,950
In this lesson, we’re going to learn about
a bunch of text styling CSS properties.

2
00:00:06,880 --> 00:00:10,340
Don’t worry it won’t take
long and it will be fun!

3
00:00:11,599 --> 00:00:13,610
Lets start with font weight.

4
00:00:14,320 --> 00:00:17,590
Font weight lets us set
the boldness of the text...

5
00:00:18,260 --> 00:00:20,120
Headings are normally bold.

6
00:00:21,050 --> 00:00:24,599
Letter Spacing sets the
spacing between letters.

7
00:00:26,000 --> 00:00:30,740
Setting the Font style to Italic makes
the letters lean to the right side.

8
00:00:31,230 --> 00:00:34,610
Setting it to normal
restores them back to normal.

9
00:00:35,910 --> 00:00:43,500
Text Variant gives us the choice to
make all letters capital but the letters
which were already capital are larger.

10
00:00:44,030 --> 00:00:46,220
Or we can set it back to normal.

11
00:00:47,420 --> 00:00:51,490
Text Decoration makes the text
underlined..., overlined...

12
00:00:52,119 --> 00:00:54,720
crossed out… or without anything.

13
00:00:54,730 --> 00:00:57,070
The links are usually underlined.

14
00:00:58,130 --> 00:01:02,140
Text Transform can make every word
start with a capital letter...

15
00:01:03,150 --> 00:01:05,890
all letters capital
and of the same size...

16
00:01:06,849 --> 00:01:08,799
and all letters lowercase.

17
00:01:09,450 --> 00:01:12,180
Or we can choose to remove any transform.

18
00:01:13,660 --> 00:01:16,850
Text align changes how
the text is positioned.

19
00:01:18,050 --> 00:01:20,539
Left will align it to the left edge...

20
00:01:21,139 --> 00:01:24,689
Center in the middle… and
right to the right side.

21
00:01:25,520 --> 00:01:29,529
Justify will spread the text
from left edge to the right edge.

22
00:01:30,660 --> 00:01:36,940
For this adventure a bunch of
paragraphs flew by and asked you to
style them according to what they say.

23
00:01:37,450 --> 00:01:40,179
For example, the first
one is brave and bold.

24
00:01:40,590 --> 00:01:44,020
So we use the Font weight
property to make it bold.

25
00:01:44,309 --> 00:01:45,019
Enjoy!

`),pgTutorialSubtitles.set("parent_style",`1
00:00:03,140 --> 00:00:07,370
In this adventure Blotomic got
a part in a space theater play.

2
00:00:07,680 --> 00:00:09,879
He needs to memorize his lines.

3
00:00:10,280 --> 00:00:12,950
But the script is not so easy to read.

4
00:00:13,679 --> 00:00:21,250
We want to set the font family for all the
text to Courier New and font size to 18px.

5
00:00:21,250 --> 00:00:27,589
And then, make all Blotomic’s
lines bold, so that he can easily
see what he needs to learn.

6
00:00:28,320 --> 00:00:32,829
It would take a long time to style
the heading and paragraphs one by one.

7
00:00:33,360 --> 00:00:37,250
Do you want to learn a super
smart and speedy way to do that!?

8
00:00:37,670 --> 00:00:43,280
Instead of styling individual
paragraphs we set the text
style on their parent element.

9
00:00:44,240 --> 00:00:49,890
In this case, the “BODY”
element is the parent of all
these headings and paragraphs.

10
00:00:50,380 --> 00:00:52,029
If we select the Body element...

11
00:00:52,830 --> 00:01:01,910
and there set the Font-family…
and font-size..., all the elements
inside the Body, automatically
get this style as well.

12
00:01:03,080 --> 00:01:05,990
This works with all Text CSS properties.

13
00:01:06,990 --> 00:01:11,179
Do you notice something interesting
when we set the font size to 18px?

14
00:01:11,179 --> 00:01:11,659
The heading became larger - much
larger than 18 pixels.

15
00:01:12,379 --> 00:01:25,979
The reason is that the heading is
sized in proportion to the text
size, so that the heading is always
larger than the regular text.

16
00:01:26,960 --> 00:01:33,900
That means that the parent’s
font size refers to the size of
the regular text, not headings.

17
00:01:34,680 --> 00:01:41,580
If some paragraphs or headings need
a different style, we simply change
the style directly on these elements.

18
00:01:42,030 --> 00:01:50,740
For example, to make a Blotomic’s line
bold, select that paragraph… and use the
Font weight property to make it bold.

19
00:01:51,170 --> 00:01:53,530
Do the same for the rest of his lines.

20
00:01:54,120 --> 00:01:58,820
Complete the adventure and for extra
fun try centering the “Scene 1”...

21
00:01:59,330 --> 00:02:00,570
and “End of Scene 1”...

22
00:02:00,599 --> 00:02:01,289
lines.

23
00:02:01,620 --> 00:02:02,600
Have a blast!

`),pgTutorialSubtitles.set("background_color",`1
00:00:03,550 --> 00:00:05,359
Do you know what we will do now?

2
00:00:05,840 --> 00:00:10,140
We will color backgrounds with the
“background color” CSS property.

3
00:00:10,570 --> 00:00:14,040
Let’s say we want to color the
background of the whole page.

4
00:00:14,440 --> 00:00:16,520
We can do that in the Style panel...

5
00:00:17,160 --> 00:00:21,669
In the background section… we can
see the background color field.

6
00:00:22,770 --> 00:00:25,430
This is different than
the Text color above.

7
00:00:25,890 --> 00:00:28,810
The background color is
in the Background section.

8
00:00:29,570 --> 00:00:33,050
Click on the color picker
icon to open the color picker.

9
00:00:33,730 --> 00:00:37,029
Select the color and click
on the Choose button.

10
00:00:37,750 --> 00:00:43,170
In this adventure, Zootata
and Blotomic are reading the
scene 2 of the space drama.

11
00:00:43,700 --> 00:00:46,749
But some of the text is
white and can’t be seen.

12
00:00:47,769 --> 00:00:50,970
Select the Body element
and go to the Style panel.

13
00:00:52,320 --> 00:00:54,119
In the Background section...

14
00:00:54,489 --> 00:01:01,910
use the Color field to select a background
color… that will be good for reading
both the dark and the light text.

15
00:01:02,330 --> 00:01:03,019
Enjoy

`),pgTutorialSubtitles.set("background_image",`1
00:00:03,460 --> 00:00:06,610
Did you know that we can
use images as backgrounds?

2
00:00:06,940 --> 00:00:10,969
Background images let us do a
lot of cool and fun designs.

3
00:00:11,320 --> 00:00:14,780
In this adventure Bloby asked
you to take a photo of him.

4
00:00:15,080 --> 00:00:18,319
However, he is a bit sad
because the background is white.

5
00:00:18,900 --> 00:00:21,770
He would prefer an
exciting space background.

6
00:00:22,420 --> 00:00:27,950
Use the background image CSS
property to set the background
image on the Body element.

7
00:00:28,450 --> 00:00:31,970
First, select the Body element
and go to the Style panel.

8
00:00:32,469 --> 00:00:36,140
There, in the Background
section..., we have the Image field.

9
00:00:36,739 --> 00:00:39,790
Write background1.jpg into the field.

10
00:00:40,290 --> 00:00:43,629
The image is now in the
background of the Body element.

11
00:00:43,970 --> 00:00:46,950
Let’s check how this
looks in the CSS code...

12
00:00:47,490 --> 00:00:51,539
Notice that the image name is
wrapped with the URL function...

13
00:00:52,119 --> 00:00:54,310
and that the name is surrounded by quotes.

14
00:00:54,910 --> 00:01:02,269
The URL function tells the browser that
this is the address of the file on the
internet, in this case of the image.

15
00:01:02,760 --> 00:01:06,510
Make sure you spell the image name
correctly and that you include the .jpg.

16
00:01:06,520 --> 00:01:12,600
Dot JPG tells the browser
that the file is an image.

17
00:01:13,040 --> 00:01:17,119
You can copy paste the address of the
image from the instructions panel.

18
00:01:17,770 --> 00:01:25,890
Try changing the background image from
background1.jpg to background5.jpg
and choose your favourite!

19
00:01:26,230 --> 00:01:26,960
Good Luck!

`),pgTutorialSubtitles.set("background_repeat",`1
00:00:03,280 --> 00:00:07,380
What happens if the background image
is smaller than the background area?

2
00:00:07,740 --> 00:00:10,800
The image will be repeated
to fill the whole background.

3
00:00:11,250 --> 00:00:15,970
But we can change this by using the
background-repeat, CSS property.

4
00:00:16,699 --> 00:00:20,439
For this adventure Rooky lend you
his “planet multiplying” machine.

5
00:00:21,300 --> 00:00:26,259
The machine works by repeating
the chosen planet in the
background of the Body element.

6
00:00:27,280 --> 00:00:32,719
First, select the Body element…
then, go to the Style panel.

7
00:00:33,660 --> 00:00:38,870
Use the Background image field
to select the image of the
planet you wish to multiply.

8
00:00:39,950 --> 00:00:43,279
For example, enter planet1.jpg.

9
00:00:44,210 --> 00:00:50,150
The background image is small
and it got repeated to fill
up the whole available space.

10
00:00:51,519 --> 00:00:57,560
Now we can use the Background - repeat
property to tell the browser how
to repeat our background element:

11
00:00:58,190 --> 00:01:00,710
The first option is NO REPEAT.

12
00:01:01,050 --> 00:01:06,260
With it, the image is not repeated even
if it is smaller than the background area.

13
00:01:07,360 --> 00:01:09,480
The second option is REPEAT.

14
00:01:10,010 --> 00:01:11,660
That’s the default option.

15
00:01:12,330 --> 00:01:15,970
The image is repeated to fill
up all the available area.

16
00:01:17,330 --> 00:01:19,410
The third option is REPEAT X.

17
00:01:20,110 --> 00:01:22,880
The image will only be
repeated horizontally.

18
00:01:23,700 --> 00:01:25,889
The last option is REPEAT Y.

19
00:01:26,259 --> 00:01:29,000
The image will only be
repeated vertically.

20
00:01:29,480 --> 00:01:35,479
Play around with different planets
and use Background repeat property
to multiply them in different ways.

21
00:01:35,870 --> 00:01:36,580
Have Fun!

`),pgTutorialSubtitles.set("background_position",`1
00:00:03,620 --> 00:00:06,200
Red alert!

2
00:00:06,200 --> 00:00:06,240
Red alert!

3
00:00:06,240 --> 00:00:06,400
An asteroid is about to hit a planet!

4
00:00:06,400 --> 00:00:17,000
Use the background-position CSS property
to move the planet to the right bottom
position, away from the asteroid hit zone.

5
00:00:17,759 --> 00:00:20,560
To do that, select the Body element.

6
00:00:21,140 --> 00:00:23,029
Then go to the Style panel.

7
00:00:23,350 --> 00:00:29,369
Down in the Background section
you will find the planet image and
the Repeat property already set.

8
00:00:30,189 --> 00:00:35,729
Repeat is set to NO REPEAT so that we
only have one planet in the background.

9
00:00:36,459 --> 00:00:37,741
The background - position property tells
the browser how to position the background
image in the available background space.

10
00:00:37,741 --> 00:00:37,742
The value is a combination of two words:

11
00:00:37,742 --> 00:00:37,744
The first word sets the horizontal
position: left..., center...

12
00:00:37,744 --> 00:00:37,744
or right.

13
00:00:37,744 --> 00:00:37,746
The second word sets the vertical
position: top..., center...

14
00:00:37,746 --> 00:00:37,746
or bottom.

15
00:00:37,746 --> 00:00:37,748
Play around with different
combinations to see what happens.

16
00:00:37,748 --> 00:00:37,757
Move the planet into the right
bottom corner where it will
be safe from the asteroid.

17
00:00:37,757 --> 00:00:37,759
Good luck!

18
00:00:37,759 --> 00:00:37,780
The planet counts on you!

`),pgTutorialSubtitles.set("background_size",`1
00:00:03,310 --> 00:00:09,059
For this adventure, Bloby came
back to the photo studio and asked
you to take another photo of him.

2
00:00:09,830 --> 00:00:14,350
This time he would like to have the
photo of his home, for the background.

3
00:00:14,700 --> 00:00:17,299
His home is on the right
side of the picture.

4
00:00:18,139 --> 00:00:23,550
So, we use the background - position
property to display the bottom right side.

5
00:00:24,490 --> 00:00:27,550
But we can’t see the glass
dome above the house.

6
00:00:28,480 --> 00:00:33,680
We need a way to stretch the
background image to fit perfectly
into the background area.

7
00:00:34,389 --> 00:00:37,970
We do that with the
Background Size CSS property.

8
00:00:38,760 --> 00:00:42,970
The most useful values are
Auto, Cover and Contain.

9
00:00:43,840 --> 00:00:47,829
Auto displays the image as
it is, without resizing it.

10
00:00:48,530 --> 00:00:54,110
Cover makes the background image
as large as possible without
squishing or stretching it.

11
00:00:54,809 --> 00:00:58,180
That means that some parts
of the image can get cut out.

12
00:00:58,990 --> 00:01:03,050
For example, here we can’t see
the mountains on the left side.

13
00:01:03,849 --> 00:01:12,520
We use the Background position property
to tell the browser which area of
the image is the most important,
and should be always displayed.

14
00:01:12,530 --> 00:01:19,020
If the mountains would be
the most important we would
use the left bottom position.

15
00:01:19,800 --> 00:01:24,069
Contain displays the whole
image, as large as possible.

16
00:01:24,500 --> 00:01:27,540
That means that there can
be some empty space left.

17
00:01:28,010 --> 00:01:38,610
Again, we can use the Position
property to position the image…
and set Background color…, to color
the empty parts of the background.

18
00:01:39,240 --> 00:01:42,050
In practice, Cover is used the most.

19
00:01:43,179 --> 00:01:51,320
Play around with different values
of Background size, position
and color and help Bloby take
the perfect picture of his home!

20
00:01:51,320 --> 00:01:52,550
Have a blast!

`),pgTutorialSubtitles.set("card_div",`1
00:00:03,580 --> 00:00:08,260
Until now, we have been adding
backgrounds only to the body element.

2
00:00:08,670 --> 00:00:13,690
But we can add background images
and colors to any HTML element.

3
00:00:14,049 --> 00:00:17,909
One of the most useful
HTML elements is DIV.

4
00:00:18,410 --> 00:00:20,960
DIV elements are similar to empty boxes.

5
00:00:21,450 --> 00:00:27,179
You can style them in any way you want
and put other HTML elements inside them.

6
00:00:27,969 --> 00:00:29,935
For this adventure, we will
create a business card for Rooky.

7
00:00:29,935 --> 00:00:32,559
He is the manager of a space hotel.

8
00:00:32,559 --> 00:00:36,970
Here we have an empty page.

9
00:00:37,270 --> 00:00:40,010
Let’s add a background
image to make it nicer.

10
00:00:40,470 --> 00:00:51,710
Select the body element… and in
the Style panel… set the Background
image, for example to background1.jpg.

11
00:00:51,710 --> 00:00:53,729
To start, drag a DIV element to the page…

12
00:00:54,699 --> 00:00:55,990
Let’s check the code...

13
00:00:56,600 --> 00:00:57,580
Here it is.

14
00:00:58,470 --> 00:01:00,430
The DIV is empty.

15
00:01:00,540 --> 00:01:05,289
Usually, empty DIVs have no
height, so we can’t see them.

16
00:01:06,009 --> 00:01:13,010
But on HTML Planet we give empty
elements a bit of height and a dashed
background so that we edit them.

17
00:01:14,090 --> 00:01:19,060
By default, the DIV takes up all
the available horizontal space.

18
00:01:19,830 --> 00:01:23,670
Our DIV is transparent,
it has no background.

19
00:01:24,309 --> 00:01:27,020
So, let’s color the background white.

20
00:01:27,520 --> 00:01:32,920
Go to the Style panel… and use the color
picker on the Background color field...

21
00:01:33,390 --> 00:01:34,990
to choose the white color.

22
00:01:35,860 --> 00:01:36,490
Great!

23
00:01:36,720 --> 00:01:40,699
We will continue working on this
project in the following adventures.

`),pgTutorialSubtitles.set("card_margin",`1
00:00:03,590 --> 00:00:08,799
Our design looks a bit crammed, there
is no space around the business card.

2
00:00:09,340 --> 00:00:14,450
We will use the Margin CSS property
to create the space around the card.

3
00:00:15,009 --> 00:00:20,590
Margin tells the browser how much space to
put on the outside of the element’s edges.

4
00:00:21,660 --> 00:00:23,480
Here we have margin-left.

5
00:00:23,990 --> 00:00:27,460
We will set it to 40px...

6
00:00:27,460 --> 00:00:32,030
This creates 40px of space
on the left side of the DIV.

7
00:00:33,440 --> 00:00:36,720
You can see CSS properties
and values up here.

8
00:00:37,590 --> 00:00:44,349
Next, let’s set margin-top
to 40px as well… This adds
space on the top of the DIV.

9
00:00:46,210 --> 00:00:50,310
On the right side we set
margin-right to 40px.

10
00:00:51,450 --> 00:00:59,080
Even though there is a lot of empty
space on the page below the DIV, it is a
good idea to also set the bottom margin.

11
00:00:59,850 --> 00:01:06,470
This will make sure there is enough
space below the DIV even if we
add more elements to page later.

12
00:01:07,120 --> 00:01:11,529
To change all margins at the same
time, turn on the equal button…

13
00:01:12,670 --> 00:01:17,060
To edit margins one by one just
switch off the equal button.

14
00:01:18,450 --> 00:01:28,039
Notice that properties margin-top,
right, bottom and left got replaced
by a single Margin CSS property.

15
00:01:28,690 --> 00:01:31,149
That’s just a shorter way to write it.

`),pgTutorialSubtitles.set("card_br",`1
00:00:03,470 --> 00:00:09,270
It’s time to meet a new HTML element
called BR, short for line break.

2
00:00:10,090 --> 00:00:15,149
This element has no content, so
it doesn’t have a closing tag.

3
00:00:15,950 --> 00:00:19,200
Let’s continue our adventure
with Rooky’s business card.

4
00:00:19,700 --> 00:00:22,619
First, add the Heading 1 to the card.

5
00:00:23,200 --> 00:00:25,330
We will use it to display his name.

6
00:00:26,250 --> 00:00:33,810
The card is no longer empty, so it
is displayed as it is, without extra
height and a dashed background.

7
00:00:34,389 --> 00:00:38,440
Activate the Text edit
tool and write Rooky Blub.

8
00:00:39,040 --> 00:00:42,230
Next, add a Paragraph for his job title.

9
00:00:43,230 --> 00:00:45,390
Pay attention to the orange line.

10
00:00:45,820 --> 00:00:48,899
It should say Insert After H1.

11
00:00:50,000 --> 00:01:01,877
You can use the Structure panel to make
sure you are putting the element in
the right spot, just after the Heading.

12
00:01:01,877 --> 00:01:02,809
If you make a mistake, just grab the
element and move it to the correct place.

13
00:01:03,699 --> 00:01:06,679
Then change the text to “Hotel manager.”

14
00:01:07,499 --> 00:01:14,509
Add another Paragraph for his
contact information: phone,
email and SpaceTalk address.

15
00:01:15,010 --> 00:01:16,649
The text is already there.

16
00:01:17,840 --> 00:01:21,400
It would be nice if each contact
would be in a separate line.

17
00:01:21,830 --> 00:01:29,520
To do that activate the Text edit
tool and place the cursor to the place
where you want to break the line..

18
00:01:31,080 --> 00:01:36,479
If you press just ENTER this will break
the paragraph into two paragraphs.

19
00:01:37,130 --> 00:01:39,330
But this is not what we want here.

20
00:01:40,300 --> 00:01:48,529
So, instead press SHIFT and
ENTER together, to insert a
line break into the paragraph.

21
00:01:49,169 --> 00:01:52,180
This inserts the BR element in the text.

22
00:01:53,300 --> 00:01:55,130
Let’s take a look at the code.

23
00:01:55,520 --> 00:01:59,850
We can see BR elements in the
paragraph with the contact information.

24
00:02:00,670 --> 00:02:02,159
Good job so far!

`),pgTutorialSubtitles.set("card_padding",`1
00:00:03,820 --> 00:00:08,900
Our design would look even better
if it had more space between
the DIV edges and the text.

2
00:00:08,900 --> 00:00:16,470
We will use the Padding CSS
property to create the space around
the inner edges of the element.

3
00:00:17,440 --> 00:00:20,920
Select the DIV… and go to the Style panel.

4
00:00:21,680 --> 00:00:24,670
Padding fields are on the
inside of the control.

5
00:00:25,590 --> 00:00:34,800
Set the padding-left to 20px… This
creates 20px of space between the left
edge of the element and its content.

6
00:00:35,449 --> 00:00:37,470
Let’s do the same on the right side…

7
00:00:38,140 --> 00:00:42,460
On the top we will set
the padding to 10px…

8
00:00:42,650 --> 00:00:46,760
10px is enough because the
Heading already has a top margin.

9
00:00:48,380 --> 00:00:51,190
That’s why the space on
the top looks larger.

10
00:00:51,630 --> 00:00:54,629
The empty space consists of
the top padding of the DIV...

11
00:00:55,990 --> 00:00:58,100
and the top margin of the Heading.

12
00:00:59,390 --> 00:01:07,789
Let’s add 20px of padding at the bottom,
so that there is the same amount of space
on top of the card and on the bottom.

13
00:01:08,190 --> 00:01:08,860
Perfect!

`),pgTutorialSubtitles.set("card_background",`1
00:00:03,280 --> 00:00:06,789
Now we would like to add an
image of Rooky to his card.

2
00:00:07,240 --> 00:00:13,370
The first idea that comes to mind
is to add an IMG HTML element.

3
00:00:13,860 --> 00:00:16,320
Let’s drag the image
to the top of the DIV.

4
00:00:16,890 --> 00:00:18,579
But it doesn’t look so good.

5
00:00:19,029 --> 00:00:24,169
We would like to have the image
on the left side of the card
and the text on the right side.

6
00:00:25,050 --> 00:00:30,070
So far we haven’t learn how to
position HTML elements in this way.

7
00:00:30,740 --> 00:00:33,170
Perhaps we can use a different approach?

8
00:00:33,830 --> 00:00:36,800
Let’s add the picture as a
background image of the DIV.

9
00:00:37,430 --> 00:00:42,540
Select the DIV… and set its
Background image to alien5.png.

10
00:00:43,260 --> 00:00:48,990
Next, we set the Repeat to
No repeat because we want to
show just one image of Rooky.

11
00:00:50,130 --> 00:00:54,899
We will increase Padding Left to move
the text to the right side of the image.

12
00:00:55,359 --> 00:01:00,590
Make sure to switch off the
Equal icon because we don’t want
to increase all the paddings.

13
00:01:02,530 --> 00:01:04,110
160px looks about right.

14
00:01:04,879 --> 00:01:10,329
Although it looks cool to have a closeup of
Rooky, it would be nice to see him whole.

15
00:01:11,059 --> 00:01:13,429
Remember the Background size property?

16
00:01:13,900 --> 00:01:16,980
We already learned about
using Cover and Contain.

17
00:01:17,880 --> 00:01:22,100
Contain shows the whole picture
but there is no space around it.

18
00:01:22,620 --> 00:01:26,220
We can also use the pixel
value for the Background size.

19
00:01:26,690 --> 00:01:29,920
Click in the field and enter
a value, for example 50px.

20
00:01:31,490 --> 00:01:34,650
Then use the slider to
get to the perfect size.

21
00:01:35,000 --> 00:01:36,840
But the image is now at the top.

22
00:01:37,150 --> 00:01:41,070
We can use Background Position
to display it at the left center.

23
00:01:41,429 --> 00:01:46,710
The image is now nicely
centered vertically, but there
is no space on the left side.

24
00:01:47,230 --> 00:01:51,590
Instead of left, we can use a
pixel value in the Position field.

25
00:01:52,080 --> 00:01:56,100
Change left into 40px and
leave the center as it is.

26
00:01:56,580 --> 00:01:59,460
Use the slider to find
the perfect position.

27
00:01:59,950 --> 00:02:01,210
The card looks nice!

28
00:02:01,320 --> 00:02:01,999
Good job.

`),pgTutorialSubtitles.set("card_dimensions",`1
00:00:00,000 --> 00:00:05,270
We are still working on
Rooky’s business card.

2
00:00:05,270 --> 00:00:12,629
Double click on the title of
the Instructions Panel to close
it so that we have more space.

3
00:00:12,800 --> 00:00:19,796
By default the DIV takes up all
the available horizontal space.

4
00:00:19,796 --> 00:00:25,180
That means that it stretches all
the way from the left edge to the
right edge of its parent element.

5
00:00:25,970 --> 00:00:29,939
In some cases that’s fine,
but not for our business card.

6
00:00:30,469 --> 00:00:34,900
See what happens on a large
screen… The card is too long.

7
00:00:35,359 --> 00:00:37,772
Luckily, CSS has a solution!

8
00:00:37,772 --> 00:00:40,780
Let’s scroll down to
the Dimension section.

9
00:00:40,780 --> 00:00:42,700
There we have the Width CSS property.

10
00:00:42,700 --> 00:00:48,247
Set it to 450px.

11
00:00:48,247 --> 00:00:45,349
This makes the card 450px long.

12
00:00:45,349 --> 00:00:55,210
The size doesn’t change
if we resize the page.

13
00:00:55,980 --> 00:01:04,789
In most cases, there is no need
to set the Height because the
height of the element automatically
adjusts to its content and paddings.

14
00:01:04,989 --> 00:01:05,919
Have a blast!

`),pgTutorialSubtitles.set("card_border",`1
00:00:03,470 --> 00:00:09,100
Rooky likes the card, but he asked us
to make the design more interesting.

2
00:00:10,050 --> 00:00:12,920
We can do that by adding
borders to the card.

3
00:00:13,760 --> 00:00:18,740
Border CSS property let’s us
style the edges of the element.

4
00:00:19,500 --> 00:00:27,210
To better see the border while we are
editing it, we can switch off the selected
element menu with the icon up here.

5
00:00:28,189 --> 00:00:33,560
Elements can still be selected but the
blue menu and outline are not shown.

6
00:00:34,430 --> 00:00:37,990
Click on the icon again to
switch the menus back on.

7
00:00:38,490 --> 00:00:41,230
Ok, let’s take a look at the border.

8
00:00:41,820 --> 00:00:43,780
Each border has three fields:

9
00:00:44,240 --> 00:00:47,040
Width sets how thick the border is.

10
00:00:47,630 --> 00:00:57,380
But, in order to see the border we also
need to select the style of the border,
for example Solid… Dashed… Dotted.

11
00:00:58,269 --> 00:01:01,060
The third field is the
color of the border.

12
00:01:03,690 --> 00:01:09,039
If we want that all four borders look
the same we can turn on the Equal button.

13
00:01:09,690 --> 00:01:14,269
Or, we can switch off the Equal button
and set different borders one by one.

14
00:01:14,879 --> 00:01:21,310
For extra fun we can also
round the corners using the
Border radius CSS property.

15
00:01:21,920 --> 00:01:29,099
We can set the size of the corner one
by one or use the other Equal button
to change them all at the same time.

16
00:01:29,830 --> 00:01:33,180
Make the card even more
special by styling the text...

17
00:01:33,970 --> 00:01:35,060
And the background…

18
00:01:36,240 --> 00:01:39,550
Congratulations on completing
the project for Rooky!

`),pgTutorialSubtitles.set("bubbles_create",`1
00:00:03,970 --> 00:00:06,489
Do you want to create a cool space bubble?

2
00:00:07,000 --> 00:00:08,809
Let’s go on a bubble adventure.

3
00:00:09,340 --> 00:00:10,980
We want to see the bubbles.

4
00:00:11,210 --> 00:00:16,529
So, first select the Body element
and set the background color...

5
00:00:17,309 --> 00:00:18,930
or the background image....

6
00:00:19,580 --> 00:00:26,540
For example, set the background
image to background4.jpg
and make it cover the page.

7
00:00:27,520 --> 00:00:29,420
Drag the DIV to the page.

8
00:00:29,740 --> 00:00:31,250
This will be our bubble.

9
00:00:31,719 --> 00:00:37,550
Because the DIV is empty it
is using the empty placeholder
helper to make the DIV visible.

10
00:00:38,180 --> 00:00:44,690
Let’s set the background color
to white… Make it transparent
because we can see through bubbles.

11
00:00:45,290 --> 00:00:47,030
The bubble should be round.

12
00:00:48,300 --> 00:00:52,360
Set the width and the height to
the same amount, such as 300px.

13
00:00:52,360 --> 00:01:00,670
We don’t need the Empty Placeholder
anymore because our DIV already
has the size and the color.

14
00:01:00,970 --> 00:01:04,610
So we can switch it off
in the element menu.

15
00:01:05,030 --> 00:01:06,759
The DIV is now a square.

16
00:01:07,089 --> 00:01:09,719
Let’s use the border radius to round it.

17
00:01:10,609 --> 00:01:17,170
Instead of entering a pixel value, we can
use the percent unit, and enter 50%...

18
00:01:18,180 --> 00:01:22,989
Switch on the Equal button to
use this value for all corners.

19
00:01:23,780 --> 00:01:27,340
Why is it better to use
50% instead of pixels?

20
00:01:28,250 --> 00:01:35,800
50% is better because it will
always create a perfect circle,
no matter how big the DIV is.

21
00:01:36,330 --> 00:01:40,119
We can change its size and
it will still be round.

22
00:01:40,780 --> 00:01:47,800
If we use pixels… and then make
the bubble larger… we need to
increase the border radius.

23
00:01:48,170 --> 00:01:50,070
That’s a lot of extra work.

24
00:01:50,330 --> 00:01:53,339
So let’s use 50% instead.

25
00:01:54,100 --> 00:01:57,400
Aliens love to float around
in their space bubbles.

26
00:01:57,650 --> 00:02:02,020
So, let’s put Toosasa in our
bubble using the background image.

27
00:02:02,520 --> 00:02:07,490
Enter alien9.png into the
Background image field…

28
00:02:08,550 --> 00:02:13,200
Set repeat to no repeat… and
position to center center.

29
00:02:13,870 --> 00:02:16,690
But, we need to make the image smaller.

30
00:02:17,090 --> 00:02:20,950
Let’s set the background size as
a percentage of the bubble size.

31
00:02:21,469 --> 00:02:23,859
60% looks about right.

32
00:02:24,639 --> 00:02:29,180
Now, if we change the size of the
bubble, the image will scale as well.

33
00:02:30,450 --> 00:02:32,310
Wow, we made a cool bubble!

`),pgTutorialSubtitles.set("bubbles_absolute",`1
00:00:00,000 --> 00:00:02,228
Let’s continue our bubble adventure.

2
00:00:02,228 --> 00:00:13,368
At the moment the bubble is stuck
at the top of the page because
elements on the page are normally
positioned from top to bottom.

3
00:00:13,368 --> 00:00:20,450
But, here we will use the special
absolute positioning to move
the bubble anywhere on the page.

4
00:00:21,050 --> 00:00:26,720
To do that, select the bubble
DIV and go to the Position
section of the Style panel.

5
00:00:27,710 --> 00:00:31,979
There we set the Position
CSS property to Absolute.

6
00:00:32,610 --> 00:00:37,380
This tells the browser that the element
floats above other element on the page.

7
00:00:37,970 --> 00:00:40,500
Next we need to set the position.

8
00:00:41,240 --> 00:00:47,500
We can use four position CSS
properties that let us set how far
away from the edge is the element:

9
00:00:48,719 --> 00:00:52,209
Left moves the element in
relation to the Left edge.

10
00:00:52,660 --> 00:00:54,720
Positive value moves it away...

11
00:00:55,029 --> 00:00:58,260
and a negative value moves
it towards the other side.

12
00:00:58,860 --> 00:01:00,770
Top works in the same way…

13
00:01:02,660 --> 00:01:05,970
Right moves the element in
relation the right edge.

14
00:01:06,450 --> 00:01:10,669
But here, we can’t have left
and right set at the same time.

15
00:01:11,260 --> 00:01:17,309
So let’s clear the left field first…
and then set the right position.

16
00:01:18,140 --> 00:01:21,110
Bottom positions the
element from the bottom edge.

17
00:01:21,460 --> 00:01:24,440
Again, we have to clear the top first…

18
00:01:26,099 --> 00:01:30,489
So how to decide which
one to use: left or right?

19
00:01:30,660 --> 00:01:31,860
Top or bottom?

20
00:01:32,440 --> 00:01:34,760
Use the one that is more convenient.

21
00:01:35,090 --> 00:01:41,470
Or, if the element needs to have
a fixed position from one edge,
set the position for that side.

22
00:01:42,160 --> 00:01:45,720
For example, set right to 100px...

23
00:01:46,609 --> 00:01:53,580
if the bubble should always be
100px away from the right edge...,
regardless of how big is the page.

24
00:01:55,080 --> 00:01:57,419
Toosasas friends want to have fun as well.

25
00:01:58,210 --> 00:02:03,019
Create more bubbles for them
and place them in different
positions around the page.

26
00:02:03,780 --> 00:02:07,980
Use the Duplicate button to make
a copy of the selected element.

27
00:02:15,559 --> 00:02:16,249
Enjoy!

`),pgTutorialSubtitles.set("bubbles_zindex",`1
00:00:03,490 --> 00:00:08,210
What if bubbles are overlapping and
you want to chose which one is on top?

2
00:00:08,860 --> 00:00:15,970
Normally, absolutely positioned
elements are stacked in the same order
as they appear in the HTML structure.

3
00:00:16,889 --> 00:00:26,349
So, the first element is at
the bottom… the next element is
above the previous element… and
the last element is on the top.

4
00:00:27,179 --> 00:00:31,709
We can change this order
with the zIndex CSS property.

5
00:00:32,189 --> 00:00:35,489
The larger the zIndex,
the higher the element is.

6
00:00:35,889 --> 00:00:38,510
For example, to put this bubble...

7
00:00:38,930 --> 00:00:40,550
on top of this bubble...

8
00:00:40,900 --> 00:00:42,950
we set its zIndex to 1.

9
00:00:44,750 --> 00:00:48,360
1 is enough because the other
bubble doesn’t have a zIndex value.

10
00:00:48,910 --> 00:00:51,650
Now, if we want to have this bubble...

11
00:00:51,710 --> 00:00:52,619
on the top...

12
00:00:52,940 --> 00:00:55,410
we have to give it zIndex of 2...

13
00:00:55,730 --> 00:00:59,160
because the other bubble
already has a zIndex of 1.

14
00:01:00,170 --> 00:01:03,510
The element with the largest
zIndex is on the top.

15
00:01:03,820 --> 00:01:06,140
Have fun playing with bubbles and zIndex!

`),pgTutorialSubtitles.set("relative_key",`1
00:00:03,680 --> 00:00:09,090
Meanwhile in the space drama,
Zootata and Blotomic got
locked out of their space ship.

2
00:00:09,490 --> 00:00:13,010
Luckily the door has an
emergency key on the outside.

3
00:00:13,520 --> 00:00:17,309
But the key is protected by a CSS puzzle.

4
00:00:18,320 --> 00:00:21,560
The key has four floating
parts and the base.

5
00:00:23,020 --> 00:00:32,259
To activate the key, you have to
use the CSS position properties
to make the four floating parts
move down and touch the base.

6
00:00:32,769 --> 00:00:35,880
The key will not work
if you resize its parts.

7
00:00:36,580 --> 00:00:42,160
Unfortunately, Zootata and Blotomic
didn’t yet learn about this part of CSS.

8
00:00:43,190 --> 00:00:46,210
They need your help to get
back into the space ship.

9
00:00:47,000 --> 00:00:51,579
In the previous adventure we already
covered the absolute position.

10
00:00:52,029 --> 00:00:54,379
Perhaps we could use it here as well?

11
00:00:55,119 --> 00:00:56,079
Let’s try.

12
00:00:57,129 --> 00:01:05,099
Select the first floating part…
scroll down to the Position section…
and set Position to Absolute.

13
00:01:06,020 --> 00:01:06,299
Oh no!

14
00:01:06,920 --> 00:01:10,270
The part fell out and is
now floating above the key.

15
00:01:10,699 --> 00:01:13,880
That’s what the absolute
position does to an element.

16
00:01:14,700 --> 00:01:16,680
This is not what we need here.

17
00:01:17,410 --> 00:01:19,970
We have another way to position elements.

18
00:01:20,260 --> 00:01:22,230
It is called Relative position.

19
00:01:23,010 --> 00:01:25,410
If we set the position to relative...

20
00:01:26,090 --> 00:01:34,979
and then use left or right and
top or bottom properties, the
element will move from its original
position in that direction.

21
00:01:35,640 --> 00:01:43,140
For example, if we set Left to 20px, the
element will move 20px to the left side.

22
00:01:44,110 --> 00:01:51,630
It makes no sense to set both
left and right at the same
time… Same for top and bottom.

23
00:01:52,000 --> 00:01:54,740
Just choose the one
that is most convenient.

24
00:01:55,370 --> 00:02:03,270
To move a part of the key down set its
position to relative and use the Top
property to move it down to the base.

25
00:02:04,139 --> 00:02:08,440
Push all four key parts down
to the base to unlock the door.

26
00:02:08,770 --> 00:02:09,550
Good luck!

`),pgTutorialSubtitles.set("shop_rules",`1
00:00:03,590 --> 00:00:07,350
What if we have a lot of elements
which we want to style in the same way?

2
00:00:07,780 --> 00:00:11,530
We could style them one by one
but that would take a long time.

3
00:00:12,020 --> 00:00:14,930
Luckily, CSS has a powerful tool.

4
00:00:15,349 --> 00:00:20,619
It lets us create rules that
tell the browser how to style
different groups of elements.

5
00:00:20,619 --> 00:00:23,419
It’s time for another adventure!

6
00:00:23,979 --> 00:00:26,039
Mooteetee is opening a picture shop.

7
00:00:27,119 --> 00:00:32,309
However, the pictures need special space
frames to be able to hang on the wall.

8
00:00:32,949 --> 00:00:35,799
There are too many images
to style one by one.

9
00:00:36,069 --> 00:00:39,476
So, create a CSS rule instead.

10
00:00:40,150 --> 00:00:42,430
First, select one of the images.

11
00:00:43,170 --> 00:00:48,829
Then go to the Style panel and click
on the “Create New CSS Rule” button.

12
00:00:49,800 --> 00:00:51,699
This will open a popup window.

13
00:00:52,230 --> 00:00:53,570
First, write the selector.

14
00:00:53,570 --> 00:00:58,850
The selector tells the browser which
elements to style with this rule.

15
00:00:59,600 --> 00:01:01,450
This can be an element name.

16
00:01:01,730 --> 00:01:04,079
In our case, enter IMG.

17
00:01:04,440 --> 00:01:08,169
This will create a rule that will
style all images on the page.

18
00:01:08,809 --> 00:01:13,580
The helper shows how many elements on
the page will be styled with this rule.

19
00:01:13,970 --> 00:01:16,179
Then click on the “Create” button.

20
00:01:17,080 --> 00:01:24,610
Our new rule is now selected in
the Style panel… so we can use CSS
properties to create picture frames.

21
00:01:25,049 --> 00:01:33,090
Use border… and border
radius… to make the frames.

22
00:01:33,090 --> 00:01:35,420
Use margins to add more
space around the pictures.

23
00:01:38,450 --> 00:01:50,200
Each CSS rule has two parts: the
selector that decides which elements
to style and the CSS properties that
determine the design of these elements.

24
00:01:50,490 --> 00:01:51,140
Have fun!

`),pgTutorialSubtitles.set("shop_location",`1
00:00:03,500 --> 00:00:06,280
We created a CSS rule for images.

2
00:00:06,670 --> 00:00:07,790
But where did it go?

3
00:00:09,090 --> 00:00:11,819
Let’s take a look in the HTML code.

4
00:00:12,270 --> 00:00:18,539
Here we see all the HTML elements,
but there is no sign of our CSS rule.

5
00:00:19,189 --> 00:00:24,130
The reason is that CSS code is
usually stored in a separate
file called a stylesheet.

6
00:00:25,910 --> 00:00:29,650
But how does the page know
which CSS file to use?

7
00:00:30,500 --> 00:00:36,470
That’s done with a link HTML element,
located in the HEAD element of the page.

8
00:00:37,430 --> 00:00:40,140
We can see the LINK element here.

9
00:00:40,340 --> 00:00:47,879
HREF is set to style.css and the
REL attribute tells the browser
that this file is a CSS Stylesheet.

10
00:00:48,840 --> 00:00:55,660
Note that the LINK element is not the
same as the Anchor element that is
used to create links between pages.

11
00:00:56,390 --> 00:01:01,000
Let’s take a look at our
CSS file, called style.css.

12
00:01:01,880 --> 00:01:04,050
Here we can see our rule for images.

13
00:01:04,780 --> 00:01:05,950
The selector...

14
00:01:05,950 --> 00:01:08,300
is followed by CSS
properties and values...

15
00:01:08,580 --> 00:01:10,199
enclosed in curly brackets….

16
00:01:11,690 --> 00:01:20,670
For this adventure, select one of
the images… and then try changing the
image CSS rule in the Style panel…

17
00:01:21,300 --> 00:01:23,949
Notice how the CSS code is changing.

18
00:01:24,420 --> 00:01:25,060
Enjoy!

`),pgTutorialSubtitles.set("shop_style",`1
00:00:03,370 --> 00:00:11,329
For this adventure Mooteetee asked
you to make the frame of her favorite
picture - the rocket - even more special.

2
00:00:11,639 --> 00:00:13,990
What’s the smartest way to do this?

3
00:00:14,770 --> 00:00:18,599
We can leave our CSS rule
for all images as it is.

4
00:00:19,150 --> 00:00:25,749
Then we use the style attribute
of the Rocket image to change
only the design of that element.

5
00:00:26,179 --> 00:00:29,949
Select the rocket image
and go to the Style panel.

6
00:00:30,580 --> 00:00:35,679
There we can see the list of CSS rules
that are active for this element:

7
00:00:36,250 --> 00:00:40,099
The IMG CSS rule and the Style attribute.

8
00:00:40,850 --> 00:00:46,000
If we would edit the IMG CSS
Rule, all pictures would change.

9
00:00:46,230 --> 00:00:49,239
So, let’s select the Style attribute.

10
00:00:49,929 --> 00:00:54,680
All the changes we do now will
only affect the selected element.

11
00:00:55,260 --> 00:00:57,379
Let’s change the color of the border.

12
00:00:57,820 --> 00:01:02,470
The size of the border is still
set by the “IMG” CSS rule.

13
00:01:02,970 --> 00:01:06,540
But its color is changed by
the Style attribute properties.

14
00:01:07,190 --> 00:01:15,500
The Style attribute is stronger, so
properties of the Style attribute,
override the properties of the CSS rule.

15
00:01:16,250 --> 00:01:23,039
This is very useful, because now
we can switch to editing the CSS
rule and make all borders larger.

16
00:01:23,500 --> 00:01:28,020
But the border of the rocket picture
still keeps its special color.

17
00:01:28,719 --> 00:01:30,470
Let’s take a look at the code.

18
00:01:30,990 --> 00:01:35,839
CSS rules are stored in the
stylesheet file “style.css.”

19
00:01:36,550 --> 00:01:43,739
The Style attribute properties are
stored in the HTML code, in the
“Style” attribute of the element.

20
00:01:44,490 --> 00:01:49,429
Play around and explore how CSS rules
and style attribute work together.

21
00:01:49,839 --> 00:01:50,539
Have fun

`),pgTutorialSubtitles.set("class_buttons",`1
00:00:03,580 --> 00:00:07,950
For this adventure, design
buttons for your new space ship.

2
00:00:08,410 --> 00:00:10,420
We will start with an empty page.

3
00:00:10,650 --> 00:00:15,729
First, we have to add HTML elements
that will be our space ship buttons.

4
00:00:16,170 --> 00:00:19,209
We will use BUTTON HTML elements.

5
00:00:20,310 --> 00:00:28,710
The BUTTON element has a starting
Button tag… its text… and a closing tag.

6
00:00:29,179 --> 00:00:31,229
The space ship has six buttons.

7
00:00:31,530 --> 00:00:34,718
So, drag six BUTTON elements to the page.

8
00:00:34,718 --> 00:00:40,637
Edit the text of each BUTTON
with the text edit tool...

9
00:00:40,637 --> 00:00:46,018
to write button labels such
as ON..., OFF..., SPEED UP...

10
00:00:46,018 --> 00:00:59,472
When editing the text of a button
element, we can’t write space characters,
because the button element understands
the space key as pressing the button.

11
00:00:59,472 --> 00:01:07,006
Instead, use the “Insert character”
tool to add a Regular space in the text.

12
00:01:07,006 --> 00:01:07,544
Perfect!

13
00:01:07,544 --> 00:01:11,311
Let’s do the rest of the buttons:

14
00:01:11,311 --> 00:01:14,600
SLOW DOWN..., SPACE HORN… and EJECT.

15
00:01:17,440 --> 00:01:17,970
Great!

16
00:01:18,120 --> 00:01:20,970
We will continue the project
in the next adventure.

`),pgTutorialSubtitles.set("class_buttons_rule",`1
00:00:03,600 --> 00:00:05,370
Let’s continue our adventure!

2
00:00:05,930 --> 00:00:08,390
Classes are names for groups of elements.

3
00:00:08,780 --> 00:00:10,879
We can make up any class name we want.

4
00:00:11,960 --> 00:00:15,570
It is a good idea to use names
that describe what elements do.

5
00:00:16,389 --> 00:00:20,470
In our case, we will use a
class called SPACE BUTTON.

6
00:00:21,350 --> 00:00:28,519
Each class usually also has a CSS
rule that defines the style for
elements that have this class.

7
00:00:29,349 --> 00:00:36,759
On HTML Planet we can at the
same time add a class to an
element and create its CSS rule.

8
00:00:37,790 --> 00:00:40,610
Start by selecting the
first button element.

9
00:00:41,620 --> 00:00:48,409
Then, go to the Style panel and click
on the “Create New CSS Rule button”.

10
00:00:48,790 --> 00:00:52,869
Here we have to choose which
elements this rule will style.

11
00:00:53,430 --> 00:00:59,000
For example, entering BUTTON would
style all Button elements on the page.

12
00:00:59,000 --> 00:01:05,570
But we don’t want to do this
because, we might later add buttons
that are not space ship buttons.

13
00:01:06,110 --> 00:01:11,479
Instead we will enter a class
name, in our case SPACE BUTTON.

14
00:01:12,699 --> 00:01:14,316
Class names can’t contain spaces, so we
will use the name Space Hyphen Button.

15
00:01:14,316 --> 00:01:31,140
To tell the browser that this rule
is targeting a class, we need to
put a dot before the class name.

16
00:01:31,460 --> 00:01:39,059
So, enter DOT space HYPHEN button.

17
00:01:40,840 --> 00:01:46,534
Our CSS rule with the selector
DOT SPACE BUTTON will style all
elements with the CLASS Space Button.

18
00:01:46,534 --> 00:01:46,606
Notice this checkbox.

19
00:01:46,630 --> 00:01:47,128
If checked, the class Space BUTTON
will be added to the selected element.

20
00:01:47,128 --> 00:01:56,627
Without this, the CSS rule would be
created, but the element would not
yet have the class Space Button.

21
00:01:56,627 --> 00:02:03,503
You would have to switch it
on in the attributes panel.

22
00:02:03,503 --> 00:02:06,004
Then click on Create.

23
00:02:06,004 --> 00:02:09,820
Let’s take a look in the HTML code.

24
00:02:10,500 --> 00:02:16,920
We can see that the first Button
element has the class Space BUTTON
listed in its CLASS attribute.

25
00:02:17,670 --> 00:02:24,940
And in the CSS code we can see the
rule DOT SPACE BUTTON which styles
elements with the class Space Button.

26
00:02:25,760 --> 00:02:28,690
We’ll create a cool button style
in the next part of this adventure!

`),pgTutorialSubtitles.set("class_buttons_style",`1
00:00:03,460 --> 00:00:06,660
Now comes the fun
part - designing the button!

2
00:00:07,150 --> 00:00:10,810
Select the first button element
and go to the Style panel.

3
00:00:11,320 --> 00:00:12,004
We don’t want to edit the style
attribute of this element.

4
00:00:12,004 --> 00:00:18,269
We want to edit the CSS rule for
the class Space Button so that we
can use this style on many buttons.

5
00:00:18,670 --> 00:00:24,189
So, make sure that the DOT SPACE BUTTON
rule is selected in the Style panel.

6
00:00:24,759 --> 00:00:27,980
To start, let’s set the
dimensions of the buttons.

7
00:00:29,300 --> 00:00:35,730
Set the Width to 150px…
and the Height to 80px.

8
00:00:37,400 --> 00:00:39,669
Let’s add some space around the button.

9
00:00:40,269 --> 00:00:44,800
Set Margin Left and Right to 10px.

10
00:00:46,960 --> 00:00:50,030
Let’s set the top margin to 10px as well.

11
00:00:51,450 --> 00:00:53,820
Next, let’s style the text.

12
00:00:54,090 --> 00:01:04,050
Set the Font family… Size… and
Text Transform to Uppercase.

13
00:01:05,830 --> 00:01:12,020
The buttons also need more
space on the inside - to push
the text away from the edges.

14
00:01:12,789 --> 00:01:14,879
Padding controls the inner spacing.

15
00:01:15,309 --> 00:01:16,329
Set Padding Left...

16
00:01:16,890 --> 00:01:18,840
and Right to 10px…

17
00:01:21,280 --> 00:01:31,820
For the final touch set the
Border… Use the Equal button
to make all four sides equal…

18
00:01:33,180 --> 00:01:42,130
Border radius creates a nice rounded
effect… Again use the Equal button
to set all corners to the same value.

19
00:01:44,039 --> 00:01:47,679
In the next adventure we will add
the class to the rest of the buttons.

`),pgTutorialSubtitles.set("class_buttons_adding_classes",`1
00:00:03,650 --> 00:00:08,340
So far, only the first Button
element has the class "Space button”.

2
00:00:08,920 --> 00:00:12,249
Classes of an element are
listed in their CLASS attribute.

3
00:00:12,670 --> 00:00:17,360
So, let’s select the first Button
and go to the Attributes panel.

4
00:00:17,910 --> 00:00:20,330
Here we have the Class section.

5
00:00:20,750 --> 00:00:25,660
We can see that the selected element
already has the class “Space Button”.

6
00:00:26,220 --> 00:00:28,619
Let’s select the second Button element.

7
00:00:29,219 --> 00:00:32,980
Here the class “Space
BUTTON” is not active.

8
00:00:33,380 --> 00:00:36,439
This means that the element
doesn’t have this class.

9
00:00:37,339 --> 00:00:42,710
So, click on the class name to
add the class to the element.

10
00:00:43,519 --> 00:00:46,530
Notice that the design of
the element has changed...

11
00:00:46,570 --> 00:00:52,290
because the CSS rule for the class Space
Button now affects this element as well.

12
00:00:53,500 --> 00:00:56,189
Do the same for the rest
of the Button elements.

13
00:00:59,429 --> 00:01:02,570
Let’s take a look at the HTML code.

14
00:01:05,170 --> 00:01:09,000
We can see that all Button elements
have the class space button.

15
00:01:12,260 --> 00:01:12,830
Great.

16
00:01:12,990 --> 00:01:15,110
We now have cool space buttons.

17
00:01:15,360 --> 00:01:17,140
But we are not finished yet!

`),pgTutorialSubtitles.set("class_buttons_subclasses",`1
00:00:04,470 --> 00:00:06,180
All buttons look the same now.

2
00:00:06,490 --> 00:00:15,899
It would be great if the spaceship
pilot could easily see which buttons
turn things on and which buttons
are dangerous if used incorrectly.

3
00:00:16,619 --> 00:00:22,860
For example, buttons ON and SPEED UP
activate the space ship and make it move.

4
00:00:23,710 --> 00:00:26,210
Let’s color these two buttons green.

5
00:00:27,099 --> 00:00:34,200
Instead of using the style attribute
of each button we will create a new
class called Green Space Button.

6
00:00:35,010 --> 00:00:40,190
Select the ON button and click on
the Create new CSS Rule button.

7
00:00:40,560 --> 00:00:53,719
Class names can’t contain spaces, so
write DOT Green Hyphen Space Hyphen Button.

8
00:00:57,529 --> 00:01:06,870
We need the DOT because the
CSS rule is targeting a class.

9
00:01:06,870 --> 00:01:13,046
Leave the checkbox that adds
the new class to the selected
element… then click “Create”.

10
00:01:13,046 --> 00:01:15,540
Now the new CSS rule is selected.

11
00:01:16,490 --> 00:01:18,540
Let’s jump to Attributes panel.

12
00:01:18,850 --> 00:01:26,569
There we can see that the
button has two classes: Space
Button and Green Space Button.

13
00:01:27,059 --> 00:01:30,530
That’s a powerful feature of HTML and CSS.

14
00:01:30,920 --> 00:01:34,420
It let’s us style and combine
classes in a smart way.

15
00:01:35,300 --> 00:01:41,240
Back in the Style panel, keep the
DOT Green Space Button rule selected.

16
00:01:42,070 --> 00:01:49,239
Because the element already has the Space
Button class we don’t have to design
the Green Space button from scratch.

17
00:01:49,580 --> 00:01:50,811
We only need to style the difference.

18
00:01:50,811 --> 00:02:02,020
Here, let’s change the Background
color to green… and change the Border
color to a darker shade of green.

19
00:02:02,020 --> 00:02:09,000
That’s all we need to do
to create a green button.

20
00:02:09,840 --> 00:02:22,570
If we now go to the Space Button
CSS rule and change something, the
green button is also updated because
the element has both classes: space
button and green space button.

21
00:02:22,570 --> 00:02:27,710
Now we can easily make any
other button green as well.

22
00:02:28,720 --> 00:02:38,289
Select the Speed Up button… and
go to the Attributes panel… Keep
the Space Button class and add
the class Green Space Button.

23
00:02:38,879 --> 00:02:40,490
The button is now green!

24
00:02:41,579 --> 00:02:42,119
Great!

25
00:02:42,289 --> 00:02:45,000
We will do the red button
in the next adventure.

`),pgTutorialSubtitles.set("class_buttons_red",`1
00:00:03,620 --> 00:00:07,640
Let’s make the class “Red Space
Button” for the Eject button.

2
00:00:08,290 --> 00:00:09,480
Select the eject button.

3
00:00:11,700 --> 00:00:28,020
Click on the Create New CSS
Rule button and enter DOT Red
Hyphen Space hyphen Button…

4
00:00:29,880 --> 00:00:31,410
Click on the Create button.

5
00:00:32,170 --> 00:00:49,970
Change the Background color to Red… and
Border color to a darker shade of red… Use
the equal button to color all four sides.

6
00:00:52,010 --> 00:00:54,533
Notice that both the space button
rule and the red space button rule
set the border color… How does the
browser decide which color to use?

7
00:00:54,533 --> 00:00:54,747
The order of the CSS rule in the
code is the important factor.

8
00:00:54,747 --> 00:00:55,383
Let’s take a look at the code…

9
00:00:55,383 --> 00:01:00,342
The rule that comes later
in the CSS code is stronger.

10
00:01:00,342 --> 00:01:18,802
In our case we first have the Space
button rule with a gray border color…

11
00:01:18,802 --> 00:01:36,820
However, the Red Space button rule comes
after that and that’s why the browser
will use red for the border color
of elements that have both classes.

12
00:01:37,880 --> 00:01:47,019
So, CSS properties of the first rule and
of the second rule are added together
when painting the element on the screen…

13
00:01:47,660 --> 00:01:54,080
But if some properties are defined
in both rules, the properties of
the rule that comes later win.

14
00:01:54,910 --> 00:01:57,750
This is called CSS rule over-riding.

15
00:01:58,490 --> 00:02:09,820
Notice that in the Style panel the CSS
rules are displayed in the opposite
order - from the most important rule at
the top, down to the least important one.

16
00:02:11,160 --> 00:02:16,610
Style attribute is always at the top
because it is stronger than CSS rules.

17
00:02:17,389 --> 00:02:23,650
Style panel displays only those CSS rules
that are active for the selected element.

18
00:02:24,079 --> 00:02:30,290
For example, the Green Space
Button rule is not shown when
the Red button is selected.

19
00:02:31,390 --> 00:02:33,720
We’ll continue in the next adventure.

20
00:02:33,720 --> 00:02:34,224
Feel free to come up with
your own cool button designs!

`),pgTutorialSubtitles.set("class_buttons_hover",`1
00:00:03,410 --> 00:00:09,490
Right now our buttons stay the
same when we move the mouse
over them or click on them.

2
00:00:10,420 --> 00:00:15,320
CSS lets us set how elements should appear
when the user is interacting with them.

3
00:00:15,870 --> 00:00:23,300
First, we will create the CSS rule
for the hover state, when the mouse
pointer is positioned over the element.

4
00:00:24,120 --> 00:00:29,729
Select one of the buttons and click
on the “create new CSS rule” button.

5
00:00:30,410 --> 00:00:34,379
The rule should work on all elements
with the class Space button.

6
00:00:34,859 --> 00:00:42,570
So, enter the selector Dot…
space… hyphen… button...

7
00:00:44,050 --> 00:00:45,630
But, this is not enough.

8
00:00:45,990 --> 00:00:51,649
We need to tell the browser that
the rule should only be used when
the element is in the hover state.

9
00:00:52,289 --> 00:00:55,949
To do that, we add Colon… Hover…

10
00:00:58,170 --> 00:01:07,990
The whole selector is now DOT space
hyphen button for the class, plus
colon hover for the hover state.

11
00:01:08,539 --> 00:01:09,670
Click on create.

12
00:01:10,410 --> 00:01:11,300
Let’s style the rule.

13
00:01:11,940 --> 00:01:15,940
Change the Border width
of all four sides to 5px…

14
00:01:19,540 --> 00:01:27,330
But we don’t see any change on the
page… We have to move the mouse
over the button to see the effect.

15
00:01:28,009 --> 00:01:30,440
When we move the mouse
away from the element...

16
00:01:31,060 --> 00:01:33,870
the button gets back to its normal state.

17
00:01:34,810 --> 00:01:36,900
How about clicking on the element?

18
00:01:37,260 --> 00:01:38,510
Nothing happens.

19
00:01:39,000 --> 00:01:41,590
The clicked element is
in the Active state.

20
00:01:42,039 --> 00:01:54,480
So, Create a new CSS rule
with the selector Dot… Space…
Hyphen… Button… Colon… Active.

21
00:01:58,219 --> 00:02:00,799
Let’s push the clicked button down a bit.

22
00:02:01,570 --> 00:02:05,270
Set Position to relative… and Top to 5px.

23
00:02:06,100 --> 00:02:11,720
Try clicking on the button…

24
00:02:12,990 --> 00:02:13,950
It looks cool!

25
00:02:14,309 --> 00:02:17,180
But there is an outline
around the clicked button.

26
00:02:17,650 --> 00:02:20,579
This is displayed by
the browser by default.

27
00:02:21,009 --> 00:02:24,240
We can switch it off by going
to the Border section...

28
00:02:25,760 --> 00:02:28,359
and setting the Outline property to None.

29
00:02:30,940 --> 00:02:38,080
Let’s try again… Perfect!

30
00:02:38,080 --> 00:02:38,222
Take a closer look at what’s happening…

31
00:02:38,222 --> 00:02:42,870
When we move the pointer over the
button it goes into the hover state…

32
00:02:43,820 --> 00:02:51,310
Then, when we click on it, it remains
in the hover state and in addition
also goes into the active state.

33
00:02:51,679 --> 00:03:02,720
For this reason, it is recommended
that in the CSS code the rule for
Active comes after the rule for
Hover, so that the Active rule
is stronger than the Hover rule.

34
00:03:03,590 --> 00:03:04,840
Congratulations!

35
00:03:05,060 --> 00:03:07,120
We now have cool space button!

36
00:03:07,820 --> 00:03:10,349
Feel free to create
your own button designs.

`),pgTutorialSubtitles.set("zootata_website_structure",`1
00:00:03,590 --> 00:00:06,680
Congratulations - you got a new project!

2
00:00:07,010 --> 00:00:11,920
Zootata asked you to build a new
website for her Space Rides company.

3
00:00:12,340 --> 00:00:15,919
The most important part of
a website is the content.

4
00:00:16,389 --> 00:00:25,990
Our job when designing a website is to
make the content easy to read, interesting
and to organize it into a clear structure.

5
00:00:26,610 --> 00:00:30,110
To make it easier Zootata
already prepared the text.

6
00:00:30,799 --> 00:00:37,030
First, we will come up with the
structure that will organize the
content to make it easy to understand.

7
00:00:38,170 --> 00:00:42,430
HTML has a bunch of handy
elements that let us do that.

8
00:00:42,950 --> 00:00:48,970
Some important one’s are:
header, section and footer.

9
00:00:49,969 --> 00:00:51,949
Each of them has a starting tag...

10
00:00:53,850 --> 00:00:54,850
its content...

11
00:00:57,260 --> 00:00:58,780
and it’s closing tag...

12
00:01:00,160 --> 00:01:01,650
Let’s start building.

13
00:01:02,179 --> 00:01:09,970
On the top of the page we will
have the Header with the main
Heading and the short description
of what Zootata’s company does.

14
00:01:10,619 --> 00:01:12,980
The Header element is perfect for this.

15
00:01:13,490 --> 00:01:16,360
So let’s drag one to the page...

16
00:01:17,340 --> 00:01:20,879
Next, we will have a section
about the space rides.

17
00:01:21,420 --> 00:01:28,270
Drag a Section element to the page
and place it after the header element.

18
00:01:29,420 --> 00:01:33,490
After this comes the section with
the video about the space rides.

19
00:01:34,050 --> 00:01:36,960
We will again use a
Section element for this...

20
00:01:38,160 --> 00:01:42,889
Happy customers left many positive
reviews after their space rides.

21
00:01:43,539 --> 00:01:46,070
We will display them
in the next Section...

22
00:01:47,410 --> 00:01:52,870
At this point, many website visitors will
be interested in taking a space ride.

23
00:01:53,340 --> 00:01:56,989
So we need a way for them to
get in touch with Zootata.

24
00:01:58,620 --> 00:02:01,730
Let’s add a “Contact us”
Section to the page...

25
00:02:04,529 --> 00:02:08,940
Finally, we need the footer with
the name of the Space rides company.

26
00:02:09,410 --> 00:02:13,360
As the name suggests, we will use
the Footer element for this...

27
00:02:15,170 --> 00:02:15,640
Perfect!

28
00:02:15,870 --> 00:02:20,360
Use the Structure tree to make sure
that everything is neatly organized...

29
00:02:21,349 --> 00:02:23,949
We should have the Body
element with the Header...

30
00:02:25,679 --> 00:02:26,689
four sections...

31
00:02:26,689 --> 00:02:30,690
and the footer...

32
00:02:31,780 --> 00:02:37,649
If elements are not in the
correct order we can use the
structure tree to rearrange them.

`),pgTutorialSubtitles.set("zootata_website_ids",`1
00:00:03,600 --> 00:00:08,670
It would be nice if we could name sections
so that we can easily know which is which.

2
00:00:09,210 --> 00:00:12,199
The ID attribute is the perfect solution.

3
00:00:13,139 --> 00:00:19,410
Every HTML element can have an ID
attribute that let’s us name the element.

4
00:00:20,320 --> 00:00:23,300
But it is important that IDs are unique.

5
00:00:23,660 --> 00:00:29,439
This means that the same ID value is not
used on more than one element on the page.

6
00:00:30,400 --> 00:00:35,540
Select the first section… and
go to the Attributes panel…

7
00:00:37,530 --> 00:00:39,600
Set the ID to Rides.

8
00:00:42,740 --> 00:00:48,410
Select the next section…
and set its ID to Video.

9
00:00:51,120 --> 00:00:54,490
The ID of the third one… is Quotes.

10
00:00:57,040 --> 00:00:58,950
The last one is Contact.

11
00:01:01,340 --> 00:01:05,090
We can now see Section IDs
in the Structure panel.

12
00:01:05,309 --> 00:01:08,609
The Hash symbol stands
for the ID attribute.

13
00:01:08,809 --> 00:01:11,270
We will work on the Header in
the next part of the adventure.

`),pgTutorialSubtitles.set("zootata_website_header",`1
00:00:03,720 --> 00:00:07,170
The header is the most
important part of the website.

2
00:00:07,630 --> 00:00:09,530
Aliens and people are busy.

3
00:00:09,880 --> 00:00:18,339
Most of the website visitors will
just take a quick look at the
header and immediately decide if
they want to read further or not.

4
00:00:19,330 --> 00:00:26,110
So, we have to use this space
to explain what the website
is about with just few words.

5
00:00:26,880 --> 00:00:33,380
First, let’s add the Heading
1 with the name of Zootata’s
company: Super Space Rides.

6
00:00:34,269 --> 00:00:36,299
But the heading is not enough.

7
00:00:36,549 --> 00:00:40,410
We need to give a short explanation
of what the company does.

8
00:00:41,310 --> 00:00:44,430
So, add a Paragraph
with the description...

9
00:00:45,769 --> 00:00:49,760
Next, let’s use Padding to
create more space in the Header…

10
00:00:50,650 --> 00:00:51,600
Select the header.

11
00:00:52,719 --> 00:01:03,820
Add 40px of padding on the
left…, right… and on the top…

12
00:01:07,070 --> 00:01:13,440
On the bottom we need more space,
so that we can later add a nice
background image to the header.

13
00:01:14,470 --> 00:01:18,410
180px at the bottom feels about right…

14
00:01:21,220 --> 00:01:23,940
Now, let’s add the background image.

15
00:01:24,420 --> 00:01:28,140
Zootata gave us a nice photo
of her and her space ship.

16
00:01:30,680 --> 00:01:35,180
Enter spacerides1.jpg into
the Background image field…

17
00:01:37,090 --> 00:01:44,230
Set Repeat to No repeat… and
Position to Right Bottom..., so
that we will always see Zootata.

18
00:01:46,709 --> 00:01:51,409
Set Size to Cover, so that the
image covers the whole header.

19
00:01:52,649 --> 00:01:53,349
Perfect!

20
00:01:53,479 --> 00:01:56,550
We just need to make
the text more visible.

21
00:02:00,920 --> 00:02:02,849
Set Text color to white.

22
00:02:04,629 --> 00:02:12,060
By setting the text color on the
Header, all text elements inside
the Header use this color as well.

23
00:02:13,140 --> 00:02:17,800
Until now we were styling the Style
attribute of the Header element.

24
00:02:18,250 --> 00:02:23,730
That’s a quick way to design elements
without having to think about CSS rules.

25
00:02:24,730 --> 00:02:34,620
Once we have the design ready,
we can create a CSS rule for it,
so that styles of the page are
neatly stored in the CSS file.

26
00:02:36,679 --> 00:02:42,230
Click on the “Save style as a CSS
rule” icon in the Style Attribute…

27
00:02:44,990 --> 00:02:47,350
Now we need a selector for the CSS rule.

28
00:02:47,780 --> 00:02:49,850
The simpler, the better.

29
00:02:50,620 --> 00:02:57,170
Because we will only have one
Header element on the page we can
simply use Header as the selector.

30
00:02:57,820 --> 00:03:00,170
There is no need to create a class.

31
00:03:00,779 --> 00:03:05,489
This means that the CSS rule will
style all Header elements on the page.

32
00:03:06,070 --> 00:03:07,959
Then click on Create.

33
00:03:08,840 --> 00:03:11,770
We now have the CSS rule for the header.

34
00:03:12,400 --> 00:03:16,209
In the next adventure we will
continue with other sections.

35
00:03:16,600 --> 00:03:19,620
We will work on detailed
page design later.

`),pgTutorialSubtitles.set("zootata_website_rides_1",`1
00:00:03,740 --> 00:00:07,040
Let’s continue with the
section about the space rides.

2
00:00:07,440 --> 00:00:10,469
The rides section comes
right after the header.

3
00:00:11,139 --> 00:00:13,830
Check the structure
panel if you’re not sure.

4
00:00:14,610 --> 00:00:18,020
First, drag the Heading
to the Rides section.

5
00:00:18,570 --> 00:00:22,349
Here we will use the
Heading 2 HTML element.

6
00:00:23,000 --> 00:00:27,345
HTML has six levels of Headings,
from Heading 1 to Heading 6.

7
00:00:27,345 --> 00:00:32,970
We use the headings to
structure the content.

8
00:00:34,039 --> 00:00:36,600
Heading 1 is the most important one.

9
00:00:36,880 --> 00:00:40,290
Usually, we have just one
Heading 1 on the page.

10
00:00:40,630 --> 00:00:46,610
In our case, it is used for the main
title of the page: Super Space Rides.

11
00:00:47,370 --> 00:00:50,000
Below this we have content sections.

12
00:00:50,589 --> 00:00:53,009
Each section will have its own Heading.

13
00:00:53,670 --> 00:01:04,070
Because Heading 1 is already used
for the main title, we will use
the next available heading level
- Heading 2 - for section headings.

14
00:01:04,690 --> 00:01:10,940
Drag the Our Rides Heading 2 and
place it inside the Rides section.

15
00:01:11,709 --> 00:01:18,850
Next, drag the Paragraph with the
introduction and place it inside the
Rides section, after the Heading 2.

16
00:01:21,170 --> 00:01:25,079
Then, drag in the three
Paragraphs about the space rides.

17
00:01:25,580 --> 00:01:32,330
One… Two… Three…

18
00:01:33,590 --> 00:01:35,510
Each space ride has a name.

19
00:01:35,920 --> 00:01:37,640
Wobbly Jelly Asteroid belt...

20
00:01:39,389 --> 00:01:44,380
Underground Space Cave…
Black Hole Retreat…

21
00:01:45,740 --> 00:01:49,290
It would be great if these
names would also be headings.

22
00:01:49,800 --> 00:01:56,660
Heading 2 is used for the
section title, so we will use
Heading 3 for its sub-sections.

23
00:01:57,490 --> 00:02:00,830
But we need to rearrange the text first.

24
00:02:01,469 --> 00:02:07,470
Select the first space ride Paragraph…
and activate the Text edit tool.

25
00:02:08,389 --> 00:02:13,890
Delete the hyphen and spaces after
the ride name and then press Enter.

26
00:02:14,720 --> 00:02:19,720
This will split the name and the
description into two separate paragraphs.

27
00:02:20,650 --> 00:02:28,490
Next, select the Ride name and
click on the More actions tool
in the selected element menu.

28
00:02:29,560 --> 00:02:32,450
Select Change to… Heading 3.

29
00:02:33,700 --> 00:02:38,220
The Paragraph was changed into Heading 3.

30
00:02:38,220 --> 00:02:40,359
Do the same for the other two rides…

31
00:02:41,329 --> 00:02:54,833
The second one… and the third one...

32
00:02:54,833 --> 00:03:06,709
Let’s add some Padding to the section…

33
00:03:07,330 --> 00:03:08,800
Select the Section element.

34
00:03:10,990 --> 00:03:13,450
Set Padding Left to 40px...

35
00:03:15,339 --> 00:03:19,880
and click on the equal button to use
the same value on all four sides.

36
00:03:21,090 --> 00:03:28,320
Click on the Save as CSS Rule icon…
and enter the selector Section...

37
00:03:30,309 --> 00:03:34,819
because we want all section elements
on the page to have this style.

38
00:03:37,050 --> 00:03:38,040
Click Create.

39
00:03:39,040 --> 00:03:39,540
Great!

40
00:03:39,880 --> 00:03:41,510
Let’s check the structure:

41
00:03:42,360 --> 00:03:55,990
We have the Rides section… with the
Heading 2 section title… Introduction
paragraph… followed by the three rides…
Each has a Heading 3 and a paragraph…

42
00:03:56,930 --> 00:04:02,209
If something is not in the correct
order, use the Structure panel to fix it.

43
00:04:02,809 --> 00:04:05,440
We’ll add images in the next adventure.

`),pgTutorialSubtitles.set("zootata_website_rides_2",`1
00:00:03,560 --> 00:00:06,280
Let’s add images to the rides section.

2
00:00:06,870 --> 00:00:09,919
Zootata gave us one image from each ride.

3
00:00:10,530 --> 00:00:18,130
Drag the first image… and place
it right after the Heading
Wobbly Jelly Asteriod Belt.

4
00:00:18,889 --> 00:00:20,639
The image is very large.

5
00:00:21,019 --> 00:00:27,630
In previous adventures we used
image width and height attributes
to change the size of the image.

6
00:00:28,750 --> 00:00:31,059
But we can do the same with CSS.

7
00:00:32,110 --> 00:00:41,100
Using CSS will let us create CSS rules
for all images on the page, so that
we don’t have to do them one by one.

8
00:00:42,060 --> 00:00:47,300
Keep the image selected and go to the
Dimensions section in the Style panel.

9
00:00:48,139 --> 00:00:51,210
Set the Width to 280px…

10
00:00:52,260 --> 00:00:57,990
The height is automatically adjusted so
that the image keeps its proportions.

11
00:00:58,750 --> 00:01:04,690
It would look great if the text would flow
around the image… here on the right side…

12
00:01:05,840 --> 00:01:10,139
We can do that by telling the
image to Float on the Left side.

13
00:01:10,879 --> 00:01:13,129
Go down to the Display section...

14
00:01:14,299 --> 00:01:22,030
Setting the Float to Left makes the
image stay on the left side and the
text flow around it on the right side.

15
00:01:23,110 --> 00:01:29,499
Setting it to Right puts the
image on the right side with the
text flowing on the left side.

16
00:01:30,359 --> 00:01:32,320
Let’s use Float Left here.

17
00:01:33,080 --> 00:01:36,050
We need to add more
space around the image.

18
00:01:36,600 --> 00:01:40,100
We will use Margins to
create space around it.

19
00:01:41,179 --> 00:01:46,990
Set margin right to 20px…
and Margin Bottom to 40px…

20
00:01:49,690 --> 00:01:49,720
Nice.

21
00:01:52,050 --> 00:01:58,859
But notice that the image is
so large that the text from the
second space ride comes up us well.

22
00:02:00,270 --> 00:02:05,409
We need a way to tell the element that it
should not go next to a floating element.

23
00:02:05,770 --> 00:02:07,979
That’s what Clear property does.

24
00:02:08,539 --> 00:02:11,970
But we should not set it
on the floating image.

25
00:02:12,290 --> 00:02:16,630
It has to be on the element that
should stay below the floating element.

26
00:02:17,070 --> 00:02:19,890
In our case that is the Ride heading.

27
00:02:20,480 --> 00:02:26,410
Select the Heading of the second ride…
and set its Clear property to Both.

28
00:02:27,370 --> 00:02:35,110
Both means that it will go after
any floating element, regardless
if it is floating left or right.

29
00:02:35,520 --> 00:02:35,570
Clever.

30
00:02:35,580 --> 00:02:42,370
In the next adventure we will
create CSS rules for these styles
and finish the Rides section.

`),pgTutorialSubtitles.set("zootata_website_rides_3",`1
00:00:03,510 --> 00:00:07,760
So far we were using Style
attribute to style elements.

2
00:00:08,220 --> 00:00:14,040
Let’s save these styles as CSS
rules so that we can use them
on other elements on the page.

3
00:00:14,880 --> 00:00:17,209
Select the image of the first ride.

4
00:00:17,699 --> 00:00:20,839
click on the Save CSS rule icon…

5
00:00:21,439 --> 00:00:29,529
We will create class Image Left…
We will use it for images that are
floating on the left side of the text.

6
00:00:30,450 --> 00:00:36,130
Because this rule will style
a class we need to put a Dot
at the start of the selector.

7
00:00:37,040 --> 00:00:45,050
Next comes the class
name: image… hyphen… left…

8
00:00:47,400 --> 00:00:50,860
We need the hyphen because class
names can’t contain spaces.

9
00:00:51,000 --> 00:00:58,120
Leave the checkbox on so that
the class Image left will
also be added to the image.

10
00:00:59,540 --> 00:01:00,640
Click Create.

11
00:01:01,540 --> 00:01:05,980
Next, let’s do the Heading where
we added the Clear property.

12
00:01:06,490 --> 00:01:11,710
Select it and click on
the Save as CSS rule icon…

13
00:01:12,590 --> 00:01:16,710
In this case we want all
Heading 3s to clear the float.

14
00:01:17,100 --> 00:01:22,170
So we can create a CSS rule
for all Headings 3 on the page.

15
00:01:23,349 --> 00:01:29,730
Enter H3 in the selector
field… and click Create.

16
00:01:31,260 --> 00:01:37,220
Let’s add the image to the second
ride… Place it after the ride heading…

17
00:01:38,150 --> 00:01:39,400
Set the Width to 280px.

18
00:01:42,940 --> 00:01:47,769
We can have this image on the right
side of the text for a change…

19
00:01:48,359 --> 00:01:58,929
So, set Float to Right… Margin left
to 20px… and Margin bottom to 40px.

20
00:02:02,919 --> 00:02:05,340
Save this CSS rule as DOT...

21
00:02:06,480 --> 00:02:07,120
Image...

22
00:02:08,910 --> 00:02:09,170
Hyphen...

23
00:02:10,669 --> 00:02:11,140
Right…

24
00:02:14,240 --> 00:02:17,280
Next, do the image for the third ride…

25
00:02:18,050 --> 00:02:27,550
Let’s have it on the left side
of the text so that we get a
nice pattern Left… Right… Left…

26
00:02:28,910 --> 00:02:33,300
Instead of styling the image we
can just add the class Image Left….

27
00:02:34,820 --> 00:02:41,990
Go to the Attributes panel… and
click on the class Image Left…

28
00:02:42,190 --> 00:02:42,350
Perfect!

29
00:02:42,639 --> 00:02:44,350
See you in the next adventure!

`),pgTutorialSubtitles.set("zootata_website_video",`1
00:00:03,500 --> 00:00:07,870
Now comes the fun part - adding
a video to the page.

2
00:00:08,320 --> 00:00:11,810
The video will come in the
section after Our Rides.

3
00:00:12,630 --> 00:00:15,520
First, let’s add the section heading.

4
00:00:16,129 --> 00:00:19,090
Section headings use Heading 2 elements.

5
00:00:19,880 --> 00:00:24,310
Drag the Heading 2 and place
it inside the Video section.

6
00:00:25,050 --> 00:00:29,339
Add the short description of the
section right after the heading.

7
00:00:30,130 --> 00:00:35,830
Zootata prepared a short video about her
space rides and uploaded it to YouTube.

8
00:00:36,680 --> 00:00:43,071
Click on the link to open
the video on YouTube...

9
00:00:43,071 --> 00:00:47,455
It’s fun but we will watch it later.

10
00:00:47,455 --> 00:00:54,369
We need to get the HTML code that
will display the video on our website.

11
00:00:54,369 --> 00:00:54,779
//youtu.be/1ZcU27hgwHE

12
00:00:55,189 --> 00:00:59,080
Click on Share… and select Embed…

13
00:01:00,060 --> 00:01:05,729
This shows us the HTML code for
displaying the vide on our website.

14
00:01:06,460 --> 00:01:09,920
The code is using the Iframe HTML element.

15
00:01:10,359 --> 00:01:19,630
Iframe is used to include video, audio,
maps or whole pages from a different
website as the content of our webpage.

16
00:01:20,010 --> 00:01:23,569
For now, we don’t have to
understand all the details.

17
00:01:24,190 --> 00:01:26,589
Let’s add the code to our website.

18
00:01:27,179 --> 00:01:28,360
Copy the code…

19
00:01:29,340 --> 00:01:34,210
Back on the HTML Planet drag
the Iframe to the Video section.

20
00:01:35,370 --> 00:01:42,420
When we add it to the page
a dialog box pops up asking
us for the Iframe HTML code.

21
00:01:43,070 --> 00:01:48,309
Paste in the copied code… and click on OK.

22
00:01:48,309 --> 00:01:49,157
The video is now displayed on the page!

23
00:01:49,157 --> 00:01:57,627
YouTube sets the fixed width of the
iframe when generating the code.

24
00:01:57,627 --> 00:02:00,378
That size probably
doesn’t work for our page.

25
00:02:00,378 --> 00:02:03,294
Here, the video is poking out of the page.

26
00:02:03,299 --> 00:02:05,569
CSS can help us with this.

27
00:02:05,569 --> 00:02:07,739
Set the Width to 100%.

28
00:02:07,739 --> 00:02:12,406
This will make the Iframe fit
perfectly into the available space.

29
00:02:12,406 --> 00:02:14,979
Save the style as CSS rule
with the selector Iframe.

30
00:02:14,979 --> 00:02:25,340
This rule will come handy if we
add more Iframes in the future.

31
00:02:26,000 --> 00:02:27,810
There is one thing to remember.

32
00:02:28,130 --> 00:02:33,310
In HTML Planet we can’t select the
Iframe element by clicking on it.

33
00:02:33,809 --> 00:02:39,199
When we click on it the video
starts playing because the
Iframe handles the click.

34
00:02:39,820 --> 00:02:45,430
If we need to select an Iframe, go to
the Structure panel and select it there.

35
00:02:46,020 --> 00:02:47,920
Have fun watching the video!

`),pgTutorialSubtitles.set("zootata_website_quotes_1",`1
00:00:03,510 --> 00:00:06,109
Zootata has many happy customers.

2
00:00:06,380 --> 00:00:10,580
It is a good idea to share their
positive reviews on the website.

3
00:00:11,030 --> 00:00:13,229
We will do this in the Quotes section.

4
00:00:13,670 --> 00:00:17,060
First drag the Heading 2 into the section…

5
00:00:19,189 --> 00:00:22,890
Then, add the paragraph with
the section introduction…

6
00:00:24,250 --> 00:00:31,080
Each quote will have an image of
the customer, a text with the quote,
signed by the customer’s name.

7
00:00:31,730 --> 00:00:36,980
We need a way to group all
of these together, so that
we can easily style them.

8
00:00:37,640 --> 00:00:41,559
DIV element is perfect for
creating a group of elements.

9
00:00:42,019 --> 00:00:44,839
Each quote will be in its own DIV element.

10
00:00:45,349 --> 00:00:46,950
Let’s do the first quote.

11
00:00:47,650 --> 00:00:50,970
Drag the empty DIV element
to the Quotes section…

12
00:00:52,830 --> 00:01:00,909
Add the Image… Quote… and Signature…

13
00:01:04,449 --> 00:01:12,775
Use the Structure panel to
make sure that all three are
placed inside the DIV element…

14
00:01:12,775 --> 00:01:19,930
The image is too big… Select
it and set the Width to 150px.

15
00:01:23,000 --> 00:01:29,449
Let’s also make it round by setting the
Border radius to 50% on all four corners.

16
00:01:33,209 --> 00:01:35,980
We can make the quote
look like a postcard.

17
00:01:36,430 --> 00:01:41,150
Select the DIV… and set
the Text align to Center.

18
00:01:41,900 --> 00:01:48,190
Setting such CSS properties on the parent
element affects all its sub-elements.

19
00:01:48,799 --> 00:01:52,649
Let’s use Padding to create
more space on the inside…

20
00:01:53,639 --> 00:01:58,359
Set Padding Left, Top and Right to 20px…

21
00:02:03,259 --> 00:02:10,750
We don’t have to add so much padding
at the bottom because the Paragraph
already has enough margin at the bottom.

22
00:02:11,140 --> 00:02:19,102
But if the parent element has no padding
on the top or bottom, the margin on that
side sticks out of the parent element.

23
00:02:19,102 --> 00:02:24,289
This is a special CSS thing
we have to keep in mind.

24
00:02:25,320 --> 00:02:34,440
Just add 1px of padding on the bottom… The
paragraph margin now works as expected.

25
00:02:35,480 --> 00:02:44,250
Let’s add border for the final
touch: 1px of solid gray border
on all four sides looks good....

26
00:02:45,350 --> 00:02:50,610
We can’t distinguish the quote from
the signature… they both look the same.

27
00:02:51,610 --> 00:02:54,390
Let’s enclose the quote with speech marks.

28
00:02:55,240 --> 00:02:59,649
Select the quote and
activate the Text edit mode.

29
00:03:01,000 --> 00:03:03,470
Put the cursor at the start and
use the Insert character to insert
a nice looking opening quote.

30
00:03:03,470 --> 00:03:14,199
At the end, insert the closing quote…

31
00:03:17,529 --> 00:03:17,749
Nice!

32
00:03:17,969 --> 00:03:20,830
In the next part we will
do the rest of the quotes.

`),pgTutorialSubtitles.set("zootata_website_quotes_2",`1
00:00:03,540 --> 00:00:11,749
Before we do the rest of the quotes, it
is a good idea to save the styles as CSS
rules that we can reuse on other quotes.

2
00:00:12,379 --> 00:00:18,360
Select the DIV with the quote… At the
moment we are using the Style attribute…

3
00:00:19,689 --> 00:00:25,350
Click on the Save as CSS rule icon…
What would be the best selector?

4
00:00:26,840 --> 00:00:32,990
We can’t style all DIVs on the
page because we might use them
for other things, not just quotes.

5
00:00:34,230 --> 00:00:38,059
In such case it the
best to create a class.

6
00:00:38,779 --> 00:00:45,949
Enter DOT Quote.

7
00:00:45,949 --> 00:00:51,279
This will create the CSS rule for
the class Quote and also add the
class Quote to the selected element.

8
00:00:52,589 --> 00:00:53,769
Click Create.

9
00:00:54,769 --> 00:00:59,800
Next, select the Image… It is
also using the style attribute.

10
00:01:00,940 --> 00:01:11,682
Save it as a new CSS rule… with
a selector DOT Quote Hyphen Image.

11
00:01:11,682 --> 00:01:12,495
Great!

12
00:01:12,495 --> 00:01:16,559
Let’s add two more quotes.

13
00:01:16,559 --> 00:01:21,940
The simplest way is to make
copies of the first quote.

14
00:01:22,660 --> 00:01:33,120
Select it… and click
on the Duplicate icon…

15
00:01:33,120 --> 00:01:33,522
Now change the content…

16
00:01:33,522 --> 00:01:36,880
Select the image and change Src
attribute to spacerides6.jpg.

17
00:01:39,980 --> 00:01:55,470
Next, select the quote paragraph and
activate Edit text tool… Remove the
existing text between the quotes and
then paste or type-in the new text…

18
00:02:00,719 --> 00:02:02,549
Do the same for the signature…

19
00:02:10,799 --> 00:02:13,779
Use the same approach
to do the third quote…

20
00:02:13,789 --> 00:02:43,850
We can see that the quotes
are squished together.

21
00:02:44,560 --> 00:02:48,970
Let’s create space between them
by using the Margin property.

22
00:02:49,580 --> 00:02:54,999
Select one of the quotes and make sure
that the Qoute CSS rule is selected.

23
00:02:56,170 --> 00:02:59,779
Set Margin top and Bottom to 30px.

24
00:03:04,639 --> 00:03:11,270
All three quotes got the same
spacing because we changed the
CSS rule for the class quote.

25
00:03:12,460 --> 00:03:16,799
Notice how bottom and top margins
of two elements work together.

26
00:03:17,910 --> 00:03:26,489
This quote has a 30px margin on
the top, and the preceding quote
has a 30px margin at the bottom.

27
00:03:27,440 --> 00:03:35,899
But these two margins are not simply
added together to create 60px of
space between the two elements.

28
00:03:36,530 --> 00:03:40,930
The two margins combine together
to create 30px of space.

29
00:03:42,710 --> 00:03:43,829
The quotes are done.

`),pgTutorialSubtitles.set("zootata_website_contact_1",`1
00:00:03,470 --> 00:00:06,050
It’s time to do the Contact us section.

2
00:00:06,720 --> 00:00:12,259
This section is very important
because it lets website visitors
get in touch with Zootata.

3
00:00:13,080 --> 00:00:15,889
Let’s start with the
Heading 2 for the section…

4
00:00:16,600 --> 00:00:19,650
Next, we need a Get in touch button.

5
00:00:20,710 --> 00:00:29,090
We will use the Anchor element
for the button because we will
create a special link that will
let people send email to Zootata.

6
00:00:29,860 --> 00:00:36,849
Drag the Anchor to the contact section…
and change its text to Get in touch!

7
00:00:41,179 --> 00:00:47,969
Use the Structure panel to make sure
that both elements are correctly
located in the Contact section.

8
00:00:48,750 --> 00:00:51,390
This section should visually stand out.

9
00:00:52,100 --> 00:01:04,980
Select the Section… go to the
Style panel… and set Background
image to background1.jpg.

10
00:01:10,000 --> 00:01:14,329
Set Repeat to No repeat…
and Size to Cover.

11
00:01:15,959 --> 00:01:25,130
Set Text align to center and the
Text color to white so that we can
read it on the dark background.

12
00:01:27,610 --> 00:01:30,415
The link text color didn’t change because
anchors have their own special color.

13
00:01:30,415 --> 00:01:30,540
Let’s do the link button!

14
00:01:30,540 --> 00:01:41,309
Select the Anchor element and
set the Font Size to 25px.

15
00:01:48,039 --> 00:01:58,049
Add 10px of Padding on the top and bottom…
and 30px on the left and the right…

16
00:02:01,559 --> 00:02:11,590
Set Background color to a shade
of orange… and the Text color
to white… Set Text decoration
to None to remove the underline.

17
00:02:15,389 --> 00:02:17,470
Use Border radius to round the button.

18
00:02:24,690 --> 00:02:28,609
We need more space above
and below the button.

19
00:02:29,020 --> 00:02:33,290
But if we try to set the
Margin, it has no effect.

20
00:02:35,160 --> 00:02:42,629
The reason is that elements
like Anchor, Span and Images are
displayed as parts of lines of text.

21
00:02:43,899 --> 00:02:46,239
They are like words in a sentence.

22
00:02:46,869 --> 00:02:52,660
They are displayed in line
and their vertical spacing is
controlled by their parent element.

23
00:02:53,920 --> 00:02:58,910
But we can change this by
setting the Display CSS property.

24
00:03:00,809 --> 00:03:02,859
Let’s take a look at its values:

25
00:03:03,540 --> 00:03:05,560
None hides the element.

26
00:03:06,310 --> 00:03:09,290
Inline is the default
setting for the Anchor.

27
00:03:09,870 --> 00:03:13,519
We can have multiple inline
elements in the same line.

28
00:03:14,309 --> 00:03:17,630
Block makes the element behave like a Div.

29
00:03:18,090 --> 00:03:24,950
It takes up all available horizontal
space and we can use margin
to control its vertical space.

30
00:03:26,620 --> 00:03:36,999
Inline block combines the two: the
element flows in the text, takes
up only as much space as needed
and has its own vertical spacing.

31
00:03:38,049 --> 00:03:41,060
So, Inline block is the one we need.

32
00:03:41,780 --> 00:03:47,640
The button keeps its width but
we can use Margins to create
space on the top and bottom.

33
00:03:48,050 --> 00:03:54,230
Set Margin top to 10px…
and Bottom to 20px…

34
00:03:56,020 --> 00:03:59,470
We will finish the Contact
section in the next adventure.

`),pgTutorialSubtitles.set("zootata_website_contact_2",`1
00:00:03,470 --> 00:00:06,450
We are still working on
the Contact us section.

2
00:00:06,570 --> 00:00:10,440
Let’s first save styles to CSS rules.

3
00:00:11,040 --> 00:00:16,028
Select the Contact Section
element… and Save the Style
attribute as a new CSS rule.

4
00:00:16,028 --> 00:00:16,072
Which selector would work the best?

5
00:00:16,072 --> 00:00:16,165
Remember that we previously set the Id
attribute of the Section to Contact.

6
00:00:16,165 --> 00:00:23,729
We can use this id in the selector
to target only this specific element.

7
00:00:23,729 --> 00:00:24,629
Enter Contact in the selector.

8
00:00:24,629 --> 00:00:42,269
But we need to tell the browser that
this is an Id, not a name of an element.

9
00:00:43,110 --> 00:00:46,900
To do that add the Hash
character before the id.

10
00:00:47,929 --> 00:00:51,479
So, the selector is HASH Contact.

11
00:00:52,239 --> 00:00:56,810
The rule will affect the element
with the Id attribute Contact.

12
00:00:57,340 --> 00:00:57,890
Btw.

13
00:00:58,440 --> 00:01:03,260
there should not be more elements on
the page with the same id attribute.

14
00:01:04,160 --> 00:01:05,429
Click Create.

15
00:01:05,840 --> 00:01:07,560
Let’s also do the button.

16
00:01:08,000 --> 00:01:18,700
Select the button and save its
style as a CSS rule with the
selector DOT Big hype Button.

17
00:01:21,539 --> 00:01:26,239
We are creating a class because we
might add more such buttons later.

18
00:01:27,200 --> 00:01:35,270
While we are on the button, let’s also
add style for the hovered class, so that
people know that this is a clickable link.

19
00:01:35,770 --> 00:01:40,070
At the moment nothing happens if
we move the mouse over the button.

20
00:01:41,059 --> 00:01:53,520
Click on Create New CSS Rule and enter
the selector DOT Big Button Colon Hover.

21
00:01:54,560 --> 00:01:58,030
Create the rule and keep it
selected in the Style panel.

22
00:01:58,330 --> 00:02:00,850
Set the Text decoration to Underline.

23
00:02:02,200 --> 00:02:10,280
If we hover the button now the text
becomes underlined, telling users that
something will happen if they click on it.

24
00:02:11,060 --> 00:02:16,829
All we need to do now is set the
Href attribute for the Anchor.

25
00:02:16,829 --> 00:02:18,109
Go to the Attributes panel.

26
00:02:18,700 --> 00:02:29,610
Set the Href to mailto colon
zootata at example dot com.

27
00:02:33,230 --> 00:02:43,620
Using the mailto link opens the
Compose new email screen in user’s
Email app, so that they can easily
send email to the specified address.

28
00:02:44,140 --> 00:02:51,759
In this case people will be able
to easily get in touch with Zootata
and arrange space rides with her.

29
00:02:52,670 --> 00:02:58,190
For this to work, an email account needs
to be configured on the user’s computer.

`),pgTutorialSubtitles.set("zootata_website_footer",`1
00:00:03,240 --> 00:00:07,470
The final section of the website
is the footer at the bottom.

2
00:00:07,830 --> 00:00:12,990
There we will display notices about
the owners and authors of the website.

3
00:00:13,900 --> 00:00:16,549
Drag the paragraph into
the Footer element.

4
00:00:16,730 --> 00:00:22,930
Use the Text editor to insert
a Copyright symbol at the
beginning of the footer text.

5
00:00:23,280 --> 00:00:30,050
That means that people can’t
reuse the content of this website
without permission from its owners.

6
00:00:30,380 --> 00:00:32,040
Select the Footer element.

7
00:00:32,259 --> 00:00:37,920
Use the breadcrumbs at the bottom
of the page to make sure that
the right element is selected.

8
00:00:38,840 --> 00:00:42,440
Having a dark background will
make the footer look heavy.

9
00:00:43,040 --> 00:00:45,620
That’s good for the ending of the page.

10
00:00:47,980 --> 00:00:56,110
Make the text white with
some transparency, so that it
doesn’t take attention away
from the Contact us section.

11
00:00:58,670 --> 00:01:02,000
Align the text to the center...

12
00:01:02,000 --> 00:01:11,470
Let’s add 20px of Padding on the top
and bottom… and 40px on both sides…

13
00:01:15,280 --> 00:01:24,669
Let’s save the style as a new CSS rule…
We can use the selector Footer because we
only have one footer element on the page.

14
00:01:25,580 --> 00:01:36,740
For the final touch we can add more
space at the bottom of the Contact us
section… We are talking about Space
rides, so we can show more space.

15
00:01:37,120 --> 00:01:43,229
Select the Contact section and
select the Hash Contact CSS rule.

16
00:01:43,740 --> 00:01:47,740
Increase the Padding
bottom to 120px or so.

17
00:01:50,770 --> 00:01:51,940
This looks better.

18
00:01:52,250 --> 00:01:54,500
We did a good job with the website.

19
00:01:55,000 --> 00:02:00,090
Sign your name in the footer text
to let everybody in the Universe
know that you are the author.

20
00:02:00,590 --> 00:02:04,000
But we are not done yet.

`),pgTutorialSubtitles.set("zootata_website_pageinfo",`1
00:00:03,400 --> 00:00:08,950
So far we have been working with HTML
elements that we can see on the page.

2
00:00:09,440 --> 00:00:14,370
But a website also has information
that is not displayed directly.

3
00:00:15,219 --> 00:00:16,320
Let’s take a look.

4
00:00:16,320 --> 00:00:22,580
Select the top HTML element
and go to the Attributes panel.

5
00:00:23,770 --> 00:00:26,310
There we have a group of fields:

6
00:00:27,230 --> 00:00:29,310
Title is the name of the webpage.

7
00:00:29,580 --> 00:00:34,710
It is important to set the title because
it gets displayed in the browser tab.

8
00:00:35,269 --> 00:00:37,879
Let’s enter Super Space Rides...

9
00:00:42,350 --> 00:00:46,759
Description is a short explanation
of what this website is about.

10
00:00:47,570 --> 00:00:49,839
It should be just one sentence.

11
00:00:50,650 --> 00:01:05,180
We can add the same text we
have in the subheading...

12
00:01:05,180 --> 00:01:09,959
Keywords is a list of topics
that this website covers.

13
00:01:09,959 --> 00:01:12,349
Use commas to separate them.

14
00:01:12,349 --> 00:01:16,651
In our case, we have Space…,
Adventure… Space exploration...

15
00:01:17,130 --> 00:01:18,040
and Travel...

16
00:01:19,310 --> 00:01:21,710
We can put our name in the Author field.

17
00:01:23,360 --> 00:01:26,450
So, why is this information important?

18
00:01:27,190 --> 00:01:37,922
Title and description are used by
search engines like Google when
showing our website in search results.

19
00:01:37,922 --> 00:01:38,500
That’s how people will find us.

20
00:01:38,500 --> 00:01:44,070
If the information is not relevant, they
won’t click on the link to our website.

21
00:01:44,679 --> 00:01:51,090
Let’s take a quick look at the
code to see how this information
is stored in the HTML code.

22
00:01:51,890 --> 00:01:55,990
These fields go into
the Head HTML element.

23
00:01:56,670 --> 00:02:01,139
The title is stored in
the Title HTML element.

24
00:02:02,179 --> 00:02:08,470
The rest of the fields are stored in META
HTML elements that have two attributes:

25
00:02:10,080 --> 00:02:16,100
Name is the field name:
description, keywords and author.

26
00:02:18,190 --> 00:02:21,050
Content attribute is
the value of the field.

27
00:02:23,440 --> 00:02:26,310
No need to worry about all these details.

28
00:02:26,910 --> 00:02:33,840
On HTML Planet it is super easy
to edit the page information
using the Attributes panel.

29
00:02:34,340 --> 00:02:38,630
With this, we are ready to start
improving the design of the webpage.

`),pgTutorialSubtitles.set("zootata_website_design_1",`1
00:00:03,490 --> 00:00:10,410
With structure and content
done, we can now have fun with
making the design more special.

2
00:00:11,090 --> 00:00:20,509
Let’s first make sure that the
website looks good on all screen
sizes - from small mobile phones
to huge desktop computers.

3
00:00:21,629 --> 00:00:26,830
Hide the left panel by double-clicking
on its name to have more space.

4
00:00:27,360 --> 00:00:30,899
Drag the right edge of the
page to make it larger.

5
00:00:31,270 --> 00:00:35,220
Just continue to drag when you
come to the right panel edge.

6
00:00:35,809 --> 00:00:37,080
Release the mouse.

7
00:00:38,270 --> 00:00:42,769
The page zoom will be adjusted so
that the whole page is visible.

8
00:00:43,790 --> 00:00:47,420
We can see that the content
gets too stretched out.

9
00:00:47,940 --> 00:00:51,759
So, we have to limit the
maximum width of the page.

10
00:00:52,480 --> 00:00:54,139
Select the body element.

11
00:00:55,219 --> 00:01:01,589
The body element is the main
HTML element that contains
the visible part of the page.

12
00:01:02,389 --> 00:01:07,590
Use breadcrumbs at the bottom to make
sure that the right element is selected.

13
00:01:08,719 --> 00:01:13,090
Try different Max Width values
to see which one works the best.

14
00:01:19,730 --> 00:01:21,050
800px is ok.

15
00:01:23,690 --> 00:01:27,500
Now, let’s check how the
page looks on a small device.

16
00:01:28,119 --> 00:01:30,649
Drag the right edge to make it smaller.

17
00:01:31,340 --> 00:01:35,070
We can see the page size
while we are resizing it.

18
00:01:36,220 --> 00:01:46,880
By experimenting we can see that the
page looks ok at around 500px but
if it is smaller than that, things
becomes too squished together.

19
00:01:48,119 --> 00:01:52,220
So, the width of the page
should be at least 500px.

20
00:01:52,730 --> 00:01:55,560
Set the Minimum width to 500px.

21
00:01:57,389 --> 00:02:01,859
If the page is smaller than this
it gets horizontal scrollbars.

22
00:02:02,780 --> 00:02:05,929
Scrolling on mobile
devices is not difficult.

23
00:02:06,559 --> 00:02:12,410
This is a simple solution that still makes
our website readable on small devices.

24
00:02:13,110 --> 00:02:15,130
Let’s go back to the large size.

25
00:02:16,010 --> 00:02:19,919
The page content is fixed on
the left side of the window.

26
00:02:20,210 --> 00:02:22,670
It would be nice if it
would be in the center.

27
00:02:23,520 --> 00:02:28,429
We could set the Margin Left to a number
that pushes the content to the center…

28
00:02:29,220 --> 00:02:34,350
But if we resize the page the
page will not be centered anymore.

29
00:02:35,110 --> 00:02:40,300
A better way to center elements is to
set their Margin Left and Right to Auto.

30
00:02:41,170 --> 00:02:44,400
Auto uses all the available
space for the margin.

31
00:02:45,000 --> 00:02:57,890
When we set both Left and Right
to Auto, this space is divided
equally to both sides and as a
result, the element is centered - no
matter how large the page is.

32
00:03:00,039 --> 00:03:02,110
The empty background is a bit boring…

33
00:03:03,060 --> 00:03:09,920
Let’s try setting the background image to
the Body element… Background5.jpg is nice.

34
00:03:13,110 --> 00:03:17,500
Set repeat to no repeat…
and size to Cover…

35
00:03:18,529 --> 00:03:19,460
Looks good!

36
00:03:20,020 --> 00:03:24,809
But when scrolling down the
background image scrolls out of view.

37
00:03:25,740 --> 00:03:31,380
To fix the background in place
we can set the Background
attachment property to Fixed.

38
00:03:34,079 --> 00:03:37,899
When we scroll now the
background image stays in place.

39
00:03:39,570 --> 00:03:42,660
Do you notice something interesting
with the Body background?

40
00:03:44,000 --> 00:03:48,620
Normally, the element background is
displayed only inside the element.

41
00:03:49,070 --> 00:03:55,480
But here the background covers
the whole page, even parts that
are outside of the Body element.

42
00:03:56,760 --> 00:03:59,700
The reason is that the
Body element is special.

43
00:04:00,000 --> 00:04:02,490
Its background is used for the whole page.

44
00:04:03,900 --> 00:04:06,429
We can see the background
through sections.

45
00:04:06,990 --> 00:04:18,380
To fix this, select one of the
sections, make sure that the
section CSS rule is selected and
then set the background to white.

46
00:04:18,899 --> 00:04:21,870
We will continue designing
in the next adventure.

`),pgTutorialSubtitles.set("zootata_website_design_2",`1
00:00:03,500 --> 00:00:05,260
Let’s do more work on the design.

2
00:00:05,430 --> 00:00:09,180
In the last ride we can notice a problem.

3
00:00:09,500 --> 00:00:12,420
The next section is coming
up behind the image.

4
00:00:13,150 --> 00:00:20,090
The reason is that the image is
floating and we don’t have an element
that clears the float after it.

5
00:00:20,750 --> 00:00:26,480
So, the content of the next
section continues to flow
around the floating image.

6
00:00:26,970 --> 00:00:36,480
A simple solution is that we add an
empty Div element that doesn’t take
up any space immediately after the
last ride and set its Clear to Both.

7
00:00:36,480 --> 00:00:43,660
We can use the Insert Element menu to drag
the Div to the end of the rides section…

8
00:00:43,669 --> 00:00:50,689
The element has an empty
placeholder so that we can see
it even though it is empty.

9
00:00:50,969 --> 00:00:55,010
Remove the placeholder because we
want to leave this element empty

10
00:00:56,010 --> 00:01:01,180
In the Style panel, go to the Display
section and set Clear to Both.

11
00:01:03,800 --> 00:01:13,890
Let’s save the style as a new rule with
the selector DOT clear hyphen floats.

12
00:01:16,280 --> 00:01:19,679
The class clear floats
might come handy later.

13
00:01:20,360 --> 00:01:22,609
Let’s make fonts more interesting.

14
00:01:23,559 --> 00:01:29,110
Setting font properties on
the Body element will change
the text on the whole page.

15
00:01:30,020 --> 00:01:36,640
Select the Body and select a font
family, for example Arial, Helvetica.

16
00:01:40,760 --> 00:01:45,379
Let’s make all the texts bigger
by setting the Font size to 18px.

17
00:01:47,109 --> 00:01:52,130
Let’s save the style into a CSS
rule with the selector Body.

18
00:01:57,280 --> 00:02:00,970
Next, we can choose a different
font for the main heading.

19
00:02:01,280 --> 00:02:03,790
Select the Heading 1 in the header.

20
00:02:04,469 --> 00:02:09,220
Strong fonts work well for
headings, for example Impact.

21
00:02:11,310 --> 00:02:17,899
We can also make it
bigger… 70px looks good.

22
00:02:20,160 --> 00:02:24,040
Save the style into a CSS
rule with the selector H1.

23
00:02:24,040 --> 00:02:32,180
The subheading should also
be bigger, for example 28px.

24
00:02:35,719 --> 00:02:39,660
The Subheading is now
one long line of text.

25
00:02:40,089 --> 00:02:41,489
That’s hard to read.

26
00:02:42,159 --> 00:02:47,620
Set the width to 420px to
break it into two lines.

27
00:02:48,430 --> 00:02:52,150
But the part of the text on light
background now can’t be seen.

28
00:02:53,429 --> 00:02:55,830
Let’s set a purple background color.

29
00:02:56,370 --> 00:02:58,129
Purple is Zootata’s color.

30
00:03:00,320 --> 00:03:12,780
The text box needs some
padding… 20px on left and right…
and 10px on top and bottom…

31
00:03:16,079 --> 00:03:21,450
We can make an interesting effect
by setting a negative left margin.

32
00:03:25,110 --> 00:03:27,100
-40px takes the box to the left edge.

33
00:03:29,139 --> 00:03:38,170
Increase the left padding to 40px to
align the left edge of the heading text
with the left edge of the subheading.

34
00:03:39,390 --> 00:03:43,440
For the final touch let’s add
some rounding on the right side.

35
00:03:43,910 --> 00:03:45,470
10px is enough.

36
00:03:49,170 --> 00:03:53,179
Switch off the display helpers
to better see the corners.

37
00:03:54,770 --> 00:04:00,930
Save the style as a new CSS rule
with the selector DOT Subheading.

38
00:04:04,740 --> 00:04:05,899
We are almost done.

39
00:04:06,139 --> 00:04:09,830
In the next adventure we
will do something very cool.

`),pgTutorialSubtitles.set("zootata_website_design_3",`1
00:00:03,090 --> 00:00:07,480
Let’s use shadows to add a
nice 3d effect to the page.

2
00:00:08,099 --> 00:00:09,749
Select one of the images.

3
00:00:10,059 --> 00:00:13,150
Make sure that the Style
attribute is selected.

4
00:00:13,929 --> 00:00:17,020
Go to Box Shadow section
of the Style panel.

5
00:00:17,940 --> 00:00:20,970
Box Shadow adds a shadow
around the element.

6
00:00:21,840 --> 00:00:26,900
Distance sets how far away from
the element will the shadow be.

7
00:00:27,619 --> 00:00:30,830
0 puts it directly below the element.

8
00:00:31,460 --> 00:00:35,600
Switch off the display helpers
to better see the shadow.

9
00:00:36,989 --> 00:00:40,019
Let’s set the distance to 4px.

10
00:00:40,860 --> 00:00:48,690
The circle controls the angle
of the shadow… This looks ok.

11
00:00:49,230 --> 00:00:57,769
X and Y values are calculated based
on the distance and the angle, there
is no need to set them separately.

12
00:00:58,340 --> 00:01:01,300
The type should be Outside in most cases.

13
00:01:01,910 --> 00:01:05,770
Inset displays the shadow on
the inside of the element.

14
00:01:06,190 --> 00:01:09,660
Blur creates a nice soft shadow effect.

15
00:01:10,539 --> 00:01:12,249
8px looks good here.

16
00:01:14,129 --> 00:01:17,220
Size make the shadow larger or smaller.

17
00:01:17,520 --> 00:01:20,529
In many cases, we don’t need to set it.

18
00:01:21,030 --> 00:01:23,730
By default, the shadow is black.

19
00:01:24,190 --> 00:01:29,850
But having a black color with a lot
of transparency looks more natural.

20
00:01:32,500 --> 00:01:37,620
Save the style in a new CSS
rule with the selector img.

21
00:01:38,030 --> 00:01:42,219
This will add the shadow to
all image elements on the page.

22
00:01:43,940 --> 00:01:50,900
Note that background images are not
image elements, so they get no shadow.

23
00:01:51,510 --> 00:01:58,359
If we would want to have the shadow there,
we would have to add it to the element
that is using the background image.

24
00:01:59,309 --> 00:02:02,930
Let’s also add the shadow
to the body element.

25
00:02:03,469 --> 00:02:18,094
Select the Body and keep
the Body CSS rule selected.

26
00:02:18,094 --> 00:02:31,360
Set the distance to 8px… angle to
around 315 degrees and blur to 12px…
Again, chose a transparent black color.

27
00:02:32,590 --> 00:02:38,610
The body now has a nice shadow outline,
making it stand out from the background.

28
00:02:39,160 --> 00:02:47,809
For the final touch, set the
Top margin to 70px… This creates
more space around the page.

29
00:02:49,300 --> 00:02:50,600
Congratulations!

30
00:02:50,940 --> 00:02:53,770
You built a complete website from scratch.

31
00:02:54,700 --> 00:03:01,780
The combination of the design
and structure we created is just
one of endless possibilities.

32
00:03:02,400 --> 00:03:07,040
Feel free to get creative and come
up with your own unique design.

`),pgTutorialSubtitles.set("a9_teleport",`--`),pgTutorialSubtitles.set("a14_div",`--`),pgTutorialSubtitles.set("a23_fun_grid",`--`);