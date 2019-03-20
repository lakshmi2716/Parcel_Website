
import { Component, OnInit , Input } from '@angular/core';
import { FormGroup,FormArray,FormBuilder, FormControl} from '@angular/forms';
import {TabchangeService} from '../tabchange.service'

@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.scss'],
  
})
export class LaneComponent implements OnInit {

  @Input('parentForm')
  public parentForm : FormGroup;

  constructor( private fb: FormBuilder , private tabservice : TabchangeService) {}

  ngOnInit() {
  }
 

 /*public add(){
   console.log("inside add lane component");
    this.obj.addstop();
  }*/

  addstop() {
    
    //this.stop_add.push(this.fb.group({stop_point:''}));
     this.stop.push(this.fb.control(''));
  }

  get stop()  {
    
    return this.parentForm.get('stop') as FormArray; 
  }

  populate_zip(city : string){
    
   if(city =="FLORIDA") {
       console.log('inside FL',city);
        this.parentForm.patchValue({Ozip: '328790'}) ;
    }
    else if (city ==  "NEW YORK") {
      console.log('inside NY',city);
       this.parentForm.patchValue({Ozip: '10001'});
    }
    else if (city == "OHIO") {
    this.parentForm.patchValue({Ozip: '44101'});
    }  
    else{
      this.parentForm.patchValue({Ozip: ' '});
    }
   
  }

  populate_city(code : string){
      
    if(code =="328790") {
      console.log(code);
       this.parentForm.patchValue({Oaddress: 'Florida'}) ;
   }
   else if (code ==  "10001") {
    console.log(code);
      this.parentForm.patchValue({Oaddress: 'New York'});
   }
   else if (code == "44101") {
    console.log(code);
   this.parentForm.patchValue({Oaddress: 'Ohio'});
   }
   else{
    console.log(code);
    this.parentForm.patchValue({Oaddress: ' '});
   }  
  
    
  }
  
  previous(){
    this.tabservice.previoustab();
  }

}
