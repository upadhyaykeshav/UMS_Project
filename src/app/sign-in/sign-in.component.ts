import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private login:UserService){ this.userpost()}
  

  formData = new FormGroup({
    'email': new FormControl('',[Validators.required,Validators.email]),
    'pwd': new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  
  userpost()
  {
    this.login.usersignIn(this.formData.value).subscribe((res:any)=>alert(res))
  }



}
