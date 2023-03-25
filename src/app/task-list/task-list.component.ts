import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  date: Date = new Date();

  newTaskTitle: string = '';

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
  }

  tasks = [
    new Task('Visit An'),
    new Task('Call Dad'),
    new Task('Go to the gym'),
    new Task('Wash the dishes'),
    new Task('Shop for the party'),
  ];

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) return;
    if (taskNgForm.valid === false) return;

    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({
      date: this.date,
    });
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
