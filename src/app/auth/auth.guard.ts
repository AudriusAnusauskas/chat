import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot, router:RouterStateSnapshot):boolean|UrlTree{
        if(this.authService.user!=undefined) return true;
        return this.router.createUrlTree(['/auth']);
    }
}