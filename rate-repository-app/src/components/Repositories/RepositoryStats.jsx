import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  item: {
    alignItems: 'center'
  },

  value: {
    fontWeight: theme.fontWeights.bold
  },

  label: {
    color: theme.colors.textSecondary
  }
})


const formatCount = (count) =>
  count >= 1000
    ? `${(count / 1000).toFixed(1)}k`
    : String(count)


const RepositoryStats = ({ item }) => {
  return (
    <View style={styles.row}>
      <View style={styles.item}>
        <Text style={styles.value}>{formatCount(item.stargazersCount)}</Text>
        <Text style={styles.label}>Stars</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.value}>{formatCount(item.forksCount)}</Text>
        <Text style={styles.label}>Forks</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.value}>{formatCount(item.reviewCount)}</Text>
        <Text style={styles.label}>Reviews</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.value}>{formatCount(item.ratingAverage)}</Text>
        <Text style={styles.label}>Rating</Text>
      </View>
    </View>
  )
}


export default RepositoryStats