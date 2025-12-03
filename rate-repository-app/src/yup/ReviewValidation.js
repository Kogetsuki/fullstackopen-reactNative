import * as yup from 'yup'


export const reviewValidationSchema = yup.object().shape({
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

  text: yup
    .string()
    .optional()
})


export const reviewInitialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
}