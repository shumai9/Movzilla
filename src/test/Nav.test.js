import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
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