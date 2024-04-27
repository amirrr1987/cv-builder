import { Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dto/user-create.dto';
import { UserUpdateDTO } from './dto/user-update.dto';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  create(dto: UserCreateDTO) {
    return this.userRepository.create(dto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, dto: UserUpdateDTO) {
    return this.update(id, dto);
  }

  remove(id: string) {
    return this.userRepository.remove(id);
  }
}
