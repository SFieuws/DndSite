export abstract class Equipment {
    private _id: string;
    private _name: string;
    private _price: number;
    private _weight: number;
    private _desc?: string; //make description optional 

	constructor(id: string, name: string, price: number, weight: number, desc?: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._weight = weight;
        this._desc = desc;
	}
    
    public getCalculatedPrice(): string {
        //calculate the price and give it back, like 3sp and 2cp
        return "";
    }

	public get name(): string {
		return this._name;
    }
    public get price(): number {
        return this._price;
    }
    public get weight(): number {
        return this._weight;
    }
    public get description(): string {
        return this._desc;
    }

    public set name(name: string) {
        this._name = name;
    }
    public set price(price: number) {
        this._price = price;
    }
    public set weight(weight: number) {
        this._weight = weight;
    }
    public set description(desc: string) {
        this._desc = desc;
    }
}