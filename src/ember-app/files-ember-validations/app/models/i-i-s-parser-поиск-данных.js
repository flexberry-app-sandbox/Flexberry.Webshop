import {
  defineNamespace,
  defineProjections,
  Model as ПоискДанныхMixin
} from '../mixins/regenerated/models/i-i-s-parser-поиск-данных';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ПоискДанныхMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
