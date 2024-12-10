import { Serializer as testSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-test';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(testSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
