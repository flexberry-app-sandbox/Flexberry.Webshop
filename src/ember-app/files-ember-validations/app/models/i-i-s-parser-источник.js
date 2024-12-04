import {
  defineNamespace,
  defineProjections,
  Model as ИсточникMixin
} from '../mixins/regenerated/models/i-i-s-parser-источник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ИсточникMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
