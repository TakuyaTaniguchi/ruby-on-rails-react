import React from 'react';
import { render } from '@testing-library/react';
import AmountSummary from './AmountSummary';

describe('AmountSummary', () => {
  it('callHelloを一度呼ばれたか', () => {
    const mockCallHello = jest.fn();

    render(
      <AmountSummary
        text="クレジットカード"
        price={10}
        discount={500}
        isSelectedCoupon={false}
        couponDiscount={0}
        callHello={mockCallHello}
      />
    );

    expect(mockCallHello).toHaveBeenCalledTimes(1);
  });

  // it('setIsSoundが呼び出されたか', () => {
  //   const setCount = jest.fn();
  //   jest
  //     .spyOn(React, 'useState')
  //     .mockImplementationOnce(count => [count, setCount]);


  //   render(
  //     <AmountSummary
  //       text="クレジットカード"
  //       price={2000} // ここを1000以上に設定して、setIsSoundが呼ばれるようにする
  //       discount={500}
  //       isSelectedCoupon={false}
  //       couponDiscount={0}
  //       callHello={() => {}}
  //     />
  //   );

  //   render(
  //     <AmountSummary
  //       text="クレジットカード"
  //       price={4000} // ここを1000以上に設定して、setIsSoundが呼ばれるようにする
  //       discount={500}
  //       isSelectedCoupon={false}
  //       couponDiscount={0}
  //       callHello={() => {}}
  //     />
  //   );



  //   // setIsSoundがtrueで呼ばれたかを確認する
  //   expect(setCount).toHaveBeenCalledWith(303);

  // });
});
