import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders learn cw app', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
