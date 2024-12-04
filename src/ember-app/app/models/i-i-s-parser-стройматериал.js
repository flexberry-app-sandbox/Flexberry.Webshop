import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

import {
  defineProjections,
  ValidationRules,
  Model as СтройматериалMixin
} from '../mixins/regenerated/models/i-i-s-parser-стройматериал';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, СтройматериалMixin, Validations, {
});

defineProjections(Model);

export default Model;
