import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[]=["LEO","1000cr","Lokesh Kanagaraj","2023"]
  info2:string[]=["JAILER","600cr","Nelson Dilip Kumar","2023"]
  info3:string[]=["JAWAN","1500cr","Atlee","2023"]
  info4:string[]=["VIKRAM","400cr","Lokesh Kanagaraj","2022"]
  info5:string[]=["BEAST","300cr","Nelson Dilip Kumar","2022"]
  getinfo1():string[]{
    return this.info1;
  }
  getinfo2():string[]{
    return this.info2;
  }
  getinfo3():string[]{
    return this.info3;
  }
  getinfo4():string[]{
    return this.info4;
  }
  getinfo5():string[]{
    return this.info5;
  }
  addInfo(info:any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info) 
    this.info4.push(info) 
    this.info5.push(info)
  }
}  
