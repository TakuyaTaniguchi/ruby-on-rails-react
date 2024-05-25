import React from 'react';
function AmountSummary({text,price,discount,isSelectedCoupon,couponDiscount}:{
  text: string
  price: number
  discount: number
  isSelectedCoupon: boolean
  couponDiscount: number
}) {
  return (
    <div>
      <div>
        <p>支払い種別: {text}</p>
        <p>商品金額: {price}</p>
        {isSelectedCoupon && <p>クーポン割引: {couponDiscount}</p>}
        <p>合計金額: {price - discount}</p>
        {isSelectedCoupon && <p>クーポン適用済み</p>}
      </div>
    </div>
  );
}

export default AmountSummary;
