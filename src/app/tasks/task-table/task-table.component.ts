import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  onRemove = new EventEmitter<TaskItem>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  remove(task: TaskItem) {
    this.onRemove.next(task);
  }
}
