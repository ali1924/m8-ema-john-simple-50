    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        // Step-1 get ID
        for (const id in storedCart) {
            // console.log(id);
            // step-2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // console.log(savedProduct);
            // step-3 get quantity of the product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            console.log(addedProduct);
        }
    }, [products]);