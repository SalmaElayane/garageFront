import { Component, OnInit } from '@angular/core';
import { GarageService } from '../garage.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gett-all-garage',
  templateUrl: './gett-all-garage.component.html',
  styleUrls: ['./gett-all-garage.component.css']
})
export class GettAllGarageComponent implements OnInit {

  constructor(private garageService:GarageService,
              private router:Router
    ){}
    yourGarage:string='';
  public garages :any =[];
  public allGarages :any =[];
    ngOnInit(): void {
      this.getallgarageComponent();
  // this.sendName(this.garages);
  this.garages=this.allGarages;
  console.log(this.allGarages);

  }
  // sendName(form:NgForm){
  //   this.garageService.setName(this.yourGarage);
  //   console.log("nom"+this.yourGarage);

  // }
  // sendGarage(garages:any[]){
  //   this.garageService.setGarage(this.garages);
  //   console.log("all Gara"+ this.garages);

  // }
  getallgarageComponent(){
    this.garageService.
    getGarage()
    .subscribe((data: any)=>{
      console.log(data);

      this.garages=data;

      // had garages howa li 3amer
    })
    }
    deleteGarage(idGarage:any){
      this.garageService.deleteGarage(idGarage)
      .subscribe((data: any)=>{
        console.log(idGarage);

      this.getallgarageComponent();
      })
    }
  gettallgarageComponent() {
    throw new Error('Method not implemented.');
  }
     saveGarage(){
      this.router.navigate(['/ajoute-garage']);

    }
    updateGarage(id:number){
      this.router.navigate(['/update-garages',id]);

    }


}
