import { useNavigate } from 'react-router-native'

import SignInForm from './SignInForm'
import useSignIn from '../../hooks/useSignIn'


const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const data = await signIn({ username, password })
      console.log(`Sign in successful ${data}`)

      navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }

  return <SignInForm onSubmit={onSubmit} />
}


export default SignIn