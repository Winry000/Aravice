define('ararice/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/products.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
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
    assert.ok(true, 'components/ara-signup.js should pass ESLint\n\n');
  });

  QUnit.test('components/tiny/ara-logtitle.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/tiny/ara-logtitle.js should pass ESLint\n\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/tiny/ara-sidebar-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tiny/ara-sidebar-menu.js should pass ESLint\n\n');
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

  QUnit.test('feature/cart/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/cart/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/collections/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/collections/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/home/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/home/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/login/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/login/route.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('feature/products/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'feature/products/route.js should pass ESLint\n\n');
  });

  QUnit.test('feature/signup/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'feature/signup/route.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
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

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
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