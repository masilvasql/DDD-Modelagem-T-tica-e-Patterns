import Product from "../entity/Products";
import RepositoryInterface from "./repository.interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {}