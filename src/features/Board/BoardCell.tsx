import { cellActionAtomFamily, endAtom } from '@/shared/atoms'
import BaseTile from '@/shared/ui/BaseTile'
import FlagTile from '@/shared/ui/FlagTile'
import RevealedBomb from '@/shared/ui/RevealedBomb'
import RevealedTile from '@/shared/ui/RevealedTile'
import { useAtom, useAtomValue } from 'jotai'
import { MouseEvent } from 'react'

interface Props {
  id: number,
  content: Cell,
}

const BoardCell = ({id, content}: Props) => {
  const [state, setState] = useAtom(cellActionAtomFamily(id))
  const hasEnded = useAtomValue(endAtom)

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

  if (state === 'flagged') {
    return (
      <FlagTile onClick={handleClick} onContextMenu={handleFlag} />
    )
  }
  return (
    <BaseTile $hoverable={!hasEnded} onClick={handleClick} onContextMenu={handleFlag} />
  )
}

export default BoardCell
