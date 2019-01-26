import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../style/List.css'

class List extends Component{
  handleSelection = (e) =>{ 
    this.props.onSelectedMovie(e)
  }  
  render(){
    const data = this.props.movies;
    return(
      <div className="movie-list">
        <h1>Top Featured Movies</h1>
          <ul>
          { data ?
            (Object.values(data).map((movie) =>{
              return(
                <Link to="/movies"
                  key={movie.imdbID}
                  onClick={this.handleSelection}
                >
                  <li value={movie.imdbID}>{movie.Title}</li>
                </Link>
              ) 
            })
            ) : (
              null
            )
          }
        </ul>
      </div>
    );
  }
}

export default List;
