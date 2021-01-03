import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  serverUrl:string="https://jsonplaceholder.typicode.com/posts";

  constructor( private http:HttpClient) { }
  
  getApi():Observable<UserInterface[]>{

    return  this.http.get<UserInterface[]>(this.serverUrl);
  }
}
