import { Provider } from 'jotai'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Minesweeper from './Minesweeper'
import Level from './features/Level'
import Tutorial from './features/Tutorial'
import theme from './shared/theme'

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
