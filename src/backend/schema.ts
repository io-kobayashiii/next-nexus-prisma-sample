import { asNexusMethod, makeSchema } from 'nexus';
import * as types from './graphql/index';
import { join } from 'path';
import { GraphQLDateTime } from 'graphql-scalars';

export const schema = makeSchema({
  types: [types, asNexusMethod(GraphQLDateTime, 'dateTime', 'Date')],
  contextType: {
    module: join(process.cwd(), 'src', 'backend', 'context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  outputs: {
    typegen: join(
      process.cwd(),
      'src',
      'backend',
      'generated',
      'nexus-typegen.ts'
    ),
    schema: join(
      process.cwd(),
      'src',
      'backend',
      'generated',
      'schema.graphql'
    ),
  },
});
