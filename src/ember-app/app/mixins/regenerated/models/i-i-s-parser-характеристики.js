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
  артикул: DS.attr('number'),
  материал: DS.attr('string'),
  тип: DS.attr('number'),
  цена: DS.attr('number'),
  стройматериал: DS.belongsTo('i-i-s-parser-стройматериал', { inverse: 'характеристики', async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  артикул: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.артикул.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стройматериал: {
    descriptionKey: 'models.i-i-s-parser-характеристики.validations.стройматериал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-parser-характеристики', {
    id: attr('Id', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    артикул: attr('Артикул', { index: 3 }),
    цена: attr('Цена', { index: 4 })
  });
};
