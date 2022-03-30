export const playerThemes = {
  neymar: {
    primary: '#091E3C',
    secondary: '#FFFFFF'
  },
  vinicius: {
    primary: '#EFF3FD',
    secondary: '#2E44BE'
  }
}

export type PlayerName = keyof typeof playerThemes
export type PlayerType =
  | typeof playerThemes.neymar
  | typeof playerThemes.vinicius
