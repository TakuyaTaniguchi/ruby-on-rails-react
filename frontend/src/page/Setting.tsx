import React, { useEffect, useState, useRef } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { LayoutStyleDiv, FormTitleH1, FormWrapDiv } from '../css/design';

import  { Sample } from '../badperformance/notProosRender';

// デバックメモ
// ネットワークタブで確認する
// queryのプロパティ名がcurrentUserの場合、query_type.rbにcurrent_userで定義されている可能性がある。


// meはログインユーザーの情報を取得する ここがrailsに当たるfield :me, Types::UserType, null: true
const GET_USER = gql`
  query GetUsaaaer {
    me { 
      id
      name
      nickname
      email
      image
    }
  }
  `;

type UserQueryResult = {
  me: {
    id: string;
    name: string;
    nickname: string;
    email: string;
    image: string;
  }
}
const UPDATE_USER = gql`
  mutation UpdateUer($name: String!, $nickname: String!, $image: String!) {
    updateUser(input: { name: $name, nickname: $nickname, image: $image }) {
      user {
        id
        name
        nickname
        email
        image
      }
    }
  }
`;

type UpdateUserMutationResult = { 
  updateUser: {
    user: {
      id: string;
      name: string;
      nickname: string;
      email: string;
      image: string;
    }
  }
}


export function SettingPage() {
  const { loading, data: userData } = useQuery<UserQueryResult>(GET_USER);
  const [ mutationUpdateUser ] = useMutation<UpdateUserMutationResult>(UPDATE_USER);

  const [name, setName] = useState('初期値');
  const [nickname, setNickname] = useState('初期値');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');

  const [isEdiitng, setIsEditing] = useState(false);

  const HTMLNameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userData) {
      setName(userData.me.name);
      setNickname(userData.me.nickname);
      setImage(userData.me.image);
      setEmail(userData.me.email);
    } 
  }, [userData])


  const updateUser = () =>{
    mutationUpdateUser({
      variables: { name: name, nickname: nickname, image: image },
    }).then(response => {
      if (response) {
        console.log('Update Success');
      } else {
        console.log('Update Failed');
      }
    })
  }

// https://getavataaars.com/
  if (loading && userData) return <p>Loading...</p>;

  return (
    <LayoutStyleDiv>
      <div>
        <FormTitleH1>Setting</FormTitleH1>
        <Sample />
      </div>
      <FormWrapDiv>
        <div className='section'>
          { image ? (
            <div className='body icon'><img src={image} /></div>
          ) : (  <input className='form-input' type="text" onChange={(e)=>{setImage(e.target.value)}} value={image}></input>
          )}
        </div>
        <div className='section'>
            <div className='head'>名前</div>
            { 
              isEdiitng ? ( 
                <div className='body'>
                  <input className='form-input' ref={HTMLNameInput} type="text" onChange={(e)=>{setName(e.target.value)}} value={name}></input>
                </div>
                ) : ( <div className='body'>{name}</div>)
            }
        </div>
        <div className='section'>
          <div className='head'>ニックネーム</div>
          {
            isEdiitng ? (
              <div className='body'>
                <input className='form-input' type="text" onChange={(e)=>{setNickname(e.target.value)}} value={nickname}></input>
              </div>
              ) : ( <div className='body'>{nickname}</div>)
          }
        </div>
        <div className='section'>
          <div className='head'>メールアドレス</div>
           <div className='body'>{email}</div>
        </div>
        <div className='buttin-wrap mt-20'>
          <button className='form-submit harf' onClick={() =>{setIsEditing(!isEdiitng)}}>Edit</button>
          <button className='form-submit harf' onClick={() =>{
            setIsEditing(!isEdiitng)
            updateUser()
            }}>Update</button>
        </div>
      </FormWrapDiv>
    </LayoutStyleDiv>
  );
}


SettingPage.whyDidYouRender = true;