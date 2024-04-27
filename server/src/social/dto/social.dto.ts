import { z } from 'nestjs-zod/z';

export const socialSchema = z.object({
  _id: z.string(),
  label: z.string(),
  icon: z.string(),
  value: z.string(),
});
