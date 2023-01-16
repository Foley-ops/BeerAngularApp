import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})

export class BeerDetailComponent implements OnInit{
  beer: any;
  constructor(private route: ActivatedRoute, private beerService: BeerService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.beerService.getBeer(id).subscribe(beer => {
      this.beer = beer;
    });
  }
    }
