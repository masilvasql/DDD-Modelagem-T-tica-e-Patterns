"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("./Products"));
describe("Product unit tests", () => {
    it("should throw error when Id is empty", () => {
        expect(() => new Products_1.default("", "Produto 1", 100)).toThrowError("Id is Required");
    });
    it("should throw error when name is empty", () => {
        expect(() => new Products_1.default("1", "", 100)).toThrowError("Name is Required");
    });
    it("should throw error when price is less or equal zero", () => {
        expect(() => new Products_1.default("1", "Produto 1", 0)).toThrowError("Price must be greater than zero");
    });
    it("should change the name of the product", () => {
        const product = new Products_1.default("1", "Produto 1", 100);
        product.changeName("Produto 2");
        expect(product.name).toBe("Produto 2");
    });
    it("should change price of the product", () => {
        const product = new Products_1.default("1", "Produto 1", 100);
        product.changePrice(200);
        expect(product.price).toBe(200);
    });
});
