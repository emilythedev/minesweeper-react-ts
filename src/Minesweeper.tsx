import { useHydrateAtoms } from "jotai/utils"
import Board from "./Board"
import Status from "./Status"
import { boardAtom } from "./atoms"

const board = [
  [1, 1, 2, 3, '*'],
  [1, '*', 3, '*', '*'],
  [1, 1, 3, '*', '*'],
  [0, 0, 1, 2, 2],
] as Array<Array<number | '*'>>

const Minesweeper = () => {
  useHydrateAtoms([
    [boardAtom, board],
  ])

  return (
    <>
      <Status />
      <Board />
    </>
  )
}

export default Minesweeper
