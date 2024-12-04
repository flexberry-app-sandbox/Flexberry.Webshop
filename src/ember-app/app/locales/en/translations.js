import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISParserФормаОтчетаForm from './forms/i-i-s-parser-форма-отчета';
import IISParserЗапросДанныхУСистемыModel from './models/i-i-s-parser-запрос-данных-у-системы';
import IISParserИсточникModel from './models/i-i-s-parser-источник';
import IISParserИсточникиModel from './models/i-i-s-parser-источники';
import IISParserОтчетModel from './models/i-i-s-parser-отчет';
import IISParserОшибкиModel from './models/i-i-s-parser-ошибки';
import IISParserПоискДанныхModel from './models/i-i-s-parser-поиск-данных';
import IISParserПроизводительModel from './models/i-i-s-parser-производитель';
import IISParserСистемный
администраторModel from './models/i-i-s-parser-системный-администратор';
import IISParserСоответствиеСтройматериала
ИПроизводителяModel from './models/i-i-s-parser-соответствие-стройматериала-и-производителя';
import IISParserСтройматериалModel from './models/i-i-s-parser-стройматериал';
import IISParserТоварыModel from './models/i-i-s-parser-товары';
import IISParserХарактеристикиModel from './models/i-i-s-parser-характеристики';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-parser-запрос-данных-у-системы': IISParserЗапросДанныхУСистемыModel,
    'i-i-s-parser-источник': IISParserИсточникModel,
    'i-i-s-parser-источники': IISParserИсточникиModel,
    'i-i-s-parser-отчет': IISParserОтчетModel,
    'i-i-s-parser-ошибки': IISParserОшибкиModel,
    'i-i-s-parser-поиск-данных': IISParserПоискДанныхModel,
    'i-i-s-parser-производитель': IISParserПроизводительModel,
    'i-i-s-parser-системный-администратор': IISParserСистемный
администраторModel,
    'i-i-s-parser-соответствие-стройматериала-и-производителя': IISParserСоответствиеСтройматериала
ИПроизводителяModel,
    'i-i-s-parser-стройматериал': IISParserСтройматериалModel,
    'i-i-s-parser-товары': IISParserТоварыModel,
    'i-i-s-parser-характеристики': IISParserХарактеристикиModel
  },

  'application-name': '',

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
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
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
    'i-i-s-parser-форма-отчета': IISParserФормаОтчетаForm
  },

});

export default translations;
