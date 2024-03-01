
import State from "./state";
/**
 * wp.media.controller.VideoDetails
 *
 * The controller for the Video Details state
 *
 * @memberOf wp.media.controller
 *
 * @class
 * @augments wp.media.controller.State
 * @augments Backbone.Model
 */
var VideoDetails;

VideoDetails = State.extend(/** @lends wp.media.controller.VideoDetails.prototype */{
	defaults: {
		id: 'video-details',
		toolbar: 'video-details',
		//title: l10n.videoDetailsTitle,
		title: "Video details",
		content: 'video-details',
		menu: 'video-details',
		router: false,
		priority: 60
	},

	initialize: function( options ) {
		this.media = options.media;
		State.prototype.initialize.apply( this, arguments );
	}
});

export default VideoDetails;
