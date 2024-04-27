import { createZodDto } from 'nestjs-zod';
import { UserSchema } from './user.dto';

const UserUpdateSchema = UserSchema.omit({ username: true });

export class UserUpdateDTO extends createZodDto(UserUpdateSchema) {}
