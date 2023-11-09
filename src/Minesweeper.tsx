import CellGrid from "./CellGrid"

type Props = {}

const rows = 4
const cols = 5
const board = [
  [1, 1, 2, 3, '*'],
  [1, '*', 3, '*', '*'],
  [1, 1, 3, '*', '*'],
  [0, 0, 1, 2, '*'],
] as Array<Array<number | '*'>>

const boardStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 50px)',
  gridTemplateRows: 'repeat(4, 50px)',
}

const Minesweeper = (props: Props) => {
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

export default Minesweeper
