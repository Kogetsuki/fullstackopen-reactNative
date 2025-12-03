import { Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'

import { GET_REPOSITORY } from '../../graphql/queries'
import RepositoryItem from './RepositoryItem'


const RepositoryItemContainer = () => {
  const { id } = useParams()

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id }
  })

  if (loading)
    return <Text>Loading...</Text>

  if (error)
    return <Text>Error: {error.message}</Text>

  const repo = data?.repository

  return <RepositoryItem repo={repo} showGitHubButton={true} />
}


export default RepositoryItemContainer