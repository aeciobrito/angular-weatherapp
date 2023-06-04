import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  constructor(private http: HttpClient) { }

  getWeather() {   
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Jundiai&appid=2f8796eefe67558dc205b09dd336d022&units=metric');
  }
}
