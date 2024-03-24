import React, {} from 'react';

export function MemoPage() {

  // 20個の配列を作成
  const tmpmemos = Array.from({length: 20}, (v, i) => i);

  // const memos = () => {
  //   return (
  //     <div className='memo-layout'>
  //       <div className='memo'>
  //         <p className='title'>タイトル</p>
  //         <p className='contents'>明日面接を受ける</p>
  //       </div>
  //     </div>
  //   )
  // }
  
  return (
    <div className='memo-wrap'>
      <div className='memo-layout'>
        {
          tmpmemos.map((memo) => {
            return (
              <div key={memo} className='memo'>
                <p className='title'>タイトル</p>
                <p className='contents'>明日面接を受ける</p>
              </div>
            )
          })
        }
      </div>
    </div>

  );
}