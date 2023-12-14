import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-poslednyaya-единицы-измер-l');
  this.route('i-i-s-poslednyaya-единицы-измер-e',
  { path: 'i-i-s-poslednyaya-единицы-измер-e/:id' });
  this.route('i-i-s-poslednyaya-единицы-измер-e.new',
  { path: 'i-i-s-poslednyaya-единицы-измер-e/new' });
  this.route('i-i-s-poslednyaya-заказ-пост-l');
  this.route('i-i-s-poslednyaya-заказ-пост-e',
  { path: 'i-i-s-poslednyaya-заказ-пост-e/:id' });
  this.route('i-i-s-poslednyaya-заказ-пост-e.new',
  { path: 'i-i-s-poslednyaya-заказ-пост-e/new' });
  this.route('i-i-s-poslednyaya-контрагенты-l');
  this.route('i-i-s-poslednyaya-контрагенты-e',
  { path: 'i-i-s-poslednyaya-контрагенты-e/:id' });
  this.route('i-i-s-poslednyaya-контрагенты-e.new',
  { path: 'i-i-s-poslednyaya-контрагенты-e/new' });
  this.route('i-i-s-poslednyaya-номенклатура-l');
  this.route('i-i-s-poslednyaya-номенклатура-e',
  { path: 'i-i-s-poslednyaya-номенклатура-e/:id' });
  this.route('i-i-s-poslednyaya-номенклатура-e.new',
  { path: 'i-i-s-poslednyaya-номенклатура-e/new' });
  this.route('i-i-s-poslednyaya-организации-l');
  this.route('i-i-s-poslednyaya-организации-e',
  { path: 'i-i-s-poslednyaya-организации-e/:id' });
  this.route('i-i-s-poslednyaya-организации-e.new',
  { path: 'i-i-s-poslednyaya-организации-e/new' });
  this.route('i-i-s-poslednyaya-отчет-о-зак-l');
  this.route('i-i-s-poslednyaya-отчет-о-зак-e',
  { path: 'i-i-s-poslednyaya-отчет-о-зак-e/:id' });
  this.route('i-i-s-poslednyaya-отчет-о-зак-e.new',
  { path: 'i-i-s-poslednyaya-отчет-о-зак-e/new' });
  this.route('i-i-s-poslednyaya-план-закупок-l');
  this.route('i-i-s-poslednyaya-план-закупок-e',
  { path: 'i-i-s-poslednyaya-план-закупок-e/:id' });
  this.route('i-i-s-poslednyaya-план-закупок-e.new',
  { path: 'i-i-s-poslednyaya-план-закупок-e/new' });
  this.route('i-i-s-poslednyaya-склады-l');
  this.route('i-i-s-poslednyaya-склады-e',
  { path: 'i-i-s-poslednyaya-склады-e/:id' });
  this.route('i-i-s-poslednyaya-склады-e.new',
  { path: 'i-i-s-poslednyaya-склады-e/new' });
});

export default Router;
