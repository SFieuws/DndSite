import { Race } from './Race.model';
import { Proficiency } from '../Proficiency.model';
import { Language } from '../Language';
import { Trait } from './Trait.model';

export class Subrace {   
    private _id: string;
    private _name: string;
    private _race: Race;
    private _desc: string;
    private _abilityBonusses: number[];
    private _startingProficiencies: Proficiency[];
    private _languages: Language[];
    private _traits: Trait[];

    constructor() {}
    
	public get id(): string {
		return this._id;
	}
	public get name(): string {
		return this._name;
	}
	public get race(): Race {
		return this._race;
	}
	public get desc(): string {
		return this._desc;
	}
	public get abilityBonusses(): number[] {
		return this._abilityBonusses;
	}
	public get startingProficiencies(): Proficiency[] {
		return this._startingProficiencies;
	}
	public get languages(): Language[] {
		return this._languages;
	}
	public get traits(): Trait[] {
		return this._traits;
	}

	public set id(value: string) {
		this._id = value;
	}
	public set name(value: string) {
		this._name = value;
	}
	public set race(value: Race) {
		this._race = value;
	}
	public set desc(value: string) {
		this._desc = value;
	}
	public set abilityBonusses(value: number[]) {
		this._abilityBonusses = value;
	}
	public set startingProficiencies(value: Proficiency[]) {
		this._startingProficiencies = value;
	}
	public set languages(value: Language[]) {
		this._languages = value;
	}
	public set traits(value: Trait[]) {
		this._traits = value;
    }
}