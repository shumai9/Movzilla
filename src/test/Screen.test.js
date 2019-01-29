import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Screen from '../components/Screen';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Screen />, div);
	ReactDOM.unmountComponentAtNode(div);
  });
  
it('renders correctly', () =>{
const tree = renderer
	.create(<Screen />)
	.toJSON();
expect(tree).toMatchSnapshot();
}); 
