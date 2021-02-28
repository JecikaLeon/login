import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserModel } from '../../models/User.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user.name="",
    this.user.password=""
  }

  sendData(form: NgForm){
    console.log("formulario: ", form)
    console.log("name :",this.user.name);
    console.log("password :",this.user.password);
    if(form.invalid){
      return;
    }else{
      console.log("datos");
      this.auth.login(this.user).subscribe(res =>{
        this.router.navigateByUrl('/profile');
      },(err)=>{
        console.log(err);
        alert(err.error.error.message);
      })
    }
  }

}
