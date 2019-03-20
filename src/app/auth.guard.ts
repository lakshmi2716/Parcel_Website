
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Authservice } from './authservice.service';
import { Router }      from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: Authservice, private route : Router ){}

  canActivate( next: ActivatedRouteSnapshot,     state: RouterStateSnapshot):  boolean {
        if(this.auth.isloggedin)
            return true;
        else
          this.route.navigate(['signin']);

  }
}
