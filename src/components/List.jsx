import React, {Component} from 'react';
import '../style/List.css'

class List extends Component{  
  render(){
    const data = this.props.movies;
    return(
      <div className="list">
        <h1>Top Featured Movies</h1>
          <ul>
          { data ?
            (Object.keys(data).map((line) =>{
              return(
                <li>
                  <a href="#" key={line}>
                    {data[line].Title}
                  </a>
                </li>
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
