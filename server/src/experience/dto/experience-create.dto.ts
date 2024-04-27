import { createZodDto } from 'nestjs-zod';
import { experienceSchema } from './experience.dto';

const experienceCreateSchema = experienceSchema;

export class ExperienceCreateDTO extends createZodDto(experienceCreateSchema) {}
