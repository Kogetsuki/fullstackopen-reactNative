import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { useQuery } from '@apollo/client'

import { ME } from '../../graphql/queries'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import SignOut from '../SignOut'


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 15,
    marginBottom: 15,
    flexDirection: 'row',
    backgroundColor: theme.colors.appBarBackground
  }
})


const AppBar = () => {
  const { data, loading, error } = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  })

  const isLogged = !!data?.me?.username

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' to='/' />

        {isLogged ? (
          <SignOut />
        ) : (
          <AppBarTab text='Sign in' to='/signin' />
        )}
        {/* <AppBarTab text='Dev' to='/dev' /> */}
      </ScrollView>
    </View>

  )
}


export default AppBar