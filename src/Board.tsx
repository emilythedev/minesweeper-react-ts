import { useAtomValue } from "jotai"
import CellGrid from "./CellGrid"
import { cellArrayAtom } from "./atoms"

const boardStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 50px)',
  gridTemplateRows: 'repeat(4, 50px)',
}

const Board = () => {
  const cells = useAtomValue(cellArrayAtom)
  return (
    <div style={boardStyles}>
      {cells.map((cell, id) => {
        return (<CellGrid key={id} id={id} content={cell}></CellGrid>)
      })}
    </div>
  )
}

export default Board
