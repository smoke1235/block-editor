import Settings from "../settings";
import { template as Template } from "../../../util";

/**
 * wp.media.view.Settings.Playlist
 *
 * @memberOf wp.media.view.Settings
 *
 * @class
 * @augments wp.media.view.Settings
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */
var Playlist = Settings.extend(/** @lends wp.media.view.Settings.Playlist.prototype */{
	className: 'collection-settings playlist-settings',
	template:  Template('playlist-settings')
});

export default Playlist;
