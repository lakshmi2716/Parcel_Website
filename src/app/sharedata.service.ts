import { Injectable } from '@angular/core';
import { Observable, of,BehaviorSubject } from 'rxjs';
import { Order } from './order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  //private Url = 'api/orders';

  //default_value :number = 1; 
  public count = new BehaviorSubject<number>(0);
  total_items = this.count.asObservable();

  private Url = 'api/orders';
  test: Order[];

  constructor(private http: HttpClient) { }

 
  getorders(): Observable<Order[]> {

    console.log("Orders list",this.http.get<Order[]>(this.Url));
    return this.http.get<Order[]>(this.Url);

  }

  getorderdetails(id: number): Observable<Order> {
    const detailurl = `${this.Url}/${id}`;
    return this.http.get<Order>(detailurl);
  }

  addorder(neworder: Order): Observable<Order> {
    return this.http.post<Order>(this.Url, neworder, httpOptions).pipe();
  }

  updateorder(order: Order): Observable<void> {
    
    console.log("inside updateorder",order.id); 
    
    return this.http.put<void>(`${this.Url}/${order.id}`, order, httpOptions).pipe();
  }


  deleteorder(id:number):Observable<void>{
      return this.http.delete<void>(`${this.Url}/${id}`,httpOptions);
  }


 
}
