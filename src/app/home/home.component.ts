import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerService } from '../beer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  beer: any;
  elementRef: any;

  constructor(private beerService: BeerService) { }


  ngOnInit() {
    this.beerService.getRandomBeer().subscribe(data => {
      this.beer = [data];
      console.log(this.beer);
    });

    
}

trackByFn(index: number, item: any): any {
    return item.key;
}
}