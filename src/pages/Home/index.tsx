import React from 'react'
import { usePlayer } from '../../hooks/usePlayer'

import { Container, PlayerImage, Header, PlayerName, PlayerInfo } from './style'

export const Home: React.FC = () => {
  const { togglePlayer, player } = usePlayer()

  return (
    <Container>
      <Header>
        <h2>{player?.firstName === 'Neymar' ? 'NJ' : 'VJ'}</h2>

        <button onClick={togglePlayer}>
          <svg
            width="21"
            height="8"
            viewBox="0 0 21 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 7.125H1.25"
              stroke="#091E3C"
              strokeWidth="1.7"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M19.25 1.125H1.25"
              stroke="#091E3C"
              strokeWidth="1.7"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Header>
      <PlayerImage
        src={player?.background}
        alt={`${player?.firstName} ${player?.lastName}`}
      ></PlayerImage>

      <PlayerName>
        <h1>
          {player?.firstName}
          <span>{player?.lastName}</span>
        </h1>
      </PlayerName>

      <PlayerInfo>
        <li>
          <span>CLUBE</span>
          <strong>{player?.club}</strong>
        </li>
        <li>
          <span>POSIÇÃO</span>
          <strong>{player?.position}</strong>
        </li>
      </PlayerInfo>
    </Container>
  )
}
