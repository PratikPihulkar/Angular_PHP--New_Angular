import { Component, Input, OnInit } from '@angular/core';
import { DataStoreServiceService } from '../../Services/data-store-service.service';

@Component({
  selector: 'app-annual-plan',
  templateUrl: './annual-plan.component.html',
  styleUrl: './annual-plan.component.css'
})
export class AnnualPlanComponent  implements OnInit{

  constructor(private dataStore :DataStoreServiceService){

  }
  
  @Input() plansFromParent: any;

  plans:any

  ngOnInit(): void {
    this.dataStore.getAllPlans().subscribe((res: any) => {
      this.plans = res.data; 
      console.log(this.plans); 
    });
  
    console.log("jay shri ram"); 
  }
  play:any[]=["this Plan Acticve for four month","this Plan Acticve for four month","this Plan Acticve for four month","this Plan Acticve for four month"]
}