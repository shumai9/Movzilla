import React, {Component} from 'react';
import Suggestions from './Suggestions';
import '../style/Search.css';

const Api_key = `${process.env.REACT_APP_OMDb_API_KEY}`;
const API_URL = 'http://www.omdbapi.com/?'

class Search extends Component {
  constructor (props){
    super(props);
    this.state = {
      query: '',
      search_results: [],
      loaded: false
    }
  }
  getData=()=> {
    fetch(`${API_URL}s=${this.state.query}&type=movie&apikey=${Api_key}`)
    .then(res => res.json())
    .then(result => {
      if(result.Response){
        this.setState({
          search_results: result.Search,
          count: result.totalResults,
          loaded: true
        })
      }
    })
    .catch(
      e => {console.log("From movie", e);}
    );
  }
 
  handleSearchInput = (e) => {
    e.preventDefault();
    this.setState(
      { query: this.search.value },
      () => { 
        if(this.state.query && this.state.query.length > 1){
          if(this.state.query !== ''){
            this.getData();
          }
        } 
      }
    )
  }
  render() {
    const results = this.state.search_results;
    return (
      <div>
       <form onSubmit={this.handleSearchInput}>
        <input 
          className="search title"
          onChange={this.handleSearchInput}
          onFocus={this.clearSearchInput}
          type="text"
          ref={input => {this.search = input}}          
          placeholder="type movie title here"
        />
       <Suggestions results={results}/>
        </form>
        <p>Total search results: {this.state.count}</p>        
      </div>
    )
  }
}


export default Search;