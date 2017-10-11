import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ecds-accordion-header', 'Integration | Component | ecds accordion header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ecds-accordion-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ecds-accordion-header}}
      template block text
    {{/ecds-accordion-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
