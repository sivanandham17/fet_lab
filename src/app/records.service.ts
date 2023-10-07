import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
 info:string[]=["siva","53","siva@gmail.com"]
 getinfo():string[]
 {
  return this.info;
 }
  constructor() { }
}
