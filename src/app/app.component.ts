import { Component, OnInit } from '@angular/core'; 
import {Authservice} from './authservice.service';
import { Router  } from '@angular/router';
import {SharedataService} from './sharedata.service';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
    private user:string = ' ' ;
    private items : number; 
     
    constructor(private auth : Authservice,private route:Router,private displayservice : SharedataService) {
         
  }

  ngOnInit() {
    this.displayservice.total_items.subscribe(totalItems=> this.items = totalItems);
}
 
    logout(){
        this.auth.signoff();
    }


   
}
