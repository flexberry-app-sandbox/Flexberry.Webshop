import { Serializer as Системный
администраторSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-системный-администратор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Системный
администраторSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
