import React from "react";

const CartCard = ({
    products,
    addFunction,
    decreaseFunction,
    deleteProduct,
}) => {

    return  (
        <>
            <div className="card-contain">
                <div className="card__Product">
                    <h5 className="card-tittle">{products.title}</h5>
                    <div className="card-body">
                        <img
                            className="card-img  mb-3"
                            src={"http://localhost:3977/" + products.image}
                            alt={products.image}
                        />
                        <p>
                            <h3
                                onClick={() => deleteProduct(products._id)}
                                className="delete-button"
                            >
                                {" "}
                                ❌ Delete
                            </h3>
                            <span className="fw-bold"> {products.amount} =</span>U$D{" "}
                            {parseInt(products.price) * products.amount}
                            <button
                                onClick={() => addFunction(products)}
                                type="button"
                                id="btnAdd"
                                class="btn btn-outline-info"
                            >
                                +
                            </button>
                            <button
                                onClick={() => decreaseFunction(products)}
                                type="button"
                                id="btnDelete"
                                class="btn btn-outline-danger"
                            >
                                -
                            </button>
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartCard;
