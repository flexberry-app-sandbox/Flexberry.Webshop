import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  test: DS.attr('number')
});

export let ValidationRules = {
  test: {
    descriptionKey: 'models.i-i-s-parser-test.validations.test.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('testE', 'i-i-s-parser-test', {
    test: attr('Test', { index: 0 })
  });

  modelClass.defineProjection('testL', 'i-i-s-parser-test', {
    test: attr('Test', { index: 0 })
  });
};
