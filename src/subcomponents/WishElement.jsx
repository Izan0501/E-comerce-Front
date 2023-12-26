import React from "react";

const WishElement = ({ products, deleteFavProduct, wishProducts }) => {
    
    return wishProducts.length > 0 ? (
        <div className="card-contain">
            <div className="card__Product">
                <h3 onClick={() => deleteFavProduct(products._id)} id="deleteBtn">
                    {" "}
                    ❌ Delete{" "}
                </h3>
                <h5 className="card-tittle">{products.title}</h5>
                <div className="card-body">
                    <img
                        className="card-img  mb-3"
                        src={"http://localhost:3977/" + products.image}
                        alt={products.image}
                    />
                    <hr />
                </div>
            </div>
        </div>
    ): (
        <h2 className="cartMessage"> Your Wish List Is Empty</h2>
    );
};

export default WishElement;
