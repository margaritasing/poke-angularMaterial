import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
 
  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
  }

  getPokeData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
