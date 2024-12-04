import { Serializer as ОшибкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-ошибки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОшибкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
