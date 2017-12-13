import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
});

loadInitializers(App, config.modulePrefix);

export default App;

$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a')) {
      $(this).collapse('hide');
  }
});
