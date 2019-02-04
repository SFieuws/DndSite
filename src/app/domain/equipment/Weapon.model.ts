import { Equipment } from './Equipment.model';
import { Damage } from '../Damage.model';
import { Price } from '../Price.model';

export class Weapon extends Equipment {
    private _category: string;
    private _weaponRange: string;
    private _damage: Damage;
    private _closeRange: number;
    private _longRange?: number; //mellee weapons have no long range, so this is optional
    //private _properties: Property; this will be something like heavy, versitile

	constructor(id: string, name: string, price: Price, weight: number, category: string, weaponRange: string, damage: Damage, closeRange: number, desc?: string /*properties: Property*/) {
        super(id, name, price, weight, desc);
		this._category = category;
		this._weaponRange = weaponRange;
		this._damage = damage;
		this._closeRange = closeRange;
		//this._properties = properties;
	}
    
    public get category(): string {
		return this._category;
	}	
	public get weaponRange(): string {
		return this._weaponRange;
	}	
	public get damage(): Damage {
		return this._damage;
	}
	public get closeRange(): number {
		return this._closeRange;
    }
    
    public set category(value: string) {
		this._category = value;
    }
	public set damage(value: Damage) {
		this._damage = value;
	}
	public set closeRange(value: number) {
		this._closeRange = value;
    }
    public set weaponRange(value: string) {
		this._weaponRange = value;
    }
    
	/*public get properties(): Property {
		return this._properties;
	}
	public set properties(value: Property) {
		this._properties = value;
	}*/
}