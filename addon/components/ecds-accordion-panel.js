import Ember from 'ember';
import layout from '../templates/components/ecds-accordion-panel';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  classNames: ['ecds-accordion-container'],
  classNameBindings: ['hasActive:has-active'],
  items: null,
  activeItem: null,
  hasActive: computed('activeItem', function() {
    return this.get('activeItem');
  }),

  actions: {
      toggleActiveItem(item) {
          if (this.get('activeItem') !== item) {
              this.set('activeItem', item);
            } else {
              this.set('activeItem', null);
              item.setProperties({accordion_active: false});
          }
      }
  }
});
