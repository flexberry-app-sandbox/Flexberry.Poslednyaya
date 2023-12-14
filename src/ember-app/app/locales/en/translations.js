import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPoslednyayaЕдиницыИзмерLForm from './forms/i-i-s-poslednyaya-единицы-измер-l';
import IISPoslednyayaЗаказПостLForm from './forms/i-i-s-poslednyaya-заказ-пост-l';
import IISPoslednyayaКонтрагентыLForm from './forms/i-i-s-poslednyaya-контрагенты-l';
import IISPoslednyayaНоменклатураLForm from './forms/i-i-s-poslednyaya-номенклатура-l';
import IISPoslednyayaОрганизацииLForm from './forms/i-i-s-poslednyaya-организации-l';
import IISPoslednyayaОтчетОЗакLForm from './forms/i-i-s-poslednyaya-отчет-о-зак-l';
import IISPoslednyayaПланЗакупокLForm from './forms/i-i-s-poslednyaya-план-закупок-l';
import IISPoslednyayaСкладыLForm from './forms/i-i-s-poslednyaya-склады-l';
import IISPoslednyayaЕдиницыИзмерEForm from './forms/i-i-s-poslednyaya-единицы-измер-e';
import IISPoslednyayaЗаказПостEForm from './forms/i-i-s-poslednyaya-заказ-пост-e';
import IISPoslednyayaКонтрагентыEForm from './forms/i-i-s-poslednyaya-контрагенты-e';
import IISPoslednyayaНоменклатураEForm from './forms/i-i-s-poslednyaya-номенклатура-e';
import IISPoslednyayaОрганизацииEForm from './forms/i-i-s-poslednyaya-организации-e';
import IISPoslednyayaОтчетОЗакEForm from './forms/i-i-s-poslednyaya-отчет-о-зак-e';
import IISPoslednyayaПланЗакупокEForm from './forms/i-i-s-poslednyaya-план-закупок-e';
import IISPoslednyayaСкладыEForm from './forms/i-i-s-poslednyaya-склады-e';
import IISPoslednyayaЕдиницыИзмерModel from './models/i-i-s-poslednyaya-единицы-измер';
import IISPoslednyayaЗаказПостModel from './models/i-i-s-poslednyaya-заказ-пост';
import IISPoslednyayaКонтрагентыModel from './models/i-i-s-poslednyaya-контрагенты';
import IISPoslednyayaНоменклатураModel from './models/i-i-s-poslednyaya-номенклатура';
import IISPoslednyayaОрганизацииModel from './models/i-i-s-poslednyaya-организации';
import IISPoslednyayaОтчетОЗакModel from './models/i-i-s-poslednyaya-отчет-о-зак';
import IISPoslednyayaПланЗакупокModel from './models/i-i-s-poslednyaya-план-закупок';
import IISPoslednyayaПланModel from './models/i-i-s-poslednyaya-план';
import IISPoslednyayaСкладыModel from './models/i-i-s-poslednyaya-склады';
import IISPoslednyayaТЧЗаказModel from './models/i-i-s-poslednyaya-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-poslednyaya-единицы-измер': IISPoslednyayaЕдиницыИзмерModel,
    'i-i-s-poslednyaya-заказ-пост': IISPoslednyayaЗаказПостModel,
    'i-i-s-poslednyaya-контрагенты': IISPoslednyayaКонтрагентыModel,
    'i-i-s-poslednyaya-номенклатура': IISPoslednyayaНоменклатураModel,
    'i-i-s-poslednyaya-организации': IISPoslednyayaОрганизацииModel,
    'i-i-s-poslednyaya-отчет-о-зак': IISPoslednyayaОтчетОЗакModel,
    'i-i-s-poslednyaya-план-закупок': IISPoslednyayaПланЗакупокModel,
    'i-i-s-poslednyaya-план': IISPoslednyayaПланModel,
    'i-i-s-poslednyaya-склады': IISPoslednyayaСкладыModel,
    'i-i-s-poslednyaya-т-ч-заказ': IISPoslednyayaТЧЗаказModel
  },

  'application-name': 'Avtomatizaciya_zakupok_gotovaya',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupok_gotovaya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupok_gotovaya',
          title: 'Avtomatizaciya_zakupok_gotovaya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочник: {
            caption: 'Справочник',
            title: 'Справочник',
            'i-i-s-poslednyaya-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-poslednyaya-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-poslednyaya-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-poslednyaya-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-poslednyaya-единицы-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-poslednyaya-заказ-пост-l': {
              caption: 'Заказ поставщику',
              title: ''
            },
            'i-i-s-poslednyaya-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-poslednyaya-отчет-о-зак-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-poslednyaya-единицы-измер-l': IISPoslednyayaЕдиницыИзмерLForm,
    'i-i-s-poslednyaya-заказ-пост-l': IISPoslednyayaЗаказПостLForm,
    'i-i-s-poslednyaya-контрагенты-l': IISPoslednyayaКонтрагентыLForm,
    'i-i-s-poslednyaya-номенклатура-l': IISPoslednyayaНоменклатураLForm,
    'i-i-s-poslednyaya-организации-l': IISPoslednyayaОрганизацииLForm,
    'i-i-s-poslednyaya-отчет-о-зак-l': IISPoslednyayaОтчетОЗакLForm,
    'i-i-s-poslednyaya-план-закупок-l': IISPoslednyayaПланЗакупокLForm,
    'i-i-s-poslednyaya-склады-l': IISPoslednyayaСкладыLForm,
    'i-i-s-poslednyaya-единицы-измер-e': IISPoslednyayaЕдиницыИзмерEForm,
    'i-i-s-poslednyaya-заказ-пост-e': IISPoslednyayaЗаказПостEForm,
    'i-i-s-poslednyaya-контрагенты-e': IISPoslednyayaКонтрагентыEForm,
    'i-i-s-poslednyaya-номенклатура-e': IISPoslednyayaНоменклатураEForm,
    'i-i-s-poslednyaya-организации-e': IISPoslednyayaОрганизацииEForm,
    'i-i-s-poslednyaya-отчет-о-зак-e': IISPoslednyayaОтчетОЗакEForm,
    'i-i-s-poslednyaya-план-закупок-e': IISPoslednyayaПланЗакупокEForm,
    'i-i-s-poslednyaya-склады-e': IISPoslednyayaСкладыEForm
  },

});

export default translations;
