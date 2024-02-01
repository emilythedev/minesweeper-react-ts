import { cellActionAtomFamily } from '@/shared/atoms'
import BaseTile from '@/shared/ui/BaseTile'
import FlagTile from '@/shared/ui/FlagTile'
import RevealedBomb from '@/shared/ui/RevealedBomb'
import RevealedTile from '@/shared/ui/RevealedTile'
import { useAtom } from 'jotai'
import { MouseEvent } from 'react'

interface Props {
  id: number,
  content: Cell,
}

const BoardCell = ({id, content}: Props) => {
  const [state, setState] = useAtom(cellActionAtomFamily(id))

  if (state === 'revealed') {
    return typeof content === 'number' ? (
      <RevealedTile $content={content} />
    ) : (
      <RevealedBomb />
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
    Component = FlagTile
  }
  return (
    <Component onClick={handleClick} onContextMenu={handleFlag} />
  )
}

export default BoardCell
