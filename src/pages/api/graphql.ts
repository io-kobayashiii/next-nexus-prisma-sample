import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { schema } from '../../backend/schema';
import { Context, prisma } from '../../backend/context';
import { PrismaClient } from '@prisma/client';

export default createYoga<
  {
    req: NextApiRequest;
    res: NextApiResponse;
    prisma: PrismaClient;
  },
  Context
>({
  graphqlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_PATH,
  schema,
  context: ({ req, res }) => ({ req, res, prisma }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};
