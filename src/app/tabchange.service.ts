import { Injectable,OnDestroy  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabchangeService {
 
  selectedIndex:number=0; 
  

  constructor() { 
      
  }

  nexttab(){
    console.log("index");
    this.selectedIndex =this. selectedIndex + 1; 
  }

  previoustab(){
      this.selectedIndex = this.selectedIndex - 1;
  }

  resettab(){
    this.selectedIndex = 0;
  } 

}
