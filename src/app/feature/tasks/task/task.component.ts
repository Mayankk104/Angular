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
      tasks.forEach(task => {
        task.canUpdate = false;
      })
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

  editTask(_id: string) {
    let { description } = this.tasks.find(task => task._id === _id);
    this._tasks.updateTask(_id, description).subscribe(_task => {
      let localTask = this.tasks.find(task => task._id === _id);
      localTask.canUpdate = false;
    },
    )
  }

  displayUpdateBtn(_id: string) {
    let task = this.tasks.find(task => task._id === _id);
    task.canUpdate = true;
  }
}
