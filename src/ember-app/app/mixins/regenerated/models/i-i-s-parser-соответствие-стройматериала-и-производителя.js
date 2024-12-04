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
  производитель: DS.attr('string'),
  стройматериал: DS.attr('string'),
  производитель: DS.belongsTo('i-i-s-parser-производитель', { inverse: null, async: false }),
  стройматериал: DS.belongsTo('i-i-s-parser-стройматериал', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-parser-соответствие-стройматериала-и-производителя.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-parser-соответствие-стройматериала-и-производителя.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-parser-соответствие-стройматериала-и-производителя.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-parser-соответствие-стройматериала-и-производителя.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-parser-соответствие-стройматериала-и-производителя.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-parser-соответствие-стройматериала-и-производителя.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  стройматериал: {
    descriptionKey: 'models.i-i-s-parser-соответствие-стройматериала-и-производителя.validations.стройматериал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-parser-соответствие-стройматериала-и-производителя', {
    id: attr('Id', { index: 0 }),
    производитель: attr('Производитель', { index: 1 }),
    стройматериал: attr('Стройматериал', { index: 2 }),
    производитель: belongsTo('i-i-s-parser-производитель', 'Производитель', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: 1 }),
    стройматериал: belongsTo('i-i-s-parser-стройматериал', 'Стройматериал', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: 2 })
  });
};
