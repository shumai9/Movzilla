import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Tray from '../components/Tray';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Tray />, div);
	ReactDOM.unmountComponentAtNode(div);
  });
  
it('renders correctly', () =>{
const tree = renderer
  .create(<Tray />)
  .toJSON();
expect(tree).toMatchSnapshot();
}); 
