export class Url {
    //Class to help get API calls. If you search for objects, you will first get the name of the object with the url to acces all the information about this object
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