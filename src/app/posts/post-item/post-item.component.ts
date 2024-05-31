import { Component, Input } from '@angular/core';
import {users} from "../../../data/users";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
})
export class PostItemComponent {
  @Input() post
  @Input() userName!: string
  @Input() userRole!: string

  users = users
  getUserName(userId) {
    const user = this.users.find((user) => Number(user.id) === userId);
    if (user && user.name) {
      return user.name
    } else {
      return "no name"
    }
  }
  getUserRole(userId) {
    const user = this.users.find((user) => Number(user.id) === userId);
    if (user && user.role) {
      return user.role
    } else {
      return "no role"
    }
  }
}
