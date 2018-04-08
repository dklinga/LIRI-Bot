require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log(keys);

var nodeArgs = process.argv;
var action = process.argv[2];
var movieName = "";
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
  
      movieName = movieName + "+" + nodeArgs[i];
  
    }
  
    else {
  
      movieName += nodeArgs[i];
  
    }
  }

/* console.log(process.env.SPOTIFY_ID=your-spotify-id);
console.log(process.env.SPOTIFY_SECRET=your-spotify-secret);
console.log(process.env.SPOTIFY_ID=your-spotify-id);
console.log(process.env.SPOTIFY_ID=your-spotify-id);  */

// The switch-case will direct which function gets run.
switch (action) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        if(movieName) {
            movie(movieName)
        } else{
            movie("Mr. Nobody")
          }
        break;

    case "do-what-it-says":
        doIt();
        break;

    default:
        console.log("{Enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
        break;
}

//twitter function 

//spotify function 

//ombd function 

function movie(){
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=9460b8a3";
    console.log(queryUrl);
    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
      
          // Parse the body of the site and recover just the imdbRating
          var body = JSON.parse(body);
          console.log("Title: " + body.Title);
          console.log("Release Year: " + body.Year);
          console.log("IMdB Rating: " + body.imdbRating);
          console.log("Rotten Tomatoes Rating: " + body.Rating);
          console.log("Country: " + body.Country);
          console.log("Language: " + body.Language);
          console.log("Plot: " + body.Plot);
          console.log("Actors: " + body.Actors);
   
        }
      });

//do it function



    }