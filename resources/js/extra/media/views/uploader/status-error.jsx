import View from "../view";
import { template as Template} from "../../../util";

/**
 * wp.media.view.UploaderStatusError
 *
 * @memberOf wp.media.view
 *
 * @class
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */
var UploaderStatusError = View.extend(/** @lends wp.media.view.UploaderStatusError.prototype */{
	className: 'upload-error',
	template:  Template('uploader-status-error')
});

export default UploaderStatusError;
