import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs'
import { AuthService } from '../Services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {

    loginstatus:boolean=false;
    isUserLogged:Subscription;

    constructor(private authuser:AuthService ,public router:Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        boolean | Observable <boolean>  | Promise <boolean> {
            this.loginstatus=this.authuser.isUserAuthenticated()

            //console.log(userlog);

            if(!this.loginstatus){
                this.router.navigate(['/']);
            }
            return true;

        }

}