import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fade-in-and-out--contact', 'Integration | Component | fade in and out  contact', {
  integration: true,
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fade-in-and-out--contact}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fade-in-and-out--contact}}
      template block text
    {{/fade-in-and-out--contact}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
