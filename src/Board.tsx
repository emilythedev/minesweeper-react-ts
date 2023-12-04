import { useAtomValue } from "jotai"
import styled from "styled-components"
import BoardCell from "./CellGrid"
import { cellArrayAtom, columnCountAtom } from "./shared/atoms"

interface Props {
  $columns: number,
}

const BoardContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 50px);
  grid-auto-rows: 50px;
  grid-gap: 2px;
`

const Board = () => {
  const cols = useAtomValue(columnCountAtom)
  const cells = useAtomValue(cellArrayAtom)
  return (
    <BoardContainer $columns={cols}>
      {cells.map((cell, id) => {
        return (<BoardCell key={id} id={id} content={cell}></BoardCell>)
      })}
    </BoardContainer>
  )
}

export default Board
