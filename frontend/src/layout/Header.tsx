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
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/sign_up`}>Sing Up</Link>
            </li>
            <li>
              <Link to={`/login`}>Login</Link>
            </li>
            <li>
              <Link to={`/setting`}>Setting</Link>
            </li>
            <li>
              <Link to={`/memos`}>Memos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}