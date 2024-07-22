import { View, Text } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import { Typography } from '@kujang/uniui'

import './unistyles'

export default function App() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
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
    </View>
  )
}

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
