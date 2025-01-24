import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/models/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
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
