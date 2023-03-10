import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateService } from '../service/update.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
constructor(private unlock:UpdateService){}

unlockForm= new FormGroup({
  confirmPwd: new FormControl('',[Validators.required]),
  email : new FormControl('',[Validators.required,Validators.email]),
  newPwd : new FormControl('',[Validators.required]),
  tempPwd:  new FormControl('',[Validators.required])
})



unlockAccountPost()
{
  this.unlock.unlockPost(this.unlockForm.value).subscribe((res)=>alert(res))
}
}
