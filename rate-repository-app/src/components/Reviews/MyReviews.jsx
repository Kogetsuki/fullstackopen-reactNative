import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import theme from '../../theme';
import { ME } from '../../graphql/queries';

import LoadingError from '../utils/LoadingError';
import MyReviewItem from './MyReviewItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1,
    paddingTop: 15
  },

  emptyReviews: {
    padding: 15
  }
})


const MyReviews = () => {
  const navigate = useNavigate()

  const { data, loading, error, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network'
  })

  if (loading || error)
    return <LoadingError loading={loading} error={error} />

  const reviews =
    data?.me?.reviews
      ? data.me.reviews.edges.map(edge => edge.node)
      : []


  if (!reviews.length)
    return (
      <View style={styles.container}>
        <Text style={styles.emptyReviews}>
          No reviews yet
        </Text>
      </View>
    )


  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <MyReviewItem review={item} refetch={refetch} />}
      />
    </View>
  )
}


export default MyReviews