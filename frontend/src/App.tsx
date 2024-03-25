import React , { useContext, createContext } from 'react';

// import logo from './logo.svg';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
// layout
import { Header, Footer } from './layout'
// page
import { SignUpPage } from "./page/SignUpPage"
import { LoginPage } from "./page/LoginPage"
import { SettingPage } from "./page/Setting"
import { MemoPage } from './page/Memo'
// css
import './App.css';
// util
import { isLogin } from './util/isLogin'

import { gql, useQuery } from '@apollo/client';

export const loginContext = createContext(isLogin());

// GraphQLクエリとその結果の型を定義
const TEST_QUERY = gql`
  query TestQuery {
    testSample,
    testField
  }
`;



type TestQueryResult = {
  testSample: string;
  testField: string;
};

function App() {
  const { loading, error, data } = useQuery<TestQueryResult>(TEST_QUERY);
  const login = useContext(loginContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div className="App">
      <loginContext.Provider value={login}>
        <Router>
            <Header/>
            <div className='App-body'>
            <div>{data?.testSample}:apollo</div>
              <Routes>
                <Route path="/memos" element={<MemoPage/>} />
                <Route path="/sign_up" element={<SignUpPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/setting" element={<SettingPage/>} />
              </Routes>
            </div>
            <Footer/>
        </Router>
      </loginContext.Provider>
    </div>
  );
}

export default App;
