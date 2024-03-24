import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';


export function MemoPage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null as number | null);
  const [tempTitle, setTempTitle] = useState("");
  const [tempContent, setTempContent] = useState("");
  const [memos, setMemos] = useState([] as { id: number ,user_id: number ,title:string ,content: string }[]);
  const HTMLTitleInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/memos`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('access-token') ||'',
        'client': localStorage.getItem('client')||'',
        'uid': localStorage.getItem('uid')||'',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMemos(data); // 取得したデータでuserの状態を更新
      })
      .catch(error => console.error('Error:', error));
  },[])

  const createMemo = () => {
    fetch(`http://localhost:3000/memos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('access-token') ||'',
        'client': localStorage.getItem('client')||'',
        'uid': localStorage.getItem('uid')||'',
      },
      body: JSON.stringify({ title: title, content: content}),
    })
  }

  const deleteMemo = (id: number) => {
    if (window.confirm("メモを削除しますか？")) {
      fetch(`http://localhost:3000/memos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'access-token': localStorage.getItem('access-token') ||'',
          'client': localStorage.getItem('client')||'',
          'uid': localStorage.getItem('uid')||'',
        },
      })
    } 
  }

  const updateMemo = (memo: {id:number, title :string ,content: string}) => {
    setEditingId(null);

    fetch(`http://localhost:3000/memos/${memo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('access-token') ||'',
        'client': localStorage.getItem('client')||'',
        'uid': localStorage.getItem('uid')||'',
      },
      body: JSON.stringify({ title: memo.title, content: memo.content}),
    }).then(response => response.json())
    .then(data => {
      setMemos((curentMemos) => {
        if (!curentMemos) return [];

        const updateMemos = curentMemos.map((m) => {
          if (m.id === data.id) {
            return {...m, title: data.title, content: data.content}
          }
          return m;
        })

        return updateMemos
      });    
    })
  }

  const clickChange = (memo:{ title: string , id: number , content: string}) => {
    setTempTitle(memo.title);
    setTempContent(memo.content);
    setEditingId(memo.id);
  }

  return (
    <div className="user-detail">

      <div className="user-detail-info">
          <div className='memo-contents'>
            {
            memos ? (
              memos.map((memo) => {
                return (
                  <div key={memo.id} className='memo'>
                    <div>
                      { memo.id !== editingId ? (
                          <p onClick={()=>{
                            clickChange(memo)
                          }}
                          >{memo.title ? memo.title : 'blank'}</p>
                        ) : (
                          <input ref={HTMLTitleInput} type="text" value={tempTitle} onChange={(e)=>{setTempTitle(e.target.value)}} onBlur={
                            () => {
                              clickChange(memo)
                              updateMemo({id :memo.id ,title: tempTitle, content: tempContent})
                            }
                          }/>
                        )}
                    </div>
                    <div>
                      { memo.id !== editingId ? (
                        <p onClick={()=>{
                          clickChange(memo)
                        }}
                        >{memo.content ? memo.content : 'blank'}</p>
                      ) : (
                        <textarea value={tempContent} onChange={(e)=>{setTempContent(e.target.value)}} onBlur={
                          () => {
                            clickChange(memo)
                            updateMemo({id :memo.id ,title: memo.title, content: tempContent})
                          }
                        }/>
                      )}
                    </div>
                    <button onClick={()=>{
                      deleteMemo(memo.id)
                    }}>削除</button>
                </div>
                )
              })
            ) : (
              'メモがありません'
            )
          }
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