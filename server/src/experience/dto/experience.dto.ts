import { z } from 'nestjs-zod/z';

export const experienceSchema = z.object({
  _id: z.string(),
  title: z.string(),
  company: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string(),
});
