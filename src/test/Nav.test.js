import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

it('renders with out failing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it('renders correctly', () =>{
  const tree = renderer
    .create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
   )
    .toJSON();
  expect(tree).toMatchSnapshot();
});