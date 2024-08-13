import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <Greeting name="Human" />
    <Counter />
  </React.StrictMode>
);
