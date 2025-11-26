import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../../theme'


const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarText,
    fontWeight: theme.fontWeights.bold,
    paddingTop: 20,
    paddingBottom: 30
  }
})


const AppBarTab = ({ text }) => {
  return (
    <Pressable onPress={() => { }}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}


export default AppBarTab