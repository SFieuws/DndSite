import { Skill } from "./Skill.model";

export class AbilityScore {
  private _id: string;
  private _name: string;
  private _fullName: string;
  private _desc: string;
  private _skills: Skill[];

	constructor(id: string, name: string, fullName: string, desc: string, skills: Skill[]) {
    this._id = id;
    this._name = name;
    this._fullName = fullName;
		this._desc = desc;
    this._skills = skills;
	}

  public get name() {
    return this._name;
  }
  public get fullName() {
    return this._fullName;
  }
  public get description() {
    return this._desc;
  }
  public get skills() {
    return this._skills;
  }

  public set name(name: string) {
    this._name = name;
  }
  public set fullName(fullName: string) {
    this._fullName = fullName;
  }
  public set description(desc: string) {
    this._desc = desc;
  }
  public set skills(skills: Skill[]) {
    this._skills = skills;
  }
}