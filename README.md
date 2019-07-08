# liri-node-app
### The purpose of Liri 

This is to be a one-stop place for finding where your favorite band is performing, information for a song, and information on a movie.  It can be really annoying when you have to find information for all these things in different places because you have to have three different tabs open and there is just too much information to sift through easily.  Liri allows you to do all of this in one place.

### How it works

Liri is a function that contains a switch statement, which has the four commands as cases.  Before the switch statement, the function determines what the command is and what the search term is.  After that Liri then runs the case that matches the command.

For the "concert-this" command, it uses Axios to get the information from the Town Artist Events API.  It then extracts the needed information from the promise, saves it to the log, and displays it in the console.

For the "spotify-this-song" command, Liri uses a method from the Node Spotify API in order to get a response from the Spotify API.  It gets the needed information, logs it, and displays it on the console.  If nothing was put for a search term, it automatically searches for **The Sign**

For the "movie-this" command, a method from Axios is used to call the OMDB API.  The function then goes to the response to get the needed information, write it into the log, and display it in the console.  If nothing was put for a search term, it automatically searches for the movie **Mr. Nobody**

For the "do-what-it-says" command, the variable that stores the command and the search term are both overwritten with the information stored in the random.txt file.  It then runs the function again.

### How to use Liri	

The first thing you need to do to use Lorrie is to type into the console 'node liri', followed by the command you want to use, and, if applicable, the search term.

The "concert-this" command can be used to find the next venue where a band will be playing.
![code](images\Screenshot4.png)
![result](images\Screenshot5.png)

The "spotify-this-song" command can be used to find information on the song that you searched for.  
![code](images\Screenshot6.png)
![result](images\Screenshot7.png)
If you do not put in a search term, Liri will automatically search for **The Sign**.
![code](images\Screenshot8.png)
![result](images\Screenshot9.png)

The "movie-this" command can be used to find information on the movie you searched for.  
![code](images\Screenshot10.png)
![result](images\Screenshot11.png)
If you do not enter in a movie for it to search, Liri will automatically search for **Mr. Nobody**
![code](images\Screenshot12.png)
![result](images\Screenshot13.png)

If "do-what-it-says" command is used, Liri will do whatever the random.txt file says to do.
![code](images\Screenshot14.png)
![result](images\Screenshot15.png)

I am the developer for this application.
