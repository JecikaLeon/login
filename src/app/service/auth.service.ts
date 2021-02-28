import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/User.model';
import  decode  from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apikey="AIzaSyBAPdGljdKhmq6V1WXrn0wYZHyAHNxmySQ";
  private userToken: string;


  constructor(private http:HttpClient) {
    //this.getToken();
  }

 login(user: UserModel){
    const userData={
      email:user.name,
      password: user.password,
      //displayName:user.name,
      returnSecureToken: true    
    } 
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apikey}`, userData).pipe(  
      map(res =>{
        console.log(res);
        console.log("RSJX");
        this.saveToken(res['idToken']);
        return res;
      })
    )
  }

  signUp(user: UserModel){
    const userData={
      //...user,
      email:user.email,
      password: user.password,
      displayName:user.name,
      returnSecureToken: true
    } 
    
    //return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apikey}`, userData).pipe(
      return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apikey}`, userData).pipe(  
    map(res =>{
      console.log(res);
      console.log("RSJX");
      this.saveToken(res['idToken']);
      return res;
    })
    )
  }

  logout(){
    localStorage.removeItem('token');
  }

  private getToken(){
    this.userToken=(localStorage.getItem('token'))?localStorage.getItem('token'):null;
  }

  private getTokenExpirationDate():any{
    let token:any =decode(localStorage.getItem('token'));
    console.log("El token:", token.exp);

    if(!token){
      return null;
    }
    let date=new Date(0);
    date.setUTCSeconds(token.exp);
    return date;
  }

  private isTokenExpired(){
    let expDate=this.getTokenExpirationDate();
    return expDate < new Date();
  }

  isLoggedIn():boolean{
    this.getToken();
    return !!this.userToken && !this.isTokenExpired();
  }

  private saveToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', this.userToken);
    let today=new Date();
    today.setSeconds(10);
    //localStorage.getItem('token');
    //localStorage.clear();

  }
}
