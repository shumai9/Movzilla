import React, { Component } from 'react';
import Movie from './components/Movie';
import List from './components/List';
import './style/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      data: '',
      next: null
    }
  }
  componentDidMount(){
    fetch("http://www.omdbapi.com/?s='the'&type=movie&page=10&apikey=60f51f50")
    .then(res => res.json())
    .then(result => {
      if(result.Response){
        this.setState({
          data: result.Search,
          loaded: true,
          next:''
        })
      }
    })
    .catch(
      e => {console.log("From movie", e);}
    );
  }

  render() {
    const movies = this.state.data;
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-logo">MOVzila</h1>
        </header>
        <div className="main">
          <List movies={movies}/>
          <Movie movies={movies}/>
        </div>
      </div>
    );
  }
}

export default App;
