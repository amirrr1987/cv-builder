import { createZodDto } from 'nestjs-zod';
import { skillSchema } from './social.dto';

const skillUpdateSchema = skillSchema;

export class SkillUpdateDTO extends createZodDto(skillUpdateSchema) {}
