import { Category } from "./Category";
import { Product } from "./Product";

export interface HomePage {
    featuredProducts: Product[],
    categories: Category[],
    products: Product[],
    galleryProducts: Product[]
}