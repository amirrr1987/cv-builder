import { createZodDto } from 'nestjs-zod';
import { skillSchema } from './social.dto';

const skillCreateSchema = skillSchema;

export class SkillCreateDTO extends createZodDto(skillCreateSchema) {}
