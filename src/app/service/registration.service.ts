import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private register:HttpClient) { }
  baseurl=`http://15.206.171.20:9090/`

  postData(body:any)
  {
    return this.register.post(`${this.baseurl}saveUser`,body,{responseType:'text'})
  }
  getCountryData()
  {
    return this.register.get(`${this.baseurl}countries`)
  }
  getState(countryId:number)
  {
    return this.register.get(`${this.baseurl}states/${countryId}`)
  }
  getCity(stateId:number)
  {
    return this.register.get(`${this.baseurl}cities/${stateId}`)
  }
  getEmail(email:any)
  {
    return this.register.get(`${this.baseurl}emailcheck/${email}`,{responseType:'text'})
  }
}
