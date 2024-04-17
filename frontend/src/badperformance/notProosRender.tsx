import React, { useState } from 'react';
// これを例にして用法を見る
// https://medium.com/welldone-software/why-did-you-render-mr-big-pure-react-component-part-2-common-fixing-scenarios-667bfdec2e0f


export function Sample() {
  const [count, setCount] = useState(0);

  // ここで新しいオブジェクトを毎回作成
  const objProp = { count };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent someProp={count} objProp={objProp} />
    </div>
  );
}


// eslint-disable-next-line react/display-name, @typescript-eslint/no-unused-vars
const ChildComponent = React.memo(({ someProp, objProp }: { someProp: number; objProp: { count: number; } }) => {
  return <div>{someProp}</div>;
});

Sample.whyDidYouRender = true;
ChildComponent.whyDidYouRender = true;
