import { useAtomValue } from "jotai"
import CellGrid from "./CellGrid"
import { cellArrayAtom, columnCountAtom, rowCountAtom } from "./atoms"

const Board = () => {
  const rows = useAtomValue(rowCountAtom)
  const cols = useAtomValue(columnCountAtom)
  const cells = useAtomValue(cellArrayAtom)
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 50px)`,
      gridTemplateRows: `repeat(${rows}, 50px)`
    }}>
      {cells.map((cell, id) => {
        return (<CellGrid key={id} id={id} content={cell}></CellGrid>)
      })}
    </div>
  )
}

export default Board
