import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import {SharedataService} from '../sharedata.service';
 
 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


    Orders : Order[]; 
    orderdetails : Order;
    no_of_orders:number; 

  constructor(private route : Router,private displayservice : SharedataService) { }

  ngOnInit() {
    this.displayservice.getorders().subscribe(Orders =>{
       this.Orders = Orders;
       this.no_of_orders= this.Orders.length;
       this.displayservice.count.next(this. no_of_orders);
    });
  }

  details(id:number){
       this.route.navigate(['/edit',id]);   
    }

    remove(id:number){
      this.displayservice.deleteorder(id).subscribe(() => console.log("successfully deleted")); 
      this.ngOnInit();   
    }

    placeorder(){
      this.route.navigate(['/orderconfirmation']);   
    }
}
