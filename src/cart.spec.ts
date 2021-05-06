import { Cart } from './cart';
import { Product } from './product';


describe('Cart', () => {

    test('should initially be empty', () => {
        const cart = new Cart();
        expect(cart.getProducts()).toEqual([])
    });
    test('should add a new product to cart', () => {
        const cart = new Cart();
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        cart.addProduct(dummyProduct);
        expect(cart.getProducts()).toEqual<Product[]>([dummyProduct])
    })
    test('should increment quantity of product in cart', () => {
        const cart = new Cart();
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        const dummyProductWithQuantityOfTwo = new Product(1, "Apple", 2, 1.5);
        cart.addProduct(dummyProduct);
        cart.addProduct(dummyProduct);
        expect(cart.getProducts()).toEqual<Product[]>([dummyProductWithQuantityOfTwo])
    })
    test('should remove a product from cart', () => {
        const cart = new Cart();
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        cart.addProduct(dummyProduct);
        cart.removeProduct(dummyProduct.getId())
        expect(cart.getProducts()).toEqual<Product[]>([]);
    })
    test('should increment quantity of product in cart', () => {
        const cart = new Cart();
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        const dummyProductWithQuantityOfTwo = new Product(1, "Apple", 2, 1.5);
        cart.addProduct(dummyProduct);
        dummyProduct.incrementQuantity();
        expect(cart.getProducts()).toEqual<Product[]>([dummyProductWithQuantityOfTwo])
    })
    test('should decrement quantity of product in cart', () => {
        const cart = new Cart();
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        const dummyProductWithQuantityOfTwo = new Product(1, "Apple", 2, 1.5);
        cart.addProduct(dummyProductWithQuantityOfTwo);
        dummyProductWithQuantityOfTwo.decrementQuantity();
        expect(cart.getProducts()).toEqual<Product[]>([dummyProduct])
    })
    test('should remove product in cart', () => {
        const cart = new Cart();
        const dummyProduct = new Product(1, "Apple", 1, 1.5);
        dummyProduct.decrementQuantity();
        expect(cart.getProducts()).toEqual<Product[]>([])
    })
})
