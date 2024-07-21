import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { multiply } from '@kujang/uniui'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

export default function App() {
  const { styles } = useStyles(stylesheet)
  const [result, setResult] = useState<number | null>(null)

  const onPressCalculate = async () => {
    const number1 = Math.floor(Math.random() * 100)
    const number2 = Math.floor(Math.random() * 100)
    setResult(await multiply(number1, number2))
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button title='Calculate' onPress={onPressCalculate} />
    </View>
  )
}

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})
