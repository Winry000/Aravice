/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ararice',
    podModulePrefix: 'ararice',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {'connect-src':"'self' wss://*.firebaseio.com"},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
     firebase: {
        apiKey: "AIzaSyDGL5AkcZEPC2lIfeoPCzIFvt0pONaEptc",
        authDomain: "avarice-55f64.firebaseapp.com",
        databaseURL: "https://avarice-55f64.firebaseio.com",
        projectId: "avarice-55f64",
        storageBucket: "avarice-55f64.appspot.com",
        messagingSenderId: "925062626442"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
