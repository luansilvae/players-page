import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  max-width: 90vw;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;

  > h2 {
    color: var(--secondary);
    font-weight: 800;
    position: relative;
    font-size: 40px;

    &:after {
      content: '';
      position: absolute;
      height: 6px;
      width: 90%;
      bottom: -5px;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: var(--secondary);
    }
  }

  > button {
    border: 0;
    background-color: var(--secondary);
    border-radius: 50%;
    width: 55px;
    height: 55px;

    cursor: pointer;

    svg {
      path {
        stroke: var(--primary);
      }
    }
  }
`

export const PlayerName = styled.div`
  z-index: 100;
  justify-self: flex-end;
  margin-top: 4rem;

  h1,
  h2 {
    color: var(--secondary);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 8px;
  }

  > h1 {
    font-size: 10.5vw;
  }

  > h2 {
    font-size: 22px;
    margin-left: 8px;

    @media (max-width: 480px) {
      font-size: 15px;
      margin-left: 0;
    }
  }
`

export const PlayerImage = styled.img`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;

  display: flex;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
`

export const PlayerContent = styled.div`
  width: 100%;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }

  .gallery {
    max-width: 680px;
    width: 100%;
    height: 200px;
    margin: 0;

    @media (max-width: 520px) {
      display: none;
    }

    @media (max-width: 640px) {
      height: 300px;
    }

    @media (max-width: 520px) {
      height: 200px;
    }

    .slide-gallery {
      width: 100%;
      height: 100%;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      > span {
        color: #ffffff;
        font-family: var(--font-sofia);
        font-size: 22px;
        font-weight: 900;
        position: absolute;
        bottom: 12px;
        left: 12px;

        :after {
          content: '';
          width: 70px;
          height: 2px;
          background: #ffffff;
          position: absolute;
          top: 50%;
          margin-left: 8px;
        }
      }
    }

    .swiper-button-prev {
      visibility: hidden;
    }

    .swiper-button-next {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ffffff;
      display: flex;
      align-items: center;
      margin-right: 20px;
      box-shadow: 0px 3px 7px 6px rgba(0, 0, 0, 0.25);

      @media (max-width: 768px) {
        margin-right: 20px;
      }

      &:after {
        color: #000000;
        font-size: 18px;
        font-weight: 800;
      }
    }
  }
`

export const PlayerInfo = styled.ul`
  display: flex;
  gap: 40px;
  max-width: 600px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    max-width: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 20px;
    width: 100%;

    font-family: var(--font-sofia);
    color: var(--secondary);

    border-top: solid 2px var(--secondary);

    > span {
      font-weight: 600;
      font-size: 14px;
    }

    > strong {
      font-weight: 900;
      text-transform: uppercase;
      font-size: 18px;
    }
  }
`
