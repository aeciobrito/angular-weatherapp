
export class Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;

    constructor(data: any) {
        this.type = data.type;
        this.id = data.id;
        this.country = data.country;
        this.sunrise = data.sunrise;
        this.sunset = data.sunset;
    }
}
