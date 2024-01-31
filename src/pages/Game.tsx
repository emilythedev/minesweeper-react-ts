import { Provider } from "jotai"
import Minesweeper from "../features/Minesweeper"

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
