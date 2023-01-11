import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-beer', templateUrl: './beer.component.html' })
export class BeerComponent implements OnInit {
    totalAngularPackages: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {      

        this.http.get<any>('https://ih-beers-api2.herokuapp.com/beers/').subscribe(
          data => {
            this.totalAngularPackages = data.total;
        })
    }
}

interface SearchResults {
  results: Array<object>;
}