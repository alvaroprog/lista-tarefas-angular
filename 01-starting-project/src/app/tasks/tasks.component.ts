import { Component, Input } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [
    TaskComponent,
    NewTaskComponent
  ]
})
export class TasksComponent {

  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;

  constructor(private tasksService: TasksService) { }

  isAddingTask = false;

  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string): void {
    this.tasksService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }
}