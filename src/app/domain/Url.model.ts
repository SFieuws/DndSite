export class Url {
    constructor(private _name: string, private _url: string) { }

    public get name() {
        return this._name;
    }
    public get url() {
        return this._url;
    }
    public set name(name: string) {
        this._name = name;
    }
    public set url(url: string) {
        this._url = url;
    }
}