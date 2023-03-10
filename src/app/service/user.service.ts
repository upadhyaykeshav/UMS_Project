import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

   usersignIn(body:any)
  {
    return this.http.post(`http://15.206.171.20:9090/login`,body,{responseType:'text'})
  }
}
