import { View, StyleSheet } from 'react-native'
import StatItem from '../utils/StatItem'


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})


const formatCount = (count) =>
  count >= 1000
    ? `${(count / 1000).toFixed(1)}k`
    : String(count)


const RepositoryStats = ({ item }) => {
  return (
    <View style={styles.row}>
      <StatItem value={formatCount(item.stargazersCount)} label='Stars' />
      <StatItem value={formatCount(item.forksCount)} label='Forks' />
      <StatItem value={formatCount(item.reviewCount)} label='Reviews' />
      <StatItem value={formatCount(item.ratingAverage)} label='Rating' />
    </View>
  )
}


export default RepositoryStats