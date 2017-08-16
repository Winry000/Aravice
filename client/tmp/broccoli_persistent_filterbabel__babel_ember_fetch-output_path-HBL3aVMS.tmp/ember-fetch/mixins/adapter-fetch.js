define('ember-fetch/mixins/adapter-fetch', ['exports', 'ember', 'fetch'], function (exports, _ember, _fetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.serialiazeQueryParams = serialiazeQueryParams;
  exports.headersToObject = headersToObject;
  exports.mungOptionsForFetch = mungOptionsForFetch;
  exports.determineBodyPromise = determineBodyPromise;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var assign = _ember.default.assign,
      merge = _ember.default.merge,
      RSVP = _ember.default.RSVP;


  var RBRACKET = /\[\]$/;

  /**
   * Helper function that turns the data/body of a request into a query param string.
   * This is directly copied from jQuery.param.
   * @param {Object} queryParamsObject
   * @returns {String}
   */
  function serialiazeQueryParams(queryParamsObject) {
    var s = [];

    function buildParams(prefix, obj) {
      var i, len, key;

      if (prefix) {
        if (Array.isArray(obj)) {
          for (i = 0, len = obj.length; i < len; i++) {
            if (RBRACKET.test(prefix)) {
              add(s, prefix, obj[i]);
            } else {
              buildParams(prefix + '[' + (_typeof(obj[i]) === 'object' ? i : '') + ']', obj[i]);
            }
          }
        } else if (obj && String(obj) === '[object Object]') {
          for (key in obj) {
            buildParams(prefix + '[' + key + ']', obj[key]);
          }
        } else {
          add(s, prefix, obj);
        }
      } else if (Array.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
          add(s, obj[i].name, obj[i].value);
        }
      } else {
        for (key in obj) {
          buildParams(key, obj[key]);
        }
      }
      return s;
    }

    return buildParams('', queryParamsObject).join('&').replace(/%20/g, '+');
  }

  /**
   * Part of the `serialiazeQueryParams` helper function.
   * @param {Array} s
   * @param {String} k
   * @param {String} v
   */
  function add(s, k, v) {
    // Strip out keys with undefined or null values (mimics jQuery.ajax).
    if (v == undefined) {
      return;
    }

    v = typeof v === 'function' ? v() : v;
    s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
  }

  /**
   * Helper function to create a plain object from the response's Headers.
   * Consumed by the adapter's `handleResponse`.
   * @param {Headers} headers
   * @returns {Object}
   */
  function headersToObject(headers) {
    var headersObject = {};

    if (headers) {
      headers.forEach(function (value, key) {
        return headersObject[key] = value;
      });
    }

    return headersObject;
  }
  /**
   * Helper function that translates the options passed to `jQuery.ajax` into a format that `fetch` expects.
   * @param {Object} _options
   * @param {DS.Adapter} adapter
   * @returns {Object}
   */
  function mungOptionsForFetch(_options, adapter) {
    // This allows this mixin to be backward compatible with Ember < 2.5.
    var combineObjs = assign || merge;
    var options = combineObjs({
      credentials: 'same-origin'
    }, _options);

    var adapterHeaders = adapter.get('headers');
    if (adapterHeaders) {
      // This double use of `combineObjs` is necessary because `merge` only accepts two arguments.
      options.headers = combineObjs(combineObjs({}, options.headers || {}), adapterHeaders);
    }

    // Default to 'GET' in case `type` is not passed in (mimics jQuery.ajax).
    options.method = options.type || 'GET';

    // GET and HEAD requests can't have a `body`
    if (options.data) {
      if (options.method === 'GET' || options.method === 'HEAD') {
        // Test if there are already query params in the url (mimics jQuey.ajax).
        var queryParamDelimiter = options.url.indexOf('?') > -1 ? '&' : '?';
        options.url += '' + queryParamDelimiter + serialiazeQueryParams(options.data);
      } else {
        // NOTE: a request's body cannot be an object, so we stringify it if it is.
        if (typeof options.data === 'string') {
          // JSON.stringify removes keys with values of `undefined`.
          options.body = options.data;
        } else {
          // Strip out keys with undefined or null values (mimics jQuery.ajax).
          var filteredBody = Object.keys(options.data).reduce(function (filteredObj, key) {
            var currentValue = options.data[key];
            if (currentValue != undefined) {
              filteredObj[key] = currentValue;
            }
            return filteredObj;
          }, {});

          options.body = JSON.stringify(filteredBody);
        }
      }
    }

    // Mimics the default behavior in Ember Data's `ajaxOptions`, namely to set the
    // 'Content-Type' header to application/json if it is not a GET request and it has a body.
    if (options.method !== 'GET' && options.body && (options.headers === undefined || !(options.headers['Content-Type'] || options.headers['content-type']))) {
      options.headers = options.headers || {};
      options.headers['Content-Type'] = 'application/json; charset=utf-8';
    }

    return options;
  }
  /**
   * Function that determines what sort of Promise to return for the response's body.
   * If the response has a status code of 204 (No Content) or 205 (Reset Content) or if the request method was 'HEAD',
   * it has no body and we should return a Promise that resolves to an object with 'data' set to null.
   * Otherwise, it returns a Promise that resolves to the JSON body of the response.
   * This check is necessary because calling `json` on an empty body will cause JSON.parse to throw an error.
   * @param {Response} response
   * @param {Object} requestData
   * @returns {Promise}
   */
  function determineBodyPromise(response, requestData) {
    var bodyPromise = void 0;
    var status = response.status;

    if (status === 204 || status === 205 || requestData.method === 'HEAD') {
      bodyPromise = RSVP.Promise.resolve({ data: null });
    } else {
      bodyPromise = response.json();
    }
    return bodyPromise;
  }

  exports.default = _ember.default.Mixin.create({
    /**
     * @param {String} url
     * @param {String} type
     * @param {Object} options
     * @override
     */
    ajax: function ajax(url, type, options) {
      var _this = this;

      var requestData = {
        url: url,
        method: type
      };

      var hash = this.ajaxOptions(url, type, options);

      return this._ajaxRequest(hash).catch(function (error, response, requestData) {
        throw _this.ajaxError(error, response, requestData);
      }).then(function (response) {
        if (response.ok) {
          var bodyPromise = determineBodyPromise(response, requestData);
          return _this.ajaxSuccess(response, bodyPromise, requestData);
        }
        throw _this.ajaxError(null, response, requestData);
      });
    },


    /**
     * Overrides the `_ajaxRequest` method to use `fetch` instead of jQuery.ajax
     * @param {Object} options
     * @override
     */
    _ajaxRequest: function _ajaxRequest(_options) {
      var options = mungOptionsForFetch(_options, this);
      return this._fetchRequest(options.url, options);
    },


    /**
     * A hook into where `fetch` is called.
     * Useful if you want to override this behavior, for example to multiplex requests.
     * @param {String} url
     * @param {Object} options
     */
    _fetchRequest: function _fetchRequest(url, options) {
      return (0, _fetch.default)(url, options);
    },


    /**
     * @param {Object} response
     * @param {Promise} bodyPromise
     * @param {Object} requestData
     * @override
     */
    ajaxSuccess: function ajaxSuccess(response, bodyPromise, requestData) {
      var _this2 = this;

      var headersObject = headersToObject(response.headers);

      return bodyPromise.then(function (body) {
        var returnResponse = _this2.handleResponse(response.status, headersObject, body, requestData);

        if (returnResponse && returnResponse.isAdapterError) {
          return RSVP.Promise.reject(returnResponse);
        } else {
          return returnResponse;
        }
      });
    },


    /**
     * @param {Error} error
     * @param {Object} response
     * @param {Object} requestData
     * @override
     */
    ajaxError: function ajaxError(error) {
      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestData = arguments[2];

      if (error instanceof Error) {
        return error;
      } else {
        return this.handleResponse(response.status, headersToObject(response.headers), this.parseErrorResponse(response.statusText) || error, requestData);
      }
    }
  });
});