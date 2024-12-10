import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  },

  {
    path: "register-user",
    component: RegisterUserComponent
  },

  {
    path: "error404",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
