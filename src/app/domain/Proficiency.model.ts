import { ProficiencyType } from "./ProficiencyType";

export class Proficiency {
    constructor(private _id: string, 
        private _type: ProficiencyType,
        private _name: string) {}

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