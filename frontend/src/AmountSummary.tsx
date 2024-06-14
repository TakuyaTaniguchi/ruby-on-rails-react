import React, { useRef, useState, useEffect } from 'react';

function AmountSummary({ text, price, discount, isSelectedCoupon, couponDiscount, callHello }) {
  const ref = useRef(null);
  const [isSound, setIsSound] = useState(false);
  const [count, setCount] = useState(100);

  const [isChecked, setIsChecked  ]=  useState(false)


  useEffect(() => {
    if (price < 1000) {
      callHello();
    }
  }, [price, callHello]);

  useEffect(() => {
    if (price > 1000) {
      setIsSound(true);
    }
  }, [price]);

  const handleClick = () => {
    console.log(ref.current.checked);
    setCount(count + 3);
  };

  const handleClickChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div>
        <p>支払い種別: {text}</p>
        <p>商品金額: {price}</p>
        {isSelectedCoupon && <p>クーポン割引: {couponDiscount}</p>}
        <p>合計金額: {price - discount}</p>
        {isSelectedCoupon && <p>クーポン適用済み</p>}
      </div>
      <div>
        <input
          ref={ref}
          type="checkbox"
          id="subscribe"
          name="subscribe"
          defaultChecked={true}
        />
        <label htmlFor="subscribe">Subscribe</label>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>
        <input
          ref={ref}
          type="checkbox"
          id="coupon"
          name="coupon"
          defaultChecked={isChecked}
        />
        <label htmlFor="coupon">Subscribe</label>
        <button onClick={handleClickChecked}>Click</button>
      </div>
    </div>
  );
}

export default AmountSummary;
