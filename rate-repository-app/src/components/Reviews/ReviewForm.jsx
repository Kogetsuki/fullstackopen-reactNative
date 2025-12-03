import { View, Text, Pressable } from 'react-native'
import { useFormik } from 'formik'

import theme from '../../theme'
import FormInput from '../utils/FormInput'

import {
  reviewValidationSchema,
  reviewInitialValues
} from '../../yup/ReviewValidation'


export const ReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: reviewInitialValues,
    validationSchema: reviewValidationSchema,
    onSubmit
  })

  const ownerNameError = formik.touched.ownerName && formik.errors.ownerName
  const repositoryNameError = formik.touched.repositoryName && formik.errors.repositoryName
  const ratingError = formik.touched.rating && formik.errors.rating


  return (
    <View style={theme.form.container}>
      <FormInput
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        error={ownerNameError}
        onChangeText={formik.handleChange('ownerName')}
        onBlur={formik.handleBlur('ownerName')}
      />

      <FormInput
        placeholder='Repository Name'
        value={formik.values.repositoryName}
        error={repositoryNameError}
        onChangeText={formik.handleChange('repositoryName')}
        onBlur={formik.handleBlur('repositoryName')}
      />

      <FormInput
        placeholder='Rating (0 - 100)'
        value={formik.values.rating}
        error={ratingError}
        keyboardType='numeric'
        onChangeText={formik.handleChange('rating')}
        onBlur={formik.handleBlur('rating')}
      />

      <FormInput
        placeholder='Review'
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        multiline
      />

      <Pressable style={theme.form.button} onPress={formik.handleSubmit}>
        <Text style={theme.form.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
}


export default ReviewForm
