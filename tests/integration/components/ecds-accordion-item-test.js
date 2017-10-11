import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ecds-accordion-item', 'Integration | Component | ecds accordion item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ecds-accordion-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ecds-accordion-item}}
      template block text
    {{/ecds-accordion-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
