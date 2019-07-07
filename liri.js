require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");

var operand = process.argv[2];
var term = process.argv.slice(3).join(" ");
var divider = "\n------------------------------------------------------------\n\n";

switch (operand) {
    case "concert-this":

        var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp"
        axios.get(URL).then(function (response) {
            var jsonData = response.data[0];

            var bandData = [
                "Name: " + jsonData.venue.name,
                "Location: " + jsonData.venue.city + ", " + jsonData.venue.region,
                "Date: " + jsonData.datetime
            ].join("\n\n");

            fs.appendFile("log.txt", bandData + divider, function (err) {
                if (err) throw err;
                console.log(bandData);
            });
        })

        break;
    case "spotify-this-song":

        spotify
            .search({ type: "track", query: term })
            .then(function (response) {
                var jsonData = response.tracks.items[19];

                var theArtists = []

                for (var i = 0; i < jsonData.artists.length; i++) {
                    theArtists[i] = jsonData.artists[i].name
                }

                var songData = [
                    "Artist(s): " + theArtists.join(", "),
                    "Name: " + jsonData.name,
                    "Preview: " + jsonData.preview_url,
                    "Album: " + jsonData.album.name
                ].join("\n\n");

                fs.appendFile("log.txt", songData + divider, function (err) {
                    if (err) throw err;
                    console.log(songData);
                });
            })
            .catch(function (err) {
                console.log(err);
            });

        break;

    case "movie-this":

            var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

            axios.get(URL).then(function(response) {

              var jsonData = response.data;
        
              var movieData = [
                "Moive: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "IMDB Rating: " + jsonData.Ratings[0].Value,
                "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors
              ].join("\n\n");
        
              fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
                console.log(movieData);
              });
            });

        break;

    case "do-what-it-says":

        axios.get(URL).then(function (response) {
            console.log(response)
        })

        break;


    default:
        outputNum = "Not a recognized command";
}

//'https://api.spotify.com/v1/tracks/3DYVWvPh3kGwPasp7yjahc'