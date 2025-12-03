import { Text, TextInput, Pressable, View } from 'react-native'
import { useFormik } from 'formik'

import theme from '../../theme'

import {
  signInInitialValues,
  signInValidationSchema
} from '../../yup/SignInValidation'


const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: signInInitialValues,
    validationSchema: signInValidationSchema,
    onSubmit
  })

  const usernameError = formik.touched.username && formik.errors.username
  const passwordError = formik.touched.password && formik.errors.password


  return (
    <View style={theme.form.container}>
      {/* Username */}
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

      {/* Password */}
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


export default SignInForm