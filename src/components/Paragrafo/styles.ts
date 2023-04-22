import styled from 'styled-components'
import { Props } from '.'
export const P = styled.p<Props>`
  font-size: 14px;
  line-heigth: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
`
