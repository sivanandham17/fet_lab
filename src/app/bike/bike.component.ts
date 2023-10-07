import { Component } from '@angular/core';
import { RecordsService } from '../service.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent {
  inforeceived1:string[]=[];
  inforeceived2:string[]=[];
  inforeceived3:string[]=[];
  inforeceived4:string[]=[];
  inforeceived5:string[]=[];
  getInfoFromServiceClass1(){
    this.inforeceived1=this.rservice.getinfo1();
  }
  getInfoFromServiceClass2(){
    this.inforeceived2=this.rservice.getinfo2();
  }
  getInfoFromServiceClass3(){
    this.inforeceived3=this.rservice.getinfo3();
  }
  getInfoFromServiceClass4(){
    this.inforeceived4=this.rservice.getinfo4();
  }
  getInfoFromServiceClass5(){
    this.inforeceived5=this.rservice.getinfo5();
  }
  updateInfo(frm:any)
  {
    this.rservice.addInfo(frm.value.location)
  }
  constructor(private rservice:RecordsService){}

}
