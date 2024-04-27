import { Inject, Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dto/user-create.dto';
import { UserUpdateDTO } from './dto/user-update.dto';
import { FirebaseService } from '@speakbox/nestjs-firebase-admin';

@Injectable()
export class UserRepository {
  constructor(
    @Inject(FirebaseService) private readonly firebase: FirebaseService,
  ) {}
  async create(dto: UserCreateDTO) {
    try {
      const userRecord = await this.firebase.auth().createUser(dto);

      return userRecord;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, dto: UserUpdateDTO) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
