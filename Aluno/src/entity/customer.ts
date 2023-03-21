//entity


import Addres from "./address";

export default class Customer {
    private _id: string;
    private _name: string = "";
    private _address!: Addres;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is Required")
        }

        if (this._name.length === 0) {
            throw new Error("Name is Required")
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Addres is mandatory to activate customer")
        }
        this._active = true
    }

    deactivate() {
        this._active = false
    }

    set Addres(address: Addres) {
        this._address = address;
    }

    get name() {
        return this._name;
    }

    get id():string {
        return this._id;
    }

    get rewardPoints():number {   
        return this._rewardPoints;
    }

    isActive(){
        return this._active;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }


}