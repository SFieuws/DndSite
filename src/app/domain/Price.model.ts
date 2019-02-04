export class Price {
    private _quantity: number;
    private _unit: string;

    constructor(quantity: number, unit: string) {
        this._quantity = quantity;
        this._unit = unit;
    }

    public toString(): string {
        return `${this._quantity} ${this._unit}`
    }
}