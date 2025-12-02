import { StatusBar } from 'react-native';
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client/react'
import { LogBox } from 'react-native';

import createApolloClient from './src/utils/apolloClient'
import Main from './src/components/Main'


// -----------------------------------------------------------------------
// Suppress dev warnings
// -----------------------------------------------------------------------
if (__DEV__)
  LogBox.ignoreLogs([
    "Require cycle:",
    "VirtualizedLists should never be nested",
    "Warning: Each child in a list",
    "Warning: Failed prop type",
    "Failed prop type",
    "Non-serializable values were found",
    "expo-app-loading is deprecated",
    "Possible Unhandled Promise Rejection",
    "canonizeResults",
  ])


const originalWarn = console.warn

console.warn = (...args) => {
  const msg = args[0]

  if (typeof msg === 'string') {
    if (msg.includes("canonizeResults"))
      return;
    if (msg.includes("cache.diff"))
      return;
  }

  originalWarn(...args);
}


// -----------------------------------------------------------------------
// App
// -----------------------------------------------------------------------
const App = () => {
  const apolloClient = createApolloClient()

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='auto' />
    </>
  );
}


export default App
