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
& + & {
  margin-top: 20px;
}
`

const formLabelCss = css`
font-size: 18px;
font-weight: bold;
`

const formInputCss = css`
padding: 8px;
font-size: 16px;
border-radius: 4px;
border: 1px solid #ccc;
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

const FormLabelLabel = styled.label`
  ${formLabelCss}
`

const FormInputInput = styled('input').withConfig({
  displayName: 'FormInputInput',
})`
  ${formInputCss}
`


  export { LayoutStyleDiv, FormTitleH1, FormWrapDiv , FormSectionDiv, FormLabelLabel, FormInputInput }