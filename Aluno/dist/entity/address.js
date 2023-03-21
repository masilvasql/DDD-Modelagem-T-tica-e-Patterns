"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//VO
class Address {
    constructor(street, number, city, zipCode, country) {
        this._street = street;
        this._number = number;
        this._city = city;
        this._zipCode = zipCode;
        this.validate();
    }
    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is Required");
        }
        if (this._number === 0 || this._number === undefined) {
            throw new Error("Number is Required");
        }
        if (this._city.length === 0) {
            throw new Error("City is Required");
        }
        if (this._zipCode.length === 0) {
            throw new Error("ZipCode is Required");
        }
    }
    changeStreet(street) {
        this._street = street;
        this.validate();
    }
    changeNumber(number) {
        this._number = number;
        this.validate();
    }
    changeCity(city) {
        this._city = city;
        this.validate();
    }
    changeZipCode(zipCode) {
        this._zipCode = zipCode;
        this.validate();
    }
}
exports.default = Address;
