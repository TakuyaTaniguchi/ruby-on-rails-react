// MyComponent.test.jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyComponent, { increment } from './SampleSpyOn';

test('increments count when button is clicked', () => {
  // const { getByText } = render(<MyComponent />);
  // const button = getByText('Increment');

  // // increment関数をspyOnで監視する
  // const spyIncrement = jest.spyOn(require('./SampleSpyOn'), 'increment');

  // // ボタンをクリック
  // fireEvent.click(button);

  // // increment関数が呼び出されたことを確認
  // expect(spyIncrement).toHaveBeenCalled();

  // // カウントが増えていることを確認
  // const countText = getByText('Count: 1');
  // expect(countText).toBeInTheDocument();

  // // 監視を解除
  // spyIncrement.mockRestore();
});
