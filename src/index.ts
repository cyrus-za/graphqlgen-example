import { Context } from './types';
import { GraphQLServer } from 'graphql-yoga';
import { resolvers } from './resolvers';

export default async (context: Context) => {
  const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers,
    context
  } as any);

  await server.start(() => console.log('Server is running on http://localhost:4000'));
};
