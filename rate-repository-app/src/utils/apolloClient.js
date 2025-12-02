import { ApolloClient, InMemoryCache } from '@apollo/client'


const createApolloClient = () =>
  new ApolloClient({
    uri: 'https://paronymous-atmospheric-zenia.ngrok-free.dev/graphql',
    cache: new InMemoryCache()
  })


export default createApolloClient
