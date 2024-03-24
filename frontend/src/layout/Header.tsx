import React, { useContext  } from 'react';
import { Link } from 'react-router-dom';

import { loginContext } from '../App';

export function Header() {

  const login = useContext(loginContext);
  console.log(login)

  return (
    <header>
      <div className='header-inner'>
        <nav>
          <ul className='header-ul'>
            <li>
              <Link to={`/memos`}>Memos</Link>
            </li>
              { login ? <li> <Link to={`/sign_up`}>Sign Up</Link> </li> : null }
            <li>
              <Link to={`/login`}>Login</Link>
            </li>
            <li>
              <Link to={`/setting`}>Setting</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}