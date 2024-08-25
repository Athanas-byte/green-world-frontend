import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login-in",
    pathMatch: "full",
  },

  {path: "login-in", 
    component: LoginInComponent},

  {path: "forgot-password",
    component: ForgotPasswordComponent
  },

  {path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
