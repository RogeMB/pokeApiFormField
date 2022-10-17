// Generated by https://quicktype.io

import { PokeDetail } from "./poke-detail.interface";

export interface Pokemon {
  name: string;
  url:  string;
}

export interface PokeResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  Pokemon[];
}

export interface DialogData {
  pokemonInfo : PokeDetail;
  color: string;
}