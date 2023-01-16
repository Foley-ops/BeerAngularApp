import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({ selector: 'app-beer', templateUrl: './beer.component.html', styleUrls: ['beer.component.css'] })


export class BeerComponent {


  beers: any;

    constructor (private http: HttpClient) {
      this.http.get('https://ih-beers-api2.herokuapp.com/beers').subscribe(data => {
        this.beers = data;
      });

    }}