import MediaDetails from "./frame/media-details";
import { template as Template } from "../../util";

/**
 * wp.media.view.AudioDetails
 *
 * @memberOf wp.media.view
 *
 * @class
 * @augments wp.media.view.MediaDetails
 * @augments wp.media.view.Settings.AttachmentDisplay
 * @augments wp.media.view.Settings
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */
var AudioDetails = MediaDetails.extend(/** @lends wp.media.view.AudioDetails.prototype */{
	className: 'audio-details',
	template: Template('audio-details'),

	setMedia: function() {
		var audio = this.$('.wp-audio-shortcode');

		if ( audio.find( 'source' ).length ) {
			if ( audio.is(':hidden') ) {
				audio.show();
			}
			this.media = MediaDetails.prepareSrc( audio.get(0) );
		} else {
			audio.hide();
			this.media = false;
		}

		return this;
	}
});

export default AudioDetails;
