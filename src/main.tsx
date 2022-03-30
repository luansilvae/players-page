import { render } from 'react-dom'
import App from './App'
import { PlayerProvider } from './contexts/PlayerProvider'
render(
  <PlayerProvider>
    <App />
  </PlayerProvider>,
  document.getElementById('root')
)
