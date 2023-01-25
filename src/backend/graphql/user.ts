import { list, mutationType, objectType, queryField, stringArg } from 'nexus';
import bcrypt from 'bcryptjs';

export const UserType = objectType({
  name: 'UserType',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('email');
    t.nonNull.string('name');
    t.nonNull.dateTime('createdAt');
    t.nonNull.dateTime('updatedAt');
  },
});

export const UsersQueryField = queryField('users', {
  type: list(UserType),
  resolve: (_root, _args, ctx) => {
    return ctx.prisma.user.findMany();
  },
});

export const UserMutationField = mutationType({
  definition: (t) => {
    t.field('createUser', {
      type: UserType,
      args: {
        email: stringArg(),
        password: stringArg(),
        name: stringArg(),
      },
      resolve: async (_root, { email, password, name }, ctx) => {
        const hashedPassword = await bcrypt.hash(password!, 10);
        const newUser = await ctx.prisma.user.create({
          data: {
            email: email!,
            password: hashedPassword,
            name: name!,
          },
        });
        return newUser;
      },
    });
  },
});
