import { z } from 'nestjs-zod/z';

export const personalSchema = z.object({
  _id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  mobile: z.string(),
  age: z.number(),
});
