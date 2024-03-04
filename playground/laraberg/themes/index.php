<?php

header('Content-Type: application/json; charset=utf-8');

$data = '[
    {
        "stylesheet": "twentytwentyfour",
        "template": "twentytwentyfour",
        "requires_php": "7.0",
        "requires_wp": "6.4",
        "textdomain": "twentytwentyfour",
        "version": "1.0",
        "screenshot": "",
        "author": {
            "raw": "the WordPress team",
            "rendered": ""
        },
        "author_uri": {
            "raw": "",
            "rendered": ""
        },
        "description": {
            "raw": "Twenty Twenty-Four is designed to be flexible, versatile and applicable to any website. Its collection of templates and patterns tailor to different needs, such as presenting a business, blogging and writing or showcasing work. A multitude of possibilities open up with just a few adjustments to color and typography. Twenty Twenty-Four comes with style variations and full page designs to help speed up the site building process, is fully compatible with the site editor, and takes advantage of new design tools introduced in WordPress 6.4.",
            "rendered": "Twenty Twenty-Four is designed to be flexible, versatile and applicable to any website. Its collection of templates and patterns tailor to different needs, such as presenting a business, blogging and writing or showcasing work. A multitude of possibilities open up with just a few adjustments to color and typography. Twenty Twenty-Four comes with style variations and full page designs to help speed up the site building process, is fully compatible with the site editor, and takes advantage of new design tools introduced in WordPress 6.4."
        },
        "name": {
            "raw": "Twenty Twenty-Four",
            "rendered": "Twenty Twenty-Four"
        },
        "tags": {
            "raw": [
                "one-column",
                "custom-colors",
                "custom-menu",
                "custom-logo",
                "editor-style",
                "featured-images",
                "full-site-editing",
                "block-patterns",
                "rtl-language-support",
                "sticky-post",
                "threaded-comments",
                "translation-ready",
                "wide-blocks",
                "block-styles",
                "style-variations",
                "accessibility-ready",
                "blog",
                "portfolio",
                "news"
            ],
            "rendered": "one-column, custom-colors, custom-menu, custom-logo, editor-style, featured-images, full-site-editing, block-patterns, rtl-language-support, sticky-post, threaded-comments, translation-ready, wide-blocks, block-styles, style-variations, accessibility-ready, blog, portfolio, news"
        },
        "theme_uri": {
            "raw": "",
            "rendered": ""
        },
        "status": "active",
        "theme_supports": {
            "align-wide": false,
            "automatic-feed-links": true,
            "block-templates": true,
            "block-template-parts": false,
            "custom-background": false,
            "custom-header": false,
            "custom-logo": false,
            "customize-selective-refresh-widgets": false,
            "dark-editor-style": false,
            "disable-custom-colors": false,
            "disable-custom-font-sizes": false,
            "disable-custom-gradients": false,
            "disable-layout-styles": false,
            "editor-color-palette": false,
            "editor-font-sizes": false,
            "editor-gradient-presets": false,
            "editor-styles": true,
            "html5": [
                "comment-form",
                "comment-list",
                "search-form",
                "gallery",
                "caption",
                "style",
                "script"
            ],
            "formats": [
                "standard"
            ],
            "post-thumbnails": true,
            "responsive-embeds": true,
            "title-tag": false,
            "wp-block-styles": false
        },
        "is_block_theme": true,
        
    }
]';

echo $data;
