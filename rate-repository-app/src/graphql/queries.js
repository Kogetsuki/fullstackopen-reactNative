import { gql } from '@apollo/client'

import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments'


export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      edges {
        node {
          ...RepositoryDetails
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`


export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`


export const ME = gql`
  query me($includeReviews: Boolean = false) {
    me {
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`