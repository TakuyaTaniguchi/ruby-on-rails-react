import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MyPageComponent } from "./MyPage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyPageComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
