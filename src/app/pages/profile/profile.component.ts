import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router, private crud:CrudService) { }

  ngOnInit() {
    this.crud.getData().subscribe(res =>{
      console.log("data",res);
    })
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
