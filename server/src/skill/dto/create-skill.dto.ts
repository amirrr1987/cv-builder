import { createZodDto } from 'nestjs-zod';
import { skillSchema } from './skill.dto';

const skillCreateSchema = skillSchema.omit({ _id: true });

export class SkillCreateDTO extends createZodDto(skillCreateSchema) {}
