import React, {Component} from 'react';
import '../style/Tray.css';

class Tray extends Component {
  render() {
    const movieObject = this.props.singleMovie;
    const actors = movieObject ? movieObject.Actors : '';
    const actorList = actors ? actors.split(",") : ["try again"];
    console.log('Tray', actorList  )
    return(
      movieObject ?
      <div className="tray">
        <h1>{movieObject.Title}</h1>
        <ul>Actors
        { 
          actorList.map((actor, i) => {
            return( 
              <li key={actorList[i]}>
                <h5>{actor}</h5>
              </li>
            )
          })
        }
        </ul>  
        <p>Length : {movieObject.Runtime}</p>
        <p>Genre: {movieObject.Genre}</p>
        <p>Release date: {movieObject.Released}</p>
        <p>Country : {movieObject.Country}</p>
        <p>Rating: {movieObject.Rated}</p>
        <p>Plot: {movieObject.Plot}</p>
      </div>
      :
      null
    )
  }
}

export default Tray;

// length, rating, year, country, genre
// Actors: "Jason Statham, Bingbing Li, Rainn Wilson, Cliff Curtis"
// Awards: "N/A"
// BoxOffice: "N/A"
// Country: "China, USA"
// DVD: "13 Nov 2018"
// Director: "Jon Turteltaub"
// Genre: "Action, Horror, Sci-Fi, Thriller"
// Language: "English, Mandarin"
// Metascore: "46"
// Plot: "After escaping an attack by what he claims was a 70-foot shark, Jonas Taylor must confront his fears to save those trapped in a sunken submersible."
// Poster: "https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_SX300.jpg"
// Production: "Warner Bros. Pictures"
// Rated: "PG-13"
// Ratings: [{Source: "Internet Movie Database", Value: "5.7/10"}, {Source: "Rotten Tomatoes", Value: "45%"},…]
// Released: "10 Aug 2018"
// Response: "True"
// Runtime: "113 min"
// Title: "The Meg"
// Type: "movie"
// Website: "http://TheMeg.movie"
// Writer: "Dean Georgaris (screenplay by), Jon Hoeber (screenplay by), Erich Hoeber (screenplay by), Steve Alten (based on the novel "Meg" by)"
// Year: "2018"
// imdbID: "tt4779682"
// imdbRating: "5.7"
// imdbVotes: "89,519"