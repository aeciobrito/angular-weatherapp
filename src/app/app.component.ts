import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from './shared/services/open-weather-map.service';
import { Forecast } from './shared/models/Forecast';
import { debounceTime, filter } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-weatherapp';
  cidade!: string;
  cidadeInput$ = new Subject<string>();


  myWeather: Forecast | undefined;

  constructor(private weatherService: OpenWeatherMapService) {}

  ngOnInit(): void {
    this.cidadeInput$.pipe(
      debounceTime(1000),
      filter(cidade => cidade.trim() !== '')
    ).subscribe(() => {
      this.getWeatherData();
    });
  }

  getWeatherData(): void {
    this.weatherService.getWeather(this.cidade.trim()).subscribe({
      next: (res) => {
        this.myWeather = new Forecast(res);
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    });
  }
}
