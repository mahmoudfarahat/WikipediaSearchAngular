import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, pluck } from 'rxjs';
interface WikipediaResponse {
  query:{
    search:{
      title:string;
      snippet:string;
      pageid:number;
    }[]
  }
}


// import { pluck } from 'rxjs';
// interface Car{
//   year:number;
//   color:string;
//   running:boolean;
//   make:{
//     name:string;
//     dateCreated : number;
//   }
// }


// const observable = new Observable<Car>((observer)=>{
//   observer.next({
//     year:2000,
//     color:'red',
//     running:true,
//     make:{
//       name:'BMW',
//       dateCreated:1950
//     }
//   })
// }).pipe(
//   pluck('make','dateCreated')
// )

// observable.subscribe(value =>{
//   console.log(value)
// })

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http:HttpClient) { }

  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8&srsearch=space

  search(term: string)
  {
    return  this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php',{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:term,
        origin:'*'
      }
    }).pipe(
        pluck('query','search')
      )
  }

}
