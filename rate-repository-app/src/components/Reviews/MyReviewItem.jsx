import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
import { format, parseISO } from 'date-fns'

import theme from '../../theme'
import useDeleteReview from '../../hooks/useDeleteReview'


const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.formBackground,
    padding: 15,
    marginBottom: 10
  },

  ratingItem: {
    flexDirection: 'row',
  },

  ratingCircle: {
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
    fontSize: 18,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center'
  },

  repoInfo: {
    flex: 1
  },

  repoName: {
    fontSize: 16,
    fontWeight: theme.fontWeights.bold,
  },

  createdAt: {
    color: 'grey',
    marginBottom: 8
  },

  text: {
    paddingRight: 20
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },

  buttonPrimary: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    height: 50,
    width: '45%',
    justifyContent: 'center'
  },

  buttonSecondary: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    height: 50,
    width: '45%',
    justifyContent: 'center'
  },

  buttonText: {
    color: theme.colors.textButton,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center'
  },
})


const formatDate = (date) =>
  format(parseISO(date), 'dd.MM.yyyy')


const MyReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate()
  const [deleteReview] = useDeleteReview()


  const handleView = () =>
    navigate(`/${review.repository.id}`)


  const handleDelete = () => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'CANCEL',
          style: 'cancel'
        },
        {
          text: 'DELETE',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteReview({ id: review.id })
              refetch()
            }
            catch (error) {
              console.error(error)
            }
          }
        }
      ]
    )
  }


  return (
    <View style={styles.item}>
      {/* Rating */}
      <View style={styles.ratingItem}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>

        {/* Info */}
        <View style={styles.repoInfo}>
          <Text style={styles.repoName}>{review.repository.fullName}</Text>
          <Text style={styles.createdAt}>{formatDate(review.createdAt)}</Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.actions}>
        <Pressable style={styles.buttonPrimary} onPress={handleView}>
          <Text style={styles.buttonText}>View repository</Text>
        </Pressable>

        <Pressable style={styles.buttonSecondary} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete review</Text>
        </Pressable>
      </View>
    </View>
  )
}


export default MyReviewItem