import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-poslednyaya-организации', 'Unit | Serializer | i-i-s-poslednyaya-организации', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-poslednyaya-организации',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-poslednyaya-сост-оплаты',
    'transform:i-i-s-poslednyaya-сост-отгрузки',

    'model:i-i-s-poslednyaya-единицы-измер',
    'model:i-i-s-poslednyaya-заказ-пост',
    'model:i-i-s-poslednyaya-контрагенты',
    'model:i-i-s-poslednyaya-номенклатура',
    'model:i-i-s-poslednyaya-организации',
    'model:i-i-s-poslednyaya-отчет-о-зак',
    'model:i-i-s-poslednyaya-план-закупок',
    'model:i-i-s-poslednyaya-план',
    'model:i-i-s-poslednyaya-склады',
    'model:i-i-s-poslednyaya-т-ч-заказ',
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
