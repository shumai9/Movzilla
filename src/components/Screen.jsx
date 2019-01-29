import React, {Component} from 'react';

class Screen extends Component {
	handleLinkClose = () =>{
		this.props.clearSelected()
	}

	render(){
		const data = this.props.featured;
		const selected =  data ? 
			Object.values(data)
			.filter(movie => movie.Title === this.props.movie) : [];
		console.log('your choice', selected);
		return(
			<div className="screen" onClick={this.handleLinkClose}>
				{ Object.values(selected).map(line => {
					return( 
						<div className="choic" key={line.imdbID}> 
							<h2 >{line.Title}</h2>
							<img 
								src={line.Poster}
								alt={`${line.Title}`}
							/>          
							<p>{line.Year}</p> 
							<p>{line.Type}</p>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Screen;