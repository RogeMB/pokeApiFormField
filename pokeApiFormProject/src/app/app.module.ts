import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeFormComponent } from './components/poke-form/poke-form.component';
import { ImportsMaterialModule } from 'src/imports-material/imports-material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDialogComponent } from './components/poke-form/pokemon-dialog/pokemon-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeFormComponent,
    PageNotFoundComponent,
    PokemonDialogComponent
  ],
  imports: [
    ImportsMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
