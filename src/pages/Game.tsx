import Minesweeper from '@/features/Minesweeper'
import { Provider } from 'jotai'

interface Props {
  level: LevelProps
  onRestart(): void
}

const GamePage = ({level, onRestart}: Props) => {
  return (
    <Provider>
      <Minesweeper {...level} onRestart={onRestart}/>
    </Provider>
  )
}

export default GamePage
