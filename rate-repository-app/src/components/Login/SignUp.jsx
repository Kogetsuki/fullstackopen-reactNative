import { useNavigate } from 'react-router'

import SignUpForm from './SignUpForm'
import useSignUp from '../../hooks/useSignUp'
import useSignIn from '../../hooks/useSignIn'


const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn()

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const data = await signUp({ username, password })
      console.log(`Sign up successful ${data}`)

      await signIn({ username, password })
      navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }

  return <SignUpForm onSubmit={onSubmit} />
}


export default SignUp