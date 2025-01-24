import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select: EventEmitter<string> = new EventEmitter();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
