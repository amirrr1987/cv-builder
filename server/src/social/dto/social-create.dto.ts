import { createZodDto } from 'nestjs-zod';
import { socialSchema } from './social.dto';

const socialCreateSchema = socialSchema;

export class SocialCreateDTO extends createZodDto(socialCreateSchema) {}
