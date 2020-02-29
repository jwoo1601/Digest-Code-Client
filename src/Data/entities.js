import { normalize, schema } from 'data/node_modules/normalizr';

export const User = new schema.Entity('users');
export const Post = new schema.Entity('posts', {
    commentedBy: User,
});
