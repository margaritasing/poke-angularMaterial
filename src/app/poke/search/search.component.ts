import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  enterSearchValue: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue)
  }

  sendData(event:any){
    console.log(event.target.value)

  }


}
