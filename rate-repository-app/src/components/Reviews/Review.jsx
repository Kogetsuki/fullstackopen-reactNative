import { useNavigate } from 'react-router-native'

import ReviewForm from './ReviewForm'
import useCreateReview from '../../hooks/useCreateReview'


const Review = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values

    try {
      const repositoryId = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text
      })

      console.log(`Successfully created review`)

      navigate(`/${repositoryId}`)
    }
    catch (error) {
      console.log(error)
    }
  }

  return <ReviewForm onSubmit={onSubmit} />
}


export default Review