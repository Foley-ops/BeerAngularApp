import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent implements OnInit{
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  form: any;

  onSubmit(form: { value: { name: any; tagline: any; description: any; first_brewed: any; brewers_tips: any; attenuation_level: any; contributed_by: any; }; }) {
    const beer = {
        name: form.value.name,
        tagline: form.value.tagline,
        description: form.value.description,
        first_brewed: form.value.first_brewed,
        brewers_tips: form.value.brewers_tips,
        attenuation_level: form.value.attenuation_level,
        contributed_by: form.value.contributed_by
    };

    this.http.post<any>('https://ih-beers-api2.herokuapp.com/beers/new', beer).subscribe(data => {
        console.log(data);
    });
}
}
