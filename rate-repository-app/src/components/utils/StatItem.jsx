import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  value: {
    fontWeight: theme.fontWeights.bold
  },

  label: {
    color: theme.colors.textSecondary
  }
})

/**
 * Reusable stat item component for displaying repository statistics
 */
const StatItem = ({ value, label }) => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
)

export default StatItem
