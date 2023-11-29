import { useAtom } from "jotai"
import { MouseEvent } from "react"
import FlaggedGrid from "./FlaggedGrid"
import Grid from "./Grid"
import RevealedGrid from "./RevealedGrid"
import { cellStateAtomFamily } from "./atoms"

interface Props {
  id: number,
  content: Cell,
}

const CellGrid = ({id, content}: Props) => {
  const [state, setState] = useAtom(cellStateAtomFamily(id))

  if (state === 'revealed') {
    return (
      <RevealedGrid $content={content} />
    )
  }

  const handleClick = () => {
    setState('revealed')
  }
  const handleFlag = (e: MouseEvent<HTMLElement>) => {
    setState(state === 'flagged' ? 'normal' : 'flagged')
    e.preventDefault()
  }

  let Component = Grid
  if (state === 'flagged') {
    Component = FlaggedGrid
  }
  return (
    <Component onClick={handleClick} onContextMenu={handleFlag} />
  )
}

export default CellGrid
