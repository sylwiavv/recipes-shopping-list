// import {Component, Input} from '@angular/core';
// import {users} from "../../../../data/users";
//
// @Component({
//   selector: 'app-user-avatar',
//   templateUrl: './user-avatar.component.html',
//   styleUrl: './user-avatar.component.css'
// })
//
// type User = {
//   id: string,
//   name: string
//   avatar: string
// }
//
// export class UserAvatarComponent {
//   // @Input({required: true}) user!: User
//   // @Input({required: true}) avatarLink!: string
//   // users = users
//   //
//   // avatarPath(selectedUserId: number) {
//   //
//   //   return this.users.find((user) => user.id === selectedUserId.toString())!
//   //
//   //   // return 'assets/users/' + this.user.avatar
//   // }
// }

import { Component, Input } from '@angular/core';
import {users} from "../../../../data/users";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent {
  @Input() userId!: number;

  users = users

  getUserAvatar(userId) {
    const user = this.users.find((user) => Number(user.id) === userId);
    if (user && user.avatar) {
      return user.avatar;
    } else {
      return `./assets/users/user-7.jpeg`
    }
  }

}
