module.exports = function movie(searchIt){
  var request = require('request');
  var movieGo = searchIt;

 request("http://www.omdbapi.com/?t=" + movieInput +"&y=&plot=long&tomatoes=true&r=json", function(error, response, body) {
    
  var movieObject = JSON.parse(body);
    console.log("the title:", movieObject.Title);
    console.log("the year:", movieObject.Year)
    console.log("the IMDB Rating:", movieObject.imdbRating)
    console.log("the country:", movieObject.Country)
    console.log("the language:", movieObject.Language)
    console.log("the plot:", movieObject.Plot)
    console.log("the actors:", movieObject.Actors)
  });
}
