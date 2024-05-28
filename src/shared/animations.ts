import { keyframes } from 'styled-components'

export const grayscale = keyframes`
  0% { filter: grayscale(0); }
  100% { filter: grayscale(1) invert(.1); }
`
export const rotate = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.5) rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); }
`
