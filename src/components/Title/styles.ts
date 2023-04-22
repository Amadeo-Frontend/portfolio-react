import styled from 'styled-components'
import { Props } from '.'
export const Titulo = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  color: #282a35;
  margin-bottom: 16px;
`
