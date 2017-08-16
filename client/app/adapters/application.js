// import Ember from 'ember';
// import FirebaseAdapter from 'emberfire/adapters/firebase';

// const { inject } = Ember;

// export default FirebaseAdapter.extend({
// 	firebase: inject.service(),
// });
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2'
});