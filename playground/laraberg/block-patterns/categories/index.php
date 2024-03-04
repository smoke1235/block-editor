<?php

header('Content-Type: application/json; charset=utf-8');

$data = '[
    {
        "name": "banner",
        "label": "Banners"
    },
    {
        "name": "buttons",
        "label": "Buttons",
        "description": "Patterns that contain buttons and call to actions."
    },
    {
        "name": "columns",
        "label": "Columns",
        "description": "Multi-column patterns with more complex layouts."
    },
    {
        "name": "text",
        "label": "Text",
        "description": "Patterns containing mostly text."
    },
    {
        "name": "query",
        "label": "Posts",
        "description": "Display your latest posts in lists, grids or other layouts."
    },
    {
        "name": "featured",
        "label": "Featured",
        "description": "A set of high quality curated patterns."
    },
    {
        "name": "call-to-action",
        "label": "Call to Action",
        "description": "Sections whose purpose is to trigger a specific action."
    },
    {
        "name": "team",
        "label": "Team",
        "description": "A variety of designs to display your team members."
    },
    {
        "name": "testimonials",
        "label": "Testimonials",
        "description": "Share reviews and feedback about your brand\/business."
    },
    {
        "name": "services",
        "label": "Services",
        "description": "Briefly describe what your business does and how you can help."
    },
    {
        "name": "contact",
        "label": "Contact",
        "description": "Display your contact information."
    },
    {
        "name": "about",
        "label": "About",
        "description": "Introduce yourself."
    },
    {
        "name": "portfolio",
        "label": "Portfolio",
        "description": "Showcase your latest work."
    },
    {
        "name": "gallery",
        "label": "Gallery",
        "description": "Different layouts for displaying images."
    },
    {
        "name": "media",
        "label": "Media",
        "description": "Different layouts containing video or audio."
    },
    {
        "name": "posts",
        "label": "Posts",
        "description": "Display your latest posts in lists, grids or other layouts."
    },
    {
        "name": "footer",
        "label": "Footers",
        "description": "A variety of footer designs displaying information and site navigation."
    },
    {
        "name": "header",
        "label": "Headers",
        "description": "A variety of header designs displaying your site title and navigation."
    },
    {
        "name": "page",
        "label": "Pages",
        "description": "A collection of full page layouts."
    }
]';

echo $data;