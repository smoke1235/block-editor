import _ from 'underscore';
import Backbone from 'backbone';
import media from "./models";
import * as AudioVideo from "./audiovideo";
import * as Editor from "./editor";
import model from './media/models';
import controller from './media/controllers';
import view from "./media/views/index";
import SelectionSync from "./media/utils/selection-sync.jsx";
import ViewView from "./media/views/view.jsx";

var l10n = media.model.l10n = window._wpMediaModelsL10n || {};

_.extend( media, AudioVideo, Editor);
media.isTouchDevice = ( 'ontouchend' in document );

// Link any settings.
media.view.settings = l10n.settings || {};
delete l10n.settings;


media.model = model;
media.controller = controller;
media.view = view;
media.events = _.extend( {}, Backbone.Events );
media.selectionSync = SelectionSync;
media.View = ViewView;

// Copy the `post` setting over to the model settings.
//media.model.settings.post = media.view.settings.post;

export default media;
