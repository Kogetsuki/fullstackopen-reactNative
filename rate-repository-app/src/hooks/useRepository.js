import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id, first = 3) => {
  const { data, loading, fetchMore, error, ...rest } = useQuery(GET_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network'
  })


  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore)
      return

    console.log('FETCHMORE')

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor
      }
    })
  }


  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    error,
    ...rest
  }
}


export default useRepository