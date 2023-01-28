import {
  list,
  mutationType,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from 'nexus';
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
        const createdUser = await ctx.prisma.user.create({
          data: {
            email: email!,
            password: hashedPassword,
            name: name!,
          },
        });
        return createdUser;
      },
    });

    t.field('updateUser', {
      type: objectType({
        name: 'UpdateUserResponse',
        definition: (t) => {
          t.field('updatedUser', { type: UserType });
          t.string('message');
        },
      }),
      args: {
        email: nonNull(stringArg()),
        password: stringArg(),
        name: stringArg(),
      },
      resolve: async (_root, { email, password, name }, ctx) => {
        if (!email && !password && !name) {
          return {
            message: 'Must enter either "email", "name", or "password"',
          };
        }
        const hashedPassword = await bcrypt.hash(password!, 10);
        try {
          const updatedUser = await ctx.prisma.user.update({
            where: { email },
            data: {
              email: email!,
              password: hashedPassword,
              name: name!,
            },
          });
          return { updatedUser, message: 'User update is succeeded' };
        } catch (error) {
          console.log(error);
          return {
            message: 'User update is failed',
          };
        }
      },
    });

    t.field('deleteUser', {
      type: objectType({
        name: 'DeleteUserResponse',
        definition: (t) => {
          t.field('deletedUser', { type: UserType });
          t.string('message');
        },
      }),
      args: {
        email: nonNull(stringArg()),
      },
      resolve: async (_root, { email }, ctx) => {
        console.log('deleteUser / email:', email);
        try {
          const deletedUser = await ctx.prisma.user.delete({
            where: { email },
          });
          return {
            deletedUser,
            message: 'User deletion is succeeded',
          };
        } catch (error) {
          console.log(error);
          return {
            message: 'User deletion is failed',
          };
        }
      },
    });
  },
});
