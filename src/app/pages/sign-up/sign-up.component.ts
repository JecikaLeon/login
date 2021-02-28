import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserModel } from '../../models/User.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.user.email='';
    this.user.name='';
    this.user.password='';
    
  }

  onSubmit(form: NgForm){
    //console.log("formulario: ", form)
    //console.log("user :",this.user);
    if(form.invalid){
      return;
    }else{
      console.log("datos");
      this.auth.signUp(this.user).subscribe(res =>{
        alert("Usuario Registrado!");
        this.router.navigateByUrl('/profile');
      },(err)=>{
        console.log(err);
        alert(err.error.error.message);
      })
    }
  }

}
