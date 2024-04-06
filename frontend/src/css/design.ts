import  { styled,css } from 'styled-components';
const layoutStyleCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 32px;
`

export const LayoutStyleDiv = styled.div`
  ${layoutStyleCss}
`