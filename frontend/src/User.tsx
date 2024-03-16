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
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}