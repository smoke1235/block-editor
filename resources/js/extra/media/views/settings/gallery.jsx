import Settings from "../settings";
import { template as Template } from "../../../util";


/**
 * wp.media.view.Settings.Gallery
 *
 * @memberOf wp.media.view.Settings
 *
 * @class
 * @augments wp.media.view.Settings
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */
var Gallery = Settings.extend(/** @lends wp.media.view.Settings.Gallery.prototype */{
	className: 'collection-settings gallery-settings',
	template:  Template('gallery-settings')
});

export default Gallery;
