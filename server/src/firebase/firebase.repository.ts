import { Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseRepository {
  #auth: admin.auth.Auth;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: admin.app.App) {
    this.#auth = firebaseApp.auth();
  }

  auth(): admin.auth.Auth {
    return this.#auth;
  }
}
