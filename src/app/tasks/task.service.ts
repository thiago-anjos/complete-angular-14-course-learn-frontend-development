import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './NewTask.dto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  tasks = [
    new TaskItem('Visit An'),
    new TaskItem('Call Dad'),
    new TaskItem('Go to the gym'),
    new TaskItem('Wash the dishes'),
    new TaskItem('Shop for the party'),
  ];

  // protect the returing tasks array
  getAllTasks(): ReadonlyArray<TaskItem> {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    // return a new array
    // keep the imutability of original array
    this.tasks = this.tasks.concat(new TaskItem(newTask.title));
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
