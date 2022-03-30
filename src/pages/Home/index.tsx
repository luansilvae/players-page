import React from 'react'
import { Helmet } from 'react-helmet'
import { usePlayer } from '../../hooks/usePlayer'
import { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { Container, PlayerImage, Header, PlayerName, PlayerInfo } from './style'

export const Home: React.FC = () => {
  const { togglePlayer, player } = usePlayer()

  return (
    <Container>
      <Helmet>
        <title>{`${player?.firstName} ${player?.lastName}`} Page</title>
      </Helmet>
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

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        slidesPerGroup={1}
        initialSlide={2}
        loop
        navigation
        className="gallery"
      >
        {player?.gallery.map((image, index) => (
          <SwiperSlide key={index} className="slide-gallery">
            <img src={image} alt="Plyaer" />
            <span>{String(index + 1).padStart(2, '0')}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
