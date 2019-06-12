import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component'
import { WelcomeComponent} from './welcome/welcome.component'
const routes: Routes = [
 { path:'Todos',component:TodoListComponent},
 {path:'',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
