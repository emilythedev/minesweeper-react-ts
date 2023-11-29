import { Provider } from 'jotai'
import { useState } from 'react'
import './App.css'
import Level from './Level'
import Minesweeper from './Minesweeper'
import Tutorial from './Tutorial'

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
    <div>
      <Tutorial />
      <Level selectLevel={setLevel} />
    </div>
  )
}

export default App
