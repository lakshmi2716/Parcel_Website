import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Order } from '../order';
import {SharedataService} from '../sharedata.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    @Input() search : string; 
  
    orderdetails : Order; 

    detailvisible :boolean = false; 
  
    Orders : Order[] ;  
    //search : string;
     current_open:number ; 
    
    constructor(private displayservice : SharedataService,private route : Router ) { }
  
    ngOnInit() {
      this.getorders();
      
    }
  
     getorders() : void {
      this.displayservice.getorders()
       .subscribe(Order_received =>  {
         this.Orders = Order_received;
         console.log("ngoniniti",this.Orders.length);  
       });
        
     }

     details(id:number){
            
                  this.detailvisible = !this.detailvisible;          
                  this.displayservice.getorderdetails(id).subscribe(data => this.orderdetails = data);
               
     }

    
  }