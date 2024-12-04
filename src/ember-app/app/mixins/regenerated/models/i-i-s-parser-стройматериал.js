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
  наименование: DS.attr('string'),
  характеристики: DS.hasMany('i-i-s-parser-характеристики', { inverse: 'стройматериал', async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-parser-стройматериал.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-parser-стройматериал.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-parser-стройматериал.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-parser-стройматериал.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-parser-стройматериал.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-parser-стройматериал.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  характеристики: {
    descriptionKey: 'models.i-i-s-parser-стройматериал.validations.характеристики.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-parser-стройматериал', {
    id: attr('Id', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    характеристики: hasMany('i-i-s-parser-характеристики', 'Характеристики', {
      id: attr('Id', { index: 0 }),
      материал: attr('Материал', { index: 1 }),
      тип: attr('Тип', { index: 2 }),
      артикул: attr('Артикул', { index: 3 }),
      цена: attr('Цена', { index: 4 })
    })
  });
};
