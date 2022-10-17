import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokeDetail } from 'src/Interfaces/poke-detail.interface';
import { Pokemon, PokeResponse } from 'src/Interfaces/poke.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<PokeResponse>{
    return this.http.get<PokeResponse>(`${environment.API_BASE_URL}/pokemon?limit=50`)
  }

  getPokemonImg(pokemon: Pokemon): Observable<PokeDetail>{
    let id = pokemon.url.split('/').reverse()[1]
    return this.http.get<PokeDetail>(`${environment.API_BASE_URL}/pokemon/${id}`);
  }

  getPokemonUrl(pokemon: Pokemon): Observable<PokeDetail>{
    return this.http.get<PokeDetail>(pokemon.url);
  }

}
