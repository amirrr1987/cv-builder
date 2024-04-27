import { z } from 'nestjs-zod/z';

export const personalSchema = z.object({
  _id: z.string(),
  username: z.string(),
  password: z.string(),
});
