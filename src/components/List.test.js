import React from 'react';
import ReactDOM from 'react-dom';
import List from './Movie';

it('renders with out  failing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});