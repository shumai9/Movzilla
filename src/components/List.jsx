import React, {Component} from 'react';

class List extends Component{  
  render(){
    const data = this.props.movies;
    const listItems = Object.keys(data).map((line) =>{
        return <li key={line}>{data[line].Title}</li> 
      }
    );
 
    return(
      <div className="list">
        <h1>Top Featured Movies</h1>
          <ul><a href="#">{listItems}</a></ul>
      </div>
    );
  }
}

export default List;
