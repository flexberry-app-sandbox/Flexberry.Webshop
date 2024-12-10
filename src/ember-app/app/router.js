import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-parser-test-l');
  this.route('i-i-s-parser-test-e',
  { path: 'i-i-s-parser-test-e/:id' });
  this.route('i-i-s-parser-test-e.new',
  { path: 'i-i-s-parser-test-e/new' });
  this.route('i-i-s-parser-форма-отчета');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
});

export default Router;
