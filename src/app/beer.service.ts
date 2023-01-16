import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) { }

  getBeer(id: any) {
    return this.http.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
  }
  private apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/random';

  getRandomBeer(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
