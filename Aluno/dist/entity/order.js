"use strict";
//Agregados
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerID, items) {
        this._id = id;
        this._customerID = customerID;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    total() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
    validate() {
        if (this._items.length === 0) {
            throw new Error("Order without items");
        }
        if (this._customerID.length === 0) {
            throw new Error("CustomerID is Required");
        }
        if (this._id.length === 0) {
            throw new Error("Id is Required");
        }
        if (this._items.some(item => item.quantity <= 0)) {
            throw new Error("Quantity must be greater than zero");
        }
        return true;
    }
}
exports.default = Order;
