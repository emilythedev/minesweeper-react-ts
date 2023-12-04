import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GamePage from './pages/Game'
import StartPage from './pages/Start'
import GlobalStyles from './shared/GlobalStyles'
import theme from './shared/theme'

function App() {
  const [level, setLevel] = useState<LevelProps | null>(null)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      { level ? (
        <GamePage level={level} onRestart={() => setLevel(null)} />
      ) : (
        <StartPage onSelect={setLevel} />
      )}
    </ThemeProvider>
  )
}

export default App
