import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Forecast } from '../shared/models/Forecast';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnChanges {
  @Input() weatherData: Forecast | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherData'] && changes['weatherData'].currentValue) {
      // Executar ações adicionais com os dados do clima
      console.log('Dados do clima atualizados:', this.weatherData);
    }
  }
}
