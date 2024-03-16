import React from 'react';
import { UsersComponent } from "./User";

export function MyPageComponent() {


  return (
    <div>
      <h1>My Page </h1>
      <p>ユーザー情報</p>
      <UsersComponent />
    </div>
  );
}