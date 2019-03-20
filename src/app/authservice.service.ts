
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authservice{

  constructor() { }

  isloggedin :boolean = false; 
  user:string;
  validateuser(username:string, pwd: string ) : boolean {
    
        if (username==="admin" &&  pwd === "admin") {
              this. isloggedin = true; 
              this.user= username;
              return true; 
        }
        else
          return false;     
       }

       signoff(){
            this.isloggedin = false; 
            this.user ='';

       }
}
