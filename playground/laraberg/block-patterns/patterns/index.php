<?php

header('Content-Type: application/json; charset=utf-8');



$data = '[

  {
        "name": "twentytwentyfour\/banner-hero",
        "title": "Hero",
        "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"\",\"wideSize\":\"\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"565px\"}} -->\n\t<div class=\"wp-block-group\">\n\n\t\t<!-- wp:heading {\"textAlign\":\"center\",\"fontSize\":\"x-large\",\"level\":1} -->\n\t\t<h1 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">A commitment to innovation and sustainability<\/h1>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:spacer {\"height\":\"1.25rem\"} -->\n\t\t<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t<p class=\"has-text-align-center\">\u00c9tudes is a pioneering firm that seamlessly merges creativity and functionality to redefine architectural excellence.<\/p>\n\t\t<!-- \/wp:paragraph -->\n\n\t\t<!-- wp:spacer {\"height\":\"1.25rem\"} -->\n\t\t<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n\t\t<div class=\"wp-block-buttons\">\n\t\t\t<!-- wp:button -->\n\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">About us<\/a>\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:button -->\n\t\t<\/div>\n\t\t<!-- \/wp:buttons -->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|30\",\"style\":{\"layout\":[]}} -->\n\t<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:image {\"align\":\"wide\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t<figure class=\"wp-block-image alignwide size-full is-style-rounded\">\n\t\t<img src=\"https:\/\/bh.smokenetwork.nl\/blockeditor\/images\/building-exterior.webp\" alt=\"Building exterior in Toronto, Canada\" \/>\n\t<\/figure>\n\t<!-- \/wp:image -->\n<\/div>\n<!-- \/wp:group -->\n",
        "description": "",
        "viewport_width": 1400,
        "categories": [
            "banner",
            "call-to-action",
            "featured"
        ]
    }
  
  ]';
  

echo $data;

