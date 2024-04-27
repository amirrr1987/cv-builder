import { createZodDto } from 'nestjs-zod';
import { skillSchema } from './skill.dto';

const skillUpdateSchema = skillSchema;

export class SkillUpdateDTO extends createZodDto(skillUpdateSchema) {}
