import Ember from 'ember';

export default Ember.Route.extend({
  postRepository: Ember.inject.service(),

  model: function(params) {
    return this.get('postRepository').findById(params.post_id);
  },

  actions: {
    goBackToList: function() {
      this.transitionTo('posts');
    }
  }
});
