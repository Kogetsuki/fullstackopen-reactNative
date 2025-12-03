import { View, StyleSheet, Pressable, Text } from 'react-native'
import * as Linking from 'expo-linking'

import theme from '../../theme'

import RepositoryHeader from './RepositoryHeader'
import RepositoryStats from './RepositoryStats'


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.formBackground,
    marginBottom: 10
  }
})


const RepositoryItem = ({ repo, showGitHubButton = false }) => {
  const handleOpenInGitHub = () =>
    Linking.openURL(repo.url).catch(e => console.error(`Failed: ${e}`))


  return (
    <View style={styles.container} testID='repositoryItem'>
      <RepositoryHeader item={repo} />
      <RepositoryStats item={repo} />

      {showGitHubButton && (
        <Pressable style={theme.form.button} onPress={handleOpenInGitHub}>
          <Text style={theme.form.buttonText}>Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  )
}


export default RepositoryItem