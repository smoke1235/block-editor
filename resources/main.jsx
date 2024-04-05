import "../resources/scss/dashicons.scss";
import "../resources/scss/laraberg.scss"
import "../resources/scss/extra.scss"
import "../resources/scss/peter.scss"
import "../resources/scss/media-views.scss";
import BlockEditor from "../resources/js/laraberg"



var styles = [
    "<link rel='stylesheet' id='dashicons-css' href='https://wp.smokenetwork.nl/wp-includes/css/dashicons.min.css?ver=6.4.3' media='all' />",
    "<link rel='stylesheet' id='wp-components-css' href='https://wp.smokenetwork.nl/wp-content/plugins/gutenberg/build/components/style.css?ver=17.8.0' media='all' />",
    "<link rel='stylesheet' id='wp-block-library-css' href='https://wp.smokenetwork.nl/wp-content/plugins/gutenberg/build/block-library/style.css?ver=17.8.0' media='all' />",
    '<style>.is-style-arrow-icon-details{padding-top:var(--wp--preset--spacing--10);padding-bottom:var(--wp--preset--spacing--10)}.is-style-pill a,.is-style-pill span:not([class],[data-rich-text-placeholder]){display:inline-block;background-color:var(--wp--preset--color--base-2);padding:.375rem .875rem;border-radius:var(--wp--preset--spacing--20)}.is-style-pill a:hover{background-color:var(--wp--preset--color--contrast-3)}ul.is-style-checkmark-list li{padding-inline-start:1ch}.is-style-arrow-link .wp-block-navigation-item__label:after{padding-inline-start:0.25rem;vertical-align:middle;text-decoration:none;display:inline-block}.is-style-asterisk:before{content:"";width:1.5rem;height:3rem;background:var(--wp--preset--color--contrast-2,currentColor);clip-path:path("M11.93.684v8.039l5.633-5.633 1.216 1.23-5.66 5.66h8.04v1.737H13.2l5.701 5.701-1.23 1.23-5.742-5.742V21h-1.737v-8.094l-5.77 5.77-1.23-1.217 5.743-5.742H.842V9.98h8.162l-5.701-5.7 1.23-1.231 5.66 5.66V.684h1.737Z");display:block}.is-style-asterisk:empty:before{content:none}.is-style-asterisk:-moz-only-whitespace:before{content:none}.is-style-asterisk.has-text-align-center:before{margin:0 auto}.is-style-asterisk.has-text-align-right:before{margin-left:auto}.rtl .is-style-asterisk.has-text-align-left:before{margin-right:auto}</style>',
    "<link rel='stylesheet' id='wp-patterns-css' href='https://wp.smokenetwork.nl/wp-content/plugins/gutenberg/build/patterns/style.css?ver=17.8.0' media='all' />",
    "<link rel='stylesheet' id='wp-reusable-blocks-css' href='https://wp.smokenetwork.nl/wp-content/plugins/gutenberg/build/reusable-blocks/style.css?ver=17.8.0' media='all' />",
    "<link rel='stylesheet' id='wp-block-editor-content-css' href='https://wp.smokenetwork.nl/wp-content/plugins/gutenberg/build/block-editor/content.css?ver=17.8.0' media='all' />",
    "<link rel='stylesheet' id='wp-edit-blocks-css' href='https://wp.smokenetwork.nl/wp-content/plugins/gutenberg/build/block-library/editor.css?ver=17.8.0' media='all' />",
    "<link rel='stylesheet' id='twentytwentyfour-button-style-outline-css' href='https://wp.smokenetwork.nl/wp-content/themes/twentytwentyfour/assets/css/button-outline.css?ver=1.0' media='all' />",



    //"<link rel='stylesheet' id='wp-components-css' href='https:/wp.smokenetwork.nl/wp-includes/css/dist/components/style.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='wp-block-editor-css' href='https://wp.smokenetwork.nl/wp-includes/css/dist/block-editor/style.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='wp-reusable-blocks-css' href='https://wp.smokenetwork.nl/wp-includes/css/dist/reusable-blocks/style.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='wp-patterns-css' href='https://wp.smokenetwork.nl/wp-includes/css/dist/patterns/style.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='wp-editor-css' href='https://wp.smokenetwork.nl/wp-includes/css/dist/editor/style.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='wp-block-library-css' href='https://wp.smokenetwork.nl/wp-includes/css/dist/block-library/style.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='wp-block-editor-content-css' href='https://wp.smokenetwork.nl/wp-includes/css/dist/block-editor/content.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='wp-edit-blocks-css' href='https://wp.smokenetwork.nl/wp-includes/css/dist/block-library/editor.min.css?ver=6.4.3' media='all' />",
    //"<link rel='stylesheet' id='twentytwentyfour-button-style-outline-css' href='https://wp.smokenetwork.nl/wp-content/themes/twentytwentyfour/assets/css/button-outline.css?ver=1.0' media='all' />",
];

var scripts = [
    "<script src='/js/wp-polyfill-inert.js'></script>",
    "<script src='/js/regenerator-runtime.js'></script>",
    "<script src='/js/wp-polyfill.js'></script>"
];

var stylesStrings = styles.join("");
var scriptsStrings = scripts.join("");

const init = BlockEditor.init;
const wp = BlockEditor.wordpress;

const settings = 
{
  
    "titlePlaceholder": "Add title",
    "bodyPlaceholder": "Type / to choose a block",
  "defaultEditorStyles": [{
      "css": ":root{\n  --wp-admin-theme-color:#007cba;\n  --wp-admin-theme-color--rgb:0, 124, 186;\n  --wp-admin-theme-color-darker-10:#006ba1;\n  --wp-admin-theme-color-darker-10--rgb:0, 107, 161;\n  --wp-admin-theme-color-darker-20:#005a87;\n  --wp-admin-theme-color-darker-20--rgb:0, 90, 135;\n  --wp-admin-border-width-focus:2px;\n  --wp-block-synced-color:#7a00df;\n  --wp-block-synced-color--rgb:122, 0, 223;\n}\n@media (min-resolution:192dpi){\n  :root{\n    --wp-admin-border-width-focus:1.5px;\n  }\n}\nbody{\n  --wp--style--block-gap:2em;\n  font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;\n  font-size:18px;\n  line-height:1.5;\n}\n\np{\n  line-height:1.8;\n}\n\n.editor-post-title__block{\n  font-size:2.5em;\n  font-weight:800;\n  margin-bottom:1em;\n  margin-top:2em;\n}"
  }],
 
  
  
 
  
  /*"availableTemplates": {
      "": "Default template",
      "page-wide": "Page with wide Image",
      "page-with-sidebar": "Page With Sidebar",
      "page-no-title": "Page No Title"
  },*/
  
  
  /*"postLockUtils": {
      "nonce": "99d7c7f87c",
      "unlockNonce": "8ae9307af1",
      "ajaxUrl": "https:\/\/wp.smokenetwork.nl\/wp-admin\/admin-ajax.php"
  },*/
  
  
  /*"defaultTemplatePartAreas": [{
      "area": "uncategorized",
      "label": "General",
      "description": "General templates often perform a specific role like displaying post content, and are not tied to any particular area.",
      "icon": "layout",
      "area_tag": "div"
  }, {
      "area": "header",
      "label": "Header",
      "description": "The Header template defines a page area that typically contains a title, logo, and main navigation.",
      "icon": "header",
      "area_tag": "header"
  }, {
      "area": "footer",
      "label": "Footer",
      "description": "The Footer template defines a page area that typically contains site credits, social links, or any other combination of blocks.",
      "icon": "footer",
      "area_tag": "footer"
  }],*/
  "styles": [{
      "css": "body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--base: #f9f9f9;--wp--preset--color--base-2: #ffffff;--wp--preset--color--contrast: #111111;--wp--preset--color--contrast-2: #636363;--wp--preset--color--contrast-3: #A4A4A4;--wp--preset--color--accent: #cfcabe;--wp--preset--color--accent-2: #c2a990;--wp--preset--color--accent-3: #d8613c;--wp--preset--color--accent-4: #b1c5a4;--wp--preset--color--accent-5: #b5bdbc;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--gradient--gradient-1: linear-gradient(to bottom, #cfcabe 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-2: linear-gradient(to bottom, #C2A990 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-3: linear-gradient(to bottom, #D8613C 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-4: linear-gradient(to bottom, #B1C5A4 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-5: linear-gradient(to bottom, #B5BDBC 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-6: linear-gradient(to bottom, #A4A4A4 0%, #F9F9F9 100%);--wp--preset--gradient--gradient-7: linear-gradient(to bottom, #cfcabe 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-8: linear-gradient(to bottom, #C2A990 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-9: linear-gradient(to bottom, #D8613C 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-10: linear-gradient(to bottom, #B1C5A4 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-11: linear-gradient(to bottom, #B5BDBC 50%, #F9F9F9 50%);--wp--preset--gradient--gradient-12: linear-gradient(to bottom, #A4A4A4 50%, #F9F9F9 50%);--wp--preset--font-size--small: 0.9rem;--wp--preset--font-size--medium: 1.05rem;--wp--preset--font-size--large: clamp(1.39rem, 1.39rem + ((1vw - 0.2rem) * 0.767), 1.85rem);--wp--preset--font-size--x-large: clamp(1.85rem, 1.85rem + ((1vw - 0.2rem) * 1.083), 2.5rem);--wp--preset--font-size--xx-large: clamp(2.5rem, 2.5rem + ((1vw - 0.2rem) * 1.283), 3.27rem);--wp--preset--font-family--body: \"Inter\", sans-serif;--wp--preset--font-family--heading: Cardo;--wp--preset--font-family--system-sans-serif: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;--wp--preset--font-family--system-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;--wp--preset--spacing--10: 1rem;--wp--preset--spacing--20: min(1.5rem, 2vw);--wp--preset--spacing--30: min(2.5rem, 3vw);--wp--preset--spacing--40: min(4rem, 5vw);--wp--preset--spacing--50: min(6.5rem, 8vw);--wp--preset--spacing--60: min(10.5rem, 13vw);--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}",
      "__unstableType": "presets",
      "isGlobalStyles": true
  }, {
      "css": ".has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-base-color{color: var(--wp--preset--color--base) !important;}.has-base-2-color{color: var(--wp--preset--color--base-2) !important;}.has-contrast-color{color: var(--wp--preset--color--contrast) !important;}.has-contrast-2-color{color: var(--wp--preset--color--contrast-2) !important;}.has-contrast-3-color{color: var(--wp--preset--color--contrast-3) !important;}.has-accent-color{color: var(--wp--preset--color--accent) !important;}.has-accent-2-color{color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-color{color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-color{color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-color{color: var(--wp--preset--color--accent-5) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-base-background-color{background-color: var(--wp--preset--color--base) !important;}.has-base-2-background-color{background-color: var(--wp--preset--color--base-2) !important;}.has-contrast-background-color{background-color: var(--wp--preset--color--contrast) !important;}.has-contrast-2-background-color{background-color: var(--wp--preset--color--contrast-2) !important;}.has-contrast-3-background-color{background-color: var(--wp--preset--color--contrast-3) !important;}.has-accent-background-color{background-color: var(--wp--preset--color--accent) !important;}.has-accent-2-background-color{background-color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-background-color{background-color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-background-color{background-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-background-color{background-color: var(--wp--preset--color--accent-5) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-base-border-color{border-color: var(--wp--preset--color--base) !important;}.has-base-2-border-color{border-color: var(--wp--preset--color--base-2) !important;}.has-contrast-border-color{border-color: var(--wp--preset--color--contrast) !important;}.has-contrast-2-border-color{border-color: var(--wp--preset--color--contrast-2) !important;}.has-contrast-3-border-color{border-color: var(--wp--preset--color--contrast-3) !important;}.has-accent-border-color{border-color: var(--wp--preset--color--accent) !important;}.has-accent-2-border-color{border-color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-border-color{border-color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-border-color{border-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-border-color{border-color: var(--wp--preset--color--accent-5) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-gradient-1-gradient-background{background: var(--wp--preset--gradient--gradient-1) !important;}.has-gradient-2-gradient-background{background: var(--wp--preset--gradient--gradient-2) !important;}.has-gradient-3-gradient-background{background: var(--wp--preset--gradient--gradient-3) !important;}.has-gradient-4-gradient-background{background: var(--wp--preset--gradient--gradient-4) !important;}.has-gradient-5-gradient-background{background: var(--wp--preset--gradient--gradient-5) !important;}.has-gradient-6-gradient-background{background: var(--wp--preset--gradient--gradient-6) !important;}.has-gradient-7-gradient-background{background: var(--wp--preset--gradient--gradient-7) !important;}.has-gradient-8-gradient-background{background: var(--wp--preset--gradient--gradient-8) !important;}.has-gradient-9-gradient-background{background: var(--wp--preset--gradient--gradient-9) !important;}.has-gradient-10-gradient-background{background: var(--wp--preset--gradient--gradient-10) !important;}.has-gradient-11-gradient-background{background: var(--wp--preset--gradient--gradient-11) !important;}.has-gradient-12-gradient-background{background: var(--wp--preset--gradient--gradient-12) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-xx-large-font-size{font-size: var(--wp--preset--font-size--xx-large) !important;}.has-body-font-family{font-family: var(--wp--preset--font-family--body) !important;}.has-heading-font-family{font-family: var(--wp--preset--font-family--heading) !important;}.has-system-sans-serif-font-family{font-family: var(--wp--preset--font-family--system-sans-serif) !important;}.has-system-serif-font-family{font-family: var(--wp--preset--font-family--system-serif) !important;}",
      "__unstableType": "presets",
      "isGlobalStyles": true
  }, {
      "css": "body { margin: 0;--wp--style--global--content-size: 620px;--wp--style--global--wide-size: 1280px; }.wp-site-blocks { padding-top: var(--wp--style--root--padding-top); padding-bottom: var(--wp--style--root--padding-bottom); }.has-global-padding { padding-right: var(--wp--style--root--padding-right); padding-left: var(--wp--style--root--padding-left); }.has-global-padding :where(.has-global-padding:not(.wp-block-block)) { padding-right: 0; padding-left: 0; }.has-global-padding > .alignfull { margin-right: calc(var(--wp--style--root--padding-right) * -1); margin-left: calc(var(--wp--style--root--padding-left) * -1); }.has-global-padding :where(.has-global-padding:not(.wp-block-block)) > .alignfull { margin-right: 0; margin-left: 0; }.has-global-padding > .alignfull:where(:not(.has-global-padding):not(.is-layout-flex):not(.is-layout-grid)) > :where([class*=\"wp-block-\"]:not(.alignfull):not([class*=\"__\"]),p,h1,h2,h3,h4,h5,h6,ul,ol) { padding-right: var(--wp--style--root--padding-right); padding-left: var(--wp--style--root--padding-left); }.has-global-padding :where(.has-global-padding) > .alignfull:where(:not(.has-global-padding)) > :where([class*=\"wp-block-\"]:not(.alignfull):not([class*=\"__\"]),p,h1,h2,h3,h4,h5,h6,ul,ol) { padding-right: 0; padding-left: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 1.2rem; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child:first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child:last-child { margin-block-end: 0; }body { --wp--style--block-gap: 1.2rem; }:where(body .is-layout-flow)  > :first-child:first-child{margin-block-start: 0;}:where(body .is-layout-flow)  > :last-child:last-child{margin-block-end: 0;}:where(body .is-layout-flow)  > *{margin-block-start: 1.2rem;margin-block-end: 0;}:where(body .is-layout-constrained)  > :first-child:first-child{margin-block-start: 0;}:where(body .is-layout-constrained)  > :last-child:last-child{margin-block-end: 0;}:where(body .is-layout-constrained)  > *{margin-block-start: 1.2rem;margin-block-end: 0;}:where(body .is-layout-flex) {gap: 1.2rem;}:where(body .is-layout-grid) {gap: 1.2rem;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}body{background-color: var(--wp--preset--color--base);color: var(--wp--preset--color--contrast);font-family: var(--wp--preset--font-family--body);font-size: var(--wp--preset--font-size--medium);font-style: normal;font-weight: 400;line-height: 1.55;--wp--style--root--padding-top: 0px;--wp--style--root--padding-right: var(--wp--preset--spacing--50);--wp--style--root--padding-bottom: 0px;--wp--style--root--padding-left: var(--wp--preset--spacing--50);}a:where(:not(.wp-element-button)){color: var(--wp--preset--color--contrast);text-decoration: underline;}a:where(:not(.wp-element-button)):hover{text-decoration: none;}h1, h2, h3, h4, h5, h6{color: var(--wp--preset--color--contrast);font-family: var(--wp--preset--font-family--heading);font-weight: 400;line-height: 1.2;}h1{font-size: var(--wp--preset--font-size--xx-large);line-height: 1.15;}h2{font-size: var(--wp--preset--font-size--x-large);}h3{font-size: var(--wp--preset--font-size--large);}h4{font-size: clamp(1.1rem, 1.1rem + ((1vw - 0.2rem) * 0.767), 1.5rem);}h5{font-size: var(--wp--preset--font-size--medium);}h6{font-size: var(--wp--preset--font-size--small);}.wp-element-button, .wp-block-button__link{background-color: var(--wp--preset--color--contrast);border-radius: .33rem;border-color: var(--wp--preset--color--contrast);border-width: 0;color: var(--wp--preset--color--base);font-family: inherit;font-size: var(--wp--preset--font-size--small);font-style: normal;font-weight: 500;line-height: inherit;padding-top: 0.6rem;padding-right: 1rem;padding-bottom: 0.6rem;padding-left: 1rem;text-decoration: none;}.wp-element-button:hover, .wp-block-button__link:hover{background-color: var(--wp--preset--color--contrast-2);border-color: var(--wp--preset--color--contrast-2);color: var(--wp--preset--color--base);}.wp-element-button:focus, .wp-block-button__link:focus{background-color: var(--wp--preset--color--contrast-2);border-color: var(--wp--preset--color--contrast-2);color: var(--wp--preset--color--base);outline-color: var(--wp--preset--color--contrast);outline-offset: 2px;outline-style: dotted;outline-width: 1px;}.wp-element-button:active, .wp-block-button__link:active{background-color: var(--wp--preset--color--contrast);color: var(--wp--preset--color--base);}.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption{color: var(--wp--preset--color--contrast-2);font-family: var(--wp--preset--font-family--body);font-size: 0.8rem;}.wp-block-navigation{font-weight: 500;}.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;text-decoration: none;}.wp-block-navigation a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-pullquote{border-radius: var(--wp--preset--spacing--20);font-family: var(--wp--preset--font-family--heading);font-size: var(--wp--preset--font-size--x-large);font-style: italic;font-weight: 400;letter-spacing: 0em;line-height: 1.5;padding-top: var(--wp--preset--spacing--40);padding-bottom: var(--wp--preset--spacing--40);}.wp-block-pullquote cite{font-family: var(--wp--preset--font-family--body);font-size: var(--wp--preset--font-size--medium);font-style: normal;}.wp-block-avatar img{border-radius: 90px;}.is-style-outline.is-style-outline.wp-block-button .wp-block-button__link{border-width: 1px;padding-top: calc(0.6rem - 1px);padding-right: calc(1rem - 1px);padding-bottom: calc(0.6rem - 1px);padding-left: calc(1rem - 1px);}.wp-block-buttons-is-layout-flow > :first-child:first-child{margin-block-start: 0;}.wp-block-buttons-is-layout-flow > :last-child:last-child{margin-block-end: 0;}.wp-block-buttons-is-layout-flow > *{margin-block-start: 0.7rem;margin-block-end: 0;}.wp-block-buttons-is-layout-constrained > :first-child:first-child{margin-block-start: 0;}.wp-block-buttons-is-layout-constrained > :last-child:last-child{margin-block-end: 0;}.wp-block-buttons-is-layout-constrained > *{margin-block-start: 0.7rem;margin-block-end: 0;}.wp-block-buttons-is-layout-flex{gap: 0.7rem;}.wp-block-buttons-is-layout-grid{gap: 0.7rem;}.wp-block-calendar table, .wp-block-calendar th{color: var(--wp--preset--color--contrast);}.wp-block-categories{padding-right: 0px;padding-left: 0px;}.wp-block-code{background-color: var(--wp--preset--color--base-2);border-radius: var(--wp--preset--spacing--20);border-color: var(--wp--preset--color--contrast);color: var(--wp--preset--color--contrast-2);font-size: var(--wp--preset--font-size--medium);font-style: normal;font-weight: 400;line-height: 1.6;padding-top: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-right: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-bottom: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-left: calc(var(--wp--preset--spacing--30) + 0.75rem);}.wp-block-comment-author-name{color: var(--wp--preset--color--contrast);font-size: var(--wp--preset--font-size--small);font-style: normal;font-weight: 600;}.wp-block-comment-author-name a:where(:not(.wp-element-button)){color: var(--wp--preset--color--contrast);text-decoration: none;}.wp-block-comment-author-name a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-comment-content{font-size: var(--wp--preset--font-size--small);margin-top: var(--wp--preset--spacing--20);margin-bottom: var(--wp--preset--spacing--20);}.wp-block-comment-date{color: var(--wp--preset--color--contrast-2);font-size: var(--wp--preset--font-size--small);margin-top: 0px;margin-bottom: 0px;}.wp-block-comment-date a:where(:not(.wp-element-button)){color: var(--wp--preset--color--contrast-2);text-decoration: none;}.wp-block-comment-date a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-comment-edit-link{font-size: var(--wp--preset--font-size--small);}.wp-block-comment-edit-link a:where(:not(.wp-element-button)){color: var(--wp--preset--color--contrast-2);text-decoration: none;}.wp-block-comment-edit-link a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-comment-reply-link{font-size: var(--wp--preset--font-size--small);}.wp-block-comment-reply-link a:where(:not(.wp-element-button)){color: var(--wp--preset--color--contrast-2);text-decoration: none;}.wp-block-comment-reply-link a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-comments-pagination{font-size: var(--wp--preset--font-size--small);}.wp-block-comments-pagination-next{font-size: var(--wp--preset--font-size--small);}.wp-block-comments-pagination-numbers{font-size: var(--wp--preset--font-size--small);}.wp-block-comments-pagination-previous{font-size: var(--wp--preset--font-size--small);}.wp-block-footnotes{font-size: var(--wp--preset--font-size--small);}.wp-block-gallery{margin-bottom: var(--wp--preset--spacing--50);}.is-style-rounded.is-style-rounded.wp-block-image img,.is-style-rounded.is-style-rounded.wp-block-image  .wp-block-image__crop-area,.is-style-rounded.is-style-rounded.wp-block-image  .components-placeholder{border-radius: var(--wp--preset--spacing--20);}ol,ul{padding-left: var(--wp--preset--spacing--10);}.wp-block-post-author{font-size: var(--wp--preset--font-size--small);}.wp-block-post-author-name{font-size: var(--wp--preset--font-size--small);}.wp-block-post-author-name a:where(:not(.wp-element-button)){text-decoration: none;}.wp-block-post-author-name a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-post-date{color: var(--wp--preset--color--contrast-2);font-size: var(--wp--preset--font-size--small);}.wp-block-post-date a:where(:not(.wp-element-button)){color: var(--wp--preset--color--contrast-2);text-decoration: none;}.wp-block-post-date a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-post-excerpt{line-height: 1.6;}.wp-block-post-featured-image img, .wp-block-post-featured-image .block-editor-media-placeholder, .wp-block-post-featured-image .wp-block-post-featured-image__overlay{border-radius: var(--wp--preset--spacing--20);}.wp-block-post-terms{font-size: var(--wp--preset--font-size--small);}.wp-block-post-terms a:where(:not(.wp-element-button)){text-decoration: none;}.wp-block-post-terms a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-post-title a:where(:not(.wp-element-button)){text-decoration: none;}.wp-block-post-title a:where(:not(.wp-element-button)):hover{text-decoration: underline;}.wp-block-query-no-results{padding-top: var(--wp--preset--spacing--30);}.wp-block-quote{background-color: var(--wp--preset--color--base-2);border-radius: var(--wp--preset--spacing--20);font-family: var(--wp--preset--font-family--heading);font-size: var(--wp--preset--font-size--large);font-style: italic;line-height: 1.3;padding-top: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-right: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-bottom: calc(var(--wp--preset--spacing--30) + 0.75rem);padding-left: calc(var(--wp--preset--spacing--30) + 0.75rem);}.is-style-plain.is-style-plain.wp-block-quote{background-color: transparent;border-radius: 0;border-color: var(--wp--preset--color--contrast);border-width: 0;border-style: solid;font-family: var(--wp--preset--font-family--body);font-size: var(--wp--preset--font-size--medium);font-style: normal;line-height: 1.5;padding-top: var(--wp--preset--spacing--20);padding-right: var(--wp--preset--spacing--20);padding-bottom: var(--wp--preset--spacing--20);padding-left: var(--wp--preset--spacing--20);}.wp-block-quote cite{font-family: var(--wp--preset--font-family--body);font-size: var(--wp--preset--font-size--small);font-style: normal;}.wp-block-search .wp-block-search__label, .wp-block-search .wp-block-search__input, .wp-block-search .wp-block-search__button{font-size: var(--wp--preset--font-size--small);}.wp-block-search .wp-element-button,.wp-block-search  .wp-block-button__link{border-radius: .33rem;}.wp-block-separator{border-color: currentColor;border-width: 0 0 1px 0;border-style: solid;color: var(--wp--preset--color--contrast);}.wp-block-site-tagline{color: var(--wp--preset--color--contrast-2);font-size: var(--wp--preset--font-size--small);}.wp-block-site-title{font-family: var(--wp--preset--font-family--body);font-size: clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.542), 1.2rem);font-style: normal;font-weight: 600;}.wp-block-site-title a:where(:not(.wp-element-button)){text-decoration: none;}.wp-block-site-title a:where(:not(.wp-element-button)):hover{text-decoration: none;}",
      "__unstableType": "theme",
      "isGlobalStyles": true
  }, {
      "css": ".wp-block-calendar.wp-block-calendar table:where(:not(.has-text-color)) th{background-color:var(--wp--preset--color--contrast-2);color:var(--wp--preset--color--base);border-color:var(--wp--preset--color--contrast-2)}.wp-block-calendar table:where(:not(.has-text-color)) td{border-color:var(--wp--preset--color--contrast-2)}.wp-block-categories{}.wp-block-categories{list-style-type:none;}.wp-block-categories li{margin-bottom: 0.5rem;}.wp-block-post-comments-form{}.wp-block-post-comments-form textarea, .wp-block-post-comments-form input{border-radius:.33rem}.wp-block-loginout{}.wp-block-loginout input{border-radius:.33rem;padding:calc(0.667em + 2px);border:1px solid #949494;}.wp-block-post-terms{}.wp-block-post-terms .wp-block-post-terms__prefix{color: var(--wp--preset--color--contrast-2);}.wp-block-query-title{}.wp-block-query-title span{font-style: italic;}.wp-block-quote{}.wp-block-quote :where(p){margin-block-start:0;margin-block-end:calc(var(--wp--preset--spacing--10) + 0.5rem);}.wp-block-quote :where(:last-child){margin-block-end:0;}.wp-block-quote.has-text-align-right.is-style-plain, .rtl .is-style-plain.wp-block-quote:not(.has-text-align-center):not(.has-text-align-left){border-width: 0 2px 0 0;padding-left:calc(var(--wp--preset--spacing--20) + 0.5rem);padding-right:calc(var(--wp--preset--spacing--20) + 0.5rem);}.wp-block-quote.has-text-align-left.is-style-plain, body:not(.rtl) .is-style-plain.wp-block-quote:not(.has-text-align-center):not(.has-text-align-right){border-width: 0 0 0 2px;padding-left:calc(var(--wp--preset--spacing--20) + 0.5rem);padding-right:calc(var(--wp--preset--spacing--20) + 0.5rem)}.wp-block-search{}.wp-block-search .wp-block-search__input{border-radius:.33rem}.wp-block-separator{}.wp-block-separator:not(.is-style-wide):not(.is-style-dots):not(.alignwide):not(.alignfull){width: var(--wp--preset--spacing--60)}",
      "__unstableType": "user",
      "isGlobalStyles": true
  }, {
      "assets": "<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-dark-grayscale\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0 0.49803921568627\" \/><feFuncG type=\"table\" tableValues=\"0 0.49803921568627\" \/><feFuncB type=\"table\" tableValues=\"0 0.49803921568627\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-grayscale\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0 1\" \/><feFuncG type=\"table\" tableValues=\"0 1\" \/><feFuncB type=\"table\" tableValues=\"0 1\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-purple-yellow\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.54901960784314 0.98823529411765\" \/><feFuncG type=\"table\" tableValues=\"0 1\" \/><feFuncB type=\"table\" tableValues=\"0.71764705882353 0.25490196078431\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-blue-red\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0 1\" \/><feFuncG type=\"table\" tableValues=\"0 0.27843137254902\" \/><feFuncB type=\"table\" tableValues=\"0.5921568627451 0.27843137254902\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-midnight\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0 0\" \/><feFuncG type=\"table\" tableValues=\"0 0.64705882352941\" \/><feFuncB type=\"table\" tableValues=\"0 1\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-magenta-yellow\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.78039215686275 1\" \/><feFuncG type=\"table\" tableValues=\"0 0.94901960784314\" \/><feFuncB type=\"table\" tableValues=\"0.35294117647059 0.47058823529412\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-purple-green\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.65098039215686 0.40392156862745\" \/><feFuncG type=\"table\" tableValues=\"0 1\" \/><feFuncB type=\"table\" tableValues=\"0.44705882352941 0.4\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-blue-orange\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.098039215686275 1\" \/><feFuncG type=\"table\" tableValues=\"0 0.66274509803922\" \/><feFuncB type=\"table\" tableValues=\"0.84705882352941 0.41960784313725\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-duotone-1\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.066666666666667 1\" \/><feFuncG type=\"table\" tableValues=\"0.066666666666667 1\" \/><feFuncB type=\"table\" tableValues=\"0.066666666666667 1\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-duotone-2\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.066666666666667 0.76078431372549\" \/><feFuncG type=\"table\" tableValues=\"0.066666666666667 0.66274509803922\" \/><feFuncB type=\"table\" tableValues=\"0.066666666666667 0.56470588235294\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-duotone-3\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.066666666666667 0.84705882352941\" \/><feFuncG type=\"table\" tableValues=\"0.066666666666667 0.38039215686275\" \/><feFuncB type=\"table\" tableValues=\"0.066666666666667 0.23529411764706\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-duotone-4\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.066666666666667 0.69411764705882\" \/><feFuncG type=\"table\" tableValues=\"0.066666666666667 0.77254901960784\" \/><feFuncB type=\"table\" tableValues=\"0.066666666666667 0.64313725490196\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 0 0\" width=\"0\" height=\"0\" focusable=\"false\" role=\"none\" style=\"visibility: hidden; position: absolute; left: -9999px; overflow: hidden;\" ><defs><filter id=\"wp-duotone-duotone-5\"><feColorMatrix color-interpolation-filters=\"sRGB\" type=\"matrix\" values=\" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 \" \/><feComponentTransfer color-interpolation-filters=\"sRGB\" ><feFuncR type=\"table\" tableValues=\"0.066666666666667 0.70980392156863\" \/><feFuncG type=\"table\" tableValues=\"0.066666666666667 0.74117647058824\" \/><feFuncB type=\"table\" tableValues=\"0.066666666666667 0.73725490196078\" \/><feFuncA type=\"table\" tableValues=\"1 1\" \/><\/feComponentTransfer><feComposite in2=\"SourceGraphic\" operator=\"in\" \/><\/filter><\/defs><\/svg>",
      "__unstableType": "svgs",
      "isGlobalStyles": false
  }, {
      "css": "body{--wp--preset--duotone--dark-grayscale:url(#wp-duotone-dark-grayscale);--wp--preset--duotone--grayscale:url(#wp-duotone-grayscale);--wp--preset--duotone--purple-yellow:url(#wp-duotone-purple-yellow);--wp--preset--duotone--blue-red:url(#wp-duotone-blue-red);--wp--preset--duotone--midnight:url(#wp-duotone-midnight);--wp--preset--duotone--magenta-yellow:url(#wp-duotone-magenta-yellow);--wp--preset--duotone--purple-green:url(#wp-duotone-purple-green);--wp--preset--duotone--blue-orange:url(#wp-duotone-blue-orange);--wp--preset--duotone--duotone-1:url(#wp-duotone-duotone-1);--wp--preset--duotone--duotone-2:url(#wp-duotone-duotone-2);--wp--preset--duotone--duotone-3:url(#wp-duotone-duotone-3);--wp--preset--duotone--duotone-4:url(#wp-duotone-duotone-4);--wp--preset--duotone--duotone-5:url(#wp-duotone-duotone-5);}",
      "__unstableType": "presets",
      "isGlobalStyles": false
  }],
  "__experimentalFeatures": {
      "appearanceTools": false,
      "useRootPaddingAwareAlignments": true,
      "border": {
          "color": true,
          "radius": true,
          "style": true,
          "width": true
      },
      "color": {
          "background": true,
          "button": true,
          "caption": true,
          "customDuotone": true,
          "defaultDuotone": false,
          "defaultGradients": false,
          "defaultPalette": false,
          "duotone": {
              "default": [{
                  "name": "Dark grayscale",
                  "colors": ["#000000", "#7f7f7f"],
                  "slug": "dark-grayscale"
              }, {
                  "name": "Grayscale",
                  "colors": ["#000000", "#ffffff"],
                  "slug": "grayscale"
              }, {
                  "name": "Purple and yellow",
                  "colors": ["#8c00b7", "#fcff41"],
                  "slug": "purple-yellow"
              }, {
                  "name": "Blue and red",
                  "colors": ["#000097", "#ff4747"],
                  "slug": "blue-red"
              }, {
                  "name": "Midnight",
                  "colors": ["#000000", "#00a5ff"],
                  "slug": "midnight"
              }, {
                  "name": "Magenta and yellow",
                  "colors": ["#c7005a", "#fff278"],
                  "slug": "magenta-yellow"
              }, {
                  "name": "Purple and green",
                  "colors": ["#a60072", "#67ff66"],
                  "slug": "purple-green"
              }, {
                  "name": "Blue and orange",
                  "colors": ["#1900d8", "#ffa96b"],
                  "slug": "blue-orange"
              }],
              "theme": [{
                  "colors": ["#111111", "#ffffff"],
                  "slug": "duotone-1",
                  "name": "Black and white"
              }, {
                  "colors": ["#111111", "#C2A990"],
                  "slug": "duotone-2",
                  "name": "Black and sandstone"
              }, {
                  "colors": ["#111111", "#D8613C"],
                  "slug": "duotone-3",
                  "name": "Black and rust"
              }, {
                  "colors": ["#111111", "#B1C5A4"],
                  "slug": "duotone-4",
                  "name": "Black and sage"
              }, {
                  "colors": ["#111111", "#B5BDBC"],
                  "slug": "duotone-5",
                  "name": "Black and pastel blue"
              }]
          },
          "gradients": {
              "default": [{
                  "name": "Vivid cyan blue to vivid purple",
                  "gradient": "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
                  "slug": "vivid-cyan-blue-to-vivid-purple"
              }, {
                  "name": "Light green cyan to vivid green cyan",
                  "gradient": "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
                  "slug": "light-green-cyan-to-vivid-green-cyan"
              }, {
                  "name": "Luminous vivid amber to luminous vivid orange",
                  "gradient": "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
                  "slug": "luminous-vivid-amber-to-luminous-vivid-orange"
              }, {
                  "name": "Luminous vivid orange to vivid red",
                  "gradient": "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
                  "slug": "luminous-vivid-orange-to-vivid-red"
              }, {
                  "name": "Very light gray to cyan bluish gray",
                  "gradient": "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
                  "slug": "very-light-gray-to-cyan-bluish-gray"
              }, {
                  "name": "Cool to warm spectrum",
                  "gradient": "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
                  "slug": "cool-to-warm-spectrum"
              }, {
                  "name": "Blush light purple",
                  "gradient": "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
                  "slug": "blush-light-purple"
              }, {
                  "name": "Blush bordeaux",
                  "gradient": "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
                  "slug": "blush-bordeaux"
              }, {
                  "name": "Luminous dusk",
                  "gradient": "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
                  "slug": "luminous-dusk"
              }, {
                  "name": "Pale ocean",
                  "gradient": "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
                  "slug": "pale-ocean"
              }, {
                  "name": "Electric grass",
                  "gradient": "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
                  "slug": "electric-grass"
              }, {
                  "name": "Midnight",
                  "gradient": "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
                  "slug": "midnight"
              }],
              "theme": [{
                  "slug": "gradient-1",
                  "gradient": "linear-gradient(to bottom, #cfcabe 0%, #F9F9F9 100%)",
                  "name": "Vertical soft beige to white"
              }, {
                  "slug": "gradient-2",
                  "gradient": "linear-gradient(to bottom, #C2A990 0%, #F9F9F9 100%)",
                  "name": "Vertical soft sandstone to white"
              }, {
                  "slug": "gradient-3",
                  "gradient": "linear-gradient(to bottom, #D8613C 0%, #F9F9F9 100%)",
                  "name": "Vertical soft rust to white"
              }, {
                  "slug": "gradient-4",
                  "gradient": "linear-gradient(to bottom, #B1C5A4 0%, #F9F9F9 100%)",
                  "name": "Vertical soft sage to white"
              }, {
                  "slug": "gradient-5",
                  "gradient": "linear-gradient(to bottom, #B5BDBC 0%, #F9F9F9 100%)",
                  "name": "Vertical soft mint to white"
              }, {
                  "slug": "gradient-6",
                  "gradient": "linear-gradient(to bottom, #A4A4A4 0%, #F9F9F9 100%)",
                  "name": "Vertical soft pewter to white"
              }, {
                  "slug": "gradient-7",
                  "gradient": "linear-gradient(to bottom, #cfcabe 50%, #F9F9F9 50%)",
                  "name": "Vertical hard beige to white"
              }, {
                  "slug": "gradient-8",
                  "gradient": "linear-gradient(to bottom, #C2A990 50%, #F9F9F9 50%)",
                  "name": "Vertical hard sandstone to white"
              }, {
                  "slug": "gradient-9",
                  "gradient": "linear-gradient(to bottom, #D8613C 50%, #F9F9F9 50%)",
                  "name": "Vertical hard rust to white"
              }, {
                  "slug": "gradient-10",
                  "gradient": "linear-gradient(to bottom, #B1C5A4 50%, #F9F9F9 50%)",
                  "name": "Vertical hard sage to white"
              }, {
                  "slug": "gradient-11",
                  "gradient": "linear-gradient(to bottom, #B5BDBC 50%, #F9F9F9 50%)",
                  "name": "Vertical hard mint to white"
              }, {
                  "slug": "gradient-12",
                  "gradient": "linear-gradient(to bottom, #A4A4A4 50%, #F9F9F9 50%)",
                  "name": "Vertical hard pewter to white"
              }]
          },
          "heading": true,
          "link": true,
          "palette": {
              "default": [{
                  "name": "Black",
                  "slug": "black",
                  "color": "#000000"
              }, {
                  "name": "Cyan bluish gray",
                  "slug": "cyan-bluish-gray",
                  "color": "#abb8c3"
              }, {
                  "name": "White",
                  "slug": "white",
                  "color": "#ffffff"
              }, {
                  "name": "Pale pink",
                  "slug": "pale-pink",
                  "color": "#f78da7"
              }, {
                  "name": "Vivid red",
                  "slug": "vivid-red",
                  "color": "#cf2e2e"
              }, {
                  "name": "Luminous vivid orange",
                  "slug": "luminous-vivid-orange",
                  "color": "#ff6900"
              }, {
                  "name": "Luminous vivid amber",
                  "slug": "luminous-vivid-amber",
                  "color": "#fcb900"
              }, {
                  "name": "Light green cyan",
                  "slug": "light-green-cyan",
                  "color": "#7bdcb5"
              }, {
                  "name": "Vivid green cyan",
                  "slug": "vivid-green-cyan",
                  "color": "#00d084"
              }, {
                  "name": "Pale cyan blue",
                  "slug": "pale-cyan-blue",
                  "color": "#8ed1fc"
              }, {
                  "name": "Vivid cyan blue",
                  "slug": "vivid-cyan-blue",
                  "color": "#0693e3"
              }, {
                  "name": "Vivid purple",
                  "slug": "vivid-purple",
                  "color": "#9b51e0"
              }],
              "theme": [{
                  "color": "#f9f9f9",
                  "name": "Base",
                  "slug": "base"
              }, {
                  "color": "#ffffff",
                  "name": "Base \/ Two",
                  "slug": "base-2"
              }, {
                  "color": "#111111",
                  "name": "Contrast",
                  "slug": "contrast"
              }, {
                  "color": "#636363",
                  "name": "Contrast \/ Two",
                  "slug": "contrast-2"
              }, {
                  "color": "#A4A4A4",
                  "name": "Contrast \/ Three",
                  "slug": "contrast-3"
              }, {
                  "color": "#cfcabe",
                  "name": "Accent",
                  "slug": "accent"
              }, {
                  "color": "#c2a990",
                  "name": "Accent \/ Two",
                  "slug": "accent-2"
              }, {
                  "color": "#d8613c",
                  "name": "Accent \/ Three",
                  "slug": "accent-3"
              }, {
                  "color": "#b1c5a4",
                  "name": "Accent \/ Four",
                  "slug": "accent-4"
              }, {
                  "color": "#b5bdbc",
                  "name": "Accent \/ Five",
                  "slug": "accent-5"
              }]
          },
          "text": true
      },
      "shadow": {
          "defaultPresets": true,
          "presets": {
              "default": [{
                  "name": "Natural",
                  "slug": "natural",
                  "shadow": "6px 6px 9px rgba(0, 0, 0, 0.2)"
              }, {
                  "name": "Deep",
                  "slug": "deep",
                  "shadow": "12px 12px 50px rgba(0, 0, 0, 0.4)"
              }, {
                  "name": "Sharp",
                  "slug": "sharp",
                  "shadow": "6px 6px 0px rgba(0, 0, 0, 0.2)"
              }, {
                  "name": "Outlined",
                  "slug": "outlined",
                  "shadow": "6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)"
              }, {
                  "name": "Crisp",
                  "slug": "crisp",
                  "shadow": "6px 6px 0px rgba(0, 0, 0, 1)"
              }]
          }
      },
      "spacing": {
          "blockGap": true,
          "margin": true,
          "spacingScale": {
              "operator": "*",
              "increment": 1.5,
              "steps": 0,
              "mediumStep": 1.5,
              "unit": "rem"
          },
          "spacingSizes": {
              "theme": [{
                  "name": "1",
                  "size": "1rem",
                  "slug": "10"
              }, {
                  "name": "2",
                  "size": "min(1.5rem, 2vw)",
                  "slug": "20"
              }, {
                  "name": "3",
                  "size": "min(2.5rem, 3vw)",
                  "slug": "30"
              }, {
                  "name": "4",
                  "size": "min(4rem, 5vw)",
                  "slug": "40"
              }, {
                  "name": "5",
                  "size": "min(6.5rem, 8vw)",
                  "slug": "50"
              }, {
                  "name": "6",
                  "size": "min(10.5rem, 13vw)",
                  "slug": "60"
              }]
          }
      },
      "typography": {
          "dropCap": true,
          "fontSizes": {
              "default": [{
                  "name": "Small",
                  "slug": "small",
                  "size": "13px"
              }, {
                  "name": "Medium",
                  "slug": "medium",
                  "size": "20px"
              }, {
                  "name": "Large",
                  "slug": "large",
                  "size": "36px"
              }, {
                  "name": "Extra Large",
                  "slug": "x-large",
                  "size": "42px"
              }],
              "theme": [{
                  "fluid": false,
                  "name": "Small",
                  "size": "0.9rem",
                  "slug": "small"
              }, {
                  "fluid": false,
                  "name": "Medium",
                  "size": "1.05rem",
                  "slug": "medium"
              }, {
                  "fluid": {
                      "min": "1.39rem",
                      "max": "1.85rem"
                  },
                  "name": "Large",
                  "size": "1.85rem",
                  "slug": "large"
              }, {
                  "fluid": {
                      "min": "1.85rem",
                      "max": "2.5rem"
                  },
                  "name": "Extra Large",
                  "size": "2.5rem",
                  "slug": "x-large"
              }, {
                  "fluid": {
                      "min": "2.5rem",
                      "max": "3.27rem"
                  },
                  "name": "Extra Extra Large",
                  "size": "3.27rem",
                  "slug": "xx-large"
              }]
          },
          "fontStyle": true,
          "fontWeight": true,
          "letterSpacing": true,
          "textDecoration": true,
          "textTransform": true,
          "writingMode": true,
          "fluid": true,
          "fontFamilies": {
              "theme": [{
                  "fontFace": [{
                      "fontFamily": "Inter",
                      "fontStretch": "normal",
                      "fontStyle": "normal",
                      "fontWeight": "300 900",
                      "src": ["file:.\/assets\/fonts\/inter\/Inter-VariableFont_slnt,wght.woff2"]
                  }],
                  "fontFamily": "\"Inter\", sans-serif",
                  "name": "Inter",
                  "slug": "body"
              }, {
                  "fontFace": [{
                      "fontFamily": "Cardo",
                      "fontStyle": "normal",
                      "fontWeight": "400",
                      "src": ["file:.\/assets\/fonts\/cardo\/cardo_normal_400.woff2"]
                  }, {
                      "fontFamily": "Cardo",
                      "fontStyle": "italic",
                      "fontWeight": "400",
                      "src": ["file:.\/assets\/fonts\/cardo\/cardo_italic_400.woff2"]
                  }, {
                      "fontFamily": "Cardo",
                      "fontStyle": "normal",
                      "fontWeight": "700",
                      "src": ["file:.\/assets\/fonts\/cardo\/cardo_normal_700.woff2"]
                  }],
                  "fontFamily": "Cardo",
                  "name": "Cardo",
                  "slug": "heading"
              }, {
                  "fontFamily": "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
                  "name": "System Sans-serif",
                  "slug": "system-sans-serif"
              }, {
                  "fontFamily": "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                  "name": "System Serif",
                  "slug": "system-Serif"
              }]
          }
      },
      "blocks": {
          "core\/button": {
              "border": {
                  "radius": true
              }
          },
          "core\/image": {
              "lightbox": {
                  "allowEditing": true
              }
          },
          "core\/pullquote": {
              "border": {
                  "color": true,
                  "radius": true,
                  "style": true,
                  "width": true
              }
          }
      },
      "layout": {
          "contentSize": "620px",
          "wideSize": "1280px"
      },
      "background": {
          "backgroundImage": true
      },
      "dimensions": {
          "minHeight": true
      },
      "position": {
          "sticky": true
      }
  },
  "colors": [{
      "color": "#f9f9f9",
      "name": "Base",
      "slug": "base"
  }, {
      "color": "#ffffff",
      "name": "Base \/ Two",
      "slug": "base-2"
  }, {
      "color": "#111111",
      "name": "Contrast",
      "slug": "contrast"
  }, {
      "color": "#636363",
      "name": "Contrast \/ Two",
      "slug": "contrast-2"
  }, {
      "color": "#A4A4A4",
      "name": "Contrast \/ Three",
      "slug": "contrast-3"
  }, {
      "color": "#cfcabe",
      "name": "Accent",
      "slug": "accent"
  }, {
      "color": "#c2a990",
      "name": "Accent \/ Two",
      "slug": "accent-2"
  }, {
      "color": "#d8613c",
      "name": "Accent \/ Three",
      "slug": "accent-3"
  }, {
      "color": "#b1c5a4",
      "name": "Accent \/ Four",
      "slug": "accent-4"
  }, {
      "color": "#b5bdbc",
      "name": "Accent \/ Five",
      "slug": "accent-5"
  }],
  "gradients": [{
      "slug": "gradient-1",
      "gradient": "linear-gradient(to bottom, #cfcabe 0%, #F9F9F9 100%)",
      "name": "Vertical soft beige to white"
  }, {
      "slug": "gradient-2",
      "gradient": "linear-gradient(to bottom, #C2A990 0%, #F9F9F9 100%)",
      "name": "Vertical soft sandstone to white"
  }, {
      "slug": "gradient-3",
      "gradient": "linear-gradient(to bottom, #D8613C 0%, #F9F9F9 100%)",
      "name": "Vertical soft rust to white"
  }, {
      "slug": "gradient-4",
      "gradient": "linear-gradient(to bottom, #B1C5A4 0%, #F9F9F9 100%)",
      "name": "Vertical soft sage to white"
  }, {
      "slug": "gradient-5",
      "gradient": "linear-gradient(to bottom, #B5BDBC 0%, #F9F9F9 100%)",
      "name": "Vertical soft mint to white"
  }, {
      "slug": "gradient-6",
      "gradient": "linear-gradient(to bottom, #A4A4A4 0%, #F9F9F9 100%)",
      "name": "Vertical soft pewter to white"
  }, {
      "slug": "gradient-7",
      "gradient": "linear-gradient(to bottom, #cfcabe 50%, #F9F9F9 50%)",
      "name": "Vertical hard beige to white"
  }, {
      "slug": "gradient-8",
      "gradient": "linear-gradient(to bottom, #C2A990 50%, #F9F9F9 50%)",
      "name": "Vertical hard sandstone to white"
  }, {
      "slug": "gradient-9",
      "gradient": "linear-gradient(to bottom, #D8613C 50%, #F9F9F9 50%)",
      "name": "Vertical hard rust to white"
  }, {
      "slug": "gradient-10",
      "gradient": "linear-gradient(to bottom, #B1C5A4 50%, #F9F9F9 50%)",
      "name": "Vertical hard sage to white"
  }, {
      "slug": "gradient-11",
      "gradient": "linear-gradient(to bottom, #B5BDBC 50%, #F9F9F9 50%)",
      "name": "Vertical hard mint to white"
  }, {
      "slug": "gradient-12",
      "gradient": "linear-gradient(to bottom, #A4A4A4 50%, #F9F9F9 50%)",
      "name": "Vertical hard pewter to white"
  }],
  "fontSizes": [{
      "fluid": false,
      "name": "Small",
      "size": "0.9rem",
      "slug": "small"
  }, {
      "fluid": false,
      "name": "Medium",
      "size": "1.05rem",
      "slug": "medium"
  }, {
      "fluid": {
          "min": "1.39rem",
          "max": "1.85rem"
      },
      "name": "Large",
      "size": "1.85rem",
      "slug": "large"
  }, {
      "fluid": {
          "min": "1.85rem",
          "max": "2.5rem"
      },
      "name": "Extra Large",
      "size": "2.5rem",
      "slug": "x-large"
  }, {
      "fluid": {
          "min": "2.5rem",
          "max": "3.27rem"
      },
      "name": "Extra Extra Large",
      "size": "3.27rem",
      "slug": "xx-large"
  }],

  
  /*"__unstableResolvedAssets": {
      "styles": "<link rel='stylesheet' id='wp-components-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/components\/style.min.css?ver=6.4.3' media='all' \/>\n<link rel='stylesheet' id='wp-block-editor-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/block-editor\/style.min.css?ver=6.4.3' media='all' \/>\n<link rel='stylesheet' id='wp-reusable-blocks-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/reusable-blocks\/style.min.css?ver=6.4.3' media='all' \/>\n<link rel='stylesheet' id='wp-patterns-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/patterns\/style.min.css?ver=6.4.3' media='all' \/>\n<link rel='stylesheet' id='wp-editor-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/editor\/style.min.css?ver=6.4.3' media='all' \/>\n<link rel='stylesheet' id='wp-block-library-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/block-library\/style.min.css?ver=6.4.3' media='all' \/>\n<style id='wp-block-library-inline-css'>\n\n\t\t\t\t.is-style-arrow-icon-details {\n\t\t\t\t\tpadding-top: var(--wp--preset--spacing--10);\n\t\t\t\t\tpadding-bottom: var(--wp--preset--spacing--10);\n\t\t\t\t}\n\n\t\t\t\t.is-style-arrow-icon-details summary {\n\t\t\t\t\tlist-style-type: \"\\2193\\00a0\\00a0\\00a0\";\n\t\t\t\t}\n\n\t\t\t\t.is-style-arrow-icon-details[open]>summary {\n\t\t\t\t\tlist-style-type: \"\\2192\\00a0\\00a0\\00a0\";\n\t\t\t\t}\n\n\t\t\t\t.is-style-pill a,\n\t\t\t\t.is-style-pill span:not([class], [data-rich-text-placeholder]) {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tbackground-color: var(--wp--preset--color--base-2);\n\t\t\t\t\tpadding: 0.375rem 0.875rem;\n\t\t\t\t\tborder-radius: var(--wp--preset--spacing--20);\n\t\t\t\t}\n\n\t\t\t\t.is-style-pill a:hover {\n\t\t\t\t\tbackground-color: var(--wp--preset--color--contrast-3);\n\t\t\t\t}\n\n\t\t\t\tul.is-style-checkmark-list {\n\t\t\t\t\tlist-style-type: \"\\2713\";\n\t\t\t\t}\n\n\t\t\t\tul.is-style-checkmark-list li {\n\t\t\t\t\tpadding-inline-start: 1ch;\n\t\t\t\t}\n\n\t\t\t\t.is-style-arrow-link .wp-block-navigation-item__label:after {\n\t\t\t\t\tcontent: \"\\2197\";\n\t\t\t\t\tpadding-inline-start: 0.25rem;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\n\t\t\t\t.is-style-asterisk:before {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\twidth: 1.5rem;\n\t\t\t\t\theight: 3rem;\n\t\t\t\t\tbackground: var(--wp--preset--color--contrast-2, currentColor);\n\t\t\t\t\tclip-path: path('M11.93.684v8.039l5.633-5.633 1.216 1.23-5.66 5.66h8.04v1.737H13.2l5.701 5.701-1.23 1.23-5.742-5.742V21h-1.737v-8.094l-5.77 5.77-1.23-1.217 5.743-5.742H.842V9.98h8.162l-5.701-5.7 1.23-1.231 5.66 5.66V.684h1.737Z');\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\n\t\t\t\t\/* Hide the asterisk if the heading has no content, to avoid using empty headings to display the asterisk only, which is an A11Y issue *\/\n\t\t\t\t.is-style-asterisk:empty:before {\n\t\t\t\t\tcontent: none;\n\t\t\t\t}\n\n\t\t\t\t.is-style-asterisk:-moz-only-whitespace:before {\n\t\t\t\t\tcontent: none;\n\t\t\t\t}\n\n\t\t\t\t.is-style-asterisk.has-text-align-center:before {\n\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t}\n\n\t\t\t\t.is-style-asterisk.has-text-align-right:before {\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t}\n\n\t\t\t\t.rtl .is-style-asterisk.has-text-align-left:before {\n\t\t\t\t\tmargin-right: auto;\n\t\t\t\t}\n<\/style>\n<link rel='stylesheet' id='wp-block-editor-content-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/block-editor\/content.min.css?ver=6.4.3' media='all' \/>\n<link rel='stylesheet' id='wp-edit-blocks-css' href='https:\/\/wp.smokenetwork.nl\/wp-includes\/css\/dist\/block-library\/editor.min.css?ver=6.4.3' media='all' \/>\n<link rel='stylesheet' id='twentytwentyfour-button-style-outline-css' href='https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/css\/button-outline.css?ver=1.0' media='all' \/>\n<style id='wp-fonts-local'>\n@font-face{font-family:Inter;font-style:normal;font-weight:300 900;font-display:fallback;src:url('https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/fonts\/inter\/Inter-VariableFont_slnt,wght.woff2') format('woff2');font-stretch:normal;}\n@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:fallback;src:url('https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/fonts\/cardo\/cardo_normal_400.woff2') format('woff2');}\n@font-face{font-family:Cardo;font-style:italic;font-weight:400;font-display:fallback;src:url('https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/fonts\/cardo\/cardo_italic_400.woff2') format('woff2');}\n@font-face{font-family:Cardo;font-style:normal;font-weight:700;font-display:fallback;src:url('https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/fonts\/cardo\/cardo_normal_700.woff2') format('woff2');}\n<\/style>\n",
      "scripts": "<script src='https:\/\/wp.smokenetwork.nl\/wp-admin\/load-scripts.php?c=0&amp;load%5Bchunk_0%5D=wp-polyfill-inert,regenerator-runtime,wp-polyfill&amp;ver=6.4.3'><\/script>\n"
  },*/

  "__unstableResolvedAssets": {
    styles: stylesStrings,
    scripts: scriptsStrings
  },
  
  "__experimentalDiscussionSettings": {
      "commentOrder": "asc",
      "commentsPerPage": "50",
      "defaultCommentsPage": "newest",
      "pageComments": "0",
      "threadComments": "1",
      "threadCommentsDepth": "5",
      "defaultCommentStatus": "open",
      "avatarURL": "https:\/\/secure.gravatar.com\/avatar\/?s=96&d=mm&f=y&r=g"
  },
  "postContentAttributes": {
      "lock": {
          "move": false,
          "remove": true
      },
      "layout": {
          "type": "constrained"
      }
  }
}










init("contentEditor", "page", 1, settings);
