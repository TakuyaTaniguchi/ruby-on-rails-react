import React, {} from 'react';
// import { UsersComponent } from "./User";
import { Link } from 'react-router-dom';

export function Header() {


  return (
    <header>
      <div className='header-inner'>
        <nav>
          <ul className='header-ul'>
            <li>
              <Link to={`/memos`}>Memos</Link>
            </li>
            <li>
              <Link to={`/sign_up`}>Sign Up</Link>
            </li>
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