import { Proficiency } from "./Proficiency.model";
import { AbilityScore } from "./AbilityScore.model";
import { Equipment } from "./Equipment.model";
import { Subclass } from "./Subclass.model";

export class Class {
    constructor(private _id: string,
        private _name: string,
        private _hitDie: number,
        private _proficiencyChoices: Proficiency[],
        private _proficiencies: Proficiency[],
        private _savingThrows: AbilityScore[],
        private _startingEquipment: Equipment[],
        private _subclasses: Subclass[]) { }

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
        public get startingEquipment() {
            return this._startingEquipment;
        }
        public get subclasses() {
            return this._subclasses;
        }
    
        public set name(name: string) {
            this._name = name;
        }public set hitDie(hitDie: number) {
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

