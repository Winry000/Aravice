import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ara-myorder-card', 'Integration | Component | ara myorder card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ara-myorder-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ara-myorder-card}}
      template block text
    {{/ara-myorder-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
