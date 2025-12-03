import { Text, Pressable, View } from 'react-native'
import { useFormik } from 'formik'

import theme from '../../theme'

import FormInput from '../utils/FormInput'
import {
  signUpValidation,
  signUpInitialValues
} from '../../yup/SignUpValidation'


const SignUpForm = ({ onSubmit }) => {
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
      {/* Username */}
      <FormInput
        placeholder='Username'
        value={formik.values.username}
        error={usernameError}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />

      {/* Password */}
      <FormInput
        placeholder='Password'
        value={formik.values.password}
        error={passwordError}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
      />

      {/* Password Confirmation */}
      <FormInput
        placeholder='Password Confirmation'
        value={formik.values.passwordConfirmation}
        error={passwordConfirmationError}
        onChangeText={formik.handleChange('passwordConfirmation')}
        onBlur={formik.handleBlur('passwordConfirmation')}
        secureTextEntry
      />

      <Pressable style={theme.form.button} onPress={formik.handleSubmit}>
        <Text style={theme.form.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  )
}


export default SignUpForm