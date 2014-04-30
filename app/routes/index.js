export default Ember.Route.extend({
  model: function() {
    console.log("hey there");
    return $.get("http://www.reddit.com/r/funny/new.json").then(function(data){
      return data.data.children.filter(function(el){
        return el.data.url.match(/.jpg$|.png$/);
      });
    });
  }
});
