"use strict";
//entity
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, name) {
        this._name = "";
        this._active = false;
        this._id = id;
        this._name = name;
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is Required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is Required");
        }
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    activate() {
        if (this._address === undefined) {
            throw new Error("Addres is mandatory to activate customer");
        }
        this._active = true;
    }
    deactivate() {
        this._active = false;
    }
    set Addres(address) {
        this._address = address;
    }
    get name() {
        return this._name;
    }
    isActive() {
        return this._active;
    }
}
exports.default = Customer;
