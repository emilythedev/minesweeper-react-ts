import { Provider } from 'jotai'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Level from './Level'
import Minesweeper from './Minesweeper'
import Tutorial from './Tutorial'
import theme from './theme'

function App() {
  const [level, setLevel] = useState<LevelProps | null>(null)

  return (
    <ThemeProvider theme={theme}>
      { level ? (
        <Provider>
          <Minesweeper {...level} onRestart={() => setLevel(null)}/>
        </Provider>
      ) : (
        <div>
          <Tutorial />
          <Level selectLevel={setLevel} />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
