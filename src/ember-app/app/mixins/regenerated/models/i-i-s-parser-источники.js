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
  приложение: DS.belongsTo('i-i-s-parser-приложение', { inverse: null, async: false }),
  товары: DS.belongsTo('i-i-s-parser-товары', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приложение: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.приложение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-parser-источники.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-parser-источники', {
    id: attr('Id', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    товары: belongsTo('i-i-s-parser-товары', 'Товары', {
      id: attr('Id', { index: 3 })
    }, { index: 2 }),
    приложение: belongsTo('i-i-s-parser-приложение', 'Приложение', {

    }, { index: 4 })
  });
};
