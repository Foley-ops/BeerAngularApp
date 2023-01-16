import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BeerComponent } from './beer/beer.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { HttpClientModule} from '@angular/common/http';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { KeyValuePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeerComponent,
    RandomBeerComponent,
    NewBeerComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
