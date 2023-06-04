import { Clouds } from "./Clouds";
import { Coord } from "./Coord";
import { Main } from "./Main";
import { Sys } from "./Sys";
import { Weather } from "./Weather";
import { Wind } from "./Wind";

export class Forecast {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  
    constructor(data: any) {
      this.coord = new Coord(data.coord);
      this.weather = data.weather.map((item: any) => new Weather(item));
      this.base = data.base;
      this.main = new Main(data.main);
      this.visibility = data.visibility;
      this.wind = new Wind(data.wind);
      this.clouds = new Clouds(data.clouds);
      this.dt = data.dt;
      this.sys = new Sys(data.sys);
      this.timezone = data.timezone;
      this.id = data.id;
      this.name = data.name;
      this.cod = data.cod;
    }
  }