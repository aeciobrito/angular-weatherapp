
export class Wind {
    speed: number;
    deg: number;

    constructor(data: any) {
        this.speed = data.speed;
        this.deg = data.deg;
    }
}
