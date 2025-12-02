import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import Constants from 'expo-constants'


const createApolloClient = () =>
  new ApolloClient({
    link: new HttpLink({
      uri: Constants.expoConfig.extra.APOLLO_URI,
    }),
    cache: new InMemoryCache({
      canonizeResults: false
    })
  })


export default createApolloClient
