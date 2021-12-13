import { NgModule } from '@angular/core';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent } from './task/task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskGuard } from 'src/app/feature/tasks/task.guard';
import { AuthService } from 'src/app/services/auth.service';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    SharedModule,
    TasksRoutingModule,
  ],

  providers: [
    TaskGuard
  ]
})
export class TasksModule { }
