define('ararice/helpers/mult', ['exports', 'ember'], function (exports, _ember) {
  exports.mult = mult;

  function mult(params1, params2) {
    return (params1[0] * params1[1]).toFixed(2);
  }

  exports['default'] = _ember['default'].Helper.helper(mult);
});