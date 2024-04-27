import { createZodDto } from 'nestjs-zod';
import { experienceSchema } from './experience.dto';

const experienceUpdateSchema = experienceSchema;

export class ExperienceUpdateDTO extends createZodDto(experienceUpdateSchema) {}
