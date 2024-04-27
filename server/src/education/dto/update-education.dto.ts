import { createZodDto } from 'nestjs-zod';
import { educationSchema } from './education.dto';

const educationUpdateSchema = educationSchema;

export class educationUpdateDTO extends createZodDto(educationUpdateSchema) {}
