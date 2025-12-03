import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  text: {
    fontSize: 16,
    marginTop: 10
  },

  error: {
    color: theme.colors.textDanger || '#d73a49'
  }
})

/**
 * Unified component for displaying loading and error states in queries
 */
const LoadingError = ({ loading, error, testID = 'loadingError' }) => {
  if (!loading && !error) return null

  return (
    <View style={styles.container} testID={testID}>
      {loading && <ActivityIndicator size='large' color={theme.colors.primary} />}

      {error && (
        <Text style={[styles.text, styles.error]}>
          Error: {error.message}
        </Text>
      )}
    </View>
  )
}

export default LoadingError
