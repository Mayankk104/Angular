import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "../../services/auth.guard";
import { SignupComponent } from "./signup/signup.component";

let routes: Routes = [
    {
        path: 'signin',
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }