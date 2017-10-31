import Ember from 'ember';
import layout from '../templates/components/ecds-accordion-panel';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['ecds-accordion-container'],
  items: null,
  activeItem: null,
  actions: {
      toggleActiveItem(item) {
          if (this.get('activeItem') !== item) {
              this.set('activeItem', item);
              item.setProperties({active: false});
            } else {
              this.set('activeItem', null);
              item.setProperties({active: true});
          }
      }
  }
});
