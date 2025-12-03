import { gql } from '@apollo/client';

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`;

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
`;

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
  }
`;

export const PAGE_INFO_DETAILS = gql`
  fragment PageInfoDetails on PageInfo {
    startCursor
    endCursor
    hasNextPage
  }
`;
