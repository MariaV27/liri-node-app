var twitterKey = require("../key.js");

var Twitter = require('twitter');
var user = new Twitter({
  consumer_key: secretKeys.twitterKeys.consumer_key,
  consumer_secret: secretKeys.twitterKeys.consumer_secret,
  access_token_key: secretKeys.twitterKeys.access_token_key,
  access_token_secret: secretKeys.twitterKeys.access_token_secret,
});
user.get("statuses/user_timeline", function(error, tweets, response){
  for(var i = 0; i < 20; i++){
      console.log(data[i]);
    }
  });