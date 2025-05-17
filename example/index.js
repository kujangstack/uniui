/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { name as appName } from './app.json'

// app entry point
import UniUIExample from './src/App'

enableScreens(true)

AppRegistry.registerComponent(appName, () => UniUIExample)
