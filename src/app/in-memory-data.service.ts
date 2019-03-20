
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from './Order';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [ 
   /*{ id: 11, Suser: 'Lakshmi', Semail : 'nice@xyz.com', Smobile:"998989899" ,
    Ruser: 'Yaso', Remail : 'nice@xyz.com', Rmobile:"998989899" ,
     shipment : { equipment: "Reefer", size: "medium", commodity: "Car", wgh: "89", 
    unit: "LBS", decvalue: "4", currency: "USD", hazmat: false, temp: false },
    lane : { Oaddress : "NY", Ozip : "54433", pickup:"2019-01-08T18:30:00.000Z", window :false , "Daddress": "Ohio"}
},
{ id: 12, Suser: 'Yaso', Semail : 'nice@xyz.com', Smobile:"998989899" ,
Ruser: 'Lakshmi', Remail : 'nice@xyz.com', Rmobile:"998989899" ,
 shipment : { equipment: "Reefer", size: "medium", commodity: "Car", wgh: "89", 
unit: "LBS", decvalue: "4", currency: "USD", hazmat: false, temp: false },
lane : { Oaddress : "NY", Ozip : "54433", pickup:"2019-01-08T18:30:00.000Z", window :false , "Daddress": "Ohio"}
}
*/
];
    console.log(orders);
    return {orders};
    
  }

  genId(orders: Order[]): number {
    return orders.length > 0 ? Math.max(...orders.map(Order => Order.id)) + 1 : 11;
  }
}


