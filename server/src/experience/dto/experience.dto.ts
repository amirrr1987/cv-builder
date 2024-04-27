import { z } from 'nestjs-zod/z';

export const experienceSchema = z.object({
  _id: z.string(),
  label: z.string(),
  value: z.string(),
});
