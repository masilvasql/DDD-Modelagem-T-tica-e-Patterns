"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../entity/Products"));
const product_service_1 = __importDefault(require("./product.service"));
describe("Product service unit tests", () => {
    it("should change the price of all products", () => {
        const product1 = new Products_1.default("1", "Product 1", 10);
        const product2 = new Products_1.default("2", "Product 2", 20);
        const product3 = new Products_1.default("3", "Product 3", 10);
        const products = [product1, product2, product3];
        product_service_1.default.increasePrice(products, 100);
        expect(product1.price).toBe(20);
        expect(product2.price).toBe(40);
        expect(product3.price).toBe(20);
    });
});
