import { FlatList, View, StyleSheet } from 'react-native'

import useRepositories from '../../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'

import theme from '../../theme'


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1,
    paddingTop: 15
  }
})


const ItemSeparator = () =>
  <View style={styles.separator} />


export const RepositoryListContainer = ({ repositories }) => {
  // Get nodes from edges array
  const repositoryNodes =
    repositories
      ? repositories.edges.map(edge => edge.node)
      : []


  return (
    <View style={styles.container}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RepositoryItem repo={item} />}
      />
    </View>
  )
}


const RepositoryList = () => {
  const { repositories } = useRepositories()

  return <RepositoryListContainer repositories={repositories} />
}


export default RepositoryList

