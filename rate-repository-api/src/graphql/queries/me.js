import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend type Query {
    """
    Returns the authenticated user
    """
    me: User
  }
`;

export const resolvers = {
  Query: {
    me: async (obj, args, { authService }) => {
      return authService.getUser();
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
