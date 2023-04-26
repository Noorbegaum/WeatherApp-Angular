import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../service/weather-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public weatherService: WeatherServiceService,
    public router: Router
  ) {}
  text: any = '';
  cityResults: any = [];
  ngOnInit(): void {}

  handleChange(event: any): void {
    this.weatherService.searchApi(event).subscribe((cityResults: any) => {
      console.log(cityResults);
      this.cityResults = cityResults;
    });
    console.log(event);
  }

  handleCityClick(city: any) {
    console.log(city);
    this.text = city;
    this.weatherService.getWeather(city).subscribe((weatherDetails: any) => {
      localStorage.setItem('weatherDetails', JSON.stringify(weatherDetails));
      this.refresh();
      console.log(weatherDetails);
    });
    this.cityResults = [];
  }

  refresh() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
    // localStorage.clear();
  }
}
