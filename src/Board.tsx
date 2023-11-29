import { useAtomValue } from "jotai"
import BoardContainer from "./BoardContainer"
import CellGrid from "./CellGrid"
import { cellArrayAtom, columnCountAtom } from "./atoms"

const Board = () => {
  const cols = useAtomValue(columnCountAtom)
  const cells = useAtomValue(cellArrayAtom)
  return (
    <BoardContainer $columns={cols}>
      {cells.map((cell, id) => {
        return (<CellGrid key={id} id={id} content={cell}></CellGrid>)
      })}
    </BoardContainer>
  )
}

export default Board
