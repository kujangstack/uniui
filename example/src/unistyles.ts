import { UnistylesRegistry } from 'react-native-unistyles'
import {
  theme_lightTheme,
  theme_darkTheme,
  theme_breakpoints,
  ThemeBreakpoints,
  Themes,
} from '@kujang/uniui'

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends ThemeBreakpoints {}
  export interface UnistylesThemes extends Themes {}
}

UnistylesRegistry.addBreakpoints(theme_breakpoints)
  .addThemes({
    light: theme_lightTheme,
    dark: theme_darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
    initialTheme: 'light',
  })
