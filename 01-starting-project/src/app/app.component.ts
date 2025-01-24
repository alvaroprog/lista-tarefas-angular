import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { User } from './shared/models/user.model';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
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
