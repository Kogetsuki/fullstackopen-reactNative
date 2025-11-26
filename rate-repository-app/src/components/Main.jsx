import { StyleSheet, View } from 'react-native'
import RepoList from './Repos/RepoList'
import AppBar from './AppBar/AppBar'


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
})


const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <RepoList />
      </View>
    </>
  )
}


export default Main