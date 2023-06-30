class ProductModel {
    sku: string;
    name: string;
    price: number;
}

interface CartItem {
    product: ProductModel;
    quantity: number;
}

interface ICartService {
    selectedProducts: CartItem[];
    calculateTotal(): number;
    addToCart(): void;
}

class CartService implements ICartService {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce(
            (total, item) => item.product.price * item.quantity + total,
            0
        );
    }
    addToCart(): void {
        // logic here
    }
}

class ProductComponent {
    constructor(public cartService: ICartService) {
    }
}

const cartService = new CartService();

const productComponent = new ProductComponent(cartService);

class MockCartService implements ICartService {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return 1; // mock data
    }
    addToCart(): void {
        // logic here
    }
}

const mockCartService = new MockCartService();
const anotherProductComponentForTest = new ProductComponent(mockCartService);