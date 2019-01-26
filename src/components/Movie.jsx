import React, { Component } from 'react';
import '../style/Movie.css';

const Api_key = `${process.env.REACT_APP_OMDb_API_KEY}`;
const API_URL = 'http://www.omdbapi.com/?'

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
      count: 0,
      next: null,
    }
  }

  clearSearch =(e)=>{
    e.target.value = ''
    return <p>"please write title to search"</p>
  }
  handleSearch=(e)=>{
    e.preventDefault();    
    let req = document.querySelector('.search').value;

    if(req) {     
      fetch(`${API_URL}s=${req}&type=movie&page=1&apikey=${Api_key}`)
      .then(res => res.json())
      .then(result => {
        if(result.Response){
          this.setState({
            data: result.Search,
            count: result.totalResults,
            loaded: true,
            next:''
          })
          console.log("From fetch", req)
        }
      })
      .catch(
        e => {console.log("From movie", e);}
      );
    }else{
      return
    }

    console.log('from handler', req);
  }

  render(){
  
  return(
    <div className="movies">
      <h1>Movies</h1>
      <div>
       <form onSubmit={this.handleSearch}>
        <input 
          className="search title"
          value={this.state.search_bar}
          onChange={this.handleSearch}
          onFocus={this.clearSearch}
          type="text"  
          name="search_bar"
          placeholder="type movie title here"
        />
        <button type="submit"> Search </button>
        </form>
        <p>Total search results: {this.state.count}</p>
      </div>
      <div className="wrapper" >
        { this.state.data ? 
          (Object.keys(this.state.data).map((line) =>{
            return(
              <div className="film" key={line}> 
                <h2 >{this.state.data[line].Title}</h2>
                <img 
                  src={this.state.data[line].Poster}
                  alt={`${this.state.data[line].Title}`}
                />          
                <p>{this.state.data[line].Year}</p> 
                <p>{this.state.data[line].Type}</p>
              </div>
            ) 
          })
          ) : (
            null
          )
        }
      </div>      
    </div>
    );
  }
}

export default Movie;

