import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REVIEW_DETAILS, PAGE_INFO_DETAILS } from './fragments';

// Paginated repositories
export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $first: Int,
    $after: String
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      first: $first,
      after: $after
    ) {
      totalCount
      edges {
        node {
          ...RepositoryDetails
        }
      }
      pageInfo {
        ...PageInfoDetails
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGE_INFO_DETAILS}
`;

// Single repository with paginated reviews
export const GET_REPOSITORY = gql`
  query getRepository(
    $id: ID!,
    $first: Int,
    $after: String
  ) {
    repository(id: $id) {
      ...RepositoryDetails
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          ...PageInfoDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO_DETAILS}
`;

// Current user with optional reviews
export const ME = gql`
  query me($includeReviews: Boolean = false) {
    me {
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          ...PageInfoDetails
        }
      }
    }
  }
  ${REVIEW_DETAILS}
  ${PAGE_INFO_DETAILS}
`;
