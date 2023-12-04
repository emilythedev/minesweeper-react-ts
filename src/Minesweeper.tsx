import { useHydrateAtoms } from "jotai/utils"
import { useMemo } from "react"
import Status from "./Status"
import Board from "./features/Board"
import { boardAtom } from "./shared/atoms"
import { generateBoard } from "./shared/helpers"

interface Props extends LevelProps {
  onRestart(): void
}

const Minesweeper = (props: Props) => {
  const board = useMemo(() => generateBoard(props.rows, props.cols, props.totalBombs), [])
  useHydrateAtoms([
    [boardAtom, board],
  ])

  return (
    <>
      <Status onRestart={props.onRestart}/>
      <Board />
    </>
  )
}

export default Minesweeper
