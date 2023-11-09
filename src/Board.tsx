import CellGrid from "./CellGrid"

const boardStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 50px)',
  gridTemplateRows: 'repeat(4, 50px)',
}
interface Props {
  cols: number
  board: Array<Array<number|'*'>>
}
const Board = ({cols, board}: Props) => {
  return (
    <div style={boardStyles}>
      {board.map((row, ri) => {
        return row.map((cell, ci) => {
          const id = ri * cols + ci
          return (<CellGrid key={id} id={id} content={cell}></CellGrid>)
        })
      })}
    </div>
  )
}

export default Board
