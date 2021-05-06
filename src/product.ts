export class Product {

    private id: number;
    private name: string;
    private quantity: number;
    private price: number;

    constructor(id: number, name: string, quantity: number, price: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    getId(): number { 
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getQuantity(): number {
        return this.quantity;
    }
    getPrice(): number {
        return this.price;
    }

    setId(productId: number): void {
        this.id = productId;
    }
    setName(name: string): void {
        this.name = name;
    }
    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }
    setPrice(price: number): void {
        this.price = price;
    }

    incrementQuantity(): void {
        this.quantity++;
    }
    decrementQuantity(): void {
        this.quantity > 1 ? this.quantity -- : 1;
    }
}
