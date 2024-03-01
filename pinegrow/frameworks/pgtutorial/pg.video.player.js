var PgTutorialVideo=function(e,t){var a,i=$(`<div class="pg-tutorial-video-overlay black" style="opacity:0;"><div class="pg-tutorial-video-wrapper">
<div class="pg-tutorial-video-iframe-box">
    <iframe src="https://player.vimeo.com/video/${e}?autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    <div class="pg-video-text">
        <div class="pg-video-commands">
            <i class="close-video icon icon-close" title="Close the video."></i>
            <i class="show-text icon icon-align-left" title="Show / hide the video text."></i>
            <i class="make-thumb icon icon-window" title="Pause and make smaller."></i>
        </div>
        <div class="pg-video-text-title"><h2>Video text</h2><p>Click on the text to play or pause that part.</p></div>
        <div class="pg-video-text-content"></div>
        </div>
    </div>
<div class="pg-tutorial-video-thumb-overlay"></div>
</div>`),o=(addTooltip(i.find(".pg-video-commands i"),"",{placement:"left"}),i.find(".pg-video-text-content")),n=i.find(".pg-tutorial-video-wrapper"),l=(t?(a="",t.split("\n\n").forEach(function(e){var t,i;e.length&&(i=(t=e.split("\n"))[1].match(/(\d\d):(\d\d):([0-9,]+)/),i=3600*parseInt(i[1])+60*parseInt(i[2])+parseFloat(i[3]),t.shift(),t.shift(),a+=`<p data-time="${i}">${t.join(" ")}</p>`)}),o.html(a)):(n.removeClass("expanded"),i.find(".show-text").hide()),i.appendTo($("body")),gsap.to(i.get(0),{opacity:1,duration:.5}),"1"===pinegrow.getSetting("video-player-text","1")&&t&&n.addClass("expanded"),i.find(".close-video").on("click",function(e){e.preventDefault(),r()}),i.find(".show-text").on("click",function(e){e.preventDefault(),n.toggleClass("expanded"),pinegrow.setSetting("video-player-text",n.hasClass("expanded")?"1":"0")}),i.find(".make-thumb, .pg-tutorial-video-thumb-overlay").on("click",function(e){e.preventDefault(),i.toggleClass("thumb")}),[]),d=(o.find("[data-time]").each(function(e,t){var i=parseFloat(t.getAttribute("data-time"));l.push({start:i,end:0,el:t}),0<e&&(l[e-1].end=i)}),0<l.length&&(l[l.length-1].end=9999999),o.on("click","[data-time]",function(e){var t;e.preventDefault(),this.classList.contains("current")?d.getPaused().then(function(e){e?d.play():d.pause()}):(t=parseFloat(this.getAttribute("data-time")),d.setCurrentTime(t).then(function(){d.play()}))}),new Vimeo.Player(i.find("iframe").get(0))),s=null,r=function(e){d.off("timeupdate"),d.off("ended"),gsap.to(i.get(0),{opacity:0,duration:.5,delay:e||0,onComplete:function(){i.find("iframe").attr("src","about:blank"),i.remove(),d=null}}),l=null},c=!1;d.on("ended",function(e){c||r(1)}),d.on("timeupdate",function(e){for(var t,i=parseFloat(e.seconds),a=null,o=0;o<l.length;o++)if(l[o].start<=i&&l[o].end>i){a=l[o];break}s!==a&&(s&&s.el.classList.remove("current"),a&&(a.el.classList.add("current"),t=$(a.el),pgScrollToItemInContainer(t,t.parent(),!1,750,null,0)),s=a)})};