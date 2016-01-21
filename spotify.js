module.exports = function spotify(searchIt){
  var spotify = require("spotify");
  var track = searchIt;

 
spotify.search({ type: 'track', It: song }, function(err, data) {
    if ( err ) {
        console.log("Error:" + err);   
        return; 
    }
    else {
    console.log(data.tracks.items[0].artists[0].name);
    console.log(data.tracks.items[0].preview_url);
    console.log(data.tracks.items[0].album.name);
    console.log(data.tracks.items[0].external_urls.spotify); 
    }
  });
}