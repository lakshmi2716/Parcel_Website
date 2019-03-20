import { Component, OnInit } from '@angular/core';
import {Authservice} from '../authservice.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public username : string;
  public password : string; 

  authenticated :boolean = false; 
  submitted:boolean = false; 

  constructor(private auth : Authservice, private route:Router) { }

  ngOnInit() {
  }

  onsubmit(user :string ,pass:string){

      this.authenticated = this.auth.validateuser(user,pass) ;
    this.submitted = true; 
      if(this.authenticated )
          this.route.navigate(['home'])
      else 
      this.authenticated = false; 
           console.log("fail");

}

}
