import { createZodDto } from 'nestjs-zod';
import { personalSchema } from './personal.dto';

const personalCreateSchema = personalSchema;

export class PersonalCreateDTO extends createZodDto(personalCreateSchema) {}
