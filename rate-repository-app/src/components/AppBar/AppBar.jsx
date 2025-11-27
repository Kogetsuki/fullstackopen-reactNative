import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'

import theme from '../../theme'
import AppBarTab from './AppBarTab'


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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Sign in' to='/signin' />
        <AppBarTab text='Repositories' to='/' />
        {/* <AppBarTab text='Dev' to='/dev' /> */}
      </ScrollView>
    </View>

  )
}


export default AppBar