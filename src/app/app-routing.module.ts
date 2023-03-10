import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [
  {
    path:'signIn', component: SignInComponent
  },
  {
    path:'unlock', component: UnlockAccountComponent
  },
  {
    path:'forgot', component: ForgotPasswordComponent
  },
  {
    path:'register', component: RegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
