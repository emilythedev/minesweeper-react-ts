import Board from "@/features/Board"
import Status from "@/features/Status"
import { boardAtom } from "@/shared/atoms"
import { generateBoard } from "@/shared/helpers"
import { useHydrateAtoms } from "jotai/utils"
import { useMemo } from "react"

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
