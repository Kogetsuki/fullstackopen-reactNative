import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import theme from '../theme'

import RepoList from './Repos/RepoList'
import AppBar from './AppBar/AppBar'
import SignIn from './SignIn'


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1
  }
})


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path='/' element={<RepoList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}


export default Main