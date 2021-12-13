import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskGuard } from './task.guard';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    canActivate: [TaskGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
