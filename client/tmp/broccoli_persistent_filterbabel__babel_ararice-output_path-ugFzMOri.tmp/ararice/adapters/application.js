define('ararice/adapters/application', ['exports', 'ember-data', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _emberSimpleAuthMixinsDataAdapterMixin) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
    authorizer: 'authorizer:oauth2'
  });
});
// import Ember from 'ember';
// import FirebaseAdapter from 'emberfire/adapters/firebase';

// const { inject } = Ember;

// export default FirebaseAdapter.extend({
// 	firebase: inject.service(),
// });