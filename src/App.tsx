import { Provider } from 'jotai'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Minesweeper from './Minesweeper'
import SelectLevel from './features/SelectLevel'
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
          <SelectLevel onSelect={setLevel} />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
