define('ember-i18n/config/tr', ['exports', 'ember-i18n/config/constants'], function (exports, _emberI18nConfigConstants) {
  exports['default'] = {
    rtl: false,

    pluralForm: function pluralForm() /* n */{
      return _emberI18nConfigConstants.ONE;
    }
  };
});