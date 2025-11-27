import { View, StyleSheet, Text } from 'react-native'

import theme from '../../theme'

import RepoHeader from './RepoHeader'
import RepoStats from './RepoStats'


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.formBackground
  }
})


const RepoItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <RepoHeader item={repo} />
      <RepoStats item={repo} />
    </View>
  )
}


export default RepoItem