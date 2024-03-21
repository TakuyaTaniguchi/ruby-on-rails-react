import React, {} from 'react';
// import { UsersComponent } from "./User";

export function SettingPage() {

  const nickname = 'nickname';
  const mailAddress = 'mailAddress';
  const icon = 'icon';


  return (
    <div className='setting'>
      <div>
        <h1>Setting</h1>
      </div>
      <div className='form-wrap'>
        <div className='section'>
          <div className='head'>表示名</div>
          <div className='body'>{nickname}</div>
        </div>
        <div className='section'>
          <div className='head'>アイコン</div>
          <div className='body'>{icon}</div>
        </div>
        <div className='section'>
          <div className='head'>メールアドレス</div>
          <div className='body'>{mailAddress}</div>
        </div>
      </div>
    </div>
  );
}