import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

let routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./feature/auth/auth.module').then(mod => mod.AuthModule)
    },
    {
        path: 'tasks',
        loadChildren: () => import('./feature/tasks/tasks.module').then(mod => mod.TasksModule)
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }