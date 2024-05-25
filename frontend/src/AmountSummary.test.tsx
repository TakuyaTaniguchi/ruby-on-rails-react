import React from "react";
import { render, screen } from '@testing-library/react';
import AmountSummary from './AmountSummary';

describe('AmountSummary', () => {
  it('renders correctly with selected coupon', () => {
    render(
      <AmountSummary
        text="クレジットカード"
        price={1000}
        discount={100}
        isSelectedCoupon={true}
        couponDiscount={100}
      />
    );

    expect(screen.getByText(/支払い種別: クレジットカード/i)).toBeInTheDocument();
    expect(screen.getByText(/商品金額: 1000/i)).toBeInTheDocument();
    expect(screen.getByText(/クーポン割引: 100/i)).toBeInTheDocument();
    expect(screen.getByText(/合計金額: 900/i)).toBeInTheDocument();
    expect(screen.getByText(/クーポン適用済み/i)).toBeInTheDocument();
  });

  it('renders correctly without selected coupon', () => {
    render(
      <AmountSummary
        text="クレジットカード"
        price={1000}
        discount={100}
        isSelectedCoupon={false}
        couponDiscount={100}
      />
    );

    expect(screen.getByText(/支払い種別: クレジットカード/i)).toBeInTheDocument();
    expect(screen.getByText(/商品金額: 1000/i)).toBeInTheDocument();
    expect(screen.queryByText(/クーポン割引: 100/i)).not.toBeInTheDocument();
    expect(screen.getByText(/合計金額: 900/i)).toBeInTheDocument();
    expect(screen.queryByText(/クーポン適用済み/i)).not.toBeInTheDocument();
  });

  it('calculates total amount correctly with discount', () => {
    render(
      <AmountSummary
        text="クレジットカード"
        price={2000}
        discount={500}
        isSelectedCoupon={false}
        couponDiscount={0}
      />
    );

    expect(screen.getByText(/合計金額: 1500/i)).toBeInTheDocument();
  });
});
