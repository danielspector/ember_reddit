export default {
  caller: function(sr){
     return $.get("http://www.reddit.com/r/"+sr+"/new.json").then(function(data){
        return data.data.children.filter(function(el){
          return el.data.url.match(/.jpg$|.png$/);
        });
      });
  }
};