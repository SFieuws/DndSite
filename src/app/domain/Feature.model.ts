export class Feature { 
    private _id: string;
    private _name: string;
    private _level: number;
    private _desc: string;

    constructor(id: string, name: string, level: number, desc: string) {
        this._id = id;
        this._name = name;
        this._level = level;
        this._desc = desc;
    }

    public get name(): string {
        return this._name;
    }
    public get level(): number {
        return this._level;
    }
    public get description(): string {
        return this._desc;
    }

    public set name(name: string) {
        this._name = name;
    }
    public set level(level: number) {
        this._level = level;
    }
    public set description(desc: string) {
        this._desc = desc;
    }
}