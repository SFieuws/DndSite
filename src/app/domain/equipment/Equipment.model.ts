import { Price } from '../Price.model';

export abstract class Equipment {
    private _id: string;
    private _name: string;
    private _price: Price;
    private _weight: number;
    private _desc?: string; //make description optional 

	public get name(): string {
		return this._name;
    }
    public get price(): Price {
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
    public set price(price: Price) {
        this._price = price;
    }
    public set weight(weight: number) {
        this._weight = weight;
    }
    public set description(desc: string) {
        this._desc = desc;
    }
}