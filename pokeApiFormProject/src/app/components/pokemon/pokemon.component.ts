import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokeDetail } from 'src/Interfaces/poke-detail.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon!: PokeDetail;
  @Output() newPokemonEvent =  new EventEmitter <string>();

  currentPokeImg! :string;
  
  constructor() { }

  ngOnInit(): void {
    this.getPhotoUrl();
  }

  addNewPokeFav(value: string) {
    this.newPokemonEvent.emit(value.toUpperCase());
  }


  getPhotoUrl() {
    let id = this.pokemon.id;
    this.currentPokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return this.currentPokeImg;
  }

}
