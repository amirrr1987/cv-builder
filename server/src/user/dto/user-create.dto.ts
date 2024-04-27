import { createZodDto } from 'nestjs-zod';
import { UserSchema } from './user.dto';

const UserCreateSchema = UserSchema.omit({ username: true });

export class UserCreateDTO extends createZodDto(UserCreateSchema) {}
