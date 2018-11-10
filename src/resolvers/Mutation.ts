import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: (parent, {user}, ctx) => ctx.User.create(user.firstName, user.lastName)
};
