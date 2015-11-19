if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.evaluations";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.evaluations = (function (PureCloud) {
	/**
	* @namespace evaluations/favoritetemplates
	**/
	/**
	* @namespace evaluations/templates
	**/

	var self = {};
	self.favoritetemplates = self.favoritetemplates || {};

	/**
     * 
     * @method getFavoriteTemplates
	 * @memberof evaluations/favoritetemplates
	 *
     */
     self.favoritetemplates.getFavoriteTemplates = function(){
		var path = '/api/v1/evaluations/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.favoritetemplates = self.favoritetemplates || {};

	/**
     * 
     * @method setFavoriteTemplate
	 * @memberof evaluations/favoritetemplates

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "templateId": ""
}
	 *
     */
     self.favoritetemplates.setFavoriteTemplate = function(body){
		var path = '/api/v1/evaluations/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.favoritetemplates = self.favoritetemplates || {};

	/**
     * 
     * @method unsetFavoriteTemplate
	 * @memberof evaluations/favoritetemplates

	* @param {string} templateId - 
	 *
     */
     self.favoritetemplates.unsetFavoriteTemplate = function(templateId){
		var path = '/api/v1/evaluations/favoritetemplates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.templates = self.templates || {};

	/**
     * 
     * @method getTemplates
	 * @memberof evaluations/templates

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} expand - Expand

	* @param {string} tags - Tags
	 *
     */
     self.templates.getTemplates = function(pageSize, pageNumber, expand, tags){
		var path = '/api/v1/evaluations/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(tags !== undefined && tags !== null){
			queryParameters.tags = tags;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.templates = self.templates || {};

	/**
     * 
     * @method createTemplate
	 * @memberof evaluations/templates

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	 *
     */
     self.templates.createTemplate = function(body){
		var path = '/api/v1/evaluations/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.templates = self.templates || {};

	/**
     * 
     * @method getComposerTemplate
	 * @memberof evaluations/templates

	* @param {string} templateId - Template ID
	 *
     */
     self.templates.getComposerTemplate = function(templateId){
		var path = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.templates = self.templates || {};

	/**
     * 
     * @method updateComposerTemplate
	 * @memberof evaluations/templates

	* @param {string} templateId - Template ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	 *
     */
     self.templates.updateComposerTemplate = function(templateId, body){
		var path = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.templates = self.templates || {};

	/**
     * 
     * @method deleteComposerTemplate
	 * @memberof evaluations/templates

	* @param {string} templateId - Template ID
	 *
     */
     self.templates.deleteComposerTemplate = function(templateId){
		var path = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
