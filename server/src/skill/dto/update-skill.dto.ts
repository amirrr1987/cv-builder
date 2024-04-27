import { createZodDto } from 'nestjs-zod';
import { skillSchema } from './skill.dto';

const skillUpdateSchema = skillSchema.omit({ username: true });

export class SkillUpdateDTO extends createZodDto(skillUpdateSchema) {}
