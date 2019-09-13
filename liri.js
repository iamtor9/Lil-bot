require("dotenv").config();

const fs = require("fs");

//define requirements 
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const moment = require("moment");
const axios = require("axios");

//define new object methods for spotify, movie, and artist 
let SPOTIFY = new SPOTIFY();
let movie = new movie();
let artist = new artist();

//process term and search arguments
let term = process.argV[2]
let search = process.argV.splice(3).join(" ");

if (!term || !search && term === "movie"){
    term = "movie"
    search = "year"
};

if (!search && term === "concert"){
    search = "current location"
};

if (!search && term === "spotify"){
    search = "play my jam"
};

if (term === "movie") {
    movie.findMovie(search);
}
else if (term === "concert") {
    artist.findArtist(search);
}
else if (term === "spotify") {
    SPOTIFY.findSong(search);
}
else if (term === "doThis") {

  fs.readFile('random.txt', 'utf8', function(junk, data){
    let dataArr = data.split('.');
    console.log(dataArr);

        if (dataArr[0] === "spotify") {
            SPOTIFY.findSong(dataArr[1]);
        }
        else if (dataArr[0] === "concert") {
            artist.findArtist(dataArr[1]);
        }
        else if (dataArr[0] === "movie") {
            movie.findMovie(dataArr[1]);
        };
      })

};

// bands in townnnnnnn function and search "this" for bands in town api
let artista = function(); {
  let divider = "\n------------------------\n\n";

  this.findArtist = function(artista) {
    let URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
    axios.get(URL).then(function(response) {
      let jsonData = response.data;

// create string for artist's data (use .join)
    let artistData = [
        "Venue:" + jsonData[0].venue.name,
        "Location:" + jsonData[0].venue.country + ", " + jsonData[0].venue.city,
        "Time:" + moment(jsonData[0].dateTime).format("MM/DD/YYYY"),
      ].join("\n\n");

    fs.appendFile("log.txt", artistData + divider, function(err) {
      if (err) throw err;
      console.log(artistData);
      });
    });
  }};

    module.exports = artista;

// ombd for movies function / find movie via url api
let movie = function() {
let divider = "\n--------------------------\n\n";

  this.findMovie = function(movie) {
    let URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  axios.get(URL).then(function(response) {
    let jsonData = response.data;

// create string for movie data (use .join)
    let movieData = [
       "Title: " + jsonData.Title,
       "Year: " + jsonData.Year,
       "IMDB: " + jsonData.Ratings[0].Value,
       "Rotten Tomatos: " + jsonData.Ratings[1].Value,
       "Country: " + jsonData.Country,
       "Language: " + jsonData.Language,
       "Plot: " + jsonData.Plot,
       "Actors: " + jsonData.Actors,
      ].join("\n\n");

      console.log(movieData);

// append file to text log then console.log moviedata
  fs.appendFile("log.txt", movieData + divider, function(err) {
     if (err) throw err;
      console.log(movieData);
      });
    });
  }};


  module.exports = movie;

//spottifyyyyyyyy section
// Function for running a Spotify search then divider
let SPOTIFY = function() {

  let divider = "\n---------------------------\n\n";

  this.findSong = function(song) {
  spotify.search(
    {
      type: "track",
      query: song,
      limit: 1
    },
    function(junk, data) {
      let songs = data.tracks.items;

      let songData = [
        "Artist name:" + songs[0].artists[0].name,
        "Song title:" + songs[0].name,
        "Album:" + songs[0].album.name,
        "Preview song:" + songs[0].preview_url,
      ].join("\n\n");

      console.log(songData);
  
      // append file to text log then console.log songdata
      fs.appendFile("log.txt", songData + divider, function(err) {
          if (err) throw err;
        });
    });
  }
};

module.exports = SPOTIFY;
