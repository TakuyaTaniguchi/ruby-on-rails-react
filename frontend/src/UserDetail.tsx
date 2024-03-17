import React from 'react';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export function UserDetailComponent() {

  const { id } = useParams();

  return (
    <div>
      <p>ユーザー詳細: ID:{id}</p>
    </div>
  );
}