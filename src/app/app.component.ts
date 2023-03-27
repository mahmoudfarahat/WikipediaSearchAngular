import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

// @Injectable({ providedIn :'root'})
// export class Car {
//   color = 'red'
//   constructor(){
//     console.log('ssssssssssssssssss')
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
pages = [];

  constructor(private wikipedia:WikipediaService  ){}

  onTerm(term:string){
 this.wikipedia.search(term).subscribe((response:any)=>{
  this.pages = response.query.search
  console.log(this.pages)
 })


  }



}
