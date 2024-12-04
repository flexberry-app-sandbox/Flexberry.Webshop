import { Serializer as СтройматериалSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-стройматериал';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтройматериалSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
