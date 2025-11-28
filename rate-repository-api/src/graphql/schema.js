import { gql } from 'apollo-server';
import { merge } from 'lodash';

import OrderDirection from './enums/OrderDirection';

import DateTime from './scalars/DateTime';

import PageInfo from './types/PageInfo';
import Repository from './types/Repository';
import RepositoryConnection from './types/RepositoryConnection';
import Review from './types/Review';
import ReviewConnection from './types/ReviewConnection';
import User from './types/User';
import UserConnection from './types/UserConnection';

import authenticateMutation from './mutations/authenticate';
import createUserMutation from './mutations/createUser';
import createReviewMutation from './mutations/createReview';
import deleteReviewMutation from './mutations/deleteReview';

import meQuery from './queries/me';
import repositoryQuery from './queries/repository';
import repositoriesQuery from './queries/repositories';
import usersQuery from './queries/users';

const rootTypeDefs = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

export const typeDefs = [
  rootTypeDefs,
  OrderDirection.typeDefs,
  DateTime.typeDefs,
  PageInfo.typeDefs,
  Repository.typeDefs,
  RepositoryConnection.typeDefs,
  Review.typeDefs,
  ReviewConnection.typeDefs,
  User.typeDefs,
  UserConnection.typeDefs,
  authenticateMutation.typeDefs,
  createUserMutation.typeDefs,
  createReviewMutation.typeDefs,
  deleteReviewMutation.typeDefs,
  meQuery.typeDefs,
  repositoryQuery.typeDefs,
  repositoriesQuery.typeDefs,
  usersQuery.typeDefs,
];

export const resolvers = merge(
  OrderDirection.resolvers,
  DateTime.resolvers,
  PageInfo.resolvers,
  Repository.resolvers,
  RepositoryConnection.resolvers,
  Review.resolvers,
  ReviewConnection.resolvers,
  User.resolvers,
  UserConnection.resolvers,
  authenticateMutation.resolvers,
  createUserMutation.resolvers,
  createReviewMutation.resolvers,
  deleteReviewMutation.resolvers,
  meQuery.resolvers,
  repositoryQuery.resolvers,
  repositoriesQuery.resolvers,
  usersQuery.resolvers,
);
