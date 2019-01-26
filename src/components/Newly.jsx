import React, {Component} from 'react';
import Search from './Search';
import '../style/Newly.css';

class Newly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
      count:0,
      next: null,
    }
  }
  componentDidMount(){
  
  }    
  render() {
    return(
      <div className="new-releases">
        <h1>New Releases</h1>
        <Search />
        <div className="newly"></div>
      </div>
    );
  }
}

export default Newly;