import React, { Component } from 'react';
import '../style/Movie.css'

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
      next: null,
    }
  }

  handleSearch=(e)=>{
    e.preventDefault();    
    let req = document.querySelector('.search').value;

    if(req) {     
      fetch(`http://www.omdbapi.com/?s=${req}&type=movie&page=1&apikey=60f51f50`)
      .then(res => res.json())
      .then(result => {
        if(result.Response){
          this.setState({
            data: result.Search,
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
      return "please write title to search"
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
          type="text"  
          name="search_bar"
          placeholder="type movie title here"
        />
        <button type="submit"> Search </button>
        </form>
      </div>
      <div className="wrapper" >
        { this.state.data ? 
          (Object.keys(this.state.data).map((line) =>{
            return(
              <div className="film" key={line}> 
                <h2 >{this.state.data[line].Title}</h2>
                <img src={this.state.data[line].Poster} alt={`${this.state.data[line].Title}`}/>          
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

