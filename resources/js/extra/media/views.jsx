
import Region from "./controllers/region";
import StateMachine from "./controllers/state-machine";
import State from "./controllers/state";

import selectionSync from "./utils/selection-sync.jsx";
import Library from "./controllers/library.jsx";

import ImageDetails from "./controllers/image-details.jsx";
import GalleryEdit from "./controllers/gallery-edit.jsx";
import GalleryAdd from "./controllers/gallery-add.jsx";



import CollectionEdit from "./controllers/collection-edit.jsx";
import CollectionAdd from "./controllers/collection-add.jsx";
import FeaturedImage from "./controllers/featured-image.jsx";
import ReplaceImage from "./controllers/replace-image.jsx";
import EditImage from "./controllers/edit-image.jsx";
import MediaLibrary from "./controllers/media-library.jsx";
import Embed from "./controllers/embed.jsx";
import Cropper from "./controllers/cropper.jsx";
import CustomizeImageCropper from "./controllers/customize-image-cropper.jsx";
import SiteIconCropper from "./controllers/site-icon-cropper.jsx";

import View from "./views/view.jsx";
import Frame from "./views/frame.jsx";
import MediaFrame from "./views/media-frame.jsx";
import MediaFrameSelect from "./views/frame/select.jsx";
import MediaFramePost from "./views/frame/post.jsx";
import MediaFrameImageDetails from "./views/frame/image-details.jsx";
import Modal from "./views/modal.jsx";
import FocusManager from "./views/focus-manager.jsx";
import UploaderWindow from "./views/uploader/window.jsx";
import EditorUploader from "./views/uploader/editor.jsx";
import UploaderInline from "./views/uploader/inline.jsx";
import UploaderStatus from "./views/uploader/status.jsx";
import UploaderStatusError from "./views/uploader/status-error.jsx";
import Toolbar from "./views/toolbar.jsx";
import ToolbarSelect from "./views/toolbar/select.jsx";
import ToolbarEmbed from "./views/toolbar/embed.jsx";
import Button from "./views/button.jsx";
import ButtonGroup from "./views/button-group.jsx";
import PriorityList from "./views/priority-list.jsx";
import MenuItem from "./views/menu-item.jsx";
import Menu from "./views/menu.jsx";
import RouterItem from "./views/router-item.jsx";
import Router from "./views/router.jsx";
import Sidebar from "./views/sidebar.jsx";
import Attachment from "./views/attachment.jsx";
import AttachmentLibrary from "./views/attachment/library.jsx";
import AttachmentEditLibrary from "./views/attachment/edit-library.jsx";
import Attachments from "./views/attachments.jsx";
import Search from "./views/search.jsx";
import AttachmentFilters from "./views/attachment-filters.jsx";
import DateFilter from "./views/attachment-filters/date.jsx";
import AttachmentFiltersUploaded from "./views/attachment-filters/uploaded.jsx";
import AttachmentFiltersAll from "./views/attachment-filters/all.jsx";
import AttachmentsBrowser from "./views/attachments/browser.jsx";
import Selection from "./views/selection.jsx";
import AttachmentSelection from "./views/attachment/selection.jsx";
import AttachmentsSelection from "./views/attachments/selection.jsx";
import AttachmentEditSelection from "./views/attachment/edit-selection.jsx";
import Settings from "./views/settings.jsx";
import SettingsAttachmentDisplay from "./views/settings/attachment-display.jsx";
import SettingsGallery from "./views/settings/gallery.jsx";
import SettingsPlaylist from "./views/settings/playlist.jsx";
import AttachmentDetails from "./views/attachment/details.jsx";
import AttachmentCompat from "./views/attachment-compat.jsx";
import Iframe from "./views/iframe.jsx";
import ViewEmbed from "./views/embed.jsx";
import Label from "./views/label.jsx";
import EmbedUrl from "./views/embed/url.jsx";
import EmbedLink from "./views/embed/link.jsx";
import EmbedImage from "./views/embed/image.jsx";
import ViewImageDetails from "./views/image-details.jsx";
import ViewCropper from "./views/cropper.jsx";
import ViewSiteIconCropper from "./views/site-icon-cropper.jsx";
import SiteIconPreview from "./views/site-icon-preview.jsx";
import ViewEditImage from "./views/edit-image.jsx";
import Spinner from "./views/spinner.jsx";
import Heading from "./views/heading.jsx";







/**
 * @output wp-includes/js/media-views.js
 */

var media = wp.media,
	$ = jQuery,
	l10n;

media.isTouchDevice = ( 'ontouchend' in document );

// Link any localized strings.
l10n = media.view.l10n = window._wpMediaViewsL10n || {};

// Link any settings.
media.view.settings = l10n.settings || {};
delete l10n.settings;

// Copy the `post` setting over to the model settings.
media.model.settings.post = media.view.settings.post;

// Check if the browser supports CSS 3.0 transitions.
$.support.transition = (function(){
	var style = document.documentElement.style,
		transitions = {
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition:    'transitionend',
			OTransition:      'oTransitionEnd otransitionend',
			transition:       'transitionend'
		}, transition;

	transition = _.find( _.keys( transitions ), function( transition ) {
		return ! _.isUndefined( style[ transition ] );
	});

	return transition && {
		end: transitions[ transition ]
	};
}());

/**
 * A shared event bus used to provide events into
 * the media workflows that 3rd-party devs can use to hook
 * in.
 */
export const events = _.extend( {}, Backbone.Events );

/**
 * Makes it easier to bind events using transitions.
 *
 * @param {string} selector
 * @param {number} sensitivity
 * @return {Promise}
 */
export const transition = function( selector, sensitivity ) {
	var deferred = $.Deferred();

	sensitivity = sensitivity || 2000;

	if ( $.support.transition ) {
		if ( ! (selector instanceof $) ) {
			selector = $( selector );
		}

		// Resolve the deferred when the first element finishes animating.
		selector.first().one( $.support.transition.end, deferred.resolve );

		// Just in case the event doesn't trigger, fire a callback.
		_.delay( deferred.resolve, sensitivity );

	// Otherwise, execute on the spot.
	} else {
		deferred.resolve();
	}

	return deferred.promise();
};

export const controller = {
    Region: Region,
    StateMachine: StateMachine,
    State: State,
    Library: Library,
    ImageDetails: ImageDetails,
    GalleryEdit: GalleryEdit,
    GalleryAdd: GalleryAdd,
    CollectionEdit: CollectionEdit,
    CollectionAdd: CollectionAdd,
    FeaturedImage: FeaturedImage,
    ReplaceImage: ReplaceImage,
    EditImage: EditImage,
    MediaLibrary: MediaLibrary,
    Embed: Embed,
    Cropper: Cropper,
    CustomizeImageCropper: CustomizeImageCropper,
    SiteIconCropper: SiteIconCropper,
};



export const view = {
    Frame: Frame,
    MediaFrame: MediaFrame,
    MediaFrameSelect: MediaFrameSelect,
    MediaFramePost: MediaFramePost,
    MediaFrameImageDetails: MediaFrameImageDetails,
    Modal: Modal,
    FocusManager: FocusManager,
    UploaderWindow: UploaderWindow,
    EditorUploader: EditorUploader,
    UploaderInline: UploaderInline,
    UploaderStatus: UploaderStatus,
    UploaderStatusError: UploaderStatusError,
    Toolbar: Toolbar,
    ToolbarSelect: ToolbarSelect,
    ToolbarEmbed: ToolbarEmbed,
    Button: Button,
    ButtonGroup: ButtonGroup,
    PriorityList: PriorityList,
    MenuItem: MenuItem,
    Menu: Menu,
    RouterItem: RouterItem,
    Router: Router,
    Sidebar: Sidebar,
    Attachment: Attachment,
    AttachmentLibrary: AttachmentLibrary,
    AttachmentEditLibrary: AttachmentEditLibrary,
    Attachments: Attachments,
    Search: Search,
    AttachmentFilters: AttachmentFilters,
    DateFilter: DateFilter,
    AttachmentFiltersUploaded: AttachmentFiltersUploaded,
    AttachmentFiltersAll: AttachmentFiltersAll,
    AttachmentsBrowser: AttachmentsBrowser,
    Selection: Selection,
    AttachmentSelection: AttachmentSelection,
    AttachmentsSelection: AttachmentsSelection,
    AttachmentEditSelection: AttachmentEditSelection,
    Settings: Settings,
    SettingsAttachmentDisplay: SettingsAttachmentDisplay,
    SettingsGallery: SettingsGallery,
    SettingsPlaylist: SettingsPlaylist,
    AttachmentDetails: AttachmentDetails,
    AttachmentCompat: AttachmentCompat,
    Iframe: Iframe,
    Embed: ViewEmbed,
    Label: Label,
    EmbedUrl: EmbedUrl,
    EmbedLink: EmbedLink,
    EmbedImage: EmbedImage,
    ImageDetails: ViewImageDetails,
    Cropper: ViewCropper,
    SiteIconCropper: ViewSiteIconCropper,
    SiteIconPreview: SiteIconPreview,
    EditImage: ViewEditImage,
    Spinner: Spinner,
    Heading: Heading,
};

