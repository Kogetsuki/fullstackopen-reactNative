import * as yup from 'yup'


export const signInValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),

  password: yup
    .string()
    .required('Password is required')
})


export const signInInitialValues = {
  username: '',
  password: ''
}
