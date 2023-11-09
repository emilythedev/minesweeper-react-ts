import { useAtom } from "jotai"
import { MouseEvent } from "react"
import { cellStateAtomFamily } from "./atoms"

interface Props {
  id: number,
  content: number | '*'
}

const cellGridStyles = {
  border: '1px solid #333',
  cursor: 'pointer',
}

const CellGrid = ({id, content}: Props) => {
  const [state, setState] = useAtom(cellStateAtomFamily(id))
  function handleClick() {
    setState('revealed')
  }
  function handleFlag(e: MouseEvent<HTMLElement>) {
    setState(state === 'flagged' ? 'normal' : 'flagged')
    e.preventDefault()
  }
  return (
    <div style={cellGridStyles} onClick={handleClick} onContextMenu={handleFlag}>
      {state === 'flagged' ? 'F' : (state === 'revealed' ? content : '')}
    </div>
  )
}

export default CellGrid
