import { Serializer as ПоискДанныхSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-поиск-данных';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПоискДанныхSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
