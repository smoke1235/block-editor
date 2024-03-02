import State from "./state";
import { l10n } from "../../lang";

/**
 * wp.media.controller.AudioDetails
 *
 * The controller for the Audio Details state
 *
 * @memberOf wp.media.controller
 *
 * @class
 * @augments wp.media.controller.State
 * @augments Backbone.Model
 */
var AudioDetails = State.extend(/** @lends wp.media.controller.AudioDetails.prototype */{
	defaults: {
		id: 'audio-details',
		toolbar: 'audio-details',
		title: l10n.audioDetailsTitle,
		content: 'audio-details',
		menu: 'audio-details',
		router: false,
		priority: 60
	},

	initialize: function( options ) {
		this.media = options.media;
		State.prototype.initialize.apply( this, arguments );
	}
});

export default AudioDetails;
