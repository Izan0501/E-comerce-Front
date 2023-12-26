import React from "react";
/*import cartFunction from "../Functions/cartFunction";*/

export const ProductsBtn = ({ addProductToCart }) => {
    return (
        <h4>
            <button
                type="button"
                className="btn btn-outline"
                onClick={addProductToCart}
            ></button>
        </h4>
    );
};

export default ProductsBtn;
