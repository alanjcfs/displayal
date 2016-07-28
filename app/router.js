import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('my-pretties', function() {
    this.route('fly');
    this.route('come-back');
  });
});

export default Router;
