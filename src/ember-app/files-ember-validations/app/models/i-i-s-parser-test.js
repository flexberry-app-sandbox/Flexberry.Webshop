import {
  defineNamespace,
  defineProjections,
  Model as testMixin
} from '../mixins/regenerated/models/i-i-s-parser-test';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, testMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
