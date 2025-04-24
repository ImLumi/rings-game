import { User } from 'generated/prisma';

export type ResponseUser = Omit<User, 'password' | 'accessToken'>;
