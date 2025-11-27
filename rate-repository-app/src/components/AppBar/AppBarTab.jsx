import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../../theme'


const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarText,
    fontWeight: theme.fontWeights.bold,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  }
})


const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to} component={Pressable}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  )
}


export default AppBarTab