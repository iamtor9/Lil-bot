 var Spotify = require("./spotify");

// Create new Spotify object

var spotify = new Spotify();

// Write code here to parse command line arguments and store them into variables
var search = process.argV[2];
var term = process.argV.slice(3).join(" ");

console.log(search)

//if/else statements for search and term spotify song
if (!search) {
    search = "song";
}

if (!term) {
    term = "Blue Jeans";
}


if (search === "song") {
    console.log("Searching for Spotify song");
    spotify.findSong(term);
  } else {
    console.log("Search for new song");
  }

  //i think a promise goes here.. .then which returns the paramaters for the searched spotify song
//   .then
//   {
//     "name": "song-search",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//     }
//   }
  
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
  
//       // Add code to search the TVMaze API for the given actor
//       // The API will return an array containing multiple actors, just grab the first result
//       // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
//       // Print this information to the console
//     };
//   };
  
     module.exports = Spotify;
// // Add code to print whether the user is  searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// var fs = require("fs");