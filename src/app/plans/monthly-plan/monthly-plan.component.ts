import { Component, Input,  } from '@angular/core';
import { DataStoreServiceService } from '../../Services/data-store-service.service';

@Component({
  selector: 'app-monthly-plan',
  templateUrl: './monthly-plan.component.html',
  styleUrl: './monthly-plan.component.css'
})
export class MonthlyPlanComponent {

  constructor(private dataStore :DataStoreServiceService){

  }

  @Input() plansFromParent: any;

  plans:any

  ngOnInit(): void {
 
    console.log("jay shri ram",this.plansFromParent); 
    this.plans=this.plansFromParent

}
  }
  
