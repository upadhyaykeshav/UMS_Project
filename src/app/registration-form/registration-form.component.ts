import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  countryOption:any
  stateOption:any
  cityOption:any 
constructor(private reg:RegistrationService){this.registerPost()}


registerForm=new FormGroup({
  cityId :new FormControl('',[Validators.required]),
  countryId :new FormControl('',[Validators.required]),
  dob :new FormControl('',[Validators.required]),
  fname :new FormControl('',[Validators.required]),
  gender :new FormControl('',[Validators.required]),
  lname :new FormControl('',[Validators.required]),
  phno:new FormControl('',[Validators.required]),
  stateId :new FormControl('',[Validators.required]),
  email :new FormControl('',[Validators.required,Validators.email])
})

registerPost()
{
  this.reg.postData(this.registerForm.value).subscribe((res)=>alert(res))
}
getCountry()
{
  this.reg.getCountryData().subscribe((res)=>this.countryOption=res)
}
getStateData(countryId:number)
{
  this.reg.getState(countryId).subscribe((res)=>this.stateOption=res)
}
getCityData(stateId:number)
{
  this.reg.getCity(stateId).subscribe((res)=>this.cityOption=res)
}
ngOnInit():void{
  this.getCountry();
}

emailhere:any
getEmail(email:any)
{
  this.reg.getEmail(email).subscribe((res)=>this.emailhere=res)
}


restdata(x:FormGroup)
{
  x.reset()
}
}
