import { Serializer as ЗапросДанныхУСистемыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-parser-запрос-данных-у-системы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗапросДанныхУСистемыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
