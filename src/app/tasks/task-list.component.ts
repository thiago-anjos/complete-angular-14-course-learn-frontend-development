import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewTask } from './NewTask.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  newTask: NewTask = new NewTask();
  tasks = this.taskService.getAllTasks();

  ngOnInit(): void {
    let strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) return;
    if (taskNgForm.valid === false) return;

    this.taskService.addTask(this.newTask);
    taskNgForm.reset({
      date: this.newTask.date,
    });
  }

  remove(index: number, content: string) {
    let confirmed = confirm(`Gostaria de deletar a tarefa: \n\n ${content}`);
    if (confirmed) this.taskService.removeTask(index);
  }
}
