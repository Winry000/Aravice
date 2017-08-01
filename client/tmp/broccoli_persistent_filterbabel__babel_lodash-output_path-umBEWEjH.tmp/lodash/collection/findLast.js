define('lodash/collection/findLast', ['exports', 'lodash/internal/baseEachRight', 'lodash/internal/createFind'], function (exports, _lodashInternalBaseEachRight, _lodashInternalCreateFind) {

  /**
   * This method is like `_.find` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * _.findLast([1, 2, 3, 4], function(n) {
   *   return n % 2 == 1;
   * });
   * // => 3
   */
  var findLast = (0, _lodashInternalCreateFind['default'])(_lodashInternalBaseEachRight['default'], true);

  exports['default'] = findLast;
});