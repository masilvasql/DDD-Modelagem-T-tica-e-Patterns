import Product from "../../domain/entity/Products";
import ProductRepositoryInterface from "../../domain/repository/product-repository.interface";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {

   
    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price,
            
        });
    }

    async update(product: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find (id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    
}

