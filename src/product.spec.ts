import { Product } from "./product";

describe('Product', () => {

    test('should return correct quantity', () => {
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        expect(dummyProduct.getQuantity()).toEqual(1);
    })
    test('should increment quantity', () => {
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        dummyProduct.incrementQuantity();
        expect(dummyProduct.getQuantity()).toEqual(2);
    });
    test('should decrement quantity', () => {
        const dummyProduct = new Product(1, "Apple", 2, 1.5);
        dummyProduct.decrementQuantity();
        expect(dummyProduct.getQuantity()).toEqual(1);
    });
    test('should not decrement quantity below 1', () => {
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        dummyProduct.decrementQuantity();
        expect(dummyProduct.getQuantity()).toEqual(1);
    });
})
