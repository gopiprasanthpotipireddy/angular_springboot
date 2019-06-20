import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { TodoService } from './todo-list/todo.service';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { NavComponent } from './nav/nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TodoListComponent,
    FooterComponent,
    WidgetsComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,    
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
