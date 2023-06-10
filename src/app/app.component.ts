import { Component } from '@angular/core';
import { OpenWeatherMapService } from './shared/services/open-weather-map.service';
import { Forecast } from './shared/models/Forecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-weatherapp';
  cidade!: string;

  myWeather: Forecast | undefined;

  constructor(private weatherService: OpenWeatherMapService) {}

  getWeatherData(): void {
    this.weatherService.getWeather(this.cidade).subscribe({
      next: (res) => {
        this.myWeather = new Forecast(res);
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    });
  }
}
