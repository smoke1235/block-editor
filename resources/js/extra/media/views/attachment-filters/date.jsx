import _ from "underscore";
import AttachmentFilters from "../attachment-filters";

import { l10n } from "../../../lang";


/**
 * A filter dropdown for month/dates.
 *
 * @memberOf wp.media.view.AttachmentFilters
 *
 * @class
 * @augments wp.media.view.AttachmentFilters
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */
var DateFilter = AttachmentFilters.extend(/** @lends wp.media.view.AttachmentFilters.Date.prototype */{
	id: 'media-attachment-date-filters',

	createFilters: function() {
		var filters = {};
		_.each( l10n.settings.months || {}, function( value, index ) {
			filters[ index ] = {
				text: value.text,
				props: {
					year: value.year,
					monthnum: value.month
				}
			};
		});
		filters.all = {
			text:  l10n.allDates,
			props: {
				monthnum: false,
				year:  false
			},
			priority: 10
		};
		this.filters = filters;
	}
});

export default DateFilter;
