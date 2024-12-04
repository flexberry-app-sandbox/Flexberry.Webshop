import {
  defineNamespace,
  defineProjections,
  Model as ХарактеристикиMixin
} from '../mixins/regenerated/models/i-i-s-parser-характеристики';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ХарактеристикиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
