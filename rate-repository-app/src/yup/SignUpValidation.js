import * as yup from 'yup'


export const signUpValidation = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must at most 30 characters')
    .required('Username is required'),

  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must at most 30 characters')
    .required('Password is required'),

  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required')
})


export const signUpInitialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
}
