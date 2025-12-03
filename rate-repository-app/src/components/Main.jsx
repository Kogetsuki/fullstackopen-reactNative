import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import theme from '../theme'

import AppBar from './AppBar/AppBar'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import RepositoryList from './Repositories/RepositoryList'
import RepositoryItemContainer from './Repositories/RepositoryItemContainer'
import MyReviews from './Reviews/MyReviews'
import ReviewForm from './Reviews/ReviewForm'
import Dev from './dev/Dev'


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
        <Route path='/' element={<RepositoryList />} />
        <Route path='/:id' element={<RepositoryItemContainer />} />
        <Route path='/createReview' element={<ReviewForm />} />
        <Route path='/myReviews' element={<MyReviews />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        {/* <Route path='/dev' element={<Dev />} /> */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}


export default Main