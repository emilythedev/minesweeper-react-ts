import { Provider } from 'jotai'
import { useState } from 'react'
import './App.css'
import Level from './Level'
import Minesweeper from './Minesweeper'

function App() {
  const [level, setLevel] = useState<LevelProps | null>(null)

  if (level) {
    return (
      <Provider>
        <Minesweeper {...level} onRestart={() => setLevel(null)}/>
      </Provider>
    )
  }

  return (
    <Level selectLevel={setLevel} />
  )
}

export default App
