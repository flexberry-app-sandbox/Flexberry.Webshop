import {
  defineNamespace,
  defineProjections,
  Model as ЗапросДанныхУСистемыMixin
} from '../mixins/regenerated/models/i-i-s-parser-запрос-данных-у-системы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, ЗапросДанныхУСистемыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
