import { View, StyleSheet, Text } from 'react-native'
import RepoHeader from './RepoHeader'
import RepoStats from './RepoStats'
import AppBar from '../AppBar/AppBar'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white'
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