import { Class } from "./Class.model";
import { Equipment } from "./equipment/Equipment.model";
import { Proficiency } from "./Proficiency.model";
import { Race } from "./Race.model";

export class Character {
    constructor(private _id: string,
        private _name: string,
        private _class: Class, //multiclassing is available, so we might have to rework this then
        private _race: Race,
        private _background: string,
        private _alignment: string,
        private _faction: string,
        private _level: number,
        private _inspiration: number,
        //private _abilities: Int16Array[6], //no idea if this is correct, but I would only keep numbers for the ability scores. Index 0 is Str, index 1 is Dex,... 
        private _proficiencies: Proficiency[],
        private _equipment: Equipment[],
        private _coin: number,
        private _languages: string[]
    ) { } //The rest of the information on a character sheet can be calculated with these values

    public get name() {
        return this._name;
    }
    public get class() {
        return this._class;
    }
    public get race() {
        return this._race;
    }
    public get background() {
        return this._background
    }
    public get alignment() {
        return this._alignment;
    }
    public get faction() {
        return this._faction;
    }
    public get level() {
        return this._level;
    }
    public get inspiration() {
        return this._inspiration;
    }
    public get proficiencies() {
        return this._proficiencies;
    }
    public get equipment() {
        return this._equipment;
    }
    public get coin() {
        return this._coin;
    }
    public set name(name: string) {
        this._name = name;
    }
    public set class(characterClass: Class) {
        this._class = characterClass;
    }
    public set race(race: Race) {
        this._race = race;
    }
    public set background(background: string) {
        this._background = background;
    }
    public set alignment(alignment: string) {
        this._alignment = alignment;
    }
    public set faction(faction: string) {
        this._faction = faction;
    }
    public set level(level: number) {
        this._level = level;
    }
    public set inspiration(inspiration: number) {
        this._inspiration = inspiration;
    }
    public set proficiencies(proficiencies: Proficiency[]) {
        this._proficiencies = proficiencies;
    }
    public set equipment(equipment: Equipment[]) {
        this._equipment = equipment;
    }
    public set coin(coin: number) {
        this._coin = coin;
    }
    
    public changeCoin(coin: number, addCoin: boolean) { //0 is substract, 1 is add
        if (addCoin)
            this._coin += coin;
        else
            this._coin -= coin; //Check for negative values in frontend
    }
}