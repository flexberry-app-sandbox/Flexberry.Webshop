import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editor: DS.attr('string'),
  editTime: DS.attr('date'),
  id: DS.attr('number'),
  url: DS.attr('string'),
  поискДанных: DS.belongsTo('i-i-s-parser-поиск-данных', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-parser-источник.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-parser-источник.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-parser-источник.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-parser-источник.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-parser-источник.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  url: {
    descriptionKey: 'models.i-i-s-parser-источник.validations.url.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поискДанных: {
    descriptionKey: 'models.i-i-s-parser-источник.validations.поискДанных.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-parser-источник', {
    id: attr('Id', { index: 0 }),
    url: attr('Url', { index: 1 }),
    поискДанных: belongsTo('i-i-s-parser-поиск-данных', 'Поиск данных', {
      стройматериал: attr('Стройматериал', { index: 3 })
    }, { index: 2 })
  });
};
