import {
  defineNamespace,
  defineProjections,
  Model as СоответствиеСтройматериала
ИПроизводителяMixin
} from '../mixins/regenerated/models/i-i-s-parser-соответствие-стройматериала-и-производителя';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, СоответствиеСтройматериала
ИПроизводителяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
