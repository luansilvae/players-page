import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { playerThemes, PlayerName } from '../styles/playerTheme'
import { PlayerContextData, Props } from './PlayerProps'

export const PlayerContext = createContext({} as PlayerContextData)

export const PlayerProvider: React.FC<Props> = ({ children }) => {
  const [playerName, setPlayerName] = useState<PlayerName>(() => {
    const storageValue = localStorage.getItem('player')

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return 'neymar'
    }
  })

  const [currentPlayer, setCurrentPlayer] = useState(playerThemes[playerName])

  useEffect(() => {
    setCurrentPlayer(playerThemes[playerName])
  }, [playerName])

  const newPlayer = useMemo(
    () => (playerName === 'neymar' ? 'vinicius' : 'neymar'),
    [playerName]
  )

  const togglePlayer = useCallback(() => {
    setPlayerName(newPlayer)

    localStorage.setItem('player', JSON.stringify(newPlayer))
  }, [newPlayer])

  return (
    <PlayerContext.Provider value={{ togglePlayer, currentPlayer, playerName }}>
      {children}
    </PlayerContext.Provider>
  )
}
