import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', { path: '/' }, function() {
    this.route('show', { path: '/posts/:post_id' });
  });
});

export default Router;
