import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers:[RecordsService]
})
export class ImageComponent {
 inforeceived:string[]=[];
 getInfoFromService()
 {
  this.inforeceived=this.rservice.getinfo();
}
  constructor(private rservice:RecordsService){

  }
 }

