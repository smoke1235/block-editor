import Attachment from "../attachment";

/**
 * wp.media.view.Attachment.Selection
 *
 * @memberOf wp.media.view.Attachment
 *
 * @class
 * @augments wp.media.view.Attachment
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */
var Selection = Attachment.extend(/** @lends wp.media.view.Attachment.Selection.prototype */{
	className: 'attachment selection',

	// On click, just select the model, instead of removing the model from
	// the selection.
	toggleSelection: function() {
		this.options.selection.single( this.model );
	}
});

export default Selection;
