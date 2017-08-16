import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tiny/ara-shoppingcarditem', 'Integration | Component | tiny/ara shoppingcarditem', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tiny/ara-shoppingcarditem}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tiny/ara-shoppingcarditem}}
      template block text
    {{/tiny/ara-shoppingcarditem}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
