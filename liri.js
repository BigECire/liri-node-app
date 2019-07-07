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
            console.log(response.data[0].venue)
            var jsonData = response.data[0];

            var songData = [
                "Name: " + jsonData.venue.name,
                "Location: " + jsonData.venue.city + ", " + jsonData.venue.region,
                "Date: " + jsonData.datetime
            ].join("\n\n");

            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        })

        break;
    case "spotify-this-song":

        spotify
            .search({ type: "track", query: term })
            .then(function (response) {
                console.log(response.tracks.items[0]);
            })
            .catch(function (err) {
                console.log(err);
            });
            
        break;

    case "movie-this":

        axios.get(URL).then(function (response) {
            console.log(response)
        })

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