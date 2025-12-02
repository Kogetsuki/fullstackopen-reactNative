import { Text, TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup'

import theme from '../theme';
import useSignIn from '../hooks/useSignIn';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),

  password: yup
    .string()
    .required('Password is required')
})


const initialValues = {
  username: '',
  password: ''
}


const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })


  const usernameError = formik.touched.username && formik.errors.username
  const passwordError = formik.touched.password && formik.errors.password


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

      <Pressable style={theme.form.button} onPress={formik.handleSubmit}>
        <Text style={theme.form.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}


const SignIn = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  return <SignInForm onSubmit={onSubmit} />
}


export default SignIn