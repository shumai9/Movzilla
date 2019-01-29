import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from '../components/Search';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Search />, div);
	ReactDOM.unmountComponentAtNode(div);
  });
  
it('renders correctly', () =>{
const tree = renderer
  .create(<Search />)
  .toJSON();
expect(tree).toMatchSnapshot();
}); 
