import { Component, OnInit , Input  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {TabchangeService} from '../tabchange.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {


  @Input('parentForm')
  public parentForm : FormGroup;
  myControl = new FormControl();
    
  commodityvalues : string [] = ['Car', 'Fridge', 'Bike'];
 


  constructor(private tabchange:TabchangeService) { }

  ngOnInit() {
    console.log(this.parentForm);
  }
 
  change( ){
    this.tabchange.nexttab();
  }

  previous(){
    this.tabchange.previoustab();
  }
 
 
}
