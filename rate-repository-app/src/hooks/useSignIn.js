import { useMutation } from '@apollo/client'

import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'


const useSignIn = () => {
  const authStorage = useAuthStorage()
  const [mutate, result] = useMutation(AUTHENTICATE)


  const signIn = async ({ username, password }) =>
    mutate({
      variables: {
        credentials: { username, password }
      }
    })


  return [signIn, result]

}


export default useSignIn