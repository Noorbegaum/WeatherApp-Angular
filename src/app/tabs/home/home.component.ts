import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/service/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public weatherService: WeatherServiceService) {}

  temperature: any = null;
  isCel = 'active';
  isFar = 'no-active';
  weatherDetails: any = [];
  favouriteList: any;
  favCityArray: any = [];

  ngOnInit(): void {
    let data: any = localStorage.getItem('weatherDetails');
    this.weatherDetails = JSON.parse(data);
    this.temperature = (
      (this.weatherDetails['main'].temp - 32) *
      0.5556
    ).toFixed(0);
    // localStorage.clear();
  }

  handleDoubleClick() {
    this.temperature = this.temperature;
  }
  toggletemp(temp: string) {
    console.log(this.temperature);
    if (temp == 'cel') {
      this.temperature = ((this.temperature - 32) * 0.5556).toFixed(0);
      this.isCel = 'active';
      this.isFar = 'no-active';
    }
    if (temp == 'far') {
      this.temperature = (this.temperature * 1.8 + 32).toFixed(0);
      this.isFar = 'active';
      this.isCel = 'no-active';
    }
  }
  handleFavorite(favourite: any) {
    if (localStorage.getItem('favouriteList')) {
      this.favouriteList = localStorage.getItem('favouriteList');
      let data = JSON.parse(this.favouriteList);
      this.favCityArray = [favourite, ...data];
      console.log(this.favCityArray);
      
    } else {
      this.favCityArray = [favourite];
    }
    localStorage.setItem('favouriteList', JSON.stringify(this.favCityArray));
  }
}
