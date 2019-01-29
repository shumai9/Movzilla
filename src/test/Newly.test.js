import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Newly from '../components/Newly';

it('renders with out failing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Newly/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () =>{
  const tree = renderer
    .create(<Newly />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});