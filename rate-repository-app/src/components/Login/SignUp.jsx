import { Text, TextInput, Pressable, View } from 'react-native'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'

import theme from '../../theme'

import {
  signUpValidation,
  signUpInitialValues
} from '../../yup/SignUpValidation'

import useSignUp from '../../hooks/useSignUp'
import useSignIn from '../../hooks/useSignIn'


export const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpValidation,
    onSubmit
  })


  const usernameError = formik.touched.username && formik.errors.username
  const passwordError = formik.touched.password && formik.errors.password
  const passwordConfirmationError = formik.touched.passwordConfirmation && formik.errors.passwordConfirmation


  return (
    <View style={theme.form.container}>
      <TextInput
        style={usernameError ? theme.form.errorInput : theme.form.input}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />

      {usernameError && (
        <Text style={theme.form.errorText}>
          {formik.errors.username}
        </Text>
      )}

      <TextInput
        style={passwordError ? theme.form.errorInput : theme.form.input}
        placeholder='Password'
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />

      {passwordError && (
        <Text style={theme.form.errorText}>
          {formik.errors.password}
        </Text>
      )}

      <TextInput
        style={passwordConfirmationError ? theme.form.errorInput : theme.form.input}
        placeholder='Password Confirmation'
        secureTextEntry
        value={formik.values.passwordConfirmation}
        onChangeText={formik.handleChange('passwordConfirmation')}
      />

      {passwordConfirmationError && (
        <Text style={theme.form.errorText}>
          {formik.errors.passwordConfirmation}
        </Text>
      )}

      <Pressable style={theme.form.button} onPress={formik.handleSubmit}>
        <Text style={theme.form.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  )
}


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