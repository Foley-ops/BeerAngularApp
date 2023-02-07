import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HomeComponent } from './home/home.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Beer Home Page'},
  {path: 'Beer', component: BeerComponent, title: 'Our Beer List'},
  {path: 'RandomBeer/:id', component: RandomBeerComponent, title: 'Our Detailed Beer Card'},
  {path: 'NewBeer', component: NewBeerComponent, title: 'Add A New Beer To Our List'},
  {path: 'detail/:id', component: BeerDetailComponent, title: 'Our Detailed Beer Card' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
