import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../open-weather-map.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  temp: number = 0;
  feels_like: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  pressure: number = 0;
  humidity: number = 0;

  icon: string = "";

  myWeather: any;

  constructor(private weatherService: OpenWeatherMapService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (res) => {
        this.myWeather = res;
        this.temp = this.myWeather.main.temp;
        this.feels_like = this.myWeather.main.feels_like;
        this.temp_min = this.myWeather.main.temp_min;
        this.temp_max = this.myWeather.main.temp_max;
        this.pressure = this.myWeather.main.pressure;
        this.humidity = this.myWeather.main.humidity;
        this.icon = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }
}
