import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 200;
  align-items: center;

  > h1 {
    color: var(--secondary);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 10.5vw;
    letter-spacing: 10px;

    display: flex;
    flex-direction: column;

    > span {
      font-size: 1vw;
      margin-left: 1rem;
      font-weight: 700;
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
export const PlayerInfo = styled.ul`
  display: flex;
  gap: 40px;
  justify-self: flex-start;
  width: 446px;

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 20px;
    width: 100%;
    position: relative;

    font-family: var(--font-sofia);
    color: var(--secondary);

    > span {
      font-weight: 600;
      font-size: 14px;
    }

    > strong {
      font-weight: 900;
      text-transform: uppercase;
      font-size: 18px;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      height: 1.5px;
      background: var(--secondary);
    }
  }
`
