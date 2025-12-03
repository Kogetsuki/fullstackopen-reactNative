import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'

import useAuthStorage from '../../hooks/useAuthStorage'
import AppBarTab from '../AppBar/AppBarTab'


const SignOut = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()


  const handleSignOut = async () => {
    console.log('Signing out')

    try {
      await authStorage.removeAccessToken()
      await apolloClient.resetStore()

      navigate('/signUp')
    }
    catch (error) {
      console.error('Sign out failed:', error)
    }
  }


  return <AppBarTab text='Sign Out' onPress={handleSignOut} />
}


export default SignOut