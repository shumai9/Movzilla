import React from 'react';
import ReactDOM from 'react-dom';
import Newly from './Newly';

it('renders with out failing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Newly/>, div);
  ReactDOM.unmountComponentAtNode(div);
});