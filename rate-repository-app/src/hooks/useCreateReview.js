import { useApolloClient, useMutation } from '@apollo/client'

import { CREATE_REVIEW } from '../graphql/mutations'
import { GET_REPOSITORY } from '../graphql/queries'


const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)
  const client = useApolloClient()


  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await mutate({
      variables: {
        review: { ownerName, repositoryName, rating, text },
      },
    })

    const repositoryId = data?.createReview.repository.id

    await client.refetchQueries({
      include: [{ query: GET_REPOSITORY, variables: { id: repositoryId } }],
      fetchPolicy: 'cache-and-network'
    })

    return repositoryId
  }

  return [createReview, result]
}


export default useCreateReview