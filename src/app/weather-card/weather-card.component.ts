import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  temperature = "50 c";
  fellsLike = "55 c";
  pressure = "500 c";
  humidity = "20% c";
}
