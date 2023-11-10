import { useHydrateAtoms } from "jotai/utils"
import { useMemo } from "react"
import Board from "./Board"
import Status from "./Status"
import { boardAtom } from "./atoms"
import { generateBoard } from "./helpers"

interface Props extends LevelProps {}

const Minesweeper = (props: Props) => {
  const board = useMemo(() => generateBoard(props.rows, props.cols, props.totalBombs), [])
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
