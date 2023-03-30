import { Component, Injectable, OnInit } from '@angular/core';
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
pages: {}[] = []     ;

  constructor(private wikipedia:WikipediaService  ){

  }

  ngOnInit(): void {
  console.log(this.pages.length)

  }

  onTerm(term:string){
 this.wikipedia.search(term).subscribe(pages=>{
  this.pages = pages
  console.log(this.pages)
 })


  }



}
