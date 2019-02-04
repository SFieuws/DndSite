import { AbilityScore } from './AbilityScore.model';

export class Skill { //it might be possible to have enums of skills and sort them in ability-scores
    private _id: string;
    private _name: string;
    private _desc: string;
    private _abilityScores: AbilityScore;
     
    constructor() {}

	public get id(): string {
		return this._id;
	}
	public get name(): string {
		return this._name;
	}
	public get desc(): string {
		return this._desc;
	}
	public get abilityScores(): AbilityScore {
		return this._abilityScores;
	}

	public set id(value: string) {
		this._id = value;
	}
	public set name(value: string) {
		this._name = value;
	}
	public set desc(value: string) {
		this._desc = value;
	}
	public set abilityScores(value: AbilityScore) {
		this._abilityScores = value;
	}
}