require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");
var keys = require("./keys.js");

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

console.log(keys);

var nodeArgs = process.argv;
var action = process.argv[2];
var movieName = "";
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName = movieName + nodeArgs[i];
    }
  }

var songName = "";
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];
    }
    else {
      songName = songName + nodeArgs[i];
    }
  }

// The switch-case will direct which function gets run.
switch (action) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
    if(songName) {
        spotify(songName)
    } else{
        spotify("Immigrant song")
      }
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
function tweets(){

    var screenName = {screen_name: "RUclass"};
    client.get('statuses/user_timeline', screenName, function(error, tweets, response){
      if(!error){
        for(var i = 0; i<tweets.length; i++){
          var date = tweets[i].created_at;
          console.log("@RUtestclass: " + tweets[i].text + " Created At: " + date.substring(0, 19));
          console.log("-----------------------");

        }
      }
      else{
        console.log('Error occurred');
      }
    });
  }

//spotify function 
function spotify(){
    spotify.search({ type: 'track', query: songName}, function(error, data){
        if(!error){
          for(var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
            //artist
            console.log("Artist: " + songData.artists[0].name);
            //song name
            console.log("Song: " + songData.name);
            //spotify preview link
            console.log("Preview URL: " + songData.preview_url);
            //album name
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
            
          }
        } else{
          console.log('Error occurred.');
        }
      });
    }


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
    }
//do it function

function doit(){
    fs.readFile('random.txt', "utf8", function(error, data){
      var txt = data.split(',');
  
      spotifySong(txt[1]);
    });
  }