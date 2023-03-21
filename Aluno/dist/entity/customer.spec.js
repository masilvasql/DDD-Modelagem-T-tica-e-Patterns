"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const customer_1 = __importDefault(require("./customer"));
describe("Customer unit tests", () => {
    it("should throw error when Id is empty", () => {
        expect(() => new customer_1.default("", "John")).toThrowError("Id is Required");
    });
    it("should throw error when Name is empty", () => {
        expect(() => new customer_1.default("1", "")).toThrowError("Name is Required");
    });
    it("should change name", () => {
        //arrange
        const customer = new customer_1.default("1", "John");
        //act
        customer.changeName("John Doe");
        //assert
        expect(customer.name).toBe("John Doe");
    });
    it("should activate customer", () => {
        //arrange
        const customer = new customer_1.default("1", "John");
        const addres = new address_1.default("street", 1, "city", "zipCode", "country");
        //act
        customer.Addres = addres;
        customer.activate();
        //assert
        expect(customer.isActive()).toBe(true);
    });
    it("should deactivate customer", () => {
        //arrange
        const customer = new customer_1.default("1", "John");
        customer.deactivate();
        //assert
        expect(customer.isActive()).toBe(false);
    });
    it("should thrrow error when change name to empty", () => {
        expect(() => new customer_1.default("1", "John").changeName("")).toThrowError("Name is Required");
    });
    it("should throw error when activate customer without address", () => {
        expect(() => new customer_1.default("1", "John").activate()).toThrowError("Addres is mandatory to activate customer");
    });
});
