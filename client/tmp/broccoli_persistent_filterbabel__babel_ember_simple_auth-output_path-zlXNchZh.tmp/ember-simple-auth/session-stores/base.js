define('ember-simple-auth/session-stores/base', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = _ember.default.RSVP,
      EmberObject = _ember.default.Object,
      Evented = _ember.default.Evented;
  exports.default = EmberObject.extend(Evented, {
    /**
      Triggered when the session store's data changes due to an external event,
      e.g., from another tab or window of the same application. The session
      handles that event, passes the updated data to its authenticator's
      {{#crossLink "BaseAuthenticator/restore:method"}}{{/crossLink}} method and
      handles the result of that invocation accordingly.
       @event sessionDataUpdated
      @param {Object} data The updated session data
      @public
    */

    /**
      Persists the `data`. This replaces all currently stored data.
       `BaseStores`'s implementation always returns a rejecting promise. __This
      method must be overridden in subclasses__.
       @method persist
      @param {Object} data The data to persist
      @return {Ember.RSVP.Promise} A promise that resolves when the data has successfully been persisted and rejects otherwise.
      @public
    */
    persist: function persist() {
      return RSVP.reject();
    },


    /**
      Returns all data currently stored as a plain object.
       `BaseStores`'s implementation always returns a rejecting promise. __This
      method must be overridden in subclasses__.
       @method restore
      @return {Ember.RSVP.Promise} A promise that resolves with the data currently persisted in the store when the data has been restored successfully and rejects otherwise.
      @public
    */
    restore: function restore() {
      return RSVP.reject();
    },


    /**
      Clears the store.
       `BaseStores`'s implementation always returns a rejecting promise. __This
      method must be overridden in subclasses__.
       @method clear
      @return {Ember.RSVP.Promise} A promise that resolves when the store has been cleared successfully and rejects otherwise.
      @public
    */
    clear: function clear() {
      return RSVP.reject();
    }
  });
});