import {
  defineNamespace,
  defineProjections,
  Model as Системный
администраторMixin
} from '../mixins/regenerated/models/i-i-s-parser-системный-администратор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, Системный
администраторMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
