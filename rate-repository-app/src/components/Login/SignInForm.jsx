import { Text, Pressable, View } from 'react-native'
import { useFormik } from 'formik'

import theme from '../../theme'

import FormInput from '../utils/FormInput'
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
      <FormInput
        placeholder='Username'
        value={formik.values.username}
        error={usernameError}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />

      <FormInput
        placeholder='Password'
        value={formik.values.password}
        error={passwordError}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
      />

      <Pressable style={theme.form.button} onPress={formik.handleSubmit}>
        <Text style={theme.form.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}


export default SignInForm