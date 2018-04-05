require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


console.log(process.env.SPOTIFY_ID=your-spotify-id);
console.log(process.env.SPOTIFY_SECRET=your-spotify-secret);
console.log(process.env.SPOTIFY_ID=your-spotify-id);
console.log(process.env.SPOTIFY_ID=your-spotify-id);