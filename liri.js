var twitter = require("./api/twitter.js");
var spotify = requite('./spotify.js');
var movies = require('./movies.js');
var command = process.argv[2]
var searchIt = []
for (var i = 3; i < process.argv.length; i++) {
  searchIt += " " + process.argv[i]};


switch(command) {
  case "music":
  case "spotify":
  case "spotify-this-song":
  if (searchIt == ""){
      searchIt = "stolen dance";
    }
    result = spotify(searchIt);
    break;

  case "twitter":
  case "twits":
  case "my-tweets":
    result = twitter(searchIt);
    break;

  case "movie":
  case "movie-this":
    if (searchIt == ""){
      searchIt = "Ex Machina";
    }
    result = movie(searchIt);
    break;

  case "do-what-it-says":
  case "do":
    result = console.log("execute it")
    break;

    default:
    result = console.log("Please search again");
  }