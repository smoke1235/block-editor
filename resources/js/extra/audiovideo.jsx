/**
 * @output wp-includes/js/media-audiovideo.js
 */

import _ from "underscore";
import wpShortcode from "@wordpress/shortcode";
import { collection, coerce } from "./editor.jsx";
import { l10n } from "./lang.jsx";

const baseSettings = window._wpmejsSettings || {};

/**
 *
 * Defines the wp.media.mixin object.
 *
 * @mixin
 *
 * @since 4.2.0
 */
export const mixin = {
	mejsSettings: baseSettings,

	/**
	 * Pauses and removes all players.
	 *
	 * @since 4.2.0
	 *
	 * @return {void}
	 */
	removeAllPlayers: function() {
		var p;

		if ( window.mejs && window.mejs.players ) {
			for ( p in window.mejs.players ) {
				window.mejs.players[p].pause();
				this.removePlayer( window.mejs.players[p] );
			}
		}
	},

	/**
	 * Removes the player.
	 *
	 * Override the MediaElement method for removing a player.
	 * MediaElement tries to pull the audio/video tag out of
	 * its container and re-add it to the DOM.
	 *
	 * @since 4.2.0
	 *
	 * @return {void}
	 */
	removePlayer: function(t) {
		var featureIndex, feature;

		if ( ! t.options ) {
			return;
		}

		// Invoke features cleanup.
		for ( featureIndex in t.options.features ) {
			feature = t.options.features[featureIndex];
			if ( t['clean' + feature] ) {
				try {
					t['clean' + feature](t);
				} catch (e) {}
			}
		}

		if ( ! t.isDynamic ) {
			t.node.remove();
		}

		if ( 'html5' !== t.media.rendererName ) {
			t.media.remove();
		}

		delete window.mejs.players[t.id];

		t.container.remove();
		t.globalUnbind('resize', t.globalResizeCallback);
		t.globalUnbind('keydown', t.globalKeydownCallback);
		t.globalUnbind('click', t.globalClickCallback);
		delete t.media.player;
	},

	/**
	 *
	 * Removes and resets all players.
	 *
	 * Allows any class that has set 'player' to a MediaElementPlayer
	 * instance to remove the player when listening to events.
	 *
	 * Examples: modal closes, shortcode properties are removed, etc.
	 *
	 * @since 4.2.0
	 */
	unsetPlayers : function() {
		if ( this.players && this.players.length ) {
			_.each( this.players, function (player) {
				player.pause();
				wp.media.mixin.removePlayer( player );
			} );
			this.players = [];
		}
	}
};

/**
 * Shortcode modeling for playlists.
 *
 * @since 4.2.0
 */
export const playlist = new collection({
	tag: 'playlist',
	editTitle : l10n.editPlaylistTitle,
	defaults : {
		id: 1, //wp.media.view.settings.post.id,
		style: 'light',
		tracklist: true,
		tracknumbers: true,
		images: true,
		artists: true,
		type: 'audio'
	}
});

/**
 * Shortcode modeling for audio.
 *
 * `edit()` prepares the shortcode for the media modal.
 * `shortcode()` builds the new shortcode after an update.
 *
 * @namespace
 *
 * @since 4.2.0
 */
export const audio = {
	coerce : coerce,

	defaults : {
		id : 1, //wp.media.view.settings.post.id,
		src : '',
		loop : false,
		autoplay : false,
		preload : 'none',
		width : 400
	},

	/**
	 * Instantiates a new media object with the next matching shortcode.
	 *
	 * @since 4.2.0
	 *
	 * @param {string} data The text to apply the shortcode on.
	 * @return {wp.media} The media object.
	 */
	edit : function( data ) {
		var frame, shortcode = wpShortcode.next( 'audio', data ).shortcode;

		frame = wp.media({
			frame: 'audio',
			state: 'audio-details',
			metadata: _.defaults( shortcode.attrs.named, this.defaults )
		});

		return frame;
	},

	/**
	 * Generates an audio shortcode.
	 *
	 * @since 4.2.0
	 *
	 * @param {Array} model Array with attributes for the shortcode.
	 * @return {wp.shortcode} The audio shortcode object.
	 */
	shortcode : function( model ) {
		var content;

		_.each( this.defaults, function( value, key ) {
			model[ key ] = this.coerce( model, key );

			if ( value === model[ key ] ) {
				delete model[ key ];
			}
		}, this );

		content = model.content;
		delete model.content;

		return new wpShortcode({
			tag: 'audio',
			attrs: model,
			content: content
		});
	}
};

/**
 * Shortcode modeling for video.
 *
 *  `edit()` prepares the shortcode for the media modal.
 *  `shortcode()` builds the new shortcode after update.
 *
 * @since 4.2.0
 *
 * @namespace
 */
export const video = {
	coerce : coerce,

	defaults : {
		id : 1, //wp.media.view.settings.post.id,
		src : '',
		poster : '',
		loop : false,
		autoplay : false,
		preload : 'metadata',
		content : '',
		width : 640,
		height : 360
	},

	/**
	 * Instantiates a new media object with the next matching shortcode.
	 *
	 * @since 4.2.0
	 *
	 * @param {string} data The text to apply the shortcode on.
	 * @return {wp.media} The media object.
	 */
	edit : function( data ) {
		var frame,
			shortcode = wpShortcode.next( 'video', data ).shortcode,
			attrs;

		attrs = shortcode.attrs.named;
		attrs.content = shortcode.content;

		frame = wp.media({
			frame: 'video',
			state: 'video-details',
			metadata: _.defaults( attrs, this.defaults )
		});

		return frame;
	},

	/**
	 * Generates an video shortcode.
	 *
	 * @since 4.2.0
	 *
	 * @param {Array} model Array with attributes for the shortcode.
	 * @return {wp.shortcode} The video shortcode object.
	 */
	shortcode : function( model ) {
		var content;

		_.each( this.defaults, function( value, key ) {
			model[ key ] = this.coerce( model, key );

			if ( value === model[ key ] ) {
				delete model[ key ];
			}
		}, this );

		content = model.content;
		delete model.content;

		return new wpShortcode({
			tag: 'video',
			attrs: model,
			content: content
		});
	}
};
