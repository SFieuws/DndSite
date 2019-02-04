export class Price {
    constructor(private _quantity: number,
        private _unit: string
    ) {}

    public toString(): string {
        return `${this._quantity} ${this._unit}`
    }
}