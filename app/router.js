import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('contact');
  this.route('history');
  this.route('partners');
  this.route('companies');
  this.route('mre');
  this.route('medicine');
  this.route('binders');
});

export default Router;
