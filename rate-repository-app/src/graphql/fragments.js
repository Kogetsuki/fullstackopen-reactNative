import { gql } from '@apollo/client'


export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`


export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      ...UserDetails
    }
    repository {
      id
      fullName
    }
  }
  ${USER_DETAILS}
`


export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    name
    createdAt
    ownerAvatarUrl
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
    reviews {
      edges {
        node {
          ...ReviewDetails
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`