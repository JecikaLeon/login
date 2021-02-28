import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: SignUpComponent},
  {path: "profile", component: ProfileComponent, canActivate:[AuthGuard]},
  {path: "**", redirectTo: "register"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
