import { z } from 'nestjs-zod/z';

export const UserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
