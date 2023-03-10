import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http:HttpClient) { }

  getPassword(mail:any)
  {
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${mail}`,{responseType:'text'})
  }
}
