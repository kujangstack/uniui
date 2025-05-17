import { TextField } from '@kujang/uniui'
import { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

const TextFieldComponentContainer = () => {
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        <Text>UniUI TextField</Text>
      </View>
      <TextField
        gutterBottom={4}
        size='small'
        value={name}
        onChangeText={setName}
        placeholder='What your name?'
      />
      <TextField
        gutterBottom
        size='medium'
        value={name}
        onChangeText={setName}
        placeholder='What your name?'
      />
      <TextField
        gutterBottom
        size='large'
        value={name}
        onChangeText={setName}
        placeholder='What your name?'
      />
      <TextField
        gutterBottom
        size='extra-large'
        value={name}
        onChangeText={setName}
        placeholder='What your name?'
        textColor='primary.main'
        fontWeight='bold'
      />
    </View>
  )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 64,
  },
}))

export default TextFieldComponentContainer
