// require("dotenv").config();

// var keys = require("./keys.js");
// var fs = require("fs");
// var request = require("request");
// var Spotify = require("node-spotify-api");

require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs";)
var Spotify = require("./spotify");

//takes in user's input and parameters(e.g. movie title)
var input = process.argv[2];
var inputParameters = "";
for(var i = 3; i < process.argv.length; i++){
	inputParameters += " " + process.argv[i];
};

//spotify api call
function spotifyIt(){	
	var spotify = new Spotify(keys.spotify);
	
	if(inputParameters){
	spotify.search({type: "track", query: inputParameters, limit: 1}, function(err, data){
		if(err){
			console.log(err);
			return;
		}	
	
		for (var i = 0; i < data.tracks.items.length; i++){
			console.log('SONG NAME', data.tracks.items[i].name);
			console.log('ARTIST NAME', data.tracks.items[i].artists[0].name);
			console.log('ALBUM NAME', data.tracks.items[i].album.name);
			console.log('PREVIEW LINK', data.tracks.items[i].preview_url);
		}	
	});
	} else if (!inputParameters){
		spotify.request('https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE').then(function(data) {    
		    console.log("SONG NAME", data.name);
		    console.log("ARTIST NAME", data.artists[0].name);
		    console.log("ALBUM NAME", data.album.name);
		    console.log("PREVIEW LINK", data.preview_url);   
		  }).catch(function(err) {
		    console.error('Error occurred: ' + err); 
		  });
	}
};

//omdb api call
function movie(){	
	request("http://www.omdbapi.com/?t=" + inputParameters + "&y=&plot=short&apikey=trilogy", function(error,response,body){
		if(!error && response.statusCode===200 && inputParameters){			
			console.log("Movie: " + JSON.parse(body).Title);
			console.log("Release Year: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
			console.log("Rotten Tomatoes Ratings: " + JSON.parse(body).Ratings[1].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		} else {
			request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function(error, response, body){
			console.log("Movie: " + JSON.parse(body).Title);
			console.log("Release Year: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
			console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
			})
		}
	})
};

//reads the file function for calling spotifyIt function using contents of the text file as parameter
function random(){	
	fs.readFile("random.txt", "utf8", function(error, data){		
		var newData = data.split(",");		
		input=newData[0];	
		inputParameters=newData[1];		
		spotifyIt();
	})
};

//determine which of the functions to call & return
if (input==="spotify-this-song"){
	spotifyIt();	
} else if (input==="movie-this"){
	movie();	
} else if (input==="do-what-it-says"){
	random();
};


//axios and bandsintown api
var axios = require("axios");
    var fs = require("fs");
  
// Create song constructor
      var SONG = function() {

// have divider that acts as the space between the tv data we print in log.txt
      var divider = "\n------------------------------------------------------------\n\n";
  
// findSong takes in name of a song, and searches the spotify API via URL

        this.findSong = function(song) {
            var URL ="https://www.npmjs.com/package/node-spotify-api" + song;
        }
      }

    axios.get(URL).then(function(response) {
    // Place the response.data into a variable, jsonData.
         var jsonData = response.data;
  
// showSong ends up being the string that contains songs data, then printed to the console
     var songData = [
        "Song: " + jsonData.name,
        "Genre: " + jsonData.genre.join(", "),
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
        ].join("\n\n");
  
 // Append showData and the divider to log.txt, print showData to the console
    fs.appendFile("log.txt", showData + divider, function(err) {
      if (err) throw err;
      console.log(showData);
    });

// not sure if song/artist/band goes inside this function yet
    this.findBands = function(artist) {
        var URL = "http://www.artists.bandsintown.com/bandsintown-api" + artist;



// //keep below for my own refrence for learning

// var axios = require("axios");
//     var fs = require("fs");
  
// // Create song constructor
//       var SONG = function() {

// // have divider that acts as the space between the tv data we print in log.txt
//       var divider = "\n------------------------------------------------------------\n\n";
  
// // findSong takes in name of a song, and searches the spotify API via URL

//         this.findSong = function(song) {
//             var URL ="https://www.npmjs.com/package/node-spotify-api" + song;
//         }
//       }

//     axios.get(URL).then(function(response) {
//     // Place the response.data into a variable, jsonData.
//          var jsonData = response.data;
  
// // showSong ends up being the string that contains songs data, then printed to the console
//      var songData = [
//         "Song: " + jsonData.name,
//         "Genre: " + jsonData.genre.join(", "),
//         "Network: " + jsonData.network.name,
//         "Summary: " + jsonData.summary
//         ].join("\n\n");
  
//  // Append showData and the divider to log.txt, print showData to the console
//     fs.appendFile("log.txt", showData + divider, function(err) {
//       if (err) throw err;
//       console.log(showData);
//     });

// // not sure if song/artist/band goes inside this function yet
//     this.findBands = function(artist) {
//         var URL = "http://www.artists.bandsintown.com/bandsintown-api" + artist;
  
// //       // Add code to search the TVMaze API for the given actor
// //       // The API will return an array containing multiple actors, just grab the first result
// //       // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
// //       // Print this information to the console
// //     };
// //   };
  
//      module.exports = Spotify;
// // // Add code to print whether the user is  searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// // var fs = require("fs");