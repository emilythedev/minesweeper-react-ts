import { useHydrateAtoms } from "jotai/utils"
import { useMemo } from "react"
import { boardAtom } from "../shared/atoms"
import { generateBoard } from "../shared/helpers"
import Board from "./Board"
import Status from "./Status"

interface Props extends LevelProps {
  onRestart(): void
}

const Minesweeper = (props: Props) => {
  const board = useMemo(() => generateBoard(props.rows, props.cols, props.totalBombs), [])
  useHydrateAtoms(new Map([
    [boardAtom, board],
  ]))

  return (
    <>
      <Status onRestart={props.onRestart}/>
      <Board />
    </>
  )
}

export default Minesweeper
