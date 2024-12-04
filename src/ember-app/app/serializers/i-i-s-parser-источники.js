import { Serializer as ИсточникиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-источники';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИсточникиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
