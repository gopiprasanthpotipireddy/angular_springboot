import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../userdata.service'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

welcome: Boolean=false;
users : Object;
  constructor(private userservice:UserdataService) { }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data=>{
      //console.log(data.json())
      this.users=data.json()
      });
      
    }

 getUsers(){
   console.log("home clicked");
   this.welcome=true;
   
   
 }
}
