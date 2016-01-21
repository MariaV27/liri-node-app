var twitterKey = require("../key.js");

var Twitter = require('twitter');
var user = new Twitter({
  consumer_key: secretKeys.twitterKey.consumer_key,
  consumer_secret: secretKeys.twitterKey.consumer_secret,
  access_token_key: secretKeys.twitterKey.access_token_key,
  access_token_secret: secretKeys.twitterKe.access_token_secret,
});
user.get("statuses/user_timeline", function(error, tweets, response){
  for(var i = 0; i < 20; i++){
      console.log(data[i]);
    }
  });