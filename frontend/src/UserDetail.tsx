import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function UserDetailComponent() {
  const { id } = useParams();
  const [user, setUser] = useState<{ id: string, name: string, memos: { id: number ,user_id: number ,title:string ,content: string }[] } | null>(null); // userの状態を管理
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  useEffect(() => {
    getDetail(id ?? '');
  }, [id]); // idが変わった時に再度実行

  const getDetail = (id: string) => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUser(data); // 取得したデータでuserの状態を更新
      })
      .catch(error => console.error('Error:', error));
  }

  const memos = user?.memos.map((memo) => (
    <div key={memo.id}>
      <p>{memo.title}</p>
      <p>{memo.content}</p>
    </div>
  ));

  return (
    <div className="user-detail">
      <div className="user-detail-info">
          <p>ユーザー詳細: ID:{id}</p>
          <p>{user?.id}</p>
          <p>{user?.name}</p>
          <p>メモ</p>
          <div>
            {memos}
          </div>
      </div>
      <div className='create-memo'>
        メモを作る
        <div className='memo-area'>
          <div>タイトル</div>
          <input type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <textarea name="content" value={content} onChange={(e)=>{setContent(e.target.value)}} />
        </div>
      </div>
    </div>
  );
}