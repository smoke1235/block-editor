var EditAttachmentMetadata;

/**
 * wp.media.controller.EditAttachmentMetadata
 *
 * A state for editing an attachment's metadata.
 *
 * @memberOf wp.media.controller
 *
 * @class
 * @augments wp.media.controller.State
 * @augments Backbone.Model
 */
EditAttachmentMetadata = wp.media.controller.State.extend(/** @lends wp.media.controller.EditAttachmentMetadata.prototype */{
	defaults: {
		id:      'edit-attachment',
		// Title string passed to the frame's title region view.
		//title:   l10n.attachmentDetails,
		title:   "Attachment details",
		// Region mode defaults.
		content: 'edit-metadata',
		menu:    false,
		toolbar: false,
		router:  false
	}
});

export default EditAttachmentMetadata;
