import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'

import { GlobalStyles } from './styles/GlobalStyles'
import { usePlayer } from './hooks/usePlayer'

function App() {
  const { currentPlayer } = usePlayer()

  return (
    <ThemeProvider theme={currentPlayer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
