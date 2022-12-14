import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/Interfaces/poke.interface';
import { PokeService } from 'src/app/services/poke.service';
import { MatDialog } from '@angular/material/dialog';
import { PokeDetail } from 'src/Interfaces/poke-detail.interface';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-poke-form',
  templateUrl: './poke-form.component.html',
  styleUrls: ['./poke-form.component.css']
})
export class PokeFormComponent implements OnInit {

  currentPokeImg!: string;
 
  pokemonList: Pokemon[] = [];
  pokemonSelected!: PokeDetail;
  chekeo: boolean = false;
  pokemonFav: string [] = [];

  constructor(private pokemonService: PokeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(response => {
      this.pokemonList = response.results;
    });

  }

  getPhotoUrl(pokemon: Pokemon) {
    let id = pokemon.url.split("/").reverse()[1];
    this.currentPokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return this.currentPokeImg;
  }

  getPokemonInfo(pokemon: Pokemon) {
    this.pokemonService.getPokemonUrl(pokemon).subscribe(response => {
      this.pokemonSelected = response;
      this.chekeo = true;
      this.dialog.open(PokemonDialogComponent, {
        width: '500px',
        height: 'auto',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data: {
          pokemonInfo: this.pokemonSelected,
          color: '#FF0000'
        },
      });
    });
  }

  addPokemonFav (newPokeFav: string) {
    if(!this.pokemonFav.includes(newPokeFav)) {
        this.pokemonFav.push(newPokeFav);
    }
  }
}
