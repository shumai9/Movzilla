import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Movie from '../components/Movie';

it('renders with out  failing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Movie />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders correctly', () =>{
  const tree = renderer
    .create(<Movie />)
    .toJSON();
  expect(tree).toMatchSnapshot();
}); 

