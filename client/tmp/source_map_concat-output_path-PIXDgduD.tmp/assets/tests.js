'use strict';

define('ararice/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/post.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/products.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-calculator-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-calculator-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-carousel.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-carousel.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-categorybar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-categorybar.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-footer.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-item-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-item-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-item-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ara-item-detail.js should pass ESLint\n\n27:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n29:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n40:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n41:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n45:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n46:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n47:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n48:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n50:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n51:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/ara-login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-login.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-myorder-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-myorder-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-myorder.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-myorder.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ara-navbar.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/ara-popularitem.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-popularitem.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-shoppingcar-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ara-shoppingcar-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/ara-sidebar.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ara-sidebar.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/ara-signup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ara-signup.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/tiny/ara-inputspinnet.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tiny/ara-inputspinnet.js should pass ESLint\n\n');
  });

  QUnit.test('components/tiny/ara-logtitle.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/tiny/ara-logtitle.js should pass ESLint\n\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/tiny/ara-shoppingcarditem.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tiny/ara-shoppingcarditem.js should pass ESLint\n\n');
  });

  QUnit.test('components/tiny/ara-sidebar-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tiny/ara-sidebar-menu.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/ara-login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/ara-login.js should pass ESLint\n\n2:8 - \'DS\' is defined but never used. (no-unused-vars)\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('controllers/ara-navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/ara-navbar.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/address-management/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/address-management/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/invite-people/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/invite-people/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/my-balance/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/my-balance/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/my-message/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/my-message/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/my-points/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/my-points/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/myorder/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/myorder/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/payment-management/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/payment-management/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/admin/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/admin/route.js should pass ESLint\n\n4:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/admin/wish-lists/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/admin/wish-lists/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/authenticated/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/authenticated/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/cart/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/cart/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/collections/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/collections/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/home/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/home/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/login/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/login/controller.js should pass ESLint\n\n2:8 - \'DS\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('feature/login/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/login/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/products/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/products/controller.js should pass ESLint\n\n2:8 - \'DS\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('feature/products/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/products/route.js should pass ESLint\n\n5:11 - \'ws\' is assigned a value but never used. (no-unused-vars)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/signup/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/signup/route.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('helpers/fillcolor.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/fillcolor.js should pass ESLint\n\n4:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('helpers/mult.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/mult.js should pass ESLint\n\n3:31 - \'params2\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('initializers/i18n.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/i18n.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ch/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ch/config.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ch/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ch/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/es/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/es/config.js should pass ESLint\n\n');
  });

  QUnit.test('locales/es/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/es/translations.js should pass ESLint\n\n');
  });

  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });

  QUnit.test('models/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/products.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/ara-navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ara-navbar.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/post.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/products.js should pass ESLint\n\n');
  });

  QUnit.test('services/add-cart.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/add-cart.js should pass ESLint\n\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('upload/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'upload/controller.js should pass ESLint\n\n');
  });

  QUnit.test('upload/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'upload/post.js should pass ESLint\n\n');
  });

  QUnit.test('upload/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'upload/route.js should pass ESLint\n\n');
  });
});
define('ararice/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = createOfflineRef;

  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */

  function createOfflineRef(initialData) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? 'https://emberfire-tests-2c814.firebaseio.com' : arguments[1];
    var apiKey = arguments.length <= 2 || arguments[2] === undefined ? 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o' : arguments[2];

    if (!_firebase['default']._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    var app = undefined;

    try {
      app = _firebase['default'].app();
    } catch (e) {
      app = _firebase['default'].initializeApp(config);
    }

    var ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('ararice/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ararice/tests/helpers/destroy-firebase-apps', ['exports', 'ember', 'firebase'], function (exports, _ember, _firebase) {
  exports['default'] = destroyFirebaseApps;
  var run = _ember['default'].run;

  /**
   * Destroy all Firebase apps.
   */

  function destroyFirebaseApps() {
    var deletions = _firebase['default'].apps.map(function (app) {
      return app['delete']();
    });
    _ember['default'].RSVP.all(deletions).then(function () {
      return run(function () {
        // NOOP to delay run loop until the apps are destroyed
      });
    });
  }
});
define('ararice/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof QUnit.assert.ok === 'function') {
      return function (element, key, text) {
        QUnit.assert.ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('ararice/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
/* global wait */
define('ararice/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ararice/tests/helpers/start-app', 'ararice/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _arariceTestsHelpersStartApp, _arariceTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _arariceTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _arariceTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ararice/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  exports['default'] = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */

  function replaceAppRef(app, ref) {
    var model = arguments.length <= 2 || arguments[2] === undefined ? 'application' : arguments[2];

    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('ararice/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  exports['default'] = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */

  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('ararice/tests/helpers/resolver', ['exports', 'ararice/resolver', 'ararice/config/environment'], function (exports, _arariceResolver, _arariceConfigEnvironment) {

  var resolver = _arariceResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _arariceConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _arariceConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ararice/tests/helpers/start-app', ['exports', 'ember', 'ararice/app', 'ararice/config/environment'], function (exports, _ember, _arariceApp, _arariceConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _arariceConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _arariceApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ararice/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = stubFirebase;

  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */

  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase['default']._unStub) {
      var originalSet = _firebase['default'].database.Reference.prototype.set;
      var originalUpdate = _firebase['default'].database.Reference.prototype.update;
      var originalRemove = _firebase['default'].database.Reference.prototype.remove;

      _firebase['default']._unStub = function () {
        _firebase['default'].database.Reference.prototype.set = originalSet;
        _firebase['default'].database.Reference.prototype.update = originalUpdate;
        _firebase['default'].database.Reference.prototype.remove = originalRemove;
      };

      _firebase['default'].database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('ararice/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = unstubFirebase;

  function unstubFirebase() {
    if (typeof _firebase['default']._unStub === 'function') {
      _firebase['default']._unStub();
      delete _firebase['default']._unStub;
    }
  }
});
define('ararice/tests/integration/components/ara-calculator-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-calculator-card', 'Integration | Component | ara calculator card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'wJmFUgEd',
      'block': '{"statements":[["append",["unknown",["ara-calculator-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'o5KcFLCF',
      'block': '{"statements":[["text","\\n"],["block",["ara-calculator-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-card', 'Integration | Component | ara card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'r6L9Pfh7',
      'block': '{"statements":[["append",["unknown",["ara-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '/1Ivyb8B',
      'block': '{"statements":[["text","\\n"],["block",["ara-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-carousel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-carousel', 'Integration | Component | ara carousel', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'acrEhcWk',
      'block': '{"statements":[["append",["unknown",["ara-carousel"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'SlNe3lyA',
      'block': '{"statements":[["text","\\n"],["block",["ara-carousel"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-categorybar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-categorybar', 'Integration | Component | ara categorybar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '1B+1GTSZ',
      'block': '{"statements":[["append",["unknown",["ara-categorybar"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'tf2UAk1g',
      'block': '{"statements":[["text","\\n"],["block",["ara-categorybar"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-footer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-footer', 'Integration | Component | ara footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'xlaybk4e',
      'block': '{"statements":[["append",["unknown",["ara-footer"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '1BY0H7gV',
      'block': '{"statements":[["text","\\n"],["block",["ara-footer"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-item-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-item-card', 'Integration | Component | ara item card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '3ZIq8N+5',
      'block': '{"statements":[["append",["unknown",["ara-item-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'KEDeAwkT',
      'block': '{"statements":[["text","\\n"],["block",["ara-item-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-item-detail-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-item-detail', 'Integration | Component | ara item detail', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'W1RRcGNq',
      'block': '{"statements":[["append",["unknown",["ara-item-detail"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'rs/ITRPP',
      'block': '{"statements":[["text","\\n"],["block",["ara-item-detail"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-login', 'Integration | Component | ara login', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'sDg5E+es',
      'block': '{"statements":[["append",["unknown",["ara-login"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'qZTMY7jv',
      'block': '{"statements":[["text","\\n"],["block",["ara-login"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-myorder-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-myorder-card', 'Integration | Component | ara myorder card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '0K0rXsW6',
      'block': '{"statements":[["append",["unknown",["ara-myorder-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'pelsiVzL',
      'block': '{"statements":[["text","\\n"],["block",["ara-myorder-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-myorder-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-myorder', 'Integration | Component | ara myorder', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'ynWQlOvN',
      'block': '{"statements":[["append",["unknown",["ara-myorder"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'thbL9H5n',
      'block': '{"statements":[["text","\\n"],["block",["ara-myorder"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-navbar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-navbar', 'Integration | Component | ara navbar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'VJuYuxto',
      'block': '{"statements":[["append",["unknown",["ara-navbar"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'K9jBsrtB',
      'block': '{"statements":[["text","\\n"],["block",["ara-navbar"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-popularitem-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-popularitem', 'Integration | Component | ara popularitem', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '6gjawZyQ',
      'block': '{"statements":[["append",["unknown",["ara-popularitem"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'NrhkHKek',
      'block': '{"statements":[["text","\\n"],["block",["ara-popularitem"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-shoppingcar-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-shoppingcar-card', 'Integration | Component | ara shoppingcar card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'Nbajhs2C',
      'block': '{"statements":[["append",["unknown",["ara-shoppingcar-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'zYlp7h7x',
      'block': '{"statements":[["text","\\n"],["block",["ara-shoppingcar-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-sidebar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-sidebar', 'Integration | Component | ara sidebar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'eFDx+FqP',
      'block': '{"statements":[["append",["unknown",["ara-sidebar"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'W30Sy7My',
      'block': '{"statements":[["text","\\n"],["block",["ara-sidebar"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/ara-signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ara-signup', 'Integration | Component | ara signup', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '1gmqm9a6',
      'block': '{"statements":[["append",["unknown",["ara-signup"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'JroW9iva',
      'block': '{"statements":[["text","\\n"],["block",["ara-signup"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/tiny/ara-inputspinnet-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tiny/ara-inputspinnet', 'Integration | Component | tiny/ara inputspinnet', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '3dwjyw7/',
      'block': '{"statements":[["append",["unknown",["tiny/ara-inputspinnet"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'LsBzJkam',
      'block': '{"statements":[["text","\\n"],["block",["tiny/ara-inputspinnet"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/tiny/ara-logtitle-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tiny/ara-logtitle', 'Integration | Component | tiny/ara logtitle', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'W0oH5WIh',
      'block': '{"statements":[["append",["unknown",["tiny/ara-logtitle"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '1KLmgQku',
      'block': '{"statements":[["text","\\n"],["block",["tiny/ara-logtitle"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/tiny/ara-shoppingcarditem-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tiny/ara-shoppingcarditem', 'Integration | Component | tiny/ara shoppingcarditem', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'jt+Sr94/',
      'block': '{"statements":[["append",["unknown",["tiny/ara-shoppingcarditem"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'dVm+0iEg',
      'block': '{"statements":[["text","\\n"],["block",["tiny/ara-shoppingcarditem"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/integration/components/tiny/ara-sidebar-menu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tiny/ara-sidebar-menu', 'Integration | Component | tiny/ara sidebar menu', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'TBt2WzjQ',
      'block': '{"statements":[["append",["unknown",["tiny/ara-sidebar-menu"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'DOB4OhKC',
      'block': '{"statements":[["text","\\n"],["block",["tiny/ara-sidebar-menu"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ararice/tests/test-helper', ['exports', 'ararice/tests/helpers/resolver', 'ember-qunit'], function (exports, _arariceTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_arariceTestsHelpersResolver['default']);
});
define('ararice/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-calculator-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-calculator-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-carousel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-carousel-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-categorybar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-categorybar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-footer-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-item-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-item-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-item-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-item-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-login-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-myorder-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-myorder-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-myorder-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-myorder-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-navbar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-navbar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-popularitem-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-popularitem-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-shoppingcar-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-shoppingcar-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-sidebar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-sidebar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ara-signup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ara-signup-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tiny/ara-inputspinnet-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tiny/ara-inputspinnet-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tiny/ara-logtitle-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tiny/ara-logtitle-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tiny/ara-shoppingcarditem-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tiny/ara-shoppingcarditem-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tiny/ara-sidebar-menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tiny/ara-sidebar-menu-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/products-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/address-management/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/address-management/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/invite-people/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/invite-people/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/my-balance/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/my-balance/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/my-message/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/my-message/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/my-points/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/my-points/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/myorder/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/myorder/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/payment-management/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/payment-management/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/admin/wish-lists/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/admin/wish-lists/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/authenticated/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/authenticated/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/cart/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/cart/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/collections/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/collections/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/home/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/home/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/login/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/login/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/feature/products/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/feature/products/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/fillcolor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/fillcolor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/mult-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/mult-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/i18n-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/i18n-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/add-cart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/add-cart-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/upload/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/upload/route-test.js should pass ESLint\n\n');
  });
});
define('ararice/tests/unit/adapters/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:post', 'Unit | Adapter | post', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ararice/tests/unit/adapters/products-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:products', 'Unit | Adapter | products', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ararice/tests/unit/feature/admin/address-management/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/address-management', 'Unit | Route | feature/admin/address management', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/invite-people/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/invite-people', 'Unit | Route | feature/admin/invite people', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/my-balance/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/my-balance', 'Unit | Route | feature/admin/my balance', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/my-message/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/my-message', 'Unit | Route | feature/admin/my message', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/my-points/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/my-points', 'Unit | Route | feature/admin/my points', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/myorder/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/myorder', 'Unit | Route | feature/admin/myorder', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/payment-management/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/payment-management', 'Unit | Route | feature/admin/payment management', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin', 'Unit | Route | feature/admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/admin/wish-lists/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/admin/wish-lists', 'Unit | Route | feature/admin/wish lists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/authenticated/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/authenticated', 'Unit | Route | feature/authenticated', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/cart/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/cart', 'Unit | Route | feature/cart', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/collections/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/collections', 'Unit | Route | feature/collections', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/home/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/home', 'Unit | Route | feature/home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/login/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/login', 'Unit | Route | feature/login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/feature/products/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:feature/products', 'Unit | Route | feature/products', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ararice/tests/unit/helpers/fillcolor-test', ['exports', 'ararice/helpers/fillcolor', 'qunit'], function (exports, _arariceHelpersFillcolor, _qunit) {

  (0, _qunit.module)('Unit | Helper | fillcolor');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _arariceHelpersFillcolor.fillcolor)([42]);
    assert.ok(result);
  });
});
define('ararice/tests/unit/helpers/mult-test', ['exports', 'ararice/helpers/mult', 'qunit'], function (exports, _arariceHelpersMult, _qunit) {

  (0, _qunit.module)('Unit | Helper | mult');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _arariceHelpersMult.mult)([42]);
    assert.ok(result);
  });
});
define('ararice/tests/unit/initializers/i18n-test', ['exports', 'ember', 'ararice/initializers/i18n', 'qunit', 'ararice/tests/helpers/destroy-app'], function (exports, _ember, _arariceInitializersI18n, _qunit, _arariceTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Initializer | i18n', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _arariceTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _arariceInitializersI18n.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('ararice/tests/unit/serializers/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Serializer | post', {
    // Specify the other units that are required for this test.
    needs: ['serializer:post']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ararice/tests/unit/services/add-cart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:add-cart', 'Unit | Service | add cart', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ararice/tests/unit/upload/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:upload', 'Unit | Route | upload', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('ararice/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
