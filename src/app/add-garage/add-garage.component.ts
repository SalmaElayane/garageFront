import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GarageService } from '../garage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-garage',
  templateUrl: './add-garage.component.html',
  styleUrls: ['./add-garage.component.css']
})
export class AddGarageComponent implements OnInit {

  ajouteGarage:FormGroup= new FormGroup({});
  gara:string='';
  constructor(
    private formBuilder:FormBuilder,
    private garageService:GarageService,
    private router:Router
  ){
    this.ajouteGarage=this.formBuilder.group({
      nomGarage:["",Validators.required],
      descriptions:["",Validators.required],
      lieux:["",Validators.required]

    })
  }
  ngOnInit(): void {


  //   this.garageService.getName().subscribe(res=>{
  //     console.log("Behaviour name"+res);
  //     this.gara=res

  // })
   // this.garageService.getAllGarage().subscribe(res=>{
  //   console.log("Behaviour"+res);
  }

ajoutGarage(){
let lieux= this.ajouteGarage.get("lieux")?.value;
    let data:any={
      id:null,
      nomGarage:this.ajouteGarage.get("nomGarage")?.value,
      descriptions:this.ajouteGarage.get("descriptions")?.value,
      lieux:this.ajouteGarage.get("lieux")?.value,

    }
    this.garageService.addGarage(data).subscribe((response)=>{
      console.log(response);

  this.router.navigateByUrl("garages")
    })
  }


}
