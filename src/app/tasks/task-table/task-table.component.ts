import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskItem } from '../task-item.dto';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  @Input() tasks: TaskItem[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  remove(task: TaskItem) {
    console.log('remove', task);
    let confirmed = confirm(`Gostaria de deletar a tarefa: \n\n ${task.title}`);
    if (confirmed) this.taskService.removeTask(task.id);
  }
}
