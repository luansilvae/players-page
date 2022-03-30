import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Heading Pro Wide";
  src: url("/fonts/heading-pro-wide-trial.bold.ttf");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "Heading Pro Wide";
  src: url("/fonts/heading-pro-wide-trial.extrabold.ttf");
  font-style: normal;
  font-weight: 800;
  font-display: swap;
}

@font-face {
  font-family: "Heading Pro Wide";
  src: url("/fonts/heading-pro-wide-trial.heavy.ttf");
  font-style: normal;
  font-weight: 900;
  font-display: swap;
}

:root {
  --font-sofia: 'Sofia Pro', sans-serif;
  
  ${props => {
    const playerTheme = props.theme

    let append = ''

    Object.entries(playerTheme).forEach(([prop, value]) => {
      append += `--${prop}: ${value};`
    })

    return append
  }}
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--primary);
  font-family: 'Heading Pro Wide', sans-serif;
  transition: color 300ms ease-in-out;
  transition: background-color 300ms ease-in-out;
  position: relative;
  overflow: hidden;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`
