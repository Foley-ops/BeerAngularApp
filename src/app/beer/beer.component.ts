import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({ selector: 'app-beer', templateUrl: './beer.component.html', styleUrls: ['beer.component.css'] })


export class BeerComponent {
  searchQuery: string = '';
  beers: any;
  sortedBeers!: any[];
  allBeers: any;

  constructor(private http: HttpClient) {
    this.http.get('https://ih-beers-api2.herokuapp.com/beers').subscribe(data => {
      this.beers = data;
      this.sortedBeers = this.beers.sort((a: { name: number; }, b: { name: number; }) => (a.name > b.name) ? 1 : -1);

      console.log(this.beers);
    });
    
  }
  search() {
    this.sortedBeers = this.allBeers.filter((beer: { name: string; }) => beer.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}