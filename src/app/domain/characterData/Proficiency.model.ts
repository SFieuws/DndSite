import { ProficiencyType } from "./ProficiencyType";
import { Class } from '../classes/Class.model';
import { Race } from '../races/Race.model';

export class Proficiency {
    private _id: string;
    private _type: ProficiencyType;
    private _name: string;
    private _classes: Class[];
    private _races: Race[];

    constructor() {}

    public get name() {
      return this._name;
    }
    public get type() {
      return this._type;
    }

    public set name(name: string) {
      this._name = name;
    }
    public set type(type: ProficiencyType) {
      this._type = type;
    }
}