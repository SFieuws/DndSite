import { CoinUnit } from "./CoinUnit";

export class Price {
    private _quantity: number;
    private _unit: CoinUnit;

    constructor(quantity: number, unit: CoinUnit) {
        this._quantity = quantity;
        this._unit = unit;
    }

    public toString(): string {
        return `${this._quantity} ${this._unit}`
    }
}