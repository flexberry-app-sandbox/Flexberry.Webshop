import { Serializer as ИсточникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-источник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИсточникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
