# LIRI-Bot

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Commands
1. node liri.js my-tweets

This will show your last 20 tweets and when they were created at in your terminal/bash window.
node liri.js spotify-this-song '<song name here>'

2. node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

*Artist(s)

*The song's name

*A preview link of the song from Spotify

*The album that the song is from

3. node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


4. node liri.js do-what-it-says

It should run spotify-this-song for "Immigrant song" as follows the text in random.txt.

### You need to have spotify and twitter account for LIRI-Bot to work
Run npm install to install dependencies

- Create developer keys for your spotify and twitter accounts

- [Spotify Developer] (https://developer.spotify.com)

- [Twitter Developer] (https://developer.twitter.com)

- Locate the following keys and insert/save to a .env file



