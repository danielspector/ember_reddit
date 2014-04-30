import reddit from "../helpers/reddit";
export default Ember.Route.extend({
  model: function() {
    return reddit.caller("funny");
  }
});
