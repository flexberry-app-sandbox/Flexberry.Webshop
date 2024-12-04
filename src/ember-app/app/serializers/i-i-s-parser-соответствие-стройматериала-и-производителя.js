import { Serializer as СоответствиеСтройматериала
ИПроизводителяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-соответствие-стройматериала-и-производителя';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоответствиеСтройматериала
ИПроизводителяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
