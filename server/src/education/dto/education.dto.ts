import { z } from 'nestjs-zod/z';

export const educationSchema = z.object({
  _id: z.string(),
  degree: z.string(),
  institution: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
});
