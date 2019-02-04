import { Race } from './Race.model';

export class Trait {
    private _id: string;
    private _races: Race[];
    private _name: string;
    private _desc: string;

    constructor() {}

	public get id(): string {
		return this._id;
	}
	public get races(): Race[] {
		return this._races;
	}
	public get name(): string {
		return this._name;
	}
	public get desc(): string {
		return this._desc;
	}
	public set id(value: string) {
		this._id = value;
	}
	public set races(value: Race[]) {
		this._races = value;
	}
	public set name(value: string) {
		this._name = value;
	}
	public set desc(value: string) {
		this._desc = value;
    }
}