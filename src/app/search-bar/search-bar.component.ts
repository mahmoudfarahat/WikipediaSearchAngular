import { Component, OnInit ,  EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  // getValue(event: Event): string {
  //   return (event.target as HTMLInputElement).value;
  // }

  onFormSubmit(event:Event){

    this.submitted.emit(this.term)
    
    event.preventDefault();
    console.log(this.term)
  }


}
