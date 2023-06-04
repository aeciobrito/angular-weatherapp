
export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;

    constructor(data: any) {
        this.id = data.id;
        this.main = data.main;
        this.description = data.description;
        this.icon = data.icon;
    }
}
