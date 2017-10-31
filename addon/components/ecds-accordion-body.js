import Ember from 'ember';
import layout from '../templates/components/ecds-accordion-body';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['ecds-accordion-body'],
  classNameBindings: ['isExpanded:expanded'],
  isExpanded() {
      return this.get('isExpanded')
  },
  customEvents: {
    transitionend: 'transitionend'
  },

  transitionend() {}
});
