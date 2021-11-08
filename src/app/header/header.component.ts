import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSubscription:Subscription;

  public loggedIn=false;
  public user:User=null;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.userSub.subscribe((user:User)=>{
      if(user!=null){
        this.loggedIn=true;
        this.user=user;
      }else{
        this.loggedIn=false;
        this.user=null;
      }
    })
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  onLoginLogout(){
    if(this.loggedIn==true){
      this.authService.logout()
    }else{
      this.router.navigate(['/auth']);
    }
  }

}
