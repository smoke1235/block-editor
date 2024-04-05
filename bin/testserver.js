const express = require("express");

const app = express ();
app.use(express.json());


const PORT = process.env.PORT || 3000;


app.use('/', express.static('playground'))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200

        if (req.path === "/wp-json/wp/v2/settings") {
            const status = {
                "namespace": "wp\/v2",
                "methods": [
                    "GET",
                    "POST",
                    "PUT",
                    "PATCH"
                ],
                "endpoints": [
                    {
                        "methods": [
                            "GET"
                        ],
                        "args": []
                    },
                    {
                        "methods": [
                            "POST",
                            "PUT",
                            "PATCH"
                        ],
                        "args": {
                            "title": {
                                "title": "Title",
                                "description": "Site title.",
                                "type": "string",
                                "required": false
                            },
                            "description": {
                                "title": "Tagline",
                                "description": "Site tagline.",
                                "type": "string",
                                "required": false
                            },
                            "url": {
                                "description": "Site URL.",
                                "type": "string",
                                "format": "uri",
                                "required": false
                            },
                            "email": {
                                "description": "This address is used for admin purposes, like new user notification.",
                                "type": "string",
                                "format": "email",
                                "required": false
                            },
                            "timezone": {
                                "description": "A city in the same timezone as you.",
                                "type": "string",
                                "required": false
                            },
                            "date_format": {
                                "description": "A date format for all date strings.",
                                "type": "string",
                                "required": false
                            },
                            "time_format": {
                                "description": "A time format for all time strings.",
                                "type": "string",
                                "required": false
                            },
                            "start_of_week": {
                                "description": "A day number of the week that the week should start on.",
                                "type": "integer",
                                "required": false
                            },
                            "language": {
                                "description": "WordPress locale code.",
                                "type": "string",
                                "required": false
                            },
                            "use_smilies": {
                                "description": "Convert emoticons like :-) and :-P to graphics on display.",
                                "type": "boolean",
                                "required": false
                            },
                            "default_category": {
                                "description": "Default post category.",
                                "type": "integer",
                                "required": false
                            },
                            "default_post_format": {
                                "description": "Default post format.",
                                "type": "string",
                                "required": false
                            },
                            "posts_per_page": {
                                "title": "Maximum posts per page",
                                "description": "Blog pages show at most.",
                                "type": "integer",
                                "required": false
                            },
                            "show_on_front": {
                                "title": "Show on front",
                                "description": "What to show on the front page",
                                "type": "string",
                                "required": false
                            },
                            "page_on_front": {
                                "title": "Page on front",
                                "description": "The ID of the page that should be displayed on the front page",
                                "type": "integer",
                                "required": false
                            },
                            "page_for_posts": {
                                "description": "The ID of the page that should display the latest posts",
                                "type": "integer",
                                "required": false
                            },
                            "default_ping_status": {
                                "description": "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
                                "type": "string",
                                "enum": [
                                    "open",
                                    "closed"
                                ],
                                "required": false
                            },
                            "default_comment_status": {
                                "title": "Allow comments on new posts",
                                "description": "Allow people to submit comments on new posts.",
                                "type": "string",
                                "enum": [
                                    "open",
                                    "closed"
                                ],
                                "required": false
                            },
                            "site_logo": {
                                "title": "Logo",
                                "description": "Site logo.",
                                "type": "integer",
                                "required": false
                            },
                            "site_icon": {
                                "title": "Icon",
                                "description": "Site icon.",
                                "type": "integer",
                                "required": false
                            }
                        }
                    }
                ],
                "schema": {
                    "$schema": "http:\/\/json-schema.org\/draft-04\/schema#",
                    "title": "settings",
                    "type": "object",
                    "properties": {
                        "title": {
                            "type": "string",
                            "description": "Site title.",
                            "default": null,
                            "title": "Title"
                        },
                        "description": {
                            "type": "string",
                            "description": "Site tagline.",
                            "default": null,
                            "title": "Tagline"
                        },
                        "url": {
                            "type": "string",
                            "description": "Site URL.",
                            "default": null,
                            "format": "uri"
                        },
                        "email": {
                            "type": "string",
                            "description": "This address is used for admin purposes, like new user notification.",
                            "default": null,
                            "format": "email"
                        },
                        "timezone": {
                            "type": "string",
                            "description": "A city in the same timezone as you.",
                            "default": null
                        },
                        "date_format": {
                            "type": "string",
                            "description": "A date format for all date strings.",
                            "default": null
                        },
                        "time_format": {
                            "type": "string",
                            "description": "A time format for all time strings.",
                            "default": null
                        },
                        "start_of_week": {
                            "type": "integer",
                            "description": "A day number of the week that the week should start on.",
                            "default": null
                        },
                        "language": {
                            "type": "string",
                            "description": "WordPress locale code.",
                            "default": "en_US"
                        },
                        "use_smilies": {
                            "type": "boolean",
                            "description": "Convert emoticons like :-) and :-P to graphics on display.",
                            "default": true
                        },
                        "default_category": {
                            "type": "integer",
                            "description": "Default post category.",
                            "default": null
                        },
                        "default_post_format": {
                            "type": "string",
                            "description": "Default post format.",
                            "default": null
                        },
                        "posts_per_page": {
                            "type": "integer",
                            "description": "Blog pages show at most.",
                            "default": 10,
                            "title": "Maximum posts per page"
                        },
                        "show_on_front": {
                            "type": "string",
                            "description": "What to show on the front page",
                            "default": null,
                            "title": "Show on front"
                        },
                        "page_on_front": {
                            "type": "integer",
                            "description": "The ID of the page that should be displayed on the front page",
                            "default": null,
                            "title": "Page on front"
                        },
                        "page_for_posts": {
                            "type": "integer",
                            "description": "The ID of the page that should display the latest posts",
                            "default": null
                        },
                        "default_ping_status": {
                            "type": "string",
                            "description": "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
                            "default": null,
                            "enum": [
                                "open",
                                "closed"
                            ]
                        },
                        "default_comment_status": {
                            "type": "string",
                            "description": "Allow people to submit comments on new posts.",
                            "default": null,
                            "enum": [
                                "open",
                                "closed"
                            ],
                            "title": "Allow comments on new posts"
                        },
                        "site_logo": {
                            "type": "integer",
                            "description": "Site logo.",
                            "default": null,
                            "title": "Logo"
                        },
                        "site_icon": {
                            "type": "integer",
                            "description": "Site icon.",
                            "default": null,
                            "title": "Icon"
                        }
                    }
                },
                "_links": {
                    "self": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/settings"
                        }
                    ]
                }
            };
            
            res.send(status);
        }
        else if (req.path === "/wp-json/wp/v2/templates") {
            const status = {
                "namespace": "wp\/v2",
                "methods": [
                    "GET",
                    "POST"
                ],
                "endpoints": [
                    {
                        "methods": [
                            "GET"
                        ],
                        "args": {
                            "context": {
                                "description": "Scope under which the request is made; determines fields present in response.",
                                "type": "string",
                                "enum": [
                                    "view",
                                    "embed",
                                    "edit"
                                ],
                                "default": "view",
                                "required": false
                            },
                            "wp_id": {
                                "description": "Limit to the specified post id.",
                                "type": "integer",
                                "required": false
                            },
                            "area": {
                                "description": "Limit to the specified template part area.",
                                "type": "string",
                                "required": false
                            },
                            "post_type": {
                                "description": "Post type to get the templates for.",
                                "type": "string",
                                "required": false
                            }
                        }
                    },
                    {
                        "methods": [
                            "POST"
                        ],
                        "args": {
                            "slug": {
                                "description": "Unique slug identifying the template.",
                                "type": "string",
                                "minLength": 1,
                                "pattern": "[a-zA-Z0-9_\\%-]+",
                                "required": true
                            },
                            "theme": {
                                "description": "Theme identifier for the template.",
                                "type": "string",
                                "required": false
                            },
                            "type": {
                                "description": "Type of template.",
                                "type": "string",
                                "required": false
                            },
                            "content": {
                                "default": "",
                                "description": "Content of template.",
                                "type": [
                                    "object",
                                    "string"
                                ],
                                "properties": {
                                    "raw": {
                                        "description": "Content for the template, as it exists in the database.",
                                        "type": "string",
                                        "context": [
                                            "view",
                                            "edit"
                                        ]
                                    },
                                    "block_version": {
                                        "description": "Version of the content block format used by the template.",
                                        "type": "integer",
                                        "context": [
                                            "edit"
                                        ],
                                        "readonly": true
                                    }
                                },
                                "required": false
                            },
                            "title": {
                                "default": "",
                                "description": "Title of template.",
                                "type": [
                                    "object",
                                    "string"
                                ],
                                "properties": {
                                    "raw": {
                                        "description": "Title for the template, as it exists in the database.",
                                        "type": "string",
                                        "context": [
                                            "view",
                                            "edit",
                                            "embed"
                                        ]
                                    },
                                    "rendered": {
                                        "description": "HTML title for the template, transformed for display.",
                                        "type": "string",
                                        "context": [
                                            "view",
                                            "edit",
                                            "embed"
                                        ],
                                        "readonly": true
                                    }
                                },
                                "required": false
                            },
                            "description": {
                                "default": "",
                                "description": "Description of template.",
                                "type": "string",
                                "required": false
                            },
                            "status": {
                                "default": "publish",
                                "description": "Status of template.",
                                "type": "string",
                                "enum": [
                                    "publish",
                                    "future",
                                    "draft",
                                    "pending",
                                    "private"
                                ],
                                "required": false
                            },
                            "author": {
                                "description": "The ID for the author of the template.",
                                "type": "integer",
                                "required": false
                            }
                        }
                    }
                ],
                "schema": {
                    "$schema": "http:\/\/json-schema.org\/draft-04\/schema#",
                    "title": "wp_template",
                    "type": "object",
                    "properties": {
                        "id": {
                            "description": "ID of template.",
                            "type": "string",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "slug": {
                            "description": "Unique slug identifying the template.",
                            "type": "string",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "required": true,
                            "minLength": 1,
                            "pattern": "[a-zA-Z0-9_\\%-]+"
                        },
                        "theme": {
                            "description": "Theme identifier for the template.",
                            "type": "string",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ]
                        },
                        "type": {
                            "description": "Type of template.",
                            "type": "string",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ]
                        },
                        "source": {
                            "description": "Source of template",
                            "type": "string",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "origin": {
                            "description": "Source of a customized template",
                            "type": "string",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "content": {
                            "description": "Content of template.",
                            "type": [
                                "object",
                                "string"
                            ],
                            "default": "",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "properties": {
                                "raw": {
                                    "description": "Content for the template, as it exists in the database.",
                                    "type": "string",
                                    "context": [
                                        "view",
                                        "edit"
                                    ]
                                },
                                "block_version": {
                                    "description": "Version of the content block format used by the template.",
                                    "type": "integer",
                                    "context": [
                                        "edit"
                                    ],
                                    "readonly": true
                                }
                            }
                        },
                        "title": {
                            "description": "Title of template.",
                            "type": [
                                "object",
                                "string"
                            ],
                            "default": "",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "properties": {
                                "raw": {
                                    "description": "Title for the template, as it exists in the database.",
                                    "type": "string",
                                    "context": [
                                        "view",
                                        "edit",
                                        "embed"
                                    ]
                                },
                                "rendered": {
                                    "description": "HTML title for the template, transformed for display.",
                                    "type": "string",
                                    "context": [
                                        "view",
                                        "edit",
                                        "embed"
                                    ],
                                    "readonly": true
                                }
                            }
                        },
                        "description": {
                            "description": "Description of template.",
                            "type": "string",
                            "default": "",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ]
                        },
                        "status": {
                            "description": "Status of template.",
                            "type": "string",
                            "enum": [
                                "publish",
                                "future",
                                "draft",
                                "pending",
                                "private"
                            ],
                            "default": "publish",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ]
                        },
                        "wp_id": {
                            "description": "Post ID.",
                            "type": "integer",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "has_theme_file": {
                            "description": "Theme file exists.",
                            "type": "bool",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "author": {
                            "description": "The ID for the author of the template.",
                            "type": "integer",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ]
                        },
                        "modified": {
                            "description": "The date the template was last modified, in the site's timezone.",
                            "type": "string",
                            "format": "date-time",
                            "context": [
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "author_text": {
                            "type": "string",
                            "description": "Human readable text for the author.",
                            "readonly": true,
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ]
                        },
                        "original_source": {
                            "description": "Where the template originally comes from e.g. 'theme'",
                            "type": "string",
                            "readonly": true,
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ],
                            "enum": [
                                "theme",
                                "plugin",
                                "site",
                                "user"
                            ]
                        },
                        "is_custom": {
                            "description": "Whether a template is a custom template.",
                            "type": "bool",
                            "context": [
                                "embed",
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        }
                    }
                },
                "_links": {
                    "self": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates"
                        }
                    ]
                }
            };
            
            res.json(status);
        }
        else if (req.path === "/wp-json/wp/v2/pages?_locale=user") {
            const status = {
                "namespace": "wp\/v2",
                "methods": [
                    "GET",
                    "POST"
                ],
                "endpoints": [
                    {
                        "methods": [
                            "GET"
                        ],
                        "allow_batch": {
                            "v1": true
                        },
                        "args": {
                            "context": {
                                "description": "Scope under which the request is made; determines fields present in response.",
                                "type": "string",
                                "enum": [
                                    "view",
                                    "embed",
                                    "edit"
                                ],
                                "default": "view",
                                "required": false
                            },
                            "page": {
                                "description": "Current page of the collection.",
                                "type": "integer",
                                "default": 1,
                                "minimum": 1,
                                "required": false
                            },
                            "per_page": {
                                "description": "Maximum number of items to be returned in result set.",
                                "type": "integer",
                                "default": 10,
                                "minimum": 1,
                                "maximum": 100,
                                "required": false
                            },
                            "search": {
                                "description": "Limit results to those matching a string.",
                                "type": "string",
                                "required": false
                            },
                            "after": {
                                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                                "type": "string",
                                "format": "date-time",
                                "required": false
                            },
                            "modified_after": {
                                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                                "type": "string",
                                "format": "date-time",
                                "required": false
                            },
                            "author": {
                                "description": "Limit result set to posts assigned to specific authors.",
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                },
                                "default": [],
                                "required": false
                            },
                            "author_exclude": {
                                "description": "Ensure result set excludes posts assigned to specific authors.",
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                },
                                "default": [],
                                "required": false
                            },
                            "before": {
                                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                                "type": "string",
                                "format": "date-time",
                                "required": false
                            },
                            "modified_before": {
                                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                                "type": "string",
                                "format": "date-time",
                                "required": false
                            },
                            "exclude": {
                                "description": "Ensure result set excludes specific IDs.",
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                },
                                "default": [],
                                "required": false
                            },
                            "include": {
                                "description": "Limit result set to specific IDs.",
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                },
                                "default": [],
                                "required": false
                            },
                            "menu_order": {
                                "description": "Limit result set to posts with a specific menu_order value.",
                                "type": "integer",
                                "required": false
                            },
                            "offset": {
                                "description": "Offset the result set by a specific number of items.",
                                "type": "integer",
                                "required": false
                            },
                            "order": {
                                "description": "Order sort attribute ascending or descending.",
                                "type": "string",
                                "default": "desc",
                                "enum": [
                                    "asc",
                                    "desc"
                                ],
                                "required": false
                            },
                            "orderby": {
                                "description": "Sort collection by post attribute.",
                                "type": "string",
                                "default": "date",
                                "enum": [
                                    "author",
                                    "date",
                                    "id",
                                    "include",
                                    "modified",
                                    "parent",
                                    "relevance",
                                    "slug",
                                    "include_slugs",
                                    "title",
                                    "menu_order"
                                ],
                                "required": false
                            },
                            "parent": {
                                "description": "Limit result set to items with particular parent IDs.",
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                },
                                "default": [],
                                "required": false
                            },
                            "parent_exclude": {
                                "description": "Limit result set to all items except those of a particular parent ID.",
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                },
                                "default": [],
                                "required": false
                            },
                            "search_columns": {
                                "default": [],
                                "description": "Array of column names to be searched.",
                                "type": "array",
                                "items": {
                                    "enum": [
                                        "post_title",
                                        "post_content",
                                        "post_excerpt"
                                    ],
                                    "type": "string"
                                },
                                "required": false
                            },
                            "slug": {
                                "description": "Limit result set to posts with one or more specific slugs.",
                                "type": "array",
                                "items": {
                                    "type": "string"
                                },
                                "required": false
                            },
                            "status": {
                                "default": "publish",
                                "description": "Limit result set to posts assigned one or more statuses.",
                                "type": "array",
                                "items": {
                                    "enum": [
                                        "publish",
                                        "future",
                                        "draft",
                                        "pending",
                                        "private",
                                        "trash",
                                        "auto-draft",
                                        "inherit",
                                        "request-pending",
                                        "request-confirmed",
                                        "request-failed",
                                        "request-completed",
                                        "any"
                                    ],
                                    "type": "string"
                                },
                                "required": false
                            }
                        }
                    },
                    {
                        "methods": [
                            "POST"
                        ],
                        "allow_batch": {
                            "v1": true
                        },
                        "args": {
                            "date": {
                                "description": "The date the post was published, in the site's timezone.",
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "format": "date-time",
                                "required": false
                            },
                            "date_gmt": {
                                "description": "The date the post was published, as GMT.",
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "format": "date-time",
                                "required": false
                            },
                            "slug": {
                                "description": "An alphanumeric identifier for the post unique to its type.",
                                "type": "string",
                                "required": false
                            },
                            "status": {
                                "description": "A named status for the post.",
                                "type": "string",
                                "enum": [
                                    "publish",
                                    "future",
                                    "draft",
                                    "pending",
                                    "private"
                                ],
                                "required": false
                            },
                            "password": {
                                "description": "A password to protect access to the content and excerpt.",
                                "type": "string",
                                "required": false
                            },
                            "parent": {
                                "description": "The ID for the parent of the post.",
                                "type": "integer",
                                "required": false
                            },
                            "title": {
                                "description": "The title for the post.",
                                "type": "object",
                                "properties": {
                                    "raw": {
                                        "description": "Title for the post, as it exists in the database.",
                                        "type": "string",
                                        "context": [
                                            "edit"
                                        ]
                                    },
                                    "rendered": {
                                        "description": "HTML title for the post, transformed for display.",
                                        "type": "string",
                                        "context": [
                                            "view",
                                            "edit",
                                            "embed"
                                        ],
                                        "readonly": true
                                    }
                                },
                                "required": false
                            },
                            "content": {
                                "description": "The content for the post.",
                                "type": "object",
                                "properties": {
                                    "raw": {
                                        "description": "Content for the post, as it exists in the database.",
                                        "type": "string",
                                        "context": [
                                            "edit"
                                        ]
                                    },
                                    "rendered": {
                                        "description": "HTML content for the post, transformed for display.",
                                        "type": "string",
                                        "context": [
                                            "view",
                                            "edit"
                                        ],
                                        "readonly": true
                                    },
                                    "block_version": {
                                        "description": "Version of the content block format used by the post.",
                                        "type": "integer",
                                        "context": [
                                            "edit"
                                        ],
                                        "readonly": true
                                    },
                                    "protected": {
                                        "description": "Whether the content is protected with a password.",
                                        "type": "boolean",
                                        "context": [
                                            "view",
                                            "edit",
                                            "embed"
                                        ],
                                        "readonly": true
                                    }
                                },
                                "required": false
                            },
                            "author": {
                                "description": "The ID for the author of the post.",
                                "type": "integer",
                                "required": false
                            },
                            "excerpt": {
                                "description": "The excerpt for the post.",
                                "type": "object",
                                "properties": {
                                    "raw": {
                                        "description": "Excerpt for the post, as it exists in the database.",
                                        "type": "string",
                                        "context": [
                                            "edit"
                                        ]
                                    },
                                    "rendered": {
                                        "description": "HTML excerpt for the post, transformed for display.",
                                        "type": "string",
                                        "context": [
                                            "view",
                                            "edit",
                                            "embed"
                                        ],
                                        "readonly": true
                                    },
                                    "protected": {
                                        "description": "Whether the excerpt is protected with a password.",
                                        "type": "boolean",
                                        "context": [
                                            "view",
                                            "edit",
                                            "embed"
                                        ],
                                        "readonly": true
                                    }
                                },
                                "required": false
                            },
                            "featured_media": {
                                "description": "The ID of the featured media for the post.",
                                "type": "integer",
                                "required": false
                            },
                            "comment_status": {
                                "description": "Whether or not comments are open on the post.",
                                "type": "string",
                                "enum": [
                                    "open",
                                    "closed"
                                ],
                                "required": false
                            },
                            "ping_status": {
                                "description": "Whether or not the post can be pinged.",
                                "type": "string",
                                "enum": [
                                    "open",
                                    "closed"
                                ],
                                "required": false
                            },
                            "menu_order": {
                                "description": "The order of the post in relation to other posts.",
                                "type": "integer",
                                "required": false
                            },
                            "meta": {
                                "description": "Meta fields.",
                                "type": "object",
                                "properties": {
                                    "footnotes": {
                                        "type": "string",
                                        "description": "",
                                        "default": ""
                                    }
                                },
                                "required": false
                            },
                            "template": {
                                "description": "The theme file to use to display the post.",
                                "type": "string",
                                "required": false
                            }
                        }
                    }
                ],
                "schema": {
                    "$schema": "http:\/\/json-schema.org\/draft-04\/schema#",
                    "title": "page",
                    "type": "object",
                    "properties": {
                        "date": {
                            "description": "The date the post was published, in the site's timezone.",
                            "type": [
                                "string",
                                "null"
                            ],
                            "format": "date-time",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ]
                        },
                        "date_gmt": {
                            "description": "The date the post was published, as GMT.",
                            "type": [
                                "string",
                                "null"
                            ],
                            "format": "date-time",
                            "context": [
                                "view",
                                "edit"
                            ]
                        },
                        "guid": {
                            "description": "The globally unique identifier for the post.",
                            "type": "object",
                            "context": [
                                "view",
                                "edit"
                            ],
                            "readonly": true,
                            "properties": {
                                "raw": {
                                    "description": "GUID for the post, as it exists in the database.",
                                    "type": "string",
                                    "context": [
                                        "edit"
                                    ],
                                    "readonly": true
                                },
                                "rendered": {
                                    "description": "GUID for the post, transformed for display.",
                                    "type": "string",
                                    "context": [
                                        "view",
                                        "edit"
                                    ],
                                    "readonly": true
                                }
                            }
                        },
                        "id": {
                            "description": "Unique identifier for the post.",
                            "type": "integer",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ],
                            "readonly": true
                        },
                        "link": {
                            "description": "URL to the post.",
                            "type": "string",
                            "format": "uri",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ],
                            "readonly": true
                        },
                        "modified": {
                            "description": "The date the post was last modified, in the site's timezone.",
                            "type": "string",
                            "format": "date-time",
                            "context": [
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "modified_gmt": {
                            "description": "The date the post was last modified, as GMT.",
                            "type": "string",
                            "format": "date-time",
                            "context": [
                                "view",
                                "edit"
                            ],
                            "readonly": true
                        },
                        "slug": {
                            "description": "An alphanumeric identifier for the post unique to its type.",
                            "type": "string",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ]
                        },
                        "status": {
                            "description": "A named status for the post.",
                            "type": "string",
                            "enum": [
                                "publish",
                                "future",
                                "draft",
                                "pending",
                                "private"
                            ],
                            "context": [
                                "view",
                                "edit"
                            ]
                        },
                        "type": {
                            "description": "Type of post.",
                            "type": "string",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ],
                            "readonly": true
                        },
                        "password": {
                            "description": "A password to protect access to the content and excerpt.",
                            "type": "string",
                            "context": [
                                "edit"
                            ]
                        },
                        "permalink_template": {
                            "description": "Permalink template for the post.",
                            "type": "string",
                            "context": [
                                "edit"
                            ],
                            "readonly": true
                        },
                        "generated_slug": {
                            "description": "Slug automatically generated from the post title.",
                            "type": "string",
                            "context": [
                                "edit"
                            ],
                            "readonly": true
                        },
                        "parent": {
                            "description": "The ID for the parent of the post.",
                            "type": "integer",
                            "context": [
                                "view",
                                "edit"
                            ]
                        },
                        "title": {
                            "description": "The title for the post.",
                            "type": "object",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ],
                            "properties": {
                                "raw": {
                                    "description": "Title for the post, as it exists in the database.",
                                    "type": "string",
                                    "context": [
                                        "edit"
                                    ]
                                },
                                "rendered": {
                                    "description": "HTML title for the post, transformed for display.",
                                    "type": "string",
                                    "context": [
                                        "view",
                                        "edit",
                                        "embed"
                                    ],
                                    "readonly": true
                                }
                            }
                        },
                        "content": {
                            "description": "The content for the post.",
                            "type": "object",
                            "context": [
                                "view",
                                "edit"
                            ],
                            "properties": {
                                "raw": {
                                    "description": "Content for the post, as it exists in the database.",
                                    "type": "string",
                                    "context": [
                                        "edit"
                                    ]
                                },
                                "rendered": {
                                    "description": "HTML content for the post, transformed for display.",
                                    "type": "string",
                                    "context": [
                                        "view",
                                        "edit"
                                    ],
                                    "readonly": true
                                },
                                "block_version": {
                                    "description": "Version of the content block format used by the post.",
                                    "type": "integer",
                                    "context": [
                                        "edit"
                                    ],
                                    "readonly": true
                                },
                                "protected": {
                                    "description": "Whether the content is protected with a password.",
                                    "type": "boolean",
                                    "context": [
                                        "view",
                                        "edit",
                                        "embed"
                                    ],
                                    "readonly": true
                                }
                            }
                        },
                        "author": {
                            "description": "The ID for the author of the post.",
                            "type": "integer",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ]
                        },
                        "excerpt": {
                            "description": "The excerpt for the post.",
                            "type": "object",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ],
                            "properties": {
                                "raw": {
                                    "description": "Excerpt for the post, as it exists in the database.",
                                    "type": "string",
                                    "context": [
                                        "edit"
                                    ]
                                },
                                "rendered": {
                                    "description": "HTML excerpt for the post, transformed for display.",
                                    "type": "string",
                                    "context": [
                                        "view",
                                        "edit",
                                        "embed"
                                    ],
                                    "readonly": true
                                },
                                "protected": {
                                    "description": "Whether the excerpt is protected with a password.",
                                    "type": "boolean",
                                    "context": [
                                        "view",
                                        "edit",
                                        "embed"
                                    ],
                                    "readonly": true
                                }
                            }
                        },
                        "featured_media": {
                            "description": "The ID of the featured media for the post.",
                            "type": "integer",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ]
                        },
                        "comment_status": {
                            "description": "Whether or not comments are open on the post.",
                            "type": "string",
                            "enum": [
                                "open",
                                "closed"
                            ],
                            "context": [
                                "view",
                                "edit"
                            ]
                        },
                        "ping_status": {
                            "description": "Whether or not the post can be pinged.",
                            "type": "string",
                            "enum": [
                                "open",
                                "closed"
                            ],
                            "context": [
                                "view",
                                "edit"
                            ]
                        },
                        "menu_order": {
                            "description": "The order of the post in relation to other posts.",
                            "type": "integer",
                            "context": [
                                "view",
                                "edit"
                            ]
                        },
                        "meta": {
                            "description": "Meta fields.",
                            "type": "object",
                            "context": [
                                "view",
                                "edit"
                            ],
                            "properties": {
                                "footnotes": {
                                    "type": "string",
                                    "description": "",
                                    "default": ""
                                }
                            }
                        },
                        "template": {
                            "description": "The theme file to use to display the post.",
                            "type": "string",
                            "context": [
                                "view",
                                "edit"
                            ]
                        }
                    },
                    "links": [
                        {
                            "rel": "https:\/\/api.w.org\/action-publish",
                            "title": "The current user can publish this post.",
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/{id}",
                            "targetSchema": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "enum": [
                                            "publish",
                                            "future"
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "rel": "https:\/\/api.w.org\/action-unfiltered-html",
                            "title": "The current user can post unfiltered HTML markup and JavaScript.",
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/{id}",
                            "targetSchema": {
                                "type": "object",
                                "properties": {
                                    "content": {
                                        "raw": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "rel": "https:\/\/api.w.org\/action-assign-author",
                            "title": "The current user can change the author on this post.",
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/{id}",
                            "targetSchema": {
                                "type": "object",
                                "properties": {
                                    "author": {
                                        "type": "integer"
                                    }
                                }
                            }
                        }
                    ]
                },
                "_links": {
                    "self": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages"
                        }
                    ]
                }
            };

            res.json(status);
        }

        else {
            console.log(req.path);
            console.log("option me");
            res.send(200);
        }
        

      

    //next();
     
    }
    else {
    //move on
      next();
    }
});


app.get("/wp-json/wp/v2/global-styles/64", (request, response) => {
    const status = {
        "id": 64,
        "title": {
            "raw": "Custom Styles",
            "rendered": "Custom Styles"
        },
        "settings": {},
        "styles": {},
        "_links": {
            "self": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/global-styles\/64"
                }
            ],
            "version-history": [
                {
                    "count": 0,
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/global-styles\/64\/revisions"
                }
            ],
            "wp:action-publish": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/global-styles\/64"
                }
            ],
            "wp:action-edit-css": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/global-styles\/64"
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
    };
    
    response.send(status);
 });


 app.get("/wp-json/wp/v2/settings", (request, response) => {
    
    const status = {
        "title": "Test",
        "description": "",
        "url": "https:\/\/wp.smokenetwork.nl",
        "email": "info@smokenetwork.nl",
        "timezone": "",
        "date_format": "F j, Y",
        "time_format": "g:i a",
        "start_of_week": 1,
        "language": "en_US",
        "use_smilies": true,
        "default_category": 1,
        "default_post_format": "0",
        "posts_per_page": 10,
        "show_on_front": "page",
        "page_on_front": 155,
        "page_for_posts": 0,
        "default_ping_status": "open",
        "default_comment_status": "open",
        "site_logo": null,
        "site_icon": 0
    };
    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/templates", (request, response) => {
    const status = {
        "namespace": "wp\/v2",
        "methods": [
            "GET",
            "POST"
        ],
        "endpoints": [
            {
                "methods": [
                    "GET"
                ],
                "args": {
                    "context": {
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string",
                        "enum": [
                            "view",
                            "embed",
                            "edit"
                        ],
                        "default": "view",
                        "required": false
                    },
                    "wp_id": {
                        "description": "Limit to the specified post id.",
                        "type": "integer",
                        "required": false
                    },
                    "area": {
                        "description": "Limit to the specified template part area.",
                        "type": "string",
                        "required": false
                    },
                    "post_type": {
                        "description": "Post type to get the templates for.",
                        "type": "string",
                        "required": false
                    }
                }
            },
            {
                "methods": [
                    "POST"
                ],
                "args": {
                    "slug": {
                        "description": "Unique slug identifying the template.",
                        "type": "string",
                        "minLength": 1,
                        "pattern": "[a-zA-Z0-9_\\%-]+",
                        "required": true
                    },
                    "theme": {
                        "description": "Theme identifier for the template.",
                        "type": "string",
                        "required": false
                    },
                    "type": {
                        "description": "Type of template.",
                        "type": "string",
                        "required": false
                    },
                    "content": {
                        "default": "",
                        "description": "Content of template.",
                        "type": [
                            "object",
                            "string"
                        ],
                        "properties": {
                            "raw": {
                                "description": "Content for the template, as it exists in the database.",
                                "type": "string",
                                "context": [
                                    "view",
                                    "edit"
                                ]
                            },
                            "block_version": {
                                "description": "Version of the content block format used by the template.",
                                "type": "integer",
                                "context": [
                                    "edit"
                                ],
                                "readonly": true
                            }
                        },
                        "required": false
                    },
                    "title": {
                        "default": "",
                        "description": "Title of template.",
                        "type": [
                            "object",
                            "string"
                        ],
                        "properties": {
                            "raw": {
                                "description": "Title for the template, as it exists in the database.",
                                "type": "string",
                                "context": [
                                    "view",
                                    "edit",
                                    "embed"
                                ]
                            },
                            "rendered": {
                                "description": "HTML title for the template, transformed for display.",
                                "type": "string",
                                "context": [
                                    "view",
                                    "edit",
                                    "embed"
                                ],
                                "readonly": true
                            }
                        },
                        "required": false
                    },
                    "description": {
                        "default": "",
                        "description": "Description of template.",
                        "type": "string",
                        "required": false
                    },
                    "status": {
                        "default": "publish",
                        "description": "Status of template.",
                        "type": "string",
                        "enum": [
                            "publish",
                            "future",
                            "draft",
                            "pending",
                            "private"
                        ],
                        "required": false
                    },
                    "author": {
                        "description": "The ID for the author of the template.",
                        "type": "integer",
                        "required": false
                    }
                }
            }
        ],
        "schema": {
            "$schema": "http:\/\/json-schema.org\/draft-04\/schema#",
            "title": "wp_template",
            "type": "object",
            "properties": {
                "id": {
                    "description": "ID of template.",
                    "type": "string",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "readonly": true
                },
                "slug": {
                    "description": "Unique slug identifying the template.",
                    "type": "string",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "required": true,
                    "minLength": 1,
                    "pattern": "[a-zA-Z0-9_\\%-]+"
                },
                "theme": {
                    "description": "Theme identifier for the template.",
                    "type": "string",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ]
                },
                "type": {
                    "description": "Type of template.",
                    "type": "string",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ]
                },
                "source": {
                    "description": "Source of template",
                    "type": "string",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "readonly": true
                },
                "origin": {
                    "description": "Source of a customized template",
                    "type": "string",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "readonly": true
                },
                "content": {
                    "description": "Content of template.",
                    "type": [
                        "object",
                        "string"
                    ],
                    "default": "",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "properties": {
                        "raw": {
                            "description": "Content for the template, as it exists in the database.",
                            "type": "string",
                            "context": [
                                "view",
                                "edit"
                            ]
                        },
                        "block_version": {
                            "description": "Version of the content block format used by the template.",
                            "type": "integer",
                            "context": [
                                "edit"
                            ],
                            "readonly": true
                        }
                    }
                },
                "title": {
                    "description": "Title of template.",
                    "type": [
                        "object",
                        "string"
                    ],
                    "default": "",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "properties": {
                        "raw": {
                            "description": "Title for the template, as it exists in the database.",
                            "type": "string",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ]
                        },
                        "rendered": {
                            "description": "HTML title for the template, transformed for display.",
                            "type": "string",
                            "context": [
                                "view",
                                "edit",
                                "embed"
                            ],
                            "readonly": true
                        }
                    }
                },
                "description": {
                    "description": "Description of template.",
                    "type": "string",
                    "default": "",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ]
                },
                "status": {
                    "description": "Status of template.",
                    "type": "string",
                    "enum": [
                        "publish",
                        "future",
                        "draft",
                        "pending",
                        "private"
                    ],
                    "default": "publish",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ]
                },
                "wp_id": {
                    "description": "Post ID.",
                    "type": "integer",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "readonly": true
                },
                "has_theme_file": {
                    "description": "Theme file exists.",
                    "type": "bool",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "readonly": true
                },
                "author": {
                    "description": "The ID for the author of the template.",
                    "type": "integer",
                    "context": [
                        "view",
                        "edit",
                        "embed"
                    ]
                },
                "modified": {
                    "description": "The date the template was last modified, in the site's timezone.",
                    "type": "string",
                    "format": "date-time",
                    "context": [
                        "view",
                        "edit"
                    ],
                    "readonly": true
                },
                "author_text": {
                    "type": "string",
                    "description": "Human readable text for the author.",
                    "readonly": true,
                    "context": [
                        "view",
                        "edit",
                        "embed"
                    ]
                },
                "original_source": {
                    "description": "Where the template originally comes from e.g. 'theme'",
                    "type": "string",
                    "readonly": true,
                    "context": [
                        "view",
                        "edit",
                        "embed"
                    ],
                    "enum": [
                        "theme",
                        "plugin",
                        "site",
                        "user"
                    ]
                },
                "is_custom": {
                    "description": "Whether a template is a custom template.",
                    "type": "bool",
                    "context": [
                        "embed",
                        "view",
                        "edit"
                    ],
                    "readonly": true
                }
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates"
                }
            ]
        }
    };
    
    response.json(status);
 });


 
 app.get("/wp-json/wp/v2/global-styles/themes/twentytwentyfour/variations", (request, response) => {
    const status = [
        {
            "version": 2,
            "title": "Ember",
            "settings": {
                "color": {
                    "duotone": {
                        "theme": [
                            {
                                "colors": [
                                    "#D73301",
                                    "#F9F8F5"
                                ],
                                "slug": "duotone-2",
                                "name": "Orange and white"
                            }
                        ]
                    },
                    "gradients": {
                        "theme": [
                            {
                                "slug": "gradient-1",
                                "gradient": "linear-gradient(to bottom, #f6decd 0%, #dbab88 100%)",
                                "name": "Vertical linen to beige"
                            },
                            {
                                "slug": "gradient-2",
                                "gradient": "linear-gradient(to bottom, #A4A4A4 0%, #dbab88 100%)",
                                "name": "Vertical taupe to beige"
                            },
                            {
                                "slug": "gradient-3",
                                "gradient": "linear-gradient(to bottom, #353535 0%, #dbab88 100%)",
                                "name": "Vertical sable to beige"
                            },
                            {
                                "slug": "gradient-4",
                                "gradient": "linear-gradient(to bottom, #111111 0%, #dbab88 100%)",
                                "name": "Vertical ebony to beige"
                            },
                            {
                                "slug": "gradient-5",
                                "gradient": "linear-gradient(to bottom, #353535 0%, #A4A4A4 100%)",
                                "name": "Vertical sable to beige"
                            },
                            {
                                "slug": "gradient-6",
                                "gradient": "linear-gradient(to bottom, #111111 0%, #353535 100%)",
                                "name": "Vertical ebony to sable"
                            },
                            {
                                "slug": "gradient-7",
                                "gradient": "linear-gradient(to bottom, #dbab88 50%, #f6decd 50%)",
                                "name": "Vertical hard beige to linen"
                            },
                            {
                                "slug": "gradient-8",
                                "gradient": "linear-gradient(to bottom, #A4A4A4 50%, #dbab88 50%)",
                                "name": "Vertical hard taupe to beige"
                            },
                            {
                                "slug": "gradient-9",
                                "gradient": "linear-gradient(to bottom, #353535 50%, #dbab88 50%)",
                                "name": "Vertical hard sable to beige"
                            },
                            {
                                "slug": "gradient-10",
                                "gradient": "linear-gradient(to bottom, #111111 50%, #dbab88 50%)",
                                "name": "Vertical hard ebony to beige"
                            },
                            {
                                "slug": "gradient-11",
                                "gradient": "linear-gradient(to bottom, #353535 50%, #A4A4A4 50%)",
                                "name": "Vertical hard sable to taupe"
                            },
                            {
                                "slug": "gradient-12",
                                "gradient": "linear-gradient(to bottom, #111111 50%, #353535 50%)",
                                "name": "Vertical hard ebony to sable"
                            }
                        ]
                    },
                    "palette": {
                        "theme": [
                            {
                                "color": "#F9F8F5",
                                "name": "Base",
                                "slug": "base"
                            },
                            {
                                "color": "#D73301",
                                "name": "Contrast \/ 2",
                                "slug": "contrast-2"
                            },
                            {
                                "color": "#000",
                                "name": "Contrast",
                                "slug": "contrast"
                            },
                            {
                                "color": "#f6decd",
                                "name": "Base \/ Two",
                                "slug": "base-2"
                            }
                        ]
                    }
                },
                "typography": {
                    "fontFamilies": {
                        "theme": [
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Instrument Sans",
                                        "fontStyle": "normal",
                                        "fontWeight": "400 700",
                                        "src": [
                                            "file:.\/assets\/fonts\/instrument-sans\/InstrumentSans-VariableFont_wdth,wght.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Instrument Sans",
                                        "fontStyle": "italic",
                                        "fontWeight": "400 700",
                                        "src": [
                                            "file:.\/assets\/fonts\/instrument-sans\/InstrumentSans-Italic-VariableFont_wdth,wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Instrument Sans\", sans-serif",
                                "name": "Instrument Sans",
                                "slug": "body"
                            },
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "normal",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-VariableFont_wght.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "italic",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-Italic-VariableFont_wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Jost\", sans-serif",
                                "name": "Jost",
                                "slug": "heading"
                            },
                            {
                                "fontFamily": "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
                                "name": "System Sans-serif",
                                "slug": "system-sans-serif"
                            },
                            {
                                "fontFamily": "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                                "name": "System Serif",
                                "slug": "system-serif"
                            }
                        ]
                    }
                }
            },
            "styles": {
                "blocks": {
                    "core\/button": {
                        "variations": {
                            "outline": {
                                "spacing": {
                                    "padding": {
                                        "bottom": "calc(0.9rem - 2px)",
                                        "left": "calc(2rem - 2px)",
                                        "right": "calc(2rem - 2px)",
                                        "top": "calc(0.9rem - 2px)"
                                    }
                                },
                                "border": {
                                    "width": "2px"
                                }
                            }
                        }
                    },
                    "core\/image": {
                        "filter": {
                            "duotone": "var(--wp--preset--duotone--duotone-2)"
                        }
                    },
                    "core\/pullquote": {
                        "typography": {
                            "fontSize": "var(--wp--preset--font-size--large)",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "lineHeight": "1.2"
                        }
                    },
                    "core\/quote": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontSize": "var(--wp--preset--font-size--large)",
                            "fontStyle": "normal"
                        },
                        "variations": {
                            "plain": {
                                "typography": {
                                    "fontStyle": "normal",
                                    "fontWeight": "400"
                                }
                            }
                        }
                    },
                    "core\/site-title": {
                        "typography": {
                            "fontWeight": "400"
                        }
                    },
                    "core\/navigation": {
                        "typography": {
                            "fontWeight": "400"
                        }
                    }
                },
                "elements": {
                    "button": {
                        "border": {
                            "radius": "100px"
                        },
                        "color": {
                            "background": "var(--wp--preset--color--contrast-2)",
                            "text": "var(--wp--preset--color--base)"
                        },
                        "spacing": {
                            "padding": {
                                "bottom": "0.9rem",
                                "left": "2rem",
                                "right": "2rem",
                                "top": "0.9rem"
                            }
                        },
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontSize": "var(--wp--preset--font-size--small)",
                            "fontStyle": "normal"
                        },
                        ":hover": {
                            "color": {
                                "background": "var(--wp--preset--color--contrast)"
                            }
                        }
                    }
                }
            }
        },
        {
            "version": 2,
            "title": "Fossil",
            "settings": {
                "color": {
                    "gradients": {
                        "theme": [
                            {
                                "slug": "gradient-1",
                                "gradient": "linear-gradient(to bottom, #E1DFDB 0%, #D6D2CE 100%)",
                                "name": "Vertical linen to beige"
                            },
                            {
                                "slug": "gradient-2",
                                "gradient": "linear-gradient(to bottom, #958D86 0%, #D6D2CE 100%)",
                                "name": "Vertical taupe to beige"
                            },
                            {
                                "slug": "gradient-3",
                                "gradient": "linear-gradient(to bottom, #65574E 0%, #D6D2CE 100%)",
                                "name": "Vertical sable to beige"
                            },
                            {
                                "slug": "gradient-4",
                                "gradient": "linear-gradient(to bottom, #1A1514 0%, #D6D2CE 100%)",
                                "name": "Vertical ebony to beige"
                            },
                            {
                                "slug": "gradient-5",
                                "gradient": "linear-gradient(to bottom, #65574E 0%, #958D86 100%)",
                                "name": "Vertical sable to beige"
                            },
                            {
                                "slug": "gradient-6",
                                "gradient": "linear-gradient(to bottom, #1A1514 0%, #65574E 100%)",
                                "name": "Vertical ebony to sable"
                            },
                            {
                                "slug": "gradient-7",
                                "gradient": "linear-gradient(to bottom, #D6D2CE 50%, #E1DFDB 50%)",
                                "name": "Vertical hard beige to linen"
                            },
                            {
                                "slug": "gradient-8",
                                "gradient": "linear-gradient(to bottom, #958D86 50%, #D6D2CE 50%)",
                                "name": "Vertical hard taupe to beige"
                            },
                            {
                                "slug": "gradient-9",
                                "gradient": "linear-gradient(to bottom, #65574E 50%, #D6D2CE 50%)",
                                "name": "Vertical hard sable to beige"
                            },
                            {
                                "slug": "gradient-10",
                                "gradient": "linear-gradient(to bottom, #1A1514 50%, #D6D2CE 50%)",
                                "name": "Vertical hard ebony to beige"
                            },
                            {
                                "slug": "gradient-11",
                                "gradient": "linear-gradient(to bottom, #65574E 50%, #958D86 50%)",
                                "name": "Vertical hard sable to taupe"
                            },
                            {
                                "slug": "gradient-12",
                                "gradient": "linear-gradient(to bottom, #1A1514 50%, #65574E 50%)",
                                "name": "Vertical hard ebony to sable"
                            }
                        ]
                    },
                    "palette": {
                        "theme": [
                            {
                                "color": "#D6D2CE",
                                "name": "Base",
                                "slug": "base"
                            },
                            {
                                "color": "#E1DFDB",
                                "name": "Base \/ Two",
                                "slug": "base-2"
                            },
                            {
                                "color": "#1A1514",
                                "name": "Contrast",
                                "slug": "contrast"
                            },
                            {
                                "color": "#65574E",
                                "name": "Contrast \/ Two",
                                "slug": "contrast-2"
                            },
                            {
                                "color": "#958D86",
                                "name": "Contrast \/ Three",
                                "slug": "contrast-3"
                            }
                        ]
                    }
                },
                "typography": {
                    "fontFamilies": {
                        "theme": [
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Inter",
                                        "fontStretch": "normal",
                                        "fontStyle": "normal",
                                        "fontWeight": "300 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/inter\/Inter-VariableFont_slnt,wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Inter\", sans-serif",
                                "name": "Inter",
                                "slug": "heading"
                            },
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Cardo",
                                        "fontStyle": "normal",
                                        "fontWeight": "400",
                                        "src": [
                                            "file:.\/assets\/fonts\/cardo\/cardo_normal_400.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Cardo",
                                        "fontStyle": "italic",
                                        "fontWeight": "400",
                                        "src": [
                                            "file:.\/assets\/fonts\/cardo\/cardo_italic_400.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Cardo",
                                        "fontStyle": "normal",
                                        "fontWeight": "700",
                                        "src": [
                                            "file:.\/assets\/fonts\/cardo\/cardo_normal_700.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "Cardo",
                                "name": "Cardo",
                                "slug": "body"
                            },
                            {
                                "fontFamily": "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
                                "name": "System Sans-serif",
                                "slug": "system-sans-serif"
                            },
                            {
                                "fontFamily": "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                                "name": "System Serif",
                                "slug": "system-serif"
                            }
                        ]
                    },
                    "fontSizes": {
                        "theme": [
                            {
                                "fluid": false,
                                "name": "Small",
                                "size": "1rem",
                                "slug": "small"
                            },
                            {
                                "fluid": false,
                                "name": "Medium",
                                "size": "1.2rem",
                                "slug": "medium"
                            },
                            {
                                "fluid": {
                                    "min": "1.5rem",
                                    "max": "2rem"
                                },
                                "name": "Large",
                                "size": "2rem",
                                "slug": "large"
                            },
                            {
                                "fluid": {
                                    "min": "2rem",
                                    "max": "2.65rem"
                                },
                                "name": "Extra Large",
                                "size": "2.65rem",
                                "slug": "x-large"
                            },
                            {
                                "fluid": {
                                    "min": "2.65rem",
                                    "max": "3.5rem"
                                },
                                "name": "Extra Extra Large",
                                "size": "3.5rem",
                                "slug": "xx-large"
                            }
                        ]
                    }
                }
            },
            "styles": {
                "blocks": {
                    "core\/button": {
                        "variations": {
                            "outline": {
                                "spacing": {
                                    "padding": {
                                        "bottom": "calc(0.9rem - 2px)",
                                        "left": "calc(2rem - 2px)",
                                        "right": "calc(2rem - 2px)",
                                        "top": "calc(0.9rem - 2px)"
                                    }
                                },
                                "border": {
                                    "width": "2px"
                                }
                            }
                        }
                    },
                    "core\/pullquote": {
                        "typography": {
                            "fontSize": "var(--wp--preset--font-size--large)",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "lineHeight": "1.2"
                        }
                    },
                    "core\/quote": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontSize": "var(--wp--preset--font-size--large)",
                            "fontStyle": "normal"
                        },
                        "variations": {
                            "plain": {
                                "typography": {
                                    "fontStyle": "normal",
                                    "fontWeight": "400"
                                }
                            }
                        }
                    },
                    "core\/site-title": {
                        "typography": {
                            "fontWeight": "400"
                        }
                    }
                },
                "elements": {
                    "button": {
                        "border": {
                            "radius": "100px",
                            "color": "var(--wp--preset--color--contrast-2)"
                        },
                        "color": {
                            "background": "var(--wp--preset--color--contrast-2)",
                            "text": "var(--wp--preset--color--white)"
                        },
                        "spacing": {
                            "padding": {
                                "bottom": "0.9rem",
                                "left": "2rem",
                                "right": "2rem",
                                "top": "0.9rem"
                            }
                        },
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontSize": "var(--wp--preset--font-size--small)",
                            "fontStyle": "normal"
                        },
                        ":hover": {
                            "color": {
                                "background": "var(--wp--preset--color--contrast)"
                            }
                        }
                    },
                    "heading": {
                        "typography": {
                            "fontWeight": "normal",
                            "letterSpacing": "0"
                        }
                    }
                }
            }
        },
        {
            "version": 2,
            "title": "Ice",
            "settings": {
                "color": {
                    "gradients": {
                        "theme": [
                            {
                                "slug": "gradient-1",
                                "gradient": "linear-gradient(to bottom, #cbd9e1 0%, #EBEBEF 100%)",
                                "name": "Vertical azure to ice"
                            },
                            {
                                "slug": "gradient-2",
                                "gradient": "linear-gradient(to bottom, #466577 0%, #EBEBEF 100%)",
                                "name": "Vertical slate to ice"
                            },
                            {
                                "slug": "gradient-3",
                                "gradient": "linear-gradient(to bottom, #37505d 0%, #EBEBEF 100%)",
                                "name": "Vertical ocean to ice"
                            },
                            {
                                "slug": "gradient-4",
                                "gradient": "linear-gradient(to bottom, #1C2930 0%, #EBEBEF 100%)",
                                "name": "Vertical ink to ice"
                            },
                            {
                                "slug": "gradient-5",
                                "gradient": "linear-gradient(to bottom, #37505d 0%, #466577 100%)",
                                "name": "Vertical ocean to slate"
                            },
                            {
                                "slug": "gradient-6",
                                "gradient": "linear-gradient(to bottom, #1C2930 0%, #37505d 100%)",
                                "name": "Vertical ink to ocean"
                            },
                            {
                                "slug": "gradient-7",
                                "gradient": "linear-gradient(to bottom, #EBEBEF 50%, #cbd9e1 50%)",
                                "name": "Vertical hard ice to azure"
                            },
                            {
                                "slug": "gradient-8",
                                "gradient": "linear-gradient(to bottom, #466577 50%, #EBEBEF 50%)",
                                "name": "Vertical hard slate to ice"
                            },
                            {
                                "slug": "gradient-9",
                                "gradient": "linear-gradient(to bottom, #37505d 50%, #EBEBEF 50%)",
                                "name": "Vertical hard ocean to ice"
                            },
                            {
                                "slug": "gradient-10",
                                "gradient": "linear-gradient(to bottom, #1C2930 50%, #EBEBEF 50%)",
                                "name": "Vertical hard ink to ice"
                            },
                            {
                                "slug": "gradient-11",
                                "gradient": "linear-gradient(to bottom, #37505d 50%, #466577 50%)",
                                "name": "Vertical hard ocean to slate"
                            },
                            {
                                "slug": "gradient-12",
                                "gradient": "linear-gradient(to bottom, #1C2930 50%, #37505d 50%)",
                                "name": "Vertical hard ink to ocean"
                            }
                        ]
                    },
                    "palette": {
                        "theme": [
                            {
                                "color": "#EBEBEF",
                                "name": "Base",
                                "slug": "base"
                            },
                            {
                                "color": "#DCE0E6",
                                "name": "Base \/ Two",
                                "slug": "base-2"
                            },
                            {
                                "color": "#1C2930",
                                "name": "Contrast",
                                "slug": "contrast"
                            },
                            {
                                "color": "#37505d",
                                "name": "Contrast \/ Two",
                                "slug": "contrast-2"
                            },
                            {
                                "color": "#96A5B2",
                                "name": "Contrast \/ Three",
                                "slug": "contrast-3"
                            }
                        ]
                    }
                },
                "typography": {
                    "fontFamilies": {
                        "theme": [
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Inter",
                                        "fontStretch": "normal",
                                        "fontStyle": "normal",
                                        "fontWeight": "300 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/inter\/Inter-VariableFont_slnt,wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Inter\", sans-serif",
                                "name": "Inter",
                                "slug": "heading"
                            },
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "normal",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-VariableFont_wght.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "italic",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-Italic-VariableFont_wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Jost\", sans-serif",
                                "name": "Jost",
                                "slug": "body"
                            },
                            {
                                "fontFamily": "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
                                "name": "System Sans-serif",
                                "slug": "system-sans-serif"
                            },
                            {
                                "fontFamily": "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                                "name": "System Serif",
                                "slug": "system-serif"
                            }
                        ]
                    },
                    "fontSizes": {
                        "theme": [
                            {
                                "fluid": false,
                                "name": "Small",
                                "size": "1rem",
                                "slug": "small"
                            },
                            {
                                "fluid": false,
                                "name": "Medium",
                                "size": "1.2rem",
                                "slug": "medium"
                            },
                            {
                                "fluid": {
                                    "min": "1.5rem",
                                    "max": "2rem"
                                },
                                "name": "Large",
                                "size": "2rem",
                                "slug": "large"
                            },
                            {
                                "fluid": {
                                    "min": "2rem",
                                    "max": "2.65rem"
                                },
                                "name": "Extra Large",
                                "size": "2.65rem",
                                "slug": "x-large"
                            },
                            {
                                "fluid": {
                                    "min": "2.65rem",
                                    "max": "3.5rem"
                                },
                                "name": "Extra Extra Large",
                                "size": "3.5rem",
                                "slug": "xx-large"
                            }
                        ]
                    }
                }
            },
            "styles": {
                "blocks": {
                    "core\/button": {
                        "variations": {
                            "outline": {
                                "spacing": {
                                    "padding": {
                                        "bottom": "calc(1rem - 1px)",
                                        "left": "calc(2.2rem - 1px)",
                                        "right": "calc(2.2rem - 1px)",
                                        "top": "calc(1rem - 1px)"
                                    }
                                },
                                "border": {
                                    "width": "1px"
                                }
                            }
                        }
                    },
                    "core\/pullquote": {
                        "typography": {
                            "fontSize": "var(--wp--preset--font-size--large)",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "lineHeight": "1.2"
                        }
                    },
                    "core\/quote": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontSize": "var(--wp--preset--font-size--large)",
                            "fontStyle": "normal"
                        },
                        "variations": {
                            "plain": {
                                "typography": {
                                    "fontStyle": "normal",
                                    "fontWeight": "400"
                                }
                            }
                        }
                    },
                    "core\/site-title": {
                        "typography": {
                            "fontWeight": "400"
                        }
                    }
                },
                "elements": {
                    "button": {
                        "border": {
                            "radius": "4px",
                            "color": "var(--wp--preset--color--contrast-2)"
                        },
                        "color": {
                            "background": "var(--wp--preset--color--contrast-2)",
                            "text": "var(--wp--preset--color--white)"
                        },
                        "spacing": {
                            "padding": {
                                "bottom": "1rem",
                                "left": "2.2rem",
                                "right": "2.2rem",
                                "top": "1rem"
                            }
                        },
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontSize": "0.75rem",
                            "fontStyle": "normal",
                            "textTransform": "uppercase",
                            "letterSpacing": "0.1rem"
                        },
                        ":hover": {
                            "color": {
                                "background": "var(--wp--preset--color--contrast)"
                            },
                            "border": {
                                "color": "var(--wp--preset--color--contrast)"
                            }
                        }
                    },
                    "heading": {
                        "typography": {
                            "fontWeight": "normal",
                            "letterSpacing": "0"
                        }
                    }
                }
            }
        },
        {
            "version": 2,
            "title": "Maelstrom",
            "settings": {
                "color": {
                    "palette": {
                        "theme": [
                            {
                                "color": "#38629F",
                                "name": "Base",
                                "slug": "base"
                            },
                            {
                                "color": "#244E8A",
                                "name": "Base \/ Two",
                                "slug": "base-2"
                            },
                            {
                                "color": "#FFFFFFA1",
                                "name": "Contrast \/ 2",
                                "slug": "contrast-2"
                            },
                            {
                                "color": "#FFFFFF",
                                "name": "Contrast",
                                "slug": "contrast"
                            },
                            {
                                "color": "#D5E0F0",
                                "name": "Contrast \/ 3",
                                "slug": "contrast-3"
                            }
                        ]
                    }
                },
                "typography": {
                    "fontFamilies": {
                        "theme": [
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Cardo",
                                        "fontStyle": "normal",
                                        "fontWeight": "400",
                                        "src": [
                                            "file:.\/assets\/fonts\/cardo\/cardo_normal_400.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Cardo",
                                        "fontStyle": "italic",
                                        "fontWeight": "400",
                                        "src": [
                                            "file:.\/assets\/fonts\/cardo\/cardo_italic_400.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Cardo",
                                        "fontStyle": "normal",
                                        "fontWeight": "700",
                                        "src": [
                                            "file:.\/assets\/fonts\/cardo\/cardo_normal_700.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "Cardo",
                                "name": "Cardo",
                                "slug": "body"
                            },
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "normal",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-VariableFont_wght.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "italic",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-Italic-VariableFont_wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Jost\", sans-serif",
                                "name": "Jost",
                                "slug": "heading"
                            },
                            {
                                "fontFamily": "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
                                "name": "System Sans-serif",
                                "slug": "system-sans-serif"
                            },
                            {
                                "fontFamily": "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                                "name": "System Serif",
                                "slug": "system-serif"
                            }
                        ]
                    },
                    "fontSizes": {
                        "theme": [
                            {
                                "fluid": false,
                                "name": "Small",
                                "size": "1rem",
                                "slug": "small"
                            },
                            {
                                "fluid": false,
                                "name": "Medium",
                                "size": "1.2rem",
                                "slug": "medium"
                            },
                            {
                                "fluid": {
                                    "min": "1.5rem",
                                    "max": "2rem"
                                },
                                "name": "Large",
                                "size": "2rem",
                                "slug": "large"
                            },
                            {
                                "fluid": {
                                    "min": "2rem",
                                    "max": "2.65rem"
                                },
                                "name": "Extra Large",
                                "size": "2.65rem",
                                "slug": "x-large"
                            },
                            {
                                "fluid": {
                                    "min": "2.65rem",
                                    "max": "3.5rem"
                                },
                                "name": "Extra Extra Large",
                                "size": "3.5rem",
                                "slug": "xx-large"
                            }
                        ]
                    }
                }
            },
            "styles": {
                "blocks": {
                    "core\/button": {
                        "variations": {
                            "outline": {
                                "spacing": {
                                    "padding": {
                                        "bottom": "calc(0.8rem - 2px)",
                                        "left": "calc(1.6rem - 2px)",
                                        "right": "calc(1.6rem - 2px)",
                                        "top": "calc(0.8rem - 2px)"
                                    }
                                },
                                "border": {
                                    "width": "2px"
                                }
                            }
                        }
                    },
                    "core\/site-title": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontWeight": "normal"
                        }
                    },
                    "core\/navigation": {
                        "typography": {
                            "fontSize": "var(--wp--preset--font-size--small)",
                            "fontWeight": "normal"
                        }
                    }
                },
                "elements": {
                    "button": {
                        "border": {
                            "radius": "6px"
                        },
                        "color": {
                            "background": "var(--wp--preset--color--contrast)",
                            "text": "var(--wp--preset--color--base-2)"
                        },
                        "spacing": {
                            "padding": {
                                "bottom": "0.98rem",
                                "left": "1.6rem",
                                "right": "1.6rem",
                                "top": "0.8rem"
                            }
                        },
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontSize": "var(--wp--preset--font-size--small)",
                            "fontStyle": "normal"
                        },
                        ":hover": {
                            "color": {
                                "background": "var(--wp--preset--color--contrast)"
                            }
                        }
                    },
                    "heading": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "letterSpacing": "0"
                        }
                    }
                }
            }
        },
        {
            "version": 2,
            "title": "Mint",
            "settings": {
                "color": {
                    "palette": {
                        "theme": [
                            {
                                "color": "#e4efeb",
                                "name": "Base",
                                "slug": "base"
                            },
                            {
                                "color": "#f1fefb",
                                "name": "Base \/ Two",
                                "slug": "base-2"
                            },
                            {
                                "color": "#000000",
                                "name": "Contrast",
                                "slug": "contrast"
                            },
                            {
                                "color": "#353535",
                                "name": "Contrast \/ Two",
                                "slug": "contrast-2"
                            },
                            {
                                "color": "#A4A4A4",
                                "name": "Contrast \/ Three",
                                "slug": "contrast-3"
                            }
                        ]
                    }
                },
                "typography": {
                    "fluid": true,
                    "fontFamilies": {
                        "theme": [
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Instrument Sans",
                                        "fontStyle": "normal",
                                        "fontWeight": "400 700",
                                        "src": [
                                            "file:.\/assets\/fonts\/instrument-sans\/InstrumentSans-VariableFont_wdth,wght.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Instrument Sans",
                                        "fontStyle": "italic",
                                        "fontWeight": "400 700",
                                        "src": [
                                            "file:.\/assets\/fonts\/instrument-sans\/InstrumentSans-Italic-VariableFont_wdth,wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Instrument Sans\", sans-serif",
                                "name": "Instrument Sans",
                                "slug": "heading"
                            },
                            {
                                "fontFace": [
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "normal",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-VariableFont_wght.woff2"
                                        ]
                                    },
                                    {
                                        "fontFamily": "Jost",
                                        "fontStyle": "italic",
                                        "fontWeight": "100 900",
                                        "src": [
                                            "file:.\/assets\/fonts\/jost\/Jost-Italic-VariableFont_wght.woff2"
                                        ]
                                    }
                                ],
                                "fontFamily": "\"Jost\", sans-serif",
                                "name": "Jost",
                                "slug": "body"
                            },
                            {
                                "fontFamily": "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
                                "name": "System Sans-serif",
                                "slug": "system-sans-serif"
                            },
                            {
                                "fontFamily": "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                                "name": "System Serif",
                                "slug": "system-serif"
                            }
                        ]
                    }
                }
            },
            "styles": {
                "blocks": {
                    "core\/navigation": {
                        "typography": {
                            "fontStyle": "normal",
                            "fontWeight": "400"
                        }
                    },
                    "core\/pullquote": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--body)",
                            "fontSize": "var(--wp--preset--font-size--x-large)",
                            "fontStyle": "normal",
                            "fontWeight": "600",
                            "lineHeight": "1.3"
                        }
                    },
                    "core\/quote": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--body)",
                            "fontSize": "var(--wp--preset--font-size--large)",
                            "fontStyle": "normal",
                            "fontWeight": "400"
                        }
                    },
                    "core\/site-title": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)"
                        }
                    }
                },
                "elements": {
                    "caption": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--body)"
                        }
                    },
                    "h1": {
                        "typography": {
                            "fontSize": "var(--wp--preset--font-size--x-large)"
                        }
                    },
                    "h2": {
                        "typography": {
                            "fontSize": "2.1rem"
                        }
                    },
                    "h3": {
                        "typography": {
                            "fontSize": "var(--wp--preset--font-size--large)"
                        }
                    },
                    "h4": {
                        "typography": {
                            "fontSize": "1.6rem"
                        }
                    },
                    "h5": {
                        "typography": {
                            "fontSize": "1.4rem"
                        }
                    },
                    "heading": {
                        "typography": {
                            "fontFamily": "var(--wp--preset--font-family--heading)",
                            "fontStyle": "normal",
                            "fontWeight": "600"
                        }
                    }
                },
                "typography": {
                    "fontFamily": "var(--wp--preset--font-family--body)"
                }
            }
        },
        {
            "version": 2,
            "title": "Onyx",
            "settings": {
                "color": {
                    "duotone": {
                        "theme": [
                            {
                                "colors": [
                                    "#272727",
                                    "#f9f9f9"
                                ],
                                "slug": "duotone-1",
                                "name": "Dark gray and white"
                            },
                            {
                                "colors": [
                                    "#272727",
                                    "#5F584F"
                                ],
                                "slug": "duotone-2",
                                "name": "Dark gray and walnut"
                            },
                            {
                                "colors": [
                                    "#272727",
                                    "#973C20"
                                ],
                                "slug": "duotone-3",
                                "name": "Dark gray and cinnamon"
                            },
                            {
                                "colors": [
                                    "#272727",
                                    "#4D5B48"
                                ],
                                "slug": "duotone-4",
                                "name": "Dark gray and olive"
                            },
                            {
                                "colors": [
                                    "#272727",
                                    "#4F5959"
                                ],
                                "slug": "duotone-5",
                                "name": "Dark gray and steel"
                            }
                        ]
                    },
                    "gradients": {
                        "theme": [
                            {
                                "slug": "gradient-1",
                                "gradient": "linear-gradient(to bottom, #5F584F 0%, #272727 100%)",
                                "name": "Vertical soft driftwood to dark gray"
                            },
                            {
                                "slug": "gradient-2",
                                "gradient": "linear-gradient(to bottom, #6D533C 0%, #272727 100%)",
                                "name": "Vertical soft walnut to dark gray"
                            },
                            {
                                "slug": "gradient-3",
                                "gradient": "linear-gradient(to bottom, #973C20 0%, #272727 100%)",
                                "name": "Vertical soft cinnamon to dark gray"
                            },
                            {
                                "slug": "gradient-4",
                                "gradient": "linear-gradient(to bottom, #4D5B48 0%, #272727 100%)",
                                "name": "Vertical soft olive to dark gray"
                            },
                            {
                                "slug": "gradient-5",
                                "gradient": "linear-gradient(to bottom, #4F5959 0%, #272727 100%)",
                                "name": "Vertical soft steel to dark gray"
                            },
                            {
                                "slug": "gradient-6",
                                "gradient": "linear-gradient(to bottom, #909090 0%, #272727 100%)",
                                "name": "Vertical soft pewter to dark gray"
                            },
                            {
                                "slug": "gradient-7",
                                "gradient": "linear-gradient(to bottom, #5F584F 50%, #272727 50%)",
                                "name": "Vertical hard beige to dark gray"
                            },
                            {
                                "slug": "gradient-8",
                                "gradient": "linear-gradient(to bottom, #6D533C 50%, #272727 50%)",
                                "name": "Vertical hard walnut to dark gray"
                            },
                            {
                                "slug": "gradient-9",
                                "gradient": "linear-gradient(to bottom, #973C20 50%, #272727 50%)",
                                "name": "Vertical hard cinnamon to dark gray"
                            },
                            {
                                "slug": "gradient-10",
                                "gradient": "linear-gradient(to bottom, #4D5B48 50%, #272727 50%)",
                                "name": "Vertical hard olive to dark gray"
                            },
                            {
                                "slug": "gradient-11",
                                "gradient": "linear-gradient(to bottom, #4F5959 50%, #272727 50%)",
                                "name": "Vertical hard steel to dark gray"
                            },
                            {
                                "slug": "gradient-12",
                                "gradient": "linear-gradient(to bottom, #A4A4A4 50%, #272727 50%)",
                                "name": "Vertical hard pewter to dark gray"
                            }
                        ]
                    },
                    "palette": {
                        "theme": [
                            {
                                "color": "#272727",
                                "name": "Base",
                                "slug": "base"
                            },
                            {
                                "color": "#303030",
                                "name": "Base \/ Two",
                                "slug": "base-2"
                            },
                            {
                                "color": "#f9f9f9",
                                "name": "Contrast",
                                "slug": "contrast"
                            },
                            {
                                "color": "#B7B7B7",
                                "name": "Contrast \/ Two",
                                "slug": "contrast-2"
                            },
                            {
                                "color": "#909090",
                                "name": "Contrast \/ Three",
                                "slug": "contrast-3"
                            },
                            {
                                "color": "#5F584F",
                                "name": "Accent",
                                "slug": "accent"
                            },
                            {
                                "color": "#6D533C",
                                "name": "Accent \/ Two",
                                "slug": "accent-2"
                            },
                            {
                                "color": "#973C20",
                                "name": "Accent \/ Three",
                                "slug": "accent-3"
                            },
                            {
                                "color": "#4D5B48",
                                "name": "Accent \/ Four",
                                "slug": "accent-4"
                            },
                            {
                                "color": "#4F5959",
                                "name": "Accent \/ Five",
                                "slug": "accent-5"
                            }
                        ]
                    }
                }
            }
        },
        {
            "version": 2,
            "title": "Rust",
            "settings": {
                "color": {
                    "duotone": {
                        "theme": [
                            {
                                "colors": [
                                    "#A62B0C",
                                    "#F3F0E7"
                                ],
                                "slug": "duotone-1",
                                "name": "Dark rust to beige"
                            }
                        ]
                    },
                    "gradients": {
                        "theme": [
                            {
                                "slug": "gradient-1",
                                "gradient": "linear-gradient(to bottom, #A62A0C42 0%, #F3F0E7 100%)",
                                "name": "Vertical transparent rust to beige"
                            },
                            {
                                "slug": "gradient-7",
                                "gradient": "linear-gradient(to bottom, #A62A0C42 50%, #F3F0E7 50%)",
                                "name": "Vertical hard transparent rust to beige"
                            },
                            {
                                "slug": "gradient-2",
                                "gradient": "linear-gradient(to bottom, #A62B0C 0%, #F3F0E7 100%)",
                                "name": "Vertical rust to beige"
                            },
                            {
                                "slug": "gradient-8",
                                "gradient": "linear-gradient(to bottom, #A62B0C 50%, #F3F0E7 50%)",
                                "name": "Vertical hard rust to beige"
                            }
                        ]
                    },
                    "palette": {
                        "theme": [
                            {
                                "color": "#F3F0E7",
                                "name": "Base",
                                "slug": "base"
                            },
                            {
                                "color": "#ECEADF",
                                "name": "Base \/ 2",
                                "slug": "base-2"
                            },
                            {
                                "color": "#A62B0C",
                                "name": "Contrast",
                                "slug": "contrast"
                            }
                        ]
                    }
                }
            },
            "styles": {
                "blocks": {
                    "core\/calendar": {
                        "css": ".wp-block-calendar table:where(:not(.has-text-color)) th{background-color:var(--wp--preset--color--contrast);color:var(--wp--preset--color--base);border-color:var(--wp--preset--color--contrast)} & table:where(:not(.has-text-color)) td{border-color:var(--wp--preset--color--contrast)}"
                    },
                    "core\/comment-date": {
                        "color": {
                            "text": "var(--wp--preset--color--contrast)"
                        },
                        "elements": {
                            "link": {
                                "color": {
                                    "text": "var(--wp--preset--color--contrast)"
                                }
                            }
                        }
                    },
                    "core\/comment-edit-link": {
                        "elements": {
                            "link": {
                                "color": {
                                    "text": "var(--wp--preset--color--contrast)"
                                }
                            }
                        }
                    },
                    "core\/comment-reply-link": {
                        "elements": {
                            "link": {
                                "color": {
                                    "text": "var(--wp--preset--color--contrast)"
                                }
                            }
                        }
                    },
                    "core\/post-date": {
                        "color": {
                            "text": "var(--wp--preset--color--contrast)"
                        },
                        "elements": {
                            "link": {
                                "color": {
                                    "text": "var(--wp--preset--color--contrast)"
                                }
                            }
                        }
                    },
                    "core\/post-terms": {
                        "css": "& .wp-block-post-terms__prefix{color: var(--wp--preset--color--contrast);}"
                    },
                    "core\/quote": {
                        "color": {
                            "background": "var(--wp--preset--color--base)"
                        }
                    },
                    "core\/site-tagline": {
                        "color": {
                            "text": "var(--wp--preset--color--contrast)"
                        }
                    }
                },
                "elements": {
                    "button": {
                        ":focus": {
                            "color": {
                                "background": "var(--wp--preset--color--contrast)"
                            },
                            "border": {
                                "color": "var(--wp--preset--color--contrast)"
                            }
                        },
                        ":hover": {
                            "color": {
                                "background": "var(--wp--preset--color--contrast)"
                            },
                            "border": {
                                "color": "var(--wp--preset--color--contrast)"
                            }
                        }
                    },
                    "caption": {
                        "color": {
                            "text": "var(--wp--preset--color--contrast)"
                        }
                    }
                }
            }
        }
    ];
    
    response.send(status);
 });




 app.get("/wp-json/wp/v2/types", (request, response) => {
   
    var status = {};
    if (request.query.context === "view") {
        status = {
            "post": {
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "name": "Posts",
                "slug": "post",
                "icon": "dashicons-admin-post",
                "taxonomies": [
                    "category",
                    "post_tag"
                ],
                "rest_base": "posts",
                "rest_namespace": "wp\/v2",
                "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v22.4 - https:\/\/yoast.com\/wordpress\/plugins\/seo\/ -->\n<title>Test -<\/title>\n<!-- Admin only notice: this page does not show a meta description because it does not have one, either write it for this page specifically or go into the [Yoast SEO - Settings] menu and set up a template. -->\n<meta name=\"robots\" content=\"noindex, follow\" \/>\n<meta property=\"og:locale\" content=\"en_US\" \/>\n<meta property=\"og:type\" content=\"website\" \/>\n<meta property=\"og:title\" content=\"Test\" \/>\n<meta property=\"og:url\" content=\"https:\/\/wp.smokenetwork.nl\/\" \/>\n<meta property=\"og:site_name\" content=\"Test\" \/>\n<meta name=\"twitter:card\" content=\"summary_large_image\" \/>\n<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https:\/\/schema.org\",\"@graph\":[{\"@type\":\"CollectionPage\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/\",\"url\":\"https:\/\/wp.smokenetwork.nl\/\",\"name\":\"Test -\",\"isPartOf\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#website\"},\"breadcrumb\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#breadcrumb\"},\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\/\/wp.smokenetwork.nl\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/#website\",\"url\":\"https:\/\/wp.smokenetwork.nl\/\",\"name\":\"Test\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\/\/wp.smokenetwork.nl\/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"}]}<\/script>\n<!-- \/ Yoast SEO plugin. -->",
                "yoast_head_json": {
                    "title": "Test -",
                    "robots": {
                        "index": "noindex",
                        "follow": "follow"
                    },
                    "og_locale": "en_US",
                    "og_type": "website",
                    "og_title": "Test",
                    "og_url": "https:\/\/wp.smokenetwork.nl\/",
                    "og_site_name": "Test",
                    "twitter_card": "summary_large_image",
                    "schema": {
                        "@context": "https:\/\/schema.org",
                        "@graph": [
                            {
                                "@type": "CollectionPage",
                                "@id": "https:\/\/wp.smokenetwork.nl\/",
                                "url": "https:\/\/wp.smokenetwork.nl\/",
                                "name": "Test -",
                                "isPartOf": {
                                    "@id": "https:\/\/wp.smokenetwork.nl\/#website"
                                },
                                "breadcrumb": {
                                    "@id": "https:\/\/wp.smokenetwork.nl\/#breadcrumb"
                                },
                                "inLanguage": "en-US"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https:\/\/wp.smokenetwork.nl\/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https:\/\/wp.smokenetwork.nl\/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Home"
                                    }
                                ]
                            },
                            {
                                "@type": "WebSite",
                                "@id": "https:\/\/wp.smokenetwork.nl\/#website",
                                "url": "https:\/\/wp.smokenetwork.nl\/",
                                "name": "Test",
                                "description": "",
                                "potentialAction": [
                                    {
                                        "@type": "SearchAction",
                                        "target": {
                                            "@type": "EntryPoint",
                                            "urlTemplate": "https:\/\/wp.smokenetwork.nl\/?s={search_term_string}"
                                        },
                                        "query-input": "required name=search_term_string"
                                    }
                                ],
                                "inLanguage": "en-US"
                            }
                        ]
                    }
                },
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts"
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
            },
            "page": {
                "description": "",
                "hierarchical": true,
                "has_archive": false,
                "name": "Pages",
                "slug": "page",
                "icon": "dashicons-admin-page",
                "taxonomies": [],
                "rest_base": "pages",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages"
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
            },
            "attachment": {
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "name": "Media",
                "slug": "attachment",
                "icon": "dashicons-admin-media",
                "taxonomies": [],
                "rest_base": "media",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/media"
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
            },
            "nav_menu_item": {
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "name": "Navigation Menu Items",
                "slug": "nav_menu_item",
                "icon": null,
                "taxonomies": [
                    "nav_menu"
                ],
                "rest_base": "menu-items",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/menu-items"
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
            },
            "wp_block": {
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "name": "Patterns",
                "slug": "wp_block",
                "icon": null,
                "taxonomies": [
                    "wp_pattern_category"
                ],
                "rest_base": "blocks",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/blocks"
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
            },
            "wp_template": {
                "description": "Templates to include in your theme.",
                "hierarchical": false,
                "has_archive": false,
                "name": "Templates",
                "slug": "wp_template",
                "icon": null,
                "taxonomies": [],
                "rest_base": "templates",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates"
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
            },
            "wp_template_part": {
                "description": "Template parts to include in your templates.",
                "hierarchical": false,
                "has_archive": false,
                "name": "Template Parts",
                "slug": "wp_template_part",
                "icon": null,
                "taxonomies": [],
                "rest_base": "template-parts",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/template-parts"
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
            },
            "wp_navigation": {
                "description": "Navigation menus that can be inserted into your site.",
                "hierarchical": false,
                "has_archive": false,
                "name": "Navigation Menus",
                "slug": "wp_navigation",
                "icon": null,
                "taxonomies": [],
                "rest_base": "navigation",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/navigation"
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
            },
            "wp_font_family": {
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "name": "Font Families",
                "slug": "wp_font_family",
                "icon": null,
                "taxonomies": [],
                "rest_base": "font-families",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/font-families"
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
            },
            "wp_font_face": {
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "name": "Font Faces",
                "slug": "wp_font_face",
                "icon": null,
                "taxonomies": [],
                "rest_base": "font-families\/(?P<font_family_id>[\\d]+)\/font-faces",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/font-families\/(?P<font_family_id>[\\d]+)\/font-faces"
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
        }
    }
    else if (request.query.context === "edit") {
        status = {
            "post": {
                "capabilities": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_posts",
                    "edit_others_posts": "edit_others_posts",
                    "delete_posts": "delete_posts",
                    "publish_posts": "publish_posts",
                    "read_private_posts": "read_private_posts",
                    "read": "read",
                    "delete_private_posts": "delete_private_posts",
                    "delete_published_posts": "delete_published_posts",
                    "delete_others_posts": "delete_others_posts",
                    "edit_private_posts": "edit_private_posts",
                    "edit_published_posts": "edit_published_posts",
                    "create_posts": "edit_posts"
                },
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": true,
                    "show_ui": true
                },
                "viewable": true,
                "labels": {
                    "name": "Posts",
                    "singular_name": "Post",
                    "add_new": "Add New Post",
                    "add_new_item": "Add New Post",
                    "edit_item": "Edit Post",
                    "new_item": "New Post",
                    "view_item": "View Post",
                    "view_items": "View Posts",
                    "search_items": "Search Posts",
                    "not_found": "No posts found.",
                    "not_found_in_trash": "No posts found in Trash.",
                    "parent_item_colon": null,
                    "all_items": "All Posts",
                    "archives": "Post Archives",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into post",
                    "uploaded_to_this_item": "Uploaded to this post",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter posts list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Posts list navigation",
                    "items_list": "Posts list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Posts",
                    "name_admin_bar": "Post"
                },
                "name": "Posts",
                "slug": "post",
                "icon": "dashicons-admin-post",
                "supports": {
                    "title": true,
                    "editor": true,
                    "author": true,
                    "thumbnail": true,
                    "excerpt": true,
                    "trackbacks": true,
                    "custom-fields": true,
                    "comments": true,
                    "revisions": true,
                    "post-formats": true
                },
                "taxonomies": [
                    "category",
                    "post_tag"
                ],
                "rest_base": "posts",
                "rest_namespace": "wp\/v2",
                "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v22.4 - https:\/\/yoast.com\/wordpress\/plugins\/seo\/ -->\n<title>Test -<\/title>\n<!-- Admin only notice: this page does not show a meta description because it does not have one, either write it for this page specifically or go into the [Yoast SEO - Settings] menu and set up a template. -->\n<meta name=\"robots\" content=\"noindex, follow\" \/>\n<meta property=\"og:locale\" content=\"en_US\" \/>\n<meta property=\"og:type\" content=\"website\" \/>\n<meta property=\"og:title\" content=\"Test\" \/>\n<meta property=\"og:url\" content=\"https:\/\/wp.smokenetwork.nl\/\" \/>\n<meta property=\"og:site_name\" content=\"Test\" \/>\n<meta name=\"twitter:card\" content=\"summary_large_image\" \/>\n<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https:\/\/schema.org\",\"@graph\":[{\"@type\":\"CollectionPage\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/\",\"url\":\"https:\/\/wp.smokenetwork.nl\/\",\"name\":\"Test -\",\"isPartOf\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#website\"},\"breadcrumb\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#breadcrumb\"},\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\/\/wp.smokenetwork.nl\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/#website\",\"url\":\"https:\/\/wp.smokenetwork.nl\/\",\"name\":\"Test\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\/\/wp.smokenetwork.nl\/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"}]}<\/script>\n<!-- \/ Yoast SEO plugin. -->",
                "yoast_head_json": {
                    "title": "Test -",
                    "robots": {
                        "index": "noindex",
                        "follow": "follow"
                    },
                    "og_locale": "en_US",
                    "og_type": "website",
                    "og_title": "Test",
                    "og_url": "https:\/\/wp.smokenetwork.nl\/",
                    "og_site_name": "Test",
                    "twitter_card": "summary_large_image",
                    "schema": {
                        "@context": "https:\/\/schema.org",
                        "@graph": [
                            {
                                "@type": "CollectionPage",
                                "@id": "https:\/\/wp.smokenetwork.nl\/",
                                "url": "https:\/\/wp.smokenetwork.nl\/",
                                "name": "Test -",
                                "isPartOf": {
                                    "@id": "https:\/\/wp.smokenetwork.nl\/#website"
                                },
                                "breadcrumb": {
                                    "@id": "https:\/\/wp.smokenetwork.nl\/#breadcrumb"
                                },
                                "inLanguage": "en-US"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https:\/\/wp.smokenetwork.nl\/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https:\/\/wp.smokenetwork.nl\/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Home"
                                    }
                                ]
                            },
                            {
                                "@type": "WebSite",
                                "@id": "https:\/\/wp.smokenetwork.nl\/#website",
                                "url": "https:\/\/wp.smokenetwork.nl\/",
                                "name": "Test",
                                "description": "",
                                "potentialAction": [
                                    {
                                        "@type": "SearchAction",
                                        "target": {
                                            "@type": "EntryPoint",
                                            "urlTemplate": "https:\/\/wp.smokenetwork.nl\/?s={search_term_string}"
                                        },
                                        "query-input": "required name=search_term_string"
                                    }
                                ],
                                "inLanguage": "en-US"
                            }
                        ]
                    }
                },
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/posts"
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
            },
            "page": {
                "capabilities": {
                    "edit_post": "edit_page",
                    "read_post": "read_page",
                    "delete_post": "delete_page",
                    "edit_posts": "edit_pages",
                    "edit_others_posts": "edit_others_pages",
                    "delete_posts": "delete_pages",
                    "publish_posts": "publish_pages",
                    "read_private_posts": "read_private_pages",
                    "read": "read",
                    "delete_private_posts": "delete_private_pages",
                    "delete_published_posts": "delete_published_pages",
                    "delete_others_posts": "delete_others_pages",
                    "edit_private_posts": "edit_private_pages",
                    "edit_published_posts": "edit_published_pages",
                    "create_posts": "edit_pages"
                },
                "description": "",
                "hierarchical": true,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": true,
                    "show_ui": true
                },
                "viewable": true,
                "labels": {
                    "name": "Pages",
                    "singular_name": "Page",
                    "add_new": "Add New Page",
                    "add_new_item": "Add New Page",
                    "edit_item": "Edit Page",
                    "new_item": "New Page",
                    "view_item": "View Page",
                    "view_items": "View Pages",
                    "search_items": "Search Pages",
                    "not_found": "No pages found.",
                    "not_found_in_trash": "No pages found in Trash.",
                    "parent_item_colon": "Parent Page:",
                    "all_items": "All Pages",
                    "archives": "Page Archives",
                    "attributes": "Page Attributes",
                    "insert_into_item": "Insert into page",
                    "uploaded_to_this_item": "Uploaded to this page",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter pages list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Pages list navigation",
                    "items_list": "Pages list",
                    "item_published": "Page published.",
                    "item_published_privately": "Page published privately.",
                    "item_reverted_to_draft": "Page reverted to draft.",
                    "item_trashed": "Page trashed.",
                    "item_scheduled": "Page scheduled.",
                    "item_updated": "Page updated.",
                    "item_link": "Page Link",
                    "item_link_description": "A link to a page.",
                    "menu_name": "Pages",
                    "name_admin_bar": "Page"
                },
                "name": "Pages",
                "slug": "page",
                "icon": "dashicons-admin-page",
                "supports": {
                    "title": true,
                    "editor": true,
                    "author": true,
                    "thumbnail": true,
                    "page-attributes": true,
                    "custom-fields": true,
                    "comments": true,
                    "revisions": true
                },
                "taxonomies": [],
                "rest_base": "pages",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages"
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
            },
            "attachment": {
                "capabilities": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_posts",
                    "edit_others_posts": "edit_others_posts",
                    "delete_posts": "delete_posts",
                    "publish_posts": "publish_posts",
                    "read_private_posts": "read_private_posts",
                    "read": "read",
                    "delete_private_posts": "delete_private_posts",
                    "delete_published_posts": "delete_published_posts",
                    "delete_others_posts": "delete_others_posts",
                    "edit_private_posts": "edit_private_posts",
                    "edit_published_posts": "edit_published_posts",
                    "create_posts": "upload_files"
                },
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": true
                },
                "viewable": true,
                "labels": {
                    "name": "Media",
                    "singular_name": "Media",
                    "add_new": "Add New Media File",
                    "add_new_item": "Add New Post",
                    "edit_item": "Edit Media",
                    "new_item": "New Post",
                    "view_item": "View Attachment Page",
                    "view_items": "View Posts",
                    "search_items": "Search Posts",
                    "not_found": "No posts found.",
                    "not_found_in_trash": "No posts found in Trash.",
                    "parent_item_colon": null,
                    "all_items": "Media",
                    "archives": "Media",
                    "attributes": "Attachment Attributes",
                    "insert_into_item": "Insert into post",
                    "uploaded_to_this_item": "Uploaded to this post",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter posts list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Posts list navigation",
                    "items_list": "Posts list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Media",
                    "name_admin_bar": "Media"
                },
                "name": "Media",
                "slug": "attachment",
                "icon": "dashicons-admin-media",
                "supports": {
                    "title": true,
                    "author": true,
                    "comments": true
                },
                "taxonomies": [],
                "rest_base": "media",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/media"
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
            },
            "nav_menu_item": {
                "capabilities": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_theme_options",
                    "edit_others_posts": "edit_theme_options",
                    "delete_posts": "edit_theme_options",
                    "publish_posts": "edit_theme_options",
                    "read_private_posts": "edit_theme_options",
                    "read": "read",
                    "delete_private_posts": "edit_theme_options",
                    "delete_published_posts": "edit_theme_options",
                    "delete_others_posts": "edit_theme_options",
                    "edit_private_posts": "edit_theme_options",
                    "edit_published_posts": "edit_theme_options",
                    "create_posts": "edit_theme_options"
                },
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": false
                },
                "viewable": false,
                "labels": {
                    "name": "Navigation Menu Items",
                    "singular_name": "Navigation Menu Item",
                    "add_new": "Add New Post",
                    "add_new_item": "Add New Post",
                    "edit_item": "Edit Post",
                    "new_item": "New Post",
                    "view_item": "View Post",
                    "view_items": "View Posts",
                    "search_items": "Search Posts",
                    "not_found": "No posts found.",
                    "not_found_in_trash": "No posts found in Trash.",
                    "parent_item_colon": null,
                    "all_items": "Navigation Menu Items",
                    "archives": "Navigation Menu Items",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into post",
                    "uploaded_to_this_item": "Uploaded to this post",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter posts list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Posts list navigation",
                    "items_list": "Posts list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Navigation Menu Items",
                    "name_admin_bar": "Navigation Menu Item"
                },
                "name": "Navigation Menu Items",
                "slug": "nav_menu_item",
                "icon": null,
                "supports": {
                    "title": true,
                    "editor": true
                },
                "taxonomies": [
                    "nav_menu"
                ],
                "rest_base": "menu-items",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/menu-items"
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
            },
            "wp_block": {
                "capabilities": {
                    "edit_post": "edit_block",
                    "read_post": "read_block",
                    "delete_post": "delete_block",
                    "edit_posts": "edit_posts",
                    "edit_others_posts": "edit_others_posts",
                    "delete_posts": "delete_posts",
                    "publish_posts": "publish_blocks",
                    "read_private_posts": "read_private_blocks",
                    "read": "edit_posts",
                    "delete_private_posts": "delete_private_blocks",
                    "delete_published_posts": "delete_published_posts",
                    "delete_others_posts": "delete_others_posts",
                    "edit_private_posts": "edit_private_blocks",
                    "edit_published_posts": "edit_published_posts",
                    "create_posts": "publish_posts"
                },
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": true
                },
                "viewable": false,
                "labels": {
                    "name": "Patterns",
                    "singular_name": "Pattern",
                    "add_new": "Add New Pattern",
                    "add_new_item": "Add New Pattern",
                    "edit_item": "Edit Block Pattern",
                    "new_item": "New Pattern",
                    "view_item": "View Pattern",
                    "view_items": "View Patterns",
                    "search_items": "Search Patterns",
                    "not_found": "No patterns found.",
                    "not_found_in_trash": "No patterns found in Trash.",
                    "parent_item_colon": null,
                    "all_items": "All Patterns",
                    "archives": "All Patterns",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into post",
                    "uploaded_to_this_item": "Uploaded to this post",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter patterns list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Patterns list navigation",
                    "items_list": "Patterns list",
                    "item_published": "Pattern published.",
                    "item_published_privately": "Pattern published privately.",
                    "item_reverted_to_draft": "Pattern reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Pattern scheduled.",
                    "item_updated": "Pattern updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Patterns",
                    "name_admin_bar": "Pattern"
                },
                "name": "Patterns",
                "slug": "wp_block",
                "icon": null,
                "supports": {
                    "title": true,
                    "editor": true,
                    "revisions": true,
                    "custom-fields": true
                },
                "taxonomies": [
                    "wp_pattern_category"
                ],
                "rest_base": "blocks",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/blocks"
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
            },
            "wp_template": {
                "capabilities": {
                    "edit_post": "edit_template",
                    "read_post": "read_template",
                    "delete_post": "delete_template",
                    "edit_posts": "edit_theme_options",
                    "edit_others_posts": "edit_theme_options",
                    "delete_posts": "edit_theme_options",
                    "publish_posts": "edit_theme_options",
                    "read_private_posts": "edit_theme_options",
                    "read": "edit_theme_options",
                    "delete_private_posts": "edit_theme_options",
                    "delete_published_posts": "edit_theme_options",
                    "delete_others_posts": "edit_theme_options",
                    "edit_private_posts": "edit_theme_options",
                    "edit_published_posts": "edit_theme_options",
                    "create_posts": "edit_theme_options"
                },
                "description": "Templates to include in your theme.",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": false
                },
                "viewable": false,
                "labels": {
                    "name": "Templates",
                    "singular_name": "Template",
                    "add_new": "Add New Template",
                    "add_new_item": "Add New Template",
                    "edit_item": "Edit Template",
                    "new_item": "New Template",
                    "view_item": "View Template",
                    "view_items": "View Posts",
                    "search_items": "Search Templates",
                    "not_found": "No templates found.",
                    "not_found_in_trash": "No templates found in Trash.",
                    "parent_item_colon": "Parent Template:",
                    "all_items": "Templates",
                    "archives": "Template archives",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into template",
                    "uploaded_to_this_item": "Uploaded to this template",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter templates list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Templates list navigation",
                    "items_list": "Templates list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Templates",
                    "name_admin_bar": "Template"
                },
                "name": "Templates",
                "slug": "wp_template",
                "icon": null,
                "supports": {
                    "title": true,
                    "slug": true,
                    "excerpt": true,
                    "editor": true,
                    "revisions": true,
                    "author": true
                },
                "taxonomies": [],
                "rest_base": "templates",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates"
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
            },
            "wp_template_part": {
                "capabilities": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_theme_options",
                    "edit_others_posts": "edit_theme_options",
                    "delete_posts": "edit_theme_options",
                    "publish_posts": "edit_theme_options",
                    "read_private_posts": "edit_theme_options",
                    "read": "edit_theme_options",
                    "delete_private_posts": "edit_theme_options",
                    "delete_published_posts": "edit_theme_options",
                    "delete_others_posts": "edit_theme_options",
                    "edit_private_posts": "edit_theme_options",
                    "edit_published_posts": "edit_theme_options",
                    "create_posts": "edit_theme_options"
                },
                "description": "Template parts to include in your templates.",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": false
                },
                "viewable": false,
                "labels": {
                    "name": "Template Parts",
                    "singular_name": "Template Part",
                    "add_new": "Add New Template Part",
                    "add_new_item": "Add New Template Part",
                    "edit_item": "Edit Template Part",
                    "new_item": "New Template Part",
                    "view_item": "View Template Part",
                    "view_items": "View Posts",
                    "search_items": "Search Template Parts",
                    "not_found": "No template parts found.",
                    "not_found_in_trash": "No template parts found in Trash.",
                    "parent_item_colon": "Parent Template Part:",
                    "all_items": "Template Parts",
                    "archives": "Template part archives",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into template part",
                    "uploaded_to_this_item": "Uploaded to this template part",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter template parts list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Template parts list navigation",
                    "items_list": "Template parts list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Template Parts",
                    "name_admin_bar": "Template Part"
                },
                "name": "Template Parts",
                "slug": "wp_template_part",
                "icon": null,
                "supports": {
                    "title": true,
                    "slug": true,
                    "excerpt": true,
                    "editor": true,
                    "revisions": true,
                    "author": true
                },
                "taxonomies": [],
                "rest_base": "template-parts",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/template-parts"
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
            },
            "wp_navigation": {
                "capabilities": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_theme_options",
                    "edit_others_posts": "edit_theme_options",
                    "delete_posts": "edit_theme_options",
                    "publish_posts": "edit_theme_options",
                    "read_private_posts": "edit_theme_options",
                    "read": "read",
                    "delete_private_posts": "edit_theme_options",
                    "delete_published_posts": "edit_theme_options",
                    "delete_others_posts": "edit_theme_options",
                    "edit_private_posts": "edit_theme_options",
                    "edit_published_posts": "edit_theme_options",
                    "create_posts": "edit_theme_options"
                },
                "description": "Navigation menus that can be inserted into your site.",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": true
                },
                "viewable": false,
                "labels": {
                    "name": "Navigation Menus",
                    "singular_name": "Navigation Menu",
                    "add_new": "Add New Navigation Menu",
                    "add_new_item": "Add New Navigation Menu",
                    "edit_item": "Edit Navigation Menu",
                    "new_item": "New Navigation Menu",
                    "view_item": "View Navigation Menu",
                    "view_items": "View Posts",
                    "search_items": "Search Navigation Menus",
                    "not_found": "No Navigation Menu found.",
                    "not_found_in_trash": "No Navigation Menu found in Trash.",
                    "parent_item_colon": "Parent Navigation Menu:",
                    "all_items": "Navigation Menus",
                    "archives": "Navigation Menu archives",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into Navigation Menu",
                    "uploaded_to_this_item": "Uploaded to this Navigation Menu",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter Navigation Menu list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Navigation Menus list navigation",
                    "items_list": "Navigation Menus list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Navigation Menus",
                    "name_admin_bar": "Navigation Menu"
                },
                "name": "Navigation Menus",
                "slug": "wp_navigation",
                "icon": null,
                "supports": {
                    "title": true,
                    "editor": true,
                    "revisions": true
                },
                "taxonomies": [],
                "rest_base": "navigation",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/navigation"
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
            },
            "wp_font_family": {
                "capabilities": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_theme_options",
                    "edit_others_posts": "edit_theme_options",
                    "delete_posts": "edit_theme_options",
                    "publish_posts": "edit_theme_options",
                    "read_private_posts": "edit_theme_options",
                    "read": "edit_theme_options",
                    "delete_private_posts": "delete_private_posts",
                    "delete_published_posts": "edit_theme_options",
                    "delete_others_posts": "edit_theme_options",
                    "edit_private_posts": "edit_private_posts",
                    "edit_published_posts": "edit_theme_options",
                    "create_posts": "edit_theme_options"
                },
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": false
                },
                "viewable": false,
                "labels": {
                    "name": "Font Families",
                    "singular_name": "Font Family",
                    "add_new": "Add New Post",
                    "add_new_item": "Add New Post",
                    "edit_item": "Edit Post",
                    "new_item": "New Post",
                    "view_item": "View Post",
                    "view_items": "View Posts",
                    "search_items": "Search Posts",
                    "not_found": "No posts found.",
                    "not_found_in_trash": "No posts found in Trash.",
                    "parent_item_colon": null,
                    "all_items": "Font Families",
                    "archives": "Font Families",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into post",
                    "uploaded_to_this_item": "Uploaded to this post",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter posts list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Posts list navigation",
                    "items_list": "Posts list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Font Families",
                    "name_admin_bar": "Font Family"
                },
                "name": "Font Families",
                "slug": "wp_font_family",
                "icon": null,
                "supports": {
                    "title": true,
                    "editor": true
                },
                "taxonomies": [],
                "rest_base": "font-families",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/font-families"
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
            },
            "wp_font_face": {
                "capabilities": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_theme_options",
                    "edit_others_posts": "edit_theme_options",
                    "delete_posts": "edit_theme_options",
                    "publish_posts": "edit_theme_options",
                    "read_private_posts": "edit_theme_options",
                    "read": "edit_theme_options",
                    "delete_private_posts": "delete_private_posts",
                    "delete_published_posts": "edit_theme_options",
                    "delete_others_posts": "edit_theme_options",
                    "edit_private_posts": "edit_private_posts",
                    "edit_published_posts": "edit_theme_options",
                    "create_posts": "edit_theme_options"
                },
                "description": "",
                "hierarchical": false,
                "has_archive": false,
                "visibility": {
                    "show_in_nav_menus": false,
                    "show_ui": false
                },
                "viewable": false,
                "labels": {
                    "name": "Font Faces",
                    "singular_name": "Font Face",
                    "add_new": "Add New Post",
                    "add_new_item": "Add New Post",
                    "edit_item": "Edit Post",
                    "new_item": "New Post",
                    "view_item": "View Post",
                    "view_items": "View Posts",
                    "search_items": "Search Posts",
                    "not_found": "No posts found.",
                    "not_found_in_trash": "No posts found in Trash.",
                    "parent_item_colon": null,
                    "all_items": "Font Faces",
                    "archives": "Font Faces",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into post",
                    "uploaded_to_this_item": "Uploaded to this post",
                    "featured_image": "Featured image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter posts list",
                    "filter_by_date": "Filter by date",
                    "items_list_navigation": "Posts list navigation",
                    "items_list": "Posts list",
                    "item_published": "Post published.",
                    "item_published_privately": "Post published privately.",
                    "item_reverted_to_draft": "Post reverted to draft.",
                    "item_trashed": "Post trashed.",
                    "item_scheduled": "Post scheduled.",
                    "item_updated": "Post updated.",
                    "item_link": "Post Link",
                    "item_link_description": "A link to a post.",
                    "menu_name": "Font Faces",
                    "name_admin_bar": "Font Face"
                },
                "name": "Font Faces",
                "slug": "wp_font_face",
                "icon": null,
                "supports": {
                    "title": true,
                    "editor": true
                },
                "taxonomies": [],
                "rest_base": "font-families\/(?P<font_family_id>[\\d]+)\/font-faces",
                "rest_namespace": "wp\/v2",
                "yoast_head": null,
                "yoast_head_json": null,
                "_links": {
                    "collection": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                        }
                    ],
                    "wp:items": [
                        {
                            "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/font-families\/(?P<font_family_id>[\\d]+)\/font-faces"
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
        }
    }

    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/templates/lookup", (request, response) => {
    const status = {
        "id": "twentytwentyfour\/\/page",
        "theme": "twentytwentyfour",
        "content": {
            "raw": "<!-- wp:template-part {\"slug\":\"header\",\"area\":\"header\",\"tagName\":\"header\",\"theme\":\"twentytwentyfour\"} \/-->\n\n<!-- wp:group {\"tagName\":\"main\"} -->\n<main class=\"wp-block-group\">\n\t<!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\n\t<div class=\"wp-block-group\">\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|50\"} -->\n\t\t<div style=\"height:var(--wp--preset--spacing--50)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:post-title {\"textAlign\":\"center\",\"level\":1} \/-->\n\n\t\t<!-- wp:spacer {\"height\":\"var:preset|spacing|30\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n\t\t<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\"\n\t\t\tclass=\"wp-block-spacer\"><\/div>\n\t\t<!-- \/wp:spacer -->\n\n\t\t<!-- wp:post-featured-image {\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"var:preset|spacing|40\"}}}} \/-->\n\t<\/div>\n\t<!-- \/wp:group -->\n\n\t<!-- wp:post-content {\"lock\":{\"move\":false,\"remove\":true},\"layout\":{\"type\":\"constrained\"}} \/-->\n<\/main>\n<!-- \/wp:group -->\n\n<!-- wp:template-part {\"slug\":\"footer\",\"area\":\"footer\",\"tagName\":\"footer\",\"theme\":\"twentytwentyfour\"} \/-->\n"
        },
        "slug": "page",
        "source": "theme",
        "origin": null,
        "type": "wp_template",
        "description": "Displays a static page unless a custom template has been applied to that page or a dedicated template exists.",
        "title": {
            "raw": "Pages",
            "rendered": "Pages"
        },
        "status": "publish",
        "wp_id": 0,
        "has_theme_file": true,
        "is_custom": false,
        "author": 0,
        "modified": false,
        "author_text": "Twenty Twenty-Four",
        "original_source": "theme",
        "_links": {
            "self": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates\/twentytwentyfour\/\/page"
                }
            ],
            "collection": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates"
                }
            ],
            "about": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types\/wp_template"
                }
            ],
            "wp:action-publish": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates\/twentytwentyfour\/\/page"
                }
            ],
            "wp:action-unfiltered-html": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/templates\/twentytwentyfour\/\/page"
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
    };
    
    response.send(status);
 });

 app.get("/wp-json/wp/v2/pages/155", (request, response) => {
    const status = {
        "id": 155,
        "date": "2024-03-31T15:15:40",
        "date_gmt": "2024-03-31T15:15:40",
        "guid": {
            "rendered": "https:\/\/wp.smokenetwork.nl\/?page_id=155",
            "raw": "https:\/\/wp.smokenetwork.nl\/?page_id=155"
        },
        "modified": "2024-03-31T15:15:42",
        "modified_gmt": "2024-03-31T15:15:42",
        "password": "",
        "slug": "home",
        "status": "publish",
        "type": "page",
        "link": "https:\/\/wp.smokenetwork.nl\/",
        "title": {
            "raw": "Home",
            "rendered": "Home"
        },
        "content": {
            "raw": "<!-- wp:group {\"metadata\":{\"categories\":[\"banner\",\"call-to-action\",\"featured\"]},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"\",\"wideSize\":\"\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"constrained\",\"contentSize\":\"565px\"}} -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":1,\"fontSize\":\"x-large\"} -->\n<h1 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">A commitment to innovation and sustainability<\/h1>\n<!-- \/wp:heading -->\n\n<!-- wp:spacer {\"height\":\"1.25rem\"} -->\n<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">\u00c9tudes is a pioneering firm that seamlessly merges creativity and functionality to redefine architectural excellence.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"1.25rem\"} -->\n<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link wp-element-button\">About us<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|30\",\"style\":{\"layout\":[]}} -->\n<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:image {\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"align\":\"wide\",\"className\":\"is-style-rounded\"} -->\n<figure class=\"wp-block-image alignwide size-full is-style-rounded\"><img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp\" alt=\"Building exterior in Toronto, Canada\"\/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"metadata\":{\"categories\":[\"text\",\"about\"]},\"align\":\"full\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"},\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"backgroundColor\":\"base-2\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull has-base-2-background-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"textAlign\":\"center\",\"className\":\"is-style-asterisk\"} -->\n<h2 class=\"wp-block-heading has-text-align-center is-style-asterisk\">A passion for creating spaces<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:spacer {\"height\":\"0px\",\"style\":{\"layout\":{\"flexSize\":\"1.25rem\",\"selfStretch\":\"fixed\"}}} -->\n<div style=\"height:0px\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|40\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}}} -->\n<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|40\"}}}} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n<div class=\"wp-block-column\"><!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Renovation and restoration<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n<div class=\"wp-block-column\"><!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Continuous Support<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n<div class=\"wp-block-column\"><!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">App Access<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|20\"} -->\n<div style=\"height:var(--wp--preset--spacing--20)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|30\",\"left\":\"var:preset|spacing|40\"}}}} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n<div class=\"wp-block-column\"><!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Consulting<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n<div class=\"wp-block-column\"><!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Project Management<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}}} -->\n<div class=\"wp-block-column\"><!-- wp:heading {\"textAlign\":\"left\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"className\":\"is-style-asterisk\",\"fontSize\":\"medium\",\"fontFamily\":\"body\"} -->\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Architectural Solutions<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"left\"} -->\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"metadata\":{\"categories\":[\"text\",\"about\"]},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|10\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"textAlign\":\"center\",\"className\":\"is-style-asterisk\"} -->\n<h2 class=\"wp-block-heading has-text-align-center is-style-asterisk\">An array of resources<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"layout\":{\"selfStretch\":\"fit\",\"flexSize\":null}}} -->\n<p class=\"has-text-align-center\">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|40\"} -->\n<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|60\"}}}} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"40%\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:40%\"><!-- wp:heading {\"level\":3,\"className\":\"is-style-asterisk\"} -->\n<h3 class=\"wp-block-heading is-style-asterisk\">\u00c9tudes Architect App<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:list {\"style\":{\"typography\":{\"lineHeight\":\"1.75\"}},\"className\":\"is-style-checkmark-list\"} -->\n<ul style=\"line-height:1.75\" class=\"is-style-checkmark-list\"><!-- wp:list-item -->\n<li>Collaborate with fellow architects.<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Showcase your projects.<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Experience the world of architecture.<\/li>\n<!-- \/wp:list-item --><\/ul>\n<!-- \/wp:list --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"width\":\"50%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n<figure class=\"wp-block-image size-large is-style-rounded\"><img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/tourist-and-building.webp\" alt=\"Tourist taking photo of a building\"\/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|40\"} -->\n<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:columns {\"align\":\"wide\",\"style\":{\"spacing\":{\"blockGap\":{\"top\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|60\"}}}} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"50%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-rounded\"} -->\n<figure class=\"wp-block-image size-large is-style-rounded\"><img src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/windows.webp\" alt=\"Windows of a building in Nuremberg, Germany\"\/><\/figure>\n<!-- \/wp:image --><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"40%\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:40%\"><!-- wp:heading {\"level\":3,\"className\":\"is-style-asterisk\"} -->\n<h3 class=\"wp-block-heading is-style-asterisk\">\u00c9tudes Newsletter<\/h3>\n<!-- \/wp:heading -->\n\n<!-- wp:list {\"style\":{\"typography\":{\"lineHeight\":\"1.75\"}},\"className\":\"is-style-checkmark-list\"} -->\n<ul style=\"line-height:1.75\" class=\"is-style-checkmark-list\"><!-- wp:list-item -->\n<li>A world of thought-provoking articles.<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Case studies that celebrate architecture.<\/li>\n<!-- \/wp:list-item -->\n\n<!-- wp:list-item -->\n<li>Exclusive access to design insights.<\/li>\n<!-- \/wp:list-item --><\/ul>\n<!-- \/wp:list --><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"metadata\":{\"name\":\"Testimonial\",\"categories\":[\"testimonials\",\"text\"]},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|60\",\"bottom\":\"var:preset|spacing|60\",\"left\":\"var:preset|spacing|60\",\"right\":\"var:preset|spacing|60\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"backgroundColor\":\"contrast\",\"textColor\":\"base\",\"layout\":{\"type\":\"constrained\",\"contentSize\":\"\"}} -->\n<div class=\"wp-block-group alignfull has-base-color has-contrast-background-color has-text-color has-background\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)\"><!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"lineHeight\":\"1.2\"}},\"textColor\":\"base\",\"fontSize\":\"x-large\",\"fontFamily\":\"heading\"} -->\n<p class=\"has-text-align-center has-base-color has-text-color has-heading-font-family has-x-large-font-size\" style=\"line-height:1.2\">\n\t\t\t<em>\u201c\u00c9tudes has saved us thousands of hours of work and has unlocked insights we never thought possible.\u201d<\/em>\n\t\t<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:group {\"metadata\":{\"name\":\"Testimonial source\"},\"style\":{\"spacing\":{\"blockGap\":\"0\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:image {\"width\":\"60px\",\"aspectRatio\":\"1\",\"scale\":\"cover\",\"sizeSlug\":\"thumbnail\",\"linkDestination\":\"none\",\"align\":\"center\",\"style\":{\"border\":{\"radius\":\"100px\"}}} -->\n<figure class=\"wp-block-image aligncenter size-thumbnail is-resized has-custom-border\"><img alt=\"\" style=\"border-radius:100px;aspect-ratio:1;object-fit:cover;width:60px\"\/><\/figure>\n<!-- \/wp:image -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"var:preset|spacing|10\",\"bottom\":\"0\"}}}} -->\n<p class=\"has-text-align-center\" style=\"margin-top:var(--wp--preset--spacing--10);margin-bottom:0\">Annie Steiner<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"300\"}},\"textColor\":\"contrast-3\",\"fontSize\":\"small\"} -->\n<p class=\"has-text-align-center has-contrast-3-color has-text-color has-small-font-size\" style=\"font-style:normal;font-weight:300\">CEO, Greenprint<\/p>\n<!-- \/wp:paragraph --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"metadata\":{\"categories\":[\"posts\",\"posts\"]},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:heading {\"align\":\"wide\",\"style\":{\"typography\":{\"lineHeight\":\"1\"},\"spacing\":{\"margin\":{\"top\":\"0\",\"bottom\":\"var:preset|spacing|40\"}}},\"fontSize\":\"x-large\"} -->\n<h2 class=\"wp-block-heading alignwide has-x-large-font-size\" style=\"margin-top:0;margin-bottom:var(--wp--preset--spacing--40);line-height:1\">Watch, Read, Listen<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignwide\"><!-- wp:query {\"queryId\":10,\"query\":{\"perPage\":3,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":true},\"align\":\"wide\",\"layout\":{\"type\":\"default\"}} -->\n<div class=\"wp-block-query alignwide\"><!-- wp:post-template -->\n<!-- wp:separator {\"backgroundColor\":\"contrast-3\",\"className\":\"alignwide is-style-wide\"} -->\n<hr class=\"wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background alignwide is-style-wide\"\/>\n<!-- \/wp:separator -->\n\n<!-- wp:columns {\"verticalAlignment\":\"center\",\"align\":\"wide\",\"style\":{\"spacing\":{\"margin\":{\"top\":\"var:preset|spacing|20\",\"bottom\":\"var:preset|spacing|20\"}}}} -->\n<div class=\"wp-block-columns alignwide are-vertically-aligned-center\" style=\"margin-top:var(--wp--preset--spacing--20);margin-bottom:var(--wp--preset--spacing--20)\"><!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"72%\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:72%\"><!-- wp:post-title {\"isLink\":true,\"style\":{\"typography\":{\"lineHeight\":\"1.1\",\"fontSize\":\"1.5rem\"}}} \/--><\/div>\n<!-- \/wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"28%\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:28%\"><!-- wp:template-part {\"slug\":\"post-meta\",\"theme\":\"twentytwentyfour\"} \/--><\/div>\n<!-- \/wp:column --><\/div>\n<!-- \/wp:columns -->\n<!-- \/wp:post-template -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|30\"} -->\n<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:query-pagination {\"paginationArrow\":\"arrow\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} -->\n<!-- wp:query-pagination-previous \/-->\n\n<!-- wp:query-pagination-numbers \/-->\n\n<!-- wp:query-pagination-next \/-->\n<!-- \/wp:query-pagination -->\n\n<!-- wp:query-no-results -->\n<!-- wp:paragraph {\"metadata\":{}} -->\n<p>No posts were found.<\/p>\n<!-- \/wp:paragraph -->\n<!-- \/wp:query-no-results --><\/div>\n<!-- \/wp:query --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->\n\n<!-- wp:group {\"metadata\":{\"categories\":[\"call-to-action\"]},\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|50\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}}},\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignfull\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:group {\"align\":\"wide\",\"style\":{\"border\":{\"radius\":\"16px\"},\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|40\",\"left\":\"var:preset|spacing|50\",\"right\":\"var:preset|spacing|50\"}}},\"backgroundColor\":\"base-2\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignwide has-base-2-background-color has-background\" style=\"border-radius:16px;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)\"><!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"fontSize\":\"x-large\"} -->\n<h2 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">Join 900+ subscribers<\/h2>\n<!-- \/wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Stay in the loop with everything you need to know.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->\n<div class=\"wp-block-buttons\"><!-- wp:button -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link wp-element-button\">Sign up<\/a><\/div>\n<!-- \/wp:button --><\/div>\n<!-- \/wp:buttons -->\n\n<!-- wp:spacer {\"height\":\"var:preset|spacing|10\"} -->\n<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<!-- \/wp:spacer --><\/div>\n<!-- \/wp:group --><\/div>\n<!-- \/wp:group -->",
            "rendered": "\n<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\" style=\"padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n<div class=\"wp-block-group has-global-padding is-layout-constrained wp-container-core-group-is-layout-1 wp-block-group-is-layout-constrained\">\n<h1 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">A commitment to innovation and sustainability<\/h1>\n\n\n\n<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<p class=\"has-text-align-center\">\u00c9tudes is a pioneering firm that seamlessly merges creativity and functionality to redefine architectural excellence.<\/p>\n\n\n\n<div style=\"height:1.25rem\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<div class=\"wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex\">\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link wp-element-button\">About us<\/a><\/div>\n<\/div>\n<\/div>\n\n\n\n<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<figure class=\"wp-block-image alignwide size-full is-style-rounded\"><img decoding=\"async\" src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp\" alt=\"Building exterior in Toronto, Canada\"\/><\/figure>\n<\/div>\n\n\n\n<div class=\"wp-block-group alignfull has-base-2-background-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n<div class=\"wp-block-group is-vertical is-content-justification-center is-layout-flex wp-container-core-group-is-layout-3 wp-block-group-is-layout-flex\">\n<h2 class=\"wp-block-heading has-text-align-center is-style-asterisk\">A passion for creating spaces<\/h2>\n\n\n\n<div style=\"height:0px\" aria-hidden=\"true\" class=\"wp-block-spacer wp-container-content-4\"><\/div>\n\n\n\n<p class=\"has-text-align-center\">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.<\/p>\n<\/div>\n\n\n\n<div style=\"margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<div class=\"wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-layout-flow wp-container-core-column-is-layout-1 wp-block-column-is-layout-flow\">\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Renovation and restoration<\/h3>\n\n\n\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<\/div>\n\n\n\n<div class=\"wp-block-column is-layout-flow wp-container-core-column-is-layout-2 wp-block-column-is-layout-flow\">\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Continuous Support<\/h3>\n\n\n\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<\/div>\n\n\n\n<div class=\"wp-block-column is-layout-flow wp-container-core-column-is-layout-3 wp-block-column-is-layout-flow\">\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">App Access<\/h3>\n\n\n\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<\/div>\n<\/div>\n\n\n\n<div style=\"height:var(--wp--preset--spacing--20)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<div class=\"wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-layout-flow wp-container-core-column-is-layout-4 wp-block-column-is-layout-flow\">\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Consulting<\/h3>\n\n\n\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<\/div>\n\n\n\n<div class=\"wp-block-column is-layout-flow wp-container-core-column-is-layout-5 wp-block-column-is-layout-flow\">\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Project Management<\/h3>\n\n\n\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<\/div>\n\n\n\n<div class=\"wp-block-column is-layout-flow wp-container-core-column-is-layout-6 wp-block-column-is-layout-flow\">\n<h3 class=\"wp-block-heading has-text-align-left is-style-asterisk has-body-font-family has-medium-font-size\" style=\"font-style:normal;font-weight:600\">Architectural Solutions<\/h3>\n\n\n\n<p class=\"has-text-align-left\">Experience the fusion of imagination and expertise with \u00c9tudes Architectural Solutions.<\/p>\n<\/div>\n<\/div>\n<\/div>\n\n\n\n<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n<div class=\"wp-block-group alignwide has-global-padding is-layout-constrained wp-container-core-group-is-layout-6 wp-block-group-is-layout-constrained\">\n<div class=\"wp-block-group is-vertical is-content-justification-center is-layout-flex wp-container-core-group-is-layout-5 wp-block-group-is-layout-flex\">\n<h2 class=\"wp-block-heading has-text-align-center is-style-asterisk\">An array of resources<\/h2>\n\n\n\n<p class=\"has-text-align-center\">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.<\/p>\n<\/div>\n\n\n\n<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<div class=\"wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow\" style=\"flex-basis:40%\">\n<h3 class=\"wp-block-heading is-style-asterisk\">\u00c9tudes Architect App<\/h3>\n\n\n\n<ul style=\"line-height:1.75\" class=\"is-style-checkmark-list\">\n<li>Collaborate with fellow architects.<\/li>\n\n\n\n<li>Showcase your projects.<\/li>\n\n\n\n<li>Experience the world of architecture.<\/li>\n<\/ul>\n<\/div>\n\n\n\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\" style=\"flex-basis:50%\">\n<figure class=\"wp-block-image size-large is-style-rounded\"><img decoding=\"async\" src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/tourist-and-building.webp\" alt=\"Tourist taking photo of a building\"\/><\/figure>\n<\/div>\n<\/div>\n\n\n\n<div style=\"height:var(--wp--preset--spacing--40)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<div class=\"wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\" style=\"flex-basis:50%\">\n<figure class=\"wp-block-image size-large is-style-rounded\"><img decoding=\"async\" src=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/windows.webp\" alt=\"Windows of a building in Nuremberg, Germany\"\/><\/figure>\n<\/div>\n\n\n\n<div class=\"wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow\" style=\"flex-basis:40%\">\n<h3 class=\"wp-block-heading is-style-asterisk\">\u00c9tudes Newsletter<\/h3>\n\n\n\n<ul style=\"line-height:1.75\" class=\"is-style-checkmark-list\">\n<li>A world of thought-provoking articles.<\/li>\n\n\n\n<li>Case studies that celebrate architecture.<\/li>\n\n\n\n<li>Exclusive access to design insights.<\/li>\n<\/ul>\n<\/div>\n<\/div>\n<\/div>\n<\/div>\n\n\n\n<div class=\"wp-block-group alignfull has-base-color has-contrast-background-color has-text-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)\">\n<div class=\"wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\">\n<p class=\"has-text-align-center has-base-color has-text-color has-heading-font-family has-x-large-font-size\" style=\"line-height:1.2\">\n\t\t\t<em>\u201c\u00c9tudes has saved us thousands of hours of work and has unlocked insights we never thought possible.\u201d<\/em>\n\t\t<\/p>\n\n\n\n<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<div class=\"wp-block-group is-vertical is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-is-layout-8 wp-block-group-is-layout-flex\">\n\n\n<p class=\"has-text-align-center\" style=\"margin-top:var(--wp--preset--spacing--10);margin-bottom:0\">Annie Steiner<\/p>\n\n\n\n<p class=\"has-text-align-center has-contrast-3-color has-text-color has-small-font-size\" style=\"font-style:normal;font-weight:300\">CEO, Greenprint<\/p>\n<\/div>\n<\/div>\n<\/div>\n\n\n\n<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n<h2 class=\"wp-block-heading alignwide has-x-large-font-size\" style=\"margin-top:0;margin-bottom:var(--wp--preset--spacing--40);line-height:1\">Watch, Read, Listen<\/h2>\n\n\n\n<div class=\"wp-block-group alignwide has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\">\n<div class=\"wp-block-query alignwide is-layout-flow wp-block-query-is-layout-flow\">\n\n\n<div style=\"height:var(--wp--preset--spacing--30)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n\n<div class=\"wp-block-query-no-results\">\n\n<p>No posts were found.<\/p>\n\n<\/div><\/div>\n<\/div>\n<\/div>\n\n\n\n<div class=\"wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\" style=\"margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)\">\n<div class=\"wp-block-group alignwide has-base-2-background-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained\" style=\"border-radius:16px;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)\">\n<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n\n\n\n<h2 class=\"wp-block-heading has-text-align-center has-x-large-font-size\">Join 900+ subscribers<\/h2>\n\n\n\n<p class=\"has-text-align-center\">Stay in the loop with everything you need to know.<\/p>\n\n\n\n<div class=\"wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-2 wp-block-buttons-is-layout-flex\">\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link wp-element-button\">Sign up<\/a><\/div>\n<\/div>\n\n\n\n<div style=\"height:var(--wp--preset--spacing--10)\" aria-hidden=\"true\" class=\"wp-block-spacer\"><\/div>\n<\/div>\n<\/div>\n",
            "protected": false,
            "block_version": 1
        },
        "excerpt": {
            "raw": "",
            "rendered": "<p>A commitment to innovation and sustainability \u00c9tudes is a pioneering firm that seamlessly merges creativity and functionality to redefine architectural excellence. A passion for creating spaces Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers. Renovation and restoration Experience the fusion of imagination and expertise with \u00c9tudes [&hellip;]<\/p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 0,
        "parent": 0,
        "menu_order": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "template": "",
        "meta": {
            "footnotes": ""
        },
        "permalink_template": "https:\/\/wp.smokenetwork.nl\/",
        "generated_slug": "home",
        "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v22.4 - https:\/\/yoast.com\/wordpress\/plugins\/seo\/ -->\n<title>Home - Test<\/title>\n<!-- Admin only notice: this page does not show a meta description because it does not have one, either write it for this page specifically or go into the [Yoast SEO - Settings] menu and set up a template. -->\n<meta name=\"robots\" content=\"noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" \/>\n<meta property=\"og:locale\" content=\"en_US\" \/>\n<meta property=\"og:type\" content=\"article\" \/>\n<meta property=\"og:title\" content=\"Home - Test\" \/>\n<meta property=\"og:description\" content=\"A commitment to innovation and sustainability \u00c9tudes is a pioneering firm that seamlessly merges creativity and functionality to redefine architectural excellence. A passion for creating spaces Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers. Renovation and restoration Experience the fusion of imagination and expertise with \u00c9tudes [&hellip;]\" \/>\n<meta property=\"og:url\" content=\"https:\/\/wp.smokenetwork.nl\/\" \/>\n<meta property=\"og:site_name\" content=\"Test\" \/>\n<meta property=\"article:modified_time\" content=\"2024-03-31T15:15:42+00:00\" \/>\n<meta property=\"og:image\" content=\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp\" \/>\n<meta name=\"twitter:card\" content=\"summary_large_image\" \/>\n<meta name=\"twitter:label1\" content=\"Est. reading time\" \/>\n\t<meta name=\"twitter:data1\" content=\"2 minutes\" \/>\n<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https:\/\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/\",\"url\":\"https:\/\/wp.smokenetwork.nl\/\",\"name\":\"Home - Test\",\"isPartOf\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#primaryimage\"},\"image\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#primaryimage\"},\"thumbnailUrl\":\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp\",\"datePublished\":\"2024-03-31T15:15:40+00:00\",\"dateModified\":\"2024-03-31T15:15:42+00:00\",\"breadcrumb\":{\"@id\":\"https:\/\/wp.smokenetwork.nl\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\/\/wp.smokenetwork.nl\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/#primaryimage\",\"url\":\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp\",\"contentUrl\":\"https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\/\/wp.smokenetwork.nl\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\/\/wp.smokenetwork.nl\/#website\",\"url\":\"https:\/\/wp.smokenetwork.nl\/\",\"name\":\"Test\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\/\/wp.smokenetwork.nl\/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"}]}<\/script>\n<!-- \/ Yoast SEO plugin. -->",
        "yoast_head_json": {
            "title": "Home - Test",
            "robots": {
                "index": "noindex",
                "follow": "follow",
                "max-snippet": "max-snippet:-1",
                "max-image-preview": "max-image-preview:large",
                "max-video-preview": "max-video-preview:-1"
            },
            "og_locale": "en_US",
            "og_type": "article",
            "og_title": "Home - Test",
            "og_description": "A commitment to innovation and sustainability \u00c9tudes is a pioneering firm that seamlessly merges creativity and functionality to redefine architectural excellence. A passion for creating spaces Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers. Renovation and restoration Experience the fusion of imagination and expertise with \u00c9tudes [&hellip;]",
            "og_url": "https:\/\/wp.smokenetwork.nl\/",
            "og_site_name": "Test",
            "article_modified_time": "2024-03-31T15:15:42+00:00",
            "og_image": [
                {
                    "url": "https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp"
                }
            ],
            "twitter_card": "summary_large_image",
            "twitter_misc": {
                "Est. reading time": "2 minutes"
            },
            "schema": {
                "@context": "https:\/\/schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https:\/\/wp.smokenetwork.nl\/",
                        "url": "https:\/\/wp.smokenetwork.nl\/",
                        "name": "Home - Test",
                        "isPartOf": {
                            "@id": "https:\/\/wp.smokenetwork.nl\/#website"
                        },
                        "primaryImageOfPage": {
                            "@id": "https:\/\/wp.smokenetwork.nl\/#primaryimage"
                        },
                        "image": {
                            "@id": "https:\/\/wp.smokenetwork.nl\/#primaryimage"
                        },
                        "thumbnailUrl": "https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp",
                        "datePublished": "2024-03-31T15:15:40+00:00",
                        "dateModified": "2024-03-31T15:15:42+00:00",
                        "breadcrumb": {
                            "@id": "https:\/\/wp.smokenetwork.nl\/#breadcrumb"
                        },
                        "inLanguage": "en-US",
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": [
                                    "https:\/\/wp.smokenetwork.nl\/"
                                ]
                            }
                        ]
                    },
                    {
                        "@type": "ImageObject",
                        "inLanguage": "en-US",
                        "@id": "https:\/\/wp.smokenetwork.nl\/#primaryimage",
                        "url": "https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp",
                        "contentUrl": "https:\/\/wp.smokenetwork.nl\/wp-content\/themes\/twentytwentyfour\/assets\/images\/building-exterior.webp"
                    },
                    {
                        "@type": "BreadcrumbList",
                        "@id": "https:\/\/wp.smokenetwork.nl\/#breadcrumb",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https:\/\/wp.smokenetwork.nl\/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Home"
                            }
                        ]
                    },
                    {
                        "@type": "WebSite",
                        "@id": "https:\/\/wp.smokenetwork.nl\/#website",
                        "url": "https:\/\/wp.smokenetwork.nl\/",
                        "name": "Test",
                        "description": "",
                        "potentialAction": [
                            {
                                "@type": "SearchAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https:\/\/wp.smokenetwork.nl\/?s={search_term_string}"
                                },
                                "query-input": "required name=search_term_string"
                            }
                        ],
                        "inLanguage": "en-US"
                    }
                ]
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/155"
                }
            ],
            "collection": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages"
                }
            ],
            "about": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types\/page"
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
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/comments?post=155"
                }
            ],
            "version-history": [
                {
                    "count": 1,
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/155\/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 156,
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/155\/revisions\/156"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/media?parent=155"
                }
            ],
            "wp:action-publish": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/155"
                }
            ],
            "wp:action-unfiltered-html": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/155"
                }
            ],
            "wp:action-assign-author": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages\/155"
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
    };
    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/blocks", (request, response) => {
    const status = [];
    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/block-patterns/categories", (request, response) => {
    const status = [
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
            "name": "videos",
            "label": "Videos",
            "description": "Different layouts containing videos."
        },
        {
            "name": "audio",
            "label": "Audio",
            "description": "Different layouts containing audio."
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
            "name": "twentytwentyfour_page",
            "label": "Pages",
            "description": "A collection of full page layouts."
        }
    ];
    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/types/page", (request, response) => {
    const status = {
        "capabilities": {
            "edit_post": "edit_page",
            "read_post": "read_page",
            "delete_post": "delete_page",
            "edit_posts": "edit_pages",
            "edit_others_posts": "edit_others_pages",
            "delete_posts": "delete_pages",
            "publish_posts": "publish_pages",
            "read_private_posts": "read_private_pages",
            "read": "read",
            "delete_private_posts": "delete_private_pages",
            "delete_published_posts": "delete_published_pages",
            "delete_others_posts": "delete_others_pages",
            "edit_private_posts": "edit_private_pages",
            "edit_published_posts": "edit_published_pages",
            "create_posts": "edit_pages"
        },
        "description": "",
        "hierarchical": true,
        "has_archive": false,
        "visibility": {
            "show_in_nav_menus": true,
            "show_ui": true
        },
        "viewable": true,
        "labels": {
            "name": "Pages",
            "singular_name": "Page",
            "add_new": "Add New Page",
            "add_new_item": "Add New Page",
            "edit_item": "Edit Page",
            "new_item": "New Page",
            "view_item": "View Page",
            "view_items": "View Pages",
            "search_items": "Search Pages",
            "not_found": "No pages found.",
            "not_found_in_trash": "No pages found in Trash.",
            "parent_item_colon": "Parent Page:",
            "all_items": "All Pages",
            "archives": "Page Archives",
            "attributes": "Page Attributes",
            "insert_into_item": "Insert into page",
            "uploaded_to_this_item": "Uploaded to this page",
            "featured_image": "Featured image",
            "set_featured_image": "Set featured image",
            "remove_featured_image": "Remove featured image",
            "use_featured_image": "Use as featured image",
            "filter_items_list": "Filter pages list",
            "filter_by_date": "Filter by date",
            "items_list_navigation": "Pages list navigation",
            "items_list": "Pages list",
            "item_published": "Page published.",
            "item_published_privately": "Page published privately.",
            "item_reverted_to_draft": "Page reverted to draft.",
            "item_trashed": "Page trashed.",
            "item_scheduled": "Page scheduled.",
            "item_updated": "Page updated.",
            "item_link": "Page Link",
            "item_link_description": "A link to a page.",
            "menu_name": "Pages",
            "name_admin_bar": "Page"
        },
        "name": "Pages",
        "slug": "page",
        "icon": "dashicons-admin-page",
        "supports": {
            "title": true,
            "editor": true,
            "author": true,
            "thumbnail": true,
            "page-attributes": true,
            "custom-fields": true,
            "comments": true,
            "revisions": true
        },
        "taxonomies": [],
        "rest_base": "pages",
        "rest_namespace": "wp\/v2",
        "yoast_head": null,
        "yoast_head_json": null,
        "_links": {
            "collection": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types"
                }
            ],
            "wp:items": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/pages"
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
    };
    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/taxonomies", (request, response) => {
    const status = {
        "category": {
            "name": "Categories",
            "slug": "category",
            "description": "",
            "types": [
                "post"
            ],
            "hierarchical": true,
            "rest_base": "categories",
            "rest_namespace": "wp\/v2",
            "_links": {
                "collection": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/taxonomies"
                    }
                ],
                "wp:items": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/categories"
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
        },
        "post_tag": {
            "name": "Tags",
            "slug": "post_tag",
            "description": "",
            "types": [
                "post"
            ],
            "hierarchical": false,
            "rest_base": "tags",
            "rest_namespace": "wp\/v2",
            "_links": {
                "collection": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/taxonomies"
                    }
                ],
                "wp:items": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/tags"
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
        },
        "nav_menu": {
            "name": "Navigation Menus",
            "slug": "nav_menu",
            "description": "",
            "types": [
                "nav_menu_item"
            ],
            "hierarchical": false,
            "rest_base": "menus",
            "rest_namespace": "wp\/v2",
            "_links": {
                "collection": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/taxonomies"
                    }
                ],
                "wp:items": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/menus"
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
        },
        "wp_pattern_category": {
            "name": "Pattern Categories",
            "slug": "wp_pattern_category",
            "description": "",
            "types": [
                "wp_block"
            ],
            "hierarchical": false,
            "rest_base": "wp_pattern_category",
            "rest_namespace": "wp\/v2",
            "_links": {
                "collection": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/taxonomies"
                    }
                ],
                "wp:items": [
                    {
                        "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/wp_pattern_category"
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
    };
    
    response.send(status);
 });




 app.get("/wp-json/wp/v2/block-patterns/patterns", (request, response) => {
    const status = [
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
                "twentytwentyfour_page"
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
                "twentytwentyfour_page"
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
                "twentytwentyfour_page"
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
                "twentytwentyfour_page"
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
                "twentytwentyfour_page"
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
                "twentytwentyfour_page",
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
                "twentytwentyfour_page",
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
                "twentytwentyfour_page"
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
    ];
    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/template-parts/twentytwentyfour//header", (request, response) => {
    const status = {
        "id": "twentytwentyfour\/\/header",
        "theme": "twentytwentyfour",
        "content": {
            "raw": "<!-- wp:group {\"align\":\"wide\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"20px\",\"bottom\":\"20px\"}}},\"backgroundColor\":\"base\",\"layout\":{\"type\":\"constrained\"}} -->\n<div class=\"wp-block-group alignwide has-base-background-color has-background\"\n\tstyle=\"padding-top:20px;padding-bottom:20px\">\n\t<!-- wp:group {\"align\":\"wide\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\",\"flexWrap\":\"wrap\"}} -->\n\t<div class=\"wp-block-group alignwide\">\n\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|20\"},\"layout\":{\"selfStretch\":\"fit\",\"flexSize\":null}},\"layout\":{\"type\":\"flex\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:site-logo {\"width\":60} \/-->\n\n\t\t\t<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}}} -->\n\t\t\t<div class=\"wp-block-group\">\n\t\t\t\t<!-- wp:site-title {\"level\":0} \/-->\n\t\t\t<\/div>\n\t\t\t<!-- \/wp:group -->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\n\t\t<!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"justifyContent\":\"left\"}} -->\n\t\t<div class=\"wp-block-group\">\n\t\t\t<!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"right\",\"orientation\":\"horizontal\"},\"style\":{\"spacing\":{\"margin\":{\"top\":\"0\"},\"blockGap\":\"var:preset|spacing|20\"},\"layout\":{\"selfStretch\":\"fit\",\"flexSize\":null}}} \/-->\n\t\t<\/div>\n\t\t<!-- \/wp:group -->\n\t<\/div>\n\t<!-- \/wp:group -->\n<\/div>\n<!-- \/wp:group -->",
            "block_version": 1
        },
        "slug": "header",
        "source": "theme",
        "origin": null,
        "type": "wp_template_part",
        "description": "",
        "title": {
            "raw": "Header",
            "rendered": "Header"
        },
        "status": "publish",
        "wp_id": 0,
        "has_theme_file": true,
        "author": 0,
        "area": "header",
        "modified": false,
        "author_text": "Twenty Twenty-Four",
        "original_source": "theme",
        "_links": {
            "self": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/template-parts\/twentytwentyfour\/\/header"
                }
            ],
            "collection": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/template-parts"
                }
            ],
            "about": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/types\/wp_template_part"
                }
            ],
            "wp:action-publish": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/template-parts\/twentytwentyfour\/\/header"
                }
            ],
            "wp:action-unfiltered-html": [
                {
                    "href": "https:\/\/wp.smokenetwork.nl\/wp-json\/wp\/v2\/template-parts\/twentytwentyfour\/\/header"
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
    };
    
    response.send(status);
 });



 app.get("/wp-json/wp/v2/menus", (request, response) => {
    const status = [];
    
    response.send(status);
 });

 app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });


app.get("/wp-json", (request, response) => {
    const status = {
        "name": "Test",
        "description": "",
        "url": "https:\/\/wp.smokenetwork.nl",
        "home": "https:\/\/wp.smokenetwork.nl",
        "gmt_offset": "0",
        "timezone_string": "",
        "site_logo": 0,
        "site_icon": 0,
        "site_icon_url": ""
    };
    
    response.send(status);
 });
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });