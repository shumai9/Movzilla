import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: "",
      next: null,
    }
  }

  handleSearch=(e)=>{
    let req = e.target.value;

    e.preventDefault();
    if(req !== '') {
      fetch("http://www.omdbapi.com/?s=`${req}`&type=movie&page=1-10&apikey=60f51f50")
      .then(res => res.json())
      .then(result => {
        if(result.Response){
          this.setState({
            data: result,
            loaded: true,
            next:''
          })
        }
      })
      .catch(
        e => {console.log("From movie", e);}
      );
    }else{
      return 'Type title please to search'
    }
  }

  render(){
    const data = this.props.movies;
  
  return(
    <div className="movies">
      <h1>Movies</h1>
      <div>
        <label>
          <input className="search title" value={this.state.search_bar} onChange={this.handleSearch}
              type="text"  name="search_bar" placeholder="type movie title here"/>
        </label>
      <button type="submit" onClick={this.handleSearch}>Search</button>
      </div>
      <div className="wrapper" >
        {
          Object.keys(data).map((line) =>{
            return(
              <div className="film" key={line}> 
                <h2 >{data[line].Title}</h2>
                <img src={data[line].Poster} alt={`${data[line].Title}`}/>          
                <p>{data[line].Year}</p> 
                <p>{data[line].Type}</p>
              </div>
            ) 
          })
        }
      </div>      
    </div>
    );
  }
}

export default Movie;

