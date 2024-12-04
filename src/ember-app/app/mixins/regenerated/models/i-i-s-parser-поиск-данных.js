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
  пользователя: DS.attr('number'),
  стройматериал: DS.attr('string'),
  пользователь: DS.belongsTo('i-i-s-parser-пользователь', { inverse: null, async: false }),
  стройматериал: DS.belongsTo('i-i-s-parser-стройматериал', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пользователя: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.пользователя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стройматериал: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.стройматериал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-parser-поиск-данных.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-parser-поиск-данных', {
    стройматериал: attr('Стройматериал', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    id: attr('Id', { index: 2 }),
    пользователя: attr('Пользователя', { index: 3 }),
    пользователь: belongsTo('i-i-s-parser-пользователь', 'Пользователь', {
      имя: attr('Имя', { index: 5 })
    }, { index: 4 }),
    стройматериал: belongsTo('i-i-s-parser-стройматериал', 'Стройматериал', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: 0 })
  });
};
