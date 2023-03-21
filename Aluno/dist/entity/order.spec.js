"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const orderItem_1 = __importDefault(require("./orderItem"));
describe("Order unit tests", () => {
    it("should throw error when Id is empty", () => {
        expect(() => new order_1.default("", "1", [new orderItem_1.default("1", "item1", 10, "p1", 1)])).toThrowError("Id is Required");
    });
    it("should throw error when CustomerID is empty", () => {
        expect(() => new order_1.default("1", "", [new orderItem_1.default("1", "item1", 10, "p1", 1)])).toThrowError("CustomerID is Required");
    });
    it("should throw error when OrderItens is empty", () => {
        expect(() => new order_1.default("1", "1", [])).toThrowError("Order without items");
    });
    it("should calculate total", () => {
        const order = new order_1.default("1", "1", [
            new orderItem_1.default("1", "item1", 10, "p1", 1),
            new orderItem_1.default("2", "item2", 10, "p2", 1),
            new orderItem_1.default("3", "item3", 10, "p3", 1),
        ]);
        expect(order.total()).toBe(30);
    });
    it("should throw error if the item quantity is less or  equal  0", () => {
        expect(() => {
            const order = new order_1.default("1", "1", [
                new orderItem_1.default("1", "item1", 10, "p1", 1),
                new orderItem_1.default("2", "item2", 10, "p2", 0),
                new orderItem_1.default("3", "item3", 10, "p3", -1),
            ]);
        }).toThrowError("Quantity must be greater than zero");
    });
});
