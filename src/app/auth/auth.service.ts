import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import {tap} from 'rxjs/operators'
import { User } from './user.model';

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCgE0lL_tL4S-IzM2tZ2jGaT6QJRncssr4

export interface AuthResponse{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:User;
  // public userSub = new Subject<User>();
  public userSub= new BehaviorSubject<User>(null);

  constructor(private http:HttpClient, private router:Router) { }

  private userAuth(response:AuthResponse){
    this.user= new User(
      response.email, 
      response.localId, 
      response.idToken, 
      new Date(new Date().getTime()+ +response.expiresIn*1000) 
      );
      this.userSub.next(this.user);
      localStorage.setItem('user', JSON.stringify(this.user));

  }
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCgE0lL_tL4S-IzM2tZ2jGaT6QJRncssr4

signup(email: string, password: string) {
  return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgE0lL_tL4S-IzM2tZ2jGaT6QJRncssr4',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe( tap((response)=>{
      this.userAuth(response);
    }));
}

login(email:string, password:string){
  return  this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgE0lL_tL4S-IzM2tZ2jGaT6QJRncssr4',
  {
    email:email,
    password:password,
    returnSecureToken:true
  }).pipe( tap((response)=>{
    this.userAuth(response)
  }));
}

savedLogin(){
  const user=JSON.parse(localStorage.getItem('user'));
  if(!user) return ;
  if(new Date(user.expires) < new Date()) return;
  this.user = new User(user.email, user.id, user.token, new Date(user.expires));
  this.userSub.next(this.user);
  this.router.navigate(['/']);
}

logout(){
  this.user=null;
  this.userSub.next(null);
  localStorage.removeItem('user');
  this.router.navigate(['/auth'])
}

}
