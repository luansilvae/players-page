import { ReactNode } from 'react'
import { PlayerName, PlayerType } from '../styles/playerTheme'

export interface Props {
  children: ReactNode
}

export interface PlayerContextData {
  togglePlayer: () => void
  currentPlayer: PlayerType
  playerName: PlayerName
}
