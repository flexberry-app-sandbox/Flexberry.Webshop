import {
  defineNamespace,
  defineProjections,
  Model as ОтчетMixin
} from '../mixins/regenerated/models/i-i-s-parser-отчет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ОтчетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
