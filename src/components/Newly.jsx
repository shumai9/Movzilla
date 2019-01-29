import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Tray from './Tray';
import '../style/Newly.css';

const Api_key = `${process.env.REACT_APP_OMDb_API_KEY}`;
const API_URL = 'http://www.omdbapi.com/?';


class Newly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      data: null,
      id: '',
      singleMovie: '',
      next: null
    }
  }
  getSingleMovie = () => {
    fetch(`${API_URL}i=${this.state.id}&apikey=${Api_key}`)
    .then(res => res.json())
    .then(result => {
      this.setState({
        singleMovie: result
      });
    })
  }
  clickHandler=(imdbID) =>{
    console.log('from newly recieved', imdbID );
    this.setState({
      load: !this.state.load,
      id: imdbID
    })
    this.getSingleMovie();
  }

  componentDidMount(){
    // get random latest movies by year and title
    fetch(`${API_URL}s='the'&y=2018&apikey=${Api_key}`)
    .then(res => res.json())
    .then(result => {
      if(result.Response){
        this.setState({
          data: result.Search,
          count: result.totalResults
        })
      }
    })
    .catch(
      e => {console.log("From movie", e);}
    );
  }    
  render() {
    const data = this.state.data;
    const singleMovie = this.state.singleMovie;
    const title = singleMovie ? singleMovie.Title : '';
    return(
      <div className="new-releases">
        <h1>New Releases</h1>
        <Search />
        <div className="newly">
          { data ?
            (Object.values(data).map((movie, i) =>{             
              return(
                <div key={i}>
                <Link to={`/new_releases/${title}`}>
                  <img 
                    className="poster" 
                    data-movid={movie.imdbID}
                    src={movie.Poster}
                    alt={`${movie.Title}`}
                    onClick={ ()=> {this.clickHandler(movie.imdbID)}}
                  />
                </Link>
                </div>
              ) 
            })
            ) : (
              null
            )
          }
        </div>
        <Tray singleMovie={singleMovie} />
      </div>
    );
  }
}

export default Newly; 