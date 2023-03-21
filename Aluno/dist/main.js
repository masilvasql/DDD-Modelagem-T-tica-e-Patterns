"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./entity/order"));
const orderItem_1 = __importDefault(require("./entity/orderItem"));
const order_service_1 = __importDefault(require("./service/order.service"));
const item1 = new orderItem_1.default("1", "Item 1", 100, "p1", 2);
const item2 = new orderItem_1.default("2", "Item 2", 300, "p1", 2);
const itemm3 = new orderItem_1.default("3", "Item 3", 100, "p1", 2);
const order = new order_1.default("01", "c1", [item1, item2]);
const order2 = new order_1.default("o2", "c1", [itemm3]);
const total = order_service_1.default.calculateTotal([order, order2]);
console.log(total);
