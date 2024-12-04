import {
  defineNamespace,
  defineProjections,
  Model as ОшибкиMixin
} from '../mixins/regenerated/models/i-i-s-parser-ошибки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ОшибкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
