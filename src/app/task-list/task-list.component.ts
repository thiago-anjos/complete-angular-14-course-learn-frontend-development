import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tasks = [
    new Task('Visit An'),
    new Task('Call Dad'),
    new Task('Go to the gym'),
    new Task('Wash the dishes'),
    new Task('Shop for the party'),
  ];

  add(value: string) {
    this.tasks.push(new Task(value));
  }

  remove(index: number, content: string) {
    let confirmed = confirm(`Gostaria de deletar a tarefa: \n\n ${content}`);
    if (confirmed) this.tasks.splice(index, 1);
  }
}

class Task {
  constructor(public title: string) {}

  toggleTaskComplete() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
