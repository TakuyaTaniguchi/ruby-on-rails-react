import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MyPageComponent } from "./MyPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <header className="App-header">
            <Routes>
              <Route path="/hoge" element={<div>Home</div>} />
            </Routes>
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
      </Router>
    </div>
  );
}

export default App;
