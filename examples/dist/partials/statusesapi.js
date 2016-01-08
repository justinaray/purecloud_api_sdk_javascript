/**
* @class
* @example
* var api = new StatusesApi(pureCloudSession);
*/
var StatusesApi = function (pureCloudSession) {
	/**
     * @summary Get the user and system statuses
	 * @description 
	 * @memberOf StatusesApi#
	*/
	function get(){
		var apipath = '/api/v1/statuses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;

    return self;
};
