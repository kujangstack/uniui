import { Button } from '@kujang/uniui'
import { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

const ButtonComponentContainer = () => {
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <Text>UniUI Button</Text>
      <View style={{ marginBottom: 12, gap: 10 }}>
        <Button title='Press me' />
        <Button title='Primary `small` Button' size='small' />
        <Button title='Primary `large` Button' size='large' />
        <Button title='Primary `extra-large` Button' size='extra-large' />

        <Text>Secondary</Text>
        <Button title='Press me' color='secondary' />
        <Button title='Primary `small` Button' size='small' color='secondary' />
        <Button title='Primary `large` Button' size='large' color='secondary' />
        <Button
          title='Primary `extra-large` Button'
          size='extra-large'
          color='secondary'
        />

        <Text>Primary rounded</Text>
        <Button title='Press me' color='primary' rounded />
        <Button
          title='Primary `small` Button'
          size='small'
          color='primary'
          rounded
        />
        <Button
          title='Primary `large` Button'
          size='large'
          color='primary'
          rounded
        />
        <Button
          title='Primary `extra-large` Button'
          size='extra-large'
          color='primary'
          rounded
        />

        <Text>Outlined button</Text>
        <Button title='Press me' color='primary' variant='outlined' />
        <Button
          title='Primary `small` Button'
          size='small'
          color='primary'
          variant='outlined'
        />
        <Button
          title='Primary `large` Button'
          size='large'
          color='primary'
          variant='outlined'
        />
        <Button
          title='Primary `extra-large` Button'
          size='extra-large'
          color='primary'
          variant='outlined'
        />
      </View>
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

export default ButtonComponentContainer
