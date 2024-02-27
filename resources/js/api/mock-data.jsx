// Mock data to get the Gutenberg editor to work

export const media = {
  headers: {
    get: value => {
      if (value === 'allow') {
        return ['POST']
      }
    }
  }
}

export const page = {
  id: 1,
  content: {
    raw: '',
    rendered: ''
  },
  title: {
    raw: 'Preview page',
    rendered: 'Preview page'
  },
  excerpt: {
    raw: '',
    rendered: ''
  },
  status: 'pending',
  revisions: { count: 0, last_id: 0 },
  parent: 0,
  theme_style: true,
  type: 'page',
  link: `${window.location.origin}/preview`,
  categories: [],
  featured_media: 0,
  permalink_template: `${window.location.origin}/preview`,
  preview_link: `${window.location.origin}/preview`,
  _links: {
    'wp:action-assign-categories': [],
    'wp:action-create-categories': []
  },
  // functions
  setContent: (content) => {
    page.content = {
      raw: content
    }
  }
}

export const themes = [{
  theme_supports: {
    formats: [
      'standard',
      'aside',
      'image',
      'video',
      'quote',
      'link',
      'gallery',
      'audio'
    ],
    'post-thumbnails': true,
    'responsive-embeds': true
  }
}]

export const types = {
  page: {
    id: 1,
    labels: {
      singular_name: 'Page'
    },
    name: 'Page',
    rest_base: 'pages',
    slug: 'page',
    supports: {
      author: false,
      comments: false, // hide discussion-panel
      'custom-fields': true,
      editor: true,
      excerpt: false,
      discussion: false,
      'page-attributes': false, // hide page-attributes panel
      revisions: false,
      thumbnail: false, // featured-image panel
      title: false // show title on editor
    },
    taxonomies: [],
    viewable: false,
    saveable: false,
    publishable: false,
    autosaveable: false
  },
  block: {
    capabilities: {},
    labels: {
      singular_name: 'Block'
    },
    name: 'Blocks',
    rest_base: 'blocks',
    slug: 'wp_block',
    description: '',
    hierarchical: false,
    supports: {
      title: true,
      editor: true
    },
    viewable: true
  }
}

export const user = {
  id: 1,
  name: 'Laraberg',
  url: '',
  description: '',
  link: 'https://demo.wp-api.org/author/laraberg/',
  slug: 'laraberg',
  avatar_urls: {
    24: 'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=24&d=mm&r=g',
    48: 'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=48&d=mm&r=g',
    96: 'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=96&d=mm&r=g'
  },
  meta: [],
  _links: {
    self: [],
    collection: []
  }
}


export const blockPatternsCategories = [
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
]


export const blockPatterns = [
  {
      "name": "core\/query-standard-posts",
      "title": "Standard",
      "content": "<!-- wp:query {\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false}} -->\n\t\t\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t\t<!-- wp:post-template -->\n\t\t\t\t\t<!-- wp:post-title {\"isLink\":true} \/-->\n\t\t\t\t\t<!-- wp:post-featured-image {\"isLink\":true,\"align\":\"wide\"} \/-->\n\t\t\t\t\t<!-- wp:post-excerpt \/-->\n\t\t\t\t\t<!-- wp:separator -->\n\t\t\t\t\t<hr class=\"wp-block-separator\"\/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\t\t\t\t\t<!-- wp:post-date \/-->\n\t\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:query -->",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "core"
  },
  {
      "name": "core\/query-medium-posts",
      "title": "Image at left",
      "content": "<!-- wp:query {\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false}} -->\n\t\t\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t\t<!-- wp:post-template -->\n\t\t\t\t\t<!-- wp:columns {\"align\":\"wide\"} -->\n\t\t\t\t\t<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"66.66%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:66.66%\"><!-- wp:post-featured-image {\"isLink\":true} \/--><\/div>\n\t\t\t\t\t<!-- \/wp:column -->\n\t\t\t\t\t<!-- wp:column {\"width\":\"33.33%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:33.33%\"><!-- wp:post-title {\"isLink\":true} \/-->\n\t\t\t\t\t<!-- wp:post-excerpt \/--><\/div>\n\t\t\t\t\t<!-- \/wp:column --><\/div>\n\t\t\t\t\t<!-- \/wp:columns -->\n\t\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:query -->",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "core"
  },
  {
      "name": "core\/query-small-posts",
      "title": "Small image and title",
      "content": "<!-- wp:query {\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false}} -->\n\t\t\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t\t<!-- wp:post-template -->\n\t\t\t\t\t<!-- wp:columns {\"verticalAlignment\":\"center\"} -->\n\t\t\t\t\t<div class=\"wp-block-columns are-vertically-aligned-center\"><!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"25%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:25%\"><!-- wp:post-featured-image {\"isLink\":true} \/--><\/div>\n\t\t\t\t\t<!-- \/wp:column -->\n\t\t\t\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"75%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:75%\"><!-- wp:post-title {\"isLink\":true} \/--><\/div>\n\t\t\t\t\t<!-- \/wp:column --><\/div>\n\t\t\t\t\t<!-- \/wp:columns -->\n\t\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:query -->",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "core"
  },
  {
      "name": "core\/query-grid-posts",
      "title": "Grid",
      "content": "<!-- wp:query {\"query\":{\"perPage\":6,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"exclude\",\"inherit\":false},\"displayLayout\":{\"type\":\"flex\",\"columns\":3}} -->\n\t\t\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t\t<!-- wp:post-template -->\n\t\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"30px\",\"right\":\"30px\",\"bottom\":\"30px\",\"left\":\"30px\"}}},\"layout\":{\"inherit\":false}} -->\n\t\t\t\t\t<div class=\"wp-block-group\" style=\"padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px\"><!-- wp:post-title {\"isLink\":true} \/-->\n\t\t\t\t\t<!-- wp:post-excerpt \/-->\n\t\t\t\t\t<!-- wp:post-date \/--><\/div>\n\t\t\t\t\t<!-- \/wp:group -->\n\t\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:query -->",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "core"
  },
  {
      "name": "core\/query-large-title-posts",
      "title": "Large title",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"100px\",\"right\":\"100px\",\"bottom\":\"100px\",\"left\":\"100px\"}},\"color\":{\"text\":\"#ffffff\",\"background\":\"#000000\"}}} -->\n\t\t\t\t\t<div class=\"wp-block-group alignfull has-text-color has-background\" style=\"background-color:#000000;color:#ffffff;padding-top:100px;padding-right:100px;padding-bottom:100px;padding-left:100px\"><!-- wp:query {\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false}} -->\n\t\t\t\t\t<div class=\"wp-block-query\"><!-- wp:post-template -->\n\t\t\t\t\t<!-- wp:separator {\"customColor\":\"#ffffff\",\"align\":\"wide\",\"className\":\"is-style-wide\"} -->\n\t\t\t\t\t<hr class=\"wp-block-separator alignwide has-text-color has-background is-style-wide\" style=\"background-color:#ffffff;color:#ffffff\"\/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\n\t\t\t\t\t<!-- wp:columns {\"verticalAlignment\":\"center\",\"align\":\"wide\"} -->\n\t\t\t\t\t<div class=\"wp-block-columns alignwide are-vertically-aligned-center\"><!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"20%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:20%\"><!-- wp:post-date {\"style\":{\"color\":{\"text\":\"#ffffff\"}},\"fontSize\":\"extra-small\"} \/--><\/div>\n\t\t\t\t\t<!-- \/wp:column -->\n\n\t\t\t\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"80%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:80%\"><!-- wp:post-title {\"isLink\":true,\"style\":{\"typography\":{\"fontSize\":\"72px\",\"lineHeight\":\"1.1\"},\"color\":{\"text\":\"#ffffff\",\"link\":\"#ffffff\"}}} \/--><\/div>\n\t\t\t\t\t<!-- \/wp:column --><\/div>\n\t\t\t\t\t<!-- \/wp:columns -->\n\t\t\t\t\t<!-- \/wp:post-template --><\/div>\n\t\t\t\t\t<!-- \/wp:query --><\/div>\n\t\t\t\t\t<!-- \/wp:group -->",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "core"
  },
  {
      "name": "core\/query-offset-posts",
      "title": "Offset",
      "content": "<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"30px\",\"right\":\"30px\",\"bottom\":\"30px\",\"left\":\"30px\"}}},\"layout\":{\"inherit\":false}} -->\n\t\t\t\t\t<div class=\"wp-block-group\" style=\"padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px\"><!-- wp:columns -->\n\t\t\t\t\t<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"50%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:query {\"query\":{\"perPage\":2,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"exclude\",\"inherit\":false},\"displayLayout\":{\"type\":\"list\"}} -->\n\t\t\t\t\t<div class=\"wp-block-query\"><!-- wp:post-template -->\n\t\t\t\t\t<!-- wp:post-featured-image \/-->\n\t\t\t\t\t<!-- wp:post-title \/-->\n\t\t\t\t\t<!-- wp:post-date \/-->\n\t\t\t\t\t<!-- wp:spacer {\"height\":200} -->\n\t\t\t\t\t<div style=\"height:200px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t\t\t<!-- \/wp:spacer -->\n\t\t\t\t\t<!-- \/wp:post-template --><\/div>\n\t\t\t\t\t<!-- \/wp:query --><\/div>\n\t\t\t\t\t<!-- \/wp:column -->\n\t\t\t\t\t<!-- wp:column {\"width\":\"50%\"} -->\n\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:query {\"query\":{\"perPage\":2,\"pages\":0,\"offset\":2,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"exclude\",\"inherit\":false},\"displayLayout\":{\"type\":\"list\"}} -->\n\t\t\t\t\t<div class=\"wp-block-query\"><!-- wp:post-template -->\n\t\t\t\t\t<!-- wp:spacer {\"height\":200} -->\n\t\t\t\t\t<div style=\"height:200px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t\t\t<!-- \/wp:spacer -->\n\t\t\t\t\t<!-- wp:post-featured-image \/-->\n\t\t\t\t\t<!-- wp:post-title \/-->\n\t\t\t\t\t<!-- wp:post-date \/-->\n\t\t\t\t\t<!-- \/wp:post-template --><\/div>\n\t\t\t\t\t<!-- \/wp:query --><\/div>\n\t\t\t\t\t<!-- \/wp:column --><\/div>\n\t\t\t\t\t<!-- \/wp:columns --><\/div>\n\t\t\t\t\t<!-- \/wp:group -->",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "core"
  },
  {
      "name": "core\/social-links-shared-background-color",
      "title": "Social links with a shared background color",
      "content": "<!-- wp:social-links {\"customIconColor\":\"#ffffff\",\"iconColorValue\":\"#ffffff\",\"customIconBackgroundColor\":\"#3962e3\",\"iconBackgroundColorValue\":\"#3962e3\",\"className\":\"has-icon-color\"} -->\n\t\t\t\t\t\t<ul class=\"wp-block-social-links has-icon-color has-icon-background-color\"><!-- wp:social-link {\"url\":\"https:\/\/wordpress.org\",\"service\":\"wordpress\"} \/-->\n\t\t\t\t\t\t<!-- wp:social-link {\"url\":\"#\",\"service\":\"chain\"} \/-->\n\t\t\t\t\t\t<!-- wp:social-link {\"url\":\"#\",\"service\":\"mail\"} \/--><\/ul>\n\t\t\t\t\t\t<!-- \/wp:social-links -->",
      "viewport_width": 500,
      "categories": [
          "call-to-action"
      ],
      "block_types": [
          "core\/social-links"
      ],
      "source": "core"
  },
  {
      "name": "twentytwentyfour\/banner-hero",
      "title": "Hero",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"\",\"wideSize\":\"\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"565px\"}} -->\n\t<div class=\"wp-block-group\">\n\n\t\t<!-- wp:heading {\"textAlign\":\"center\",\"fontSize\":\"x-large\",\"level\":1} -->\n\t\t<h1 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">A commitment to innovation and sustainability<\/h1>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:spacer {\"height\":\"1.25rem\"} -->\n\t\t<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t<p class=\"has-text-align-center\">\u00c9tudes is a pioneering firm that seamlessly merges creativity and functionality to redefine architectural excellence.<\/p>\n\t\t<!-- \/wp:paragraph -->\n\n\t\t<!-- wp:spacer {\"height\":\"1.25rem\"} -->\n\t\t<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n\t\t<div class=\"wp-block-buttons\">\n\t\t\t<!-- wp:button -->\n\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">About us<\/a>\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:button -->\n\t\t<\/div>\n\t\t<!-- \/wp:buttons -->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|30\",\"style\":{\"layout\":[]}} -->\n\t<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:image {\"align\":\"wide\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t<figure class=\"wp-block-image alignwide size-full is-style-rounded\">\n\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp\" alt=\"Building exterior in Toronto, Canada\" \/>\n\t<\/figure>\n\t<!-- \/wp:image -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "banner",
          "call-to-action",
          "featured"
      ]
  },
  {
      "name": "twentytwentyfour\/banner-project-description",
      "title": "Project description",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"backgroundColor\":\"accent-2\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-accent-2-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\"} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"width\":\"40%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:40%\">\n\t\t\t<!-- wp:paragraph {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"}}} -->\n\t\t\t<p>Art Gallery \u2014 Overview<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"60%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:60%\">\n\n\t\t\t<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.2\"}},\"fontSize\":\"x-large\",\"fontFamily\":\"heading\"} -->\n\t\t\t<p class=\"has-heading-font-family has-x-large-font-size\" style=\"line-height:1.2\">This transformative project seeks to enhance the gallery&#039;s infrastructure, accessibility, and exhibition spaces while preserving its rich cultural heritage.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\"} -->\n\t<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:image {\"align\":\"wide\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t<figure class=\"wp-block-image alignwide size-large is-style-rounded\">\n\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/hotel-facade.webp\" alt=\"Hyatt Regency San Francisco, San Francisco, United States\" \/>\n\t<\/figure>\n\t<!-- \/wp:image -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "featured",
          "banner",
          "about",
          "portfolio"
      ]
  },
  {
      "name": "twentytwentyfour\/cta-content-image-on-right",
      "title": "Call to action with image on right",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"verticalAlignment\":\"center\",\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\"}}}} -->\n\t<div class=\"wp-block-columns alignwide are-vertically-aligned-center\">\n\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"50%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:50%\">\n\t\t\t<!-- wp:heading -->\n\t\t\t<h2 class=\"wp-block-heading\">Enhance your architectural journey with the \u00c9tudes Architect app.<\/h2>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:list {\"style\":{\"typography\":{\"lineHeight\":\"1.75\"}},\"className\":\"is-style-checkmark-list\"} -->\n\t\t\t<ul class=\"is-style-checkmark-list\" style=\"line-height:1.75\">\n\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t<li>Collaborate with fellow architects.<\/li>\n\t\t\t\t<!-- \/wp:list-item -->\n\n\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t<li>Showcase your projects.<\/li>\n\t\t\t\t<!-- \/wp:list-item -->\n\n\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t<li>Experience the world of architecture.<\/li>\n\t\t\t\t<!-- \/wp:list-item -->\n\t\t\t<\/ul>\n\t\t\t<!-- \/wp:list -->\n\n\t\t\t<!-- wp:buttons -->\n\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t<!-- wp:button -->\n\t\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Download app<\/a>\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:button -->\n\n\t\t\t\t<!-- wp:button {\"className\":\"is-style-outline\"} -->\n\t\t\t\t<div class=\"wp-block-button is-style-outline\">\n\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">How it works<\/a>\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:button -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:buttons -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"50%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:50%\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"4\/3\",\"scale\":\"cover\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-full is-style-rounded\">\n\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/abstract-geometric-art.webp\" alt=\"White abstract geometric artwork from Dresden, Germany\" style=\"aspect-ratio:4\/3;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "call-to-action",
          "banner"
      ]
  },
  {
      "name": "twentytwentyfour\/cta-pricing",
      "title": "Pricing",
      "content": "\n<!-- wp:group {\"metadata\":{\"name\":\"Pricing Table\"},\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|40\",\"right\":\"var:preset|spacing|40\"}},\"border\":{\"radius\":\"16px\"}},\"backgroundColor\":\"base-2\",\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group alignwide has-base-2-background-color has-background\" style=\"border-radius:16px;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--40)\">\n\t\t<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t<div class=\"wp-block-group alignwide\">\n\t\t\t<!-- wp:heading {\"textAlign\":\"center\"} -->\n\t\t\t<h2 class=\"wp-block-heading has-text-align-center\">Our Services<\/h2>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontSize\":\"1.125rem\"},\"spacing\":{\"margin\":{\"top\":\"var:preset|spacing|10\"}}}} -->\n\t\t\t<p class=\"has-text-align-center\" style=\"margin-top:var(--wp--preset--spacing--10);font-size:1.125rem\">We offer flexible options, which you can adapt to the different needs of each project.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|30\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|20\"}}}} -->\n\t\t<div class=\"wp-block-columns alignwide\">\n\t\t\t<!-- wp:column {\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\",\"top\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|10\"}},\"border\":{\"top\":{\"color\":\"var:preset|color|contrast-3\",\"width\":\"1px\"}}}} -->\n\t\t\t<div class=\"wp-block-column\" style=\"border-top-color:var(--wp--preset--color--contrast-3);border-top-width:1px;padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--10);padding-left:var(--wp--preset--spacing--30)\">\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"center\",\"level\":4,\"style\":{\"spacing\":{\"padding\":{\"top\":\"1px\"}}},\"fontSize\":\"medium\"} -->\n\t\t\t\t<h4 class=\"wp-block-heading has-text-align-center has-medium-font-size\" style=\"padding-top:1px\">\n\t\t\t\t\t<em>Free<\/em>\n\t\t\t\t<\/h4>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"center\",\"level\":5,\"fontSize\":\"x-large\"} -->\n\t\t\t\t<h5 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">$0<\/h5>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center\">Access to 5 exclusive <em>\u00c9tudes Articles<\/em> per month.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:separator {\"backgroundColor\":\"contrast-3\"} -->\n\t\t\t\t\t<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background is-style-wide\" \/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast-2\"}}}},\"textColor\":\"contrast-2\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center has-contrast-2-color has-text-color has-link-color\">\n\t\t\t\t\t\t<s>Weekly print edition.<\/s>\n\t\t\t\t\t<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:separator {\"backgroundColor\":\"contrast-3\"} -->\n\t\t\t\t\t<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background is-style-wide\" \/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast-2\"}}}},\"textColor\":\"contrast-2\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center has-contrast-2-color has-text-color has-link-color\">\n\t\t\t\t\t\t<s>Exclusive access to the <em>\u00c9tudes<\/em> app for iOS and Android.<\/s>\n\t\t\t\t\t<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n\t\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t\t<!-- wp:button {\"width\":100,\"className\":\"is-style-outline\"} -->\n\t\t\t\t\t<div class=\"wp-block-button has-custom-width wp-block-button__width-100 is-style-outline\">\n\t\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Subscribe<\/a>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:button -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:buttons -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\n\t\t\t<!-- wp:column {\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\",\"top\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|10\"}},\"border\":{\"top\":{\"color\":\"var:preset|color|contrast\",\"width\":\"2px\"}}}} -->\n\t\t\t<div class=\"wp-block-column\" style=\"border-top-color:var(--wp--preset--color--contrast);border-top-width:2px;padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--10);padding-left:var(--wp--preset--spacing--30)\">\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"center\",\"level\":4} -->\n\t\t\t\t<h4 class=\"wp-block-heading has-text-align-center\">\n\t\t\t\t\t<em>Connoisseur<\/em>\n\t\t\t\t<\/h4>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"center\",\"level\":5,\"fontSize\":\"x-large\"} -->\n\t\t\t\t<h5 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">$12<\/h5>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center\">Access to 20 exclusive <em>\u00c9tudes Articles<\/em> per month.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:separator {\"backgroundColor\":\"contrast-3\"} -->\n\t\t\t\t\t<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background is-style-wide\" \/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center\">Weekly print edition.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:separator {\"backgroundColor\":\"contrast-3\"} -->\n\t\t\t\t\t<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background is-style-wide\" \/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center\">Exclusive access to the <em>\u00c9tudes<\/em> app for iOS and Android.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n\t\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t\t<!-- wp:button {\"width\":100,\"className\":\"is-style-fill\"} -->\n\t\t\t\t\t<div class=\"wp-block-button has-custom-width wp-block-button__width-100 is-style-fill\">\n\t\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Subscribe<\/a>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:button -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:buttons -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\n\t\t\t<!-- wp:column {\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\",\"top\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|10\"}},\"border\":{\"top\":{\"color\":\"var:preset|color|contrast-3\",\"width\":\"1px\"}}}} -->\n\t\t\t<div class=\"wp-block-column\" style=\"border-top-color:var(--wp--preset--color--contrast-3);border-top-width:1px;padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--10);padding-left:var(--wp--preset--spacing--30)\">\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"center\",\"level\":4,\"style\":{\"spacing\":{\"padding\":{\"top\":\"1px\"}}},\"fontSize\":\"medium\"} -->\n\t\t\t\t<h4 class=\"wp-block-heading has-text-align-center has-medium-font-size\" style=\"padding-top:1px\">\n\t\t\t\t\t<em>Expert<\/em>\n\t\t\t\t<\/h4>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"center\",\"level\":5,\"fontSize\":\"x-large\"} -->\n\t\t\t\t<h5 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">$28<\/h5>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center\">Exclusive, unlimited access to <em>\u00c9tudes Articles<\/em>.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:separator {\"backgroundColor\":\"contrast-3\"} -->\n\t\t\t\t\t<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background is-style-wide\" \/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center\">Weekly print edition.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:separator {\"backgroundColor\":\"contrast-3\"} -->\n\t\t\t\t\t<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background is-style-wide\" \/>\n\t\t\t\t\t<!-- \/wp:separator -->\n\n\t\t\t\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t\t\t\t<p class=\"has-text-align-center\">Exclusive access to the <em>\u00c9tudes<\/em> app for iOS and Android<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n\t\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t\t<!-- wp:button {\"width\":100,\"className\":\"is-style-outline\"} -->\n\t\t\t\t\t<div class=\"wp-block-button has-custom-width wp-block-button__width-100 is-style-outline\">\n\t\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Subscribe<\/a>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:button -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:buttons -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\t\t<\/div>\n\t\t<!-- \/wp:columns -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "call-to-action",
          "services"
      ]
  },
  {
      "name": "twentytwentyfour\/cta-rsvp",
      "title": "RSVP",
      "content": "\n<!-- wp:group {\"metadata\":{\"name\":\"RSVP\"},\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"backgroundColor\":\"accent-5\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-accent-5-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|30\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"verticalAlignment\":\"stretch\",\"width\":\"40%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-stretch\" style=\"flex-basis:40%\">\n\t\t\t<!-- wp:group {\"style\":{\"dimensions\":{\"minHeight\":\"100%\"},\"spacing\":{\"blockGap\":\"var:preset|spacing|50\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"left\",\"verticalAlignment\":\"space-between\"}} -->\n\t\t\t<div class=\"wp-block-group\" style=\"min-height:100%\">\n\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"right\",\"level\":2,\"style\":{\"typography\":{\"fontSize\":\"12rem\",\"writingMode\":\"vertical-rl\",\"lineHeight\":\"1\"},\"spacing\":{\"margin\":{\"right\":\"0\",\"left\":\"calc( var(\\u002d\\u002dwp\\u002d\\u002dpreset\\u002d\\u002dspacing\\u002d\\u002d20) * -1)\"}}}} -->\n\t\t\t\t\t<h2 class=\"wp-block-heading has-text-align-right\" style=\"margin-right:0;margin-left:calc( var(--wp--preset--spacing--20) * -1);font-size:12rem;line-height:1;writing-mode:vertical-rl\">RSVP<\/h2>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"constrained\",\"contentSize\":\"300px\",\"justifyContent\":\"left\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:paragraph {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"}}} -->\n\t\t\t\t\t<p>Experience the fusion of imagination and expertise with \u00c9tudes Arch Summit, February 2025.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:buttons -->\n\t\t\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t\t\t<!-- wp:button -->\n\t\t\t\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Reserve your spot<\/a>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<!-- \/wp:button -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:buttons -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"verticalAlignment\":\"top\",\"width\":\"60%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-top\" style=\"flex-basis:60%\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"style\":{\"color\":{\"duotone\":\"var:preset|duotone|duotone-5\"}},\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-large is-style-rounded\">\n\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/museum.webp\" alt=\"A ramp along a curved wall in the Kiasma Museu, Helsinki, Finland\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1100,
      "categories": [
          "call-to-action",
          "featured"
      ]
  },
  {
      "name": "twentytwentyfour\/cta-services-image-left",
      "title": "Services call to action with image on left",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"backgroundColor\":\"accent-5\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-accent-5-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"verticalAlignment\":null,\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|50\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"60%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:60%\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"4\/3\",\"scale\":\"cover\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"style\":{\"color\":{\"duotone\":\"var:preset|duotone|duotone-1\"}},\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-full is-style-rounded\">\n\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/abstract-geometric-art.webp\" alt=\"White abstract geometric artwork from Dresden, Germany\" style=\"aspect-ratio:4\/3;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"40%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:40%\">\n\t\t\t<!-- wp:heading -->\n\t\t\t<h2 class=\"wp-block-heading\">Guiding your business through the project<\/h2>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph -->\n\t\t\t<p>Experience the fusion of imagination and expertise with \u00c9tudes\u2014the catalyst for architectural transformations that enrich the world around us.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t<!-- wp:buttons -->\n\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t<!-- wp:button -->\n\t\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Our services<\/a>\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:button -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:buttons -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "call-to-action",
          "banner",
          "featured",
          "services"
      ]
  },
  {
      "name": "twentytwentyfour\/cta-subscribe-centered",
      "title": "Centered call to action",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:group {\"align\":\"wide\",\"style\":{\"border\":{\"radius\":\"16px\"},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"backgroundColor\":\"base-2\",\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group alignwide has-base-2-background-color has-background\" style=\"border-radius:16px;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)\">\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:heading {\"textAlign\":\"center\",\"fontSize\":\"x-large\"} -->\n\t\t<h2 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">Join 900+ subscribers<\/h2>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t<p class=\"has-text-align-center\">Stay in the loop with everything you need to know.<\/p>\n\t\t<!-- \/wp:paragraph -->\n\n\t\t<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n\t\t<div class=\"wp-block-buttons\">\n\t\t\t<!-- wp:button -->\n\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Sign up<\/a>\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:button -->\n\t\t<\/div>\n\t\t<!-- \/wp:buttons -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "categories": [
          "call-to-action"
      ],
      "keywords": [
          "newsletter",
          "subscribe",
          "button"
      ]
  },
  {
      "name": "twentytwentyfour\/footer-centered-logo-nav",
      "title": "Footer with centered logo and navigation",
      "content": "\n<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group\" style=\"padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--50)\">\n\n\t<!-- wp:site-logo \/-->\n\n\t<!-- wp:navigation {\"overlayMenu\":\"never\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"},\"fontSize\":\"small\"} \/-->\n\n\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"secondary\",\"fontSize\":\"small\"} -->\n\t<p class=\"has-text-align-center has-secondary-color has-text-color has-link-color has-small-font-size\">\n\tDesigned with <a href=\"https:\/\/wordpress.org\" rel=\"nofollow\">WordPress<\/a>\t<\/p>\n\t<!-- \/wp:paragraph -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "categories": [
          "footer"
      ],
      "block_types": [
          "core\/template-part\/footer"
      ]
  },
  {
      "name": "twentytwentyfour\/footer-colophon-3-col",
      "title": "Footer with colophon, 3 columns",
      "content": "\n<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignwide\">\n\t<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\"}}}} -->\n\t<div class=\"wp-block-group alignwide\" style=\"padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)\">\n\t\t<!-- wp:image {\"width\":\"40px\",\"height\":\"auto\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->\n\t\t<figure class=\"wp-block-image size-full is-resized\">\n\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/icon-message.webp\" alt=\"\" style=\"width:40px;height:auto\" \/>\n\t\t<\/figure>\n\t\t<!-- \/wp:image -->\n\n\t\t<!-- wp:separator {\"className\":\"is-style-wide\"} -->\n\t\t<hr class=\"wp-block-separator has-alpha-channel-opacity is-style-wide\" \/>\n\t\t<!-- \/wp:separator -->\n\n\t\t<!-- wp:columns {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|10\"}}}} -->\n\t\t<div class=\"wp-block-columns\" style=\"padding-top:var(--wp--preset--spacing--10)\">\n\t\t\t<!-- wp:column {\"width\":\"57%\"} -->\n\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:57%\">\n\t\t\t\t<!-- wp:heading {\"fontSize\":\"x-large\"} -->\n\t\t\t\t<h2 class=\"wp-block-heading has-x-large-font-size\">Keep up, get in touch.<\/h2>\n\t\t\t\t<!-- \/wp:heading -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\t\t\t<!-- wp:column {\"width\":\"30%\"} -->\n\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:30%\">\n\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:heading {\"level\":3,\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t\t\t<h3 class=\"wp-block-heading has-body-font-family has-medium-font-size\">Contact<\/h3>\n\t\t\t\t\t<!-- \/wp:heading -->\n\t\t\t\t\t<!-- wp:paragraph -->\n\t\t\t\t\t<p><a href=\"#\">info@example.com<\/a><\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\t\t\t<!-- wp:column {\"width\":\"30%\"} -->\n\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:30%\">\n\t\t\t\t<!-- wp:columns {\"isStackedOnMobile\":false} -->\n\t\t\t\t<div class=\"wp-block-columns is-not-stacked-on-mobile\">\n\t\t\t\t\t<!-- wp:column -->\n\t\t\t\t\t<div class=\"wp-block-column\">\n\t\t\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t\t\t<!-- wp:heading {\"level\":3,\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t\t\t\t\t<h3 class=\"wp-block-heading has-body-font-family has-medium-font-size\">Follow<\/h3>\n\t\t\t\t\t\t\t<!-- \/wp:heading -->\n\t\t\t\t\t\t\t<!-- wp:paragraph -->\n\t\t\t\t\t\t\t<p><a href=\"#\">Instagram<\/a> \/ <a href=\"#\">Facebook<\/a><\/p>\n\t\t\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<!-- \/wp:group -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:column -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:columns -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\t\t<\/div>\n\t\t<!-- \/wp:columns -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"space-between\",\"verticalAlignment\":\"top\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"6px\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-small-font-size\">&copy;<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t<!-- wp:site-title {\"level\":0,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"400\"}},\"fontSize\":\"small\"} \/-->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t\t<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n\t\t\t<p class=\"has-small-font-size\">\n\t\t\t\tDesigned with <a href=\"https:\/\/wordpress.org\" rel=\"nofollow\">WordPress<\/a>\t\t\t<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "categories": [
          "footer"
      ],
      "block_types": [
          "core\/template-part\/footer"
      ]
  },
  {
      "name": "twentytwentyfour\/footer",
      "title": "Footer with colophon, 4 columns",
      "content": "\n<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group\" style=\"padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\"} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"width\":\"30%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:30%\">\n\t\t\t<!-- wp:group {\"style\":{\"dimensions\":{\"minHeight\":\"\"},\"layout\":{\"selfStretch\":\"fit\",\"flexSize\":null}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:site-logo {\"width\":20,\"shouldSyncIcon\":true,\"style\":{\"layout\":{\"selfStretch\":\"fit\",\"flexSize\":null}}} \/-->\n\n\t\t\t\t<!-- wp:site-title {\"level\":0,\"fontSize\":\"medium\"} \/-->\n\n\t\t\t\t<!-- wp:site-tagline {\"fontSize\":\"small\"} \/-->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"20%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:20%\">\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"50%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:50%\">\n\t\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"space-between\",\"verticalAlignment\":\"top\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:heading {\"level\":2,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"fontFamily\":\"body\"} -->\n\t\t\t\t\t<h2 class=\"wp-block-heading has-medium-font-size has-body-font-family\" style=\"font-style:normal;font-weight:600\">About<\/h2>\n\t\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t\t\t\t<div class=\"wp-block-group\">\n\n\t\t\t\t\t\t<!-- wp:navigation {\"overlayMenu\":\"never\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"400\"},\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"fontSize\":\"small\",\"ariaLabel\":\"About\"} -->\n\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Team\",\"url\":\"#\"} \/-->\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"History\",\"url\":\"#\"} \/-->\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Careers\",\"url\":\"#\"} \/-->\n\n\t\t\t\t\t\t<!-- \/wp:navigation -->\n\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:group -->\n\t\t\t\t<\/div>\n\n\t\t\t\t<!-- \/wp:group -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:heading {\"level\":2,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"fontFamily\":\"body\"} -->\n\t\t\t\t\t<h2 class=\"wp-block-heading has-medium-font-size has-body-font-family\" style=\"font-style:normal;font-weight:600\">Privacy<\/h2>\n\t\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t\t\t\t<div class=\"wp-block-group\">\n\n\t\t\t\t\t\t<!-- wp:navigation {\"overlayMenu\":\"never\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"400\"},\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"fontSize\":\"small\",\"ariaLabel\":\"Privacy\"} -->\n\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Privacy Policy\",\"url\":\"#\"} \/-->\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Terms and Conditions\",\"url\":\"#\"} \/-->\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Contact Us\",\"url\":\"#\"} \/-->\n\n\t\t\t\t\t\t<!-- \/wp:navigation -->\n\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:group -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:heading {\"level\":2,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"fontFamily\":\"body\"} -->\n\t\t\t\t\t<h2 class=\"wp-block-heading has-medium-font-size has-body-font-family\" style=\"font-style:normal;font-weight:600\">Social<\/h2>\n\t\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t\t\t\t<div class=\"wp-block-group\">\n\n\t\t\t\t\t\t<!-- wp:navigation {\"overlayMenu\":\"never\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"400\"},\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"fontSize\":\"small\",\"ariaLabel\":\"Social Media\"} -->\n\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Facebook\",\"url\":\"#\"} \/-->\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Instagram\",\"url\":\"#\"} \/-->\n\t\t\t\t\t\t<!-- wp:navigation-link {\"label\":\"Twitter\/X\",\"url\":\"#\"} \/-->\n\n\t\t\t\t\t\t<!-- \/wp:navigation -->\n\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:group -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n\n\t<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"0\"}}}} -->\n\t<div class=\"wp-block-group alignwide\" style=\"padding-top:var(--wp--preset--spacing--50);padding-bottom:0\">\n\t\t<!-- wp:paragraph {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"contrast-2\",\"fontSize\":\"small\"} -->\n\t\t<p class=\"has-contrast-2-color has-text-color has-link-color has-small-font-size\">\n\t\tDesigned with <a href=\"https:\/\/wordpress.org\" rel=\"nofollow\">WordPress<\/a>\t\t<\/p>\n\t\t<!-- \/wp:paragraph -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "categories": [
          "footer"
      ],
      "block_types": [
          "core\/template-part\/footer"
      ]
  },
  {
      "name": "twentytwentyfour\/gallery-full-screen-image",
      "title": "Full screen image",
      "content": "\n<!-- wp:cover {\"url\":\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/art-gallery.webp\",\"hasParallax\":true,\"dimRatio\":0,\"overlayColor\":\"base\",\"minHeight\":100,\"minHeightUnit\":\"vh\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-cover alignfull is-light has-parallax\" style=\"padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50);min-height:100vh\">\n\t<span aria-hidden=\"true\" class=\"wp-block-cover__background has-base-background-color has-background-dim-0 has-background-dim\">\n\t<\/span>\n\t<div role=\"img\" class=\"wp-block-cover__image-background has-parallax\" style=\"background-position:50% 50%;background-image:url(https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/art-gallery.webp)\">\n\t<\/div>\n\t<div class=\"wp-block-cover__inner-container\">\n\t\t<!-- wp:spacer {\"height\":\"500px\"} -->\n\t\t<div style=\"height:500px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\t<\/div>\n<\/div>\n<!-- \/wp:cover -->\n",
      "description": "",
      "categories": [
          "gallery",
          "portfolio"
      ]
  },
  {
      "name": "twentytwentyfour\/gallery-offset-images-grid-2-col",
      "title": "Offset gallery, 2 columns",
      "content": "<!-- wp:group {\"metadata\":{\"name\":\"Portfolio Images\"},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"0\",\"left\":\"var:preset|spacing|40\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\" style=\"margin-top:0;margin-bottom:0\">\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"4\/3\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\"><img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\"><img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "gallery",
          "portfolio"
      ],
      "keywords": [
          "project",
          "images",
          "media",
          "masonry",
          "columns"
      ]
  },
  {
      "name": "twentytwentyfour\/gallery-offset-images-grid-3-col",
      "title": "Offset gallery, 3 columns",
      "content": "<!-- wp:group {\"metadata\":{\"name\":\"Portfolio Images\"},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"0\",\"left\":\"var:preset|spacing|40\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\" style=\"margin-top:0;margin-bottom:0\">\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"4\/3\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"16\/9\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:16\/9;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "gallery",
          "portfolio"
      ],
      "keywords": [
          "project",
          "images",
          "media",
          "masonry",
          "columns"
      ]
  },
  {
      "name": "twentytwentyfour\/gallery-offset-images-grid-4-col",
      "title": "Offset gallery, 4 columns",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"},\"metadata\":{\"name\":\"Portfolio Images\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"0\",\"left\":\"var:preset|spacing|40\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\" style=\"margin-top:0;margin-bottom:0\">\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"4\/3\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"16\/9\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:16\/9;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"16\/9\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:16\/9;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:image {\"aspectRatio\":\"9\/16\",\"scale\":\"cover\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:9\/16;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "gallery",
          "featured",
          "portfolio"
      ],
      "keywords": [
          "project",
          "images",
          "media",
          "masonry",
          "columns"
      ]
  },
  {
      "name": "twentytwentyfour\/gallery-project-layout",
      "title": "Project layout",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|base-2\"}}}},\"backgroundColor\":\"contrast\",\"textColor\":\"base-2\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-base-2-color has-contrast-background-color has-text-color has-background has-link-color\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|60\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"verticalAlignment\":\"stretch\",\"width\":\"60%\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"0\"}}}} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-stretch\" style=\"padding-right:0;flex-basis:60%\">\n\t\t\t<!-- wp:group {\"style\":{\"dimensions\":{\"minHeight\":\"100%\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"verticalAlignment\":\"space-between\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t<div class=\"wp-block-group\" style=\"min-height:100%\">\n\t\t\t\t<!-- wp:image {\"aspectRatio\":\"9\/16\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t\t<figure class=\"wp-block-image size-large is-style-rounded\">\n\t\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/angular-roof.webp\" alt=\"An empty staircase under an angular roof in Darling Harbour, Sydney, Australia\" style=\"aspect-ratio:9\/16;object-fit:cover\" \/>\n\t\t\t\t<\/figure>\n\t\t\t\t<!-- \/wp:image -->\n\n\t\t\t\t<!-- wp:paragraph {\"fontSize\":\"medium\"} -->\n\t\t\t\t<p class=\"has-medium-font-size\">1. Through \u00c9tudes, we aspire to redefine architectural boundaries and usher in a new era of design excellence that leaves an indelible mark on the built environment.<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"40%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:40%\">\n\t\t\t<!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.2\",\"fontStyle\":\"normal\",\"fontWeight\":\"500\"}},\"fontSize\":\"large\"} -->\n\t\t\t\t<p class=\"has-large-font-size\" style=\"font-style:normal;font-weight:500;line-height:1.2\">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers. With a commitment to innovation and sustainability, \u00c9tudes is the bridge that transforms architectural dreams into remarkable built realities.<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\",\"style\":{\"layout\":[]}} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"default\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:paragraph {\"fontSize\":\"medium\"} -->\n\t\t\t\t\t<p class=\"has-medium-font-size\">2. Case studies that celebrate the artistry can fuel curiosity and ignite inspiration.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:image {\"aspectRatio\":\"9\/16\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t\t\t<figure class=\"wp-block-image size-large is-style-rounded\">\n\t\t\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/art-gallery.webp\" alt=\"Art Gallery of Ontario, Toronto, Canada\" style=\"aspect-ratio:9\/16;object-fit:cover\" \/>\n\t\t\t\t\t<\/figure>\n\t\t\t\t\t<!-- \/wp:image -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1600,
      "categories": [
          "gallery",
          "featured",
          "portfolio"
      ]
  },
  {
      "name": "twentytwentyfour\/hidden-404",
      "title": "404",
      "content": "\n<!-- wp:heading {\"level\":1} -->\n<h1 class=\"wp-block-heading\" id=\"page-not-found\">Page Not Found<\/h1>\n<!-- \/wp:heading -->\n<!-- wp:paragraph -->\n<p>The page you are looking for does not exist, or it has been moved. Please try searching using the form below.<\/p>\n<!-- \/wp:paragraph -->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-search\"} \/-->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/hidden-comments",
      "title": "Comments",
      "content": "\n<!-- wp:comments {\"className\":\"wp-block-comments-query-loop\"} -->\n<div class=\"wp-block-comments wp-block-comments-query-loop\">\n\t<!-- wp:heading -->\n\t<h2>Comments<\/h2>\n\t<!-- \/wp:heading -->\n\t<!-- wp:comments-title {\"level\":3} \/-->\n\t<!-- wp:comment-template -->\n\t<!-- wp:group {\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"var:preset|spacing|30\"}}}} -->\n\t<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:var(--wp--preset--spacing--30)\">\n\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"},\"style\":{\"spacing\":{\"blockGap\":\"0.5em\"}}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:avatar {\"size\":40} \/-->\n\t\t\t<!-- wp:group -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:comment-author-name \/-->\n\t\t\t\t<!-- wp:comment-date \/-->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\t\t<!-- wp:comment-content \/-->\n\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:comment-edit-link \/-->\n\t\t\t<!-- wp:comment-reply-link \/-->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\t<\/div>\n\t<!-- \/wp:group -->\n\t<!-- \/wp:comment-template -->\n\n\t<!-- wp:comments-pagination {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n\t<!-- wp:comments-pagination-previous \/-->\n\t<!-- wp:comments-pagination-next \/-->\n\t<!-- \/wp:comments-pagination -->\n\n\t<!-- wp:post-comments-form {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|20\",\"bottom\":\"var:preset|spacing|20\"}}}} \/-->\n<\/div>\n<!-- \/wp:comments -->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/hidden-no-results",
      "title": "No results",
      "content": "<!-- wp:paragraph -->\n<p>No posts were found.<\/p>\n<!-- \/wp:paragraph -->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/hidden-portfolio-hero",
      "title": "Portfolio hero",
      "content": "\n<!-- wp:spacer {\"height\":\"var:preset|spacing|50\",\"style\":{\"layout\":[]}} -->\n<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignwide\">\n\t<!-- wp:heading {\"level\":1,\"align\":\"wide\",\"style\":{\"typography\":{\"lineHeight\":\"1.2\"}},\"fontSize\":\"xx-large\"} -->\n\t<h1 class=\"wp-block-heading alignwide has-xx-large-font-size\" style=\"line-height:1.2\">I\u2019m <em>Leia Acosta<\/em>, a passionate photographer who finds inspiration in capturing the fleeting beauty of life.<\/h1>\n\t<!-- \/wp:heading -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/hidden-post-meta",
      "title": "Post meta",
      "content": "\n<!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group\">\n\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0.3em\"}},\"layout\":{\"type\":\"flex\",\"justifyContent\":\"left\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:post-date {\"format\":\"M j, Y\",\"isLink\":true} \/-->\n\n\t\t<!-- wp:paragraph {\"textColor\":\"contrast-2\"} -->\n\t\t<p class=\"has-contrast-2-color has-text-color\">\u2014<\/p>\n\t\t<!-- \/wp:paragraph -->\n\n\t\t<!-- wp:paragraph {\"fontSize\":\"small\",\"textColor\":\"contrast-2\"} -->\n\t\t<p class=\"has-small-font-size has-contrast-2-color has-text-color\">by<\/p>\n\t\t<!-- \/wp:paragraph -->\n\n\t\t<!-- wp:post-author-name {\"isLink\":true} \/-->\n\n\t\t<!-- wp:post-terms {\"term\":\"category\",\"prefix\":\"in \"} \/-->\n\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/hidden-post-navigation",
      "title": "Post navigation",
      "content": "\n<!-- wp:group {\"tagName\":\"nav\",\"ariaLabel\":\"Posts\",\"style\":{\"spacing\":{\"padding\":{\"bottom\":\"var:preset|spacing|40\",\"top\":\"var:preset|spacing|40\"}}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"space-between\"}} -->\n<nav class=\"wp-block-group\" style=\"padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40)\" aria-label=\"Posts\">\n\t<!-- wp:post-navigation-link {\"type\":\"previous\",\"label\":\"Previous: \",\"showTitle\":true,\"linkLabel\":true,\"arrow\":\"arrow\"} \/-->\n\t<!-- wp:post-navigation-link {\"label\":\"Next: \",\"showTitle\":true,\"linkLabel\":true,\"arrow\":\"arrow\"} \/-->\n<\/nav>\n<!-- \/wp:group -->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/hidden-search",
      "title": "Search",
      "content": "\n<!-- wp:search {\"label\":\"Search\",\"showLabel\":false,\"buttonText\":\"Search\",\"fontSize\":\"medium\"} \/-->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/hidden-sidebar",
      "title": "Sidebar",
      "content": "<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"36px\",\"padding\":{\"right\":\"0\",\"left\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\" style=\"padding-right:0;padding-left:0\">\n\t<!-- wp:group {\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0\">\n\t\t<!-- wp:avatar {\"size\":80,\"style\":{\"border\":{\"radius\":\"16px\"}}} \/-->\n\n\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"16px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"1.6rem\"}}} -->\n\t\t\t<h2 class=\"wp-block-heading\" style=\"font-size:1.6rem\">About the author<\/h2>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:post-author-biography {\"fontSize\":\"small\"} \/-->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:separator {\"backgroundColor\":\"contrast\",\"className\":\"is-style-wide\"} -->\n\t<hr class=\"wp-block-separator has-text-color has-contrast-color has-alpha-channel-opacity has-contrast-background-color has-background is-style-wide\"\/>\n\t<!-- \/wp:separator -->\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"16px\"}},\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"1.6rem\"}}} -->\n\t\t<h2 class=\"wp-block-heading\" style=\"font-size:1.6rem\">Popular Categories<\/h2>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:categories {\"showHierarchy\":true,\"showPostCounts\":true,\"fontSize\":\"small\"} \/-->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:separator {\"backgroundColor\":\"contrast\",\"className\":\"is-style-wide\"} -->\n\t<hr class=\"wp-block-separator has-text-color has-contrast-color has-alpha-channel-opacity has-contrast-background-color has-background is-style-wide\"\/>\n\t<!-- \/wp:separator -->\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"26px\"}},\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"16px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"1.6rem\"}}} -->\n\t\t\t<h2 class=\"wp-block-heading\" style=\"font-size:1.6rem\">Useful Links<\/h2>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n\t\t\t<p class=\"has-small-font-size\">Links I found useful and wanted to share.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\n\t\t<!-- wp:navigation {\"overlayMenu\":\"never\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"400\"},\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"fontSize\":\"small\"} -->\n\t\t<!-- wp:navigation-link {\"label\":\"Latest inflation report\",\"url\":\"#\",\"className\":\"is-style-arrow-link\",\"style\":{\"typography\":{\"textDecoration\":\"underline\"}}} \/-->\n\t\t<!-- wp:navigation-link {\"label\":\"Financial apps for families\",\"url\":\"#\",\"className\":\"is-style-arrow-link\",\"style\":{\"typography\":{\"textDecoration\":\"underline\"}}} \/-->\n\t\t<!-- \/wp:navigation -->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:separator {\"backgroundColor\":\"contrast\",\"className\":\"is-style-wide\"} -->\n\t<hr class=\"wp-block-separator has-text-color has-contrast-color has-alpha-channel-opacity has-contrast-background-color has-background is-style-wide\"\/>\n\t<!-- \/wp:separator -->\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"16px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"1.6rem\"}}} -->\n\t\t<h2 class=\"wp-block-heading\" style=\"font-size:1.6rem\">Search the website<\/h2>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:search {\"label\":\"Search\",\"showLabel\":false,\"placeholder\":\"Search...\",\"width\":100,\"widthUnit\":\"%\",\"buttonText\":\"Search\"} \/-->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "inserter": false
  },
  {
      "name": "twentytwentyfour\/page-about-business",
      "title": "About",
      "content": "\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-title-left-image-right\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-project-details\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/cta-services-image-left\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/team-4-col\"} \/-->\n<!-- wp:pattern {\"slug\":\"clients-section\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-faq\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/cta-content-image-on-right\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "page"
      ],
      "keywords": [
          "starter"
      ],
      "block_types": [
          "core\/post-content"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/page-home-blogging",
      "title": "Blogging home",
      "content": "\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-centered-statement-small\"} \/-->\n\n<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|40\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignwide\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"1rem\",\"left\":\"1rem\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"width\":\"10%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:10%\">\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"60%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:60%\">\n\t\t\t<!-- wp:query {\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":true}} -->\n\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t<!-- wp:post-template -->\n\t\t\t\t<!-- wp:group {\"tagName\":\"article\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\"}} -->\n\t\t\t\t<article class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:post-featured-image \/-->\n\n\t\t\t\t\t<!-- wp:post-title {\"isLink\":true,\"fontSize\":\"large\"} \/-->\n\n\t\t\t\t\t<!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/-->\n\n\t\t\t\t<\/article>\n\t\t\t\t<!-- \/wp:group -->\n\n\t\t\t\t<!-- wp:post-excerpt {\"moreText\":\"\",\"excerptLength\":40} \/-->\n\n\t\t\t\t<!-- wp:spacer -->\n\t\t\t\t<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\t\t\t\t<!-- \/wp:post-template -->\n\n\t\t\t\t<!-- wp:query-pagination {\"paginationArrow\":\"arrow\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n\t\t\t\t<!-- wp:query-pagination-previous \/-->\n\n\t\t\t\t<!-- wp:query-pagination-numbers \/-->\n\n\t\t\t\t<!-- wp:query-pagination-next \/-->\n\t\t\t\t<!-- \/wp:query-pagination -->\n\n\t\t\t\t<!-- wp:query-no-results -->\n\t\t\t\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-no-results\"} \/-->\n\t\t\t\t<!-- \/wp:query-no-results -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:query -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"10%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:10%\">\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"30%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:30%\">\n\t\t\t<!-- wp:template-part {\"slug\":\"sidebar\",\"tagName\":\"aside\",\"theme\":\"twentytwentyfour\"} \/-->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"10%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:10%\">\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/cta-subscribe-centered\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "page"
      ],
      "keywords": [
          "page",
          "starter"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/page-home-business",
      "title": "Business home",
      "content": "\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/banner-hero\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-feature-grid-3-col\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-alternating-images\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/testimonial-centered\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-list\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/cta-subscribe-centered\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "page"
      ],
      "keywords": [
          "starter"
      ],
      "block_types": [
          "core\/post-content"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/page-home-gallery",
      "title": "Portfolio home image gallery",
      "content": "\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-portfolio-hero\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/gallery-offset-images-grid-4-col\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "page"
      ],
      "keywords": [
          "starter"
      ],
      "block_types": [
          "core\/post-content"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/page-home-portfolio",
      "title": "Portfolio home with post featured images",
      "content": "\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-portfolio-hero\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-images-only-offset-4-col\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "page"
      ],
      "keywords": [
          "starter"
      ],
      "block_types": [
          "core\/post-content"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/page-newsletter-landing",
      "title": "Newsletter landing",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"top\":\"var:preset|spacing|60\",\"bottom\":\"var:preset|spacing|60\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}},\"dimensions\":{\"minHeight\":\"100vh\"}},\"backgroundColor\":\"accent-3\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\",\"verticalAlignment\":\"center\"}} -->\n<div class=\"wp-block-group alignfull has-accent-3-background-color has-background\" style=\"min-height:100vh;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:image {\"align\":\"center\",\"width\":\"45px\",\"height\":\"49px\",\"scale\":\"cover\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->\n\t\t<figure class=\"wp-block-image aligncenter size-full is-resized\">\n\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/icon-message.webp\" alt=\"\" style=\"object-fit:cover;width:45px;height:49px\" \/>\n\t\t<\/figure>\n\t\t<!-- \/wp:image -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:heading {\"textAlign\":\"center\",\"style\":{\"spacing\":{\"margin\":{\"right\":\"0\",\"left\":\"0\"},\"padding\":{\"right\":\"0\",\"left\":\"0\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"contrast\",\"fontSize\":\"x-large\"} -->\n\t\t<h2 class=\"wp-block-heading has-text-align-center has-contrast-color has-text-color has-link-color has-x-large-font-size\" style=\"margin-right:0;margin-left:0;padding-right:0;padding-left:0\">Subscribe to the newsletter and stay connected with our community<\/h2>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n\t\t<div class=\"wp-block-buttons\">\n\t\t\t<!-- wp:button -->\n\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Sign up<\/a>\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:button -->\n\t\t<\/div>\n\t\t<!-- \/wp:buttons -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1100,
      "categories": [
          "call-to-action",
          "page",
          "featured"
      ],
      "keywords": [
          "starter"
      ],
      "block_types": [
          "core\/post-content"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/page-portfolio-overview",
      "title": "Portfolio project overview",
      "content": "\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/banner-project-description\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-project-details\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/gallery-full-screen-image\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/text-centered-statement\"} \/-->\n<!-- wp:pattern {\"slug\":\"twentytwentyfour\/gallery-project-layout\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "page",
          "featured"
      ],
      "keywords": [
          "starter"
      ],
      "block_types": [
          "core\/post-content"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/page-rsvp-landing",
      "title": "RSVP landing",
      "content": "\n<!-- wp:group {\"metadata\":{\"name\":\"RSVP Landing Page\"},\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}},\"dimensions\":{\"minHeight\":\"100vh\"}},\"backgroundColor\":\"accent-4\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"verticalAlignment\":\"center\",\"justifyContent\":\"center\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group alignfull has-accent-4-background-color has-background\" style=\"min-height:100vh;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"verticalAlignment\":\"center\",\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\"}}}} -->\n\t<div class=\"wp-block-columns alignwide are-vertically-aligned-center\">\n\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"40%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:40%\">\n\t\t\t<!-- wp:group {\"style\":{\"dimensions\":{\"minHeight\":\"100%\"},\"spacing\":{\"blockGap\":\"var:preset|spacing|50\",\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"right\":\"0\",\"left\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n\t\t\t<div class=\"wp-block-group\" style=\"min-height:100%;margin-top:0;margin-bottom:0;padding-right:0;padding-left:0\">\n\t\t\t\t<!-- wp:heading {\"textAlign\":\"right\",\"level\":1,\"style\":{\"typography\":{\"fontSize\":\"12rem\",\"writingMode\":\"vertical-rl\",\"lineHeight\":\"1\"},\"spacing\":{\"margin\":{\"right\":\"0\",\"left\":\"calc( var(\\u002d\\u002dwp\\u002d\\u002dpreset\\u002d\\u002dspacing\\u002d\\u002d20) * -1)\"}}}} -->\n\t\t\t\t\t<h1 class=\"wp-block-heading has-text-align-right\" style=\"margin-right:0;margin-left:calc( var(--wp--preset--spacing--20) * -1);font-size:12rem;line-height:1;writing-mode:vertical-rl\">RSVP<\/h1>\n\t\t\t\t<!-- \/wp:heading -->\n\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"right\":\"0\",\"left\":\"0\"}}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"300px\",\"justifyContent\":\"left\"}} -->\n\t\t\t\t<div class=\"wp-block-group\" style=\"padding-right:0;padding-left:0\">\n\t\t\t\t\t<!-- wp:paragraph {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"}}} -->\n\t\t\t\t\t\t<p>Experience the fusion of imagination and expertise with \u00c9tudes Arch Summit, February 2025.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t\t<!-- wp:buttons -->\n\t\t\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t\t\t<!-- wp:button -->\n\t\t\t\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">Reserve your spot<\/a>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<!-- \/wp:button -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:buttons -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t\t<!-- wp:column {\"verticalAlignment\":\"top\",\"width\":\"60%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-top\" style=\"flex-basis:60%\">\n\t\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t\t\t<figure class=\"wp-block-image size-large is-style-rounded\">\n\t\t\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/green-staircase.webp\" alt=\"Green staircase at Western University, London, Canada\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t\t\t<\/figure>\n\t\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1100,
      "categories": [
          "page"
      ],
      "keywords": [
          "starter"
      ],
      "block_types": [
          "core\/post-content"
      ],
      "post_types": [
          "page",
          "wp_template"
      ]
  },
  {
      "name": "twentytwentyfour\/posts-1-col",
      "title": "List of posts, 1 column",
      "content": "\n<!-- wp:query {\"query\":{\"perPage\":3,\"pages\":0,\"offset\":\"0\",\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":true},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-query\">\n\t<!-- wp:query-no-results -->\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-no-results\"} \/-->\n\t<!-- \/wp:query-no-results -->\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"0\",\"right\":\"0\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n\t<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:0;padding-bottom:var(--wp--preset--spacing--50);padding-left:0\">\n\t\t<!-- wp:post-template {\"align\":\"full\",\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|40\"}},\"layout\":{\"type\":\"default\",\"columnCount\":3}} -->\n\t\t<!-- wp:post-featured-image {\"isLink\":true,\"aspectRatio\":\"3\/2\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"var:preset|spacing|20\"}}}} \/-->\n\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"8px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:post-title {\"isLink\":true,\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"0\"}}},\"fontSize\":\"x-large\"} \/-->\n\t\t\t<!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/-->\n\t\t\t<!-- wp:post-excerpt {\"fontSize\":\"small\"} \/-->\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|30\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\t\t<!-- \/wp:post-template -->\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t\t<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\t\t<!-- wp:query-pagination {\"paginationArrow\":\"arrow\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n\t\t<!-- wp:query-pagination-previous \/-->\n\t\t<!-- wp:query-pagination-next \/-->\n\t\t<!-- \/wp:query-pagination -->\n\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:query -->\n",
      "description": "",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ]
  },
  {
      "name": "twentytwentyfour\/posts-3-col",
      "title": "List of posts, 3 columns",
      "content": "\n<!-- wp:query {\"query\":{\"perPage\":10,\"pages\":0,\"offset\":\"0\",\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":true},\"align\":\"wide\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-query alignwide\">\n\t<!-- wp:query-no-results -->\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-no-results\"} \/-->\n\t<!-- \/wp:query-no-results -->\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"0\",\"right\":\"0\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n\t<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:0;padding-bottom:var(--wp--preset--spacing--50);padding-left:0\">\n\n\t\t<!-- wp:post-template {\"align\":\"full\",\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|30\"}},\"layout\":{\"type\":\"grid\",\"columnCount\":3}} -->\n\n\t\t<!-- wp:post-featured-image {\"isLink\":true,\"aspectRatio\":\"3\/4\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"0\"},\"padding\":{\"bottom\":\"var:preset|spacing|20\"}}}} \/-->\n\n\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"10px\",\"margin\":{\"top\":\"var:preset|spacing|20\"},\"padding\":{\"top\":\"0\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n\t\t<div class=\"wp-block-group\" style=\"margin-top:var(--wp--preset--spacing--20);padding-top:0\">\n\t\t\t<!-- wp:post-title {\"isLink\":true,\"style\":{\"layout\":{\"flexSize\":\"min(2.5rem, 3vw)\",\"selfStretch\":\"fixed\"}},\"fontSize\":\"large\"} \/-->\n\n\t\t\t<!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/-->\n\n\t\t\t<!-- wp:post-excerpt {\"style\":{\"layout\":{\"flexSize\":\"min(2.5rem, 3vw)\",\"selfStretch\":\"fixed\"}},\"textColor\":\"contrast-2\",\"fontSize\":\"small\"} \/-->\n\n\t\t\t<!-- wp:spacer {\"height\":\"0px\",\"style\":{\"layout\":{\"flexSize\":\"min(2.5rem, 3vw)\",\"selfStretch\":\"fixed\"}}} -->\n\t\t\t<div style=\"height:0px\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\n\t\t<!-- \/wp:post-template -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t\t<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:query-pagination {\"paginationArrow\":\"arrow\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n\t\t<!-- wp:query-pagination-previous \/-->\n\t\t<!-- wp:query-pagination-next \/-->\n\t\t<!-- \/wp:query-pagination -->\n\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:query -->\n",
      "description": "",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ]
  },
  {
      "name": "twentytwentyfour\/posts-grid-2-col",
      "title": "Grid of posts featuring the first post, 2 columns",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:heading {\"align\":\"wide\",\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"margin\":{\"top\":\"0\"}}},\"fontSize\":\"x-large\"} -->\n\t<h2 class=\"wp-block-heading alignwide has-x-large-font-size\" style=\"margin-top:0;line-height:1\">Watch, Read, Listen<\/h2>\n\t<!-- \/wp:heading -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|30\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"width\":\"60%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:60%\">\n\t\t\t<!-- wp:query {\"query\":{\"perPage\":1,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"exclude\",\"inherit\":false}} -->\n\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t<!-- wp:post-template {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t\t\t<!-- wp:post-featured-image {\"isLink\":true,\"aspectRatio\":\"3\/4\"} \/-->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:post-title {\"level\":3,\"isLink\":true,\"fontSize\":\"x-large\"} \/-->\n\n\t\t\t\t\t<!-- wp:post-excerpt {\"excerptLength\":35} \/-->\n\n\t\t\t\t\t<!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/-->\n\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:query -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"40%\"} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:40%\">\n\t\t\t<!-- wp:query {\"query\":{\"perPage\":2,\"pages\":0,\"offset\":1,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false}} -->\n\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t<!-- wp:post-template {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|40\"}}} -->\n\t\t\t\t<!-- wp:post-featured-image {\"isLink\":true,\"aspectRatio\":\"4\/3\"} \/-->\n\n\t\t\t\t<!-- wp:spacer {\"height\":\"5px\",\"style\":{\"layout\":[]}} -->\n\t\t\t\t<div style=\"height:5px\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"8px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t\t<!-- wp:post-title {\"level\":3,\"isLink\":true,\"fontSize\":\"large\"} \/-->\n\n\t\t\t\t\t<!-- wp:post-excerpt {\"excerptLength\":14,\"fontSize\":\"small\"} \/-->\n\t\t\t\t\t<!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/-->\n\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:query -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ]
  },
  {
      "name": "twentytwentyfour\/posts-images-only-3-col",
      "title": "Posts with featured images only, 3 columns",
      "content": "\n<!-- wp:query {\"query\":{\"perPage\":10,\"pages\":0,\"offset\":\"0\",\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":true},\"align\":\"wide\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-query alignwide\">\n\t<!-- wp:query-no-results -->\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-no-results\"} \/-->\n\t<!-- \/wp:query-no-results -->\n\n\t<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"0\",\"right\":\"0\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n\t<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:0;padding-bottom:var(--wp--preset--spacing--50);padding-left:0\">\n\n\t\t<!-- wp:post-template {\"align\":\"full\",\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|30\"}},\"layout\":{\"type\":\"grid\",\"columnCount\":3}} -->\n\t\t<!-- wp:post-featured-image {\"isLink\":true,\"aspectRatio\":\"3\/4\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"0\"},\"padding\":{\"bottom\":\"var:preset|spacing|20\"}}}} \/-->\n\t\t<!-- \/wp:post-template -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t\t<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:query-pagination {\"paginationArrow\":\"arrow\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n\t\t<!-- wp:query-pagination-previous \/-->\n\t\t<!-- wp:query-pagination-next \/-->\n\t\t<!-- \/wp:query-pagination -->\n\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:query -->\n",
      "description": "",
      "categories": [
          "posts"
      ],
      "block_types": [
          "core\/query"
      ]
  },
  {
      "name": "twentytwentyfour\/posts-images-only-offset-4-col",
      "title": "Offset posts with featured images only, 4 columns",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"0\",\"left\":\"var:preset|spacing|40\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\" style=\"margin-top:0;margin-bottom:0\">\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:query {\"query\":{\"perPage\":\"3\",\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false}} -->\n\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t<!-- wp:post-template {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|50\"}},\"layout\":{\"type\":\"default\"}} -->\n\t\t\t\t<!-- wp:post-featured-image {\"isLink\":true,\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"0\"}}}} \/-->\n\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:query -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\",\"padding\":{\"top\":\"0\"}}}} -->\n\t\t<div class=\"wp-block-column\" style=\"padding-top:0\">\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:query {\"query\":{\"perPage\":\"3\",\"pages\":0,\"offset\":\"3\",\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"exclude\",\"inherit\":false}} -->\n\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t<!-- wp:post-template {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|50\"}},\"layout\":{\"type\":\"default\"}} -->\n\t\t\t\t<!-- wp:post-featured-image {\"isLink\":true,\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"0\",\"top\":\"0\"}}}} \/-->\n\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:query -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:query {\"query\":{\"perPage\":\"3\",\"pages\":0,\"offset\":\"6\",\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"exclude\",\"inherit\":false}} -->\n\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t<!-- wp:post-template {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|50\"}},\"layout\":{\"type\":\"default\"}} -->\n\t\t\t\t<!-- wp:post-featured-image {\"isLink\":true,\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"0\"}}}} \/-->\n\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:query -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"0\",\"padding\":{\"top\":\"0\"}}}} -->\n\t\t<div class=\"wp-block-column\" style=\"padding-top:0\">\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:query {\"query\":{\"perPage\":\"3\",\"pages\":0,\"offset\":\"9\",\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"exclude\",\"inherit\":false}} -->\n\t\t\t<div class=\"wp-block-query\">\n\t\t\t\t<!-- wp:post-template {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|50\"}},\"layout\":{\"type\":\"default\"}} -->\n\t\t\t\t<!-- wp:post-featured-image {\"isLink\":true,\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} \/-->\n\t\t\t\t<!-- \/wp:post-template -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:query -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:spacer -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "categories": [
          "posts"
      ]
  },
  {
      "name": "twentytwentyfour\/posts-list",
      "title": "List of posts without images, 1 column",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:heading {\"align\":\"wide\",\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"var:preset|spacing|40\"}}},\"fontSize\":\"x-large\"} -->\n\t\t<h2 class=\"wp-block-heading alignwide has-x-large-font-size\" style=\"margin-top:0;margin-bottom:var(--wp--preset--spacing--40);line-height:1\">Watch, Read, Listen<\/h2>\n\t<!-- \/wp:heading -->\n\n\t<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group alignwide\">\n\t\t<!-- wp:query {\"query\":{\"perPage\":10,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":true},\"align\":\"wide\",\"layout\":{\"type\":\"default\"}} -->\n\t\t<div class=\"wp-block-query alignwide\">\n\t\t\t<!-- wp:post-template -->\n\t\t\t<!-- wp:separator {\"backgroundColor\":\"contrast-3\",\"className\":\"alignwide is-style-wide\"} -->\n\t\t\t<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background alignwide is-style-wide\" \/>\n\t\t\t<!-- \/wp:separator -->\n\n\t\t\t<!-- wp:columns {\"verticalAlignment\":\"center\",\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"var:preset|spacing|20\",\"bottom\":\"var:preset|spacing|20\"}}}} -->\n\t\t\t<div class=\"wp-block-columns alignwide are-vertically-aligned-center\" style=\"margin-top:var(--wp--preset--spacing--20);margin-bottom:var(--wp--preset--spacing--20)\">\n\t\t\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"72%\"} -->\n\t\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:72%\">\n\t\t\t\t\t<!-- wp:post-title {\"isLink\":true,\"style\":{\"typography\":{\"lineHeight\":\"1.1\",\"fontSize\":\"1.5rem\"}}} \/-->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:column -->\n\n\t\t\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"28%\"} -->\n\t\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:28%\">\n\t\t\t\t\t<!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/-->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:column -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:columns -->\n\t\t\t<!-- \/wp:post-template -->\n\n\t\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|30\"} -->\n\t\t\t<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t\t<!-- \/wp:spacer -->\n\n\t\t\t<!-- wp:query-pagination {\"paginationArrow\":\"arrow\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n\t\t\t<!-- wp:query-pagination-previous \/-->\n\n\t\t\t<!-- wp:query-pagination-numbers \/-->\n\n\t\t\t<!-- wp:query-pagination-next \/-->\n\t\t\t<!-- \/wp:query-pagination -->\n\n\t\t\t<!-- wp:query-no-results -->\n\t\t\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-no-results\"} \/-->\n\t\t\t<!-- \/wp:query-no-results -->\n\t\t<\/div>\n\t\t<!-- \/wp:query -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "categories": [
          "posts",
          "posts"
      ],
      "block_types": [
          "core\/query"
      ]
  },
  {
      "name": "twentytwentyfour\/team-4-col",
      "title": "Team members, 4 columns",
      "content": "\n<!-- wp:group {\"metadata\":{\"name\":\"Team members\"},\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:heading {\"textAlign\":\"center\",\"fontSize\":\"xx-large\"} -->\n\t\t<h2 class=\"wp-block-heading has-text-align-center has-xx-large-font-size\">Meet our team<\/h2>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t<p class=\"has-text-align-center\">Our comprehensive suite of professionals caters to a diverse team, ranging from seasoned architects to renowned engineers.<\/p>\n\t\t<!-- \/wp:paragraph -->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|30\"} -->\n\t<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"0\",\"left\":\"0\"},\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|30\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\" style=\"padding-right:0;padding-left:0\">\n\t\t<!-- wp:column {\"layout\":{\"type\":\"default\"}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-full is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"center\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">\n\t\t\t\t\t<strong>Francesca Piovani<\/strong>\n\t\t\t\t<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">Founder, CEO &amp; Architect<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"layout\":{\"type\":\"default\"}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-full is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\",\"flexWrap\":\"nowrap\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">\n\t\t\t\t\t<strong>Rhye Moore<\/strong>\n\t\t\t\t<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">Engineering Manager<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"layout\":{\"type\":\"default\"}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-full is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\",\"flexWrap\":\"nowrap\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">\n\t\t\t\t\t<strong>Helga Steiner<\/strong>\n\t\t\t\t<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">Architect<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"layout\":{\"type\":\"default\"}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"1\",\"scale\":\"cover\",\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-full is-style-rounded\">\n\t\t\t\t<img alt=\"\" style=\"aspect-ratio:1;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"center\"}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">\n\t\t\t\t\t<strong>Ivan Lawrence<\/strong>\n\t\t\t\t<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n\t\t\t\t<p class=\"has-text-align-center has-small-font-size\">Project Manager<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "team",
          "about"
      ]
  },
  {
      "name": "twentytwentyfour\/template-archive-blogging",
      "title": "Blogging archive template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"style\":{\"spacing\":{\"blockGap\":\"0\",\"margin\":{\"top\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<main class=\"wp-block-group\" style=\"margin-top:0\">\n\t<!-- wp:query-title {\"type\":\"archive\",\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\"}}}} \/-->\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-1-col\"} \/-->\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "archive",
          "category",
          "tag",
          "author",
          "date"
      ]
  },
  {
      "name": "twentytwentyfour\/template-archive-portfolio",
      "title": "Portfolio archive template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"align\":\"full\",\"layout\":{\"type\":\"constrained\"}} -->\n<main class=\"wp-block-group alignfull\">\n\n\t<!-- wp:query-title {\"type\":\"archive\",\"align\":\"wide\",\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\"}}}} \/-->\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-images-only-3-col\"} \/-->\n\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "archive"
      ]
  },
  {
      "name": "twentytwentyfour\/template-home-blogging",
      "title": "Blogging home template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"right\":\"0\"},\"blockGap\":\"0\",\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"default\"},\"tagName\":\"main\"} -->\n<main class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0\">\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/page-home-blogging\"} \/-->\n\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "front-page",
          "index",
          "home"
      ]
  },
  {
      "name": "twentytwentyfour\/template-home-business",
      "title": "Business home template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"style\":{\"spacing\":{\"blockGap\":\"0\",\"margin\":{\"top\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n<main class=\"wp-block-group\" style=\"margin-top:0\">\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/page-home-business\"} \/-->\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "front-page",
          "home"
      ]
  },
  {
      "name": "twentytwentyfour\/template-home-portfolio",
      "title": "Portfolio home template with post featured images",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"right\":\"0\"},\"blockGap\":\"0\",\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"default\"},\"tagName\":\"main\"} -->\n<main class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0\">\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-portfolio-hero\"} \/-->\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-images-only-offset-4-col\"} \/-->\n\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "front-page",
          "home"
      ]
  },
  {
      "name": "twentytwentyfour\/template-index-blogging",
      "title": "Blogging index template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"style\":{\"spacing\":{\"blockGap\":\"0\",\"margin\":{\"top\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<main class=\"wp-block-group\" style=\"margin-top:0\">\n\t<!-- wp:heading {\"level\":1,\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\"}}}} -->\n\t<h1 class=\"wp-block-heading\" style=\"padding-top:var(--wp--preset--spacing--50);line-height:1\">Watch, Read, Listen<\/h1>\n\t<!-- \/wp:heading -->\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-1-col\"} \/-->\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "index",
          "home"
      ]
  },
  {
      "name": "twentytwentyfour\/template-index-portfolio",
      "title": "Portfolio index template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"align\":\"full\",\"layout\":{\"type\":\"constrained\"}} -->\n<main class=\"wp-block-group alignfull\">\n\t<!-- wp:heading {\"level\":1,\"align\":\"wide\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\"}}}} -->\n\t<h1 class=\"wp-block-heading alignwide\" style=\"padding-top:var(--wp--preset--spacing--50)\">Posts<\/h1>\n\t<!-- \/wp:heading -->\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-images-only-offset-4-col\"} \/-->\n\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "index"
      ]
  },
  {
      "name": "twentytwentyfour\/template-search-blogging",
      "title": "Blogging search template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"style\":{\"spacing\":{\"blockGap\":\"0\",\"margin\":{\"top\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<main class=\"wp-block-group\" style=\"margin-top:0\">\n\t<!-- wp:group {\"layout\":{\"type\":\"default\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:query-title {\"type\":\"search\",\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|30\"}}}} \/-->\n\t\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-search\"} \/-->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-1-col\"} \/-->\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "search"
      ]
  },
  {
      "name": "twentytwentyfour\/template-search-portfolio",
      "title": "Portfolio search template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"align\":\"full\",\"layout\":{\"type\":\"constrained\"}} -->\n<main class=\"wp-block-group alignfull\">\n\t<!-- wp:query-title {\"type\":\"search\",\"align\":\"wide\",\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|10\"}}}} \/-->\n\n\t<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"constrained\",\"contentSize\":\"840px\",\"justifyContent\":\"left\"}} -->\n\t<div class=\"wp-block-group alignwide\">\n\t\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/hidden-search\"} \/-->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:pattern {\"slug\":\"twentytwentyfour\/posts-images-only-3-col\"} \/-->\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "search"
      ]
  },
  {
      "name": "twentytwentyfour\/template-single-portfolio",
      "title": "Portfolio single post template",
      "content": "\n<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\",\"align\":\"full\",\"layout\":{\"type\":\"constrained\"}} -->\n<main class=\"wp-block-group alignfull\">\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\"} -->\n\t<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:post-featured-image {\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"var:preset|spacing|20\"}}}} \/-->\n\n\t<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"constrained\",\"justifyContent\":\"left\"}} -->\n\t<div class=\"wp-block-group alignwide\">\n\t\t<!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/-->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\"} -->\n\t<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n",
      "description": "",
      "viewport_width": 1400,
      "inserter": false,
      "template_types": [
          "posts",
          "single"
      ]
  },
  {
      "name": "twentytwentyfour\/testimonial-centered",
      "title": "Centered testimonial",
      "content": "\n<!-- wp:group {\"metadata\":{\"name\":\"Testimonial\"},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|60\",\"bottom\":\"var:preset|spacing|60\",\"left\":\"var:preset|spacing|60\",\"right\":\"var:preset|spacing|60\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"backgroundColor\":\"contrast\",\"textColor\":\"base\",\"layout\":{\"type\":\"constrained\",\"contentSize\":\"\"}} -->\n<div class=\"wp-block-group alignfull has-base-color has-contrast-background-color has-text-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)\">\n\t<!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"lineHeight\":\"1.2\"}},\"textColor\":\"base\",\"fontSize\":\"x-large\",\"fontFamily\":\"heading\"} -->\n\t\t<p class=\"has-text-align-center has-base-color has-text-color has-heading-font-family has-x-large-font-size\" style=\"line-height:1.2\">\n\t\t\t<em>\u201c\u00c9tudes has saved us thousands of hours of work and has unlocked insights we never thought possible.\u201d<\/em>\n\t\t<\/p>\n\t\t<!-- \/wp:paragraph -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:group {\"metadata\":{\"name\":\"Testimonial source\"},\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\",\"flexWrap\":\"nowrap\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:image {\"align\":\"center\",\"width\":\"60px\",\"aspectRatio\":\"1\",\"scale\":\"cover\",\"sizeSlug\":\"thumbnail\",\"linkDestination\":\"none\",\"style\":{\"border\":{\"radius\":\"100px\"}}} -->\n\t\t\t<figure class=\"wp-block-image aligncenter size-thumbnail is-resized has-custom-border\">\n\t\t\t\t<img alt=\"\" style=\"border-radius:100px;aspect-ratio:1;object-fit:cover;width:60px\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"var:preset|spacing|10\",\"bottom\":\"0\"}}}} -->\n\t\t\t<p class=\"has-text-align-center\" style=\"margin-top:var(--wp--preset--spacing--10);margin-bottom:0\">Annie Steiner<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"300\"}},\"textColor\":\"contrast-3\",\"fontSize\":\"small\"} -->\n\t\t\t<p class=\"has-text-align-center has-contrast-3-color has-text-color has-small-font-size\" style=\"font-style:normal;font-weight:300\">CEO, Greenprint<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1300,
      "categories": [
          "testimonials",
          "text"
      ],
      "keywords": [
          "quote",
          "review",
          "about"
      ]
  },
  {
      "name": "twentytwentyfour\/text-alternating-images",
      "title": "Text with alternating images",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group alignwide\">\n\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n\t\t<div class=\"wp-block-group\">\n\n\t\t\t<!-- wp:heading {\"textAlign\":\"center\",\"className\":\"is-style-asterisk\"} -->\n\t\t\t<h2 class=\"wp-block-heading has-text-align-center is-style-asterisk\">An array of resources<\/h2>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"layout\":{\"selfStretch\":\"fit\",\"flexSize\":null}}} -->\n\t\t\t<p class=\"has-text-align-center\">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|60\"}}}} -->\n\t\t<div class=\"wp-block-columns alignwide\">\n\t\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"40%\"} -->\n\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:40%\">\n\t\t\t\t<!-- wp:heading {\"level\":3,\"className\":\"is-style-asterisk\"} -->\n\t\t\t\t<h3 class=\"wp-block-heading is-style-asterisk\">\u00c9tudes Architect App<\/h3>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:list {\"style\":{\"typography\":{\"lineHeight\":\"1.75\"}},\"className\":\"is-style-checkmark-list\"} -->\n\t\t\t\t<ul class=\"is-style-checkmark-list\" style=\"line-height:1.75\">\n\n\t\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t\t<li>Collaborate with fellow architects.<\/li>\n\t\t\t\t\t<!-- \/wp:list-item -->\n\n\t\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t\t<li>Showcase your projects.<\/li>\n\t\t\t\t\t<!-- \/wp:list-item -->\n\n\t\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t\t<li>Experience the world of architecture.<\/li>\n\t\t\t\t\t<!-- \/wp:list-item -->\n\n\t\t\t\t<\/ul>\n\t\t\t\t<!-- \/wp:list -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\n\t\t\t<!-- wp:column {\"width\":\"50%\"} -->\n\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:50%\">\n\t\t\t\t<!-- wp:image {\"aspectRatio\":\"4\/3\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t\t<figure class=\"wp-block-image size-large is-style-rounded\">\n\t\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/tourist-and-building.webp\" alt=\"Tourist taking photo of a building\" \/>\n\t\t\t\t<\/figure>\n\t\t\t\t<!-- \/wp:image -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\t\t<\/div>\n\t\t<!-- \/wp:columns -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|60\"}}}} -->\n\t\t<div class=\"wp-block-columns alignwide\">\n\t\t\t<!-- wp:column {\"width\":\"50%\"} -->\n\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:50%\">\n\t\t\t\t<!-- wp:image {\"aspectRatio\":\"4\/3\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t\t<figure class=\"wp-block-image size-large is-style-rounded\">\n\t\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/windows.webp\" alt=\"Windows of a building in Nuremberg, Germany\" \/>\n\t\t\t\t<\/figure>\n\t\t\t\t<!-- \/wp:image -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\n\t\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"40%\"} -->\n\t\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:40%\">\n\t\t\t\t<!-- wp:heading {\"level\":3,\"className\":\"is-style-asterisk\"} -->\n\t\t\t\t<h3 class=\"wp-block-heading is-style-asterisk\">\u00c9tudes Newsletter<\/h3>\n\t\t\t\t<!-- \/wp:heading -->\n\n\t\t\t\t<!-- wp:list {\"style\":{\"typography\":{\"lineHeight\":\"1.75\"}},\"className\":\"is-style-checkmark-list\"} -->\n\t\t\t\t<ul class=\"is-style-checkmark-list\" style=\"line-height:1.75\">\n\t\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t\t<li>A world of thought-provoking articles.<\/li>\n\t\t\t\t\t<!-- \/wp:list-item -->\n\n\t\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t\t<li>Case studies that celebrate architecture.<\/li>\n\t\t\t\t\t<!-- \/wp:list-item -->\n\n\t\t\t\t\t<!-- wp:list-item -->\n\t\t\t\t\t<li>Exclusive access to design insights.<\/li>\n\t\t\t\t\t<!-- \/wp:list-item -->\n\t\t\t\t<\/ul>\n\t\t\t\t<!-- \/wp:list -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:column -->\n\t\t<\/div>\n\t\t<!-- \/wp:columns -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "text",
          "about"
      ]
  },
  {
      "name": "twentytwentyfour\/text-centered-statement-small",
      "title": "Centered statement, small",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"800px\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\n\t<!-- wp:heading {\"textAlign\":\"center\",\"level\":1,\"fontSize\":\"x-large\"} -->\n\t<h1 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">\n\t\t<em>\n\t\tI write about finance, management and economy, my book \u201c<a href=\"#\" rel=\"nofollow\">Money Studies<\/a>\u201d is out now.\t\t<\/em>\n\t<\/h1>\n\t<!-- \/wp:heading -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1200,
      "categories": [
          "text",
          "about"
      ],
      "keywords": [
          "mission",
          "introduction"
      ]
  },
  {
      "name": "twentytwentyfour\/text-centered-statement",
      "title": "Centered statement",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|60\",\"bottom\":\"var:preset|spacing|60\",\"left\":\"var:preset|spacing|60\",\"right\":\"var:preset|spacing|60\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"backgroundColor\":\"base-2\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-base-2-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)\">\n\t<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"default\"}} -->\n\t<div class=\"wp-block-group alignwide\">\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"lineHeight\":\"1.2\",\"fontStyle\":\"normal\",\"fontWeight\":\"400\"}},\"fontSize\":\"x-large\",\"fontFamily\":\"heading\"} -->\n\t\t<p class=\"has-text-align-center has-heading-font-family has-x-large-font-size\" style=\"font-style:normal;font-weight:400;line-height:1.2\"><em>\u00c9tudes<\/em> is not confined to the past\u2014we are passionate about the cutting edge designs shaping our world today.<\/p>\n\t\t<!-- \/wp:paragraph -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "text",
          "about",
          "featured"
      ],
      "keywords": [
          "mission",
          "introduction"
      ]
  },
  {
      "name": "twentytwentyfour\/text-faq",
      "title": "FAQ",
      "content": "\n<!-- wp:group {\"metadata\":{\"name\":\"FAQs\"},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|base\"}}}},\"backgroundColor\":\"contrast\",\"textColor\":\"base\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-base-color has-contrast-background-color has-text-color has-background has-link-color\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:heading {\"align\":\"wide\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|base\"}}},\"typography\":{\"fontSize\":\"10rem\",\"letterSpacing\":\"-0.02em\"}},\"textColor\":\"base\"} -->\n\t<h2 class=\"wp-block-heading alignwide has-base-color has-text-color has-link-color\" style=\"font-size:10rem;letter-spacing:-0.02em\">FAQs<\/h2>\n\t<!-- \/wp:heading -->\n\n\t<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"default\"}} -->\n\t<div class=\"wp-block-group alignwide\">\n\t\t<!-- wp:separator {\"backgroundColor\":\"base\",\"className\":\"is-style-wide\"} -->\n\t\t<hr class=\"wp-block-separator has-text-color has-base-color has-alpha-channel-opacity has-base-background-color has-background is-style-wide\"\/>\n\t\t<!-- \/wp:separator -->\n\n\t\t<!-- wp:details {\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\"}},\"border\":{\"top\":{\"width\":\"0px\",\"style\":\"none\"},\"right\":{\"width\":\"0px\",\"style\":\"none\"},\"bottom\":{\"color\":\"var:preset|color|base\",\"style\":\"solid\",\"width\":\"1px\"},\"left\":{\"width\":\"0px\",\"style\":\"none\"}}},\"className\":\"is-style-arrow-icon-details\",\"fontSize\":\"medium\"} -->\n\t\t<details class=\"wp-block-details is-style-arrow-icon-details has-medium-font-size\" style=\"border-top-style:none;border-top-width:0px;border-right-style:none;border-right-width:0px;border-bottom-color:var(--wp--preset--color--base);border-bottom-style:solid;border-bottom-width:1px;border-left-style:none;border-left-width:0px;margin-top:0\">\n\t\t\t<summary>What is your process working in smaller projects?<\/summary>\n\t\t\t<!-- wp:paragraph {\"placeholder\":\"Type \/ to add a hidden block\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast-1\"}}}},\"textColor\":\"contrast-1\"} -->\n\t\t\t<p class=\"has-contrast-1-color has-text-color has-link-color\">\u00c9tudes offers comprehensive consulting, management, design, and research solutions. Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces. Every architectural endeavor is an opportunity to shape the future.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/details>\n\t\t<!-- \/wp:details -->\n\n\t\t<!-- wp:details {\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\"}},\"border\":{\"top\":{\"width\":\"0px\",\"style\":\"none\"},\"right\":{\"width\":\"0px\",\"style\":\"none\"},\"bottom\":{\"color\":\"var:preset|color|base\",\"style\":\"solid\",\"width\":\"1px\"},\"left\":{\"width\":\"0px\",\"style\":\"none\"}}},\"className\":\"is-style-arrow-icon-details\",\"fontSize\":\"medium\"} -->\n\t\t<details class=\"wp-block-details is-style-arrow-icon-details has-medium-font-size\" style=\"border-top-style:none;border-top-width:0px;border-right-style:none;border-right-width:0px;border-bottom-color:var(--wp--preset--color--base);border-bottom-style:solid;border-bottom-width:1px;border-left-style:none;border-left-width:0px;margin-top:0\">\n\t\t\t<summary>Who is behind \u00c9tudes?<\/summary>\n\t\t\t<!-- wp:paragraph {\"placeholder\":\"Type \/ to add a hidden block\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast-1\"}}}},\"textColor\":\"contrast-1\"} -->\n\t\t\t<p class=\"has-contrast-1-color has-text-color has-link-color\">\u00c9tudes offers comprehensive consulting, management, design, and research solutions. Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces. Every architectural endeavor is an opportunity to shape the future.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/details>\n\t\t<!-- \/wp:details -->\n\n\t\t<!-- wp:details {\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\"}},\"border\":{\"top\":{\"width\":\"0px\",\"style\":\"none\"},\"right\":{\"width\":\"0px\",\"style\":\"none\"},\"bottom\":{\"color\":\"var:preset|color|base\",\"style\":\"solid\",\"width\":\"1px\"},\"left\":{\"width\":\"0px\",\"style\":\"none\"}}},\"className\":\"is-style-arrow-icon-details\",\"fontSize\":\"medium\"} -->\n\t\t<details class=\"wp-block-details is-style-arrow-icon-details has-medium-font-size\" style=\"border-top-style:none;border-top-width:0px;border-right-style:none;border-right-width:0px;border-bottom-color:var(--wp--preset--color--base);border-bottom-style:solid;border-bottom-width:1px;border-left-style:none;border-left-width:0px;margin-top:0\">\n\t\t\t<summary>I&#039;d like to get to meet fellow architects, how can I do that?<\/summary>\n\t\t\t<!-- wp:paragraph {\"placeholder\":\"Type \/ to add a hidden block\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast-1\"}}}},\"textColor\":\"contrast-1\"} -->\n\t\t\t<p class=\"has-contrast-1-color has-text-color has-link-color\">\u00c9tudes offers comprehensive consulting, management, design, and research solutions. Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces. Every architectural endeavor is an opportunity to shape the future.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/details>\n\t\t<!-- \/wp:details -->\n\n\t\t<!-- wp:details {\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\"}},\"border\":{\"top\":{\"width\":\"0px\",\"style\":\"none\"},\"right\":{\"width\":\"0px\",\"style\":\"none\"},\"bottom\":{\"color\":\"var:preset|color|base\",\"style\":\"solid\",\"width\":\"1px\"},\"left\":{\"width\":\"0px\",\"style\":\"none\"}}},\"className\":\"is-style-arrow-icon-details\",\"fontSize\":\"medium\"} -->\n\t\t<details class=\"wp-block-details is-style-arrow-icon-details has-medium-font-size\" style=\"border-top-style:none;border-top-width:0px;border-right-style:none;border-right-width:0px;border-bottom-color:var(--wp--preset--color--base);border-bottom-style:solid;border-bottom-width:1px;border-left-style:none;border-left-width:0px;margin-top:0\">\n\t\t\t<summary>Can I apply to be a part of the team or work as a contractor?<\/summary>\n\t\t\t<!-- wp:paragraph {\"placeholder\":\"Type \/ to add a hidden block\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast-1\"}}}},\"textColor\":\"contrast-1\"} -->\n\t\t\t<p class=\"has-contrast-1-color has-text-color has-link-color\">\u00c9tudes offers comprehensive consulting, management, design, and research solutions. Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces. Every architectural endeavor is an opportunity to shape the future.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/details>\n\t\t<!-- \/wp:details -->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|10\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"var:preset|spacing|10\",\"bottom\":\"0\"}}}} -->\n\t\t<div style=\"margin-top:var(--wp--preset--spacing--10);margin-bottom:0;height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "text",
          "about",
          "featured"
      ],
      "keywords": [
          "faq",
          "about",
          "frequently",
          "asked"
      ]
  },
  {
      "name": "twentytwentyfour\/text-feature-grid-3-col",
      "title": "Feature grid, 3 columns",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"backgroundColor\":\"base-2\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-base-2-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:heading {\"textAlign\":\"center\",\"className\":\"is-style-asterisk\"} -->\n\t\t<h2 class=\"wp-block-heading has-text-align-center is-style-asterisk\">A passion for creating spaces<\/h2>\n\t\t<!-- \/wp:heading -->\n\n\t\t<!-- wp:spacer {\"height\":\"0px\",\"style\":{\"layout\":{\"flexSize\":\"1.25rem\",\"selfStretch\":\"fixed\"}}} -->\n\t\t<div style=\"height:0px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t\t<p class=\"has-text-align-center\">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.<\/p>\n\t\t<!-- \/wp:paragraph -->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|40\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|40\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Renovation and restoration<\/h3>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"left\"} -->\n\t\t\t<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Continuous Support<\/h3>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"left\"} -->\n\t\t\t<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">App Access<\/h3>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"left\"} -->\n\t\t\t<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n\n\t<!-- wp:spacer {\"height\":\"var:preset|spacing|20\"} -->\n\t<div style=\"height:var(--wp--preset--spacing--20)\" aria-hidden=\"true\" class=\"wp-block-spacer\">\n\t<\/div>\n\t<!-- \/wp:spacer -->\n\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|40\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Consulting<\/h3>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"left\"} -->\n\t\t\t<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Project Management<\/h3>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"left\"} -->\n\t\t\t<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n\t\t<div class=\"wp-block-column\">\n\t\t\t<!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n\t\t\t<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Architectural Solutions<\/h3>\n\t\t\t<!-- \/wp:heading -->\n\n\t\t\t<!-- wp:paragraph {\"align\":\"left\"} -->\n\t\t\t<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "text",
          "about"
      ]
  },
  {
      "name": "twentytwentyfour\/text-project-details",
      "title": "Project details",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"backgroundColor\":\"base\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-base-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|30\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"width\":\"40%\",\"layout\":{\"type\":\"constrained\",\"contentSize\":\"260px\",\"justifyContent\":\"left\"}} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:40%\">\n\t\t\t<!-- wp:paragraph -->\n\t\t\t<p>The revitalized art gallery is set to redefine cultural landscape.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"width\":\"60%\",\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|40\"}}} -->\n\t\t<div class=\"wp-block-column\" style=\"flex-basis:60%\">\n\n\t\t\t<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.2\"}},\"fontSize\":\"x-large\",\"fontFamily\":\"heading\"} -->\n\t\t\t<p class=\"has-heading-font-family has-x-large-font-size\" style=\"line-height:1.2\">With meticulous attention to detail and a commitment to excellence, we create spaces that inspire, elevate, and enrich the lives of those who inhabit them.<\/p>\n\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t<!-- wp:columns {\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}}}} -->\n\t\t\t<div class=\"wp-block-columns\">\n\t\t\t\t<!-- wp:column -->\n\t\t\t\t<div class=\"wp-block-column\">\n\t\t\t\t\t<!-- wp:paragraph {\"style\":{\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}}} -->\n\t\t\t\t\t<p>The revitalized Art Gallery is set to redefine the cultural landscape of Toronto, serving as a nexus of artistic expression, community engagement, and architectural marvel. The expansion and renovation project pay homage to the Art Gallery&#039;s rich history while embracing the future, ensuring that the gallery remains a beacon of inspiration.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:column -->\n\n\t\t\t\t<!-- wp:column -->\n\t\t\t\t<div class=\"wp-block-column\">\n\t\t\t\t\t<!-- wp:paragraph -->\n\t\t\t\t\t<p>The revitalized Art Gallery is set to redefine the cultural landscape of Toronto, serving as a nexus of artistic expression, community engagement, and architectural marvel. The expansion and renovation project pay homage to the Art Gallery&#039;s rich history while embracing the future, ensuring that the gallery remains a beacon of inspiration.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:column -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:columns -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "text",
          "portfolio"
      ]
  },
  {
      "name": "twentytwentyfour\/text-title-left-image-right",
      "title": "Title text and button on left with image on right",
      "content": "\n<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"backgroundColor\":\"accent\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-accent-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n\t<!-- wp:columns {\"verticalAlignment\":null,\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|50\"}}}} -->\n\t<div class=\"wp-block-columns alignwide\">\n\t\t<!-- wp:column {\"verticalAlignment\":\"stretch\",\"width\":\"50%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-stretch\" style=\"flex-basis:50%\">\n\t\t\t<!-- wp:group {\"style\":{\"dimensions\":{\"minHeight\":\"100%\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\",\"verticalAlignment\":\"space-between\"}} -->\n\t\t\t<div class=\"wp-block-group\" style=\"min-height:100%\">\n\n\t\t\t\t<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.2\"}},\"fontSize\":\"x-large\",\"fontFamily\":\"heading\"} -->\n\t\t\t\t<p class=\"has-heading-font-family has-x-large-font-size\" style=\"line-height:1.2\">\u00c9tudes offers comprehensive consulting, management, design, and research solutions. Every architectural endeavor is an opportunity to shape the future.<\/p>\n\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t<!-- wp:group {\"layout\":{\"type\":\"constrained\",\"contentSize\":\"300px\",\"justifyContent\":\"left\"}} -->\n\t\t\t\t<div class=\"wp-block-group\">\n\n\t\t\t\t\t<!-- wp:paragraph {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"}}} -->\n\t\t\t\t\t<p>Leaving an indelible mark on the landscape of tomorrow.<\/p>\n\t\t\t\t\t<!-- \/wp:paragraph -->\n\n\t\t\t\t\t<!-- wp:buttons -->\n\t\t\t\t\t<div class=\"wp-block-buttons\">\n\t\t\t\t\t\t<!-- wp:button -->\n\t\t\t\t\t\t<div class=\"wp-block-button\">\n\t\t\t\t\t\t\t<a class=\"wp-block-button__link wp-element-button\">About us<\/a>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<!-- \/wp:button -->\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<!-- \/wp:buttons -->\n\t\t\t\t<\/div>\n\t\t\t\t<!-- \/wp:group -->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\n\t\t<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"50%\"} -->\n\t\t<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:50%\">\n\t\t\t<!-- wp:image {\"aspectRatio\":\"3\/4\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n\t\t\t<figure class=\"wp-block-image size-large is-style-rounded\">\n\t\t\t\t<img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/museum.webp\" alt=\"A ramp along a curved wall in the Kiasma Museu, Helsinki, Finland\" style=\"aspect-ratio:3\/4;object-fit:cover\" \/>\n\t\t\t<\/figure>\n\t\t\t<!-- \/wp:image -->\n\t\t<\/div>\n\t\t<!-- \/wp:column -->\n\t<\/div>\n\t<!-- \/wp:columns -->\n<\/div>\n<!-- \/wp:group -->\n",
      "description": "",
      "viewport_width": 1400,
      "categories": [
          "banner",
          "about",
          "featured"
      ]
  },
  {
      "name": "core\/centered-image-with-two-tone-background-color",
      "title": "Centered image with two-tone background color",
      "content": "<!-- wp:cover {\"minHeight\":66,\"minHeightUnit\":\"vh\",\"customGradient\":\"linear-gradient(90deg,rgb(35,74,20) 50%,rgb(225,137,116) 50%)\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"5vw\",\"right\":\"5vw\",\"bottom\":\"5vw\",\"left\":\"5vw\"},\"margin\":{\"top\":\"0\"}}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;padding-top:5vw;padding-right:5vw;padding-bottom:5vw;padding-left:5vw;min-height:66vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim has-background-gradient\" style=\"background:linear-gradient(90deg,rgb(35,74,20) 50%,rgb(225,137,116) 50%)\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"},\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"600px\",\"wideSize\":\"1200px\"}} -->\n<div class=\"wp-block-group\"><!-- wp:spacer -->\n<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:image {\"sizeSlug\":\"large\",\"style\":{\"color\":{\"duotone\":[\"#000000\",\"#ffffff\"]}},\"className\":\"is-style-default\"} -->\n<figure class=\"wp-block-image size-large is-style-default\"><img src=\"https:\/\/pd.w.org\/2022\/03\/3866241b433db4ee2.96648572.jpeg\" alt=\"\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:spacer {\"height\":\"48px\"} -->\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"align\":\"wide\",\"style\":{\"typography\":{\"fontSize\":\"50px\",\"fontStyle\":\"normal\",\"fontWeight\":\"400\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"32px\",\"lineHeight\":\"1\"},\"spacing\":{\"padding\":{\"left\":\"32px\"}}},\"textColor\":\"white\"} -->\n<h2 class=\"wp-block-heading alignwide has-text-align-center has-white-color has-text-color\" style=\"padding-left:32px;font-size:50px;font-style:normal;font-weight:400;letter-spacing:32px;line-height:1;text-transform:uppercase\">Etcetera<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:spacer -->\n<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner",
          "images",
          "text"
      ],
      "keywords": [
          "Gradient",
          "Two-Tone"
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-dark-banner-with-heading-top-left",
      "title": "Fullwidth Dark Banner with Heading Top Left",
      "content": "<!-- wp:cover {\"url\":\"https:\/\/pd.w.org\/2022\/07\/87262c92d42acd1c3.73206444.jpg\",\"id\":333,\"dimRatio\":90,\"customOverlayColor\":\"#141414\",\"focalPoint\":{\"x\":0.5,\"y\":0},\"minHeight\":50,\"minHeightUnit\":\"vh\",\"contentPosition\":\"top left\",\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"5vw\",\"right\":\"5vw\",\"bottom\":\"5vw\",\"left\":\"5vw\"},\"margin\":{\"top\":\"0\"}}}} -->\n<div class=\"wp-block-cover alignfull has-custom-content-position is-position-top-left\" style=\"margin-top:0;padding-top:5vw;padding-right:5vw;padding-bottom:5vw;padding-left:5vw;min-height:50vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-90 has-background-dim\" style=\"background-color:#141414\"><\/span><img class=\"wp-block-cover__image-background wp-image-333\" alt=\"\" src=\"https:\/\/pd.w.org\/2022\/07\/87262c92d42acd1c3.73206444.jpg\" style=\"object-position:50% 0%\" data-object-fit=\"cover\" data-object-position=\"50% 0%\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"},\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"160px\",\"fontStyle\":\"italic\",\"fontWeight\":\"900\",\"lineHeight\":\"0.8\",\"letterSpacing\":\"-4px\",\"textTransform\":\"none\"},\"color\":{\"text\":\"#d8a557\"}},\"fontFamily\":\"source-serif-pro\"} -->\n<p class=\"has-text-align-left has-text-color has-source-serif-pro-font-family\" style=\"color:#d8a557;font-size:160px;font-style:italic;font-weight:900;letter-spacing:-4px;line-height:0.8;text-transform:none\">bud!<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner"
      ],
      "keywords": [
          "Jazz",
          "Fulllwidth"
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-cover-with-repeating-gradient-text",
      "title": "Fullwidth cover with repeating gradient text",
      "content": "<!-- wp:cover {\"url\":\"https:\/\/pd.w.org\/2022\/01\/95161f850d22f0c06.37817431.jpg\",\"id\":334,\"dimRatio\":60,\"customOverlayColor\":\"#c2b7a4\",\"focalPoint\":{\"x\":0.5,\"y\":0.05},\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"5vw\",\"right\":\"5vw\",\"bottom\":\"5vw\",\"left\":\"5vw\"},\"margin\":{\"top\":\"0\"}},\"color\":{\"duotone\":[\"#36345d\",\"#abaaaa\"]}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;padding-top:5vw;padding-right:5vw;padding-bottom:5vw;padding-left:5vw\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-60 has-background-dim\" style=\"background-color:#c2b7a4\"><\/span><img class=\"wp-block-cover__image-background wp-image-334\" alt=\"\" src=\"https:\/\/pd.w.org\/2022\/01\/95161f850d22f0c06.37817431.jpg\" style=\"object-position:50% 5%\" data-object-fit=\"cover\" data-object-position=\"50% 5%\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:spacer {\"height\":\"48px\"} -->\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"300\",\"lineHeight\":\"0.8\",\"letterSpacing\":\"-4px\"},\"color\":{\"text\":\"#c8c4d3\"}}} -->\n<p class=\"has-text-align-right has-text-color\" style=\"color:#c8c4d3;font-size:148px;font-style:normal;font-weight:300;letter-spacing:-4px;line-height:0.8;text-transform:uppercase\">DJANGO<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"300\",\"lineHeight\":\"0.8\",\"letterSpacing\":\"-4px\"},\"color\":{\"text\":\"#ac94b2\"}}} -->\n<p class=\"has-text-align-right has-text-color\" style=\"color:#ac94b2;font-size:148px;font-style:normal;font-weight:300;letter-spacing:-4px;line-height:0.8;text-transform:uppercase\">DJANGO<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"300\",\"lineHeight\":\"0.8\",\"letterSpacing\":\"-4px\"},\"color\":{\"text\":\"#71689c\"}}} -->\n<p class=\"has-text-align-right has-text-color\" style=\"color:#71689c;font-size:148px;font-style:normal;font-weight:300;letter-spacing:-4px;line-height:0.8;text-transform:uppercase\">DJANGO<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"300\",\"lineHeight\":\"0.8\",\"letterSpacing\":\"-4px\"},\"color\":{\"text\":\"#444178\"}}} -->\n<p class=\"has-text-align-right has-text-color\" style=\"color:#444178;font-size:148px;font-style:normal;font-weight:300;letter-spacing:-4px;line-height:0.8;text-transform:uppercase\">DJANGO<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"48px\"} -->\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner",
          "text"
      ],
      "keywords": [
          "Fullwidth",
          "Background Image",
          "Gradient",
          "Uppercase"
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-vertically-aligned-headline-on-right-with-description-on-left",
      "title": "Fullwidth, vertically aligned headline on right with description on left",
      "content": "<!-- wp:cover {\"customOverlayColor\":\"#e68b14\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"5vw\",\"right\":\"5vw\",\"bottom\":\"5vw\",\"left\":\"5vw\"},\"margin\":{\"top\":\"0\"}}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;padding-top:5vw;padding-right:5vw;padding-bottom:5vw;padding-left:5vw\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim\" style=\"background-color:#e68b14\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"verticalAlignment\":\"top\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"320px\"},\"spacing\":{\"blockGap\":\"24px\"}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"330px\"},\"typography\":{\"fontSize\":\"17px\",\"fontStyle\":\"normal\",\"fontWeight\":\"300\",\"lineHeight\":\"1.4\",\"textTransform\":\"none\",\"textDecoration\":\"none\",\"letterSpacing\":\"0px\"}}} -->\n<p style=\"font-size:17px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:1.4;text-decoration:none;text-transform:none\">Let 'em Roll is an album by American organist Big John Patton recorded in 1965 and released on the Blue Note label.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"backgroundColor\":\"black\",\"textColor\":\"white\",\"style\":{\"typography\":{\"fontSize\":\"17px\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"textDecoration\":\"none\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"0px\"},\"spacing\":{\"padding\":{\"top\":\"14px\",\"bottom\":\"14px\",\"left\":\"36px\",\"right\":\"36px\"}},\"border\":{\"radius\":\"0px\",\"top\":{\"radius\":\"0px\",\"width\":\"0px\",\"style\":\"none\"},\"right\":{\"radius\":\"0px\",\"width\":\"0px\",\"style\":\"none\"},\"bottom\":{\"radius\":\"0px\",\"width\":\"0px\",\"style\":\"none\"},\"left\":{\"radius\":\"0px\",\"width\":\"0px\",\"style\":\"none\"}}}} -->\n<div class=\"wp-block-button has-custom-font-size\" style=\"font-size:17px;font-style:normal;font-weight:700;letter-spacing:0px;text-decoration:none;text-transform:uppercase\"><a class=\"wp-block-button__link has-white-color has-black-background-color has-text-color has-background wp-element-button\" style=\"border-radius:0px;border-top-style:none;border-top-width:0px;border-right-style:none;border-right-width:0px;border-bottom-style:none;border-bottom-width:0px;border-left-style:none;border-left-width:0px;padding-top:14px;padding-right:36px;padding-bottom:14px;padding-left:36px\">Shop Now<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"},\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.8\",\"letterSpacing\":\"-4px\"}},\"textColor\":\"black\"} -->\n<p class=\"has-text-align-right has-black-color has-text-color\" style=\"font-size:148px;font-style:normal;font-weight:700;letter-spacing:-4px;line-height:0.8;text-transform:uppercase\">Let<br>'EM<br>Roll<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.8\",\"letterSpacing\":\"-4px\"}},\"textColor\":\"white\"} -->\n<p class=\"has-text-align-right has-white-color has-text-color\" style=\"font-size:148px;font-style:normal;font-weight:700;letter-spacing:-4px;line-height:0.8;text-transform:uppercase\">Big<br>John<br>Patton<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner",
          "call-to-action"
      ],
      "keywords": [
          "vertically",
          "bold",
          "jazz",
          "shop",
          "store",
          "headline",
          "hero",
          "product"
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-headline-with-links-and-gradient-offset-background",
      "title": "Fullwidth headline with links and gradient offset background",
      "content": "<!-- wp:cover {\"customGradient\":\"linear-gradient(180deg,rgb(0,0,0) 39%,rgb(83,80,123) 39%)\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"48px\",\"right\":\"5vw\",\"bottom\":\"48px\",\"left\":\"5vw\"},\"margin\":{\"top\":\"0\"}}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;padding-top:48px;padding-right:5vw;padding-bottom:48px;padding-left:5vw\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim has-background-gradient\" style=\"background:linear-gradient(180deg,rgb(0,0,0) 39%,rgb(83,80,123) 39%)\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:spacer -->\n<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"48px\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"verticalAlignment\":\"top\",\"justifyContent\":\"space-between\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"},\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"172px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.7\",\"letterSpacing\":\"-10px\"},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|white\"}}}},\"textColor\":\"white\"} -->\n<p class=\"has-text-align-left has-white-color has-text-color has-link-color\" style=\"font-size:172px;font-style:normal;font-weight:700;letter-spacing:-10px;line-height:0.7;text-transform:uppercase\"><strong>MONK<\/strong>.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"400px\"},\"spacing\":{\"blockGap\":\"24px\"}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"48px\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"right\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"17px\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"textDecoration\":\"none\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"0px\"},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|white\"}}}},\"textColor\":\"white\"} -->\n<p class=\"has-white-color has-text-color has-link-color\" style=\"font-size:17px;font-style:normal;font-weight:700;letter-spacing:0px;text-decoration:none;text-transform:uppercase\">A new collection<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"17px\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"textDecoration\":\"none\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"0px\"},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|white\"}}}},\"textColor\":\"white\"} -->\n<p class=\"has-white-color has-text-color has-link-color\" style=\"font-size:17px;font-style:normal;font-weight:700;letter-spacing:0px;text-decoration:none;text-transform:uppercase\">Learn More \u2192 <\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"260px\"} -->\n<div style=\"height:260px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner"
      ],
      "keywords": [
          "Offset",
          "Gradient",
          "Jazz",
          "Headline",
          "Feature"
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/heading-paragraph-button-with-two-images",
      "title": "Heading, Paragraph, Button with Two Images",
      "content": "<!-- wp:cover {\"customOverlayColor\":\"#eb4c77\",\"contentPosition\":\"center center\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"6vw\",\"right\":\"6vw\",\"bottom\":\"6vw\",\"left\":\"6vw\"},\"margin\":{\"top\":\"0\"}}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;padding-top:6vw;padding-right:6vw;padding-bottom:6vw;padding-left:6vw\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim\" style=\"background-color:#eb4c77\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0vw\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"center\",\"verticalAlignment\":\"top\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"},\"layout\":{\"selfStretch\":\"fill\"}},\"layout\":{\"type\":\"constrained\",\"justifyContent\":\"left\",\"contentSize\":\"600px\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:heading {\"textAlign\":\"left\",\"align\":\"wide\",\"style\":{\"typography\":{\"fontSize\":\"100px\",\"textTransform\":\"none\",\"fontStyle\":\"normal\",\"fontWeight\":\"500\",\"lineHeight\":\"0.9\"}},\"textColor\":\"contrast\"} -->\n<h2 class=\"wp-block-heading alignwide has-text-align-left has-contrast-color has-text-color\" style=\"font-size:100px;font-style:normal;font-weight:500;line-height:0.9;text-transform:none\">Time for an adventure<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"align\":\"left\",\"textColor\":\"contrast\"} -->\n<p class=\"has-text-align-left has-contrast-color has-text-color\">Explore our network of trails that lead through a variety of woodland habitats and observe the diverse flora that call this area home. <\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"60px\"} -->\n<div style=\"height:60px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"left\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"backgroundColor\":\"contrast\",\"textColor\":\"base\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"24px\",\"right\":\"48px\",\"bottom\":\"24px\",\"left\":\"48px\"}},\"typography\":{\"fontSize\":\"16px\",\"fontStyle\":\"normal\",\"fontWeight\":\"500\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"0px\"},\"border\":{\"radius\":\"0px\"}},\"className\":\"is-style-fill\"} -->\n<div class=\"wp-block-button has-custom-font-size is-style-fill\" style=\"font-size:16px;font-style:normal;font-weight:500;letter-spacing:0px;text-transform:uppercase\"><a class=\"wp-block-button__link has-base-color has-contrast-background-color has-text-color has-background wp-element-button\" style=\"border-radius:0px;padding-top:24px;padding-right:48px;padding-bottom:24px;padding-left:48px\">Sign up<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fit\",\"flexSize\":null},\"spacing\":{\"blockGap\":\"24px\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"verticalAlignment\":\"top\",\"justifyContent\":\"right\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\"><!-- wp:spacer {\"height\":\"8vw\"} -->\n<div style=\"height:8vw\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:image {\"sizeSlug\":\"large\",\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"},\"color\":{\"duotone\":[\"rgb(0, 0, 0)\",\"rgb(217, 88, 120)\"]}}} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/pd.w.org\/2022\/01\/84661f60659149cc8.02053291.jpg\" alt=\"\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:image {\"sizeSlug\":\"large\",\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"},\"color\":{\"duotone\":[\"rgb(0, 0, 0)\",\"rgb(217, 88, 120)\"]}}} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/pd.w.org\/2022\/01\/21261f60ba46147b0.97888240.jpg\" alt=\"\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner",
          "call-to-action"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/bold-sale-banner-with-geometric-background",
      "title": "Bold sale banner with geometric background",
      "content": "<!-- wp:cover {\"url\":\"https:\/\/pd.w.org\/2022\/01\/2661f82cd1ba9172.16386413.jpg\",\"id\":334,\"dimRatio\":90,\"customOverlayColor\":\"#2c3066\",\"minHeight\":50,\"minHeightUnit\":\"vh\",\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"4vw\",\"right\":\"4vw\",\"bottom\":\"4vw\",\"left\":\"4vw\"},\"margin\":{\"top\":\"0\"}},\"color\":{\"duotone\":[\"rgb(44, 48, 102)\",\"#ffb23d\"]}}} -->\n<div class=\"wp-block-cover alignfull\" style=\"margin-top:0;padding-top:4vw;padding-right:4vw;padding-bottom:4vw;padding-left:4vw;min-height:50vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-90 has-background-dim\" style=\"background-color:#2c3066\"><\/span><img class=\"wp-block-cover__image-background wp-image-334\" alt=\"\" src=\"https:\/\/pd.w.org\/2022\/01\/2661f82cd1ba9172.16386413.jpg\" data-object-fit=\"cover\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontSize\":\"160px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.9\",\"letterSpacing\":\"-2px\"},\"color\":{\"text\":\"#ffb23d\"}}} -->\n<p class=\"has-text-align-center has-text-color\" style=\"color:#ffb23d;font-size:160px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:0.9;text-transform:uppercase\">Enjoy<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontSize\":\"160px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.9\",\"letterSpacing\":\"-2px\"},\"color\":{\"text\":\"#ffb23d\"}}} -->\n<p class=\"has-text-align-center has-text-color\" style=\"color:#ffb23d;font-size:160px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:0.9;text-transform:uppercase\">20% Off<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"48px\"} -->\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"style\":{\"color\":{\"background\":\"#ffb23d\",\"text\":\"#2c3066\"},\"spacing\":{\"padding\":{\"top\":\"32px\",\"right\":\"48px\",\"bottom\":\"32px\",\"left\":\"48px\"}},\"typography\":{\"fontSize\":\"20px\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"1px\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\"}}} -->\n<div class=\"wp-block-button has-custom-font-size\" style=\"font-size:20px;font-style:normal;font-weight:700;letter-spacing:1px;text-transform:uppercase\"><a class=\"wp-block-button__link has-text-color has-background wp-element-button\" style=\"color:#2c3066;background-color:#ffb23d;padding-top:32px;padding-right:48px;padding-bottom:32px;padding-left:48px\">Shop Now<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner",
          "call-to-action"
      ],
      "keywords": [
          "store",
          "shop",
          "coupon",
          "jazz",
          "background image"
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/offset-bold-paragraph-text-with-varying-opacity",
      "title": "Offset bold paragraph text with varying opacity",
      "content": "<!-- wp:cover {\"overlayColor\":\"black\",\"minHeight\":66,\"minHeightUnit\":\"vh\",\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"4vw\",\"right\":\"4vw\",\"bottom\":\"4vw\",\"left\":\"4vw\"},\"margin\":{\"top\":\"0\"}}},\"textColor\":\"white\"} -->\n<div class=\"wp-block-cover alignfull has-white-color has-text-color\" style=\"margin-top:0;padding-top:4vw;padding-right:4vw;padding-bottom:4vw;padding-left:4vw;min-height:66vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-black-background-color has-background-dim-100 has-background-dim\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"constrained\",\"wideSize\":\"700px\",\"contentSize\":\"700px\",\"justifyContent\":\"left\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"120px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"1\",\"letterSpacing\":\"-2px\"},\"color\":{\"text\":\"#ffffff61\"}}} -->\n<p class=\"has-text-align-left has-text-color\" style=\"color:#ffffff61;font-size:120px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:1;text-transform:uppercase\">Embark<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"72px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"1\",\"letterSpacing\":\"0px\"},\"color\":{\"text\":\"#ffffff73\"}}} -->\n<p class=\"has-text-align-right has-text-color\" style=\"color:#ffffff73;font-size:72px;font-style:normal;font-weight:700;letter-spacing:0px;line-height:1;text-transform:uppercase\"><strong>ON A HIKING<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"72px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"1\",\"letterSpacing\":\"0px\"},\"color\":{\"text\":\"#ffffffad\"}}} -->\n<p class=\"has-text-align-left has-text-color\" style=\"color:#ffffffad;font-size:72px;font-style:normal;font-weight:700;letter-spacing:0px;line-height:1;text-transform:uppercase\">adventure and explore the beauty of nature's best\u2026<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"1\",\"letterSpacing\":\"-2px\"},\"color\":{\"text\":\"#ffffffd1\"}}} -->\n<p class=\"has-text-align-right has-text-color\" style=\"color:#ffffffd1;font-size:148px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:1;text-transform:uppercase\">In the<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"162px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"1\",\"letterSpacing\":\"-2px\"},\"color\":{\"text\":\"#fffffff5\"}}} -->\n<p class=\"has-text-align-left has-text-color\" style=\"color:#fffffff5;font-size:162px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:1;text-transform:uppercase\">WOODS.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/offset-text-with-a-brutalist-design-vibe",
      "title": "Offset text with a brutalist design vibe",
      "content": "<!-- wp:cover {\"customOverlayColor\":\"#ffb43c\",\"minHeight\":66,\"minHeightUnit\":\"vh\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"48px\",\"right\":\"48px\",\"bottom\":\"48px\",\"left\":\"48px\"},\"margin\":{\"top\":\"0\"}}},\"textColor\":\"black\"} -->\n<div class=\"wp-block-cover alignfull is-light has-black-color has-text-color\" style=\"margin-top:0;padding-top:48px;padding-right:48px;padding-bottom:48px;padding-left:48px;min-height:66vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim\" style=\"background-color:#ffb43c\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"constrained\",\"wideSize\":\"1200px\",\"contentSize\":\"800px\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.9\",\"letterSpacing\":\"-2px\"}},\"textColor\":\"black\"} -->\n<p class=\"has-text-align-left has-black-color has-text-color\" style=\"font-size:148px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:0.9;text-transform:uppercase\"><mark style=\"color:#a65a00\" class=\"has-inline-color\">\u2734\ufe0e<\/mark> Walk<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.9\",\"letterSpacing\":\"-2px\"}},\"textColor\":\"black\"} -->\n<p class=\"has-text-align-right has-black-color has-text-color\" style=\"font-size:148px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:0.9;text-transform:uppercase\">In the<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"148px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":\"0.9\",\"letterSpacing\":\"-2px\"}},\"textColor\":\"black\"} -->\n<p class=\"has-text-align-left has-black-color has-text-color\" style=\"font-size:148px;font-style:normal;font-weight:700;letter-spacing:-2px;line-height:0.9;text-transform:uppercase\">Park<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontSize\":\"140px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"italic\",\"fontWeight\":\"200\",\"letterSpacing\":\"0px\",\"lineHeight\":\"0.9\"},\"color\":{\"text\":\"#a65a00\"}}} -->\n<p class=\"has-text-align-center has-text-color\" style=\"color:#a65a00;font-size:140px;font-style:italic;font-weight:200;letter-spacing:0px;line-height:0.9;text-transform:uppercase\">\u201401.03<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner",
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullscreen-image-with-right-content-area",
      "title": "Fullscreen image with right content area",
      "content": "<!-- wp:cover {\"customOverlayColor\":\"#376a23\",\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"4vw\",\"right\":\"4vw\",\"bottom\":\"4vw\",\"left\":\"4vw\"},\"margin\":{\"top\":\"0\"}}}} -->\n<div class=\"wp-block-cover alignfull\" style=\"margin-top:0;padding-top:4vw;padding-right:4vw;padding-bottom:4vw;padding-left:4vw\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim\" style=\"background-color:#376a23\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"4vw\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"left\"}} -->\n<div class=\"wp-block-group\"><!-- wp:image {\"sizeSlug\":\"large\",\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"}}} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/pd.w.org\/2022\/01\/84661f60659149cc8.02053291.jpg\" alt=\"\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"},\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"constrained\",\"justifyContent\":\"left\",\"contentSize\":\"600px\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:heading {\"textAlign\":\"left\",\"align\":\"wide\",\"style\":{\"typography\":{\"fontSize\":\"80px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"italic\",\"fontWeight\":\"700\",\"lineHeight\":\"1.0\"}},\"textColor\":\"black\"} -->\n<h2 class=\"wp-block-heading alignwide has-text-align-left has-black-color has-text-color\" style=\"font-size:80px;font-style:italic;font-weight:700;line-height:1.0;text-transform:uppercase\">wAndering through the woods<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"18px\",\"fontStyle\":\"italic\",\"fontWeight\":\"600\"}},\"textColor\":\"black\"} -->\n<p class=\"has-text-align-left has-black-color has-text-color\" style=\"font-size:18px;font-style:italic;font-weight:600\">Explore our network of trails that lead through a variety of woodland habitats and observe the diverse flora that call this area home. <\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"60px\"} -->\n<div style=\"height:60px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"left\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"backgroundColor\":\"black\",\"textColor\":\"white\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"24px\",\"right\":\"48px\",\"bottom\":\"24px\",\"left\":\"48px\"}},\"typography\":{\"fontSize\":\"18px\",\"fontStyle\":\"italic\",\"fontWeight\":\"600\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"0px\"},\"border\":{\"radius\":\"0px\"}},\"className\":\"is-style-fill\"} -->\n<div class=\"wp-block-button has-custom-font-size is-style-fill\" style=\"font-size:18px;font-style:italic;font-weight:600;letter-spacing:0px;text-transform:uppercase\"><a class=\"wp-block-button__link has-white-color has-black-background-color has-text-color has-background wp-element-button\" style=\"border-radius:0px;padding-top:24px;padding-right:48px;padding-bottom:24px;padding-left:48px\">Sign up<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/cover-image-with-bold-heading-and-button-left",
      "title": "Cover Image with Bold Heading and Button, Left",
      "content": "<!-- wp:cover {\"url\":\"https:\/\/pd.w.org\/2021\/12\/12261b91fba359867.64939140.jpg\",\"id\":335,\"dimRatio\":30,\"minHeight\":66,\"minHeightUnit\":\"vh\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"48px\",\"right\":\"48px\",\"bottom\":\"48px\",\"left\":\"48px\"},\"margin\":{\"top\":\"0\"}},\"color\":{\"duotone\":[\"#094850\",\"#f9644e\"]}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;padding-top:48px;padding-right:48px;padding-bottom:48px;padding-left:48px;min-height:66vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-30 has-background-dim\"><\/span><img class=\"wp-block-cover__image-background wp-image-335\" alt=\"\" src=\"https:\/\/pd.w.org\/2021\/12\/12261b91fba359867.64939140.jpg\" data-object-fit=\"cover\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"48px\"}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"75%\",\"justifyContent\":\"left\",\"wideSize\":\"75%\"}} -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"textAlign\":\"left\",\"style\":{\"typography\":{\"fontSize\":\"100px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"letterSpacing\":\"0px\",\"lineHeight\":\"1\"}},\"textColor\":\"white\"} -->\n<h2 class=\"wp-block-heading has-text-align-left has-white-color has-text-color\" style=\"font-size:100px;font-style:normal;font-weight:700;letter-spacing:0px;line-height:1;text-transform:uppercase\">Take a hike and wAnder through the woods<\/h2>\n<!-- \/wp:heading --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"72px\"} -->\n<div style=\"height:72px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"left\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"textColor\":\"white\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"24px\",\"right\":\"48px\",\"bottom\":\"24px\",\"left\":\"48px\"}},\"typography\":{\"fontSize\":\"16px\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"0px\"}},\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button has-custom-font-size is-style-outline\" style=\"font-size:16px;font-style:normal;font-weight:600;letter-spacing:0px;text-transform:uppercase\"><a class=\"wp-block-button__link has-white-color has-text-color wp-element-button\" style=\"padding-top:24px;padding-right:48px;padding-bottom:24px;padding-left:48px\">Explore<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/cover-image-with-bold-heading-and-button",
      "title": "Cover Image with Bold Heading and Button",
      "content": "<!-- wp:cover {\"url\":\"https:\/\/pd.w.org\/2022\/01\/26061d763eca13bb6.11341561.jpg\",\"id\":335,\"dimRatio\":30,\"minHeight\":66,\"minHeightUnit\":\"vh\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"48px\",\"right\":\"48px\",\"bottom\":\"48px\",\"left\":\"48px\"},\"margin\":{\"top\":\"0\"}},\"color\":{\"duotone\":[\"rgb(42, 47, 103)\",\"rgb(214, 194, 42)\"]}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;padding-top:48px;padding-right:48px;padding-bottom:48px;padding-left:48px;min-height:66vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-30 has-background-dim\"><\/span><img class=\"wp-block-cover__image-background wp-image-335\" alt=\"\" src=\"https:\/\/pd.w.org\/2022\/01\/26061d763eca13bb6.11341561.jpg\" data-object-fit=\"cover\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"48px\"}},\"layout\":{\"type\":\"constrained\",\"wideSize\":\"80%\"}} -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"textAlign\":\"center\",\"style\":{\"typography\":{\"fontSize\":\"100px\",\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"letterSpacing\":\"0px\",\"lineHeight\":\"1\"}},\"textColor\":\"white\"} -->\n<h2 class=\"wp-block-heading has-text-align-center has-white-color has-text-color\" style=\"font-size:100px;font-style:normal;font-weight:700;letter-spacing:0px;line-height:1;text-transform:uppercase\">Embark on a hiking adventure and explore the beauty of the woods.<\/h2>\n<!-- \/wp:heading --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"72px\"} -->\n<div style=\"height:72px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"textColor\":\"white\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"24px\",\"right\":\"48px\",\"bottom\":\"24px\",\"left\":\"48px\"}},\"typography\":{\"fontSize\":\"16px\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"0px\"}},\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button has-custom-font-size is-style-outline\" style=\"font-size:16px;font-style:normal;font-weight:600;letter-spacing:0px;text-transform:uppercase\"><a class=\"wp-block-button__link has-white-color has-text-color wp-element-button\" style=\"padding-top:24px;padding-right:48px;padding-bottom:24px;padding-left:48px\">Explore<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullscreen-cover-image-gallery",
      "title": "Fullscreen cover image gallery",
      "content": "<!-- wp:cover {\"overlayColor\":\"black\",\"minHeight\":66,\"minHeightUnit\":\"vh\",\"contentPosition\":\"center center\",\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"4vw\",\"right\":\"4vw\",\"bottom\":\"4vw\",\"left\":\"4vw\"}}}} -->\n<div class=\"wp-block-cover alignfull\" style=\"padding-top:4vw;padding-right:4vw;padding-bottom:4vw;padding-left:4vw;min-height:66vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-black-background-color has-background-dim-100 has-background-dim\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"4vw\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"custom\"} -->\n<figure class=\"wp-block-image size-large\"><a href=\"https:\/\/thato.test\/?page_id=28\"><img src=\"https:\/\/pd.w.org\/2022\/01\/84661f60659149cc8.02053291.jpg\" alt=\"\" \/><\/a><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"custom\"} -->\n<figure class=\"wp-block-image size-large\"><a href=\"https:\/\/thato.test\/?page_id=28\"><img src=\"https:\/\/pd.w.org\/2022\/01\/21261f60ba46147b0.97888240.jpg\" alt=\"\" \/><\/a><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "gallery"
      ],
      "keywords": [
          "gallery",
          "images",
          "columns",
          "background",
          "cover"
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-posts-with-uppercase-titles",
      "title": "Fullwidth posts with uppercase titles",
      "content": "<!-- wp:query {\"queryId\":31,\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false},\"align\":\"full\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-query alignfull\"><!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:0;padding-right:0;padding-bottom:0;padding-left:0\"><!-- wp:post-template {\"style\":{\"typography\":{\"textTransform\":\"none\"}}} -->\n<!-- wp:group {\"style\":{\"border\":{\"bottom\":{\"color\":\"var:preset|color|contrast\",\"width\":\"1px\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\" style=\"border-bottom-color:var(--wp--preset--color--contrast);border-bottom-width:1px\"><!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"16px\",\"right\":\"16px\",\"bottom\":\"16px\",\"left\":\"16px\"}}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"space-between\"}} -->\n<div class=\"wp-block-group\" style=\"padding-top:16px;padding-right:16px;padding-bottom:16px;padding-left:16px\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"4px\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph -->\n<p>\u2734\ufe0e<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:post-date {\"textAlign\":\"left\",\"format\":\"M j, Y\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}},\"typography\":{\"textTransform\":\"uppercase\"}},\"textColor\":\"contrast\",\"fontSize\":\"small\"} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:post-terms {\"term\":\"category\",\"prefix\":\"\u2734\ufe0e \",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}},\"typography\":{\"textTransform\":\"uppercase\"}},\"textColor\":\"contrast\"} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"16px\",\"bottom\":\"var:preset|spacing|70\",\"right\":\"16px\",\"left\":\"16px\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group\" style=\"padding-top:16px;padding-right:16px;padding-bottom:var(--wp--preset--spacing--70);padding-left:16px\"><!-- wp:post-title {\"isLink\":true,\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\"}},\"layout\":{\"selfStretch\":\"fit\"},\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"500\",\"lineHeight\":\"1.1\",\"textTransform\":\"uppercase\",\"fontSize\":\"5.2rem\"},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"contrast\"} \/--><\/div>\n<!-- \/wp:group -->\n<!-- \/wp:post-template --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"right\":\"16px\",\"left\":\"16px\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--30);padding-right:16px;padding-bottom:var(--wp--preset--spacing--30);padding-left:16px\"><!-- wp:query-pagination {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"left\"}} -->\n<!-- wp:query-pagination-previous {\"label\":\"Previous\",\"style\":{\"typography\":{\"textTransform\":\"uppercase\"}},\"fontSize\":\"small\"} \/-->\n\n<!-- wp:query-pagination-next {\"label\":\"Next\",\"style\":{\"typography\":{\"textTransform\":\"uppercase\"}},\"fontSize\":\"small\"} \/-->\n<!-- \/wp:query-pagination --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:query -->",
      "description": "A fullwidth posts pattern with large titles and start accents.",
      "viewport_width": 800,
      "categories": [
          "posts"
      ],
      "keywords": [
          "star",
          "posts",
          "loop",
          "blog",
          "index"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-posts-titles-with-dates",
      "title": "Fullwidth posts titles with dates",
      "content": "<!-- wp:query {\"queryId\":1,\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":false},\"align\":\"full\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-query alignfull\"><!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"0\",\"right\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|40\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:0;padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)\"><!-- wp:post-template {\"align\":\"full\",\"style\":{\"typography\":{\"textTransform\":\"none\"}}} -->\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0\",\"padding\":{\"bottom\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\" style=\"padding-bottom:var(--wp--preset--spacing--50)\"><!-- wp:group {\"style\":{\"border\":{\"bottom\":{\"color\":\"var:preset|color|contrast\",\"width\":\"4px\"}},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"0\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"0\"}}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"space-between\"}} -->\n<div class=\"wp-block-group\" style=\"border-bottom-color:var(--wp--preset--color--contrast);border-bottom-width:4px;padding-top:var(--wp--preset--spacing--30);padding-right:0;padding-bottom:var(--wp--preset--spacing--30);padding-left:0\"><!-- wp:post-date {\"textAlign\":\"left\",\"format\":\"m.j\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}},\"typography\":{\"letterSpacing\":\"1px\",\"fontSize\":\"2rem\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"textColor\":\"contrast\"} \/-->\n\n<!-- wp:post-date {\"textAlign\":\"left\",\"format\":\"Y\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}},\"typography\":{\"letterSpacing\":\"1px\",\"fontSize\":\"2rem\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"textColor\":\"contrast\"} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:post-title {\"isLink\":true,\"style\":{\"layout\":{\"selfStretch\":\"fit\"},\"typography\":{\"lineHeight\":\"1.1\",\"fontSize\":\"4.6rem\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\"},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\"}}},\"textColor\":\"contrast\"} \/--><\/div>\n<!-- \/wp:group -->\n<!-- \/wp:post-template --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|40\",\"right\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|40\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)\"><!-- wp:query-pagination {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"space-between\"}} -->\n<!-- wp:query-pagination-previous {\"style\":{\"typography\":{\"fontSize\":\"2rem\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"1px\"}}} \/-->\n\n<!-- wp:query-pagination-next {\"style\":{\"typography\":{\"fontSize\":\"2rem\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\",\"textTransform\":\"uppercase\",\"letterSpacing\":\"1px\"}}} \/-->\n<!-- \/wp:query-pagination --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:query -->",
      "description": "A fullwidth posts pattern with large titles and numeral dates.",
      "viewport_width": 800,
      "categories": [
          "posts"
      ],
      "keywords": [
          "Posts",
          "Query",
          "Loop",
          "Blog",
          "Index"
      ],
      "block_types": [
          "core\/query"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/header-inside-full-width-background-image",
      "title": "Header inside full-width background image",
      "content": "<!-- wp:group {\"align\":\"full\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\"><!-- wp:cover {\"url\":\"https:\/\/img.rawpixel.com\/s3fs-private\/rawpixel_images\/website_content\/a017-eberhard-cco-the-after-rain.jpg?w=1200\\u0026amp;h=1200\\u0026amp;fit=clip\\u0026amp;crop=default\\u0026amp;dpr=1\\u0026amp;q=75\\u0026amp;vib=3\\u0026amp;con=3\\u0026amp;usm=15\\u0026amp;cs=srgb\\u0026amp;bg=F4F4F3\\u0026amp;ixlib=js-2.2.1\\u0026amp;s=e7b4ca0a0edcc84ba48c1f7ebf02dd5a\",\"id\":61,\"dimRatio\":50,\"overlayColor\":\"black\",\"focalPoint\":{\"x\":0.5,\"y\":0.5},\"minHeight\":50,\"contentPosition\":\"center center\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);min-height:50px\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-black-background-color has-background-dim\"><\/span><img class=\"wp-block-cover__image-background wp-image-61\" alt=\"\" src=\"https:\/\/img.rawpixel.com\/s3fs-private\/rawpixel_images\/website_content\/a017-eberhard-cco-the-after-rain.jpg?w=1200&amp;h=1200&amp;fit=clip&amp;crop=default&amp;dpr=1&amp;q=75&amp;vib=3&amp;con=3&amp;usm=15&amp;cs=srgb&amp;bg=F4F4F3&amp;ixlib=js-2.2.1&amp;s=e7b4ca0a0edcc84ba48c1f7ebf02dd5a\" style=\"object-position:50% 50%\" data-object-fit=\"cover\" data-object-position=\"50% 50%\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"align\":\"wide\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|base\"}}},\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"textColor\":\"base\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide has-base-color has-text-color has-link-color\" style=\"margin-top:0;margin-bottom:0\"><!-- wp:group {\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-logo {\"className\":\"is-style-default\"} \/-->\n\n<!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|background\"}}}},\"textColor\":\"white\",\"fontSize\":\"medium\"} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:navigation {\"textColor\":\"white\",\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"}} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"33vw\"} -->\n<div style=\"height:33vw\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div><\/div>\n<!-- \/wp:cover --><\/div>\n<!-- \/wp:group -->",
      "description": "Simple header with logo, site title, navigation and a full-width background image with dark overlay.",
      "viewport_width": 800,
      "categories": [
          "header"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/simple-header-with-dark-background",
      "title": "Simple header with dark background",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|white\"}}},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}}},\"backgroundColor\":\"black\",\"textColor\":\"white\",\"className\":\"has-background-color\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-background-color has-white-color has-black-background-color has-text-color has-background has-link-color\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-logo \/-->\n\n<!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|white\"}}}}} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"}} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Simple header with logo, site title, navigation links and a dark background.",
      "viewport_width": 800,
      "categories": [
          "header",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/text-only-header-with-tagline",
      "title": "Text-only header with tagline",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}}} \/-->\n\n<!-- wp:site-tagline \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"}} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Header with site title, tagline and navigation links.",
      "viewport_width": 800,
      "categories": [
          "header",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/simple-header-with-tagline",
      "title": "Simple header with tagline",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"contrast\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-contrast-color has-text-color has-link-color\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"24px\"}},\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-logo \/-->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"4px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}}} \/-->\n\n<!-- wp:site-tagline {\"fontSize\":\"small\"} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"},\"fontSize\":\"small\"} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Header with site logo, title and tagline on the left and with navigation links on the right.",
      "viewport_width": 800,
      "categories": [
          "header",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-site-title-and-menu-button",
      "title": "Fullwidth site title and menu button",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"contrast\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n<div class=\"wp-block-group alignfull has-contrast-color has-text-color has-link-color\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:site-title \/-->\n\n<!-- wp:navigation {\"overlayMenu\":\"always\",\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"}} \/--><\/div>\n<!-- \/wp:group -->",
      "description": "Header with site title and a hamburger menu button.",
      "viewport_width": 800,
      "categories": [
          "header",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-header-with-hero-image",
      "title": "Fullwidth header with hero image",
      "content": "<!-- wp:group {\"align\":\"full\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\"><!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}}},\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"24px\"}},\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-logo \/-->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"4px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"fontSize\":\"medium\"} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"}} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:cover {\"url\":\"https:\/\/img.rawpixel.com\/s3fs-private\/rawpixel_images\/website_content\/a017-eberhard-cco-the-after-rain.jpg?w=1200\\u0026amp;h=1200\\u0026amp;fit=clip\\u0026amp;crop=default\\u0026amp;dpr=1\\u0026amp;q=75\\u0026amp;vib=3\\u0026amp;con=3\\u0026amp;usm=15\\u0026amp;cs=srgb\\u0026amp;bg=F4F4F3\\u0026amp;ixlib=js-2.2.1\\u0026amp;s=e7b4ca0a0edcc84ba48c1f7ebf02dd5a\",\"id\":61,\"dimRatio\":0,\"overlayColor\":\"black\",\"focalPoint\":{\"x\":0.5,\"y\":0.5},\"minHeight\":40,\"minHeightUnit\":\"vw\",\"contentPosition\":\"center center\",\"isDark\":false,\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\"}}}} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"margin-top:0;min-height:40vw\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-black-background-color has-background-dim-0 has-background-dim\"><\/span><img class=\"wp-block-cover__image-background wp-image-61\" alt=\"\" src=\"https:\/\/img.rawpixel.com\/s3fs-private\/rawpixel_images\/website_content\/a017-eberhard-cco-the-after-rain.jpg?w=1200&amp;h=1200&amp;fit=clip&amp;crop=default&amp;dpr=1&amp;q=75&amp;vib=3&amp;con=3&amp;usm=15&amp;cs=srgb&amp;bg=F4F4F3&amp;ixlib=js-2.2.1&amp;s=e7b4ca0a0edcc84ba48c1f7ebf02dd5a\" style=\"object-position:50% 50%\" data-object-fit=\"cover\" data-object-position=\"50% 50%\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:spacer {\"height\":\"50px\"} -->\n<div style=\"height:50px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div><\/div>\n<!-- \/wp:cover --><\/div>\n<!-- \/wp:group -->",
      "description": "Header on a white background followed by a full-width hero image.",
      "viewport_width": 800,
      "categories": [
          "header"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/centered-header-with-logo",
      "title": "Centered header with logo",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|30\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:site-logo \/-->\n\n<!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"contrast\",\"fontSize\":\"large\"} \/-->\n\n<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"center\"}} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Center aligned header with logo, site title and navigation links.",
      "viewport_width": 800,
      "categories": [
          "header",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-header-with-large-font-size",
      "title": "Fullwidth header with large font size",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}},\"textColor\":\"contrast\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n<div class=\"wp-block-group alignfull has-contrast-color has-text-color has-link-color\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:site-title {\"fontSize\":\"large\"} \/-->\n\n<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"},\"fontSize\":\"large\"} \/--><\/div>\n<!-- \/wp:group -->",
      "description": "Header with a large site title and navigation links in the same large font size.",
      "viewport_width": 800,
      "categories": [
          "header",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/simple-header",
      "title": "Simple header",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|30\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|30\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"24px\"}},\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-logo \/-->\n\n<!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|contrast\"}}}}} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"right\"}} \/--><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Simple header with logo, site title and navigation.",
      "viewport_width": 800,
      "categories": [
          "header",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/header"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/centered-footer-with-social-links",
      "title": "Centered footer with social links",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|60\",\"left\":\"var:preset|spacing|50\",\"top\":\"var:preset|spacing|60\"},\"blockGap\":\"var:preset|spacing|40\",\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}},\"dimensions\":{\"minHeight\":\"40vh\"}},\"textColor\":\"contrast\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\",\"verticalAlignment\":\"center\"}} -->\n<div class=\"wp-block-group alignfull has-contrast-color has-text-color\" style=\"min-height:40vh;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:site-logo {\"align\":\"center\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"6px\"}}}} \/-->\n\n<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"medium\"} -->\n<p class=\"has-text-align-center has-medium-font-size\">Proudly powered by <a href=\"https:\/\/wordpress.org\">WordPress<\/a><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:social-links {\"size\":\"has-normal-icon-size\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"12px\",\"left\":\"12px\"}}},\"className\":\"is-style-logos-only\",\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"}} -->\n<ul class=\"wp-block-social-links has-normal-icon-size is-style-logos-only\"><!-- wp:social-link {\"url\":\"#\",\"service\":\"facebook\"} \/-->\n\n<!-- wp:social-link {\"url\":\"#\",\"service\":\"twitter\"} \/-->\n\n<!-- wp:social-link {\"url\":\"#\",\"service\":\"wordpress\"} \/--><\/ul>\n<!-- \/wp:social-links --><\/div>\n<!-- \/wp:group -->",
      "description": "Footer with centered site title, tagline, social links and credit line.",
      "viewport_width": 800,
      "categories": [
          "footer",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/footer"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/footer-with-search-site-title-and-credit-line",
      "title": "Footer with search, site title, and credit line",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"right\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|40\",\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\"}},\"color\":{\"background\":\"#00000008\"}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-background\" style=\"background-color:#00000008;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--40)\"><!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|60\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"space-between\",\"verticalAlignment\":\"top\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"constrained\",\"justifyContent\":\"left\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"textTransform\":\"uppercase\",\"fontSize\":\"0.9rem\",\"letterSpacing\":\"1px\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}}} -->\n<p class=\"has-text-align-left\" style=\"font-size:0.9rem;font-style:normal;font-weight:600;letter-spacing:1px;text-transform:uppercase\">Search<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:search {\"label\":\"Search\",\"showLabel\":false,\"width\":100,\"widthUnit\":\"%\",\"buttonText\":\"Search\",\"buttonUseIcon\":true,\"style\":{\"border\":{\"width\":\"1px\"}}} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"spacing\":[]},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"right\",\"verticalAlignment\":\"top\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\",\"style\":{\"typography\":{\"textTransform\":\"uppercase\",\"fontSize\":\"0.9rem\",\"letterSpacing\":\"1px\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}}} -->\n<p class=\"has-text-align-left\" style=\"font-size:0.9rem;font-style:normal;font-weight:600;letter-spacing:1px;text-transform:uppercase\">Social<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"8px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"left\"},\"fontSize\":\"small\"} -->\n<div class=\"wp-block-group has-small-font-size\"><!-- wp:paragraph -->\n<p><a href=\"#\">Facebook<\/a><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#\">Instagram<\/a><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#\">Twitter<\/a><\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"48px\"} -->\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-title {\"fontSize\":\"small\"} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\"> Proudly powered by <a rel=\"nofollow\" href=\"https:\/\/wordpress.org\">WordPress<\/a> <\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Footer with search field and site title on the left, and small credit line on the right.",
      "viewport_width": 800,
      "categories": [
          "footer",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/footer"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/footer-with-site-title-and-credit-line",
      "title": "Footer with site title and credit line",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|30\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"className\":\"has-background-color\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-background-color\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-title {\"fontSize\":\"small\"} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\"> Proudly powered by <a rel=\"nofollow\" href=\"https:\/\/wordpress.org\">WordPress<\/a> <\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Footer with site title on the left and credit line on the right.",
      "viewport_width": 800,
      "categories": [
          "footer",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/footer"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/footer-with-navigation-and-credit-line",
      "title": "Footer with navigation and credit line",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|30\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"className\":\"has-background-color\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-background-color\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"layout\":{\"type\":\"flex\"}} -->\n<div class=\"wp-block-group\"><!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"setCascadingProperties\":true,\"justifyContent\":\"left\"},\"fontSize\":\"small\"} \/--><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\"> Proudly powered by <a rel=\"nofollow\" href=\"https:\/\/wordpress.org\">WordPress<\/a> <\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Footer with navigation on the left and credit line on the right.",
      "viewport_width": 800,
      "categories": [
          "footer",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/footer"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-footer-with-background-color-and-three-columns",
      "title": "Fullwidth footer with background color and three columns",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|white\"}}},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|60\",\"right\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|60\",\"left\":\"var:preset|spacing|40\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"blockGap\":\"var:preset|spacing|30\"},\"dimensions\":{\"minHeight\":\"40vh\"}},\"backgroundColor\":\"black\",\"textColor\":\"white\",\"className\":\"has-background-color\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"stretch\",\"verticalAlignment\":\"center\"}} -->\n<div class=\"wp-block-group alignfull has-background-color has-white-color has-black-background-color has-text-color has-background has-link-color\" style=\"min-height:40vh;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--40)\"><!-- wp:columns {\"align\":\"wide\",\"fontSize\":\"small\"} -->\n<div class=\"wp-block-columns alignwide has-small-font-size\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Location<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">2020 Lomita Blvd,&nbsp;<br>Torrance, CA 90101<br>United States<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Pages<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:navigation {\"overlayMenu\":\"never\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\",\"flexWrap\":\"nowrap\"},\"style\":{\"spacing\":{\"blockGap\":\"8px\"}},\"fontSize\":\"small\"} \/-->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Follow us<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"8px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph -->\n<p><a href=\"#\">Facebook<\/a><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#\">Instagram<\/a><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#\">Twitter<\/a><\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\",\"flexWrap\":\"wrap\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n<p class=\"has-text-align-center has-small-font-size\"> Proudly powered by <a rel=\"nofollow\" href=\"https:\/\/wordpress.org\">WordPress<\/a> <\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Text-only footer with background color and three columns.",
      "viewport_width": 800,
      "categories": [
          "footer",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/footer"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/fullwidth-footer-with-navigation-credit-and-social",
      "title": "Fullwidth footer with navigation, credit, and social",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|30\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"className\":\"has-background-color\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group alignfull has-background-color\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"nowrap\"},\"fontSize\":\"small\"} -->\n<div class=\"wp-block-group alignfull has-small-font-size\"><!-- wp:site-title {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"25%\"}},\"fontSize\":\"small\"} \/-->\n\n<!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"small\"} -->\n<p class=\"has-text-align-center has-small-font-size\"> Proudly powered by <a rel=\"nofollow\" href=\"https:\/\/wordpress.org\">WordPress<\/a> <\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:social-links {\"size\":\"has-small-icon-size\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"0\",\"left\":\"12px\"}},\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"25%\"}},\"className\":\"is-style-logos-only\",\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"right\"}} -->\n<ul class=\"wp-block-social-links has-small-icon-size is-style-logos-only\"><!-- wp:social-link {\"url\":\"#\",\"service\":\"twitter\"} \/-->\n\n<!-- wp:social-link {\"url\":\"#\",\"service\":\"instagram\"} \/--><\/ul>\n<!-- \/wp:social-links --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Footer with site title on the left, credit in the middle and social links on the right.",
      "viewport_width": 800,
      "categories": [
          "footer",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/footer"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/left-aligned-footer",
      "title": "Left-aligned footer",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|30\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|30\"}}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"space-between\",\"verticalAlignment\":\"top\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--30)\"><!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fill\",\"flexSize\":null}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"verticalAlignment\":\"top\"}} -->\n<div class=\"wp-block-group\"><!-- wp:site-title {\"fontSize\":\"medium\"} \/-->\n\n<!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">2020 Lomita Blvd,&nbsp;<br>Torrance, CA 90101<br>United States<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"left\",\"fontSize\":\"small\"} -->\n<p class=\"has-text-align-left has-small-font-size\">Proudly powered by <a rel=\"nofollow\" href=\"https:\/\/wordpress.org\">WordPress<\/a> <\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|50\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"right\",\"verticalAlignment\":\"top\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Pages<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:navigation {\"overlayMenu\":\"never\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"left\",\"flexWrap\":\"nowrap\"},\"style\":{\"spacing\":{\"blockGap\":\"8px\"}},\"fontSize\":\"small\"} \/-->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Social<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"8px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"left\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph -->\n<p><a href=\"#\">Facebook<\/a><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#\">Instagram<\/a><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#\">Twitter<\/a><\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"24px\"} -->\n<div style=\"height:24px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Left-aligned footer with just a credit line.",
      "viewport_width": 800,
      "categories": [
          "footer",
          "wireframe"
      ],
      "keywords": [
          ""
      ],
      "block_types": [
          "core\/template-part\/footer"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/three-columns-with-offset-images",
      "title": "Three columns with offset images",
      "content": "<!-- wp:columns {\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"25%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:25%\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-default\"} -->\n<figure class=\"wp-block-image size-large is-style-default\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/architecture-01.jpg\" alt=\"Close-up, abstract view of geometric architecture.\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"width\":\"25%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:25%\"><!-- wp:spacer {\"height\":500} -->\n<div style=\"height:500px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:spacer {\"height\":150} -->\n<div style=\"height:150px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/architecture-02.jpg\" alt=\"Close-up, angled view of a window on a white building.\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"width\":\"45%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:45%\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-default\"} -->\n<figure class=\"wp-block-image size-large is-style-default\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/architecture-03.jpg\" alt=\"Close-up of the corner of a white, geometric building with both sharp points and round corners.\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:spacer {\"height\":285} -->\n<div style=\"height:285px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->",
      "description": "Three columns with offset images.",
      "viewport_width": 1200,
      "categories": [
          "gallery",
          "images"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/three-columns-with-images-and-text",
      "title": "Three columns with images and text",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"color\":{\"background\":\"#f5eac1\"},\"spacing\":{\"padding\":{\"top\":\"6vw\",\"bottom\":\"6vw\",\"left\":\"6vw\",\"right\":\"6vw\"}}},\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group alignfull has-background\" style=\"background-color:#f5eac1;padding-top:6vw;padding-right:6vw;padding-bottom:6vw;padding-left:6vw\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"16px\",\"padding\":{\"right\":\"0\",\"left\":\"0\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\" style=\"padding-right:0;padding-left:0\"><!-- wp:heading {\"level\":6,\"style\":{\"color\":{\"text\":\"#000000\"},\"typography\":{\"fontSize\":\"16px\"}},\"anchor\":\"ecosystem\"} -->\n<h6 class=\"wp-block-heading has-text-color\" id=\"ecosystem\" style=\"color:#000000;font-size:16px\">ECOSYSTEM<\/h6>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"0.9\",\"fontSize\":\"6vw\",\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"textTransform\":\"none\",\"textDecoration\":\"none\",\"letterSpacing\":\"0px\"},\"color\":{\"text\":\"#000000\"}}} -->\n<p class=\"has-text-color\" style=\"color:#000000;font-size:6vw;font-style:normal;font-weight:700;letter-spacing:0px;line-height:0.9;text-decoration:none;text-transform:none\">Positive growth.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"1vw\"} -->\n<div style=\"height:1vw\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":\"3vw\",\"padding\":{\"top\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"right\":\"0\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group alignwide\" style=\"padding-top:0;padding-right:0;padding-bottom:0;padding-left:0\"><!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"3vw\",\"left\":\"3vw\"}}}} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"33.38%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:33.38%\"><!-- wp:paragraph {\"style\":{\"color\":{\"text\":\"#000000\"},\"typography\":{\"fontSize\":\"17px\"}}} -->\n<p class=\"has-text-color\" style=\"color:#000000;font-size:17px\"><em>Nature<\/em>, in the common sense, refers to essences unchanged by man; space, the air, the river, the leaf.&nbsp;<em>Art<\/em>&nbsp;is applied to the mixture of his will with the same things, as in a house, a canal, a statue, a picture. <\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"style\":{\"color\":{\"text\":\"#000000\"},\"typography\":{\"fontSize\":\"17px\"}}} -->\n<p class=\"has-text-color\" style=\"color:#000000;font-size:17px\">But his operations taken together are so insignificant, a little chipping, baking, patching, and washing, that in an impression so grand as that of the world on the human mind, they do not vary the result.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"width\":\"33%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:33%\"><!-- wp:spacer {\"height\":\"2vw\"} -->\n<div style=\"height:2vw\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/outside-01.jpg\" alt=\"The sun setting through a dense forest.\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"width\":\"33.62%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:33.62%\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/outside-02.jpg\" alt=\"Wind turbines standing on a grassy plain, against a blue sky.\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"left\":\"3vw\"}}}} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"69%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:69%\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/outside-03.jpg\" alt=\"The sun shining over a ridge leading down into the shore. In the distance, a car drives down a road.\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"33%\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:33%\"><!-- wp:spacer {\"height\":\"2vw\"} -->\n<div style=\"height:2vw\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"style\":{\"color\":{\"text\":\"#000000\"},\"typography\":{\"fontSize\":\"17px\"}}} -->\n<p class=\"has-text-color\" style=\"color:#000000;font-size:17px\">Undoubtedly we have no questions to ask which are unanswerable. We must trust the perfection of the creation so far, as to believe that whatever curiosity the order of things has awakened in our minds, the order of things can satisfy. Every man's condition is a solution in hieroglyphic to those inquiries he would put.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "Three columns with images and text, with vertical spacing for an offset look.",
      "viewport_width": 1200,
      "categories": [
          "text",
          "featured",
          "gallery",
          "images",
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/two-columns-of-text-with-offset-heading",
      "title": "Two columns of text with offset heading",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"color\":{\"background\":\"#f2f0e9\"}}} -->\n<div class=\"wp-block-group alignfull has-background\" style=\"background-color:#f2f0e9\"><!-- wp:spacer {\"height\":70} -->\n<div style=\"height:70px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:columns {\"verticalAlignment\":\"center\",\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide are-vertically-aligned-center\"><!-- wp:column {\"width\":\"50%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.1\",\"fontSize\":\"30px\"},\"color\":{\"text\":\"#000000\"}}} -->\n<p class=\"has-text-color\" style=\"color:#000000;font-size:30px;line-height:1.1\"><strong>Oceanic Inspiration<\/strong><\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"width\":\"50%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:separator {\"customColor\":\"#000000\",\"className\":\"is-style-wide\"} -->\n<hr class=\"wp-block-separator has-text-color has-background is-style-wide\" style=\"background-color:#000000;color:#000000\" \/>\n<!-- \/wp:separator --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:columns {\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column -->\n<div class=\"wp-block-column\"><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"style\":{\"color\":{\"text\":\"#000000\"}},\"fontSize\":\"extra-small\"} -->\n<p class=\"has-text-color has-extra-small-font-size\" style=\"color:#000000\">Winding veils round their heads, the women walked on deck. They were now moving steadily down the river, passing the dark shapes of ships at anchor, and London was a swarm of lights with a pale yellow canopy drooping above it. There were the lights of the great theatres, the lights of the long streets, lights that indicated huge squares of domestic comfort, lights that hung high in air.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"style\":{\"color\":{\"text\":\"#000000\"}},\"fontSize\":\"extra-small\"} -->\n<p class=\"has-text-color has-extra-small-font-size\" style=\"color:#000000\">No darkness would ever settle upon those lamps, as no darkness had settled upon them for hundreds of years. It seemed dreadful that the town should blaze for ever in the same spot; dreadful at least to people going away to adventure upon the sea, and beholding it as a circumscribed mound, eternally burnt, eternally scarred. From the deck of the ship the great city appeared a crouched and cowardly figure, a sedentary miser.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:spacer {\"height\":40} -->\n<div style=\"height:40px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:group -->",
      "description": "Two columns of text with an offset heading.",
      "viewport_width": 1200,
      "categories": [
          "text",
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/media-and-text-in-a-full-height-container",
      "title": "Media and text in a full height container",
      "content": "<!-- wp:cover {\"customOverlayColor\":\"#ffffff\",\"minHeight\":100,\"minHeightUnit\":\"vh\",\"contentPosition\":\"center center\",\"isDark\":false,\"align\":\"full\"} -->\n<div class=\"wp-block-cover alignfull is-light\" style=\"min-height:100vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim\" style=\"background-color:#ffffff\"><\/span><div class=\"wp-block-cover__inner-container\"><!-- wp:media-text {\"mediaLink\":\"https:\/\/s.w.org\/images\/core\/5.8\/soil.jpg\",\"mediaType\":\"image\",\"mediaWidth\":56,\"verticalAlignment\":\"center\",\"imageFill\":true} -->\n<div class=\"wp-block-media-text alignwide is-stacked-on-mobile is-vertically-aligned-center is-image-fill\" style=\"grid-template-columns:56% auto\"><figure class=\"wp-block-media-text__media\" style=\"background-image:url(https:\/\/s.w.org\/images\/core\/5.8\/soil.jpg);background-position:50% 50%\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/soil.jpg\" alt=\"Close-up of dried, cracked earth.\" \/><\/figure><div class=\"wp-block-media-text__content\"><!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"32px\"},\"color\":{\"text\":\"#000000\"}}} -->\n<h2 class=\"wp-block-heading has-text-color\" style=\"color:#000000;font-size:32px\"><strong>What's the problem?<\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"17px\"},\"color\":{\"text\":\"#000000\"}}} -->\n<p class=\"has-text-color\" style=\"color:#000000;font-size:17px\">Trees are more important today than ever before. More than 10,000 products are reportedly made from trees. Through chemistry, the humble woodpile is yielding chemicals, plastics and fabrics that were beyond comprehension when an axe first felled a Texas tree.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"className\":\"is-style-fill\"} -->\n<div class=\"wp-block-button is-style-fill\"><a class=\"wp-block-button__link wp-element-button\">Learn more<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div><\/div>\n<!-- \/wp:media-text --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "Media and text block with image to the left and text and button to the right.",
      "viewport_width": 1200,
      "categories": [
          "banner"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/media-and-text-with-image-on-the-right",
      "title": "Media and text with image on the right",
      "content": "<!-- wp:media-text {\"align\":\"full\",\"mediaPosition\":\"right\",\"mediaLink\":\"#\",\"mediaType\":\"image\",\"mediaWidth\":56,\"verticalAlignment\":\"center\",\"className\":\"is-style-default\"} -->\n<div class=\"wp-block-media-text alignfull has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-center is-style-default\" style=\"grid-template-columns:auto 56%\"><div class=\"wp-block-media-text__content\"><!-- wp:heading {\"style\":{\"color\":{\"text\":\"#000000\"}}} -->\n<h2 class=\"wp-block-heading has-text-color\" style=\"color:#000000\"><strong>Shore with Blue Sea<\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.1\",\"fontSize\":\"17px\"},\"color\":{\"text\":\"#636363\"}}} -->\n<p class=\"has-text-color\" style=\"color:#636363;font-size:17px;line-height:1.1\">Eleanor Harris&nbsp;(American, 1901-1942)<\/p>\n<!-- \/wp:paragraph --><\/div><figure class=\"wp-block-media-text__media\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/art-02.jpg\" alt=\"A green and brown rural landscape leading into a bright blue ocean and slightly cloudy sky, done in oil paints.\" \/><\/figure><\/div>\n<!-- \/wp:media-text -->\n\n<!-- wp:paragraph -->\n<p><\/p>\n<!-- \/wp:paragraph -->",
      "description": "Media and text block with image to the right and text to the left.",
      "viewport_width": 1200,
      "categories": [
          "banner"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/media-and-text-with-image-on-the-left",
      "title": "Media and text with image on the left",
      "content": "<!-- wp:media-text {\"align\":\"full\",\"mediaType\":\"image\",\"verticalAlignment\":\"center\"} -->\n<div class=\"wp-block-media-text alignfull is-stacked-on-mobile is-vertically-aligned-center\"><figure class=\"wp-block-media-text__media\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/architecture-04.jpg\" alt=\"Close-up, abstract view of architecture.\" \/><\/figure><div class=\"wp-block-media-text__content\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"style\":{\"color\":{\"text\":\"#000000\"}}} -->\n<h3 class=\"wp-block-heading has-text-align-center has-text-color\" style=\"color:#000000\"><strong>Open Spaces<\/strong><\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"extra-small\"} -->\n<p class=\"has-text-align-center has-extra-small-font-size\"><a href=\"#\">See case study \u2197<\/a><\/p>\n<!-- \/wp:paragraph --><\/div><\/div>\n<!-- \/wp:media-text -->",
      "description": "Media and text block with image to the left and text to the right.",
      "viewport_width": 1200,
      "categories": [
          "banner",
          "featured"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/large-header-with-text-and-a-button",
      "title": "Large header with text and a button",
      "content": "<!-- wp:cover {\"url\":\"https:\/\/s.w.org\/images\/core\/5.8\/art-01.jpg\",\"hasParallax\":true,\"dimRatio\":40,\"customOverlayColor\":\"#000000\",\"minHeight\":100,\"minHeightUnit\":\"vh\",\"contentPosition\":\"center center\",\"align\":\"full\"} -->\n<div class=\"wp-block-cover alignfull has-parallax\" style=\"min-height:100vh\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-40 has-background-dim\" style=\"background-color:#000000\"><\/span><div role=\"img\" class=\"wp-block-cover__image-background has-parallax\" style=\"background-position:50% 50%;background-image:url(https:\/\/s.w.org\/images\/core\/5.8\/art-01.jpg)\"><\/div><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"48px\",\"lineHeight\":\"1.2\"}},\"className\":\"alignwide has-white-color has-text-color\"} -->\n<h2 class=\"wp-block-heading alignwide has-white-color has-text-color\" style=\"font-size:48px;line-height:1.2\"><strong><em>Overseas:<\/em><\/strong><br><strong><em>1500 \u2014 1960<\/em><\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:columns {\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"60%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:60%\"><!-- wp:paragraph {\"style\":{\"color\":{\"text\":\"#ffffff\"}}} -->\n<p class=\"has-text-color\" style=\"color:#ffffff\">An exhibition about the different representations of the ocean throughout time, between the sixteenth and the twentieth century. Taking place in our Open Room in <em>Floor 2<\/em>.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"style\":{\"color\":{\"text\":\"#ffffff\",\"background\":\"#000000\"}},\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color has-background wp-element-button\" style=\"color:#ffffff;background-color:#000000\">Visit<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "Large header with background image and text and button on top.",
      "viewport_width": 1200,
      "categories": [
          "banner"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/large-header-with-left-aligned-text",
      "title": "Large header with left-aligned text",
      "content": "<!-- wp:cover {\"url\":\"https:\/\/s.w.org\/images\/core\/5.8\/forest.jpg\",\"dimRatio\":60,\"minHeight\":800,\"align\":\"full\"} -->\n<div class=\"wp-block-cover alignfull\" style=\"min-height:800px\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-60 has-background-dim\"><\/span><img class=\"wp-block-cover__image-background\" alt=\"\" src=\"https:\/\/s.w.org\/images\/core\/5.8\/forest.jpg\" data-object-fit=\"cover\" \/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"align\":\"wide\",\"style\":{\"color\":{\"text\":\"#ffe074\"},\"typography\":{\"fontSize\":\"64px\"}}} -->\n<h2 class=\"wp-block-heading alignwide has-text-color\" style=\"color:#ffe074;font-size:64px\">Forest.<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:columns {\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"55%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:55%\"><!-- wp:spacer {\"height\":\"330px\"} -->\n<div style=\"height:330px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"style\":{\"color\":{\"text\":\"#ffe074\"},\"typography\":{\"lineHeight\":\"1.3\",\"fontSize\":\"12px\"}}} -->\n<p class=\"has-text-color\" style=\"color:#ffe074;font-size:12px;line-height:1.3\"><em>Even a child knows how valuable the forest is. The fresh, breathtaking smell of trees. Echoing birds flying above that dense magnitude. A stable climate, a sustainable diverse life and a source of culture. Yet, forests and other ecosystems hang in the balance, threatened to become croplands, pasture, and plantations.<\/em><\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns --><\/div><\/div>\n<!-- \/wp:cover -->",
      "description": "Cover image with quote on top",
      "viewport_width": 1200,
      "categories": [
          "banner",
          "featured"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/heading",
      "title": "Heading",
      "content": "<!-- wp:heading {\"align\":\"wide\",\"style\":{\"typography\":{\"fontSize\":\"48px\",\"lineHeight\":\"1.1\"}}} -->\n<h2 class=\"alignwide\" id=\"we-re-a-studio-in-berlin-with-an-international-practice-in-architecture-urban-planning-and-interior-design-we-believe-in-sharing-knowledge-and-promoting-dialogue-to-increase-the-creative-potential-of-collaboration\" style=\"font-size:48px;line-height:1.1\">We're a studio in Berlin with an international practice in architecture, urban planning and interior design. We believe in sharing knowledge and promoting dialogue to increase the creative potential of collaboration.<\/h2>\n<!-- \/wp:heading -->",
      "description": "Heading text",
      "viewport_width": 1200,
      "categories": [
          "featured",
          "text"
      ],
      "keywords": [
          "large text",
          "title"
      ],
      "block_types": [
          "core\/heading"
      ],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/two-columns-of-text-and-title",
      "title": "Two columns of text and title",
      "content": "<!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":38,\"lineHeight\":\"1.4\"}}} -->\n<h2 style=\"font-size:38px;line-height:1.4\"><strong>The voyage had begun, and had begun happily with a soft blue sky, and a calm sea.<\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":18}}} -->\n<p style=\"font-size:18px\">They followed her on to the deck. All the smoke and the houses had disappeared, and the ship was out in a wide space of sea very fresh and clear though pale in the early light. They had left London sitting on its mud. A very thin line of shadow tapered on the horizon, scarcely thick enough to stand the burden of Paris, which nevertheless rested upon it. They were free of roads, free of mankind, and the same exhilaration at their freedom ran through them all.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":18}}} -->\n<p style=\"font-size:18px\">The ship was making her way steadily through small waves which slapped her and then fizzled like effervescing water, leaving a little border of bubbles and foam on either side. The colourless October sky above was thinly clouded as if by the trail of wood-fire smoke, and the air was wonderfully salt and brisk. Indeed it was too cold to stand still. Mrs. Ambrose drew her arm within her husband's, and as they moved off it could be seen from the way in which her sloping cheek turned up to his that she had something private to communicate.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->",
      "description": "Two columns of text preceded by a long heading.",
      "viewport_width": 1200,
      "categories": [
          "text",
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "core\/two-images-side-by-side",
      "title": "Two images side by side",
      "content": "<!-- wp:gallery {\"linkTo\":\"none\",\"align\":\"wide\"} -->\n<figure class=\"wp-block-gallery alignwide has-nested-images columns-default is-cropped\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/nature-above-01.jpg\" alt=\"An aerial view of waves crashing against a shore.\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/images\/core\/5.8\/nature-above-02.jpg\" alt=\"An aerial view of a field. A road runs through the upper right corner.\" \/><\/figure>\n<!-- \/wp:image --><\/figure>\n<!-- \/wp:gallery -->",
      "description": "An image gallery with two example images.",
      "viewport_width": 800,
      "categories": [
          "gallery"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/core"
  },
  {
      "name": "link-in-bio",
      "title": "Link in Bio",
      "content": "<!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|80\",\"right\":\"0\",\"bottom\":\"var:preset|spacing|80\",\"left\":\"0\"}}},\"backgroundColor\":\"white\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group has-white-background-color has-background\" style=\"padding-top:var(--wp--preset--spacing--80);padding-right:0;padding-bottom:var(--wp--preset--spacing--80);padding-left:0\"><!-- wp:site-title {\"textAlign\":\"center\",\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"700\"}},\"fontSize\":\"medium\"} \/-->\n\n<!-- wp:site-tagline {\"textAlign\":\"center\"} \/-->\n\n<!-- wp:spacer {\"height\":\"20px\"} -->\n<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"width\":100} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100\"><a class=\"wp-block-button__link wp-element-button\">Watch my latest videos<\/a><\/div>\n<!-- \/wp:button -->\n\n<!-- wp:button {\"width\":100} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100\"><a class=\"wp-block-button__link wp-element-button\">Buy merch<\/a><\/div>\n<!-- \/wp:button -->\n\n<!-- wp:button {\"width\":100} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100\"><a class=\"wp-block-button__link wp-element-button\">Support me on Patreon<\/a><\/div>\n<!-- \/wp:button -->\n\n<!-- wp:button {\"width\":100,\"className\":\"is-style-fill\"} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100 is-style-fill\"><a class=\"wp-block-button__link wp-element-button\">Get tickets for my show<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons -->\n\n<!-- wp:social-links {\"iconColor\":\"black\",\"iconColorValue\":\"#000000\",\"iconBackgroundColor\":\"white\",\"iconBackgroundColorValue\":\"#ffffff\",\"size\":\"has-normal-icon-size\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"0\",\"left\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|60\",\"bottom\":\"var:preset|spacing|60\"}}},\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n<ul class=\"wp-block-social-links has-normal-icon-size has-icon-color has-icon-background-color\" style=\"padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)\"><!-- wp:social-link {\"url\":\"https:\/\/wordpress.org\/patterns\/\",\"service\":\"instagram\"} \/-->\n\n<!-- wp:social-link {\"url\":\"https:\/\/wordpress.org\/patterns\/\",\"service\":\"bandcamp\"} \/-->\n\n<!-- wp:social-link {\"url\":\"https:\/\/wordpress.org\/patterns\/\",\"service\":\"twitter\"} \/-->\n\n<!-- wp:social-link {\"url\":\"https:\/\/wordpress.org\/patterns\/\",\"service\":\"twitch\"} \/--><\/ul>\n<!-- \/wp:social-links --><\/div>\n<!-- \/wp:group -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "call-to-action",
          "featured"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "simple-call-to-action",
      "title": "Simple call to action",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"color\":{\"text\":\"#000000\",\"background\":\"#ffffff\"}}} -->\n<div class=\"wp-block-group alignfull has-text-color has-background\" style=\"background-color:#ffffff;color:#000000\"><!-- wp:spacer {\"height\":64} -->\n<div style=\"height:64px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"lineHeight\":\".9\"}},\"fontSize\":\"small\"} -->\n<p class=\"has-text-align-center has-small-font-size\" style=\"line-height:.9\"><strong>GET IN TOUCH<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"style\":{\"typography\":{\"fontSize\":59,\"lineHeight\":\"1.15\"}}} -->\n<h2 class=\"has-text-align-center\" id=\"schedule-a-visit\" style=\"font-size:59px;line-height:1.15\"><strong>Schedule a Visit<\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\",\"orientation\":\"horizontal\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"width\":50,\"style\":{\"color\":{\"background\":\"#000000\",\"text\":\"#ffffff\"},\"border\":{\"radius\":\"50px\"}}} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-50\"><a class=\"wp-block-button__link has-text-color has-background\" style=\"border-radius:50px;background-color:#000000;color:#ffffff\">Contact us<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons -->\n\n<!-- wp:spacer {\"height\":64} -->\n<div style=\"height:64px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:group -->",
      "description": "A container with a white background. Inside is a centered paragraph, heading, and button.",
      "viewport_width": 800,
      "categories": [
          "call-to-action",
          "featured"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "three-column-pricing-table",
      "title": "Three column pricing table",
      "content": "<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"0\"}}}} -->\n<div class=\"wp-block-columns alignwide\" style=\"margin-bottom:0\"><!-- wp:column {\"style\":{\"color\":{\"background\":\"#ffe97d\",\"text\":\"#000000\"},\"elements\":{\"link\":{\"color\":{\"text\":\"#000000\"}}},\"spacing\":{\"padding\":{\"top\":\"2em\",\"right\":\"2em\",\"bottom\":\"2em\",\"left\":\"2em\"}}}} -->\n<div class=\"wp-block-column has-text-color has-background has-link-color\" style=\"color:#000000;background-color:#ffe97d;padding-top:2em;padding-right:2em;padding-bottom:2em;padding-left:2em\"><!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"40px\"}},\"anchor\":\"single\"} -->\n<h2 class=\"wp-block-heading\" id=\"single\" style=\"font-size:40px\"><strong>Single<\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.5\"}},\"fontSize\":\"normal\"} -->\n<p class=\"has-normal-font-size\" style=\"line-height:1.5\"><strong>Enrich our growing community.<\/strong> <\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:separator {\"opacity\":\"css\",\"style\":{\"color\":{\"background\":\"#000000\"}},\"className\":\"is-style-wide\"} -->\n<hr class=\"wp-block-separator has-text-color has-css-opacity has-background is-style-wide\" style=\"background-color:#000000;color:#000000\" \/>\n<!-- \/wp:separator -->\n\n<!-- wp:list {\"fontSize\":\"normal\"} -->\n<ul class=\"has-normal-font-size\"><!-- wp:list-item -->\n<li>General admission and member discounts for one adult<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>One free ticket per special exhibition<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Two single-use guest passes per year<\/li>\n<!-- \/wp:list-item --><\/ul>\n<!-- \/wp:list -->\n\n<!-- wp:buttons {\"align\":\"full\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\",\"orientation\":\"horizontal\"}} -->\n<div class=\"wp-block-buttons alignfull\"><!-- wp:button {\"textColor\":\"white\",\"width\":100,\"style\":{\"color\":{\"background\":\"#000000\"},\"border\":{\"radius\":0}}} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100\"><a class=\"wp-block-button__link has-white-color has-text-color has-background no-border-radius wp-element-button\" style=\"background-color:#000000\">$110 \/ year<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"style\":{\"color\":{\"background\":\"#d1d1e1\",\"text\":\"#000000\"},\"elements\":{\"link\":{\"color\":{\"text\":\"#000000\"}}},\"spacing\":{\"padding\":{\"top\":\"2em\",\"right\":\"2em\",\"bottom\":\"2em\",\"left\":\"2em\"}}}} -->\n<div class=\"wp-block-column has-text-color has-background has-link-color\" style=\"color:#000000;background-color:#d1d1e1;padding-top:2em;padding-right:2em;padding-bottom:2em;padding-left:2em\"><!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"40px\"}},\"anchor\":\"family\"} -->\n<h2 class=\"wp-block-heading\" id=\"family\" style=\"font-size:40px\"><strong>Family<\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.5\"}},\"fontSize\":\"normal\"} -->\n<p class=\"has-normal-font-size\" style=\"line-height:1.5\"><strong>Support special exhibitions.<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:separator {\"opacity\":\"css\",\"className\":\"is-style-wide\"} -->\n<hr class=\"wp-block-separator has-css-opacity is-style-wide\" \/>\n<!-- \/wp:separator -->\n\n<!-- wp:list {\"fontSize\":\"normal\"} -->\n<ul class=\"has-normal-font-size\"><!-- wp:list-item -->\n<li>General admission and member discounts for two adults<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Four free tickets per special exhibition<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Four single-use guest passes per year<\/li>\n<!-- \/wp:list-item --><\/ul>\n<!-- \/wp:list -->\n\n<!-- wp:buttons {\"align\":\"full\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\",\"orientation\":\"horizontal\"}} -->\n<div class=\"wp-block-buttons alignfull\"><!-- wp:button {\"textColor\":\"white\",\"width\":100,\"style\":{\"color\":{\"background\":\"#000000\"},\"border\":{\"radius\":0}},\"className\":\"is-style-fill\"} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100 is-style-fill\"><a class=\"wp-block-button__link has-white-color has-text-color has-background no-border-radius wp-element-button\" style=\"background-color:#000000\">$200 \/ year<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"style\":{\"color\":{\"background\":\"#c0ebf1\",\"text\":\"#000000\"},\"elements\":{\"link\":{\"color\":{\"text\":\"#000000\"}}},\"spacing\":{\"padding\":{\"top\":\"2em\",\"right\":\"2em\",\"bottom\":\"2em\",\"left\":\"2em\"}}}} -->\n<div class=\"wp-block-column has-text-color has-background has-link-color\" style=\"color:#000000;background-color:#c0ebf1;padding-top:2em;padding-right:2em;padding-bottom:2em;padding-left:2em\"><!-- wp:heading {\"style\":{\"typography\":{\"fontSize\":\"40px\"}},\"anchor\":\"patron\"} -->\n<h2 class=\"wp-block-heading\" id=\"patron\" style=\"font-size:40px\"><strong>Patron<\/strong><\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"normal\"} -->\n<p class=\"has-normal-font-size\"><strong>Take support to the next level.<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:separator {\"opacity\":\"css\",\"className\":\"is-style-wide\"} -->\n<hr class=\"wp-block-separator has-css-opacity is-style-wide\" \/>\n<!-- \/wp:separator -->\n\n<!-- wp:list {\"fontSize\":\"normal\"} -->\n<ul class=\"has-normal-font-size\"><!-- wp:list-item -->\n<li>General admission and member discounts for two adults<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Five free tickets per special exhibition<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Six single-use guest passes per year<\/li>\n<!-- \/wp:list-item --><\/ul>\n<!-- \/wp:list -->\n\n<!-- wp:buttons {\"align\":\"full\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\",\"orientation\":\"horizontal\"}} -->\n<div class=\"wp-block-buttons alignfull\"><!-- wp:button {\"textColor\":\"white\",\"width\":100,\"style\":{\"color\":{\"background\":\"#000000\"},\"border\":{\"radius\":0}}} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100\"><a class=\"wp-block-button__link has-white-color has-text-color has-background no-border-radius wp-element-button\" style=\"background-color:#000000\">$400 \/ year<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->",
      "description": "Three equal-width columns set up as a pricing table. The left column has a yellow background, the middle column has a light purple background, and the right column has a light blue background. Each column contains a heading, subheading, separator, list, and then a button.",
      "viewport_width": 1200,
      "categories": [
          "call-to-action",
          "featured"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "image-and-quote-on-a-background",
      "title": "Image and quote on a background",
      "content": "<!-- wp:media-text {\"mediaPosition\":\"right\",\"mediaId\":5263,\"mediaLink\":\"https:\/\/wordpress.org\/patterns\/pattern\/image-and-quote-on-a-background\/pear-3\/\",\"mediaType\":\"image\",\"verticalAlignment\":\"center\",\"style\":{\"color\":{\"background\":\"#f1f5c7\"}}} -->\n<div class=\"wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-center has-background\" style=\"background-color:#f1f5c7\"><figure class=\"wp-block-media-text__media\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/pear-1-1024x1024.png\" alt=\"\" class=\"wp-image-5263 size-full\" \/><\/figure><div class=\"wp-block-media-text__content\"><!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"2em\",\"right\":\"2em\",\"bottom\":\"2em\",\"left\":\"2em\"}}}} -->\n<div class=\"wp-block-group\" style=\"padding-top:2em;padding-right:2em;padding-bottom:2em;padding-left:2em\"><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.2\",\"fontSize\":\"36px\"}}} -->\n<p style=\"font-size:36px;line-height:1.2\"><strong>Even the bitterest fruit has sugar in it.<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"fontSize\":\"extra-small\"} -->\n<p class=\"has-extra-small-font-size\">\u2013 Terry a O'Neal<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:media-text -->\n\n<!-- wp:media-text {\"mediaId\":673,\"mediaLink\":\"https:\/\/wordpress.org\/patterns\/pear-half\/\",\"mediaType\":\"image\",\"verticalAlignment\":\"center\",\"style\":{\"color\":{\"background\":\"#fffdea\"}}} -->\n<div class=\"wp-block-media-text alignwide is-stacked-on-mobile is-vertically-aligned-center has-background\" style=\"background-color:#fffdea\"><figure class=\"wp-block-media-text__media\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/pear-half-1024x1024.png\" alt=\"\" class=\"wp-image-673 size-full\" \/><\/figure><div class=\"wp-block-media-text__content\"><!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"2em\",\"right\":\"2em\",\"bottom\":\"2em\",\"left\":\"2em\"}}}} -->\n<div class=\"wp-block-group\" style=\"padding-top:2em;padding-right:2em;padding-bottom:2em;padding-left:2em\"><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.2\",\"fontSize\":\"36px\"}}} -->\n<p style=\"font-size:36px;line-height:1.2\"><strong>The trees that are slow to grow bear the best fruit.<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"fontSize\":\"extra-small\"} -->\n<p class=\"has-extra-small-font-size\">\u2013 Moli\u00e8re<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div><\/div>\n<!-- \/wp:media-text -->",
      "description": "Two media and text blocks. The top one has a pale green background. The text is on the left and contains a quote, and the image is on the right. The next block underneath has the image on the left, and quote on the right.",
      "viewport_width": 800,
      "categories": [
          "featured",
          "images",
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "event",
      "title": "Event",
      "content": "<!-- wp:media-text {\"align\":\"full\",\"mediaPosition\":\"right\",\"mediaId\":590,\"mediaLink\":\"https:\/\/wordpress.org\/patterns\/image-from-rawpixel-id-430289-jpeg-1\/\",\"mediaType\":\"image\",\"mediaWidth\":60,\"verticalAlignment\":\"top\",\"style\":{\"color\":{\"background\":\"#121c1c\",\"text\":\"#fffdc7\"},\"elements\":{\"link\":{\"color\":{\"text\":\"#fffdc7\"}}}}} -->\n<div class=\"wp-block-media-text alignfull has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-top has-text-color has-background has-link-color\" style=\"color:#fffdc7;background-color:#121c1c;grid-template-columns:auto 60%\"><div class=\"wp-block-media-text__content\"><!-- wp:group {\"style\":{\"spacing\":{\"padding\":{\"top\":\"2em\",\"right\":\"2em\",\"bottom\":\"2em\",\"left\":\"2em\"}},\"elements\":{\"link\":{\"color\":{\"text\":\"#fffdc7\"}}}}} -->\n<div class=\"wp-block-group has-link-color\" style=\"padding-top:2em;padding-right:2em;padding-bottom:2em;padding-left:2em\"><!-- wp:heading {\"style\":{\"typography\":{\"fontWeight\":\"700\",\"fontSize\":\"48px\",\"lineHeight\":\"1.15\"}}} -->\n<h2 class=\"wp-block-heading\" style=\"font-size:48px;font-weight:700;line-height:1.15\">Opening <br>Party<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"#fffdc7\"}}},\"color\":{\"text\":\"#fffdc7\"}}} -->\n<p class=\"has-text-color has-link-color\" style=\"color:#fffdc7\"><strong><a href=\"#\">RSVP \u2192<\/a><\/strong><\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div><figure class=\"wp-block-media-text__media\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/image-from-rawpixel-id-430289-jpeg-1-1024x1024.jpg\" alt=\"\" class=\"wp-image-590 size-full\" \/><\/figure><\/div>\n<!-- \/wp:media-text -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "banner",
          "featured",
          "images"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "image-on-solid-color-with-description",
      "title": "Image on solid color with description",
      "content": "<!-- wp:columns {\"align\":\"full\"} -->\n<div class=\"wp-block-columns alignfull\"><!-- wp:column {\"width\":\"50%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:cover {\"customOverlayColor\":\"#f6f6f6\",\"minHeight\":600} -->\n<div class=\"wp-block-cover has-background-dim\" style=\"background-color:#f6f6f6;min-height:600px\"><div class=\"wp-block-cover__inner-container\"><!-- wp:image {\"align\":\"center\",\"id\":571,\"sizeSlug\":\"medium\",\"linkDestination\":\"none\"} -->\n<div class=\"wp-block-image\"><figure class=\"aligncenter size-medium\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/wire-sculpture-263x300.jpg\" alt=\"\" class=\"wp-image-571\" \/><\/figure><\/div>\n<!-- \/wp:image --><\/div><\/div>\n<!-- \/wp:cover --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"center\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"1em\",\"right\":\"1em\",\"bottom\":\"1em\",\"left\":\"1em\"}}}} -->\n<div class=\"wp-block-column is-vertically-aligned-center\" style=\"padding-top:1em;padding-right:1em;padding-bottom:1em;padding-left:1em\"><!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"320px\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:320px\"><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.6\"}},\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\" style=\"line-height:1.6\"><strong>Airplane<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.6\"}},\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\" style=\"line-height:1.6\">Copper wire, wood base. I created this piece in late 2008. For this work, I aimed to convey both the industrial heaviness of an airplane, but also the cloudlike floating quality you feel when you\u2019re in one.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->",
      "description": "Image on solid color with description.",
      "viewport_width": 1200,
      "categories": [
          "featured",
          "images",
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "offset-images-with-descriptions",
      "title": "Offset images with descriptions",
      "content": "<!-- wp:columns {\"verticalAlignment\":\"top\",\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|40\"}}}} -->\n<div class=\"wp-block-columns alignwide are-vertically-aligned-top\"><!-- wp:column {\"verticalAlignment\":\"top\"} -->\n<div class=\"wp-block-column is-vertically-aligned-top\"><!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"480px\"},\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"left\"}} -->\n<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0\"><!-- wp:image {\"id\":525,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"50%\"}}} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/Iris-793x1024.jpg\" alt=\"Beautiful photomechanical prints of White Irises (1887-1897) by Ogawa Kazumasa. Original from The Rijksmuseum. \" class=\"wp-image-525\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"fontSize\":\"medium\"} -->\n<p class=\"has-medium-font-size\"><strong>White Irises<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">Ogawa Kazumasa<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"top\"} -->\n<div class=\"wp-block-column is-vertically-aligned-top\"><!-- wp:group {\"style\":{\"layout\":{\"selfStretch\":\"fixed\",\"flexSize\":\"480px\"},\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->\n<div class=\"wp-block-group\" style=\"margin-top:0;margin-bottom:0\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:spacer {\"height\":\"80px\"} -->\n<div style=\"height:80px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"fontSize\":\"medium\"} -->\n<p class=\"has-medium-font-size\"><strong>Cherry Blossom<\/strong><\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">Ogawa Kazumasa<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:image {\"id\":524,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"style\":{\"typography\":{\"fontSize\":\"14px\"}}} -->\n<figure class=\"wp-block-image size-large\" style=\"font-size:14px\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/Cherry-Blossom-707x1024.jpg\" alt=\"Beautiful photomechanical prints of Cherry Blossom (1887-1897) by Ogawa Kazumasa. Original from The Rijksmuseum. \" class=\"wp-image-524\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->",
      "description": "Two offset columns with images and titles within each one.",
      "viewport_width": 1200,
      "categories": [
          "featured",
          "gallery",
          "images"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "image-with-description-below-and-to-the-right",
      "title": "Image with description below and to the right",
      "content": "<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"10%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:10%\"><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:image {\"id\":522,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/image-from-rawpixel-id-539759-jpeg-1-1024x1024.jpg\" alt=\"Vintage Cupid Illustration\" class=\"wp-image-522\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"width\":\"10%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:10%\"><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"14px\"}}} -->\n<p style=\"font-size:14px\"><strong>Cupid in Flight<\/strong><br>48\u201d x 48\u201d Giclee print on archival paper.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:paragraph -->\n<p><\/p>\n<!-- \/wp:paragraph -->",
      "description": "Image with description below and to the right.",
      "viewport_width": 1200,
      "categories": [
          "featured",
          "images"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "event-details",
      "title": "Event details",
      "content": "<!-- wp:image {\"align\":\"wide\",\"id\":501,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image alignwide size-full\"><img src=\"https:\/\/s.w.org\/patterns\/files\/2021\/06\/Group-17-scaled.jpg\" alt=\"Image of a woman being carried through the air by swans.\" class=\"wp-image-501\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:columns {\"verticalAlignment\":\"center\",\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide are-vertically-aligned-center\"><!-- wp:column {\"verticalAlignment\":\"center\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\"><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} -->\n<p style=\"line-height:2\"><strong>Location:<\/strong><br>82 Main St. Brooklyn, NY<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"center\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\"><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} -->\n<p style=\"line-height:2\"><strong>Date:<\/strong><br>October 24, 2021<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"center\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\"><!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"width\":100,\"style\":{\"color\":{\"background\":\"#262626\",\"text\":\"#efefef\"}}} -->\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100\"><a class=\"wp-block-button__link has-text-color has-background wp-element-button\" style=\"color:#efefef;background-color:#262626\">Purchase Tickets<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->",
      "description": "Event details.",
      "viewport_width": 1200,
      "categories": [
          "call-to-action",
          "featured"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/featured"
  },
  {
      "name": "clients",
      "title": "Clients",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}},\"border\":{\"radius\":\"16px\"}},\"backgroundColor\":\"base-2\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-group alignwide has-base-2-background-color has-background\" style=\"border-radius:16px;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">We\u2019ve worked with some of the best companies.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|20\",\"padding\":{\"right\":\"0\",\"left\":\"0\",\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group alignwide\" style=\"padding-top:0;padding-right:0;padding-bottom:0;padding-left:0\"><!-- wp:image {\"width\":\"150px\",\"aspectRatio\":\"4\/3\",\"scale\":\"contain\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image is-resized\"><img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:contain;width:150px\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:image {\"width\":\"150px\",\"aspectRatio\":\"4\/3\",\"scale\":\"contain\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image is-resized\"><img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:contain;width:150px\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:image {\"width\":\"150px\",\"aspectRatio\":\"4\/3\",\"scale\":\"contain\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image is-resized\"><img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:contain;width:150px\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:image {\"width\":\"150px\",\"aspectRatio\":\"4\/3\",\"scale\":\"contain\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image is-resized\"><img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:contain;width:150px\" \/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:image {\"width\":\"150px\",\"aspectRatio\":\"4\/3\",\"scale\":\"contain\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image is-resized\"><img alt=\"\" style=\"aspect-ratio:4\/3;object-fit:contain;width:150px\" \/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "testimonials"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/theme"
  },
  {
      "name": "three-columns-of-services",
      "title": "Three columns of services",
      "content": "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|40\"}}}} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"33%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:33%\"><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"1.2\"}},\"fontSize\":\"large\",\"fontFamily\":\"heading\"} -->\n<p class=\"has-heading-font-family has-large-font-size\" style=\"line-height:1.2\">We recognize the role architecture plays in shaping a sustainable future.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|40\"}}} -->\n<div class=\"wp-block-column\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|40\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"left\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"500\"}}} -->\n<p style=\"font-style:normal;font-weight:500\">Consulting<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"500\"}}} -->\n<p style=\"font-style:normal;font-weight:500\">Project Management<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|40\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"500\"}}} -->\n<p style=\"font-style:normal;font-weight:500\">Design<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"500\"}}} -->\n<p style=\"font-style:normal;font-weight:500\">Maintenance<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Our vision is to be at the forefront of architectural innovation, fostering a global community of architects and enthusiasts united by a passion for creating spaces.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns --><\/div>\n<!-- \/wp:group -->",
      "description": "",
      "viewport_width": 800,
      "categories": [
          "services",
          "text"
      ],
      "keywords": [
          ""
      ],
      "block_types": [],
      "source": "pattern-directory\/theme"
  }
]


export const fields =  {
  "name": "Test",
  "description": "",
  "url": "https:\/\/wp.smokenetwork.nl",
  "home": "https:\/\/wp.smokenetwork.nl",
  "gmt_offset": "0",
  "timezone_string": "",
  "site_logo": 0,
  "site_icon": 0,
  "site_icon_url": ""
}

export const post = [
  {
      "id": 1,
      "date": "2023-02-24T12:34:17",
      "date_gmt": "2023-02-24T12:34:17",
      "guid": {
          "rendered": "https:\/\/wp.smokenetwork.nl\/?p=1",
          "raw": "https:\/\/wp.smokenetwork.nl\/?p=1"
      },
      "modified": "2023-02-24T12:34:17",
      "modified_gmt": "2023-02-24T12:34:17",
      "password": "",
      "slug": "hello-world",
      "status": "publish",
      "type": "post",
      "link": "https:\/\/wp.smokenetwork.nl\/2023\/02\/24\/hello-world\/",
      "title": {
          "raw": "Hello world!",
          "rendered": "Hello world!"
      },
      "content": {
          "raw": "<!-- wp:paragraph -->\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!<\/p>\n<!-- \/wp:paragraph -->",
          "rendered": "\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!<\/p>\n",
          "protected": false,
          "block_version": 1
      },
      "excerpt": {
          "raw": "",
          "rendered": "<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!<\/p>\n",
          "protected": false
      },
      "author": 1,
      "featured_media": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "template": "",
      "format": "standard",
      "meta": {
          "footnotes": ""
      },
      "categories": [
          1
      ],
      "tags": [],
      "permalink_template": "https:\/\/wp.smokenetwork.nl\/2023\/02\/24\/%postname%\/",
      "generated_slug": "hello-world",
      "_links": {
          "self": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "collection": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts"
              }
          ],
          "about": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types\/post"
              }
          ],
          "author": [
              {
                  "embeddable": true,
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/users\/1"
              }
          ],
          "replies": [
              {
                  "embeddable": true,
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/comments?post=1"
              }
          ],
          "version-history": [
              {
                  "count": 0,
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1\/revisions"
              }
          ],
          "wp:attachment": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/media?parent=1"
              }
          ],
          "wp:term": [
              {
                  "taxonomy": "category",
                  "embeddable": true,
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/categories?post=1"
              },
              {
                  "taxonomy": "post_tag",
                  "embeddable": true,
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/tags?post=1"
              }
          ],
          "wp:action-publish": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "wp:action-unfiltered-html": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "wp:action-sticky": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "wp:action-assign-author": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "wp:action-create-categories": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "wp:action-assign-categories": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "wp:action-create-tags": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "wp:action-assign-tags": [
              {
                  "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts\/1"
              }
          ],
          "curies": [
              {
                  "name": "wp",
                  "href": "https:\/\/api.w.org\/{rel}",
                  "templated": true
              }
          ]
      }
  }
]