import reddit from "../helpers/reddit";
export default Ember.ArrayController.extend({
  subreddit: null,
  actions: {
    lookupSubreddit: function(){
      var sub = this.get("subreddit");
      var self = this;
      reddit.caller(sub).then(function(el){
        self.set("model", el);
      });
    }
  }
});