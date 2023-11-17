import { Component } from '@angular/core';
import { GarageService } from '../garage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-garage',
  templateUrl: './update-garage.component.html',
  styleUrls: ['./update-garage.component.css']
})
export class UpdateGarageComponent {
  editGarage:FormGroup=new FormGroup({});
    public id:any;
    public garages :any =[];
    constructor(
      private formBuilder:FormBuilder,
      private garageService:GarageService,
      private router:Router,
      private activatedRoute:ActivatedRoute
    ){
      this.editGarage=this.formBuilder.group({
        nomGarage:["",Validators.required],
        descriptions:["",Validators.required],
        lieux:["",Validators.required],

      })

    }

    ngOnInit(): void {
      let idGarage=this.activatedRoute.snapshot.paramMap.get('idGarage');
      console.log(idGarage);

      this.id=idGarage;
      this.garageService.getOneGarage(this.id)
      .subscribe((data)=>{
        console.log(data);

      this.garages=data
      this.fillFormData(data)
      console.log(this.garages);
  console.log(this.garages.nomGarage);

      });

    }

    fillFormData(data:any){
      this.editGarage.get("nomGarage")?.setValue(data.nomGarage)
      this.editGarage.get("descriptions")?.setValue(data.descriptions)
      this.editGarage.get("lieux")?.setValue(data.lieux)

    }
    updateGarage(){
      let garages:any={
        id:this.garages.id,
        nomGarage:this.editGarage.get("nomGarage")?.value,
        descriptions:this.editGarage.get("descriptions")?.value,
        lieux:this.editGarage.get("lieux")?.value,

      }
     this.garageService.updateGarage(this.garages.id,garages).subscribe((data)=>{
    console.log(data);
    this.router.navigateByUrl("garages")
     })
    }
}
