import { View, Image, Text, StyleSheet } from 'react-native'
import theme from '../../theme'


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 12
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 5,
    marginRight: 15
  },

  info: {
    flex: 1,
    flexShrink: 1
  },

  name: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 5
  },

  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginTop: 6
  },

  languageText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
})


const RepoHeader = ({ item }) => {
  return (
    <View style={styles.row}>
      {/* Profile picture */}
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />

      {/* Profile info */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/* Language */}
      <View style={styles.languageTag}>
        <Text style={styles.languageText}>{item.language}</Text>
      </View>
    </View>

  )
}

export default RepoHeader