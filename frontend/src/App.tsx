import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MyPageComponent } from "./MyPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// component
import { UserDetailComponent } from "./UserDetail";


function App() {
  return (
    <div className="App">
      <Router>
          <header className="App-header">
            Header
          </header>
          <div className='App-body'>
            <Routes>
              <Route path="/" element={<MyPageComponent />} />
              <Route path="/user/:id" element={<UserDetailComponent/>} />
            </Routes>
          </div>
          <footer className="App-footer">
            Footer
          </footer>
      </Router>
    </div>
  );
}

export default App;
