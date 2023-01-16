import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HomeComponent } from './home/home.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Beer', component: BeerComponent},
  {path: 'RandomBeer/:id', component: RandomBeerComponent},
  {path: 'NewBeer', component: NewBeerComponent},
  {path: 'detail/:id', component: BeerDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
