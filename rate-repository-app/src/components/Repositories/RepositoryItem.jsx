import { View, StyleSheet, Text } from 'react-native'

import theme from '../../theme'

import RepositoryHeader from './RepositoryHeader'
import RepositoryStats from './RepositoryStats'


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.formBackground
  }
})


const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container} testID='repositoryItem'>
      <RepositoryHeader item={repo} />
      <RepositoryStats item={repo} />
    </View>
  )
}


export default RepositoryItem