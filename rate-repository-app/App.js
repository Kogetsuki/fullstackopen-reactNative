import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client/react'
import { StatusBar } from 'react-native';
import { LogBox } from 'react-native';

import createApolloClient from './src/utils/apolloClient'
import Main from './src/components/Main'
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';


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
const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>

      <StatusBar style='auto' />
    </>
  );
}


export default App
