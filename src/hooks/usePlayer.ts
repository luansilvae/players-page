import { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../contexts/PlayerProvider'

interface Player {
  firstName: string
  lastName: string
  club: string
  position: string
  background: string
  gallery: string[]
}

export const usePlayer = () => {
  const { playerName, togglePlayer, currentPlayer } = useContext(PlayerContext)

  const [player, setPlayer] = useState<Player>()

  useEffect(() => {
    fetch('/players.json')
      .then(response => response.json())
      .then((data: Player[]) => {
        const selectedPlayer: Player | undefined = data.find(
          player => player.firstName.toLowerCase() === playerName
        )
        setPlayer(selectedPlayer)
      })
      .catch(error => console.error(error))
  }, [playerName])

  return { playerName, togglePlayer, currentPlayer, player }
}
