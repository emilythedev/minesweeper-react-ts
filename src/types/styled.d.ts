import { theme } from '@/shared/theme'
import 'styled-components'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    primary: string,

    colors: {
      black: string,
      white: string,
      bomb: string,
    },

    cellColors: string[],
  }
}
