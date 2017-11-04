import { Injectable } from '@angular/core';

/**
 * ログイン中かどうかの状態を管理
 */
@Injectable()
export class UserProfileService {
  isLoggedIn = true;
  user = {name: 'Sam Spade'};
}
