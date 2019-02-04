import { Proficiency } from '../Proficiency.model';
import { Language } from '../Language';
import { Trait } from './Trait.model';
import { Subrace } from './Subrace.model';

export class Race {
    private _id: string;
    private _name: string;
    private _speed: number;
    private _abilityBonusses: number[];
    private _alignment: string;
    private _age: string;
    private _size: string;
    private _sizeDescription: string;
    private _startingProficiencies: Proficiency[];
    private _languages: Language[];
    private _languageDescription: string;
    private _traits: Trait[];
    private _subraces: Subrace[];

    constructor() {}

	public get id(): string {
		return this._id;
	}
	public get name(): string {
		return this._name;
	}
	public get speed(): number {
		return this._speed;
	}
	public get abilityBonusses(): number[] {
		return this._abilityBonusses;
	}
	public get alignment(): string {
		return this._alignment;
	}
	public get age(): string {
		return this._age;
	}
	public get size(): string {
		return this._size;
	}
	public get sizeDescription(): string {
		return this._sizeDescription;
	}
	public get startingProficiencies(): Proficiency[] {
		return this._startingProficiencies;
	}
	public get languages(): Language[] {
		return this._languages;
	}
	public get languageDescription(): string {
		return this._languageDescription;
	}
	public get traits(): Trait[] {
		return this._traits;
	}
	public get subraces(): Subrace[] {
		return this._subraces;
    }
    
	public set id(value: string) {
		this._id = value;
	}
	public set name(value: string) {
		this._name = value;
	}
	public set speed(value: number) {
		this._speed = value;
	}
	public set abilityBonusses(value: number[]) {
		this._abilityBonusses = value;
	}
	public set alignment(value: string) {
		this._alignment = value;
	}
	public set age(value: string) {
		this._age = value;
	}
	public set size(value: string) {
		this._size = value;
	}
	public set sizeDescription(value: string) {
		this._sizeDescription = value;
	}
	public set startingProficiencies(value: Proficiency[]) {
		this._startingProficiencies = value;
	}
	public set languages(value: Language[]) {
		this._languages = value;
	}
	public set languageDescription(value: string) {
		this._languageDescription = value;
	}
	public set traits(value: Trait[]) {
		this._traits = value;
	}
	public set subraces(value: Subrace[]) {
		this._subraces = value;
	}
}