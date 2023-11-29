import styled from 'styled-components'

interface Props {
  $columns: number,
}

const BoardContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 50px);
  grid-auto-rows: 50px;
  grid-gap: 2px;
`

export default BoardContainer
