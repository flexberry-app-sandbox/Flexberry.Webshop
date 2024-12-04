import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

import {
  defineProjections,
  ValidationRules,
  Model as ЗапросДанныхУСистемыMixin
} from '../mixins/regenerated/models/i-i-s-parser-запрос-данных-у-системы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ЗапросДанныхУСистемыMixin, Validations, {
});

defineProjections(Model);

export default Model;
