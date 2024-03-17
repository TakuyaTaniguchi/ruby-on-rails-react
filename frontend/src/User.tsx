import React from 'react';
import { useEffect, useState } from 'react';


export function UsersComponent() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json()) // レスポンスをJSONに変換
      .then(data => {
        setUsers(data); // データをセット
      })
      .catch(error => console.error('Error:', error));
  }, []);


  return (
    <div>
      <p>情報</p>
      <ul className='list'>
        {users.map((user: {id: string, name: string, email: string}) => (
          <li key={user.id}>
            <div>
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <a href={`/users/${user.id}`}>{user.id}:{user.name}</a>

            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}