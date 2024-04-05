import * as MockData from './mock-data'
import axios from 'axios'
import { editorSettings } from '../gutenberg/settings'
import * as Notices from '../lib/notices'

axios.defaults.baseURL = `http://localhost:5173/`

let routePrefix = "laraberg";
let searchCb

/**
 * Requests Gutenberg can make.
 * Each request has a method and a regex to match with the URL provided by Gutenberg.
 * When the matchPath() function matches Gutenberg's request with one of the requests in this object
 * the 'run' function gets executed.
 */
const requests = {
  
  
  optionsBlocks: {
    method: 'OPTIONS',
    regex: /\/wp\/v2\/blocks.*/g,
    run: optionsBlocks
  },
 
  optionsMedia: {
    method: 'OPTIONS',
    regex: /\/wp\/v2\/media/g,
    run: optionsMedia
  },
  
 
  
 
 

 

  optionTemplate: {
	method: 'OPTIONS',
    regex: /\/wp\/v2\/templates/g,
    run: optionsTemplates
  },

  optionSettings: {
	method: 'OPTIONS',
    regex: /\/wp\/v2\/settings/g,
    run: optionSettings
  },

  

  optionPages: {
	method: 'OPTIONS',
    regex: /\/wp\/v2\/pages/g,
    run: optionPages
  },


 

  



 
}


async function getGlobalStylesThemeTemplateVariations() {
  return [];
}


async function getMedia() {
  
}


async function getTaxonomiesCategory() {
	//return MockData.taxonomiesCategory;
}

async function getTaxonomiesPostTag() {
	//return MockData.taxonomiesPostTag;
}


async function getSettings() {
	// TODO:: AJAX CALL
	//const response = await axios.get(`/${routePrefix}/settings/`);
	//return response.data;
	return MockData.settings;
}

async function optionPages() {
	return {
		headers: {
			get: value => {
				if (value === 'allow') {
					return ['GET', 'POST']
				}
			}
		}
	}
}


async function optionSettings() {
	return {
		headers: {
			get: value => {
				if (value === 'allow') {
					return ['GET', 'POST', 'PUT', 'PATCH']
				}
			}
		}
	}
}


async function optionsTemplates() {
	return {
		headers: {
			get: value => {
				if (value === 'allow') {
					return ['GET', 'POST']
				}
			}
		}
	}
}

async function GetPost(options, matches) {
	console.log(options);
	//const response = await axios.get(`${routePrefix}/getPost/${id}`)
	return MockData.post;
}


async function PostPage(options, matches) {
  console.log(options);
  console.log(matches);
	// TODO::Make AJAX
	const response = await axios.post(`/${routePrefix}/postPage/`, matches)
	return response
	//return false;
}

async function fields() {
  //return MockData.fields;
}

async function usersView() {
  return [{"id":1,"name":"peter"}];
}

async function blockPatterns() {
	const response = await axios.get(`/${routePrefix}/block-patterns/patterns/`);
	return response.data;
  //return MockData.blockPatterns;
}


async function blockPatternsCategories() {
	//return MockData.blockPatternsCategories;
  const response = await axios.get(`/${routePrefix}/block-patterns/categories/`);
	return response.data;
}


async function getAutosaves () {
  return []
}

/**
 * Get a reusable block
 * @param {Object} options
 * @param {Array} matches
 */
async function getBlock (options, matches) {
  // Because of a bug an OPTIONS request to specific resources (by ID) are sent as GET requests
  // those requests contain a parse property that is set to false
  if (options.parse === false) {
    return {
      headers: {
        get: value => {
          if (value === 'allow') {
            return ['GET', 'POST', 'PUT', 'DELETE']
          }
        }
      }
    }
  } else {
    const id = matches[1]
    const response = await axios.get(`/${routePrefix}/blocks/${id}`)
    return response.data
  }
}

/**ex
 * Get all reusable blocks
 */
async function getBlocks () {
  //return [];
  const response = await axios.get(`/${routePrefix}/blocks`)
  return response.data
}

/**
 * Create a reusable block
 * @param {Object} options
 */
async function postBlocks (options) {
  const response = await axios.post(`${routePrefix}/blocks`, options.data)
  return response.data
}

/**
 * Update a reusable block
 * @param {Object} options
 * @param {Array} matches
 */
async function putBlock (options, matches) {
  const id = matches[1]
  const response = await axios.put(`${routePrefix}/blocks/${id}`, options.data)
  return response.data
}

/**
 * Delete a reusable block
 * @param {Object} options
 * @param {Array} matches
 */
async function deleteBlock (options, matches) {
  const id = matches[1]
  const response = await axios.delete(`${routePrefix}/blocks/${id}`)
  return response.data
}

/**
 * Options request for blocks
 * @param {Object} options
 * @param {Array} matches
 */
async function optionsBlocks (options, matches) {
  return {
    headers: {
      get: value => {
        if (value === 'allow') {
          return ['GET', 'POST', 'PUT', 'DELETE']
        }
      }
    }
  }
}

/**
 * Get OEmbed HTML
 * @param {Object} options
 * @param {Array} matches
 */
async function getEmbed (options, matches) {
  const response = await axios.get(`${routePrefix}/oembed?${matches[1]}`)
  return response.data
}

/**
 * Handle unsupported media upload request
 */
async function postMedia () {
  Notices.error('Drag & drop file uploads are not supported yet.')
  // We need to return those values to prevent additional error messages
  return {
    caption: {},
    title: {},
    description: {}
  }
}

/**
 * Get media mockdata
 */
async function optionsMedia () {
  return MockData.media
}

/**
 * Get page from mockdata and target value
 */
async function getPage () {
	const content = '';
	const date = (new Date()).toISOString()
	return {
    	...MockData.page,
    	date: date,
    	date_gtm: date,
    	content: {
      		raw: content
    	}
  	}
}

/**
 * Mock POST page request
 * @param {Object} options
 */
export async function postPage (options) {
  const date = (new Date()).toISOString()
  return {
    ...MockData.page,
    date: date,
    date_gtm: date,
    content: {
      raw: options.data
    }
  }
}

/**
 * Mock PUT page request
 * @param {Object} options
 */
export async function putPage (options) {
  const date = (new Date()).toISOString()
  return {
    ...MockData.page,
    date: date,
    date_gtm: date,
    content: {
      raw: options.data
    }
  }
}

/**
 * Returns searchCb result or an empty array
 * @param {Object} options
 * @param {Array} matches
 * @returns {Array}
 */
export async function getSearch (options, matches) {
  if (!searchCb) return []

  const search = matches[1]
  const perPage = matches[2]
  const type = matches[3]
  const result = await searchCb(search, perPage, type)

  if (Array.isArray(result)) {
    return result
  }

  Notices.error('Search callback must return an Array.')
  return []
}

/**
 * Mock GET taxonomies request
 */
async function getTaxonomies (options, matches) {
  return []
}

/**
 * Mock themes request
 */
async function getThemes () {
  
	const response = await axios.get(`/${routePrefix}/themes`)
  	return response.data
  //return MockData.themes
}

/**
 * Mock post types block request
 */
async function getTypeBlock () {
  return MockData.types.block
}

/**
 * Mock post types page request
 */
async function getTypePage () {
  return MockData.types.page
}

/**
 * Mock post types request
 */
async function getTypes () {
  return MockData.types
}

/**
 * Mock user request
 */
async function getUser () {
  return MockData.user
}

/**
 * Mock users request
 */
function getUsers () {
  return new Promise(resolve => {
    resolve([MockData.user])
  })
}

/**
 * Matches a Gutenberg request to the available requests in the requests variable
 * @param {Object} options - options object provided by Gutenberg
 * @returns {Promsie} - promise containing results
 */
function matchPath (options) {
	if (!options.path) {
		return new Promise(resolve => resolve('No action required.'));
	}

	let promise;

	for (const key in requests) {
		
		if (requests.hasOwnProperty(key)) {
			const requestPath = requests[key];
        	requestPath.regex.lastIndex = 0;
        	const matches = requestPath.regex.exec(`${options.path}`);

			if (
				matches &&
				matches.length > 0 &&
				((options.method && options.method === requestPath.method) ||
				  requestPath.method === 'GET')
			  ) {
          console.log(requestPath.regex);
				promise = requestPath.run(matches, options.data, options.body);
			  }
		}
	}

	if (!promise) {
		promise = new Promise((resolve, reject) => {
			return reject(new FetchError({
				code: 'api_handler_not_found',
				message: 'API handler not found.',
				data: {
					path: options.path,
					options: options,
					status: 404
				}
			}))
		})
	}
	return promise
}

/*export default function apiFetch (options) {
  const result = matchPath(options);
  
  return result.then(res => {
    return res
  }).catch(error => {
    console.log(`${error.message} - ${error.data.data.path}`);
    Notices.error(`${error.message} - ${error.data.data.path}`)
  })
}*/

export function configureAPI (options) {
  routePrefix = options.prefix || '/laraberg'
  searchCb = options.searchCb || null
}

class FetchError extends Error {
  constructor (object) {
    super(object.message)
    this.data = object
  }
}

/**
 * @param {import('../types').APIFetchOptions} options
 * @return {boolean} True if the request is for media upload.
 */
function isOptionRequest( options ) {
	const isCreateMethod = !! options.method && options.method === 'OPTION';
	const isMediaEndpoint =
		( !! options.path && options.path.indexOf( '/wp/v2/media' ) !== -1 ) ||
		( !! options.url && options.url.indexOf( '/wp/v2/media' ) !== -1 );

	return isCreateMethod;
}


const optionMiddleware = ( options, next ) => {
	if ( ! isOptionRequest( options ) ) {
		return next( options );
	}

  let retries = 0;
	const maxRetries = 5;

	/**
	 * @param {string} attachmentId
	 * @return {Promise<any>} Processed post response.
	 */
	const postProcess = ( attachmentId ) => {
		retries++;
		return next( {
			path: `/wp/v2/media/${ attachmentId }/post-process`,
			method: 'POST',
			data: { action: 'create-image-subsizes' },
			parse: false,
		} ).catch( () => {
			if ( retries < maxRetries ) {
				return postProcess( attachmentId );
			}
			next( {
				path: `/wp/v2/media/${ attachmentId }?force=true`,
				method: 'DELETE',
			} );

			return Promise.reject();
		} );
	};

	return next( { ...options, parse: false } )
		.catch( ( response ) => {
			const attachmentId = response.headers.get(
				'x-wp-upload-attachment-id'
			);
			if (
				response.status >= 500 &&
				response.status < 600 &&
				attachmentId
			) {
				return postProcess( attachmentId ).catch( () => {
					if ( options.parse !== false ) {
						return Promise.reject( {
							code: 'post_process',
							message: __(
								'Media upload failed. If this is a photo or a large image, please scale it down and try again.'
							),
						} );
					}

					return Promise.reject( response );
				} );
			}
			return parseAndThrowError( response, options.parse );
		} )
		.then( ( response ) =>
			parseResponseAndNormalizeError( response, options.parse )
		);
};

export default optionMiddleware;