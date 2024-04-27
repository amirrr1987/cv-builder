import { createZodDto } from 'nestjs-zod';
import { skillSchema } from './skill.dto';

const skillCreateSchema = skillSchema.omit({ username: true });

export class SkillCreateDTO extends createZodDto(skillCreateSchema) {}
