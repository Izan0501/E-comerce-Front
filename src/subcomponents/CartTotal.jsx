import React from "react";

const cartTotal = ({ cartProducts }) => {

    const total = cartProducts.reduce((acc, current) => {
        return acc + current.amount * current.price;
    }, 0);

    return cartProducts.length > 0 ? (
        <>
            <div className="cartTotal">
                <h3  id="totalSpan" className="mb-0">
                    total :   ${total}
                </h3>
            </div>
        </>
    ): (
        <h2 className="cartMessage">Your Cart Is Empty</h2>
    );
};

export default cartTotal;
