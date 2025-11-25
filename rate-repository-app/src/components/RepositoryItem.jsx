import { Text, View, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20
  }
})


const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Full name: {repo.fullName}
      </Text>
      <Text>Description: {repo.description}</Text>
      <Text>Language: {repo.language}</Text>
      <Text>Stars: {repo.stargazersCount}</Text>
      <Text>Forks: {repo.forksCount}</Text>
      <Text>Reviews: {repo.reviewCount}</Text>
      <Text>Rating: {repo.ratingAverage}</Text>
    </View>
  )
}


export default RepositoryItem