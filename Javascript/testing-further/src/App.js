// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import '@testing-library/jest-dom'; // optional
// import userEvent from '@testing-library/user-event';
// import TestComponent from 'path-to-test-component';

const App = () => {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  const clickHandler = () => {
    setHeading('Radical Rhinos');
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App;
