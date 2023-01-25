import { objectType } from 'nexus';

export const MessageType = objectType({
  name: 'MessageType',
  definition(t) {
    t.nonNull.string('message');
  },
});
