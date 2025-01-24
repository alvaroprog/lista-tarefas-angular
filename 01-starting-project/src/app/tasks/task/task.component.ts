import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { Task } from '../../shared/models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [
    CardComponent,
    DatePipe
  ]
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) { }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
