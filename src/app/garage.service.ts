import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
public host:string="http://localhost:8080/api-garage/v0"
// mygarage$=new BehaviorSubject<any>('');
// myName=new BehaviorSubject<string>('');
  constructor(
    private http:HttpClient
  ) { }
  getGarage(){
    return this.http.get(this.host+"/all");
  }
  addGarage(data:any){
    return this.http.post(this.host+"/add",data)
  }

updateGarage(idGarage:number,data:any){
  return this.http.put(this.host+"/garageUpdate/"+idGarage,data)
}

deleteGarage(idGarage:number){
  return this.http.delete(`${this.host}/garageDelete/${idGarage}`)
}
getOneGarage(id:number){
  return this.http.get(this.host+"/garage/"+id);
}
// setGarage(garage:any){
//   return this.mygarage$.next(garage);
// }
// getAllGarage():Observable<any>{
//   return this.mygarage$.asObservable();
// }
// setName(garage:any){
//   return this.myName.next(garage);
// }

// getName():Observable<string>{
//   return this.myName.asObservable();
// }



}
