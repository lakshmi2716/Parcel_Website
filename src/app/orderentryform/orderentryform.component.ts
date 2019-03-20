
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Order } from '../order'
import { SharedataService } from '../sharedata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TabchangeService } from '../tabchange.service';



@Component({
  selector: 'app-orderentryform',
  templateUrl: './orderentryform.component.html',
  styleUrls: ['./orderentryform.component.scss']
})
export class OrderentryformComponent implements OnInit {
  Router: any;

  OrdersForm: FormGroup;

  orders: Order[] = [];
  orderdetails: Order;
  enablesave: boolean = false;
  increment: number = 0;
  hazmatchecked: boolean;
  tempchecked: boolean;



  constructor(private fb: FormBuilder, private addservice: SharedataService, private router: Router,
    private navrouter: ActivatedRoute, private tabservice: TabchangeService) {
    this.OrdersForm = this.fb.group({
      "Suser": [null, Validators.required],
      "Semail": [null, [Validators.required, Validators.email]],
      "Smobile": [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      "Ruser": [null, Validators.required],
      "Remail": [null, [Validators.required, Validators.email]],
      "Rmobile": [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      "shipment": this.fb.group({
        "equipment": [null, Validators.required],
        "size": [null, Validators.required],
        "commodity": [null],
        "wgh": [null, Validators.required],
        "unit": [null, [Validators.required]],
        "decvalue": [null, [Validators.required, Validators.pattern('^[0-9]{1,10}$')]],
        "currency": [null],
        "hazmat": [''],
        "temp": ['']
      }),
      "lane": this.fb.group({
        "Oaddress": [null],
        "Ozip": [null],
        "pickup": [null],
        "window": [false],
        "Daddress": [null],
        // "stop" :this.fb.array([this.fb.group({stop_point:''})]) 
        "stop": this.fb.array([this.fb.control('')])
      })



    });
  }

  ngOnInit() {
    this.tabservice.resettab();

    console.log(this.OrdersForm.get('shipment'));
    this.navrouter.paramMap.subscribe(orderid => {
      const newid = +orderid.get('id');
      if (newid) {
        this.addservice.getorderdetails(newid).subscribe(data => {
          this.orderdetails = data;
          this.enablesave = true;
          console.log("before edit", this.orderdetails);
          this.editorder(this.orderdetails);

        });
      }
    });
  }

   


  
  editorder(orderdetail: Order) {

    if (orderdetail.shipment.hazmat == "Required")
      this.hazmatchecked = true;
    else
      this.hazmatchecked = false;


    if(orderdetail.shipment.temp== "Required")
    this.tempchecked = true;
 else
  this.tempchecked = false;    

    this.OrdersForm.patchValue({
      "Suser": orderdetail.Suser,
      "Semail": orderdetail.Semail,
      "Smobile": orderdetail.Smobile,
      "Ruser": orderdetail.Ruser,
      "Remail": orderdetail.Remail,
      "Rmobile": orderdetail.Rmobile,
      "shipment": {
        "equipment": orderdetail.shipment.equipment,
        "size": orderdetail.shipment.size,
        "commodity": orderdetail.shipment.commodity,
        "wgh": orderdetail.shipment.wgh,
        "unit": orderdetail.shipment.unit,
        "decvalue": orderdetail.shipment.decvalue,
        "currency": orderdetail.shipment.currency,
        "hazmat": this.hazmatchecked,
        "temp": this.tempchecked,
      },
      "lane": {
        "Oaddress": orderdetail.lane.Oaddress,
        "Ozip": orderdetail.lane.Ozip,
        "pickup": orderdetail.lane.pickup,
        "window": orderdetail.lane.window,
        "Daddress": orderdetail.lane.daddress,
      }
    });
  }


  add(name: Order): void {

    //name = this.OrdersForm.value.name;  

    name = this.OrdersForm.value;
    console.log("inside add", name);

    if (name.shipment.hazmat)
      name.shipment.hazmat = "Required";
    else
      name.shipment.hazmat = "Not Required";

      if (name.shipment.temp)
      name.shipment.temp = "Required";
    else
      name.shipment.temp = "Not Required";

    if (!name) {
      alert("inside if");
      return;
    }
    console.log(this.orders);

    this.addservice.addorder(name)
      .subscribe(neworder => {
        this.orders.push(neworder);
        console.log("increment", this.increment);
        this.addservice.total_items.subscribe(totalItems => this.increment = totalItems + 1);
        this.addservice.count.next(this.increment);
      });

    this.router.navigate(['/dashboard']);
  }

  change() {

    this.tabservice.nexttab();
  }

  save(formdata: Order) {

    formdata.id = this.orderdetails.id;
    console.log("after edit", formdata);
    if (formdata.shipment.hazmat)
      formdata.shipment.hazmat = "Required";
    else
      formdata.shipment.hazmat = "Not Required";

      if (formdata.shipment.temp)
      formdata.shipment.temp = "Required";
    else
      formdata.shipment.temp = "Not Required";

    this.addservice.updateorder(formdata).subscribe(() => console.log("succces"));

    this.router.navigate(['/dashboard']);

  }
  /*  addstop() {
      console.log("inside addstop"+this.stop_add);
      this.stop_add.push(this.fb.control('') );
       
    }
  
    get stop_add()  {
      console.log("inside get stop"+this.OrdersForm.controls);
      return this.OrdersForm.get('stop') as FormArray; 
   
  
      addstop(){
      const arraystop = this.OrdersForm.get('stop') as FormArray;
      arraystop.push(this.fb.control(''));  
    } }*/




}
