import styled from 'styled-components'
import { Props } from '.'
export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-heigth: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
`
