import { createZodDto } from 'nestjs-zod';
import { educationSchema } from './education.dto';

const educationCreateSchema = educationSchema.omit({ _id: true });

export class EducationCreateDTO extends createZodDto(educationCreateSchema) {}
