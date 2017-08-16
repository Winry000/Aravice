define('ararice/helpers/fillcolor', ['exports', 'ember'], function (exports, _ember) {
  exports.fillcolor = fillcolor;

  function fillcolor(params /*, hash*/) {
    return 'background-color:' + params;
  }

  exports['default'] = _ember['default'].Helper.helper(fillcolor);
});