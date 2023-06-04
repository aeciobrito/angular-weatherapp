import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../open-weather-map.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  temperature = "50 c";
  fellsLike = "55 c";
  pressure = "500 c";
  humidity = "20% c";

  constructor(private weatherService: OpenWeatherMapService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }
}
