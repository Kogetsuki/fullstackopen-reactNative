import { FlatList, Text, StyleSheet, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'

import theme from '../../theme'

import { GET_REPOSITORY } from '../../graphql/queries'

import RepositoryItem from './RepositoryItem'
import ReviewItem from '../Reviews/ReviewItem'
import LoadingError from '../utils/LoadingError'


const styles = StyleSheet.create({
  separator: {
    height: 10
  },

  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1,
    paddingTop: 15
  }
})


const ItemSeparator = () =>
  <View style={styles.separator} />


const RepositoryItemContainer = () => {
  const { id } = useParams()

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id }
  })

  if (loading || error)
    return <LoadingError loading={loading} error={error} />


  const repo = data?.repository

  const reviews =
    repo
      ? repo.reviews.edges.map(edge => edge.node)
      : []


  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem repo={repo} showGitHubButton={true} />}
        renderItem={({ item }) => <ReviewItem review={item} />}
      />
    </View>
  )
}


export default RepositoryItemContainer