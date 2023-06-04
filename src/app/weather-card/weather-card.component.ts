import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../shared/services/open-weather-map.service';
import { Forecast } from '../shared/models/Forecast';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  myWeather: Forecast | undefined;

  constructor(private weatherService: OpenWeatherMapService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (res) => {
        this.myWeather = new Forecast(res); // Instantiate the Root class
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    });
  }
}
