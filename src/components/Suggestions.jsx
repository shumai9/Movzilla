import React, {Component} from 'react';
import '../style/Suggestions.css'


class Suggestions extends Component {
	render() {
		const options = this.props.results;
		return(
			<ul className="suggestions">
				{ options ? 
					(Object.keys(options).map((line) =>{
						return(
							<li key={line}>{options[line].Title}</li>
						) 
					})) : (
						null
					)
				}
			</ul>
		)
	}
}
export default Suggestions;