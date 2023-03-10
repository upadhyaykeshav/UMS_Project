import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetService } from '../service/forget.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

 constructor(private forget:ForgetService){}
 
 forgetForm= new FormGroup({
   emailId : new FormControl('',[Validators.required,Validators.email]),

 })
 forgetPwd()
 {
  this.forget.getPassword(this.forgetForm.value.emailId).subscribe((res)=>alert(res))
 }
}
