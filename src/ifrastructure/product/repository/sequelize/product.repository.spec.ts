import { Sequelize } from "sequelize-typescript";
import Product from "../../../../domain/product/entity/Products";
import ProductModel from "./product.model";


import ProductRepository from "./product.repository";


describe("Product repository test", ()=> {

    let sequileze: Sequelize;

    beforeEach(async () => {
        sequileze = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });
        sequileze.addModels([ProductModel]);
        await sequileze.sync();
    });

    afterEach(async () => {
        await sequileze.close();
    });

    it("should create a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100,
        });
    });

    it("should update a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("2", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "2" } });
        expect(productModel.toJSON()).toStrictEqual({
            id: "2",
            name: "Product 1",
            price: 100,
        });

        product.changeName("Product 2") ;
        product.changePrice(200);

        await productRepository.update(product);

        const productModelUpdated = await ProductModel.findOne({ where: { id: "2" } });
        expect(productModelUpdated.toJSON()).toStrictEqual({
            id: "2",
            name: "Product 2",
            price: 200,
        });
    }); 

    it("should find a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("3", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "3" } });
 
        const foundProduct = await productRepository.find("3");

        expect(productModel.toJSON()).toStrictEqual({
            id: foundProduct.id,
            name: foundProduct.name,
            price: foundProduct.price,
        });
    })

    it("should find all products", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("4", "Product 1", 100);
        const product2 = new Product("5", "Product 2", 200);

        await productRepository.create(product);
        await productRepository.create(product2);

        const productModel = await productRepository.findAll();

        const products = [product, product2];

        expect(products).toEqual(productModel);
        
    })

})