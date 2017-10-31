import Ember from 'ember';
import layout from '../templates/components/ecds-accordion-item';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  classNames: ['ecds-accordion'],
  classNameBindings: ['isExpanded:active'],
  item: null,
  activeItem: null,

  // Handel this with the attribute instead?
  isExpanded: computed('activeItem', 'item', function() {
      return this.get('activeItem') === this.get('item');
  })
});
