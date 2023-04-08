import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products);
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart);
    // step-1 get id by using for in
    for (const id in storedCart) {
        // console.log(id);
        // step-2 get the product by using id
        const addedProduct = products.find(product => product.id === id);
        // console.log(addedCart);
        // step-3 get quantity of the product
        if (addedProduct) {
            const quantity = storedCart[id];
            // console.log(quantity);
            addedProduct.quantity = quantity;
            // console.log(addedProduct);
            // step-4 add the added product to the saved cart
            savedCart.push(addedProduct);
        }
    }
    // return products;
    return savedCart;

    // if you need to send two things
    // return [products,savedCart]
    // return {products,cart:savedCart}
}
export { cartProductsLoader };