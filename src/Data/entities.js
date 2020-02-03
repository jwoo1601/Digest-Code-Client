import { normalize, schema } from 'normalizr';

export const User = new schema.Entity('users');
export const Post = new schema.Entity('posts', {
    commentedBy: User
});