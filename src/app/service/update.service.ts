import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  unlockPost(body:any)
  {
    return this.http.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'})
  }
}
