import Ember from 'ember';
import layout from '../templates/components/ecds-accordion-header';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['ecds-accordion-footer'],
  classNameBindings: ['isExpanded:expanded'],
  isExpanded() {
      return this.get('isExpanded')
  }
});
