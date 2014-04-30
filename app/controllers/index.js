export default Ember.ArrayController.extend({
  subreddit: null,
  actions: {
    lookupSubreddit: function(){
      var sub = this.get("subreddit");
      var self = this;
      $.get("http://www.reddit.com/r/"+sub+"/new.json").then(function(data){
          self.set("model", data.data.children);
      });
    }
  }
});