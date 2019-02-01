import { Skill } from "./Skill.model";

export class AbilityScore {
  constructor(private _id: string,
    private _name: string,
    private _fullName: string,
    private _desc: string,
    private _skills: Skill[]) {}

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