import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { SignUpPage } from "./SignUpPage"
import { MyPageComponent } from "./MyPage"
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

// page
import { Header, Footer } from './layout'

// component
// import { UserDetailComponent } from "./UserDetail";


function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <div className='App-body'>
            <Routes>
              <Route path="/" element={<MyPageComponent />} />
              <Route path="/sign_up" element={<SignUpPage/>} />
              <Route path="/login" element={<div>Login</div>} />
              <Route path="/setting" element={<div>Setting</div>} />
              <Route path="/memos" element={<div>Memos</div>} />


              {/* <Route path="/user/:id" element={<UserDetailComponent/>} /> */}
            </Routes>
          </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
