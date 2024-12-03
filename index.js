const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Simulate server-side rendering
    const html = `
<!DOCTYPE html>
<html lang="en-US" class="twbb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel="canonical" href="https://creditafinance.in/index.html">
    <meta name="google-site-verification" content="JgzUNcArUbxZ-_MxV9fcCy_nP8TNgp13OFe2-oXuffU" />
    <meta name="keywords" content="credita finance,credit a finance, personal loan, business loan, home loan, investing, budgeting, financial consultancy, emi calculator, overdraft facility.">
    <meta name="description" content="Credita Finance offers expert financial advice and tailored solutions in loans, investments, and credit management. Secure your financial future today!">  
    <meta property="og:image" content="/logo insta.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="628">
			<title>Credita Finance</title>
<meta name='robots' content='max-image-preview:large' />
	<meta name="google-adsense-account" content="ca-pub-9300854302659927">
      <!-- Google Tag Manager -->
      <script>(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                  'gtm.start':
                      new Date().getTime(), event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                  'https://metrics.10web-site.ai/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-M6GPZ95');</script>
      <!-- End Google Tag Manager -->
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
	<link rel="preload" href="/first.webp" as="image" type="image/webp">
	<link rel="preload" href="/photos/5482.webp" as="image">
	<link rel="preload" href="/photos/5392786.webp" as="image">
	<link rel="preload" href="/photos/2212.i105.053.S.m005.c13.isometric family budget infographics.webp" as="image">
	<link rel="preload" href="/banks/aditya birla.webp" as="image">
	<link rel="preload" href="/banks/axis bank.webp" as="image">
	<link rel="preload" href="/banks/bajaj finserv.webp" as="image">
	<link rel="preload" href="/banks/citi bank.webp" as="image">
	<link rel="preload" href="/banks/fullerton india.webp" as="image">
	<link rel="preload" href="/banks/hdfc.webp" as="image">
	<link rel="preload" href="/banks/images.webp" as="image">
	<link rel="preload" href="/banks/idfc.webp" as="image">
	<link rel="preload" href="/banks/Kotak-Mahindra-Bank-Logo-PNG-White-New@.webp" as="image">
	<link rel="preload" href="/banks/standard chartered.webp" as="image">
	<link rel="preload" href="/banks/yes bank.webp" as="image">
	<link rel="preload" href="/photos/20943991.webp" as="image">
	<link rel="preload" href="/photos/2883797.webp" as="image">
	<link rel="preload" href="/photos/2306.i402.023.F.m004.c9.Credit score flat background.webp" as="image">
	<link rel="preload" href="/photos/Wavy_Bus-21_Single-10.webp" as="image">
	<link rel="preload" href="/photos/5259588.webp" as="image">
	<link rel="preload" href="/banks/expert teas.webp" as="image">
	<link rel="preload" href="/banks/aditya birla.webp" as="image">
	<link rel="preload" href="/banks/19264.webp" as="image">
	<link rel="preload" href="/banks/66202.webp" as="image">
	<link rel="preload" href="/photos/5207130.webp" as="image">
	<link rel="preload" href="/photos/profile.webp" as="image">


    <link rel="icon" type="image/png" sizes="32x32" href="/logo insta.png">
<!-- <link rel="alternate" type="application/rss+xml" title=" &raquo; Feed" href="https://10web-site.ai/128/feed/" />
<link rel="alternate" type="application/rss+xml" title=" &raquo; Comments Feed" href="https://10web-site.ai/128/comments/feed/" /> -->
<script type="text/javascript">
/* <![CDATA[ */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/10web-site.ai\/128\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.5"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
</script>
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap" rel="stylesheet">

<style>
 
    *{
        font-family: 'Cabinet Grotesk', sans-serif;
        
    }
    body{
        background: white;
        font-family: 'Cabinet Grotesk', sans-serif;
        font-weight: 300;
    }
</style>
<link rel='stylesheet' id='twbb-section-generation-embed-style-css' href='https://10web-site.ai/128/wp-content/plugins/tenweb-builder/Apps/SectionGeneration/assets/style/section_generation_embed.min.css?ver=1.21.14' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.21.6' type='text/css' media='all' />
<link rel='stylesheet' id='twbb-frontend-styles-css' href='https://10web-site.ai/128/wp-content/plugins/tenweb-builder/assets/frontend/css/frontend.min.css?ver=1.21.14' type='text/css' media='all' />
<style id='wp-emoji-styles-inline-css' type='text/css'>

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
</style>
	
<!-- 2 -->


<style id='classic-theme-styles-inline-css' type='text/css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='tbdemo-open-sans-css' href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C500%2C600%2C700%2C800&#038;display=swap&#038;ver=6.4.5' type='text/css' media='all' />
<link rel='stylesheet' id='tbdemo-fakeEditor-css' href='https://10web-site.ai/128/wp-content/plugins/ai-builder-demo-plugin/assets/css/fakeEditor.css?ver=1.9.5' type='text/css' media='all' />
<link rel='stylesheet' id='tbdemo-ai-css-css' href='https://10web-site.ai/128/wp-content/plugins/ai-builder-demo-plugin/ai/assets/style.css?ver=1.9.5' type='text/css' media='all' />
<link rel='stylesheet' id='dashicons-css' href='https://10web-site.ai/128/wp-includes/css/dashicons.min.css?ver=6.4.5' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-layout-css' href='https://10web-site.ai/128/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=8.5.2' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-smallscreen-css' href='https://10web-site.ai/128/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=8.5.2' type='text/css' media='only screen and (max-width: 768px)' />
<style id='woocommerce-inline-inline-css' type='text/css'>
.woocommerce form .form-row .required { visibility: visible; }
</style>
<link rel='stylesheet' id='elementor-post-52468-css' href='https://10web-site.ai/128/wp-content/uploads/sites/140/elementor/css/post-52468.css?ver=1726570041' type='text/css' media='all' />
<link rel='stylesheet' id='tenweb-website-builder-open-sanse-css' href='https://fonts.googleapis.com/css2?family=Open+Sans%3Awght%40300%3B400%3B600%3B700%3B800&#038;display=swap&#038;ver=2.1.10' type='text/css' media='all' />
<link rel='stylesheet' id='tenweb-website-builder-theme-style-css' href='https://10web-site.ai/128/wp-content/themes/tenweb-website-builder-theme/assets/css/styles-wc.min.css?ver=2.1.10' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.29.0' type='text/css' media='all' />
<link rel='stylesheet' id='swiper-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-52474-css' href='someting.css' type='text/css' media='all' /><link rel='stylesheet' id='twbb-pro-features-css' href='https://10web-site.ai/128/wp-content/plugins/tenweb-builder/pro-features/assets/css/frontend.min.css?ver=1.21.14' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-global-css' href='https://10web-site.ai/128/wp-content/uploads/sites/140/elementor/css/global.css?ver=1725444120' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-52449-css' href='https://10web-site.ai/128/wp-content/uploads/sites/140/elementor/css/post-52449.css?ver=1726570041' type='text/css' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=block&#038;ver=6.4.5' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-shared-0-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-solid-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3' type='text/css' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><script type="text/javascript" src="https://10web-site.ai/128/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script type="text/javascript" id="twbb-editor-helper-script-js-extra">
/* <![CDATA[ */
var twbb_helper = {"domain_id":"308386"};
/* ]]> */
</script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/tenweb-builder/assets/editor/js/helper-script.js?ver=1.21.14" id="twbb-editor-helper-script-js"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.8.5.2" id="jquery-blockui-js" defer="defer" data-wp-strategy="defer"></script>
<script type="text/javascript" id="wc-add-to-cart-js-extra">
/* <![CDATA[ */
var wc_add_to_cart_params = {"ajax_url":"\/128\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/128\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/10web-site.ai\/128\/shining-bream\/\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
/* ]]> */
</script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=8.5.2" id="wc-add-to-cart-js" defer="defer" data-wp-strategy="defer"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.8.5.2" id="js-cookie-js" defer="defer" data-wp-strategy="defer"></script>
<script type="text/javascript" id="woocommerce-js-extra">
/* <![CDATA[ */
var woocommerce_params = {"ajax_url":"\/128\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/128\/?wc-ajax=%%endpoint%%"};
/* ]]> */
</script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=8.5.2" id="woocommerce-js" defer="defer" data-wp-strategy="defer"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/ai-builder-demo-plugin/assets/js/payment.js?ver=1.9.5" id="tbdemo_twwpdemo_script-js"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/themes/tenweb-website-builder-theme/assets/js/scripts.min.js?ver=2.1.10" id="tenweb-website-builder-theme-script-js"></script>
<link rel="https://api.w.org/" href="https://10web-site.ai/128/wp-json/" /><link rel="alternate" type="application/json" href="https://10web-site.ai/128/wp-json/wp/v2/pages/52449" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://10web-site.ai/128/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.4.5" />
<meta name="generator" content="WooCommerce 8.5.2" />

<link rel='shortlink' href='https://10web-site.ai/128/?p=52449' />
<link rel="alternate" type="application/json+oembed" href="https://10web-site.ai/128/wp-json/oembed/1.0/embed?url=https%3A%2F%2F10web-site.ai%2F128%2Fshining-bream%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://10web-site.ai/128/wp-json/oembed/1.0/embed?url=https%3A%2F%2F10web-site.ai%2F128%2Fshining-bream%2F&#038;format=xml" />
<!-- <link rel="stylesheet" href="/index.css"> -->

    	<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
	<meta name="generator" content="Elementor 3.21.6; features: e_optimized_assets_loading; settings: css_print_method-external, google_font-enabled, font_display-block">
</head>
<body class="page-template-default page page-id-52449 page-parent theme-tenweb-website-builder-theme woocommerce-no-js elementor-default elementor-kit-52474 elementor-page elementor-page-52449">
    
    <!-- Google Tag Manager (noscript) --><noscript><iframe src="https://metrics.10web-site.ai/ns.html?id=GTM-M6GPZ95" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->        <script>
            function twdemo_clean_url(){
                let url, new_url;
                url = window.location.href;
                let tbdemo_url = new URL(url);
                let first_time = tbdemo_url.searchParams.get("first_time");
                if ( first_time != null ) {
                    /* To open the Customize panel until the first interaction. */
                    tbdemo_setCookie('tbdemo_first_time', 1);
                    if ( tbdemo_getCookie('tbdemo_theme') ) {
                        tbdemo_setCookie('tbdemo_theme', "");
                    }
                    if ( tbdemo_getCookie('twbb_theme_color') ) {
                        tbdemo_setCookie('twbb_theme_color', "");
                    }
                    if ( tbdemo_getCookie('twbb_theme_font') ) {
                        tbdemo_setCookie('twbb_theme_font', "");
                    }
                }

                new_url = url.split('?')[0];
                window.history.pushState({}, document.title, new_url);
            }
            function tbdemo_setCookie(cname, cvalue, exdays) {
                if ( typeof exdays == "undefined" ) {
                    var exdays = 3650;
                }
                var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function tbdemo_getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            twdemo_clean_url();
        </script>



  <style>
    body {
      margin: 0;
      padding: 0;
    }

    /* Small Bookmark Container (initial state) */
    .bookmark {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #007bff;
      color: white;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      display: flex;
      align-items: center;
    }

    .bookmark.open {
      border-radius: 15px;
      background: #0056b3;
      padding: 10px 30px;
      transition: all 0.3s ease;
    }

    /* Expanded Bookmark (when clicked) */
    .bookmark-content {
      position: fixed;
      bottom: 70px;
      right: 20px;
      background: #ffffff;
      color: #ffffff;
      padding: 20px;
      width: 300px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s;
      z-index: 999;
      background-image: url(/photos/Untitled.webp);
      background-size:100% 100%  ;
      background-position:center;
    }

    .bookmark-content.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .bookmark-content h4 {
      font-size: 20px;
      margin-bottom: 10px;
      font-family: 'Cabinet Grotesk', sans-serif;
        font-weight: 800;
        color: white;
    }

    .bookmark-content p {
      font-size: 14px;
      line-height: 1.5;
    }

    .bookmark-content a {
      color: #007bff;
      text-decoration: underline;
    }

    /* Close Button */
    .bookmark-close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 18px;
      cursor: pointer;
      color: #888;
    }

    .bookmark-close:hover {
      color: #000;
    }
    .bookmark-content li{
        list-style:none;
        position: relative;
    }
    .bookmark-content li::before{
        content: '✔';
        color: rgb(187, 255, 249);
    }
  </style>
</head>
<body>

  <!-- Small Bookmark -->
  <div class="bookmark" id="bookmark" onclick="toggleBookmark()">
    📣 <span>Overdraft Update</span>
  </div>

  <!-- Expanded Content -->
  <div class="bookmark-content" id="bookmarkContent">
    <div class="bookmark-close" id="bookmarkClose" onclick="toggleBookmark()">×</div>
    <h4>Overdraft Limit Now Up to ₹50 Lakh!</h4>
    <p>
      Bajaj Finserv has updated its overdraft facility, offering an amount up to ₹50 Lakh for your financial needs. This means more flexibility in managing cash flow and meeting unexpected expenses!
    </p>
    <p>
      Features include:
      <ul>
        <li>Up to ₹50 Lakh overdraft limit.</li>
        <li>Pay interest only on the amount you use.</li>
        <li>Quick approvals for instant access to funds.</li>
      </ul>
    </p>
    <p><a href="#apply">Apply Now</a> or <a href="#learn-more">Learn More</a></p>
  </div>

  <script>
    function toggleBookmark() {
      const bookmark = document.getElementById("bookmark");
      const bookmarkContent = document.getElementById("bookmarkContent");

      // Toggle the small bookmark and expanded content
      bookmark.classList.toggle("open");
      bookmarkContent.classList.toggle("open");
    }
  </script>


		<style>
			

 


/* Popup container */
.popup {
    display: flex; /* Hidden by default */
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    justify-content: center;
    align-items: center;
    z-index: 2000; /* Make sure it appears on top */
    animation: fadeIn 1s ease-in-out;
    border-radius:30px;
    max-width: 100%;
    font-family: 'Cabinet Grotesk', sans-serif;

    
}

/* Popup content */
.popup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
    position: relative;
    overflow:hidden;
    font-family: 'Cabinet Grotesk', sans-serif;
    
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    
}

/* Form Styling */
form {
    display: flex;
    flex-direction: column;
    font-family: 'Cabinet Grotesk', sans-serif;
}

form label {
    margin-top: 10px;
    font-family: 'Cabinet Grotesk', sans-serif;
}

form input, form textarea {
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: 'Cabinet Grotesk', sans-serif;
}

form button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Cabinet Grotesk', sans-serif;
}

form button:hover {
    background-color: #218838;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

#inquiry-form {
    font-family: 'Cabinet Grotesk', sans-serif;
    display: flex;
    font-family: 'Cabinet Grotesk', sans-serif;
}
.tap .sp{
    flex: 1;
}

.employement {
    font-size: large;
    font-family: 'Cabinet Grotesk', sans-serif;
}

.form-section{
    display: none;
    margin-top:10px;
    font-family: 'Cabinet Grotesk', sans-serif;
}
.form-section .active{
    display:block;
    font-family: 'Cabinet Grotesk', sans-serif;
}
.form-group{
    margin-bottom:10px;
    font-family: 'Cabinet Grotesk', sans-serif;
}

.form-section {
    display: none; /* Hide sections by default */
    margin-top: 10px;
    font-family: 'Cabinet Grotesk', sans-serif;
}
.form-section.active {
    display: block; /* Show section when active */
}
.form-group {
    margin-bottom: 10px;
    font-family: 'Cabinet Grotesk', sans-serif;
}
form{
    font-family: 'Cabinet Grotesk', sans-serif;
    background-color: #f0f0f0;
    color:#333;
    
}
form{
    background: transparent ;
    padding:20px;
    border-radius:8px;
    box-shadow:0 4px 8px rgba(0,0,0,0.1);
    max-width:600px;
    margin:auto;
}
.form-group{
    margin-bottom:15px;
}
.popup-content h2{
    text-align:center;
}
label{
    font-weight:bold;
    color:#ffffff;
}
input#inquiry-form[type="text"],
input#inquiry-form[type="number"],
textarea{
    width:100%;
    padding:10px;
    background-color:#e6e6e6;
    border-radius:4px;
    font-size:14px;
    transition: background-color 0.3s ease;
    border-top: #000000;
    border-left: #000000;
    border-right: #000000;
    border-radius:50px;
    overflow: hidden;
}
input#inquiry-form[type="text"]:focus,
input#inquiry-form[type="numbers"]:focus,
textarea:focus{
    background-color: #ffffff;
    outline:none;
}
#name,#email{
    display:inline-block;
    width:48%;
    border-top: #000000;
    border-left: #000000;
    border-right: #000000;
    overflow:hidden;
}
#name{
    margin-right:4%;
    border-top: #000000;
    border-left: #000000;
    border-right: #000000;
}
input#number{
    width:100%;
    overflow:hidden;
   
    border-top: #000000;
    border-left: #000000;
    border-right: #000000;
    border-radius:50px
}
textarea#message{
    width:95%;
    border-left: #000000;
    border-right: #000000;
    border-top: #000000 ;
    border-radius: 50px;
}
input[type="radio"]+ label{
    padding:5px 15px;
    margin-right:10px;
    background-color:#d9d9d9;
    border-radius:20px;
    display: inline-block;
    cursor:pointer;
    transition: background-color 0.3s ease;
    font-size:14px;
}
input[type="radio"]:checked + label{
    background-color:#a6a6a6;
    color:white;
}
input .form-group[type="radio"]{
    display:none;
}
button{
    background-color: #4caf50;
    color:white;
    padding:12px 20px;
    border:none;
    border-radius:25px;
    font-size:16px;
    cursor:pointer;
    transition:all 0.3s ease;
    position:relative;
    overflow:hidden;
}
button::before{
    content:'';
    position: absolute;
    width:100%;
    height:3px;
    background-color:white;
    bottom:0.5px;
    left:-100%;
    transition:all 0.3 ease;
    overflow: hidden;
}
button:hover::before{
    left:0;
}
button:hover{
    background-color:#45a049;
}
button:focus{
    outline:none;

}
.form-section{
    display:none;
}
.form-section .active{
    display:block;
}
.popup-content{
    background-color:rgba(54, 69, 79, 0.8);
}
select{
    width:20%;
    padding:10px;
    border:none;
    background-color: #e6e6e6;
    border-radius:4px;
    color:#555;
    appearance: none;
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size:10px;
    font-size: 17px;
    overflow:hidden;
}
select:focus{
    outline:none;
    background-color:#d9d9d9;
}
option[disabled]{
    color:#999
}

		</style>
  
  
        <style>
          
    
            .popup {
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(187, 168, 218, 0.233);
                justify-content: center;
                align-items: center;
                z-index: 1000;
                color: rgb(26, 26, 53);
            }
    
            .popup-content {
                background-color: #0c0264de;
                padding: 20px;
                border-radius: 8px;
                width: 90%;
                max-width: 500px;
                max-height: 90%;
                overflow-y: scroll; 
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            }
            .popup-content::-webkit-scrollbar{
                display:none;
            }
    
            .close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 24px;
                cursor: pointer;
                color: white;
            }
    
            h2 {
                text-align: center;
                color: #333;
            }
    
            .form-group {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
            }
    
            .form-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
    
            label {
                margin-bottom: 5px;
                font-weight: bold;
                color: #ffffff;
            }
    
            input[type="text"],
            input[type="email"],
            input[type="number"],
            textarea,
            select {
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                background-color: #aaa8a8dc;
                outline: none;
                transition: background-color 0.3s;
                flex: 1;
                margin-right: 10px;
            }
    
            input[type="text"]:focus,
            input[type="email"]:focus,
            input[type="number"]:focus,
            textarea:focus,
            select:focus {
                background-color: #ffffff;
            }
    
            .employment-options {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
            }
    
            .employment-options label {
                margin-right: 10px;
            }
    
            .employment-options div {
                padding: 10px 15px;
                border: 1px solid #afafaf;
                border-radius: 25px;
                background-color: #5800ca80;
                cursor: pointer;
                transition: background-color 0.3s;
                width: 48%;
                text-align: center;
                color: rgb(255, 255, 255);
            }
    
            .employment-options div:hover {
                background-color: #ececec;
            }
    
            .employment-options div.active {
                background-color: #4169E1;
                color: white;
            }
    
            .self-employed-section,
            .salaried-section {
                display: none;
                margin-top: 10px;
            }
    
            .active {
                display: block;
            }
    
            .employment-sections {
                display: flex; /* Use flexbox to position sections side by side */
                justify-content: space-between; /* Add spacing between sections */
                margin-top: 10px; /* Add margin for spacing */
            }
    
            select {
                cursor: pointer;
            }
    
            button[type="submit"] {
                background-color: #3700ff; /* Original color retained */
                color: white;
                padding: 12px 20px;
                border:#333;
                border-radius: 300px;
                cursor: pointer;
                transition: background-color 0.3s;
                width: 80%;
                margin: auto;
            }
    
            button:hover {
                background-color: #365899;
            }
    
            @media (max-width: 600px) {
                .form-row {
                    flex-direction: column;
                }
    
                .form-row > div {
                    margin-right: 0;
                    margin-bottom: 10px;
                }
    
                .employment-options {
                    flex-direction: column;
                    align-items: flex-start;
                }
    
                .employment-sections {
                    flex-direction: column; /* Stack sections on smaller screens */
                }
            }
            
            /* For Chrome, Safari, Edge, and Opera */
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
    
            /* For Firefox */
            input[type="number"] {
                -moz-appearance: textfield;
            }
			.success-message {
            display: none;
            color: #28a745;
            font-size: 1.2em;
            text-align: center;
            margin-top: 20px;
        }
        </style>
    
   
        <div id="popup" class="popup">
            <div class="popup-content"><b>
                <span class="close-btn" id="close-btn">&times;</span></b>
                <h2 style="color: white;font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 300;">Submit Your Inquiry</h2>
                <form id="inquiry-form">
                    <div class="form-group">
                        <label for="name" style="color: white; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Name:</label>
                        <input type="text" id="name" name="name" required placeholder="Your Name*" style="border: none;width: 100%; background-color:#f1f1f19a;">
                    </div>
                    <div class="form-group">
                        <label for="email" style="color: white; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="Your Email*" style="border: none;width: 100%; background-color:#f1f1f19a;">
                    </div>
                    <div class="form-group">
                        <label for="mobile" style="color: white; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Phone Number:</label>
                        <input type="number" id="mobile" name="mobile" required placeholder="Your Phone*" style="border: none;width: 100%; background-color:#f1f1f19a;">
                    </div>
                    <div class="form-group">
                        <label for="interested" style="color: white; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Interested In:</label>
                        <select id="interested" name="interested" required style="border: none;width: 100%; background-color:#f1f1f19a;">
                            <option value="" disabled selected>Select</option>
                            <option value="home-loan">Home Loan</option>
                            <option value="business-loan">Business Loan</option>
                            <option value="personal-loan">Personal Loan</option>
                            <option value="overdraft">Overdraft</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div class="employment-options" style="display:flex;flex-direction: row;">
                        <div id="self-employed-btn" style="border: none;background-color:#0600579a; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Self Employed</div>
                        <div id="salaried-btn" style="border: none;background-color:#0600579a; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Salaried</div>
                    </div>
                    <div class="employment-sections">
                        <div id="self-employed-section" class="self-employed-section">
                            <div class="form-row">
                                <div class="form-group" style="margin-right: 1%;">
                                    <label for="business-type" style="color: white; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Type of Business:</label>
                                    <input type="text" id="business-type" name="business-type" style="width:100%; border: none;background-color:#f1f1f19a;">
                                </div>
                                <div class="form-group">
                                    <label for="annual-income" style="color: white; font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Annual Income:</label>
                                    <input type="number" id="annual-income" name="annual-income" style=" width:100%; border: none;background-color:#f1f1f19a;">
                                </div>
                            </div>
                        </div>
                        <div id="salaried-section" class="salaried-section">
                            <div class="form-row">
                                <div class="form-group" style="margin-right: 1%;">
                                    <label for="salary-range" style="color: white;font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Salary Range:</label>
                                    <select id="salary-range" name="salary-range" style="border: none;background-color:#f1f1f19a; width: 190px;">
                                        <option value="" disabled selected>Select</option>
                                        <option value="25k-30k">25k-30k</option>
                                        <option value="35k-40k">35k-40k</option>
                                        <option value="45k-50k">45k-50k</option>
                                        <option value="50k+">50k+</option>
                                    </select>
                                </div>
                                <div class="form-group" >
                                    <label for="company-name" style="color: white;font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Company Name:</label>
                                    <input type="text" id="company-name" name="company-name" style="border: none;background-color:#f1f1f19a;width: 100%;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" style="font-family: 'Cabinet'-Grotesk,sans-serif;font-weight: 500;font-size: 20px;">Submit Inquiry</button>
                </form>
            </div>
        </div>
    
        <script>
            const selfEmployedBtn = document.getElementById('self-employed-btn');
            const salariedBtn = document.getElementById('salaried-btn');
            const selfEmployedSection = document.getElementById('self-employed-section');
            const salariedSection = document.getElementById('salaried-section');
    
            selfEmployedBtn.addEventListener('click', () => {
                selfEmployedSection.classList.toggle('active');
                salariedSection.classList.remove('active');
                selfEmployedBtn.classList.toggle('active');
                salariedBtn.classList.remove('active');
            });
    
            salariedBtn.addEventListener('click', () => {
                salariedSection.classList.toggle('active');
                selfEmployedSection.classList.remove('active');
                salariedBtn.classList.toggle('active');
                selfEmployedBtn.classList.remove('active');
            });
    
            document.getElementById('close-btn').addEventListener('click', () => {
                document.getElementById('popup').style.display = 'none';
            });
            
        </script>
		<script>
			    const inquiryForm = document.getElementById('inquiry-form');
        const successMessage = document.getElementById('success-message');
        const popup = document.getElementById('popup');
        
        inquiryForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting the traditional way

            const formData = new FormData(inquiryForm);
            const formObject = Object.fromEntries(formData.entries());

            fetch('https://main-form-backend.onrender.com/submit-inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            })
            .then((response) => response.json())
            .then((data) => {
                // Hide the form and show the success message
                popup.style.display = 'none';
                successMessage.style.display = 'block';
                
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });

        // Close the popup when close button is clicked
        document.getElementById('close-btn').addEventListener('click', () => {
            popup.style.display = 'none';
        });
		</script>
		<script>
			import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
  query GetUser {
    user(id: "1") {
      name
    }
  }
`;

const UserComponent = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{data.user.name}</h1>;
};

		</script>

  
    

<style>
    /* General Styles */
    * {
      
    }
  
    body {
      font-family: 'Cabinet Grotesk', sans-serif;
    }
  
    a {
      text-decoration: none;
    }
  
    /* Navigation Bar */
    .nav-bar {
      background: rgb(255, 255, 255);
    }
  
    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      flex-wrap: wrap; /* Allow wrapping on smaller screens */
    }
  
    .logo-container {
      flex: 1;
    }
  
    .logo {
      width: 45vh;
    }
  
    .nav-tabs {
      display: flex;
      justify-content: flex-end;
      flex: 2;
    }
  
    .nav-pages {
      overflow: auto;
      display: flex;
      list-style: none;
      margin-top: 25px;
    }
  
    .nav-links {
      margin: 10px;
      font-size: 13px;
    }
  
    .nav-link-item {
      color: rgb(61, 61, 61);
      transition: 0.3s ease-in-out;
      position: relative;
      font-family: 'cabinet grotesk',sans-serif;
      font-weight: 500;
    }
  
    .nav-link-item:hover {
      color: rgb(255, 255, 255);
    }
  
    .nav-link-item::before {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: rgb(54, 9, 255);
      transition: all 0.5s;
    }
  
    .nav-link-item:hover::before {
      width: 100%;
    }
  
    .cta-container {
      display: flex;
      width: 20%;
      justify-content: flex-end;
    }
  
    .cta-btn {
      background: none;
      margin: 10px;
      padding: 8px 20px;
      border-radius: 5px;
      font-size: 15px;
    }
  
    .cta-btn1 {
      border: 1px solid rgb(55, 0, 255);
      transition: 0.5s all ease;
    }
  
    .cta-btn1:hover {
      color: white;
      background: rgb(55, 0, 255);
      cursor: pointer;
    }
  
    .cta-btn2 {
      background: rgb(55, 0, 255);
      border: 1px solid rgb(219, 219, 219);
      color: white;
      transition: 0.5s all ease;
    }
  
    .cta-btn2:hover {
      color: black;
      background: white;
      cursor: pointer;
    }
  
    /* Search Bar Styles */
    .search-bar-wrapper {
      position: relative;
      margin: 0 20px;
      cursor: pointer;
      display: none; /* Hidden by default, visible on larger screens */
      align-items: center;
      width: 11%;
    }
  
    .search-icon {
      height: 30px;
      width: 30px;
    }
  
    .search-input {
      display: none; /* Hidden by default */
      position: absolute;
      top: 5;
      left: 0;
      height: 40px;
      width: 150px;
      padding: 5px 10px;
      border: 1px solid rgb(219, 219, 219);
      border-radius: 5px;
    }
  
    /* Sidebar */
    .sidebar-nav {
      position: fixed;
      top: 0;
      left: -250px; /* Hidden off-screen */
      width: 250px;
      height: 100%;
      background-color: rgb(255, 255, 255);
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
      transition: left 0.3s ease;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 1000;
    }
  
    .sidebar-nav ul.nav-pages {
      flex-direction: column;
      gap: 10px;
    }
  
    .sidebar-nav .nav-links {
      margin: 10px 0;
    }
  
    .sidebar-nav .nav-link-item {
      font-size: 18px;
    }
  
    .sidebar-nav .cta-container {
      flex-direction: column;
      gap: 10px;
    }
  
    /* Hamburger Menu */
    .hamburger-menu {
      display: none; /* Default hidden */
      flex-direction: column;
      cursor: pointer;
      margin-left: auto;
    }
  
    .hamburger-menu .bar {
      background-color: #333;
      height: 3px;
      width: 25px;
      margin: 4px 0;
    }
  
    /* Responsive Styles */
    @media (max-width: 768px) {
      .hamburger-menu {
      display: flex;
      }
  
      .nav-tabs,
      .search-bar-wrapper,
      .cta-container {
      display: none; /* Hide original navbar elements */
      }
  
      .sidebar-nav.active {
      left: 0; /* Slide-in effect */
      }
  
      .sidebar-nav .cta-container {
      display: flex; /* Ensure buttons appear in the sidebar */
      justify-content: center;
      }
  
      .cta-btn {
      width: 150px;
      }
    }
  
    @media (min-width: 769px) {
      .search-bar-wrapper {
      display: flex; /* Visible on larger screens */
      }
    }
    </style>
  </head>
  <body>
    <nav class="nav-bar">
    <div class="navbar-container">
      <div class="logo-container">
      <a href="https://creditafinance.in/" class="logo-link">
        <img
        src="/new_logo_main-removebg-preview.png"
        alt="Logo"
        class="logo"
        />
      </a>
      </div>
  
      <!-- links of navigatin bar -->
      <div class="nav-tabs">
      <ul class="nav-pages">
        <!-- home link -->
        <li class="nav-links"><a href="https://creditafinance.in/" class="nav-link-item" style="color: black;">Home</a></li>
        <li class="nav-links"><a href="/about us.html" class="nav-link-item" style="color: black;">About</a></li>
        <li class="nav-links"><a href="/services.html" class="nav-link-item" style="color: black;">Services</a></li>
        <li class="nav-links"><a href="/emi calculator.html" class="nav-link-item" style="color: black;">EMI Calculator</a></li>
        <li class="nav-links"><a href="/testimonials.html" class="nav-link-item" style="color: black;">Testimonials</a></li>
        <li class="nav-links"><a href="/contact us.html" class="nav-link-item" style="color: black;">Contact</a></li>
      </ul>
      </div>
  
      <div class="search-bar-wrapper">
      <img src="/search.png" alt="Search" class="search-icon" />
      <input
        type="text"
        class="search-input"
        placeholder="Search..."
      />
      </div>
  
      <div class="cta-container">
      <span class="cta-btn cta-btn1" onclick="window.location.href='/sign in.html'">Sign In</span>
      <span class="cta-btn cta-btn2" onclick="window.location.href='/apply form.html'">Apply Now</span>
      </div>
  
      <div class="hamburger-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      </div>
    </div>
  
    <div class="sidebar-nav">
      <ul class="nav-pages">
      <li class="nav-links"><a href="https://creditafinance.in/" class="nav-link-item">Home</a></li>
      <li class="nav-links"><a href="/about us.html" class="nav-link-item">About</a></li>
      <li class="nav-links"><a href="/emi calculator.html" class="nav-link-item">EMI Calculator</a></li>
      <li class="nav-links"><a href="/testimonials.html" class="nav-link-item">Testimonials</a></li>
      <li class="nav-links"><a href="/blog.html" class="nav-link-item">Blog</a></li>
      <li class="nav-links"><a href="/contact us.html" class="nav-link-item">Contact</a></li>
      </ul>
      <div class="cta-container">
      <a href=""><span class="cta-btn cta-btn1" onclick="window.location.href='/sign in.html'">Sign In</span></a>
      <span class="cta-btn cta-btn2" onclick="window.location.href='/apply form.html'">Apply Now</span>
      </div>
    </div>
    </nav>
  
    <script>
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const searchBarWrapper = document.querySelector('.search-bar-wrapper');
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
  
    hamburgerMenu.addEventListener('click', () => {
      sidebarNav.classList.toggle('active');
    });
  
    searchBarWrapper.addEventListener('click', (e) => {
      searchInput.style.display = 'block';
      searchIcon.style.display = 'none';
      e.stopPropagation();
    });
  
    document.addEventListener('click', () => {
      searchInput.style.display = 'none';
      searchIcon.style.display = 'block';
    });
  
    searchInput.addEventListener('click', (e) => e.stopPropagation());
    </script>		
     			<div data-elementor-type="wp-page" data-elementor-id="52449" class="elementor elementor-52449">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-7f979378 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default" data-id="7f979378" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-74a2142f" data-id="74a2142f" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-79286357 elementor-widget elementor-widget-twbbpost-content" data-id="79286357" data-element_type="widget" data-widget_type="twbbpost-content.default">
				<div class="elementor-widget-container">
			<style>.elementor-52449 .elementor-element.elementor-element-0q0pux2b{--display:flex;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:center;--background-transition:0.3s;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-38uobb3u .twbb-headline{text-align:center;font-family:var( --e-global-typography-primary-font-family ), sans-serif;font-size:var( --e-global-typography-primary-font-size );font-weight:var( --e-global-typography-primary-font-weight );text-transform:var( --e-global-typography-primary-text-transform );font-style:var( --e-global-typography-primary-font-style );text-decoration:var( --e-global-typography-primary-text-decoration );line-height:var( --e-global-typography-primary-line-height );letter-spacing:var( --e-global-typography-primary-letter-spacing );word-spacing:var( --e-global-typography-primary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-38uobb3u .twbb-headline-plain-text{color:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-38uobb3u .twbb-headline-dynamic-text{color:var( --e-global-color-accent );font-family:var( --e-global-typography-primary-font-family ), sans-serif;font-weight:var( --e-global-typography-primary-font-weight );text-transform:var( --e-global-typography-primary-text-transform );font-style:var( --e-global-typography-primary-font-style );text-decoration:var( --e-global-typography-primary-text-decoration );line-height:var( --e-global-typography-primary-line-height );letter-spacing:var( --e-global-typography-primary-letter-spacing );word-spacing:var( --e-global-typography-primary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-38uobb3u{width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-oaqnrgzt{text-align:center;color:var( --e-global-color-text );font-family:var( --e-global-typography-twbb_p1-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p1-font-size );font-weight:var( --e-global-typography-twbb_p1-font-weight );text-transform:var( --e-global-typography-twbb_p1-text-transform );font-style:var( --e-global-typography-twbb_p1-font-style );text-decoration:var( --e-global-typography-twbb_p1-text-decoration );line-height:var( --e-global-typography-twbb_p1-line-height );letter-spacing:var( --e-global-typography-twbb_p1-letter-spacing );word-spacing:var( --e-global-typography-twbb_p1-word-spacing );width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-6jhn6cng{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--justify-content:center;--gap:20px 20px;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-3l5b0wnw .elementor-button{font-family:var( --e-global-typography-accent-font-family ), sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );text-transform:var( --e-global-typography-accent-text-transform );font-style:var( --e-global-typography-accent-font-style );text-decoration:var( --e-global-typography-accent-text-decoration );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );fill:var( --e-global-color-twbb_button_inv );color:var( --e-global-color-twbb_button_inv );background-color:var( --e-global-color-accent );border-style:solid;border-width:1px 1px 1px 1px;border-color:var( --e-global-color-accent );padding:12px 24px 12px 24px;}.elementor-52449 .elementor-element.elementor-element-3l5b0wnw .elementor-button:hover, .elementor-52449 .elementor-element.elementor-element-3l5b0wnw .elementor-button:focus{color:var( --e-global-color-twbb_button_inv );background-color:var( --e-global-color-twbb_accent_hover );border-color:var( --e-global-color-twbb_accent_hover );}.elementor-52449 .elementor-element.elementor-element-3l5b0wnw .elementor-button:hover svg, .elementor-52449 .elementor-element.elementor-element-3l5b0wnw .elementor-button:focus svg{fill:var( --e-global-color-twbb_button_inv );}.elementor-52449 .elementor-element.elementor-element-zuzztlkn .elementor-button{font-family:var( --e-global-typography-accent-font-family ), sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );text-transform:var( --e-global-typography-accent-text-transform );font-style:var( --e-global-typography-accent-font-style );text-decoration:var( --e-global-typography-accent-text-decoration );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );fill:var( --e-global-color-accent );color:var( --e-global-color-accent );background-color:var( --e-global-color-twbb_transparent );border-style:solid;border-width:1px 1px 1px 1px;border-color:var( --e-global-color-accent );padding:12px 24px 12px 24px;}.elementor-52449 .elementor-element.elementor-element-zuzztlkn .elementor-button:hover, .elementor-52449 .elementor-element.elementor-element-zuzztlkn .elementor-button:focus{color:var( --e-global-color-twbb_button_inv );background-color:var( --e-global-color-accent );border-color:var( --e-global-color-accent );}.elementor-52449 .elementor-element.elementor-element-zuzztlkn .elementor-button:hover svg, .elementor-52449 .elementor-element.elementor-element-zuzztlkn .elementor-button:focus svg{fill:var( --e-global-color-twbb_button_inv );}.elementor-52449 .elementor-element.elementor-element-0ypi7fg2{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-xc0cm9nx{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--background-transition:0.3s;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-xc0cm9nx:not(.elementor-motion-effects-element-type-background), .elementor-52449 .elementor-element.elementor-element-xc0cm9nx > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-twbb_bg_3 );}.elementor-52449 .elementor-element.elementor-element-xc0cm9nx, .elementor-52449 .elementor-element.elementor-element-xc0cm9nx::before{--border-transition:0.3s;}.elementor-52449 .elementor-element.elementor-element-uxlu2ui8{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--gap:20px 20px;--background-transition:0.3s;}.elementor-52449 .elementor-element.elementor-element-8vp7yyte{text-align:left;width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-8vp7yyte .elementor-heading-title{color:var( --e-global-color-primary );font-family:var( --e-global-typography-secondary-font-family ), sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );text-transform:var( --e-global-typography-secondary-text-transform );font-style:var( --e-global-typography-secondary-font-style );text-decoration:var( --e-global-typography-secondary-text-decoration );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-knhvso2n{text-align:left;color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );text-transform:var( --e-global-typography-text-text-transform );font-style:var( --e-global-typography-text-font-style );text-decoration:var( --e-global-typography-text-text-decoration );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-mfww5a7o{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--gap:20px 20px;--background-transition:0.3s;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-content-wrapper{min-height:100px;padding:16px 0px 0px 0px;text-align:left;transition-duration:1000ms;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-image-html-tag{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-title{font-family:var( --e-global-typography-twbb_h5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h5-font-size );font-weight:var( --e-global-typography-twbb_h5-font-weight );text-transform:var( --e-global-typography-twbb_h5-text-transform );font-style:var( --e-global-typography-twbb_h5-font-style );text-decoration:var( --e-global-typography-twbb_h5-text-decoration );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );color:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-description{font-family:var( --e-global-typography-twbb_p5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p5-font-size );font-weight:var( --e-global-typography-twbb_p5-font-weight );text-transform:var( --e-global-typography-twbb_p5-text-transform );font-style:var( --e-global-typography-twbb_p5-font-style );text-decoration:var( --e-global-typography-twbb_p5-text-decoration );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );color:var( --e-global-color-text );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:horizontal;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-button__two{font-family:var( --e-global-typography-accent-font-family ), sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );text-transform:var( --e-global-typography-accent-text-transform );font-style:var( --e-global-typography-accent-font-style );text-decoration:var( --e-global-typography-accent-text-decoration );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );border-width:Arraypx;margin:20px 0px 0px 0px;padding:12px 24px 12px 24px;color:var( --e-global-color-accent );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-twbb_transparent );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-button__two:hover{color:var( --e-global-color-twbb_button_inv );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-accent );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-content-wrapper .twbb_cta-button-wrapper {transition-delay:calc( 1000ms / 3 );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-content-wrapper{min-height:100px;padding:16px 0px 0px 0px;text-align:left;transition-duration:1000ms;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-image-html-tag{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-title{font-family:var( --e-global-typography-twbb_h5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h5-font-size );font-weight:var( --e-global-typography-twbb_h5-font-weight );text-transform:var( --e-global-typography-twbb_h5-text-transform );font-style:var( --e-global-typography-twbb_h5-font-style );text-decoration:var( --e-global-typography-twbb_h5-text-decoration );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );color:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-description{font-family:var( --e-global-typography-twbb_p5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p5-font-size );font-weight:var( --e-global-typography-twbb_p5-font-weight );text-transform:var( --e-global-typography-twbb_p5-text-transform );font-style:var( --e-global-typography-twbb_p5-font-style );text-decoration:var( --e-global-typography-twbb_p5-text-decoration );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );color:var( --e-global-color-text );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:horizontal;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-button__two{font-family:var( --e-global-typography-accent-font-family ), sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );text-transform:var( --e-global-typography-accent-text-transform );font-style:var( --e-global-typography-accent-font-style );text-decoration:var( --e-global-typography-accent-text-decoration );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );border-width:Arraypx;margin:20px 0px 0px 0px;padding:12px 24px 12px 24px;color:var( --e-global-color-accent );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-twbb_transparent );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-button__two:hover{color:var( --e-global-color-twbb_button_inv );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-accent );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-content-wrapper .twbb_cta-button-wrapper {transition-delay:calc( 1000ms / 3 );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-content-wrapper{min-height:100px;padding:16px 0px 0px 0px;text-align:left;transition-duration:1000ms;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-image-html-tag{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-title{font-family:var( --e-global-typography-twbb_h5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h5-font-size );font-weight:var( --e-global-typography-twbb_h5-font-weight );text-transform:var( --e-global-typography-twbb_h5-text-transform );font-style:var( --e-global-typography-twbb_h5-font-style );text-decoration:var( --e-global-typography-twbb_h5-text-decoration );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );color:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-description{font-family:var( --e-global-typography-twbb_p5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p5-font-size );font-weight:var( --e-global-typography-twbb_p5-font-weight );text-transform:var( --e-global-typography-twbb_p5-text-transform );font-style:var( --e-global-typography-twbb_p5-font-style );text-decoration:var( --e-global-typography-twbb_p5-text-decoration );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );color:var( --e-global-color-text );}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:horizontal;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-button__two{font-family:var( --e-global-typography-accent-font-family ), sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );text-transform:var( --e-global-typography-accent-text-transform );font-style:var( --e-global-typography-accent-font-style );text-decoration:var( --e-global-typography-accent-text-decoration );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );border-width:Arraypx;margin:20px 0px 0px 0px;padding:12px 24px 12px 24px;color:var( --e-global-color-accent );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-twbb_transparent );}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-button__two:hover{color:var( --e-global-color-twbb_button_inv );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-accent );}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-content-wrapper .twbb_cta-button-wrapper {transition-delay:calc( 1000ms / 3 );}.elementor-52449 .elementor-element.elementor-element-29gz74l3{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-zeek56b9{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--align-items:center;--background-transition:0.3s;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-zeek56b9:not(.elementor-motion-effects-element-type-background), .elementor-52449 .elementor-element.elementor-element-zeek56b9 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-twbb_bg_3 );}.elementor-52449 .elementor-element.elementor-element-zeek56b9, .elementor-52449 .elementor-element.elementor-element-zeek56b9::before{--border-transition:0.3s;}.elementor-52449 .elementor-element.elementor-element-pezy3pcs > .elementor-widget-container{margin:0px 30px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-pezy3pcs{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-mrzywe53{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-1quh9m7p{text-align:left;width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-1quh9m7p .elementor-heading-title{color:var( --e-global-color-primary );font-family:var( --e-global-typography-secondary-font-family ), sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );text-transform:var( --e-global-typography-secondary-text-transform );font-style:var( --e-global-typography-secondary-font-style );text-decoration:var( --e-global-typography-secondary-text-decoration );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-1quh9m7p > .elementor-widget-container{margin:0px 0px 10px 0px;}.elementor-52449 .elementor-element.elementor-element-nuivd8nk{text-align:left;color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );text-transform:var( --e-global-typography-text-text-transform );font-style:var( --e-global-typography-text-font-style );text-decoration:var( --e-global-typography-text-text-decoration );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-nuivd8nk > .elementor-widget-container{margin:10px 0px 10px 0px;padding:0px 0px 30px 0px;}.elementor-52449 .elementor-element.elementor-element-f5rk95on{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-x2judz5o{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--gap:20px 20px;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-vig04zfm .elementor-counter-number-wrapper{color:var( --e-global-color-primary );font-family:var( --e-global-typography-twbb_h4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h4-font-size );font-weight:var( --e-global-typography-twbb_h4-font-weight );text-transform:var( --e-global-typography-twbb_h4-text-transform );font-style:var( --e-global-typography-twbb_h4-font-style );text-decoration:var( --e-global-typography-twbb_h4-text-decoration );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-vig04zfm{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-vig04zfm.elementor-element{--align-self:flex-start;}.elementor-52449 .elementor-element.elementor-element-yia8dtsq{text-align:left;color:var( --e-global-color-text );font-family:var( --e-global-typography-twbb_p4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p4-font-size );font-weight:var( --e-global-typography-twbb_p4-font-weight );text-transform:var( --e-global-typography-twbb_p4-text-transform );font-style:var( --e-global-typography-twbb_p4-font-style );text-decoration:var( --e-global-typography-twbb_p4-text-decoration );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-5ewjhczp{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--gap:20px 20px;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-22tiy43j .elementor-counter-number-wrapper{color:var( --e-global-color-primary );font-family:var( --e-global-typography-twbb_h4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h4-font-size );font-weight:var( --e-global-typography-twbb_h4-font-weight );text-transform:var( --e-global-typography-twbb_h4-text-transform );font-style:var( --e-global-typography-twbb_h4-font-style );text-decoration:var( --e-global-typography-twbb_h4-text-decoration );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-22tiy43j{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-22tiy43j.elementor-element{--align-self:flex-start;}.elementor-52449 .elementor-element.elementor-element-ctkero0x{text-align:left;color:var( --e-global-color-text );font-family:var( --e-global-typography-twbb_p4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p4-font-size );font-weight:var( --e-global-typography-twbb_p4-font-weight );text-transform:var( --e-global-typography-twbb_p4-text-transform );font-style:var( --e-global-typography-twbb_p4-font-style );text-decoration:var( --e-global-typography-twbb_p4-text-decoration );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-54jzrfub{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-xwwq1taq{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--gap:20px 20px;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-ko71hn5s .elementor-counter-number-wrapper{color:var( --e-global-color-primary );font-family:var( --e-global-typography-twbb_h4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h4-font-size );font-weight:var( --e-global-typography-twbb_h4-font-weight );text-transform:var( --e-global-typography-twbb_h4-text-transform );font-style:var( --e-global-typography-twbb_h4-font-style );text-decoration:var( --e-global-typography-twbb_h4-text-decoration );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-ko71hn5s{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-ko71hn5s.elementor-element{--align-self:flex-start;}.elementor-52449 .elementor-element.elementor-element-u1n0wijg{text-align:left;color:var( --e-global-color-text );font-family:var( --e-global-typography-twbb_p4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p4-font-size );font-weight:var( --e-global-typography-twbb_p4-font-weight );text-transform:var( --e-global-typography-twbb_p4-text-transform );font-style:var( --e-global-typography-twbb_p4-font-style );text-decoration:var( --e-global-typography-twbb_p4-text-decoration );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-ol97gw88{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--gap:20px 20px;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-30kbsu43 .elementor-counter-number-wrapper{color:var( --e-global-color-primary );font-family:var( --e-global-typography-twbb_h4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h4-font-size );font-weight:var( --e-global-typography-twbb_h4-font-weight );text-transform:var( --e-global-typography-twbb_h4-text-transform );font-style:var( --e-global-typography-twbb_h4-font-style );text-decoration:var( --e-global-typography-twbb_h4-text-decoration );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-30kbsu43{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-30kbsu43.elementor-element{--align-self:flex-start;}.elementor-52449 .elementor-element.elementor-element-4u54e9nq{text-align:left;color:var( --e-global-color-text );font-family:var( --e-global-typography-twbb_p4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p4-font-size );font-weight:var( --e-global-typography-twbb_p4-font-weight );text-transform:var( --e-global-typography-twbb_p4-text-transform );font-style:var( --e-global-typography-twbb_p4-font-style );text-decoration:var( --e-global-typography-twbb_p4-text-decoration );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-psya57ik{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--align-items:center;--background-transition:0.3s;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-psya57ik:not(.elementor-motion-effects-element-type-background), .elementor-52449 .elementor-element.elementor-element-psya57ik > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-twbb_bg_3 );}.elementor-52449 .elementor-element.elementor-element-psya57ik, .elementor-52449 .elementor-element.elementor-element-psya57ik::before{--border-transition:0.3s;}.elementor-52449 .elementor-element.elementor-element-p11ydc14{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--gap:20px 20px;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-y1tamfth{text-align:left;width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-y1tamfth .elementor-heading-title{color:var( --e-global-color-primary );font-family:var( --e-global-typography-secondary-font-family ), sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );text-transform:var( --e-global-typography-secondary-text-transform );font-style:var( --e-global-typography-secondary-font-style );text-decoration:var( --e-global-typography-secondary-text-decoration );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-qbl8mc3j{text-align:left;color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );text-transform:var( --e-global-typography-text-text-transform );font-style:var( --e-global-typography-text-font-style );text-decoration:var( --e-global-typography-text-text-decoration );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-qbl8mc3j > .elementor-widget-container{padding:0px 0px 30px 0px;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(8px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(8px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(8px/2);margin-left:calc(8px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-8px/2);margin-left:calc(-8px/2);}body.rtl .elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-8px/2);}body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-8px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-icon i{color:var( --e-global-color-secondary );transition:color 0.3s;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-icon svg{fill:var( --e-global-color-secondary );transition:fill 0.3s;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0{--e-icon-list-icon-size:16px;--icon-vertical-offset:0px;width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-icon{padding-right:16px;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-item > .elementor-icon-list-text, .elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-item > a{font-family:var( --e-global-typography-text-font-family ), sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );text-transform:var( --e-global-typography-text-text-transform );font-style:var( --e-global-typography-text-font-style );text-decoration:var( --e-global-typography-text-text-decoration );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-text{color:var( --e-global-color-text );transition:color 0.3s;}.elementor-52449 .elementor-element.elementor-element-cmo3zw4i > .elementor-widget-container{margin:0px 0px 0px 30px;}.elementor-52449 .elementor-element.elementor-element-cmo3zw4i{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-rbzn8uez{--display:flex;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--align-items:center;--background-transition:0.3s;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-rbzn8uez:not(.elementor-motion-effects-element-type-background), .elementor-52449 .elementor-element.elementor-element-rbzn8uez > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-twbb_bg_inv );}.elementor-52449 .elementor-element.elementor-element-rbzn8uez, .elementor-52449 .elementor-element.elementor-element-rbzn8uez::before{--border-transition:0.3s;}.elementor-52449 .elementor-element.elementor-element-rbzn8uez > .elementor-shape-bottom svg, .elementor-52449 .elementor-element.elementor-element-rbzn8uez > .e-con-inner > .elementor-shape-bottom svg{height:60px;transform:translateX(-50%) rotateY(180deg);}.elementor-52449 .elementor-element.elementor-element-a456pvw0{text-align:center;width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-a456pvw0 .elementor-heading-title{color:var( --e-global-color-twbb_primary_inv );font-family:var( --e-global-typography-secondary-font-family ), sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );text-transform:var( --e-global-typography-secondary-text-transform );font-style:var( --e-global-typography-secondary-font-style );text-decoration:var( --e-global-typography-secondary-text-decoration );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-7sooo9i0{text-align:center;color:var( --e-global-color-twbb_text_inv );font-family:var( --e-global-typography-text-font-family ), sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );text-transform:var( --e-global-typography-text-text-transform );font-style:var( --e-global-typography-text-font-style );text-decoration:var( --e-global-typography-text-text-decoration );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-7sooo9i0 > .elementor-widget-container{padding:0px 0px 30px 0px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-masonry {grid-template-columns:repeat(3, 1fr);}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-masonry{grid-gap:32px !important;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial-carousel-swiper .swiper-slide{background-color:var( --e-global-color-twbb_light_card );border-color:#000000;border-radius:4px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-masonry .tenweb-item{background-color:var( --e-global-color-twbb_light_card );border-width:1px 1px 1px 1px;border-color:#000000;padding:32px 32px 32px 32px;border-radius:4px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.elementor-widget-twbb-testimonial-carousel .e-rating{margin-bottom:32px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde{--e-rating-icon-font-size:20px;--e-rating-gap:4px;--e-rating-icon-marked-color:#F4C730;width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline .tenweb-testimonial__footer,
					.elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_stacked .tenweb-testimonial__footer{margin-top:20px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above .tenweb-testimonial__footer{margin-bottom:20px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_left .tenweb-testimonial__footer{padding-right:20px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_right .tenweb-testimonial__footer{padding-left:20px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__text{color:var( --e-global-color-twbb_text_inv );font-family:var( --e-global-typography-twbb_p4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p4-font-size );font-weight:var( --e-global-typography-twbb_p4-font-weight );text-transform:var( --e-global-typography-twbb_p4-text-transform );font-style:var( --e-global-typography-twbb_p4-font-style );text-decoration:var( --e-global-typography-twbb_p4-text-decoration );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__name{color:var( --e-global-color-twbb_primary_inv );font-family:var( --e-global-typography-twbb_bold-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_bold-font-size );font-weight:var( --e-global-typography-twbb_bold-font-weight );text-transform:var( --e-global-typography-twbb_bold-text-transform );font-style:var( --e-global-typography-twbb_bold-font-style );text-decoration:var( --e-global-typography-twbb_bold-text-decoration );line-height:var( --e-global-typography-twbb_bold-line-height );letter-spacing:var( --e-global-typography-twbb_bold-letter-spacing );word-spacing:var( --e-global-typography-twbb_bold-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__title{color:var( --e-global-color-twbb_text_inv );font-family:var( --e-global-typography-twbb_p4-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p4-font-size );font-weight:var( --e-global-typography-twbb_p4-font-weight );text-transform:var( --e-global-typography-twbb_p4-text-transform );font-style:var( --e-global-typography-twbb_p4-font-style );text-decoration:var( --e-global-typography-twbb_p4-text-decoration );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__image{width:50px;height:50px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__image img{width:50px;height:50px;border-radius:100px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_left .tenweb-testimonial__content:after,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_right .tenweb-testimonial__content:after{top:calc( 20px + (50px / 2) - 8px );}body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_stacked:not(.tenweb-testimonial--align-center):not(.tenweb-testimonial--align-right) .tenweb-testimonial__content:after,
					 body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline:not(.tenweb-testimonial--align-center):not(.tenweb-testimonial--align-right) .tenweb-testimonial__content:after,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_stacked.tenweb-testimonial--align-left .tenweb-testimonial__content:after,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline.tenweb-testimonial--align-left .tenweb-testimonial__content:after{left:calc( 20px + (50px / 2) - 8px );right:auto;}body.rtl .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_stacked:not(.tenweb-testimonial--align-center):not(.tenweb-testimonial--align-left) .tenweb-testimonial__content:after,
					 body.rtl .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline:not(.tenweb-testimonial--align-center):not(.tenweb-testimonial--align-left) .tenweb-testimonial__content:after,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_stacked.tenweb-testimonial--align-right .tenweb-testimonial__content:after,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline.tenweb-testimonial--align-right .tenweb-testimonial__content:after{right:calc( 20px + (50px / 2) - 8px );left:auto;}body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above:not(.tenweb-testimonial--align-center):not(.tenweb-testimonial--align-right) .tenweb-testimonial__content:after,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above.tenweb-testimonial--align-left .tenweb-testimonial__content:after{left:calc( 20px + (50px / 2) - 8px );right:auto;}body.rtl .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above:not(.tenweb-testimonial--align-center):not(.tenweb-testimonial--align-left) .tenweb-testimonial__content:after,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above.tenweb-testimonial--align-right .tenweb-testimonial__content:after{right:calc( 20px + (50px / 2) - 8px );left:auto;}body.rtl .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline.tenweb-testimonial--align-left .tenweb-testimonial__image + cite, 
					 body.rtl .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above.tenweb-testimonial--align-left .tenweb-testimonial__image + cite,
					 body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline .tenweb-testimonial__image + cite, 
					 body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above .tenweb-testimonial__image + cite{margin-left:20px;margin-right:0;}body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline.tenweb-testimonial--align-right .tenweb-testimonial__image + cite, 
					 body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above.tenweb-testimonial--align-right .tenweb-testimonial__image + cite,
					 body.rtl .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_inline .tenweb-testimonial__image + cite,
					 body.rtl .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_above .tenweb-testimonial__image + cite{margin-right:20px;margin-left:0;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_stacked .tenweb-testimonial__image + cite, 
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_left .tenweb-testimonial__image + cite,
					 .elementor-52449 .elementor-element.elementor-element-q3svjbde.tenweb-testimonial--layout-image_right .tenweb-testimonial__image + cite{margin-top:20px;}.elementor-52449 .elementor-element.elementor-element-4s93ks3k{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--gap:60px 60px;--background-transition:0.3s;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-content-wrapper{min-height:100px;text-align:left;transition-duration:1000ms;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-title{font-family:var( --e-global-typography-secondary-font-family ), sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );text-transform:var( --e-global-typography-secondary-text-transform );font-style:var( --e-global-typography-secondary-font-style );text-decoration:var( --e-global-typography-secondary-text-decoration );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );color:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-description{font-family:var( --e-global-typography-text-font-family ), sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );text-transform:var( --e-global-typography-text-text-transform );font-style:var( --e-global-typography-text-font-style );text-decoration:var( --e-global-typography-text-text-decoration );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );color:var( --e-global-color-text );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:horizontal;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-button__two{font-family:var( --e-global-typography-accent-font-family ), sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );text-transform:var( --e-global-typography-accent-text-transform );font-style:var( --e-global-typography-accent-font-style );text-decoration:var( --e-global-typography-accent-text-decoration );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );border-width:Arraypx;margin:20px 0px 0px 0px;padding:12px 24px 12px 24px;color:var( --e-global-color-accent );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-twbb_transparent );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-button__two:hover{color:var( --e-global-color-twbb_button_inv );border-color:var( --e-global-color-accent );background-color:var( --e-global-color-accent );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-content-wrapper .twbb_cta-button-wrapper {transition-delay:calc( 1000ms / 3 );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-wrapper .twbb_cta-image-background-wrapper, .elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-wrapper .twbb_cta-image-background-overlay{transition-duration:1500ms;}.elementor-52449 .elementor-element.elementor-element-q916ux00{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title{border-width:1px;border-color:#000000;padding:14px 14px 14px 0px;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-content{border-width:1px;border-bottom-color:#000000;color:var( --e-global-color-text );font-family:var( --e-global-typography-twbb_p5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p5-font-size );font-weight:var( --e-global-typography-twbb_p5-font-weight );text-transform:var( --e-global-typography-twbb_p5-text-transform );font-style:var( --e-global-typography-twbb_p5-font-style );text-decoration:var( --e-global-typography-twbb_p5-text-decoration );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );padding:14px 14px 14px 0px;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-toggle-title, .elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-toggle-icon{color:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-toggle-icon svg{fill:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title.elementor-active a, .elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title.elementor-active .elementor-toggle-icon{color:var( --e-global-color-accent );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-toggle-title{font-family:var( --e-global-typography-twbb_h5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h5-font-size );font-weight:var( --e-global-typography-twbb_h5-font-weight );text-transform:var( --e-global-typography-twbb_h5-text-transform );font-style:var( --e-global-typography-twbb_h5-font-style );text-decoration:var( --e-global-typography-twbb_h5-text-decoration );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title .elementor-toggle-icon i:before{color:var( --e-global-color-secondary );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title .elementor-toggle-icon svg{fill:var( --e-global-color-secondary );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title.elementor-active .elementor-toggle-icon i:before{color:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title.elementor-active .elementor-toggle-icon svg{fill:var( --e-global-color-primary );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp > .elementor-widget-container{border-style:solid;border-width:1px 0px 0px 0px;border-color:#000000;}.elementor-52449 .elementor-element.elementor-element-w54inksl{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--background-transition:0.3s;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-w54inksl:not(.elementor-motion-effects-element-type-background), .elementor-52449 .elementor-element.elementor-element-w54inksl > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-twbb_bg_inv );}.elementor-52449 .elementor-element.elementor-element-w54inksl, .elementor-52449 .elementor-element.elementor-element-w54inksl::before{--border-transition:0.3s;}.elementor-52449 .elementor-element.elementor-element-w54inksl > .elementor-shape-top svg, .elementor-52449 .elementor-element.elementor-element-w54inksl > .e-con-inner > .elementor-shape-top svg{height:60px;}.elementor-52449 .elementor-element.elementor-element-rm3qifzp{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--justify-content:space-between;--align-items:flex-end;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-a0dtmo42{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--gap:20px 20px;--background-transition:0.3s;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-mr6i3ka6{text-align:left;width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-mr6i3ka6 .elementor-heading-title{color:var( --e-global-color-twbb_primary_inv );font-family:var( --e-global-typography-secondary-font-family ), sans-serif;font-size:var( --e-global-typography-secondary-font-size );font-weight:var( --e-global-typography-secondary-font-weight );text-transform:var( --e-global-typography-secondary-text-transform );font-style:var( --e-global-typography-secondary-font-style );text-decoration:var( --e-global-typography-secondary-text-decoration );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-wfmqgobj{text-align:left;color:var( --e-global-color-twbb_text_inv );font-family:var( --e-global-typography-text-font-family ), sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );text-transform:var( --e-global-typography-text-text-transform );font-style:var( --e-global-typography-text-font-style );text-decoration:var( --e-global-typography-text-text-decoration );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga .elementor-button{font-family:var( --e-global-typography-accent-font-family ), sans-serif;font-size:var( --e-global-typography-accent-font-size );font-weight:var( --e-global-typography-accent-font-weight );text-transform:var( --e-global-typography-accent-text-transform );font-style:var( --e-global-typography-accent-font-style );text-decoration:var( --e-global-typography-accent-text-decoration );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );fill:var( --e-global-color-twbb_button_inv );color:var( --e-global-color-twbb_button_inv );background-color:var( --e-global-color-twbb_transparent );border-style:solid;border-width:1px 1px 1px 1px;border-color:var( --e-global-color-twbb_button_inv );padding:12px 24px 12px 24px;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga .elementor-button:hover, .elementor-52449 .elementor-element.elementor-element-zmyq0zga .elementor-button:focus{color:var( --e-global-color-twbb_button );background-color:var( --e-global-color-twbb_button_inv );border-color:var( --e-global-color-twbb_button_inv );}.elementor-52449 .elementor-element.elementor-element-zmyq0zga .elementor-button:hover svg, .elementor-52449 .elementor-element.elementor-element-zmyq0zga .elementor-button:focus svg{fill:var( --e-global-color-twbb_button );}.elementor-52449 .elementor-element.elementor-element-zmyq0zga > .elementor-widget-container{margin:0px 0px 0px 10px;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .twbb-image-container{width:50%;align-items:flex-start;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c{--grid-column-gap:30px;--grid-row-gap:35px;width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post{border-style:solid;border-width:1px 1px 1px 1px;border-radius:4px;background-color:var( --e-global-color-twbb_light_card );border-color:#000000;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__text{padding:26px 26px 26px 26px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c.elementor-posts--thumbnail-left .twbb-image-container{margin-right:20px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c.elementor-posts--thumbnail-right .twbb-image-container{margin-left:20px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c.elementor-posts--thumbnail-top .elementor-post__thumbnail__link{margin-bottom:20px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title, .elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title a{color:var( --e-global-color-twbb_primary_inv );font-family:var( --e-global-typography-twbb_h5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_h5-font-size );font-weight:var( --e-global-typography-twbb_h5-font-weight );text-transform:var( --e-global-typography-twbb_h5-text-transform );font-style:var( --e-global-typography-twbb_h5-font-style );text-decoration:var( --e-global-typography-twbb_h5-text-decoration );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title{margin-bottom:8px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__excerpt p{color:var( --e-global-color-twbb_text_inv );font-family:var( --e-global-typography-twbb_p5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p5-font-size );font-weight:var( --e-global-typography-twbb_p5-font-weight );text-transform:var( --e-global-typography-twbb_p5-text-transform );font-style:var( --e-global-typography-twbb_p5-font-style );text-decoration:var( --e-global-typography-twbb_p5-text-decoration );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__excerpt{margin-bottom:26px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__read-more{color:var( --e-global-color-twbb_text_inv );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c a.elementor-post__read-more{font-family:var( --e-global-typography-twbb_p5-font-family ), sans-serif;font-size:var( --e-global-typography-twbb_p5-font-size );font-weight:var( --e-global-typography-twbb_p5-font-weight );text-transform:var( --e-global-typography-twbb_p5-text-transform );font-style:var( --e-global-typography-twbb_p5-font-style );text-decoration:var( --e-global-typography-twbb_p5-text-decoration );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__read-more-container{margin-bottom:25px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__badge{left:0;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-posts--skin-classic .elementor-post__badge{background-color:var( --e-global-color-twbb_transparent );color:var( --e-global-color-twbb_text_inv );padding:0px;font-family:var( --e-global-typography-twbb_p5-font-family ), sans-serif;font-weight:var( --e-global-typography-twbb_p5-font-weight );text-transform:var( --e-global-typography-twbb_p5-text-transform );font-style:var( --e-global-typography-twbb_p5-font-style );text-decoration:var( --e-global-typography-twbb_p5-text-decoration );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c > .elementor-widget-container{margin:40px 0px 0px 0px;}@media(max-width:1024px){.elementor-52449 .elementor-element.elementor-element-0q0pux2b{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:80px;--padding-bottom:80px;--padding-left:15px;--padding-right:50px;}.elementor-52449 .elementor-element.elementor-element-38uobb3u .twbb-headline{font-size:var( --e-global-typography-primary-font-size );line-height:var( --e-global-typography-primary-line-height );letter-spacing:var( --e-global-typography-primary-letter-spacing );word-spacing:var( --e-global-typography-primary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-38uobb3u .twbb-headline-dynamic-text{line-height:var( --e-global-typography-primary-line-height );letter-spacing:var( --e-global-typography-primary-letter-spacing );word-spacing:var( --e-global-typography-primary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-38uobb3u{width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-oaqnrgzt{font-size:var( --e-global-typography-twbb_p1-font-size );line-height:var( --e-global-typography-twbb_p1-line-height );letter-spacing:var( --e-global-typography-twbb_p1-letter-spacing );word-spacing:var( --e-global-typography-twbb_p1-word-spacing );width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-6jhn6cng{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-3l5b0wnw .elementor-button{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-zuzztlkn .elementor-button{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-0ypi7fg2{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-xc0cm9nx{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:80px;--padding-bottom:80px;--padding-left:15px;--padding-right:50px;}.elementor-52449 .elementor-element.elementor-element-uxlu2ui8{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;}.elementor-52449 .elementor-element.elementor-element-8vp7yyte .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-8vp7yyte{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-knhvso2n{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-mfww5a7o{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-image-html-tag{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-content-wrapper{text-align:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-description{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-image-html-tag{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-content-wrapper{text-align:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-description{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-image-html-tag{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-content-wrapper{text-align:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-description{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-29gz74l3{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-zeek56b9{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--padding-top:80px;--padding-bottom:80px;--padding-left:15px;--padding-right:50px;}.elementor-52449 .elementor-element.elementor-element-pezy3pcs > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-pezy3pcs{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-mrzywe53{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-1quh9m7p .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-1quh9m7p > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-1quh9m7p{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-nuivd8nk{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-nuivd8nk > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-f5rk95on{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-x2judz5o{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-vig04zfm .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-vig04zfm{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-yia8dtsq{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-5ewjhczp{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-22tiy43j .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-22tiy43j{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-ctkero0x{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-54jzrfub{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-xwwq1taq{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-ko71hn5s .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-ko71hn5s{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-u1n0wijg{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-ol97gw88{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-30kbsu43 .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-30kbsu43{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-4u54e9nq{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-psya57ik{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--padding-top:80px;--padding-bottom:80px;--padding-left:15px;--padding-right:50px;}.elementor-52449 .elementor-element.elementor-element-p11ydc14{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-y1tamfth .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-y1tamfth{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-qbl8mc3j{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-qbl8mc3j > .elementor-widget-container{padding:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-item > .elementor-icon-list-text, .elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );}.elementor-52449 .elementor-element.elementor-element-6yi0blg0{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-cmo3zw4i > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-cmo3zw4i{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-rbzn8uez{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:80px;--padding-bottom:80px;--padding-left:15px;--padding-right:50px;}.elementor-52449 .elementor-element.elementor-element-a456pvw0 .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-a456pvw0{width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-7sooo9i0{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 58% );max-width:58%;--container-widget-width:58%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-7sooo9i0 > .elementor-widget-container{padding:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-masonry {grid-template-columns:repeat(2, 1fr);}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-masonry{grid-gap:10px !important;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__text{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__name{font-size:var( --e-global-typography-twbb_bold-font-size );line-height:var( --e-global-typography-twbb_bold-line-height );letter-spacing:var( --e-global-typography-twbb_bold-letter-spacing );word-spacing:var( --e-global-typography-twbb_bold-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__title{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-4s93ks3k{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--padding-top:80px;--padding-bottom:80px;--padding-left:15px;--padding-right:50px;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-content-wrapper{text-align:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-description{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:left;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q916ux00{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-toggle-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-content{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-w54inksl{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:80px;--padding-bottom:80px;--padding-left:15px;--padding-right:50px;}.elementor-52449 .elementor-element.elementor-element-rm3qifzp{--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-a0dtmo42{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-mr6i3ka6 .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-mr6i3ka6{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-wfmqgobj{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga .elementor-button{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-zmyq0zga > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga{width:var( --container-widget-width, 33% );max-width:33%;--container-widget-width:33%;--container-widget-flex-grow:0;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__text{padding:26px 26px 26px 26px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title, .elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title a{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__excerpt p{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c a.elementor-post__read-more{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-posts--skin-classic .elementor-post__badge{line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c > .elementor-widget-container{margin:40px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c{width:var( --container-widget-width, 100% );max-width:100%;--container-widget-width:100%;--container-widget-flex-grow:0;}}@media(max-width:767px){.elementor-52449 .elementor-element.elementor-element-0q0pux2b{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:50px;--padding-bottom:50px;--padding-left:15px;--padding-right:15px;}.elementor-52449 .elementor-element.elementor-element-0q0pux2b.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-38uobb3u .twbb-headline{text-align:center;font-size:var( --e-global-typography-primary-font-size );line-height:var( --e-global-typography-primary-line-height );letter-spacing:var( --e-global-typography-primary-letter-spacing );word-spacing:var( --e-global-typography-primary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-38uobb3u .twbb-headline-dynamic-text{line-height:var( --e-global-typography-primary-line-height );letter-spacing:var( --e-global-typography-primary-letter-spacing );word-spacing:var( --e-global-typography-primary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-38uobb3u{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-38uobb3u.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-oaqnrgzt{text-align:center;font-size:var( --e-global-typography-twbb_p1-font-size );line-height:var( --e-global-typography-twbb_p1-line-height );letter-spacing:var( --e-global-typography-twbb_p1-letter-spacing );word-spacing:var( --e-global-typography-twbb_p1-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-oaqnrgzt.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-6jhn6cng{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-6jhn6cng.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-3l5b0wnw .elementor-button{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3l5b0wnw.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-zuzztlkn .elementor-button{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-zuzztlkn.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-0ypi7fg2{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-0ypi7fg2.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-xc0cm9nx{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:50px;--padding-bottom:50px;--padding-left:15px;--padding-right:15px;}.elementor-52449 .elementor-element.elementor-element-xc0cm9nx.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-uxlu2ui8{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;}.elementor-52449 .elementor-element.elementor-element-uxlu2ui8.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-8vp7yyte{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-8vp7yyte .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-8vp7yyte.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-knhvso2n{text-align:center;font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-knhvso2n.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-mfww5a7o{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;}.elementor-52449 .elementor-element.elementor-element-mfww5a7o.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-image-html-tag{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-content-wrapper{padding:16px 0px 0px 0px;text-align:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-description{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:column;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );margin:20px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-eqn2wb6n.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-image-html-tag{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-content-wrapper{padding:16px 0px 0px 0px;text-align:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-description{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:column;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0 .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );margin:20px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-t9f5fep0.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-image-html-tag{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-content-wrapper{padding:16px 0px 0px 0px;text-align:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-description{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:column;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-29gz74l3 .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );margin:20px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-29gz74l3{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-29gz74l3.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-zeek56b9{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:50px;--padding-bottom:50px;--padding-left:15px;--padding-right:15px;}.elementor-52449 .elementor-element.elementor-element-zeek56b9.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-pezy3pcs{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-pezy3pcs > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-pezy3pcs.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-mrzywe53{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-mrzywe53.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-1quh9m7p{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-1quh9m7p .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-1quh9m7p > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-1quh9m7p.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-nuivd8nk{text-align:center;font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-nuivd8nk > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-nuivd8nk.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-f5rk95on{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-f5rk95on.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-x2judz5o{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-x2judz5o.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-vig04zfm .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-vig04zfm{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-vig04zfm.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-yia8dtsq{text-align:center;font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-yia8dtsq.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-5ewjhczp{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-5ewjhczp.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-22tiy43j .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-22tiy43j{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-22tiy43j.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-ctkero0x{text-align:center;font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-ctkero0x.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-54jzrfub{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-54jzrfub.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-xwwq1taq{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-xwwq1taq.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-ko71hn5s .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-ko71hn5s{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-ko71hn5s.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-u1n0wijg{text-align:center;font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-u1n0wijg.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-ol97gw88{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-ol97gw88.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-30kbsu43 .elementor-counter-number-wrapper{font-size:var( --e-global-typography-twbb_h4-font-size );line-height:var( --e-global-typography-twbb_h4-line-height );letter-spacing:var( --e-global-typography-twbb_h4-letter-spacing );word-spacing:var( --e-global-typography-twbb_h4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-30kbsu43{width:auto;max-width:auto;}.elementor-52449 .elementor-element.elementor-element-30kbsu43.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-4u54e9nq{text-align:center;font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-4u54e9nq.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-psya57ik{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:50px;--padding-bottom:50px;--padding-left:15px;--padding-right:15px;}.elementor-52449 .elementor-element.elementor-element-psya57ik.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-p11ydc14{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-p11ydc14.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-y1tamfth{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-y1tamfth .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-y1tamfth.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-qbl8mc3j{text-align:center;font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-qbl8mc3j > .elementor-widget-container{padding:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-qbl8mc3j.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(6px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(6px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(6px/2);margin-left:calc(6px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-6px/2);margin-left:calc(-6px/2);}body.rtl .elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-6px/2);}body:not(.rtl) .elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-6px/2);}.elementor-52449 .elementor-element.elementor-element-6yi0blg0{--e-icon-list-icon-size:14px;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-item > .elementor-icon-list-text, .elementor-52449 .elementor-element.elementor-element-6yi0blg0 .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );}.elementor-52449 .elementor-element.elementor-element-6yi0blg0.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-cmo3zw4i{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-cmo3zw4i > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-cmo3zw4i.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-rbzn8uez{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:50px;--padding-bottom:50px;--padding-left:15px;--padding-right:15px;}.elementor-52449 .elementor-element.elementor-element-rbzn8uez.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-a456pvw0{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-a456pvw0 .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-a456pvw0.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-7sooo9i0{text-align:center;font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-7sooo9i0 > .elementor-widget-container{padding:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-7sooo9i0.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-masonry {grid-template-columns:repeat(1, 1fr);}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-masonry{grid-gap:10px !important;}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__text{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__name{font-size:var( --e-global-typography-twbb_bold-font-size );line-height:var( --e-global-typography-twbb_bold-line-height );letter-spacing:var( --e-global-typography-twbb_bold-letter-spacing );word-spacing:var( --e-global-typography-twbb_bold-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde .tenweb-testimonial__title{font-size:var( --e-global-typography-twbb_p4-font-size );line-height:var( --e-global-typography-twbb_p4-line-height );letter-spacing:var( --e-global-typography-twbb_p4-letter-spacing );word-spacing:var( --e-global-typography-twbb_p4-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q3svjbde{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-q3svjbde.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-4s93ks3k{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:50px;--padding-bottom:50px;--padding-left:15px;--padding-right:15px;}.elementor-52449 .elementor-element.elementor-element-4s93ks3k.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-content-wrapper{text-align:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-title:not(:last-child){margin-bottom:16px;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-description{font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-button-wrapper .twbb_cta-buttons{flex-direction:column;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-tablet-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-tablet-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-mobile-vertical .twbb_cta-button-wrapper{align-items:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00.twbb_cta-position-button-mobile-horizontal .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00:not(.twbb_cta-position-button-horizontal):not(.twbb_cta-position-button-vertical) .twbb_cta-button-wrapper{justify-content:center;}.elementor-52449 .elementor-element.elementor-element-q916ux00 .twbb_cta-button__two{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );margin:20px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-q916ux00{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-q916ux00.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-toggle-title{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-title{padding:14px 14px 14px 0px;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp .elementor-tab-content{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );padding:14px 14px 14px 0px;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-dhalpfsp.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-w54inksl{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:50px;--padding-bottom:50px;--padding-left:15px;--padding-right:15px;}.elementor-52449 .elementor-element.elementor-element-w54inksl.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-rm3qifzp{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-rm3qifzp.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-a0dtmo42{--width:100%;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--justify-content:center;--align-items:flex-start;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-52449 .elementor-element.elementor-element-a0dtmo42.e-con{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-mr6i3ka6{text-align:center;width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-mr6i3ka6 .elementor-heading-title{font-size:var( --e-global-typography-secondary-font-size );line-height:var( --e-global-typography-secondary-line-height );letter-spacing:var( --e-global-typography-secondary-letter-spacing );word-spacing:var( --e-global-typography-secondary-word-spacing );}.elementor-52449 .elementor-element.elementor-element-mr6i3ka6.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-wfmqgobj{text-align:center;font-size:var( --e-global-typography-text-font-size );line-height:var( --e-global-typography-text-line-height );letter-spacing:var( --e-global-typography-text-letter-spacing );word-spacing:var( --e-global-typography-text-word-spacing );width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-wfmqgobj.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga .elementor-button{font-size:var( --e-global-typography-accent-font-size );line-height:var( --e-global-typography-accent-line-height );letter-spacing:var( --e-global-typography-accent-letter-spacing );word-spacing:var( --e-global-typography-accent-word-spacing );}.elementor-52449 .elementor-element.elementor-element-zmyq0zga > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-zmyq0zga.elementor-element{--align-self:center;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .twbb-image-container{width:100%;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__text{padding:13px 26px 26px 26px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c.elementor-posts--thumbnail-left .twbb-image-container{margin-right:12px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c.elementor-posts--thumbnail-right .twbb-image-container{margin-left:12px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c.elementor-posts--thumbnail-top .elementor-post__thumbnail__link{margin-bottom:12px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title, .elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title a{font-size:var( --e-global-typography-twbb_h5-font-size );line-height:var( --e-global-typography-twbb_h5-line-height );letter-spacing:var( --e-global-typography-twbb_h5-letter-spacing );word-spacing:var( --e-global-typography-twbb_h5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__title{margin-bottom:8px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-post__excerpt p{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c a.elementor-post__read-more{font-size:var( --e-global-typography-twbb_p5-font-size );line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c .elementor-posts--skin-classic .elementor-post__badge{line-height:var( --e-global-typography-twbb_p5-line-height );letter-spacing:var( --e-global-typography-twbb_p5-letter-spacing );word-spacing:var( --e-global-typography-twbb_p5-word-spacing );}.elementor-52449 .elementor-element.elementor-element-3okl4d3c > .elementor-widget-container{margin:40px 0px 0px 0px;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c{width:100%;max-width:100%;}.elementor-52449 .elementor-element.elementor-element-3okl4d3c.elementor-element{--align-self:center;}}@media(min-width:768px){.elementor-52449 .elementor-element.elementor-element-0q0pux2b{--content-width:1280px;}.elementor-52449 .elementor-element.elementor-element-6jhn6cng{--width:58%;}.elementor-52449 .elementor-element.elementor-element-xc0cm9nx{--content-width:1280px;}.elementor-52449 .elementor-element.elementor-element-uxlu2ui8{--width:100%;}.elementor-52449 .elementor-element.elementor-element-mfww5a7o{--width:100%;}.elementor-52449 .elementor-element.elementor-element-zeek56b9{--content-width:1280px;}.elementor-52449 .elementor-element.elementor-element-mrzywe53{--width:50%;}.elementor-52449 .elementor-element.elementor-element-f5rk95on{--width:100%;}.elementor-52449 .elementor-element.elementor-element-x2judz5o{--width:50%;}.elementor-52449 .elementor-element.elementor-element-5ewjhczp{--width:50%;}.elementor-52449 .elementor-element.elementor-element-54jzrfub{--width:100%;}.elementor-52449 .elementor-element.elementor-element-xwwq1taq{--width:50%;}.elementor-52449 .elementor-element.elementor-element-ol97gw88{--width:50%;}.elementor-52449 .elementor-element.elementor-element-psya57ik{--content-width:1280px;}.elementor-52449 .elementor-element.elementor-element-p11ydc14{--width:50%;}.elementor-52449 .elementor-element.elementor-element-rbzn8uez{--content-width:1280px;}.elementor-52449 .elementor-element.elementor-element-4s93ks3k{--content-width:1280px;}.elementor-52449 .elementor-element.elementor-element-w54inksl{--content-width:1280px;}.elementor-52449 .elementor-element.elementor-element-rm3qifzp{--width:100%;}.elementor-52449 .elementor-element.elementor-element-a0dtmo42{--width:66%;}}@media(max-width:1024px) and (min-width:768px){.elementor-52449 .elementor-element.elementor-element-6jhn6cng{--width:58%;}.elementor-52449 .elementor-element.elementor-element-uxlu2ui8{--width:100%;}.elementor-52449 .elementor-element.elementor-element-mfww5a7o{--width:100%;}.elementor-52449 .elementor-element.elementor-element-mrzywe53{--width:50%;}.elementor-52449 .elementor-element.elementor-element-f5rk95on{--width:100%;}.elementor-52449 .elementor-element.elementor-element-x2judz5o{--width:50%;}.elementor-52449 .elementor-element.elementor-element-5ewjhczp{--width:50%;}.elementor-52449 .elementor-element.elementor-element-54jzrfub{--width:100%;}.elementor-52449 .elementor-element.elementor-element-xwwq1taq{--width:50%;}.elementor-52449 .elementor-element.elementor-element-ol97gw88{--width:50%;}.elementor-52449 .elementor-element.elementor-element-p11ydc14{--width:50%;}.elementor-52449 .elementor-element.elementor-element-rm3qifzp{--width:100%;}.elementor-52449 .elementor-element.elementor-element-a0dtmo42{--width:66%;}}</style>		<div data-elementor-type="wp-page" data-elementor-id="52449" class="elementor elementor-52449">
				
				<!-- <div class="elementor-element elementor-element-oaqnrgzt elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="oaqnrgzt" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container" > 	
					Welcome to credita finance, where aspirations meet solutions. Join 50,000+ satisfied customers who've turned dreams into reality since 2019.
					Navigate the world of Home, Personal, and Business Loan effortlessly with our user-friendly comparison platform.					</div>
				</div> -->
		<!-- <div class="elementor-element elementor-element-6jhn6cng e-con-full e-flex e-con e-parent" data-id="6jhn6cng" data-element_type="container">
				<div class="elementor-element elementor-element-3l5b0wnw elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="3l5b0wnw" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="/html/services.html">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Learn More</span>
					</span>
					</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-zuzztlkn elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="zuzztlkn" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="/html/contact us.html">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Contact Us</span>
					</span>
					</a>
		</div>
				</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-0ypi7fg2 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image" data-id="0ypi7fg2" data-element_type="widget" data-widget_type="image.default">
					<div class="elementor-element elementor-element-0ypi7fg2 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image" data-id="0ypi7fg2" data-element_type="widget" data-widget_type="image.default">
						<div class="elementor-widget-container">
															<img fetchpriority="high" width="1216" height="832" src="/main.jpg" class="attachment-full size-full wp-image-52444" alt="" />													</div> -->
						

  <style>
    /* Main styling for overlay content */
    .overlay-content {
      position: absolute;
      top: -10px; /* Adjust to move content below the navbar */
      left: 50%;
      transform: translateX(-50%);
      z-index: 2; /* Ensure this content is on top of the slider */
      text-align: center;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
    }







    /* Slider Container */
    .slider-container {
      position: relative;
      width: 100%;
      background-size:cover;
      height: auto;
      max-height:700px;
      overflow: hidden;
      z-index: 1; /* Ensure slider is behind the overlay content */
    }

    .slider {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .slide {
      min-width: 100%;
      box-sizing: border-box;
    }

    .slide img {
      width: 100%;
      height: auto;
      max-height:700px;/* Match the height of the slider container */
      
	}
  </style>
</head>
<body>

  <!-- Overlay content: Search bar and buttons -->
  <div class="overlay-content">
	<div class="elementor-element elementor-element-0q0pux2b e-con-boxed twbb_section e-flex e-con e-parent" data-id="0q0pux2b" data-element_type="container">
		<div class="e-con-inner" id="trial" style="position: relative;
        z-index:2200">
	<div class="elementor-element elementor-element-38uobb3u elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb-headline--style-rotate elementor-widget elementor-widget-twbbanimated-headline" data-id="38uobb3u" data-element_type="widget" data-settings="{&quot;headline_style&quot;:&quot;rotate&quot;,&quot;rotating_text&quot;:&quot;Credita Finance&quot;,&quot;animation_type&quot;:&quot;blinds&quot;}" data-widget_type="twbbanimated-headline.default" style="margin-bottom: -70px;
    z-index: 2200; position: relative;">
	<div class="elementor-widget-container" >
	<h1 class="twbb-headline twbb-headline-animation-type-blinds twbb-headline-letters"> 
<span class="twbb-headline-plain-text twbb-headline-text-wrapper" ><h1 style="font-family: 'Cabinet Grotesk', sans-serif;
font-weight: 300;"></span>
<span class="twbb-headline-dynamic-wrapper twbb-headline-text-wrapper"></span>
</h1>
</div>
	</div></div></div>
    <!-- <br>

    <button class="get-started-btn" style="width: 30%;"><a href="/apply form"><p style="color:white;"> Get Started</p></a></button>
    <button class="contact-us-btn"><a href="/apply form"><p style="color:white;">Contact Us</p></a></button> -->
  </div>

  <!-- Photo slider (background images) -->
  <div class="slider-container">
    <div class="slider">
      <div class="slide">
        <img src="/photos/final first page.webp" width="1920" height="1277" alt="Team at Credita Finance providing seamless services to customers. The company is currently hiring, presenting a great opportunity to start your career." style="max-width: 100%; height:auto;" loading="eager" fetchpriority="high">
      </div>
      <div class="slide">
		<a href="/about us.html">
        <img src="/photos/second final.webp" width="8000" height="4834" alt="Happy Credita Finance customers receiving guidance on personal loans, business loans, and home loans." style="max-width: 100%; height: auto;" loading="eager" fetchpriority="high">
	</a>	
      </div>
      <div class="slide">
		<a href="/sign in.html">
        <img src="/photos/third final.webp" width="3000" height="2000" alt="Testimonial from satisfied Credita finance customers highlighting excellent service and teamwork." style="max-width: 100%; height: auto;" loading="eager" fetchpriority="high">
	</a>
      </div>
	  
      <!-- Add more slides as needed -->
    </div>
  </div>

  <script>
   const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;
let intervalTime = 5000; // 5 seconds interval for autoplay
let slideInterval;

// Duplicate first and last slides for seamless looping
const firstSlideClone = slides[0].cloneNode(true);
const lastSlideClone = slides[slides.length - 1].cloneNode(true);
slider.insertBefore(lastSlideClone, slides[0]); // Add the last slide clone to the beginning
slider.appendChild(firstSlideClone); // Add the first slide clone to the end

// Update slides array to include clones
const updatedSlides = Array.from(document.querySelectorAll('.slide'));

// Set initial transform to show the first actual slide
slider.style.transform = `translateX(-100%)`;

// Function to move slides
function goToSlide(index) {
  slider.style.transition = 'transform 0.5s ease'; // Enable smooth transition
  slider.style.transform = `translateX(-${(index + 1) * 100}%)`; // Offset by 1 for clones

  currentIndex = index;

  // Handle seamless looping on transition end
  slider.addEventListener('transitionend', () => {
    if (currentIndex === -1) {
      slider.style.transition = 'none'; // Disable transition
      slider.style.transform = `translateX(-${(updatedSlides.length - 2) * 100}%)`; // Snap to last actual slide
      currentIndex = updatedSlides.length - 3;
    } else if (currentIndex === updatedSlides.length - 2) {
      slider.style.transition = 'none'; // Disable transition
      slider.style.transform = `translateX(-100%)`; // Snap to first actual slide
      currentIndex = 0;
    }
  }, { once: true }); // Ensure listener is removed after one execution
}

// Autoplay the slides
function autoSlide() {
  slideInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, intervalTime);
}

// Start autoplay
autoSlide();

  </script>
  

   

<!-- 
                <section class="banks-affiliated">
                    <div class="bank-wrapper">
                    <div class="banks-strip">
                        <div class="bank">
                            <img src="/banks/aditya birla.webp" alt="Aditya Birla Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/axis bank.webp" alt="Axis Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/bajaj finserv.webp"  alt="BajajFinserv Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/citi bank.webp"  alt="Citi Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/fullerton india.webp" alt="Fullerton Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/hdfc.png" alt="HDFC Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/images.webp"  alt="ICICI Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/idfc.webp" alt="IDFC Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/Kotak-Mahindra-Bank-Logo-PNG-White-New@.webp"  alt="Kotak Mahindra Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/standard chartered.webp"  alt="Standard Chartered Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/tata capital.webp"  alt="Tata Capital Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                        <div class="bank">
                            <img src="/banks/yes bank.webp"  alt="Yes Bank logo, partnered with credita finance to provide quality financial services." class="bank-image">
                        </div>
                      
                    </div>
                </div>
                </section> -->



         
		<div class="elementor-element elementor-element-xc0cm9nx e-con-boxed twbb_section e-flex e-con e-parent" data-id="xc0cm9nx" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="e-con-inner" style="margin-top: -100px;">
		<div class="elementor-element elementor-element-uxlu2ui8 e-con-full e-flex e-con e-parent" data-id="uxlu2ui8" data-element_type="container">
				
				<div class="intro-container">
                    <div class="introduction">
                        <div class="intro-image">
                            <img src="/photos/credita intro 2.webp" alt="Intro Image 1" class="image">
                        </div>
                
                        <div class="intro-text">
                            <h4 class="text">
                                Who are we?
                            </h4>
                            <p>
                                Welcome to Credita Finance, your trusted partner  in financial advisory and loan solutions. 
                                We offer expert guidance tailored to  your needs, whether it's investment advice, 
                                retirement planning, or loan options. <br><br> Our personalized solutions help you make 
                                informed decisions and achieve financial stability.  We're here to support you in securing 
                                a successful and prosperous future.
                            </p>
                        </div>
                
                        <div class="intro-image">
                            <img src="/photos/credita intro.webp" alt="Intro Image 2" class="image">
                        </div>
                    </div>
                </div>
                
                <style>
                    * {
                        font-family: 'Cabinet Grotesk', sans-serif;
                        box-sizing: border-box;
                    }
                
                    .introduction {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 30px;
                        gap: 20px;
                    }
                
                    .intro-text {
                        flex: 1;
                        text-align: left;
                    }
                
                    .introduction .text {
                        font-size: 50px;
                        font-weight: 300;
                    }
                
                    .introduction p {
                        font-size: 15px;
                        font-weight: 300;
                        line-height: 1.5;
                    }
                
                    .intro-image .image {
                        height: 400px;
                        width: 400px;
                        transition: 0.2s ease-in-out;
                    }
                
                    .intro-image .image:hover {
                        box-shadow: 0 5px 5px rgb(134, 134, 134);
                        transform: rotate(1deg);
                        border-radius: 20px;
                    }
                
                    /* Responsive styles for tablets */
                    @media screen and (max-width: 768px) {
                        .introduction {
                            flex-direction: column; /* Stack images and text vertically */
                            text-align: center;
                        }
                
                        .intro-image .image {
                            height: 300px;
                            width: 300px; /* Resize images for tablets */
                        }
                
                        .introduction .text {
                            font-size: 40px; /* Adjust heading size */
                        }
                
                        .introduction p {
                            font-size: 14px; /* Adjust paragraph font size */
                        }
                    }
                
                    /* Responsive styles for mobile phones */
                    @media screen and (max-width: 480px) {
                        .introduction {
                            flex-direction: column;
                            align-items: center;
                            text-align: center;
                        }
                
                        .intro-text {
                            padding: 0 10px; /* Add padding for smaller screens */
                        }
                
                        .intro-image .image {
                            height: 200px;
                            width: 200px; /* Further resize images for smaller screens */
                        }
                
                        .introduction .text {
                            font-size: 30px; /* Smaller heading size */
                        }
                
                        .introduction p {
                            font-size: 12px; /* Reduce paragraph font size */
                            line-height: 1.4;
                        }
                    }
                </style>
                
				</div>
				</div>
                <div class="god"> 
                    <div class="container swiper">
                        <div class="our-partners">
                            <div class="partner-heading">
                            <h5 class="partners">Our Partners</h5>
                        </div>
                        <div class="card-wrapper">
                            <ul class="card-list swiper-wrapper">
                              
                                <li class="card-item swiper-slide">
                                    <a href="/about us.html" class="card-link">
                                       <img src="/banks/aditya birla.webp" alt="card image" class="card-image">
                                    
                
                                   </a>
                               </li>
                               <li class="card-item swiper-slide">
                                <a href="/about us.html" class="card-link">
                                   <img src="/banks/axis bank.webp" alt="card image" class="card-image">
                
                               </a>
                           </li>
                           <li class="card-item swiper-slide">
                            <a href="/about us.html" class="card-link">
                               <img src="/banks/bajaj finserv.webp" alt="card image" class="card-image">
                            
                            
                           </a>
                       </li>
                       <li class="card-item swiper-slide">
                        <a href="/about us.html" class="card-link">
                           <img src="/banks/citi bank.webp" alt="card image" class="card-image">
                        
                       </a>
                   </li>
                   <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/fullerton india.webp" alt="card image" class="card-image">
                    
                   </a>
                </li>
                <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/hdfc.png" alt="card image" class="card-image">
                    
                   </a>
                </li>
                <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/idfc.webp" alt="card image" class="card-image">
                    
                   </a>
                </li>
                <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/images.webp" alt="card image" class="card-image">
                    
                   </a>
                </li>
                <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/Kotak-Mahindra-Bank-Logo-PNG-White-New@.webp" alt="card image" class="card-image">
                    
                   </a>
                </li>
                <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/standard chartered.webp" alt="card image" class="card-image">
                    
                   </a>
                </li>
                <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/tata capital.webp" alt="card image" class="card-image">
                    
                   </a>
                </li>
                <li class="card-item swiper-slide">
                    <a href="/about us.html" class="card-link">
                       <img src="/banks/yes bank.webp" alt="card image" class="card-image">
                    
                   </a>
                </li>
                
                
                            </ul>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                </div>
                    <style>
                        .god{
                            background: transparent;
                        }
                        .container{
                            border-radius: 20px;
                            background: linear-gradient(to bottom, rgba(198, 222, 255, 0.459),#F3F4F6);
                            width: 90%;
                        }
                
                        .our-partners .partner-heading .partners{
                            text-align: center;
                            font-size: 50px;
                            font-family: 'Cabinet Grotesk', sans-serif;
                            font-weight: 300;
                        }
                
                        
                        .card-wrapper{
                            max-width: 100%;
                            margin: 0 60px 35px;
                            padding: 20px 10px;
                            overflow: hidden;
                        }
                        .card-list .card-item{
                            list-style: none;
                        }
                        .card-list .card-item .card-link{
                            user-select: none;
                            display: block;
                            background: #ffffff;
                            padding: 18px;
                            border-radius: 12px;
                            text-decoration: none;
                            border: 2px solid transparent;
                            box-shadow: 0 10px 10px rgba(119, 119, 119, 0.05);
                            transition: 0.2s ease;
                            width: 75%;
                        }
                        .card-list .card-item .card-link:active{
                            cursor: grabbing;
                            
                        }
                        .card-list .card-item .card-link:hover{
                            border-color: #5372f0;
                        }
                        .card-list .card-link .card-image{
                            width: 100%;
                            height: 100%;
                            
                            border-radius: 10px;
                            max-height: 80px;
                        }
                        .card-list .card-link .badge{
                            color: rgb(245, 245, 245);
                            margin: 10px 0 18px;
                            padding: 8px 16px;
                            font-size: 0.95rem;
                            font-weight: 500;
                            width: fit-content;
                            background: #dde4ff00;
                            border-radius: 50px;
                        }
                        .card-list .card-link .card-title{
                            font-size: 1.19rem;
                            color: #ffffff;
                            font-weight: 600;
                        }
                        .card-list .card-link .card-button{
                            height: 35px;
                            width: 35px;
                            color: #5372f0;
                            border-radius: 50%;
                            margin: 30px 0 5px;
                            background: none;
                            cursor: pointer;
                            border: 2px solid #5372f0;
                            transform: rotate(-45deg);
                            transition: 0.4s ease;
                
                        }
                        .card-list .card-link:hover .card-button{
                            color: #fff;
                            
                            opacity: 1;
                        }
                        .card-wrapper .swiper-slide-button{
                            color: #5372f0;
                            margin-top: -35px;
                        }
                        @media screen and (max-width: 768px) {
                            .card-wrapper{
                                margin: 0 10px 25px;
                            }
                            .card-wrapper .swiper-slide-button{
                                display: none;
                            }
                            
                        }
                    </style>
                    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
                    <script>
                        new Swiper('.card-wrapper', {
                  loop: true      ,
                  spaceBetween: 10,
                
                  // pagination bullets
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                  },
                
                  // Navigation arrows
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                
                  // Autoplay settings
                  autoplay: {
                    delay: 2000, // Delay in milliseconds between slides
                    disableOnInteraction: false, // Keeps autoplay running even after user interaction
                  },
                
                  //responsive breakpoints
                
                  breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 4
                    }
                    
                  }
                
                });
                    </script>
		<div class="elementor-element elementor-element-mfww5a7o e-con-full e-flex e-con e-parent" data-id="mfww5a7o" data-element_type="container">
				<div class="elementor-element elementor-element-eqn2wb6n elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb_cta-position-button-bottom twbb_cta-button-wrapper-left twbb_cta-button-wrapper-left twbb_cta-valign-align-space_between twbb_cta-position-image-top twbb_cta-tablet-position-image-top twbb_cta-mobile-position-image-top twbb_cta-button-wrapper-center twbb_cta-tablet-position-button-bottom twbb_cta-mobile-position-button-bottom elementor-invisible elementor-widget elementor-widget-twbb_call-to-action" data-id="eqn2wb6n" data-element_type="widget"  data-widget_type="twbb_call-to-action.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
			    <div  class="twbb_cta-wrapper ">
                  <div class="twbb_cta-image-background-wrapper">
          <span class="twbb_cta-image-background-overlay"></span>
                            <div class="twbb_cta-image-html-tag">
                                            <a href="/services.html"><img src="/photos/2883797.webp" width="2000" height="1848" alt="Home Loan services by Credita  Finance, offering guidance until loan approval in a comfortable environment." style="height: 400px;width: 400px;"></a>
                                    </div>
                    </div>
        <div class="twbb_cta-content-wrapper ">
    <div class="twbb_cta-content-inner">
                <h5 class="twbb_cta-title" style="font-family: 'Cabinet Grotesk', sans-serif;
                font-weight: 300; font-size:35px;">Home Loan</h5>
                    <div class="twbb_cta-description"><p style="font-family: 'cabinet Grotesk', sans-serif; font-weight: 600;"><em>Unlock the door to your dream home</em> with our hassle-free home loans. Enjoy <strong>low interest rates, flexible repayment terms, and fast approvals</strong> tailored for you!</p></div>
              </div>
    <div class="twbb_cta-button-wrapper">
        <div class="twbb_cta-buttons">
                    <div class="twbb_cta-button-item twbb_cta-button-item__two twbb_cta-button-enable-yes">
          <a href="/home loans.html" class="elementor-button twbb_cta-button elementor-size- twbb_cta-button__two"  style="font-family: 'Cabinet Grotesk', sans-serif;font-weight: 400;">Empower your financial goals </a>
        </div>
                  </div>
    </div>
  </div>
        </div>
		</div>
				</div>
				<div class="elementor-element elementor-element-t9f5fep0 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb_cta-position-button-bottom twbb_cta-button-wrapper-left twbb_cta-button-wrapper-left twbb_cta-valign-align-space_between twbb_cta-position-image-top twbb_cta-tablet-position-image-top twbb_cta-mobile-position-image-top twbb_cta-button-wrapper-center twbb_cta-tablet-position-button-bottom twbb_cta-mobile-position-button-bottom elementor-invisible elementor-widget elementor-widget-twbb_call-to-action" data-id="t9f5fep0" data-element_type="widget" data-widget_type="twbb_call-to-action.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
			    <div  class="twbb_cta-wrapper ">
                  <div class="twbb_cta-image-background-wrapper">
          <span class="twbb_cta-image-background-overlay"></span>
                            <div class="twbb_cta-image-html-tag">
                                            <img src="/photos/2306.i402.023.F.m004.c9.Credit score flat background.webp" width="5200" height="4800" alt="Personal Loan services by Credita finance,offering guidance until loan approval in a comfortable environment with perks and offers. " style="height: 400px;width: 400px;">
                                    </div>
                    </div>
        <div class="twbb_cta-content-wrapper ">
    <div class="twbb_cta-content-inner">
                <h5 class="twbb_cta-title" style="font-family: 'Cabinet Grotesk', sans-serif;
                font-weight: 300; font-size:35px;">Personal Loans</h5>
                    <div class="twbb_cta-description"><p style="font-family: 'cabinet Grotesk', sans-serif; font-weight: 600;">We offer a <strong>variety of personal loan options</strong> to <emp>help you achieve your financial goals.</emp> Our team will work with you to find the <strong>best loan</strong> for your situation.</p></div>
              </div>
    <div class="twbb_cta-button-wrapper">
        <div class="twbb_cta-buttons">
                    <div class="twbb_cta-button-item twbb_cta-button-item__two twbb_cta-button-enable-yes">
          <a href="/personal loan.html" class="elementor-button twbb_cta-button elementor-size- twbb_cta-button__two" style="font-family: 'Cabinet Grotesk', sans-serif;font-weight: 400;">Empower your financial goals </a>
        </div>
                  </div>
    </div>
  </div>
        </div>
		</div>
				</div>
				<div class="elementor-element elementor-element-29gz74l3 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb_cta-position-button-bottom twbb_cta-button-wrapper-left twbb_cta-button-wrapper-left twbb_cta-valign-align-space_between twbb_cta-position-image-top twbb_cta-tablet-position-image-top twbb_cta-mobile-position-image-top twbb_cta-button-wrapper-center twbb_cta-tablet-position-button-bottom twbb_cta-mobile-position-button-bottom elementor-invisible elementor-widget elementor-widget-twbb_call-to-action" data-id="29gz74l3" data-element_type="widget"  data-widget_type="twbb_call-to-action.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
			    <div  class="twbb_cta-wrapper ">
                  <div class="twbb_cta-image-background-wrapper">
          <span class="twbb_cta-image-background-overlay"></span>
                            <div class="twbb_cta-image-html-tag">
                                            <img src="/photos/Wavy_Bus-21_Single-10.webp" width="7730" height="7730" alt="Business Loan services by Credita finance, offering guidance until loan approval in a comfortable envirnment with perks and offers and opportunities to grow you business."style="height: 400px;width:400px;" >
                                    </div>
                    </div>
        <div class="twbb_cta-content-wrapper ">
    <div class="twbb_cta-content-inner">
                <h5 class="twbb_cta-title" style="font-family: 'Cabinet Grotesk', sans-serif;
                font-weight: 300; font-size:35px;">Business Loans</h5>
                    <div class="twbb_cta-description"><p style="font-family: 'cabinet Grotesk', sans-serif; font-weight: 600;">Our <strong>business loans</strong> are designed to <emp>support your company's growth and success.</emp> We offer <emp>flexible terms and competitive rates</emp> to meet your business needs.</p></div>
              </div>
    <div class="twbb_cta-button-wrapper">
        <div class="twbb_cta-buttons">
                    <div class="twbb_cta-button-item twbb_cta-button-item__two twbb_cta-button-enable-yes">
          <a href="/business loan.html" class="elementor-button twbb_cta-button elementor-size- twbb_cta-button__two" style="font-family: 'Cabinet Grotesk', sans-serif;font-weight: 400;">Empower your financial goals </a>
        </div>
                  </div>
    </div>
  </div>
        </div>
		</div>
				</div>
				</div>
					</div>
				</div>

















		<div class="elementor-element elementor-element-zeek56b9 e-con-boxed twbb_section e-flex e-con e-parent" data-id="zeek56b9" data-element_type="container" style=" opacity: 1 !important;
		visibility: visible !important;
		animation: none !important;">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-pezy3pcs elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image" data-id="pezy3pcs" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img  src="/photos/5259588.webp" width="3000" height="2000" class="attachment-full size-full wp-image-52435" alt="Credita Finance team offering seamless support and stress free loan processing through effective co-ordination and strategy." />													</div>
				</div>
		<div class="elementor-element elementor-element-mrzywe53 e-con-full e-flex e-con e-parent" data-id="mrzywe53" data-element_type="container">
				<div class="elementor-element elementor-element-1quh9m7p elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-heading" data-id="1quh9m7p" data-element_type="widget"  data-widget_type="heading.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default" style="font-family: 'Cabinet Grotesk', sans-serif;font-weight: 300;">Meet Our Team</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-nuivd8nk elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="nuivd8nk" data-element_type="widget"  data-widget_type="text-editor.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
							<p style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 500;">At <strong>Credita Finance</strong>,  we are committed to providing <strong>exceptional financial consultancy and loan services.</strong> Our dedicated team of experts works tirelessly to empower clients with tailored solutions that meet their unique needs.					</p>	</div>
				</div>
		<div class="elementor-element elementor-element-f5rk95on e-con-full e-flex e-con e-parent" data-id="f5rk95on" data-element_type="container">
		<div class="elementor-element elementor-element-x2judz5o e-con-full e-flex e-con e-parent" data-id="x2judz5o" data-element_type="container">
				<div class="elementor-element elementor-element-vig04zfm elementor-widget__width-auto elementor-widget-tablet__width-initial elementor-widget-mobile__width-auto elementor-widget elementor-widget-counter" data-id="vig04zfm" data-element_type="widget" data-widget_type="counter.default">
				<div class="elementor-widget-container">
					<div class="elementor-counter">
						<div class="elementor-counter-number-wrapper">
				<span class="elementor-counter-number-prefix"></span>
				<span class="elementor-counter-number-suffix" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;"></span>  
				<span class="elementor-counter-number" data-duration="2000" data-to-value="2019" data-from-value="1999" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;">Experienced</span>
				
			</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-yia8dtsq elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="yia8dtsq" data-element_type="widget"  data-widget_type="text-editor.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container" style="font-family: 'Cabinet Grotesk', sans-serif; font-weight: 600;">
                    With years of experience, our CreditAFinance team excels in delivering tailored financial solutions and guidance.				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-5ewjhczp e-con-full e-flex e-con e-parent" data-id="5ewjhczp" data-element_type="container">
				<div class="elementor-element elementor-element-22tiy43j elementor-widget__width-auto elementor-widget-tablet__width-initial elementor-widget-mobile__width-auto elementor-widget elementor-widget-counter" data-id="22tiy43j" data-element_type="widget" data-widget_type="counter.default">
				<div class="elementor-widget-container">
					<div class="elementor-counter">
						<div class="elementor-counter-number-wrapper">
				<span class="elementor-counter-number-prefix"></span>
				<span class="elementor-counter-number" data-duration="2000" data-to-value="50000" data-from-value="1000" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;"></span>
				<span class="elementor-counter-number-suffix" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;">Transparency</span>
			</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-ctkero0x elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="ctkero0x" data-element_type="widget"  data-widget_type="text-editor.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container" style="font-family: 'Cabinet Grotesk', sans-serif; font-weight: 500;">
                    At CreditAFinance, we prioritize transparency, offering clear, honest advice to ensure clients are fully informed.</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-54jzrfub e-con-full e-flex e-con e-parent" data-id="54jzrfub" data-element_type="container">
		<div class="elementor-element elementor-element-xwwq1taq e-con-full e-flex e-con e-parent" data-id="xwwq1taq" data-element_type="container">
				<div class="elementor-element elementor-element-ko71hn5s elementor-widget__width-auto elementor-widget-tablet__width-initial elementor-widget-mobile__width-auto elementor-widget elementor-widget-counter" data-id="ko71hn5s" data-element_type="widget" data-widget_type="counter.default">
				<div class="elementor-widget-container">
					<div class="elementor-counter">
						<div class="elementor-counter-number-wrapper">
				<span class="elementor-counter-number-prefix"></span>
				<span class="elementor-counter-number" data-duration="2000" data-to-value="30" data-from-value="15" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;"></span>
				<span class="elementor-counter-number-suffix" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;">Responsiveness</span>
			</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-u1n0wijg elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="u1n0wijg" data-element_type="widget"  data-widget_type="text-editor.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container" style="font-family: 'Cabinet Grotesk', sans-serif; font-weight: 500;">
                    At CreditAFinance, we pride ourselves on responsiveness, addressing client needs and concerns promptly and efficiently.</strong>						</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-ol97gw88 e-con-full e-flex e-con e-parent" data-id="ol97gw88" data-element_type="container">
				<div class="elementor-element elementor-element-30kbsu43 elementor-widget__width-auto elementor-widget-tablet__width-initial elementor-widget-mobile__width-auto elementor-widget elementor-widget-counter" data-id="30kbsu43" data-element_type="widget" data-widget_type="counter.default">
				<div class="elementor-widget-container">
					<div class="elementor-counter">
						<div class="elementor-counter-number-wrapper">
				<span class="elementor-counter-number-prefix"></span>
				<span class="elementor-counter-number" data-duration="2000" data-to-value="15" data-from-value="5" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;"></span>
				<span class="elementor-counter-number-suffix" style="font-family: 'Cabinet Grotesk',sans-serif; font-weight: 300;">Experts</span>
			</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-4u54e9nq elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="4u54e9nq" data-element_type="widget"  data-widget_type="text-editor.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container" style="font-family: 'Cabinet Grotesk', sans-serif; font-weight: 500;">
                    At CreditAFinance, our expertise lies in strategic financial planning, investments, risk management, and personalized client solutions.</em>						</div>

                            
				</div>
				</div>
                
				</div>
				</div>
					</div>
				</div>
                <div class="elementor-element elementor-element-mfww5a7o e-con-full e-flex e-con e-parent" data-id="mfww5a7o" data-element_type="container">
					<div class="elementor-element elementor-element-eqn2wb6n elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb_cta-position-button-bottom twbb_cta-button-wrapper-left twbb_cta-button-wrapper-left twbb_cta-valign-align-space_between twbb_cta-position-image-top twbb_cta-tablet-position-image-top twbb_cta-mobile-position-image-top twbb_cta-button-wrapper-center twbb_cta-tablet-position-button-bottom twbb_cta-mobile-position-button-bottom elementor-invisible elementor-widget elementor-widget-twbb_call-to-action" data-id="eqn2wb6n" data-element_type="widget"  data-widget_type="twbb_call-to-action.default" style=" opacity: 1 !important;
					visibility: visible !important;
					animation: none !important;">
					<div class="elementor-widget-container">
					<div  class="twbb_cta-wrapper ">
					  <div class="twbb_cta-image-background-wrapper">
			  <span class="twbb_cta-image-background-overlay"></span>
								<div class="twbb_cta-image-html-tag">
												<img src="/banks/expert teas.webp" width="500" height="360" alt="Expert teams at credita finance ready to assist with financial queries in a comfortable, family-like environment, offering services like personal loan, home loan, business loan, loan against property, overdraft,car loans,financial consultancy etc,">
										</div>
						</div>
			<div class="twbb_cta-content-wrapper ">
		<div class="twbb_cta-content-inner">
					<h5 class="twbb_cta-title" style="font-family: 'Cabinet Grotesk', sans-serif;font-weight: 300; font-size: 35px;">Expert Teams</h5>
						<div class="twbb_cta-description" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;">Our strength is our dedicated team, delivering tailored financial solutions to empower client success.<a href="/contact us.html"><p style="font-size: 12px;">book an appointment</p></a>
						</div>
				  </div>
		<div class="twbb_cta-button-wrapper">
			<div class="twbb_cta-buttons">
						<div class="twbb_cta-button-item twbb_cta-button-item__two twbb_cta-button-enable-yes">
							
			  <a href="/services.html" class="elementor-button twbb_cta-button elementor-size- twbb_cta-button__two">Meet Our Team of Experts</a>
			</div>
					  </div>
		</div>
	  </div>
			</div>
			</div>
					</div>
					<div class="elementor-element elementor-element-t9f5fep0 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb_cta-position-button-bottom twbb_cta-button-wrapper-left twbb_cta-button-wrapper-left twbb_cta-valign-align-space_between twbb_cta-position-image-top twbb_cta-tablet-position-image-top twbb_cta-mobile-position-image-top twbb_cta-button-wrapper-center twbb_cta-tablet-position-button-bottom twbb_cta-mobile-position-button-bottom elementor-invisible elementor-widget elementor-widget-twbb_call-to-action" data-id="t9f5fep0" data-element_type="widget"  data-widget_type="twbb_call-to-action.default" style=" opacity: 1 !important;
					visibility: visible !important;
					animation: none !important;">
					<div class="elementor-widget-container">
					<div  class="twbb_cta-wrapper ">
					  <div class="twbb_cta-image-background-wrapper">
			  <span class="twbb_cta-image-background-overlay"></span>
								<div class="twbb_cta-image-html-tag">
												<img src="/banks/19264.webp" width="6900" height="5000" alt="Innovation Hub at credita finance,featuring a modern workspace for collaboration, financial consultations, and creative solutions to meet client's 'financial needs'.">
										</div>
						</div>
			<div class="twbb_cta-content-wrapper ">
		<div class="twbb_cta-content-inner">
					<h5 class="twbb_cta-title"style="font-family: 'Cabinet Grotesk', sans-serif;font-weight: 300; font-size: 35px;">Innovation Hub</h5>
						<div class="twbb_cta-description"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;">With 30+ partners, including banks and NBFCs, we offer diverse, comprehensive financial solutions. 
							<a href="/contact us.html"><p style="font-size: 12px;">Talk to Us</p></a></div>
				  </div>
		<div class="twbb_cta-button-wrapper">
			<div class="twbb_cta-buttons">
						<div class="twbb_cta-button-item twbb_cta-button-item__two twbb_cta-button-enable-yes">
			  <a href="/services.html" class="elementor-button twbb_cta-button elementor-size- twbb_cta-button__two">Dive into Innovation</a>
			</div>
					  </div>
		</div>
	  </div>
			</div>
			</div>
					</div>
					<div class="elementor-element elementor-element-29gz74l3 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb_cta-position-button-bottom twbb_cta-button-wrapper-left twbb_cta-button-wrapper-left twbb_cta-valign-align-space_between twbb_cta-position-image-top twbb_cta-tablet-position-image-top twbb_cta-mobile-position-image-top twbb_cta-button-wrapper-center twbb_cta-tablet-position-button-bottom twbb_cta-mobile-position-button-bottom elementor-invisible elementor-widget elementor-widget-twbb_call-to-action" data-id="29gz74l3" data-element_type="widget" data-widget_type="twbb_call-to-action.default" style=" opacity: 1 !important;
					visibility: visible !important;
					animation: none !important;">
					<div class="elementor-widget-container">
					<div  class="twbb_cta-wrapper ">
					  <div class="twbb_cta-image-background-wrapper">
			  <span class="twbb_cta-image-background-overlay"></span>
								<div class="twbb_cta-image-html-tag">
												<img src="/banks/66202.webp" width="4585" height="3334" alt="Extensive Network of credita finance, illustrating strong partneships and connections accross the financial industry to provide comprehensive financial solutions for client.">
										</div>
						</div>
			<div class="twbb_cta-content-wrapper ">
		<div class="twbb_cta-content-inner">
					<h5 class="twbb_cta-title"style="font-family: 'Cabinet Grotesk', sans-serif;font-weight: 300; font-size: 35px;">Extensive Network</h5>
						<div class="twbb_cta-description"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;">Credita thrives on innovation, leveraging advanced technologies to meet clients' evolving financial needs effectively.<a href="/about us.html"><p style="font-size: 12px;">Our Partners</p></a>
						</div>
				  </div>
		<div class="twbb_cta-button-wrapper">
			<div class="twbb_cta-buttons">
						<div class="twbb_cta-button-item twbb_cta-button-item__two twbb_cta-button-enable-yes">
			  <a href="/services.html" class="elementor-button twbb_cta-button elementor-size- twbb_cta-button__two"> Our Vast Network</a>
			</div>
					  </div>
		</div>
	  </div>
			</div>
			</div>
					</div>
					</div>
						</div>
					</div>
                        
                        <style>
                            
                    
                            .emi-calculator {
                                max-width: 100%;
                                margin: auto;
                                padding: 20px;
                                background-color: #fff;
                                border-radius: 12px;
                                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                overflow: hidden;
                                border: 1px solid rgb(211, 211, 211);
                            }
                    
                            .calculator-header {
                                text-align: center;
                                margin-bottom: 20px;
                            }
                    
                            .calculator-header h1 {
                                color: #0056b3;
                                font-weight: 700;
                                font-size: 28px;
                                margin: 0;
                            }
                    
                            .calculator-content {
                                display: flex;
                                flex-wrap: wrap;
                                gap: 30px;
                                justify-content: center;
                                width: 100%;
                                
                            }
                    
                            .form-container {
                                flex: 1;
                                max-width: 600px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                    
                            .calculator-form {
                                width: 100%;
                                margin-bottom: 20px;
                            }
                    
                            .calculator-form label {
                                display: block;
                                margin-bottom: 8px;
                                font-weight: 600;
                                color: #333;
                            }
                    
                    /* Styles for the slider input */
                    input[type="range"] {
                        width: 100%;
                        -webkit-appearance: none;
                        height: 6px;
                        border-radius: 8px;
                        background: linear-gradient(to right, #9900fffb 0%, #9900fffb 0%, #e7c9f8 0%);
                        outline: none;
                        margin: 10px 0;
                        transition: background 0.3s ease;
                    }
                    
                    /* Thumb style for Webkit browsers */
                    input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 24px;
                        height: 10px;
                        background: #0059ff;
                        cursor: pointer;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                        transition: background-color 0.3s ease;
                    }
                    
                    input[type="range"]:hover::-webkit-slider-thumb {
                        background: #6d7fd1e7;
                    }
                    
                    /* Thumb style for Firefox */
                    input[type="range"]::-moz-range-thumb {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: #9900fffb;
                        cursor: pointer;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                        transition: background-color 0.3s ease;
                    }
                    
                    input[type="range"]:hover::-moz-range-thumb {
                        background: #6d7fd1e7;
                    }
                    
                    
                            .calculator-results {
                                display: flex;
                                justify-content: space-between;
                                text-align: right;
                                font-size: 18px;
                                color: #333;
                                margin-top: 30px;
                                width: 100%;
                                flex-wrap: wrap;
                            }
                    
                            .calculator-results div {
                                flex: 1;
                                margin: 0 10px;
                            }
                    
                            .calculator-chart {
                                width: 100%;
                                height: auto;
                                max-width: 400px;
                                margin-top: 20px;
                            }
                    
                            /* Responsive Styles */
                            @media (max-width: 768px) {
                                .calculator-results {
                                    flex-direction: column;
                                    text-align: center;
                                }
                    
                                .calculator-results div {
                                    margin: 10px 0;
                                }
                    
                                .calculator-form {
                                    padding: 0 15px;
                                }
                            }
                        </style>
                   
                        <div class="emi-calculator">
                            
                            <div class="calculator-content">
                                <div class="form-container">
                                    <div class="calculator-form">
                                        <label for="loan-amount" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Loan Amount</label>
                                        <input type="range" id="loan-amount" min="10000" max="1000000" step="10000" style="border-radius:100px; ">
                                        <input type="number" id="loan-amount-input" value="10000" min="10000" max="1000000" step="10000"style="border:none;background-color: #f1f1f19a;">
                                        
                                        <label for="interest-rate"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Interest Rate</label>
                                        <input type="range" id="interest-rate" min="1" max="20" step="0.1" style="border-radius:100px;">
                                        <input type="number" id="interest-rate-input" value="1" min="1" max="20" step="0.1"style="border:none;background-color:#f1f1f19a;">
                                        
                                        <label for="loan-tenure"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Loan Tenure (Years)</label>
                                        <input type="range" id="loan-tenure" min="1" max="30" step="1" style="border-radius:100px;">
                                        <input type="number" id="loan-tenure-input" value="1" min="1" max="30" step="1"style="border:none; background-color:#f1f1f19a;">
                                    </div>
                                    <div class="calculator-results">
                                        <div id="emi-result"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 20px;">EMI: ₹0</div>
                                        <div id="total-interest-result"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 20px;">Total Interest: ₹0</div>
                                        <div id="total-payment-result"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 20px;">Total Payment: ₹0</div>
                                    </div>
                                    <button style="margin-top: 20px;"><a href="/apply form.html" style="color: white;">Apply Now</a></button>
                                </div>
                                <div class="calculator-chart">
                                    <canvas id="emi-chart"></canvas>
                                </div>
                            </div>
                        </div>
                    
                        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                const loanAmountInput = document.getElementById('loan-amount');
                                const interestRateInput = document.getElementById('interest-rate');
                                const loanTenureInput = document.getElementById('loan-tenure');
                    
                                const loanAmountManual = document.getElementById('loan-amount-input');
                                const interestRateManual = document.getElementById('interest-rate-input');
                                const loanTenureManual = document.getElementById('loan-tenure-input');
                    
                                const emiResult = document.getElementById('emi-result');
                                const totalInterestResult = document.getElementById('total-interest-result');
                                const totalPaymentResult = document.getElementById('total-payment-result');
                    
                                const ctx = document.getElementById('emi-chart').getContext('2d');
                                let emiChart;
                    
                                function calculateEMI() {
                                    const loanAmount = parseFloat(loanAmountInput.value);
                                    const interestRate = parseFloat(interestRateInput.value) / 12 / 100;
                                    const loanTenure = parseFloat(loanTenureInput.value) * 12;
                    
                                    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) / (Math.pow(1 + interestRate, loanTenure) - 1);
                                    const totalPayment = emi * loanTenure;
                                    const totalInterest = totalPayment - loanAmount;
                    
                                    emiResult.textContent = `EMI: ₹${emi.toFixed(2)}`;
                                    totalInterestResult.textContent = `Total Interest: ₹${totalInterest.toFixed(2)}`;
                                    totalPaymentResult.textContent = `Total Payment: ₹${totalPayment.toFixed(2)}`;
                    
                                    if (emiChart) {
                                        emiChart.destroy();
                                    }
                    
                                    emiChart = new Chart(ctx, {
                                        type: 'doughnut',
                                        data: {
                                            labels: ['Principal', 'Interest'],
                                            datasets: [{
                                                data: [loanAmount, totalInterest],
                                                backgroundColor: ['#e8e8e8', 'rgba(55, 0, 255)'],
                                            }],
                                        },
                                        options: {
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: 'bottom',
                                                    labels: {
                                                        font: {
                                                            size: 20
                                                        }
                                                    }
                                                },
                                                tooltip: {
                                                    callbacks: {
                                                        label: function(tooltipItem) {
                                                            return `${tooltipItem.label}: ₹${tooltipItem.raw.toFixed(2)}`;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                    
                                loanAmountInput.addEventListener('input', function() {
                                    loanAmountManual.value = loanAmountInput.value;
                                    calculateEMI();
                                });
                    
                                interestRateInput.addEventListener('input', function() {
                                    interestRateManual.value = interestRateInput.value;
                                    calculateEMI();
                                });
                    
                                loanTenureInput.addEventListener('input', function() {
                                    loanTenureManual.value = loanTenureInput.value;
                                    calculateEMI();
                                });
                    
                                loanAmountManual.addEventListener('input', function() {
                                    loanAmountInput.value = loanAmountManual.value;
                                    calculateEMI();
                                });
                    
                                interestRateManual.addEventListener('input', function() {
                                    interestRateInput.value = interestRateManual.value;
                                    calculateEMI();
                                });
                    
                                loanTenureManual.addEventListener('input', function() {
                                    loanTenureInput.value = loanTenureManual.value;
                                    calculateEMI();
                                });
                    
                                // Initial calculation
                                calculateEMI();
                            });
                        </script>
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                        const sliders = document.querySelectorAll('input[type="range"]');
                    
                        function setSliderTrail(slider) {
                            const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
                            slider.style.background = `linear-gradient(to right, #79a7d3 ${value}%, #e7c9f8 ${value}%)`;
                        }
                    
                        sliders.forEach(slider => {
                            setSliderTrail(slider);
                            slider.addEventListener('input', () => setSliderTrail(slider));
                        });
                    });
                    
                        </script>
                
		<div class="elementor-element elementor-element-psya57ik e-con-boxed twbb_section e-flex e-con e-parent" data-id="psya57ik" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-p11ydc14 e-con-full e-flex e-con e-parent" data-id="p11ydc14" data-element_type="container">
				<div class="elementor-element elementor-element-y1tamfth elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-heading" data-id="y1tamfth" data-element_type="widget"  data-widget_type="heading.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 45px;">Why Choose <strong>Credita Finance</strong></h2>		</div>
				</div>
				<div class="elementor-element elementor-element-qbl8mc3j elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="qbl8mc3j" data-element_type="widget"  data-widget_type="text-editor.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 20px;">
                    With over <em>20 years of invaluable experience</em>, our seasoned team is dedicated to understanding and meeting your <strong>financial needs.</strong> Partnered with <strong>30+ Banks & NBFCs,</strong> we ensure swift and tailored solutions. Whether it's <strong>>Personal Loans</strong,<strong> Home Loans</strong>, or <strong>Business Loans</strong>, trust us for expertise, efficiency, and a commitment to your financial success.					</div>
				</div>
				<div class="elementor-element elementor-element-6yi0blg0 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6yi0blg0" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon" >
							<i aria-hidden="true" class="fas fa-check-circle" style="color:#3BE1FD;"></i>						</span>
										<span class="elementor-icon-list-text"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 21px;">"<em>Unmatched expertise</em> in <strong>financial solutions</strong> sets us apart."</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check-circle" style="color:#3BE1FD;"></i>						</span>
										<span class="elementor-icon-list-text"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 21px;">"A <em>trusted network</em> of <strong>30+ banks and NBFCs</strong> backs our commitment."</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check-circle" style="color:#3BE1FD;"></i>						</span>
										<span class="elementor-icon-list-text"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 21px;">"<strong>Competitive rates</strong> and timely solutions for your financial needs."</span>
									</li>
                                    <li class="elementor-icon-list-item">
                                        <span class="elementor-icon-list-icon">
                        <i aria-hidden="true" class="fas fa-check-circle" style="color:#3BE1FD;"></i>						</span>
                                    <span class="elementor-icon-list-text"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 21px;">"<strong>Excellence in service</strong>, ensuring your success is our priority."</span>
                                </li>
                                <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                    <i aria-hidden="true" class="fas fa-check-circle" style="color:#3BE1FD;"></i>						</span>
                                <span class="elementor-icon-list-text"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 21px;">"Your journey to prosperity begins with a <strong>reliable financial partner.</strong>"</span>
                            </li>
						</ul>
				</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-cmo3zw4i elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image" data-id="cmo3zw4i" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img loading="lazy" width="2000" height="2000" src="/photos/5207130.webp" class="attachment-full size-full wp-image-52434" alt="Why choose us: Credita finance offers expert financial guidance,personalsed solutions and a client-focused approach to meet all your financial needs." />													</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-rbzn8uez e-con-boxed twbb_section e-flex e-con e-parent" data-id="rbzn8uez" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;shape_divider_bottom&quot;:&quot;opacity-tilt&quot;}">
					<div class="e-con-inner">
				<div class="elementor-shape elementor-shape-bottom" data-negative="false">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
	<path class="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"/>
	<path class="elementor-shape-fill" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"/>
	<path class="elementor-shape-fill" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"/>
</svg>		</div>
				<div class="elementor-element elementor-element-a456pvw0 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-heading" data-id="a456pvw0" data-element_type="widget"  data-widget_type="heading.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 45px;">Client Success Stories</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-7sooo9i0 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="7sooo9i0" data-element_type="widget"  data-widget_type="text-editor.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 20px;">
							<b>Hear from our <strong>satisfied clients</strong></b>. Their experiences highlight the impact of our financial solutions.						</div>
				</div>
				<div class="elementor-element elementor-element-q3svjbde elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit tenweb-testimonial--skin-default tenweb-testimonial--layout-image_inline tenweb-testimonial--align-left elementor-widget elementor-widget-twbb-testimonial-carousel" data-id="q3svjbde" data-element_type="widget" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;space_between_masonry&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:32,&quot;sizes&quot;:[]},&quot;space_between_masonry_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;space_between_masonry_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="twbb-testimonial-carousel.default">
				<div class="elementor-widget-container">
			            <div class="tenweb-masonry" class="tenweb-testimonial-carousel-swiper swiper-container swiper-container-horizontal" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;slides_per_view&quot;:null,&quot;slides_per_view_tablet&quot;:null,&quot;slides_per_view_mobile&quot;:null,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;slides_to_scroll&quot;:null,&quot;slides_count&quot;:6,&quot;pagination&quot;:null,&quot;show_arrows&quot;:null,&quot;speed&quot;:null,&quot;autoplay&quot;:null,&quot;autoplay_speed&quot;:null,&quot;loop&quot;:null,&quot;pause_on_interaction&quot;:null,&quot;breakpoints&quot;:{&quot;space_between&quot;:null,&quot;space_between_tablet&quot;:null,&quot;space_between_mobile&quot;:null},&quot;tenweb_enable_stars&quot;:&quot;yes&quot;}">
                                    <div class="tenweb-item">
                        		<div class="tenweb-testimonial">

			

                <div class="tenweb-testimonial__content">
                                            <div class="e-rating" itemtype="https://schema.org/Rating" itemscope="" itemprop="reviewRating">
                            <div class="e-rating-wrapper" itemprop="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;slides_per_view&quot;:null,&quot;slides_per_view_tablet&quot;:null,&quot;slides_per_view_mobile&quot;:null,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;slides_to_scroll&quot;:null,&quot;slides_count&quot;:6,&quot;pagination&quot;:null,&quot;show_arrows&quot;:null,&quot;speed&quot;:null,&quot;autoplay&quot;:null,&quot;autoplay_speed&quot;:null,&quot;loop&quot;:null,&quot;pause_on_interaction&quot;:null,&quot;breakpoints&quot;:{&quot;space_between&quot;:null,&quot;space_between_tablet&quot;:null,&quot;space_between_mobile&quot;:null},&quot;tenweb_enable_stars&quot;:&quot;yes&quot;}">
                                            <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white"></i>                </div>
            </div>
                        
                                        </div>
                        </div>
                    					<div class="tenweb-testimonial__text"style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 15px;">
						<strong>Credita Finance</strong> helped me <em>secure a loan quickly</em> and efficiently. Their <em>team was supportive</em> throughout the process.					</div>
									</div>
						<div class="tenweb-testimonial__footer">
									<div class="tenweb-testimonial__image">
						<img src="/photos/profile.webp" width="512" height="512" alt="Avinash Aggrawal, Happy credita finance clients sharing positive testimonials about seamless loan processing, expert financial advice and excellent customer service.">
					</div>
								<cite class="tenweb-testimonial__cite"><span class="tenweb-testimonial__name" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Avinash Aggrawal</span><span class="tenweb-testimonial__title">Small Business Owner</span></cite>			</div>
		</div>
		                    </div>
                                    <div class="tenweb-item">
                        		<div class="tenweb-testimonial">

			

                <div class="tenweb-testimonial__content">
                                            <div class="e-rating" itemtype="https://schema.org/Rating" itemscope="" itemprop="reviewRating">
                            <div class="e-rating-wrapper" itemprop="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;slides_per_view&quot;:null,&quot;slides_per_view_tablet&quot;:null,&quot;slides_per_view_mobile&quot;:null,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;slides_to_scroll&quot;:null,&quot;slides_count&quot;:6,&quot;pagination&quot;:null,&quot;show_arrows&quot;:null,&quot;speed&quot;:null,&quot;autoplay&quot;:null,&quot;autoplay_speed&quot;:null,&quot;loop&quot;:null,&quot;pause_on_interaction&quot;:null,&quot;breakpoints&quot;:{&quot;space_between&quot;:null,&quot;space_between_tablet&quot;:null,&quot;space_between_mobile&quot;:null},&quot;tenweb_enable_stars&quot;:&quot;yes&quot;}">
                                            <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        
                                        </div>
                        </div>
                    					<div class="tenweb-testimonial__text" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 15px;">
						I received <strong>excellent financial advice</strong> that helped me manage my funds better. <strong>Highly recommend!</strong>					</div>
									</div>
						<div class="tenweb-testimonial__footer">
									<div class="tenweb-testimonial__image">
						<img src="/photos/profile.webp" width="512" height="512" alt="Anshul Saxena, Happy credita finance clients sharing positive testimonials about seamless loan processing, expert financial advice and excellent customer service.">
					</div>
								<cite class="tenweb-testimonial__cite"><span class="tenweb-testimonial__name" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Anshul Saxena</span><span class="tenweb-testimonial__title">Freelancer</span></cite>			</div>
		</div>
		                    </div>
                                    <div class="tenweb-item">
                        		<div class="tenweb-testimonial">

			

                <div class="tenweb-testimonial__content">
                                            <div class="e-rating" itemtype="https://schema.org/Rating" itemscope="" itemprop="reviewRating">
                            <div class="e-rating-wrapper" itemprop="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;slides_per_view&quot;:null,&quot;slides_per_view_tablet&quot;:null,&quot;slides_per_view_mobile&quot;:null,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;slides_to_scroll&quot;:null,&quot;slides_count&quot;:6,&quot;pagination&quot;:null,&quot;show_arrows&quot;:null,&quot;speed&quot;:null,&quot;autoplay&quot;:null,&quot;autoplay_speed&quot;:null,&quot;loop&quot;:null,&quot;pause_on_interaction&quot;:null,&quot;breakpoints&quot;:{&quot;space_between&quot;:null,&quot;space_between_tablet&quot;:null,&quot;space_between_mobile&quot;:null},&quot;tenweb_enable_stars&quot;:&quot;yes&quot;}">
                                            <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        
                                        </div>
                        </div>
                    					<div class="tenweb-testimonial__text" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 15px;">
						The <strong>consultancy services</strong> provided by <strong>Credita Finance</strong> were invaluable. They guided me through every step.					</div>
									</div>
						<div class="tenweb-testimonial__footer">
									<div class="tenweb-testimonial__image">
						<img src="/photos/profile.webp" width="512" height="512" alt="Manik Sharma, Happy credita finance clients sharing positive testimonials about seamless loan processing, expert financial advice and excellent customer service.">
					</div>
								<cite class="tenweb-testimonial__cite"><span class="tenweb-testimonial__name" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Manik Sharma</span><span class="tenweb-testimonial__title">Real Estate Investor</span></cite>			</div>
		</div>
		                    </div>
                                    <div class="tenweb-item">
                        		<div class="tenweb-testimonial">

			

                <div class="tenweb-testimonial__content">
                                            <div class="e-rating" itemtype="https://schema.org/Rating" itemscope="" itemprop="reviewRating">
                            <div class="e-rating-wrapper" itemprop="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;slides_per_view&quot;:null,&quot;slides_per_view_tablet&quot;:null,&quot;slides_per_view_mobile&quot;:null,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;slides_to_scroll&quot;:null,&quot;slides_count&quot;:6,&quot;pagination&quot;:null,&quot;show_arrows&quot;:null,&quot;speed&quot;:null,&quot;autoplay&quot;:null,&quot;autoplay_speed&quot;:null,&quot;loop&quot;:null,&quot;pause_on_interaction&quot;:null,&quot;breakpoints&quot;:{&quot;space_between&quot;:null,&quot;space_between_tablet&quot;:null,&quot;space_between_mobile&quot;:null},&quot;tenweb_enable_stars&quot;:&quot;yes&quot;}">
                                            <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                                        </div>
                        </div>
                    					<div class="tenweb-testimonial__text" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 15px;">
						Thanks to <strong>Credita Finance</strong>, I was able to secure the funding I needed to launch my business.<em> Forever grateful!</em>					</div>
									</div>
						<div class="tenweb-testimonial__footer">
									<div class="tenweb-testimonial__image">
						<img src="/photos/profile.webp" width="512" height="512" alt="Karan Kasana, Happy credita finance clients sharing positive testimonials about seamless loan processing, expert financial advice and excellent customer service.">
					</div>
								<cite class="tenweb-testimonial__cite"><span class="tenweb-testimonial__name" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Karan Sharma</span><span class="tenweb-testimonial__title">Startup Founder</span></cite>			</div>
		</div>
		                    </div>
                                    <div class="tenweb-item">
                        		<div class="tenweb-testimonial">

			

                <div class="tenweb-testimonial__content">
                                            <div class="e-rating" itemtype="https://schema.org/Rating" itemscope="" itemprop="reviewRating">
                            <div class="e-rating-wrapper" itemprop="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;slides_per_view&quot;:null,&quot;slides_per_view_tablet&quot;:null,&quot;slides_per_view_mobile&quot;:null,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;slides_to_scroll&quot;:null,&quot;slides_count&quot;:6,&quot;pagination&quot;:null,&quot;show_arrows&quot;:null,&quot;speed&quot;:null,&quot;autoplay&quot;:null,&quot;autoplay_speed&quot;:null,&quot;loop&quot;:null,&quot;pause_on_interaction&quot;:null,&quot;breakpoints&quot;:{&quot;space_between&quot;:null,&quot;space_between_tablet&quot;:null,&quot;space_between_mobile&quot;:null},&quot;tenweb_enable_stars&quot;:&quot;yes&quot;}">
                                            <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        
                                        </div>
                        </div>
                    					<div class="tenweb-testimonial__text" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 15px;">
						I was <em>impressed by the professionalism and dedication of the team.</em> They made the loan process seamless.					</div>
									</div>
						<div class="tenweb-testimonial__footer">
									<div class="tenweb-testimonial__image">
						<img src="/photos/profile.webp" width="512" height="512" alt="Sahadil Hussain, Happy credita finance clients sharing positive testimonials about seamless loan processing , expert advice and excellent customer service.">
					</div>
								<cite class="tenweb-testimonial__cite"><span class="tenweb-testimonial__name" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Sahadil Hussain</span><span class="tenweb-testimonial__title">Retired Veteran</span></cite>			</div>
		</div>
		                    </div>
                                    <div class="tenweb-item">
                        		<div class="tenweb-testimonial">

			

                <div class="tenweb-testimonial__content">
                                            <div class="e-rating" itemtype="https://schema.org/Rating" itemscope="" itemprop="reviewRating">
                            <div class="e-rating-wrapper" itemprop="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5" data-settings="{&quot;view_type&quot;:&quot;masonry&quot;,&quot;slides_per_view&quot;:null,&quot;slides_per_view_tablet&quot;:null,&quot;slides_per_view_mobile&quot;:null,&quot;column_count_masonry&quot;:3,&quot;column_count_masonry_tablet&quot;:2,&quot;column_count_masonry_mobile&quot;:1,&quot;slides_to_scroll&quot;:null,&quot;slides_count&quot;:6,&quot;pagination&quot;:null,&quot;show_arrows&quot;:null,&quot;speed&quot;:null,&quot;autoplay&quot;:null,&quot;autoplay_speed&quot;:null,&quot;loop&quot;:null,&quot;pause_on_interaction&quot;:null,&quot;breakpoints&quot;:{&quot;space_between&quot;:null,&quot;space_between_tablet&quot;:null,&quot;space_between_mobile&quot;:null},&quot;tenweb_enable_stars&quot;:&quot;yes&quot;}">
                                            <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                        <div class="e-icon">
                <div class="e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked e-icon-wrapper e-icon-marked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
                <div class="e-icon-wrapper e-icon-unmarked">
                    <i aria-hidden="true" class="eicon-star" style="color:white;"></i>                </div>
            </div>
                                        </div>
                        </div>
                    					<div class="tenweb-testimonial__text" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 500;font-size: 15px;">
						Their <strong>financial consultancy</strong> transformed our budgeting process. We are now more efficient and effective.					</div>
									</div>
						<div class="tenweb-testimonial__footer">
									<div class="tenweb-testimonial__image">
						<img src="/photos/profile.webp" width="512" height="512" alt="Pranjal Dubey, Happy credita finance clients sharing positive testimonials about seamless loan processing, expert financial service and excellent financial service.">
					</div>
								<cite class="tenweb-testimonial__cite"><span class="tenweb-testimonial__name" style="font-family: 'Cabinet Grotesk',sans-serif;font-weight: 300;font-size: 35px;">Pranjal Dubey</span><span class="tenweb-testimonial__title">Non-Profit Director</span></cite>			</div>
		</div>
		                    </div>
                            </div>
            		</div>
				</div>
					</div>
                    
                    
				</div>


                <div class="elementor-element elementor-element-4s93ks3k e-con-boxed twbb_section e-flex e-con e-parent" data-id="4s93ks3k" data-element_type="container">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-q916ux00 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb_cta-position-button-bottom twbb_cta-button-wrapper-left twbb_cta-button-wrapper-left twbb_cta-valign-align-top twbb_cta-button-wrapper-center twbb_cta-tablet-position-button-bottom twbb_cta-mobile-position-button-bottom elementor-invisible elementor-widget elementor-widget-twbb_call-to-action" data-id="q916ux00" data-element_type="widget"  data-widget_type="twbb_call-to-action.default" style=" opacity: 1 !important;
				visibility: visible !important;
				animation: none !important;">
				<div class="elementor-widget-container">
			    <div  class="twbb_cta-wrapper ">
      <div class="twbb_cta-content-wrapper ">
    <div class="twbb_cta-content-inner">
                <h2 class="twbb_cta-title" style="font-family: 'cabinet-grotesk'sans-serif; font-weight: 200;font-size: 45px;">Get Answers</h2>
                    <div class="twbb_cta-description" ><p style="font-family: 'cabinet-grotesk',sans-serif; font-weight: 500;">Have questions about our loan services? Explore our FAQs to find detailed answers and gain confidence in your <strong>financial decisions.</strong></p></div>
              </div>
    <div class="twbb_cta-button-wrapper">
        <div class="twbb_cta-buttons">
                    <div class="twbb_cta-button-item twbb_cta-button-item__two twbb_cta-button-enable-yes">
          <a href="/contact us.html" class="elementor-button twbb_cta-button elementor-size- twbb_cta-button__two" style="font-family:'cabinet-grotesk',sans-serif ;font-weight: 500;">Contact Us</a>
        </div>
                  </div>
    </div>
  </div>
        </div>
		</div>
				</div>
				<div class="elementor-element elementor-element-dhalpfsp elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-toggle" data-id="dhalpfsp" data-element_type="widget" data-widget_type="toggle.default">
				<div class="elementor-widget-container">
					<div class="elementor-toggle">
							<div class="elementor-toggle-item">
					<div id="elementor-tab-title-3501" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-3501" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-chevron-down"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-chevron-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0" style="font-family: 'cabinet-grotesk',sans ;font-weight: 300;">What types of loans do you offer?</a>
					</div>

					<div id="elementor-tab-content-3501" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-3501" style="font-family: 'cabinet-grotesk',sans-serif ; font-weight:500;">We offer a variety of loans including personal loans, home loans, and business loans tailored to meet your financial needs.</div>
				</div>
							<div class="elementor-toggle-item">
					<div id="elementor-tab-title-3502" class="elementor-tab-title" data-tab="2" role="button" aria-controls="elementor-tab-content-3502" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-chevron-down"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-chevron-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0" style="font-family: 'cabinet-grotesk',sans ;font-weight: 300;">How can I apply for a loan?</a>
					</div>

					<div id="elementor-tab-content-3502" class="elementor-tab-content elementor-clearfix" data-tab="2" role="region" aria-labelledby="elementor-tab-title-3502" style="font-family: 'cabinet-grotesk',sans-serif ; font-weight:500;">You can apply for a loan directly through our website by filling out the application form or by contacting our consultants for assistance.</div>
				</div>
                
							<div class="elementor-toggle-item">
					<div id="elementor-tab-title-3503" class="elementor-tab-title" data-tab="3" role="button" aria-controls="elementor-tab-content-3503" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-chevron-down"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-chevron-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0" style="font-family: 'cabinet-grotesk',sans ;font-weight: 300;">What are the eligibility criteria?</a>
					</div>

					<div id="elementor-tab-content-3503" class="elementor-tab-content elementor-clearfix" data-tab="3" role="region" aria-labelledby="elementor-tab-title-3503" style="font-family: 'cabinet-grotesk',sans-serif ; font-weight:500;">Eligibility criteria vary by loan type, but generally include age, income level, and credit history. Check our Services page for specifics.</div>
				</div>
							<div class="elementor-toggle-item">
					<div id="elementor-tab-title-3504" class="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-3504" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-chevron-down"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-chevron-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0" style="font-family: 'cabinet-grotesk',sans ;font-weight: 300;">How long does the approval process take?</a>
					</div>

					<div id="elementor-tab-content-3504" class="elementor-tab-content elementor-clearfix" data-tab="4" role="region" aria-labelledby="elementor-tab-title-3504" style="font-family: 'cabinet-grotesk',sans-serif ; font-weight:500;">The approval process typically takes 3-5 business days, depending on the type of loan and the completeness of your application.</div>
				</div>
								</div>
				</div>
				</div>
					</div>
				</div>





                












		<div class="elementor-element elementor-element-w54inksl e-con-boxed twbb_section e-flex e-con e-parent" data-id="w54inksl" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;shape_divider_top&quot;:&quot;opacity-tilt&quot;}">
					<div class="e-con-inner">
				<div class="elementor-shape elementor-shape-top" data-negative="false">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
	<path class="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"/>
	<path class="elementor-shape-fill" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"/>
	<path class="elementor-shape-fill" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"/>
</svg>		</div>
		<div class="elementor-element elementor-element-rm3qifzp e-con-full e-flex e-con e-parent" data-id="rm3qifzp" data-element_type="container">
		<div class="elementor-element elementor-element-a0dtmo42 e-con-full e-flex e-con e-parent" data-id="a0dtmo42" data-element_type="container">
				<div class="elementor-element elementor-element-mr6i3ka6 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-heading" data-id="mr6i3ka6" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 300;">Latest Finance Insights</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-wfmqgobj elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor" data-id="wfmqgobj" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 300;">
							Explore our articles to enhance your financial knowledge.						</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-zmyq0zga elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="zmyq0zga" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="/blog.html">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500">Read More</span>
					</span>
					</a>
		</div>
				</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-3okl4d3c elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-grid-2 elementor-posts--thumbnail-mobile-top elementor-posts--thumbnail-left twbb-posts--fullHeight_yes elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-tablet-top twbb-post__badge-onimage_no elementor-posts--show-avatar twbb-post__avatar-align-left twbb-posts-image-animation_zoom-in twbb-posts-image-animation-duration-fast twbb-post__badge-align-left elementor-widget elementor-widget-tenweb-posts" data-id="3okl4d3c" data-element_type="widget" data-settings="{&quot;classic_columns&quot;:&quot;2&quot;,&quot;classic_columns_tablet&quot;:&quot;2&quot;,&quot;classic_columns_mobile&quot;:&quot;1&quot;,&quot;classic_row_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:35,&quot;sizes&quot;:[]},&quot;classic_row_gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;classic_row_gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="tenweb-posts.classic">
				<div class="elementor-widget-container">
					<div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid">
                        <article class="elementor-post elementor-grid-item post-52445 post type-post status-publish format-standard has-post-thumbnail hentry category-finance-shining-bream">
							<div class="twbb-image-container">
						<a class="elementor-post__thumbnail__link" href="/Best Ways to Diversify Your Income in 2024.html" tabindex="-1" >
							<div class="elementor-post__thumbnail"><img fetchpriority="high" width="1536" height="640" src="/photos/diversify-income-sources-1024x724.webp" class="attachment-medium size-medium wp-image-52422" alt="" /></div>
						</a>
					</div>
							<div class="elementor-post__text">
							<div class="twbb-post__badge-container">
					  <a href="/finance.html" alt="NEWS">
						<div class="elementor-post__badge">Finance</div>
					  </a>
					</div>
							<h5 class="elementor-post__title">
						<a href="/Best Ways to Diversify Your Income in 2024.html" >
							Best Ways to Diversify Your Income in 2024

</a>
					</h5>
							<div class="elementor-post__excerpt">
						<p>Explore Top Strategies to Build Multiple Income Streams and Secure Your Financial Future in 2024.</p>
					</div>
							<div class="elementor-post__read-more-container">
					<a class="elementor-post__read-more" href="/Joint Accounts vs. Separate Accounts.html" aria-label="Read more about Understanding Personal Loans: A Comprehensive Guide" tabindex="-1" >
						Read More		</a>
					</div>
					<div class="date">
                        <a href="">
                			<span class="elementor-icon-list-icon">
			        <i aria-hidden="true" class="fas fa-calendar"></i>      		</span>
                <span>
			              November 30, 2024      		</span>
                  </a>
                    </div>
							</div>
							</article>

                        <article class="elementor-post elementor-grid-item post-52445 post type-post status-publish format-standard has-post-thumbnail hentry category-finance-shining-bream">
							<div class="twbb-image-container">
						<a class="elementor-post__thumbnail__link" href="/Joint Accounts vs. Separate Accounts.html" tabindex="-1" >
							<div class="elementor-post__thumbnail"><img fetchpriority="high" width="1536" height="640" src="/photos/bank.webp" class="attachment-medium size-medium wp-image-52422" alt="" /></div>
						</a>
					</div>
							<div class="elementor-post__text">
							<div class="twbb-post__badge-container">
					  <a href="/finance.html" alt="NEWS">
						<div class="elementor-post__badge">Finance</div>
					  </a>
					</div>
							<h5 class="elementor-post__title">
						<a href="/Joint Accounts vs. Separate Accounts.html" >
							Joint Accounts vs. Separate Accounts: What’s Best for Your Family?
</a>
					</h5>
							<div class="elementor-post__excerpt">
						<p>Evaluating the Financial Pros and Cons to Find the Best Fit for Your Business Needs</p>
					</div>
							<div class="elementor-post__read-more-container">
					<a class="elementor-post__read-more" href="/Joint Accounts vs. Separate Accounts.html" aria-label="Read more about Understanding Personal Loans: A Comprehensive Guide" tabindex="-1" >
						Read More		</a>
					</div>
					<div class="date">
                        <a href="">
                			<span class="elementor-icon-list-icon">
			        <i aria-hidden="true" class="fas fa-calendar"></i>      		</span>
                <span>
			              November 29, 2024      		</span>
                  </a>
                    </div>
							</div>
							</article>
                        <article class="elementor-post elementor-grid-item post-52445 post type-post status-publish format-standard has-post-thumbnail hentry category-finance-shining-bream">
							<div class="twbb-image-container">
						<a class="elementor-post__thumbnail__link" href="/Should You Lease or Buy Equipment for Your Business.html" tabindex="-1" >
							<div class="elementor-post__thumbnail"><img fetchpriority="high" width="1536" height="640" src="/photos/business equipment blog.webp" class="attachment-medium size-medium wp-image-52422" alt="" /></div>
						</a>
					</div>
							<div class="elementor-post__text">
							<div class="twbb-post__badge-container">
					  <a href="/finance.html" alt="NEWS">
						<div class="elementor-post__badge">Finance</div>
					  </a>
					</div>
							<h5 class="elementor-post__title">
						<a href="/Should You Lease or Buy Equipment for Your Business.html" >
							Should You Lease or Buy Equipment for Your Business?
</a>
					</h5>
							<div class="elementor-post__excerpt">
						<p>Evaluating the Financial Pros and Cons to Find the Best Fit for Your Business Needs</p>
					</div>
							<div class="elementor-post__read-more-container">
					<a class="elementor-post__read-more" href="/Should You Lease or Buy Equipment for Your Business.html" aria-label="Read more about Understanding Personal Loans: A Comprehensive Guide" tabindex="-1" >
						Read More		</a>
					</div>
					<div class="date">
                        <a href="">
                			<span class="elementor-icon-list-icon">
			        <i aria-hidden="true" class="fas fa-calendar"></i>      		</span>
                <span>
			              November 28, 2024      		</span>
                  </a>
                    </div>
							</div>
							</article>

                        <article class="elementor-post elementor-grid-item post-52445 post type-post status-publish format-standard has-post-thumbnail hentry category-finance-shining-bream">
							<div class="twbb-image-container">
						<a class="elementor-post__thumbnail__link" href="/Debt Consolidation Loans.html" tabindex="-1" >
							<div class="elementor-post__thumbnail"><img fetchpriority="high" width="1536" height="640" src="/photos/debt-obligation-banking-finance-loan-money-concept.webp" class="attachment-medium size-medium wp-image-52422" alt="" /></div>
						</a>
					</div>
							<div class="elementor-post__text">
							<div class="twbb-post__badge-container">
					  <a href="/finance.html" alt="NEWS">
						<div class="elementor-post__badge">Finance</div>
					  </a>
					</div>
							<h5 class="elementor-post__title">
						<a href="/Debt Consolidation Loans.html" >
							Debt Consolidation Loans: A Solution for Navigating Post-Grace Period Challenges?
</a>
					</h5>
							<div class="elementor-post__excerpt">
						<p>Streamlining Your Finances: How Debt Consolidation Can Ease the Burden After the Loan Repayment Pause</p>
					</div>
							<div class="elementor-post__read-more-container">
					<a class="elementor-post__read-more" href="/Debt Consolidation Loans.html" aria-label="Read more about Understanding Personal Loans: A Comprehensive Guide" tabindex="-1" >
						Read More		</a>
					</div>
					<div class="date">
                        <a href="">
                			<span class="elementor-icon-list-icon">
			        <i aria-hidden="true" class="fas fa-calendar"></i>      		</span>
                <span>
			              November 26, 2024      		</span>
                  </a>
                    </div>
							</div>
							</article>








                        


                        				
				</div>
		
				</div>
				</div>
					</div>
				</div>
				</div>
				</div>
				</div>
					</div>
		</div>
					</div>

                    <style>
                        .body-photo:hover{
                            cursor: none;
                        }
                    </style>



                    <div class="counter-wrapper">
                        <div class="counter">
                            <a href="#"><h1 class="count " data-target="2019">
                                0
                            </h1></a>
                            <p>Established in 2019, trusted for integrity, serving thousands successfully.</p>
                        </div>
                        <div class="counter">
                            <h1 class="count counts" data-target="1000">
                                0
                            </h1>
                            <p>We ensure personalized support, prioritizing customer satisfaction every time.</p>
                        </div>
                        <div class="counter">
                            <h1 class="count counts" data-target="30">
                                0
                            </h1>
                            <p>Experienced professionals dedicated to guiding clients toward financial success.</p>
                        </div>
                        <div class="counter">
                            <h1 class="count counts" data-target="50000">
                                0
                            </h1>
                            <p>Completed numerous projects successfully, delivering excellence and client satisfaction.</p>
                        </div>
                    </div>
                    
                    <style>
                        .counter-wrapper {
                            background: #F3F4F6;
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: center;
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            padding: 2rem 9%;
                            position: relative;
                        }
                        .counter-wrapper::before {
                            position: absolute;
                            content: '';
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            /* background:rgba(0, 0, 0, 0.274); */
                            z-index: 1;
                        }
                        .counter {
                            text-align: center;
                            color: rgb(56, 56, 56);
                            z-index: 2;
                            position: relative;
                        }
                        .counter::before {
                            position: absolute;
                            content: '';
                            bottom: -2rem;
                            left: 50%;
                            width: 40%;
                            height: .1rem;
                            background:transparent;
                            transform: translateX(-50%);
                        }
                        .counter .count {
                            font-size: 5rem;
                            margin-bottom: 1rem;
                            font-family: 'Cabinet Grotesk', sans-serif;
                            font-weight: 300;
                            color: rgb(56, 56, 56);
                            transition: 0.3s ease-in-out;
                        }
                        .counter .count:hover{
                            color: rgb(105, 66, 177);
                            cursor:none;
                        }
                    
                        .counter .counts {
                            font-size: 5rem;
                            margin-bottom: 1rem;
                            font-family: 'Cabinet Grotesk', sans-serif;
                            font-weight: 300;
                            color: rgb(56, 56, 56);
                            transition: 0.3s ease-in-out;
                        }
                        .counter .counts:hover{
                            color: rgb(105, 66, 177);
                            cursor:none;
                        }
                        .counter .counts::after {
                            content: "+";
                        }
                        .counter p {
                            font-size: 1.4rem;
                            font-family: 'Cabinet Grotesk', sans-serif;
                            font-weight: 700;
                        }
                        @media(max-width: 991px) {
                            .counter-wrapper {
                                font-size: 55%;
                            }
                        }
                        @media(max-width: 768px) {
                            .counter-wrapper {
                                grid-template-columns: repeat(2, 1fr);
                                grid-row-gap: 8rem;
                            }
                        }
                        @media(max-width: 450px) {
                            .counter-wrapper {
                                grid-template-columns: 1fr;
                            }
                        }
                    </style>
                    
                    <script>
                        // Intersection Observer logic
                        const counters = document.querySelectorAll('.count');
                        const speed = 10;
                    
                        const updateCounter = (counter) => {
                            function upData() {
                                const target = Number(counter.getAttribute('data-target'));
                                const count = Number(counter.innerText);
                                const inc = target / speed;
                                if (count < target) {
                                    counter.innerText = Math.floor(inc + count);
                                    setTimeout(upData, 1);
                                } else {
                                    counter.innerText = target;
                                }
                            }
                            upData();
                        };
                    
                        // Intersection Observer
                        const observer = new IntersectionObserver((entries, observer) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    // Start counting when the counter is visible
                                    updateCounter(entry.target);
                                    observer.unobserve(entry.target); // Stop observing the element after it has counted
                                }
                            });
                        }, {
                            threshold: 0.5 // Trigger when 50% of the element is in view
                        });
                    
                        counters.forEach(counter => { style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px"
                            observer.observe(counter); // Observe each counter element
                        });
                    </script>
		</section>
				</div>
				<div data-elementor-type="twbb_footer" data-elementor-id="52469" class="elementor elementor-52469">
					<div class="elementor-element elementor-element-v46o2wma e-con-boxed twbb_section e-flex e-con e-parent" data-id="v46o2wma" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="e-con-inner">
			<div class="elementor-element elementor-element-w5sm7oae e-con-full e-flex e-con e-parent" data-id="w5sm7oae" data-element_type="container">
			<div class="elementor-element elementor-element-z6clui55 e-con-full e-flex e-con e-parent" data-id="z6clui55" data-element_type="container">
					<div class="elementor-element elementor-element-b7comzg9 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image" data-id="b7comzg9" data-element_type="widget" data-widget_type="image.default">
					<div class="elementor-widget-container">
															<a href="/index.html">
								<img  src="/logo insta invert.webp"  style="height: 150px;" class="attachment-full size-full wp-image-52403" alt="Credita finance a website for Financial services providing loans,overdraft facilities for a comparitively lower rate ,we provide loans, advances,overdraft,overdraft to salaried person,financial consultancy,credit,and are affiliated with so many banks like bajaj finserv,kotak,axis bank,hdfc,icici,aditya birla,and so many more. this is the logo of this website" />								</a>
														</div>
					</div>
					</div>
			<div class="elementor-element elementor-element-xufy7x0s e-con-full e-flex e-con e-parent" data-id="xufy7x0s" data-element_type="container">
					<div class="elementor-element elementor-element-8gt5cdi0 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="8gt5cdi0" data-element_type="widget" data-widget_type="heading.default">
					<div class="elementor-widget-container">
				<h5 class="elementor-heading-title elementor-size-default" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 300;font-size:35px">Company</h5>		</div>
					</div>
					<div class="elementor-element elementor-element-yjbxa1v5 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb-nav-menu__align-left twbb-nav-menu__align-mobile-center twbb-nav-menu--indicator-classic elementor-widget elementor-widget-twbb-nav-menu" data-id="yjbxa1v5" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;vertical&quot;,&quot;menu-columns&quot;:&quot;1&quot;,&quot;menu-columns_tablet&quot;:&quot;1&quot;,&quot;menu-columns_mobile&quot;:&quot;1&quot;}" data-widget_type="twbb-nav-menu.default">
					<div class="elementor-widget-container">
					  <nav class="twbb-nav-menu--main twbb-nav-menu__container twbb-nav-menu--layout-vertical e--pointer-none"><ul id="menu-1-yjbxa1v5" class="twbb-nav-menu twbb-menu_term_id-5827 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52460"><a href="/about us.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">About Us</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52461"><a href="/services.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Services</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52462"><a href="/testimonials.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Testimonials</a></li>
	</ul></nav>
			<nav class="twbb-nav-menu--dropdown twbb-nav-menu__container"><ul id="menu-2-yjbxa1v5" class="twbb-nav-menu twbb-menu_term_id-5827 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52460"><a href="/about us.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">About Us</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52461"><a href="/services.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Services</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52462"><a href="/testimonials.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Testimonials</a></li>
	</ul></nav>
			  <style>
					</style>
				</div>
					</div>
					</div>
			<div class="elementor-element elementor-element-ovsolvyo e-con-full e-flex e-con e-parent" data-id="ovsolvyo" data-element_type="container">
					<div class="elementor-element elementor-element-izto6l60 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="izto6l60" data-element_type="widget" data-widget_type="heading.default">
					<div class="elementor-widget-container">
				<h5 class="elementor-heading-title elementor-size-default" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 300;font-size:35px">Resources</h5>		</div>
					</div>
					<div class="elementor-element elementor-element-ijq0q3y0 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb-nav-menu__align-left twbb-nav-menu__align-mobile-center twbb-nav-menu--indicator-classic elementor-widget elementor-widget-twbb-nav-menu" data-id="ijq0q3y0" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;vertical&quot;,&quot;menu-columns&quot;:&quot;1&quot;,&quot;menu-columns_tablet&quot;:&quot;1&quot;,&quot;menu-columns_mobile&quot;:&quot;1&quot;}" data-widget_type="twbb-nav-menu.default">
					<div class="elementor-widget-container">
					  <nav class="twbb-nav-menu--main twbb-nav-menu__container twbb-nav-menu--layout-vertical e--pointer-none"><ul id="menu-1-ijq0q3y0" class="twbb-nav-menu twbb-menu_term_id-5828 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52463"><a href="/faq.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Faqs</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52464"><a href="/blog.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Blog</a></li>
	</ul></nav>
			<nav class="twbb-nav-menu--dropdown twbb-nav-menu__container"><ul id="menu-2-ijq0q3y0" class="twbb-nav-menu twbb-menu_term_id-5828 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52463"><a href="/faq.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Faqs</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-post_type menu-item-object-page menu-item-52464"><a href="/blog.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Blog</a></li>
	</ul></nav>
			  <style>
					</style>
				</div>
					</div>
					</div>
			<div class="elementor-element elementor-element-5dvtys30 e-con-full e-flex e-con e-parent" data-id="5dvtys30" data-element_type="container">
					<div class="elementor-element elementor-element-658aw4fe elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="658aw4fe" data-element_type="widget" data-widget_type="heading.default">
					<div class="elementor-widget-container">
				<h5 class="elementor-heading-title elementor-size-default" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 300;font-size:35px">Support</h5>		</div>
					</div>
					<div class="elementor-element elementor-element-jyolslu7 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb-nav-menu__align-left twbb-nav-menu__align-mobile-center twbb-nav-menu--indicator-classic elementor-widget elementor-widget-twbb-nav-menu" data-id="jyolslu7" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;vertical&quot;,&quot;menu-columns&quot;:&quot;1&quot;,&quot;menu-columns_tablet&quot;:&quot;1&quot;,&quot;menu-columns_mobile&quot;:&quot;1&quot;}" data-widget_type="twbb-nav-menu.default">
					<div class="elementor-widget-container">
					  <nav class="twbb-nav-menu--main twbb-nav-menu__container twbb-nav-menu--layout-vertical e--pointer-none"><ul id="menu-1-jyolslu7" class="twbb-nav-menu twbb-menu_term_id-5829 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52465"><a href="/contact us.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Contact Us</a></li>
						<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52465"><a href="/sitemap.xml" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Sitemap</a></li>
	</ul></nav>
			<nav class="twbb-nav-menu--dropdown twbb-nav-menu__container"><ul id="menu-2-jyolslu7" class="twbb-nav-menu twbb-menu_term_id-5829 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52465"><a href="/contact us.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Contact Us</a></li>
				<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52465"><a href="/sitemap.xml" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500; font-size:20px">Sitemap</a></li>
	</ul></nav>
			  <style>
					</style>
				</div>
					</div>
					</div>
					<style>
						.footer-button{
							transition: 0.3s ease-in-out;
						}
						.footer-button:hover{
							color: rgb(105, 66, 177);
							cursor:none;
						}
					</style>
			<div class="elementor-element elementor-element-iv1lms55 e-con-full e-flex e-con e-parent" data-id="iv1lms55" data-element_type="container">
					<div class="elementor-element elementor-element-l6v427t7 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-mobile-button-align-stretch elementor-button-align-center elementor-widget elementor-widget-twbb_form" data-id="l6v427t7" data-element_type="widget" data-settings="{&quot;button_width&quot;:&quot;30&quot;,&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="twbb_form.default">
					<div class="elementor-widget-container">
						<form class="elementor-form" method="post" name="Subscribe to Our Newsletter" >
				<input type="hidden" name="post_id" value="52469"/>
				<input type="hidden" name="form_id" value="l6v427t7"/>
				<input type="hidden" name="referer_title" value="Home" />
	
								<input type="hidden" name="queried_id" value="52449"/>
				
				<div class="elementor-form-fields-wrapper elementor-labels-">
							  <div class="elementor-form-title-description-wrapper elementor-field-group elementor-column elementor-col-100 elementor-widget-wrap elementor-widget-heading">
				<h5 class="elementor-form-title elementor-element elementor-heading-title elementor-size-large" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 300;font-size: 30px;">For More Information</h5>    <div class="elementor-text-editor elementor-clearfix elementor-element" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500;">Stay updated with the latest news and offers from Credita Finance.</div>
				  </div>
							  <div class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-66 elementor-field-required">
													<label for="form-field-email" class="elementor-field-label elementor-screen-only">
									Email							</label>
															<input size="1" type="email" name="form_fields[email]" id="form-field-email" class="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Enter your email" required="required" aria-required="true">
												</div>
									<div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-30 e-form__buttons">
						<button type="submit" class="elementor-button">
							<span >
																<span class=" elementor-button-icon">
																											</span>
																							<span class="elementor-button-text" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500;">Submit
	
																							</span>
														</span>
						</button>
			  <button type="reset" class="elementor-button elementor-hidden">
							<span >
																	  </span>
			  </button>
					</div>
							</div>
			</form>
					</div>
					</div>
					</div>
					</div>
					<div class="elementor-element elementor-element-5ssw8kc9 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="5ssw8kc9" data-element_type="widget" data-widget_type="divider.default">
					<div class="elementor-widget-container">
						<div class="elementor-divider">
				<span class="elementor-divider-separator">
							</span>
			</div>
					</div>
					</div>
			<div class="elementor-element elementor-element-09ulil8z e-con-full e-flex e-con e-parent" data-id="09ulil8z" data-element_type="container">
					<div class="elementor-element elementor-element-l02oi653 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="l02oi653" data-element_type="widget" data-widget_type="text-editor.default">
					<div class="elementor-widget-container" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500;">
								© 2024 Credita Finance. All rights reserved.<br>
								© Website Created by: Mayank Sharma.					</div>
					</div>
					<div class="elementor-element elementor-element-cmjdgy7g elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit twbb-nav-menu__align-left twbb-nav-menu__align-mobile-center twbb-nav-menu--indicator-classic elementor-widget elementor-widget-twbb-nav-menu" data-id="cmjdgy7g" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;vertical&quot;,&quot;menu-columns&quot;:2,&quot;menu-columns_mobile&quot;:1,&quot;menu-columns_tablet&quot;:&quot;1&quot;}" data-widget_type="twbb-nav-menu.default">
					<div class="elementor-widget-container">
					  <nav class="twbb-nav-menu--main twbb-nav-menu__container twbb-nav-menu--layout-vertical e--pointer-none"><ul id="menu-1-cmjdgy7g" class="twbb-nav-menu twbb-menu_term_id-5830 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52466"><a href="/terms of services.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500;">Terms Of Service</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52467"><a href="/privacy policy.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500;">Privacy Policy</a></li>
	</ul></nav>
			<nav class="twbb-nav-menu--dropdown twbb-nav-menu__container"><ul id="menu-2-cmjdgy7g" class="twbb-nav-menu twbb-menu_term_id-5830 sm-vertical twbb-menu-columns"><li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52466"><a href="/terms of services.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500;">Terms Of Service</a></li>
	<li class="a:1:{i:0;s:0:&quot;&quot;;} menu-item menu-item-type-custom menu-item-object-custom menu-item-52467"><a href="/privacy policy.html" class="twbb-item footer-button" style="font-family: 'Cabinet-Grotesk'sans-serif;font-weight: 500;">Privacy Policy</a></li>
	</ul></nav>
			  <style>
					</style>
				</div>
					</div>
					<div class="elementor-element elementor-element-nshgwd2f elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit e-grid-align-right e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="nshgwd2f" data-element_type="widget" data-widget_type="social-icons.default">
					<div class="elementor-widget-container">
						<div class="elementor-social-icons-wrapper elementor-grid">
								<span class="elementor-grid-item">
						<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-" target="_blank">
							<span class="elementor-screen-only footer-button"><a href="https://www.facebook.com/people/Credita-Finance/61555786479468/?mibextid=zOiqff"><img src="/photos/facebook.webp"  alt="Connect with credita finance on facebook for financial insights, loan tips, and updates on personal, home, business loans,overdraft facility and much more services." style="height: 22px;"></a></span>
							<i class="fab fa-facebook"></i>					</a>
					</span>
								<span class="elementor-grid-item">
						<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-" target="_blank">
							<span class="elementor-screen-only footer-button"><a href="https://www.instagram.com/credita.finance/"><img src="/photos/insta.webp"alt="Follow credita finance on instagram for expert financial advice, tips on loans, and update on personal, home, business loans, and much more services." style="height:22px;"></a></span>
							<i class="fab fa-linkedin"></i>					</a>
					</span>
								<span class="elementor-grid-item">
						<a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-" target="_blank">
							<span class="elementor-screen-only footer-button"><a href="https://x.com/creditafinance"><img src="/photos/twitter.webp"alt="Stay updated with credita finance on twitter for financial news, expert advice,and tips on loans, savings and investments." style="height: 22px;"></a></span>
							<i class="fab fa-twitter"></i>					</a>
					</span>
						</div>
					</div>
					</div>
					</div>
						</div>
					</div>
					</div>
			<script type='text/javascript'>
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
	<link rel='stylesheet' id='twbb-domain-connect-style-css' href='https://10web-site.ai/128/wp-content/plugins/tenweb-builder/Apps/PreviewUpgrade/assets/style/domain_connect.css?ver=1.21.14' type='text/css' media='all' />
<link rel='stylesheet' id='tbdemo-main-css' href='https://10web-site.ai/128/wp-content/plugins/ai-builder-demo-plugin/assets/css/main.css?ver=1.9.5' type='text/css' media='all' />
<link rel='stylesheet' id='wc-blocks-style-css' href='https://10web-site.ai/128/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=11.8.0-dev' type='text/css' media='all' />
<link rel='stylesheet' id='twbb-preview-upgrade-style-css' href='https://10web-site.ai/128/wp-content/plugins/tenweb-builder/Apps/PreviewUpgrade/assets/style/preview_upgrade.css?ver=1.21.14' type='text/css' media='all' />
<link rel='stylesheet' id='tbdemo-kit-css' href='https://10web-site.ai/128/wp-content/plugins/ai-builder-demo-plugin/PreviewKit/assets/style/style.css?ver=1.9.5' type='text/css' media='all' />
<link rel='stylesheet' id='twbb-theme-customize-style-css' href='https://10web-site.ai/128/wp-content/plugins/tenweb-builder/Apps/ThemeCustomize/assets/style/theme-customize.css?ver=1.21.14' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-5-all-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.21.6' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-4-shim-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.21.6' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-52469-css' href='https://10web-site.ai/128/wp-content/uploads/sites/140/elementor/css/post-52469.css?ver=1726570041' type='text/css' media='all' />
<link rel='stylesheet' id='e-animations-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.21.6' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-brands-css' href='https://10web-site.ai/128/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3' type='text/css' media='all' />
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.21.6" id="elementor-webpack-runtime-js"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.21.6" id="elementor-frontend-modules-js"></script>
<script type="text/javascript" id="elementor-frontend-js-before">
/* <![CDATA[ */
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.21.6","is_static":false,"experimentalFeatures":{"e_optimized_assets_loading":true,"container":true,"e_swiper_latest":true,"container_grid":true,"home_screen":true,"ai-layout":true,"fast_editing_tools":true,"sections_generation":true},"urls":{"assets":"https:\/\/10web-site.ai\/128\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","body_background_background":"classic","woocommerce_notices_elements":[]},"post":{"id":52449,"title":"Home","excerpt":"","featuredImage":false}};
/* ]]> */
</script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.21.6" id="elementor-frontend-js"></script>
<script type="text/javascript" id="twbb-pro-features-frontend-script-js-extra">
/* <![CDATA[ */
var ElementorTenwebFrontendConfig = {"ajaxurl":"https:\/\/10web-site.ai\/128\/wp-admin\/admin-ajax.php","nonce":"bfad336f3b","urls":{"assets":"https:\/\/10web-site.ai\/128\/wp-content\/plugins\/tenweb-builder\/pro-features\/assets\/"},"woocommerce":{"menu_cart":{"cart_page_url":"https:\/\/10web-site.ai\/128\/shining-bream\/\/cart\/","checkout_page_url":"https:\/\/10web-site.ai\/128\/shining-bream\/\/checkout\/","fragments_nonce":"642f5a6cc0"}}};
/* ]]> */
</script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-content/plugins/tenweb-builder/pro-features/assets/js/concated_frontend.min.js?ver=1.21.14" id="twbb-pro-features-frontend-script-js"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-includes/js/underscore.min.js?ver=1.13.4" id="underscore-js"></script>
<script type="text/javascript" src="https://10web-site.ai/128/wp-includes/js/masonry.min.js?ver=4.2.2" id="masonry-js"></script>




<script>
	document.addEventListener('DOMContentLoaded', function() {
	  const menuToggle = document.querySelector('.twbb-menu-toggle');
	  const dropdownMenu = document.querySelector('.twbb-nav-menu--dropdown');
  
	  menuToggle.addEventListener('click', function() {
		const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
		menuToggle.setAttribute('aria-expanded', !isExpanded);
		dropdownMenu.classList.toggle('twbb-nav-menu__container--open');
	  });
	});
  </script>
	
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5u+4n-dg+7q"
     data-ad-client="ca-pub-9300854302659927"
     data-ad-slot="3737106666"></ins>

</body>
</html>

    `;
    res.send(html);
});

module.exports = app;