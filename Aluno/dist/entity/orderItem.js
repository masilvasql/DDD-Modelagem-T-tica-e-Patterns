"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(id, name, price, productID, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._productID = productID;
        this._total = this.total();
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    orderItemTotal() {
        return this._price * this._quantity;
    }
    total() {
        return this._price * this._quantity;
    }
}
exports.default = OrderItem;
