import { Product } from "./product";

export class Cart {

    private products: Product[] = [];

    addProduct(product: Product): void {
        const existingProduct = this.products.find(p => p.getId() === product.getId())
        if (existingProduct) {
            product.incrementQuantity();
        } else {
            this.products.push(product);
        }
    }
    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.getId() !== productId )
    }
    getProducts(): Product[] {
        return this.products;
    }

}
