import { z } from 'nestjs-zod/z';

export const UserSchema = z.object({
  _id: z.string(),
  username: z.string(),
  password: z.string(),
});
