import { View, Text, TextInput, Pressable } from 'react-native'
import * as yup from 'yup'
import { useFormik } from 'formik'

import theme from '../../theme'


const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner\'s name is required'),

  repositoryName: yup
    .string()
    .required('Repository name is required'),

  rating: yup
    .number()
    .typeError('Rating must be a number')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .required('Rating is required'),

  review: yup
    .string()
    .optional()
})


const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: ''
}


export const ReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
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
        secureTextEntry
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        onBlur={formik.handleBlur('ownerName')}
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
        onBlur={formik.handleBlur('ownerName')}
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
        value={formik.values.review}
        multiline
        onChangeText={formik.handleChange('review')}
      />

      <Pressable style={theme.form.button} onPress={formik.handleSubmit}>
        <Text style={theme.form.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
}




export default ReviewForm
