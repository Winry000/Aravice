define('ararice/mixins/adapter-fetch', ['exports', 'ember-fetch/mixins/adapter-fetch'], function (exports, _emberFetchMixinsAdapterFetch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFetchMixinsAdapterFetch['default'];
    }
  });
});