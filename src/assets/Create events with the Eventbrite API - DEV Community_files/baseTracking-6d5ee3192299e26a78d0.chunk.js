(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{689:function(e,t){function n(){var e=document.querySelector("meta[name='csrf-token']");if(e){var t=e.getAttribute("content"),n=Math.max(document.documentElement.clientWidth,window.innerWidth||0),a=Math.max(document.documentElement.clientHeight,window.innerHeight||0),o=window.screen.availWidth,c=window.screen.availHeight,r={path:location.pathname+location.search,user_language:navigator.language,referrer:document.referrer,user_agent:navigator.userAgent,viewport_size:"".concat(a,"x").concat(n),screen_resolution:"".concat(c,"x").concat(o),document_title:document.title,document_encoding:document.characterSet,document_path:location.pathname+location.search};window.fetch("/fallback_activity_recorder",{method:"POST",headers:{Accept:"application/json","X-CSRF-Token":t},body:JSON.stringify(r),credentials:"same-origin"})}}function a(){var e=document.getElementById("cta-comment-register-now-link");e&&(e.onclick=function(){ga("send","event","click","register-now-click",null,null)})}function o(){var e=document.body;return!!e&&"logged-in"===e.getAttribute("data-user-status")}!function(){var e=0,t=!1,o=document.body.dataset.gaTracking;if(o){var c=setInterval((function(){var a,r,i,d,l,s,u;t||(a=window,r=document,i="script",d="//www.google-analytics.com/analytics.js",l="ga",a.GoogleAnalyticsObject=l,a[l]=a[l]||function(){(a[l].q=a[l].q||[]).push(arguments)},a[l].l=1*new Date,s=r.createElement(i),u=r.getElementsByTagName(i)[0],s.async=1,s.src=d,u.parentNode.insertBefore(s,u)),t=!0,e++,window.ga&&ga.create&&(ga("create",o,"auto"),ga("set","anonymizeIp",!0),ga("send","pageview",location.pathname+location.search),clearInterval(c)),e>85&&(clearInterval(c),n())}),25);a()}}(),function(){var e=0,t=!1,o=document.body.dataset.ga4TrackingId;if(o){var c=setInterval((function(){if(!t){var a=document.createElement("script");a.src="//www.googletagmanager.com/gtag/js?id=".concat(o),a.async=!0,document.head.appendChild(a)}if(t=!0,e++,window.google_tag_manager){var r=function(){window.dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},r("js",new Date),r("config",o,{anonymize_ip:!0}),clearInterval(c)}e>85&&(clearInterval(c),n())}),25);a()}}(),setTimeout((function(){var e=document.getElementById("article-body")||document.getElementById("comment-article-indicator"),t=document.querySelector("meta[name='csrf-token']"),n=/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);if(window.innerWidth,e&&t&&!n){var a=Math.floor(10*Math.random());if(!o()&&1!=a)return;var c={article_id:e.dataset.articleId,referrer:document.referrer,user_agent:navigator.userAgent},r=t.getAttribute("content");!function(e,t){window.fetch("/page_views",{method:"POST",headers:{"X-CSRF-Token":t,"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"same-origin"})}(c,r);var i=0,d=setInterval((function(){i++;var e=document.getElementById("article-body")||document.getElementById("comment-article-indicator");e&&o()?function(e,t){window.fetch("/page_views/".concat(e),{method:"PATCH",headers:{"X-CSRF-Token":t,"Content-Type":"application/json"},credentials:"same-origin"}).catch((function(e){return console.error(e)}))}(e.dataset.articleId,r):clearInterval(d),i>118&&clearInterval(d)}),15e3)}}),1800)}},[[689,101]]]);
//# sourceMappingURL=baseTracking-6d5ee3192299e26a78d0.chunk.js.map