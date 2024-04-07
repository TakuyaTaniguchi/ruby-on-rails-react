import  { styled,css } from 'styled-components';
const layoutStyleCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 32px;
`

const formTileCss = css`
font-size: 24px;
font-weight: bold;
`

const formWrapCss = css`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

const formSectionCss = css`
display: flex;
flex-direction: column;
gap: 12px;
`

const LayoutStyleDiv = styled.div`
  ${layoutStyleCss}
`

const FormTitleH1 = styled.h1`
  ${formTileCss}
  `

const FormWrapDiv = styled.div`
  ${formWrapCss}`

const FormSectionDiv = styled.div`
  ${formSectionCss}
`


  export { LayoutStyleDiv, FormTitleH1, FormWrapDiv , FormSectionDiv }