import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ecds-accordion-footer', 'Integration | Component | ecds accordion footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ecds-accordion-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ecds-accordion-footer}}
      template block text
    {{/ecds-accordion-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
