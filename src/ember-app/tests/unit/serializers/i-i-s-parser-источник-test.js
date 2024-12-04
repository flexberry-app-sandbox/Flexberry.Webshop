import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-parser-источник', 'Unit | Serializer | i-i-s-parser-источник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-parser-источник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-parser-запрос-данных-у-системы',
    'model:i-i-s-parser-источник',
    'model:i-i-s-parser-источники',
    'model:i-i-s-parser-отчет',
    'model:i-i-s-parser-ошибки',
    'model:i-i-s-parser-поиск-данных',
    'model:i-i-s-parser-производитель',
    'model:i-i-s-parser-системный-администратор',
    'model:i-i-s-parser-соответствие-стройматериала-и-производителя',
    'model:i-i-s-parser-стройматериал',
    'model:i-i-s-parser-товары',
    'model:i-i-s-parser-характеристики',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
