import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  task: string = '';
  constructor(private _tasks: TaskService) { }

  ngOnInit(): void {
    this._tasks.getTasks()?.subscribe(tasks => {
      this.tasks = tasks;
    })
  }

  addTask(task: NgModel) {
    this._tasks.addTask(task.value).subscribe(t => {
      this.tasks.push(t);
      task.reset()
    }
    )
  }

  removeTask(_id: string, i: number) {
    this._tasks.removeTask(_id).subscribe(a => {
      this.tasks.splice(i, 1);
    })
  }
}
