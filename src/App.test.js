import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should renders without crashing with prop all false', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App all={false}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
