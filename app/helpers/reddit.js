export default {
  caller: function(sr){
     return $.getJSON("http://www.reddit.com/r/"+sr+"/new.json").fail(function(){
      return [];
     }).then(function(data){
        return data.data.children.filter(function(el){
          return el.data.url.match(/.jpg$|.png$/);
        });
      }, function(err){
        return [];
      });
  }
};