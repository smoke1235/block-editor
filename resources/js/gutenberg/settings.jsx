
import apiFetch from '../api/api-fetch'
import myApiFetch from '../api/myapi-fetch'

window.userSettings = {
  secure: '',
  time: 1234567,
  uid: 1
}

// set your root path
window.wpApiSettings = {
  root: window.location.origin + '/wp-json/',
  nonce: '1234567890',
  versionString: 'wp/v2'
}

// postboxes
window.postboxes = window.postboxes || {
  add_postbox_toggles: (page, args) => {
    //
  }
}

//window.wp.url = { ...window.wp.url, addQueryArgs }

const {
  use,
  createRootURLMiddleware,
  setFetchHandler
} = window.wp.apiFetch

//use(createRootURLMiddleware(window.wpApiSettings.root))
//wp.apiFetch.use(myApiFetch)

// Some editor settings
export const editorSettings = {
  alignWide: false, //
  availableTemplates: [], //?
  allowedBlockTypes: true, //
  disableCustomColors: false, //
  disableCustomFontSizes: false, //
  disableCustomGradients: false, //
  disableLayoutStyles: false, //
  enableCustomLineHeight: true, //
  enableCustomSpacing: true, //
  enableCustomUnits: ["%", "px", "em", "rem", "vh", "vw"], //
  disablePostFormats: true, //
  titlePlaceholder: 'Add title', //
  bodyPlaceholder: 'Write your story', //
  richEditingEnabled: true, //
  isRTL: false, //
  postLock: { //
    isLocked: false
  },
  autosaveInterval: 9999, //
  supportsLayout: true, //
  supportsTemplateMode: true, //
  enableCustomFields: false, //
  disableCustomSpacingSizes: false, //

  imageDefaultSize: "large",
    imageDimensions: {
      thumbnail: {
          width: 150,
          height: 150,
          crop: true
      },
      medium: {
          width: 300,
          height: 300,
          crop: false
      },
      large: {
          width: 1024,
          height: 1024,
          crop: false
      }
  },
  imageEditing: true,
  imageSizes: [{
      slug: "thumbnail",
      name: "Thumbnail"
  }, {
      slug: "medium",
      name: "Medium"
  }, {
      slug: "large",
      name: "Large"
  }, {
      slug: "full",
      name: "Full Size"
  }],
  maxUploadFileSize: 67108864,
  __unstableGalleryWithImageBlocks: true,

  allowedMimeTypes: {
      "jpg|jpeg|jpe": "image\\/jpeg",
      gif: "image\\/gif",
      png: "image\\/png",
      bmp: "image\\/bmp",
      "tiff|tif": "image\\/tiff",
      webp: "image\\/webp",
      ico: "image\\/x-icon",
      heic: "image\\/heic",
      "asf|asx": "video\\/x-ms-asf",
      wmv: "video\\/x-ms-wmv",
      wmx: "video\\/x-ms-wmx",
      wm: "video\\/x-ms-wm",
      avi: "video\\/avi",
      divx: "video\\/divx",
      flv: "video\\/x-flv",
      "mov|qt": "video\\/quicktime",
      "mpeg|mpg|mpe": "video\\/mpeg",
      "mp4|m4v": "video\\/mp4",
      ogv: "video\\/ogg",
      webm: "video\\/webm",
      mkv: "video\\/x-matroska",
      "3gp|3gpp": "video\\/3gpp",
      "3g2|3gp2": "video\\/3gpp2",
      "txt|asc|c|cc|h|srt": "text\\/plain",
      csv: "text\\/csv",
      tsv: "text\\/tab-separated-values",
      ics: "text\\/calendar",
      rtx: "text\\/richtext",
      css: "text\\/css",
      "htm|html": "text\\/html",
      vtt: "text\\/vtt",
      dfxp: "application\\/ttaf+xml",
      "mp3|m4a|m4b": "audio\\/mpeg",
      aac: "audio\\/aac",
      "ra|ram": "audio\\/x-realaudio",
      wav: "audio\\/wav",
      "ogg|oga": "audio\\/ogg",
      flac: "audio\\/flac",
      "mid|midi": "audio\\/midi",
      wma: "audio\\/x-ms-wma",
      wax: "audio\\/x-ms-wax",
      mka: "audio\\/x-matroska",
      rtf: "application\\/rtf",
      js: "application\\/javascript",
      pdf: "application\\/pdf",
      class: "application\\/java",
      tar: "application\\/x-tar",
      zip: "application\\/zip",
      "gz|gzip": "application\\/x-gzip",
      rar: "application\\/rar",
      "7z": "application\\/x-7z-compressed",
      psd: "application\\/octet-stream",
      xcf: "application\\/octet-stream",
      doc: "application\\/msword",
      "pot|pps|ppt": "application\\/vnd.ms-powerpoint",
      wri: "application\\/vnd.ms-write",
      "xla|xls|xlt|xlw": "application\\/vnd.ms-excel",
      mdb: "application\\/vnd.ms-access",
      mpp: "application\\/vnd.ms-project",
      docx: "application\\/vnd.openxmlformats-officedocument.wordprocessingml.document",
      docm: "application\\/vnd.ms-word.document.macroEnabled.12",
      dotx: "application\\/vnd.openxmlformats-officedocument.wordprocessingml.template",
      dotm: "application\\/vnd.ms-word.template.macroEnabled.12",
      xlsx: "application\\/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      xlsm: "application\\/vnd.ms-excel.sheet.macroEnabled.12",
      xlsb: "application\\/vnd.ms-excel.sheet.binary.macroEnabled.12",
      xltx: "application\\/vnd.openxmlformats-officedocument.spreadsheetml.template",
      xltm: "application\\/vnd.ms-excel.template.macroEnabled.12",
      xlam: "application\\/vnd.ms-excel.addin.macroEnabled.12",
      pptx: "application\\/vnd.openxmlformats-officedocument.presentationml.presentation",
      pptm: "application\\/vnd.ms-powerpoint.presentation.macroEnabled.12",
      ppsx: "application\\/vnd.openxmlformats-officedocument.presentationml.slideshow",
      ppsm: "application\\/vnd.ms-powerpoint.slideshow.macroEnabled.12",
      potx: "application\\/vnd.openxmlformats-officedocument.presentationml.template",
      potm: "application\\/vnd.ms-powerpoint.template.macroEnabled.12",
      ppam: "application\\/vnd.ms-powerpoint.addin.macroEnabled.12",
      sldx: "application\\/vnd.openxmlformats-officedocument.presentationml.slide",
      sldm: "application\\/vnd.ms-powerpoint.slide.macroEnabled.12",
      "onetoc|onetoc2|onetmp|onepkg": "application\\/onenote",
      oxps: "application\\/oxps",
      xps: "application\\/vnd.ms-xpsdocument",
      odt: "application\\/vnd.oasis.opendocument.text",
      odp: "application\\/vnd.oasis.opendocument.presentation",
      ods: "application\\/vnd.oasis.opendocument.spreadsheet",
      odg: "application\\/vnd.oasis.opendocument.graphics",
      odc: "application\\/vnd.oasis.opendocument.chart",
      odb: "application\\/vnd.oasis.opendocument.database",
      odf: "application\\/vnd.oasis.opendocument.formula",
      "wp|wpd": "application\\/wordperfect",
      key: "application\\/vnd.apple.keynote",
      numbers: "application\\/vnd.apple.numbers",
      pages: "application\\/vnd.apple.pages"
    },
    
      blockCategories: [
        {
          slug: "text",
          title: "Text",
          icon: null
        },
        {
          slug: "media",
          title: "Media",
          icon: null
        },
        {
          slug: "design",
          title: "Design",
          icon: null
        },
        {
          slug: "widgets",
          title: "Widgets",
          icon: null
        },
        {
          slug: "theme",
          title: "Theme",
          icon: null
        },
        {
          slug: "embed",
          title: "Embeds",
          icon: null
        },
        {
          slug: "reusable",
          title: "Patterns",
          icon: null
        }
      ],

  __experimentalAdditionalBlockPatterns: [],
  __experimentalAdditionalBlockPatternCategories: [],
  
    spacingSizes: [
      {
        name: "1",
        size: "1rem",
        slug: "10"
      },
      {
        name: "2",
        size: "min(1.5rem, 2vw)",
        slug: "20"
      },
      {
        name: "3",
        size: "min(2.5rem, 3vw)",
        slug: "30"
      },
      {
        name: "4",
        size: "min(4rem, 5vw)",
        slug: "40"
      },
      {
        name: "5",
        size: "min(6.5rem, 8vw)",
        slug: "50"
      },
      {
        name: "6",
        size: "min(10.5rem, 13vw)",
        slug: "60"
      }
    ],

    __unstableIsBlockBasedTheme: true,
  localAutosaveInterval: 15,
  
    
}

// Post properties to override
export const overridePost = {}


export function mergeDeep(...objects) {
	const isObject = obj => obj && typeof obj === 'object';
  
	return objects.reduce((prev, obj) => {
	  Object.keys(obj).forEach(key => {
		const pVal = prev[key];
		const oVal = obj[key];
  
		if (Array.isArray(pVal) && Array.isArray(oVal)) {
		  prev[key] = pVal.concat(...oVal);
		} else if (isObject(pVal) && isObject(oVal)) {
		  prev[key] = mergeDeep(pVal, oVal);
		} else {
		  prev[key] = oVal;
		}
	  });
  
	  return prev;
	}, {});
  }
