// react-native-unistyles
import { StyleSheet } from 'react-native-unistyles'

// uniui
import { Typography } from '@kujang/uniui'

import { ScrollView, Text, View } from 'react-native'

// import TextFieldContainer from './containers/TextFieldContainer'

// theme config
import { themes, theme_breakpoints } from '@kujang/uniui'
import ButtonComponentContainer from './containers/ButtonComponentContainer'
import TextFieldComponentContainer from './containers/TextFieldComponentContainer'

StyleSheet.configure({
  settings: {
    // adaptiveThemes: true,
    initialTheme: 'light',
  },
  breakpoints: theme_breakpoints,
  themes: themes,
})

const UniUIExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>React Native Text</Text>
        <Typography variant='body' gutterBottom={4}>
          UniUI Typography
        </Typography>
        <Typography variant='h2' gutterBottom={4}>
          UniUI Typography
        </Typography>
        <Typography variant='body' color='text.secondary'>
          UniUI Typography 'text.secondary'
        </Typography>
        <Typography variant='body' color='text.disabled'>
          UniUI Typography 'text.disabled'
        </Typography>
        <Typography variant='body' color='primary.main'>
          UniUI Typography 'primary.main'
        </Typography>
        <ButtonComponentContainer />
        <TextFieldComponentContainer />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default UniUIExample
