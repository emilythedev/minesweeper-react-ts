import styled from 'styled-components'
import BaseTile from './BaseTile'

const RevealedBomb = styled(BaseTile)`
  border-color: transparent;
  &:hover, &:active {
    border-color: transparent;
  }

  &::before {
    content: '*';
  }

  color: ${props => props.theme.colors.bomb};
  font-size: 64px;
`

export default RevealedBomb
