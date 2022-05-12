import { Component } from '@angular/core';
import { PokeService } from '../../service/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  pokeList: Array<any> = []

  constructor(private pokeService:PokeService) { 
    pokeService.getList().subscribe((res:any) => {
      this.pokeList = res.results;
    })
  }

 

}
