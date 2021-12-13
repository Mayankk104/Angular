import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../services/auth.interceptor';
import { AuthService } from 'src/app/services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatchPasswordDirective } from 'src/app/directives/validators/match-password.directive';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
  constructor() { }
}
