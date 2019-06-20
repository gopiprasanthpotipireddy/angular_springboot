import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component'
import { WelcomeComponent} from './welcome/welcome.component'
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
 { path:'Todos',component:TodoListComponent},
 {path:'',component:WelcomeComponent},
 {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
