import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskItem } from './task-item.dto';
import { NewTask } from './NewTask.dto';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  newTask: NewTask = new NewTask();

  ngOnInit(): void {
    let strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  tasks = [
    new TaskItem('Visit An'),
    new TaskItem('Call Dad'),
    new TaskItem('Go to the gym'),
    new TaskItem('Wash the dishes'),
    new TaskItem('Shop for the party'),
  ];

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) return;
    if (taskNgForm.valid === false) return;

    this.tasks.push(new TaskItem(this.newTask.title));
    taskNgForm.reset({
      date: this.newTask.date,
    });
  }

  remove(index: number, content: string) {
    let confirmed = confirm(`Gostaria de deletar a tarefa: \n\n ${content}`);
    if (confirmed) this.tasks.splice(index, 1);
  }
}
