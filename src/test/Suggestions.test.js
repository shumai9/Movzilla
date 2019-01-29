import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Suggestions from '../components/Suggestions';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Suggestions />, div);
	ReactDOM.unmountComponentAtNode(div);
  });
  
it('renders correctly', () =>{
const tree = renderer
	.create(<Suggestions />)
	.toJSON();
expect(tree).toMatchSnapshot();
}); 
