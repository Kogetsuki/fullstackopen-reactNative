import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

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
  const navigate = useNavigate()

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
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/${item.id}`)}>
            <RepositoryItem repo={item} />
          </Pressable>
        )}
      />
    </View>
  )
}


const RepositoryList = () => {
  const { repositories } = useRepositories()

  return <RepositoryListContainer repositories={repositories} />
}


export default RepositoryList

