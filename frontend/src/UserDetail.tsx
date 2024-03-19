import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function UserDetailComponent() {
  const { id } = useParams();
  const [user, setUser] = useState<{ id: string, name: string, memos: { id: number ,user_id: number ,title:string ,content: string }[] } | null>(null); // userの状態を管理
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isChange, setIsChange] = useState(true);
  const [editingId, setEditingId] = useState(null as number | null);
  const [tempTitle, setTempTitle] = useState("");

  useEffect(() => {
    getDetail(id ?? '');
  }, [id]); // idが変わった時に再度実行

  const createMemo = () => {
    fetch(`http://localhost:3000/users/${user?.id}/memos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, content: content}),
    })
  }

  const getDetail = (id: string) => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data); // 取得したデータでuserの状態を更新
      })
      .catch(error => console.error('Error:', error));
  }

  const deleteMemo = (id: number) => {
    if (window.confirm("メモを削除しますか？")) {
      fetch(`http://localhost:3000/users/${user?.id}/memos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } 
  }

  const updateMemo = (memo: {id:number, title :string ,content: string}) => {
    setEditingId(null);

    fetch(`http://localhost:3000/users/${user?.id}/memos/${memo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: memo.title, content: memo.content}),
    }).then(response => response.json())
    .then(data => {
      setUser((curentUser) => {
        curentUser?.memos.map((m) => {
          if(m.id === data.id){
            m.title = data.title;
            m.content = data.content;
          }
        })
        return curentUser;
      });

    
    })
  }

  const clickChange = (memo:{ title: string , id: number }) => {
    setTempTitle(memo.title);
    setEditingId(memo.id);
  }

  const memos = user?.memos.map((memo) => (
    <div key={memo.id} className='memo'>
      <div>
        { memo.id !== editingId ? (
            <p onClick={()=>{
              clickChange(memo)
            }}>{memo.title}</p>
          ) : (
            <input type="text" value={tempTitle} onChange={(e)=>{setTempTitle(e.target.value)}} onBlur={
              () => {
                clickChange(memo)
                updateMemo({id :memo.id ,title: tempTitle, content: memo.content})
              }
            }/>
          )}
      </div>
      <p>{memo.content}</p>
      <button onClick={()=>{
        deleteMemo(memo.id)
      }}>削除</button>
    </div>
  ));

  return (
    <div className="user-detail">
      <div className="user-detail-info">
          <p>ユーザー詳細: ID:{id}</p>
          <p>{user?.id}</p>
          <p>{user?.name}</p>
          <p>メモ</p>
          <div className='memo-contents'>
            {memos}
          </div>
      </div>
      <div className='create-memo'>
        <button onClick={createMemo}>メモを作る</button>
        <div className='memo-area'>
          <input type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <textarea name="content" value={content} onChange={(e)=>{setContent(e.target.value)}} />
        </div>
      </div>
    </div>
  );
}