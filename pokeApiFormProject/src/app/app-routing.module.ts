import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokeFormComponent } from './components/poke-form/poke-form.component';

const routes: Routes = [
  {path: 'pokeForm', component: PokeFormComponent},

  {path: '', redirectTo: '/pokeForm', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
