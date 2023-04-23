import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'
const EstiloGlobal = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style:none;
}
body{
  padding-top:80px;
  padding-bottom:80px;
  background-color: ${(props) => (props.theme as Theme).corDeFundo};


  @media (max-width: 768px) {
    padding-top: 16px;
  }
}
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
