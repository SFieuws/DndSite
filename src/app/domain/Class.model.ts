import { Proficiency } from "./Proficiency.model";
import { AbilityScore } from "./AbilityScore.model";
import { Equipment } from "./equipment/Equipment.model";
import { Subclass } from "./Subclass.model";

export class Class {
  private _id: string;
  private _name: string;
  private _hitDie: number;
  private _proficiencyChoices: Proficiency[];
  private _proficiencies: Proficiency[];
  private _savingThrows: AbilityScore[];
  private _startingEquipment: Equipment[];
  private _subclasses: Subclass[];

	constructor(name: string, hitDie: number, proficiencyChoices: Proficiency[], savingThrows: AbilityScore[], startingEquipment: Equipment[], subclasses: Subclass[]) {
    this._name = name;
    this._hitDie = hitDie;
    this._proficiencyChoices = proficiencyChoices;
    this._savingThrows = savingThrows;
    this._startingEquipment = startingEquipment;
    this._subclasses = subclasses;
	}

  public get name() {
    return this._name;
  }
  public get hitDie() {
    return this._hitDie;
  }
  public get proficiencyChoices() {
    return this._proficiencyChoices;
  }
  public get proficiencies() {
    return this._proficiencies;
  }
  public get savingThrows() {
    return this._savingThrows;
  }
  public get equipment() {
    return this._startingEquipment;
  }
  public get subclasses() {
    return this._subclasses;
  }

  public set name(name: string) {
    this._name = name;
  }
  public set hitDie(hitDie: number) {
    this._hitDie = hitDie;
  }
  public set proficiencyChoices(proficiencyChoices: Proficiency[]) {
    this._proficiencyChoices = proficiencyChoices;
  }
  public set proficiencies(proficiencies: Proficiency[]) {
    this._proficiencies = proficiencies;
  }
  public set savingThrows(savingThrows: AbilityScore[]) {
    this._savingThrows = savingThrows;
  }
  public set startingEquipment(startingEquipment: Equipment[]) {
    this._startingEquipment = startingEquipment;
  }
  public set subclasses(subclasses: Subclass[]) {
    this._subclasses = subclasses;
  }
}
