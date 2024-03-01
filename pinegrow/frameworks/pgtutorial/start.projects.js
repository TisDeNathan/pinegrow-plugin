$(function(){$("body").one("pinegrow-ready",function(e,t){class o extends PgTutorial{constructor(){super(),this.name="Start Projects",this.description=``,this.prefix="new_",this.registerThisTutorial=!0,this.showOnStartScreen=!1,this.startProjects=!0,this.allowRandomAccess=!0}}var a,r,s=`<p style="font-size: 24px; margin: 10px 40px 20px; max-width: 640px;">Below is a sample block. Delete it and create your own, or use it as the starting point for your block.</p>
`,i=new o;(r=new PgTutorialLesson("new_html",null)).name="Blank HTML Project",a=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New page</title>
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body></body>
</html>`,r.addPage("index.html",`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New page</title>
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body></body>
</html>`),r.addHiddenFile("_new.html",a),r.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),r.addStylesheet("css/style.css",""),i.addLesson(r),(a=new PgTutorialLesson("new_html_blocks",null)).name="HTML Blocks",r=`<!DOCTYPE html>
<html lang="en" wp-template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New page</title>
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body></body>
</html>`,a.addPage("index.html",`<!DOCTYPE html>
<html lang="en" wp-template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New page</title>
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="about-me.css" rel="stylesheet">
</head>
<body>
${s}
<section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-style="about-me.css" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
            <div>
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image"/>
            </div>
            <div>
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p><a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a>
            </div>
        </section>
</body>
</html>`),a.addHiddenFile("_new.html",r),a.addStylesheet("css/normalize.css",pgSVGIcons.css_normalize),a.addStylesheet("css/style.css",""),a.addStylesheet("about-me.css",`.cool-blocks-about-me {
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
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }
}

.cool-blocks-about-me img {
    max-width: 100%;
    min-height: 340px;
    object-fit: cover;
}
`),i.addLesson(a),(r=new PgTutorialLesson("new_bs")).name="Blank Bootstrap Project",a=`<!DOCTYPE html>
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
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>
    <script src="assets/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>
`,r.addPage("index.html",a),r.addHiddenFile("_new.html",a),r.addStylesheet("css/style.css",""),r.addResource("assets/js/popper.min.js","frameworks/bootstrap5/template/assets/js/popper.min.js"),r.addResource("bootstrap/js/bootstrap.min.js","frameworks/bootstrap5/template/bootstrap/js/bootstrap.min.js"),r.addResource("bootstrap/css/bootstrap.min.css","frameworks/bootstrap5/template/bootstrap/css/bootstrap.min.css"),i.addLesson(r),(a=new PgTutorialLesson("new_bs_blocks")).name="Bootstrap Blocks Project",r=`<!DOCTYPE html>
<html lang="en" wp-template>
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
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>
    <script src="assets/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>
`,a.addPage("index.html",`<!DOCTYPE html>
<html lang="en" wp-template>
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
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body class="pt-5">
  ${s}
<section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
    <div>
        <div class="row">
            <div class="col-md-6">
                <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image" class="img-fluid"/>                  
            </div>
            <div class="col-md-6">
                <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
                <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
                <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link" class="btn btn-primary">Learn more about me</a>                  
            </div>
        </div>
    </div>
</section>
        
    <script src="assets/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>
`),a.addHiddenFile("_new.html",r),a.addStylesheet("css/style.css",""),a.addResource("assets/js/popper.min.js","frameworks/bootstrap5/template/assets/js/popper.min.js"),a.addResource("bootstrap/js/bootstrap.min.js","frameworks/bootstrap5/template/bootstrap/js/bootstrap.min.js"),a.addResource("bootstrap/css/bootstrap.min.css","frameworks/bootstrap5/template/bootstrap/css/bootstrap.min.css"),i.addLesson(a),(r=new PgTutorialLesson("new_tw")).name="Blank Tailwind Project",a=`<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> 
        <title>New page</title>                  
        <link href="tailwind_theme/tailwind.css" rel="stylesheet" type="text/css"/>
    </head>     
    <body> 
</body>     
</html>`,r.addPage("index.html",a),r.addHiddenFile("_new.html",a),r.addStylesheet("tailwind_theme/tailwind.css",`/*
        ! tailwindcss v3.0.12 | MIT License | https://tailwindcss.com
        *//*
        1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
        2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
        */

        *,
        ::before,
        ::after {
          box-sizing: border-box; /* 1 */
          border-width: 0; /* 2 */
          border-style: solid; /* 2 */
          border-color: #e5e7eb; /* 2 */
        }

        ::before,
        ::after {
          --tw-content: '';
        }

        /*
        1. Use a consistent sensible line-height in all browsers.
        2. Prevent adjustments of font size after orientation changes in iOS.
        3. Use a more readable tab size.
        4. Use the user's configured sans font-family by default.
        */

        html {
          line-height: 1.5; /* 1 */
          -webkit-text-size-adjust: 100%; /* 2 */
          -moz-tab-size: 4; /* 3 */
          -o-tab-size: 4;
             tab-size: 4; /* 3 */
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
        }

        /*
        1. Remove the margin in all browsers.
        2. Inherit line-height from html so users can set them as a class directly on the html element.
        */

        body {
          margin: 0; /* 1 */
          line-height: inherit; /* 2 */
        }

        /*
        1. Add the correct height in Firefox.
        2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
        3. Ensure horizontal rules are visible by default.
        */

        hr {
          height: 0; /* 1 */
          color: inherit; /* 2 */
          border-top-width: 1px; /* 3 */
        }

        /*
        Add the correct text decoration in Chrome, Edge, and Safari.
        */

        abbr:where([title]) {
          -webkit-text-decoration: underline dotted;
                  text-decoration: underline dotted;
        }

        /*
        Remove the default font size and weight for headings.
        */

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }

        /*
        Reset links to optimize for opt-in styling instead of opt-out.
        */

        a {
          color: inherit;
          text-decoration: inherit;
        }

        /*
        Add the correct font weight in Edge and Safari.
        */

        b,
        strong {
          font-weight: bolder;
        }

        /*
        1. Use the user's configured mono font family by default.
        2. Correct the odd em font sizing in all browsers.
        */

        code,
        kbd,
        samp,
        pre {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
          font-size: 1em; /* 2 */
        }

        /*
        Add the correct font size in all browsers.
        */

        small {
          font-size: 80%;
        }

        /*
        Prevent sub and sup elements from affecting the line height in all browsers.
        */

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        /*
        1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
        2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
        3. Remove gaps between table borders by default.
        */

        table {
          text-indent: 0; /* 1 */
          border-color: inherit; /* 2 */
          border-collapse: collapse; /* 3 */
        }

        /*
        1. Change the font styles in all browsers.
        2. Remove the margin in Firefox and Safari.
        3. Remove default padding in all browsers.
        */

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: inherit; /* 1 */
          color: inherit; /* 1 */
          margin: 0; /* 2 */
          padding: 0; /* 3 */
        }

        /*
        Remove the inheritance of text transform in Edge and Firefox.
        */

        button,
        select {
          text-transform: none;
        }

        /*
        1. Correct the inability to style clickable types in iOS and Safari.
        2. Remove default button styles.
        */

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button; /* 1 */
          background-color: transparent; /* 2 */
          background-image: none; /* 2 */
        }

        /*
        Use the modern Firefox focus style for all focusable elements.
        */

        :-moz-focusring {
          outline: auto;
        }

        /*
        Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
        */

        :-moz-ui-invalid {
          box-shadow: none;
        }

        /*
        Add the correct vertical alignment in Chrome and Firefox.
        */

        progress {
          vertical-align: baseline;
        }

        /*
        Correct the cursor style of increment and decrement buttons in Safari.
        */

        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }

        /*
        1. Correct the odd appearance in Chrome and Safari.
        2. Correct the outline style in Safari.
        */

        [type='search'] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
        }

        /*
        Remove the inner padding in Chrome and Safari on macOS.
        */

        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        /*
        1. Correct the inability to style clickable types in iOS and Safari.
        2. Change font properties to inherit in Safari.
        */

        ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
        }

        /*
        Add the correct display in Chrome and Safari.
        */

        summary {
          display: list-item;
        }

        /*
        Removes the default spacing and border for appropriate elements.
        */

        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
          margin: 0;
        }

        fieldset {
          margin: 0;
          padding: 0;
        }

        legend {
          padding: 0;
        }

        ol,
        ul,
        menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        /*
        Prevent resizing textareas horizontally by default.
        */

        textarea {
          resize: vertical;
        }

        /*
        1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
        2. Set the default placeholder color to the user's configured gray 400 color.
        */

        input::-moz-placeholder, textarea::-moz-placeholder {
          opacity: 1; /* 1 */
          color: #9ca3af; /* 2 */
        }

        input:-ms-input-placeholder, textarea:-ms-input-placeholder {
          opacity: 1; /* 1 */
          color: #9ca3af; /* 2 */
        }

        input::placeholder,
        textarea::placeholder {
          opacity: 1; /* 1 */
          color: #9ca3af; /* 2 */
        }

        /*
        Set the default cursor for buttons.
        */

        button,
        [role="button"] {
          cursor: pointer;
        }

        /*
        Make sure disabled buttons don't get the pointer cursor.
        */
        :disabled {
          cursor: default;
        }

        /*
        1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
        2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
           This can trigger a poorly considered lint error in some tools but is included by design.
        */

        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
          display: block; /* 1 */
          vertical-align: middle; /* 2 */
        }

        /*
        Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
        */

        img,
        video {
          max-width: 100%;
          height: auto;
        }

        /*
        Ensure the default browser behavior of the hidden attribute.
        */

        [hidden] {
          display: none;
        }

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
          -webkit-appearance: none;
             -moz-appearance: none;
                  appearance: none;
          background-color: #fff;
          border-color: #6b7280;
          border-width: 1px;
          border-radius: 0px;
          padding-top: 0.5rem;
          padding-right: 0.75rem;
          padding-bottom: 0.5rem;
          padding-left: 0.75rem;
          font-size: 1rem;
          line-height: 1.5rem;
          --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: #2563eb;
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
          border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
          color: #6b7280;
          opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
          color: #6b7280;
          opacity: 1;
}

input::placeholder,textarea::placeholder {
          color: #6b7280;
          opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
          padding: 0;
}

::-webkit-date-and-time-value {
          min-height: 1.5em;
}

select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
          -webkit-print-color-adjust: exact;
                  color-adjust: exact;
}

[multiple] {
          background-image: initial;
          background-position: initial;
          background-repeat: unset;
          background-size: initial;
          padding-right: 0.75rem;
          -webkit-print-color-adjust: unset;
                  color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
          -webkit-appearance: none;
             -moz-appearance: none;
                  appearance: none;
          padding: 0;
          -webkit-print-color-adjust: exact;
                  color-adjust: exact;
          display: inline-block;
          vertical-align: middle;
          background-origin: border-box;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
          flex-shrink: 0;
          height: 1rem;
          width: 1rem;
          color: #2563eb;
          background-color: #fff;
          border-color: #6b7280;
          border-width: 1px;
          --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
          border-radius: 0px;
}

[type='radio'] {
          border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
          --tw-ring-offset-width: 2px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: #2563eb;
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
}

[type='checkbox']:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
          border-color: transparent;
          background-color: currentColor;
}

[type='checkbox']:indeterminate {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
          border-color: transparent;
          background-color: currentColor;
}

[type='file'] {
          background: unset;
          border-color: inherit;
          border-width: 0;
          border-radius: 0;
          padding: 0;
          font-size: unset;
          line-height: inherit;
}

[type='file']:focus {
          outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after {
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x:  ;
          --tw-pan-y:  ;
          --tw-pinch-zoom:  ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal:  ;
          --tw-slashed-zero:  ;
          --tw-numeric-figure:  ;
          --tw-numeric-spacing:  ;
          --tw-numeric-fraction:  ;
          --tw-ring-inset:  ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur:  ;
          --tw-brightness:  ;
          --tw-contrast:  ;
          --tw-grayscale:  ;
          --tw-hue-rotate:  ;
          --tw-invert:  ;
          --tw-saturate:  ;
          --tw-sepia:  ;
          --tw-drop-shadow:  ;
          --tw-backdrop-blur:  ;
          --tw-backdrop-brightness:  ;
          --tw-backdrop-contrast:  ;
          --tw-backdrop-grayscale:  ;
          --tw-backdrop-hue-rotate:  ;
          --tw-backdrop-invert:  ;
          --tw-backdrop-opacity:  ;
          --tw-backdrop-saturate:  ;
          --tw-backdrop-sepia:  ;
}

body, html {
    min-height: 100vh;
}
`),r.addPage("pinegrow.json",`{"files":{"index.html":{"frameworks":["newtw2","pg.insight.events","pg.svg.lib","pg.css.grid","pg.image.overlay","pg.code-validator","pg.project.items","pg.asset.manager","pg.tw.lib","tw","pg.html","pg.components"],"last_page_width":1024}},"breakpoints":[],"frameworks":["newtw2","pg.insight.events","pg.svg.lib","pg.css.grid","pg.image.overlay","pg.code-validator","pg.project.items","pg.asset.manager","pg.tw.lib","tw","pg.html","pg.components"],"template_framework_id":"tailwind","urls":{"index.html":{"open-page-views":[{"w":1024,"h":0}]}},"active-design-provider":"tw"}`),r.addPage("projectdb.pgml",`<project>
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
            <dmdesignskill skill="background" image_for_colors="true" advanced="true" filter_blur="0" filter_brightness="100" filter_contrast="100" filter_grayscale="0" filter_hue-rotate="0" filter_invert="0" filter_opacity="100" filter_saturate="100" filter_sepia="0"></dmdesignskill>
            <dmdesignskill skill="tailwind"></dmdesignskill>
        </dmdesign>
    </dmdesigns>
    <dmlocked tw-colors-gray="true" tw-colors-red="true" tw-colors-yellow="true" tw-colors-green="true" tw-colors-blue="true" tw-colors-indigo="true" tw-colors-purple="true" tw-colors-pink="true"></dmlocked>
</project>`),i.addLesson(r);(a=new PgTutorialLesson("new_tw_blocks")).name="Tailwind Blocks Project",r=`<!DOCTYPE html> 
<html lang="en" wp-template> 
    <head> 
        <meta charset="utf-8"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> 
        <title>New page</title>                  
        <link href="tailwind_theme/tailwind.css" rel="stylesheet" type="text/css"/>
    </head>     
    <body> 
</body>     
</html>`,a.addPage("index.html",`<!DOCTYPE html> 
<html lang="en" wp-template> 
    <head> 
        <meta charset="utf-8"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> 
        <title>New page</title>                  
        <link href="tailwind_theme/tailwind.css" rel="stylesheet" type="text/css"/>
    </head>     
    <body> 
    ${s}
    <section cms-block="about-me" cms-block-title="About me" class="cool-blocks-about-me grid grid-cols-2 grid-rows-1" cms-block-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-person-lines-fill&quot; viewBox=&quot;0 0 16 16&quot;>   <path d=&quot;M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z&quot;/> </svg>" cms-block-category="custom" cms-block-category-custom="cool_blocks" cms-block-category-custom-register="true" cms-block-category-custom-register-name="Cool Blocks">
    <div>
        <img src="https://pinegrow.com/placeholders/img16.jpg" cms-block-field="image" cms-block-field-type="image" cms-block-field-title="image" /> 
    </div>
    <div class="p-4 prose">
        <h3 cms-block-field="name" cms-block-field-type="content" cms-block-field-title="Name">Mr. Pine Cone</h3>
        <p cms-block-field="bio" cms-block-field-type="content" cms-block-field-title="Bio">Something about me...</p>
        <a href="" cms-block-field="more_link" cms-block-field-type="link" cms-block-field-title="Learn more link">Learn more about me</a> 
    </div>
</section>
</body>     
</html>`),a.addHiddenFile("_new.html",r),a.addStylesheet("tailwind_theme/tailwind.css",`/*
        ! tailwindcss v3.0.12 | MIT License | https://tailwindcss.com
        *//*
        1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
        2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
        */

        *,
        ::before,
        ::after {
          box-sizing: border-box; /* 1 */
          border-width: 0; /* 2 */
          border-style: solid; /* 2 */
          border-color: #e5e7eb; /* 2 */
        }

        ::before,
        ::after {
          --tw-content: '';
        }

        /*
        1. Use a consistent sensible line-height in all browsers.
        2. Prevent adjustments of font size after orientation changes in iOS.
        3. Use a more readable tab size.
        4. Use the user's configured sans font-family by default.
        */

        html {
          line-height: 1.5; /* 1 */
          -webkit-text-size-adjust: 100%; /* 2 */
          -moz-tab-size: 4; /* 3 */
          -o-tab-size: 4;
             tab-size: 4; /* 3 */
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
        }

        /*
        1. Remove the margin in all browsers.
        2. Inherit line-height from html so users can set them as a class directly on the html element.
        */

        body {
          margin: 0; /* 1 */
          line-height: inherit; /* 2 */
        }

        /*
        1. Add the correct height in Firefox.
        2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
        3. Ensure horizontal rules are visible by default.
        */

        hr {
          height: 0; /* 1 */
          color: inherit; /* 2 */
          border-top-width: 1px; /* 3 */
        }

        /*
        Add the correct text decoration in Chrome, Edge, and Safari.
        */

        abbr:where([title]) {
          -webkit-text-decoration: underline dotted;
                  text-decoration: underline dotted;
        }

        /*
        Remove the default font size and weight for headings.
        */

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }

        /*
        Reset links to optimize for opt-in styling instead of opt-out.
        */

        a {
          color: inherit;
          text-decoration: inherit;
        }

        /*
        Add the correct font weight in Edge and Safari.
        */

        b,
        strong {
          font-weight: bolder;
        }

        /*
        1. Use the user's configured mono font family by default.
        2. Correct the odd em font sizing in all browsers.
        */

        code,
        kbd,
        samp,
        pre {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
          font-size: 1em; /* 2 */
        }

        /*
        Add the correct font size in all browsers.
        */

        small {
          font-size: 80%;
        }

        /*
        Prevent sub and sup elements from affecting the line height in all browsers.
        */

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        /*
        1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
        2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
        3. Remove gaps between table borders by default.
        */

        table {
          text-indent: 0; /* 1 */
          border-color: inherit; /* 2 */
          border-collapse: collapse; /* 3 */
        }

        /*
        1. Change the font styles in all browsers.
        2. Remove the margin in Firefox and Safari.
        3. Remove default padding in all browsers.
        */

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: inherit; /* 1 */
          color: inherit; /* 1 */
          margin: 0; /* 2 */
          padding: 0; /* 3 */
        }

        /*
        Remove the inheritance of text transform in Edge and Firefox.
        */

        button,
        select {
          text-transform: none;
        }

        /*
        1. Correct the inability to style clickable types in iOS and Safari.
        2. Remove default button styles.
        */

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button; /* 1 */
          background-color: transparent; /* 2 */
          background-image: none; /* 2 */
        }

        /*
        Use the modern Firefox focus style for all focusable elements.
        */

        :-moz-focusring {
          outline: auto;
        }

        /*
        Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
        */

        :-moz-ui-invalid {
          box-shadow: none;
        }

        /*
        Add the correct vertical alignment in Chrome and Firefox.
        */

        progress {
          vertical-align: baseline;
        }

        /*
        Correct the cursor style of increment and decrement buttons in Safari.
        */

        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }

        /*
        1. Correct the odd appearance in Chrome and Safari.
        2. Correct the outline style in Safari.
        */

        [type='search'] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
        }

        /*
        Remove the inner padding in Chrome and Safari on macOS.
        */

        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        /*
        1. Correct the inability to style clickable types in iOS and Safari.
        2. Change font properties to inherit in Safari.
        */

        ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
        }

        /*
        Add the correct display in Chrome and Safari.
        */

        summary {
          display: list-item;
        }

        /*
        Removes the default spacing and border for appropriate elements.
        */

        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
          margin: 0;
        }

        fieldset {
          margin: 0;
          padding: 0;
        }

        legend {
          padding: 0;
        }

        ol,
        ul,
        menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        /*
        Prevent resizing textareas horizontally by default.
        */

        textarea {
          resize: vertical;
        }

        /*
        1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
        2. Set the default placeholder color to the user's configured gray 400 color.
        */

        input::-moz-placeholder, textarea::-moz-placeholder {
          opacity: 1; /* 1 */
          color: #9ca3af; /* 2 */
        }

        input:-ms-input-placeholder, textarea:-ms-input-placeholder {
          opacity: 1; /* 1 */
          color: #9ca3af; /* 2 */
        }

        input::placeholder,
        textarea::placeholder {
          opacity: 1; /* 1 */
          color: #9ca3af; /* 2 */
        }

        /*
        Set the default cursor for buttons.
        */

        button,
        [role="button"] {
          cursor: pointer;
        }

        /*
        Make sure disabled buttons don't get the pointer cursor.
        */
        :disabled {
          cursor: default;
        }

        /*
        1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
        2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
           This can trigger a poorly considered lint error in some tools but is included by design.
        */

        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
          display: block; /* 1 */
          vertical-align: middle; /* 2 */
        }

        /*
        Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
        */

        img,
        video {
          max-width: 100%;
          height: auto;
        }

        /*
        Ensure the default browser behavior of the hidden attribute.
        */

        [hidden] {
          display: none;
        }

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
          -webkit-appearance: none;
             -moz-appearance: none;
                  appearance: none;
          background-color: #fff;
          border-color: #6b7280;
          border-width: 1px;
          border-radius: 0px;
          padding-top: 0.5rem;
          padding-right: 0.75rem;
          padding-bottom: 0.5rem;
          padding-left: 0.75rem;
          font-size: 1rem;
          line-height: 1.5rem;
          --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: #2563eb;
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
          border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
          color: #6b7280;
          opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
          color: #6b7280;
          opacity: 1;
}

input::placeholder,textarea::placeholder {
          color: #6b7280;
          opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
          padding: 0;
}

::-webkit-date-and-time-value {
          min-height: 1.5em;
}

select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
          -webkit-print-color-adjust: exact;
                  color-adjust: exact;
}

[multiple] {
          background-image: initial;
          background-position: initial;
          background-repeat: unset;
          background-size: initial;
          padding-right: 0.75rem;
          -webkit-print-color-adjust: unset;
                  color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
          -webkit-appearance: none;
             -moz-appearance: none;
                  appearance: none;
          padding: 0;
          -webkit-print-color-adjust: exact;
                  color-adjust: exact;
          display: inline-block;
          vertical-align: middle;
          background-origin: border-box;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
          flex-shrink: 0;
          height: 1rem;
          width: 1rem;
          color: #2563eb;
          background-color: #fff;
          border-color: #6b7280;
          border-width: 1px;
          --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
          border-radius: 0px;
}

[type='radio'] {
          border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
          --tw-ring-offset-width: 2px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: #2563eb;
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
}

[type='checkbox']:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
          border-color: transparent;
          background-color: currentColor;
}

[type='checkbox']:indeterminate {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
          border-color: transparent;
          background-color: currentColor;
}

[type='file'] {
          background: unset;
          border-color: inherit;
          border-width: 0;
          border-radius: 0;
          padding: 0;
          font-size: unset;
          line-height: inherit;
}

[type='file']:focus {
          outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after {
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x:  ;
          --tw-pan-y:  ;
          --tw-pinch-zoom:  ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal:  ;
          --tw-slashed-zero:  ;
          --tw-numeric-figure:  ;
          --tw-numeric-spacing:  ;
          --tw-numeric-fraction:  ;
          --tw-ring-inset:  ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur:  ;
          --tw-brightness:  ;
          --tw-contrast:  ;
          --tw-grayscale:  ;
          --tw-hue-rotate:  ;
          --tw-invert:  ;
          --tw-saturate:  ;
          --tw-sepia:  ;
          --tw-drop-shadow:  ;
          --tw-backdrop-blur:  ;
          --tw-backdrop-brightness:  ;
          --tw-backdrop-contrast:  ;
          --tw-backdrop-grayscale:  ;
          --tw-backdrop-hue-rotate:  ;
          --tw-backdrop-invert:  ;
          --tw-backdrop-opacity:  ;
          --tw-backdrop-saturate:  ;
          --tw-backdrop-sepia:  ;
}

body, html {
    min-height: 100vh;
}
`),a.addPage("pinegrow.json",`{"files":{"index.html":{"frameworks":["newtw2","pg.insight.events","pg.svg.lib","pg.css.grid","pg.image.overlay","pg.code-validator","pg.project.items","pg.asset.manager","pg.tw.lib","tw","pg.html","pg.components"],"last_page_width":1024}},"breakpoints":[],"frameworks":["newtw2","pg.insight.events","pg.svg.lib","pg.css.grid","pg.image.overlay","pg.code-validator","pg.project.items","pg.asset.manager","pg.tw.lib","tw","pg.html","pg.components"],"template_framework_id":"tailwind","urls":{"index.html":{"open-page-views":[{"w":1024,"h":0}]}},"active-design-provider":"tw"}`),a.addPage("projectdb.pgml",`<project>
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
            <dmdesignskill skill="background" image_for_colors="true" advanced="true" filter_blur="0" filter_brightness="100" filter_contrast="100" filter_grayscale="0" filter_hue-rotate="0" filter_invert="0" filter_opacity="100" filter_saturate="100" filter_sepia="0"></dmdesignskill>
            <dmdesignskill skill="tailwind"></dmdesignskill>
        </dmdesign>
    </dmdesigns>
    <dmlocked tw-colors-gray="true" tw-colors-red="true" tw-colors-yellow="true" tw-colors-green="true" tw-colors-blue="true" tw-colors-indigo="true" tw-colors-purple="true" tw-colors-pink="true"></dmlocked>
</project>`),i.addLesson(a)})});