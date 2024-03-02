import FrameMediaDetails from "./frame/media-details.jsx";
import FrameAudioDetails from "./frame/audio-details.jsx";
import FrameVideoDetails from "./frame/video-details.jsx";
import FrameSelect from "./frame/select.jsx";
import FramePost from "./frame/post.jsx";
import FrameImageDetails from "./frame/image-details.jsx";
import FrameManage from "./frame/manage.jsx";
import MediaDetails from "./media-details.jsx";
import AudioDetails from "./audio-details.jsx";
import VideoDetails from "./video-details.jsx";

import AttachmentTwoColumn from "./attachment/details-two-column.jsx";
import EditImageDetails from "./edit-image-details.jsx"
import FrameEditAttachments from "./frame/edit-attachments.jsx"

import SelectModeToggleButton from "./button/select-mode-toggle.jsx"
import DeleteSelectedButton from "./button/delete-selected.jsx";
import DeleteSelectedPermanentlyButton from "./button/delete-selected-permanently.jsx"

import Frame from "./frame.jsx";

import Modal from "./modal.jsx";
import FocusManager from "./focus-manager.jsx";
import UploaderWindow from "./uploader/window.jsx";
import EditorUploader from "./uploader/editor.jsx";
import UploaderInline from "./uploader/inline.jsx";
import UploaderStatus from "./uploader/status.jsx";
import UploaderStatusError from "./uploader/status-error.jsx";
import ToolbarSelect from "./toolbar/select.jsx";
import ToolbarEmbed from "./toolbar/embed.jsx";

import Button from "./button.jsx";
import ButtonGroup from "./button-group.jsx";
import PriorityList from "./priority-list.jsx";
import MenuItem from "./menu-item.jsx";
import Menu from "./menu.jsx";
import RouterItem from "./router-item.jsx";
import Router from "./router.jsx";
import Sidebar from "./sidebar.jsx";

import AttachmentLibrary from "./attachment/library.jsx";
import AttachmentEditLibrary from "./attachment/edit-library.jsx";

import Attachments from "./attachments.jsx";
import Search from "./search.jsx";

import DateFilter from "./attachment-filters/date.jsx";
import AttachmentFiltersUploaded from "./attachment-filters/uploaded.jsx";
import AttachmentFiltersAll from "./attachment-filters/all.jsx";
import AttachmentsBrowser from "./attachments/browser.jsx";
import Selection from "./selection.jsx";

import AttachmentSelection from "./attachment/selection.jsx";
import AttachmentsSelection from "./attachments/selection.jsx";
import AttachmentEditSelection from "./attachment/edit-selection.jsx";
import SettingsAttachmentDisplay from "./settings/attachment-display.jsx";
import SettingsGallery from "./settings/gallery.jsx";
import SettingsPlaylist from "./settings/playlist.jsx";

import AttachmentCompat from "./attachment-compat.jsx";
import Iframe from "./iframe.jsx";
import Embed from "./embed.jsx";
import Label from "./label.jsx";
import EmbedUrl from "./embed/url.jsx";
import EmbedLink from "./embed/link.jsx";
import EmbedImage from "./embed/image.jsx";
import ImageDetails from "./image-details.jsx";

import Cropper from "./cropper.jsx";
import SiteIconCropper from "./site-icon-cropper.jsx";
import SiteIconPreview from "./site-icon-preview.jsx";
import EditImage from "./edit-image.jsx";
import Spinner from "./spinner.jsx";
import Heading from "./heading.jsx";

import Toolbar from "./toolbar.jsx";
import Settings from "./settings.jsx";
import AttachmentFilters from "./attachment-filters.jsx";

import Attachment from "./attachment.jsx";
import AttachmentDetails from "./attachment/details.jsx";

import MediaFrame from "./media-frame.jsx";
import ManageRouter from "../routers/manage.jsx";

const view = {
    Attachment,
    MediaFrame,
    MediaDetails,
    AudioDetails,
    VideoDetails, 
    SelectModeToggleButton,
    DeleteSelectedButton,
    DeleteSelectedPermanentlyButton,
    Frame,
    Modal,
    FocusManager,
    UploaderWindow,
    EditorUploader,
    UploaderInline,
    UploaderStatus,
    UploaderStatusError,
    Toolbar,
    Button,
    ButtonGroup,
    PriorityList,
    MenuItem,
    Menu,
    RouterItem,
    Router,
    Sidebar,
    Attachments,
    Search,
    DateFilter,
    AttachmentFilters,
    AttachmentsBrowser,
    Selection,
    Settings,
    AttachmentCompat,
    Iframe,
    Embed,
    Label,
    EmbedUrl,
    EmbedLink,
    EmbedImage,
    ImageDetails,
    Cropper,
    SiteIconCropper,
    SiteIconPreview,
    EditImage,
    Spinner,
    Heading,

}

//Attachment
view.Attachment.Selection = AttachmentSelection;
view.Attachment.EditSelection = AttachmentEditSelection;
view.Attachment.Details = AttachmentDetails;
view.Attachment.Details.TwoColumn = AttachmentTwoColumn;
view.Attachment.Library = AttachmentLibrary;
view.Attachment.EditLibrary = AttachmentEditLibrary;

//AttachmentFilters
view.AttachmentFilters.Uploaded = AttachmentFiltersUploaded;
view.AttachmentFilters.All = AttachmentFiltersAll;

//Attachments
view.Attachments.Selection = AttachmentsSelection;

// Button

// Embed

// Frame
view.MediaFrame.Select = FrameSelect;
view.MediaFrame.Post = FramePost;
view.MediaFrame.ImageDetails = FrameImageDetails;
view.MediaFrame.MediaDetails = FrameMediaDetails;
view.MediaFrame.AudioDetails = FrameAudioDetails;
view.MediaFrame.VideoDetails = FrameVideoDetails;
view.MediaFrame.Manage = FrameManage;
view.MediaFrame.EditAttachments = FrameEditAttachments;
view.MediaFrame.Manage.Router = ManageRouter;

//Settings
view.Settings.AttachmentDisplay = SettingsAttachmentDisplay;
view.Settings.Gallery = SettingsGallery;
view.Settings.Playlist = SettingsPlaylist;

// Toolbar
view.Toolbar.Select = ToolbarSelect;
view.Toolbar.Embed = ToolbarEmbed;

// Settings

//EditImage
view.EditImage.Details = EditImageDetails;

export default view;
