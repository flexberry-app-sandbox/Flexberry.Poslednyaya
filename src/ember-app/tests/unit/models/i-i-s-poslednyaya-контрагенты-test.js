import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-poslednyaya-контрагенты', 'Unit | Model | i-i-s-poslednyaya-контрагенты', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
