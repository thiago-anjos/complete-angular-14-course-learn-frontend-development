import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './NewTask.dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  private tasks = new BehaviorSubject<TaskItem[]>([]);

  getAllTasks(): Observable<TaskItem[]> {
    return this.httpClient
      .get<TaskItem[]>('http://localhost:3001/tasks')
      .pipe(tap((x) => console.log(x)))
      .pipe(map(this.transformJsonItensToTaskClass))
      .pipe(tap((x) => console.log(x)));
  }

  private transformJsonItensToTaskClass(items: { title: string }[]) {
    return items.map((item) => new TaskItem(item.title));
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
