import { Text, View, StyleSheet } from 'react-native'
import { format, parseISO } from 'date-fns'

import theme from '../../theme'


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.formBackground,
    flexDirection: 'row',
  },

  rating: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#0366d6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },

  ratingText: {
    color: '#0366d6',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  infoContainer: {
    marginRight: 60
  },

  nameText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  createdAtText: {
    color: 'grey',
    marginBottom: 10
  }

})


const formatDate = (date) =>
  format(parseISO(date), 'dd.MM.yyyy')


const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      {/* Rating */}
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{review.user.username}</Text>
        <Text style={styles.createdAtText}>{formatDate(review.createdAt)}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}


export default ReviewItem