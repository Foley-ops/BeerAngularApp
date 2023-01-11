import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HomeComponent } from './home/home.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import axios from 'axios';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Beer', component: BeerComponent},
  {path: 'RandomBeer', component: RandomBeerComponent},
  {path: 'NewBeer', component: NewBeerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
