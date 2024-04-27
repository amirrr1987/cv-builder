import { createZodDto } from 'nestjs-zod';
import { personalSchema } from './personal.dto';

const personalUpdateSchema = personalSchema;

export class PersonalUpdateDTO extends createZodDto(personalUpdateSchema) {}
