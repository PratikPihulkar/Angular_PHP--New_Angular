import { AfterViewInit, Component, input } from '@angular/core';
import { DataStoreServiceService } from '../Services/data-store-service.service';

declare var bootstrap: any;


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})

export class PlansComponent{

  
  constructor(private dataStore :DataStoreServiceService){


  }
  plans:any

  parentPlans:any

  ngOnInit(): void {
    this.dataStore.getAllPlans().subscribe((res: any) => {
      // this.plans = res.data; 
      // this.parentPlans=res.data;
      console.log(res.data); 
    });
  
    console.log("jay shri ram"); 
  }
  
  isToggled: boolean = false; toggle() { this.isToggled = !this.isToggled; }
  
}
