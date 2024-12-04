import { Serializer as ХарактеристикиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-характеристики';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ХарактеристикиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
