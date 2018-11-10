import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  user: (parent, args, ctx) => {
    return ctx.User.findOne(args.id);
  }
};
