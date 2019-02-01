import { Feature } from './Feature.model';

export class Subclass {
    constructor(private _id: string,
        private _name: string,
        private _subclassFlavor: string,
        private _desc: string,
        private _features: Feature[]) { }

    public get name(): string {
        return this._name;
    }
    public get subclassFlavor(): string {
        return this._subclassFlavor;
    }
    public get description(): string {
        return this._desc;
    }
    public get features(): Feature[] {
        return this._features;
    }

    public set name(name: string) {
        this._name = name;
    }
    public set subclassFlavor(subclassFlavor: string) {
        this._subclassFlavor = subclassFlavor;
    }
    public set description(desc: string) {
        this._desc = desc;
    }
    public set features(features: Feature[]) {
        this._features = features;
    }
}