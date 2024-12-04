import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-parser-форма-отчета': IISParserФормаОтчетаForm
  },

});

export default translations;