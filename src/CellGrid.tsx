import { useAtom } from "jotai"
import { MouseEvent } from "react"
import FlaggedGrid from "./FlagTile"
import { cellStateAtomFamily } from "./shared/atoms"
import BaseTile from "./shared/ui/BaseTile"
import RevealedTile from "./shared/ui/RevealedTile"

interface Props {
  id: number,
  content: Cell,
}

const CellGrid = ({id, content}: Props) => {
  const [state, setState] = useAtom(cellStateAtomFamily(id))

  if (state === 'revealed') {
    return (
      <RevealedTile $content={content} />
    )
  }

  const handleClick = () => {
    setState('revealed')
  }
  const handleFlag = (e: MouseEvent<HTMLElement>) => {
    setState(state === 'flagged' ? 'normal' : 'flagged')
    e.preventDefault()
  }

  let Component = BaseTile
  if (state === 'flagged') {
    Component = FlaggedGrid
  }
  return (
    <Component onClick={handleClick} onContextMenu={handleFlag} />
  )
}

export default CellGrid
