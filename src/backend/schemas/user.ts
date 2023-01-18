import { list, nonNull, objectType, queryField } from 'nexus';

export const UserType = objectType({
  name: 'UserType',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('email');
    t.nonNull.string('name');
  },
});

export const UsersQueryField = queryField('users', {
  type: list(UserType),
  resolve: (_root, _args, ctx) => {
    return [
      {
        id: '1',
        email: 'user1@kobayashiii.dev',
        name: 'user1',
      },
    ];
  },
});
