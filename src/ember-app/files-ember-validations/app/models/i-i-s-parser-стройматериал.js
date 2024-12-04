import {
  defineNamespace,
  defineProjections,
  Model as СтройматериалMixin
} from '../mixins/regenerated/models/i-i-s-parser-стройматериал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, СтройматериалMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
