import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ara-shoppingcar-card', 'Integration | Component | ara shoppingcar card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ara-shoppingcar-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ara-shoppingcar-card}}
      template block text
    {{/ara-shoppingcar-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
