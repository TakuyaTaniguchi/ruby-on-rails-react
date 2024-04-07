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

const formTileCss = css`
font-size: 24px;
font-weight: bold;
`

export const FormTitleH1 = styled.h1`
  ${formTileCss}
  `