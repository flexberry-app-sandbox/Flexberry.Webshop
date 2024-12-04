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
  дата: DS.attr('date'),
  отчет: DS.belongsTo('i-i-s-parser-отчет', { inverse: null, async: false }),
  пользователь: DS.belongsTo('i-i-s-parser-пользователь', { inverse: null, async: false }),
  стройматериал: DS.belongsTo('i-i-s-parser-стройматериал', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  отчет: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.отчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  стройматериал: {
    descriptionKey: 'models.i-i-s-parser-запрос-данных-у-системы.validations.стройматериал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-parser-запрос-данных-у-системы', {
    дата: attr('Дата', { index: 0 }),
    id: attr('Id', { index: 1 }),
    пользователь: belongsTo('i-i-s-parser-пользователь', 'Пользователь', {
      имя: attr('Имя', { index: 3 })
    }, { index: 2 }),
    стройматериал: belongsTo('i-i-s-parser-стройматериал', 'Стройматериал', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: 5 }),
    отчет: belongsTo('i-i-s-parser-отчет', 'Отчет', {

    }, { index: 4 })
  });
};
