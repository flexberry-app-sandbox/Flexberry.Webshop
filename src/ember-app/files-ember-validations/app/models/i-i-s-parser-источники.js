import {
  defineNamespace,
  defineProjections,
  Model as ИсточникиMixin
} from '../mixins/regenerated/models/i-i-s-parser-источники';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ИсточникиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
