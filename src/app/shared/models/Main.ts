
export class Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;

    constructor(data: any) {
        this.temp = data.temp;
        this.feels_like = data.feels_like;
        this.temp_min = data.temp_min;
        this.temp_max = data.temp_max;
        this.pressure = data.pressure;
        this.humidity = data.humidity;
    }
}
