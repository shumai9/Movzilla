import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Movie from './components/Movie';
import List from './components/List';
import Newly from './components/Newly'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './style/App.css';

const Apikey = `${process.env.REACT_APP_OMDb_API_KEY}`;

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
      <BrowserRouter>
        <div className="App">
          <header className="App-header">          
            <Nav />
            <h1 className="App-logo">MOVzila</h1>
          </header>
          <div className="container">
            <List movies={movies}/>
            <div className="main">            
              <Switch>
                <Route exact path="/" render={null} />
                <Route exact path="/home"
                  render={props => (
                    <Home {...props}/>
                  )}
                />
                <Route path="/about"
                  render={props => (
                    <About {...props}/>
                  )}
                />
                <Route path="/new_releases"
                  render={props => (
                    <Newly {...props}/>
                  )}
                />
                <Route path="/contact"
                  render={props => (
                    <Contact {...props}/>
                  )}
                />
                <Route path="/movies"
                  render={props => (
                    <Movie movies={movies}/>
                  )}
                />                
              </Switch>
              </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
