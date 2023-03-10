import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private sign:HttpClient) { }
  baseurl=`http://15.206.171.20:9090/`

  signInpost(body:any)
  {
    return this.sign.post(`${this.baseurl}login`,body,{responseType:'text'})
  }
}
