import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
    //cartFunction
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) => {
        const index = cartProducts.findIndex((item) => item._id === product._id);
        if (index === -1) {
            setCartProducts((old) => [...old, product]);
        } else {
            const increaseQuantity = cartProducts.map((item) =>
                item._id === product._id ? { ...item, amount: item.amount + 1 } : item
            );
            setCartProducts(increaseQuantity);
        }
        console.log(cartProducts);
    };

    //function of adding quantity
    const addFunction = (product) => {
        const productRepeat = cartProducts.find((item) => item._id === product._id);

        if (productRepeat) {
            setCartProducts(
                cartProducts.map((item) =>
                    item._id === product._id
                        ? { ...product, amount: productRepeat.amount + 1 }
                        : item
                )
            );
        }
    };

    //function of decrese quantity
    const decreaseFunction = (product) => {
        const productRepeat = cartProducts.find((item) => item._id === product._id);

        if (productRepeat !== 1) {
            setCartProducts(
                cartProducts.map((item) =>
                    item._id === product._id
                        ? { ...product, amount: productRepeat.amount - 1 }
                        : item
                )
            );
        }
        if (productRepeat === 0) {
            return product;
        }
    };

    //delete product function
    const deleteProduct = (_id) => {
        const foundId = cartProducts.find((item) => item._id === _id);

        const newCart = cartProducts.filter((item) => {
            return item !== foundId;
        });

        setCartProducts(newCart);
    };

    // add to wish-fav list products function
    const [wishProducts, setWishProducts] = useState([]);

    const addProductToList = (product) => {
        const index = wishProducts.findIndex((item) => item._id === product._id);
        if (index === -1) {
            setWishProducts((old) => [...old, product]);
        } else {
            const increaseQuantity = wishProducts.map((item) =>
                item._id === product._id ? { ...item, amount: item.amount + 1 } : item
            );
            setWishProducts(increaseQuantity);
        }
        console.log(wishProducts);
    };

    // delete product function
    const deleteFavProduct = (_id) => {
        const foundId = wishProducts.find((item) => item._id === _id);

        const newCart = wishProducts.filter((item) => {
            return item !== foundId;
        });

        setWishProducts(newCart);
    };

    return (
        <>
            <Header
                deleteFavProduct={deleteFavProduct}
                deleteProduct={deleteProduct}
                decreaseFunction={decreaseFunction}
                addFunction={addFunction}
                wishProducts={wishProducts}
                cartProducts={cartProducts}
            />
            <Main
                addProductToCart={addProductToCart}
                addProductToList={addProductToList}
            />
            <Footer />
        </>
    );
}

export default App;
