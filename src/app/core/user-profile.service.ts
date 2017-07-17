import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  isLoggedIn = true;
  user = {name: 'Sam Spade'};
}
