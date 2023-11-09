import { useHydrateAtoms } from "jotai/utils"
import Board from "./Board"
import Status from "./Status"
import { boardAtom, columnCountAtom, rowCountAtom, totalBombCountAtom } from "./atoms"

const board = [
  [1, 1, 2, 3, '*'],
  [1, '*', 3, '*', '*'],
  [1, 1, 3, '*', '*'],
  [0, 0, 1, 2, '*'],
] as Array<Array<number | '*'>>

const Minesweeper = () => {
  useHydrateAtoms([
    [rowCountAtom, 4],
    [columnCountAtom, 5],
    [boardAtom, board],
    [totalBombCountAtom, 7],
  ])

  return (
    <>
      <Status />
      <Board cols={5} board={board} />
    </>
  )
}

export default Minesweeper
