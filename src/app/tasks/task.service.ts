import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './NewTask.dto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private tasks = new BehaviorSubject([
    new TaskItem('Visit An'),
    new TaskItem('Call Dad'),
    new TaskItem('Go to the gym'),
    new TaskItem('Wash the dishes'),
    new TaskItem('Shop for the party'),
  ]);

  getAllTasks(): Observable<TaskItem[]> {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));
    this.tasks.next(updatedTasks);
  }

  removeTask(index: number) {
    var updatedTask = this.tasks.value.filter((_, i) => i !== index);
    this.tasks.next(updatedTask);
  }
}
