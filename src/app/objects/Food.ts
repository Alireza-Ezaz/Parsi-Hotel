export class Food{
    public name: string;
    public price: string;

    public day?: string;
    public imageUrl?: string;

    constructor(name: string, price: string,day?:string, imageUrl?: string) {
        this.name = name;
        this.price = price;
        this.day = day;
        this.imageUrl = imageUrl;
    }
}
