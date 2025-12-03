import { View, Text, TextInput, Pressable } from 'react-native'
import { useFormik } from 'formik'

import theme from '../../theme'

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
      {/* Owner Name */}
      <TextInput
        style={ownerNameError ? theme.form.errorInput : theme.form.input}
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
        onBlur={formik.handleBlur('ownerName')}
      />

      {ownerNameError && (
        <Text style={theme.form.errorText}>
          {formik.errors.ownerName}
        </Text>
      )}

      {/* Repo Name */}
      <TextInput
        style={repositoryNameError ? theme.form.errorInput : theme.form.input}
        placeholder='Repository Name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        onBlur={formik.handleBlur('repositoryName')}
      />

      {repositoryNameError && (
        <Text style={theme.form.errorText}>
          {formik.errors.repositoryName}
        </Text>
      )}

      {/* Rating */}
      <TextInput
        style={ratingError ? theme.form.errorInput : theme.form.input}
        placeholder='Rating (0 - 100)'
        keyboardType='numeric'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
        onBlur={formik.handleBlur('rating')}
      />

      {ratingError && (
        <Text style={theme.form.errorText}>
          {formik.errors.rating}
        </Text>
      )}

      {/* Review */}
      <TextInput
        style={theme.form.input}
        placeholder='Review'
        value={formik.values.text}
        multiline
        onChangeText={formik.handleChange('text')}
      />

      <Pressable style={theme.form.button} onPress={formik.handleSubmit}>
        <Text style={theme.form.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
}


export default ReviewForm
