import { z } from 'nestjs-zod/z';

export const skillSchema = z.object({
  label: z.string(),
  value: z.string(),
});
