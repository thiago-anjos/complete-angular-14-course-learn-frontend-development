import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './NewTask.dto';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  private tasks = new BehaviorSubject<TaskItem[]>([]);

  getAllTasks(): Observable<TaskItem[]> {
    this.httpClient
      .get<TaskItem[]>('http://localhost:3000/tasks')
      //.pipe(tap((x) => console.log(x)))
      //.pipe(map(this.transformJsonItensToTaskClass)) // não precisa passar o parametro porque ele passa o que recebe direto na funcao que vc passa aqui
      //.pipe(tap((x) => console.log(x)))
      .subscribe((t) => {
        console.log(t);
        this.tasks.next(t);
      }); // update the tasks array to all isso quando transformamos alguma coisa, aí sim se torna necessário fazer isso
    return this.tasks;
  }

  // private transformJsonItensToTaskClass(
  //   items: { title: string; id: string }[]
  // ) {
  //   return items.map((item) => new TaskItem(item.title));
  // }

  addTask(newTask: NewTask) {
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));

    this.httpClient
      .post('http://localhost:3000/tasks', newTask)
      .subscribe(() => this.tasks.next(updatedTasks));
    console.log('add', this.tasks.value);
  }

  removeTask(id: string) {
    console.log('remove taks of id', id);
    this.httpClient
      .delete(`http://localhost:3000/tasks/${id}`)
      .subscribe((data) => {
        this.getAllTasks();
      });
    //var updatedTask = this.tasks.value.filter((_, i) => i !== index);
  }
}
