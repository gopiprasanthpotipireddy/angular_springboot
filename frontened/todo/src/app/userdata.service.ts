import { Injectable } from '@angular/core';
import {Http} from '@angular/http'


@Injectable({
  providedIn: 'root'
})
export class UserdataService {
users : Object;
  constructor(private http:Http) { }
  
  getUsers(){
    return this.http.get('https://reqres.in/api/users')

    
    
  }
}
