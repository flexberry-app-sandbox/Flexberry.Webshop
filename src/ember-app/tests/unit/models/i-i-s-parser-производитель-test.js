import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-parser-производитель', 'Unit | Model | i-i-s-parser-производитель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-parser-test',
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
