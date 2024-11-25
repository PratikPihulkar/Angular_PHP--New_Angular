import { Component, OnInit } from '@angular/core';
import { DataStoreServiceService } from '../../Services/data-store-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annual-plan',
  templateUrl: './annual-plan.component.html',
  styleUrl: './annual-plan.component.css'
})
export class AnnualPlanComponent  implements OnInit{

  id: string | null;
  constructor(private dataStore :DataStoreServiceService,private router:Router, )
  {

  }
  

  arr:any[]=["Basic features to get started",
    "Limited storage capacity",
    "Email support included",
    "Free basic integrations",
    "Access to a knowledge base",
    "Ideal for small-scale projects",
    "Easy setup and onboarding",
    "Access to community forums",
    "Regular updates and patches"];

  plans:any

  ngOnInit(): void {
    this.dataStore.getAllPlans().subscribe((res: any) => {
      this.plans = res.data; 
      console.log(this.plans); 
      console.log(this.plans[1].amount);
    });
  
    console.log("jay shri ram"); 
  }

  getYearlyAmount(amount: string): number {
    const parsedAmount = JSON.parse(amount);
    return parsedAmount.yearly;
  }

  selectedPlan(planId: any) {
    console.log(planId);
    this.router.navigate(['/payment/'+planId]);
  }
}
