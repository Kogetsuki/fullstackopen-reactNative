import { TextInput, Text, View } from 'react-native'
import theme from '../../theme'

/**
 * Reusable form input component with error display
 */
const FormInput = ({
  placeholder,
  value,
  error,
  onChangeText,
  onBlur,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false
}) => {
  const hasError = !!error


  return (
    <View>
      <TextInput
        style={hasError ? theme.form.errorInput : theme.form.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
      />

      {hasError && (
        <Text style={theme.form.errorText}>{error}</Text>
      )}
    </View>
  )
}

export default FormInput
