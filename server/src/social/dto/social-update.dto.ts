import { createZodDto } from 'nestjs-zod';
import { socialSchema } from './social.dto';

const socialUpdateSchema = socialSchema;

export class SocialUpdateDTO extends createZodDto(socialUpdateSchema) {}
