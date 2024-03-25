import React, { useEffect, useState, useRef } from 'react';
import apiClient from '../domain/apiClient';

// import { useParams } from 'react-router-dom';


export function MemoPage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null as number | null);
  const [tempTitle, setTempTitle] = useState("");
  const [tempContent, setTempContent] = useState("");
  const [memos, setMemos] = useState([] as { id: number ,user_id: number ,title:string ,content: string }[]);

  useEffect(() => {
    apiClient({
      method: 'GET',
      path: 'memos',
      requestAuth: true,
      request: {},
    }).then((response) => {
      setMemos(response);
    }).catch((error) => {
      console.error('Error:', error);
    })
  },[])

  const createMemo = () => {
    apiClient({
      path: 'memos',
      method: 'POST',
      request: { title: title, content: content },
      requestAuth: true,
    }).then((response) => {
      setMemos((currentMemos) => {
        return [...currentMemos, response];
      })
    })
  }

  const deleteMemo = (id: number) => {
    if (window.confirm("メモを削除しますか？")) {
      apiClient({
        path: `memos/${id}`,
        method: 'DELETE',
        request: {},
        requestAuth: true,
      }).then(() => {
        setMemos(currentMemos => currentMemos.filter(memo => memo.id !== id));
      })
    } 
  }

  const updateMemo = (memo: {id:number, title :string ,content: string}) => {
    setEditingId(null);

    apiClient({
      path: `memos/${memo.id}`,
      method: 'PUT',
      request: { title: memo.title, content: memo.content },
      requestAuth: true,
    }).then((response) => {
      setMemos((curentMemos) => {
        if (!curentMemos) return [];

        const updateMemos = curentMemos.map((m) => {
          if (m.id === response.id) {
            return {...m, title: response.title, content: response.content}
          }
          return m;
        })

        return updateMemos
      });    
    }).catch((error) => {
      console.error('Error:', error);
    })
  }

  const clickChange = (memo:{ title: string , id: number , content: string}) => {
    setTempTitle(memo.title);
    setTempContent(memo.content);
    setEditingId(memo.id);
  }

  return (
    <div className="user-detail">

      <div className="memo-wrap">
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
                          <input className='form-input' type="text" value={tempTitle} onChange={(e)=>{setTempTitle(e.target.value)}} onBlur={
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
                        <textarea className='form-textarea' value={tempContent} onChange={(e)=>{setTempContent(e.target.value)}} onBlur={
                          () => {
                            clickChange(memo)
                            updateMemo({id :memo.id ,title: memo.title, content: tempContent})
                          }
                        }/>
                      )}
                    </div>
                    <div>
                      { memo.id !== editingId ? (
                        null
                      ) : (
                        <button className='form-submit harf' onClick={()=>{
                          updateMemo({id :memo.id ,title: memo.title, content: tempContent})
                        }}>Edit</button>
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
          <input className='form-input mt-20' type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <textarea className='form-textarea mt-20' name="content" value={content} onChange={(e)=>{setContent(e.target.value)}} />
        </div>
      </div>
    </div>
  );
}