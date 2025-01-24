import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(): User | undefined {
    return this.users.find(u => u.id === this.selectedUserId);
  }

  onUserSelected(userId: string): void {
    this.selectedUserId = userId;
    console.log(`The user with id "${userId}" was selected!`);
  }
}
