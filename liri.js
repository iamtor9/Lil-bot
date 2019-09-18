require("dotenv").config();

const fs = require("fs");

//define requirements 
const Key = require("./keys");

const Spotify = require("node-spotify-api");
  const spotify = new Spotify({
  id: Key.spotify.id,
  secret: Key.spotify.secret,
  });

const moment = require("moment");
// console.log(moment, "\n\n\nYeah\n\n\n")
const axios = require("axios");

console.log("\n\n\nFirst test\n\n\n");

//define new object methods for spotify, movie, and artist 
function spotifyIt() {
spotify.search(
  {
    type: "track",
    query: "All the small",
    limit: 1
  },
  //callback function for all object methods      
  function(junk, data) {
    console.log(data.tracks.items)

    

    // append file to text log then console.log songdata
  //   fs.appendFile("log.txt", songData + divider, function(err) {
  //       if (err) delete err;
  //     });
  })

};

//moment function
function moments(value) {
  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
  .then(function(response) {    
    for (let i = 0; i < response.data.length; i++) {
      let datetime = response.data[i].datetime; 
      let dateArr = datetime.split(' '); 
      let concertResults = "-------" +
      "Venue Name: " + response.data[i].venue.name + 
      "Venue Location: " + response.data[i].venue.city +
      "Date of the Event: " + moment(dateArr[0], "MM-DD-YYYY"); 
      console.log(concertResults);
      }
  })
}

// function moment() {
//     moment.search(
//       {
//         type: "track",
//         query: "All the small",
//         limit: 1
      // }


//process term and search arguments
let term = process.argv[2];
let search = process.argv.slice(3).join(" ");
//review .join(), .split();
console.log(term);
console.log(search);

if (term === "concert-this") {

 moments(search);
 console.log("concert")

} else if (term === 'spotify-this-song') {
  //does the user's input equal 'spotify-this'?
  console.log("spotify")
  spotifyIt();
}








//   fs.readFile('random.txt', 'utf8', function(junk, data){
//     let dataArr = data.split('.');
//     console.log(dataArr);

//         if (dataArr[0] === "spotify") {
//             SPOTIFY.findSong(dataArr[1]);
//         }
//         else if (dataArr[0] === "concert") {
//             artist.findArtist(dataArr[1]);
//         }
//         else if (dataArr[0] === "movie") {
//             movie.findMovie(dataArr[1]);
//         };
//       })

// };

// // bands in townnnnnnn function and search "this" for bands in town api
// let moments = function() {
 
//   this.findMoments = function(moment) {
//     let URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
//     axios.get(URL).then(function(response) {
//       let jsonData = response.data;

// // create string for artist's data (use .join)
//     let momentData = [
//         "Venue:" + jsonData[0].venue.name,
//         "Location:" + jsonData[0].venue.country + ", " + jsonData[0].venue.city,
//         "Time:" + moment(jsonData[0].dateTime).format("MM/DD/YYYY"),
//       ].join("\n\n");

//     fs.appendFile("log.txt", artistData + divider, function(err) {
//       if (err) throw err;
//       console.log(momentData);
//       });
//     });
//   }};



// // ombd for movies function / find movie via url api
// let movies = function() {


//   this.findMovie = function(movies) {
//     let URL = "http://www.omdbapi.com/?t=" + movies + "&y=&plot=short&apikey=trilogy";

//   axios.get(URL).then(function(response) {
//     let jsonData = response.data;

// // create string for movie data (use .join)
//     let movieData = [
  
//        "Title: " + jsonData.Title,
//        "Year: " + jsonData.Year,
//        "IMDB: " + jsonData.Ratings[0].Value,
//        "Rotten Tomatos: " + jsonData.Ratings[1].Value,
//        "Country: " + jsonData.Country,
//        "Language: " + jsonData.Language,
//        "Plot: " + jsonData.Plot,
//        "Actors: " + jsonData.Actors,
//       ].join("\n\n");

//       console.log(movieData);

// // append file to text log then console.log moviedata
//   fs.appendFile("log.txt", movieData + divider, function(err) {
//      if (err) throw err;
//       console.log(movieData);
//       });
//     });
//   }};





