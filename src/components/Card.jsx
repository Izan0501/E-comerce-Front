import React from "react";
import { motion } from "framer-motion";
/*import ProductsBtn from "../subComponents/ProductsBtn";*/
//import FavBtn from "../subComponents/FavBtn";

const Card = ({ item, addProductToCart, addProductToList }) => {
    return (
        <>
            <motion.div className="card" whileTap={{ cursor: "grabbing" }}>
                <div>
                    <button onClick={() => addProductToList(item)} className="favBtn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                        </svg>
                    </button>
                </div>
                <motion.div className="img">
                    <img src={"http://localhost:3977/" + item.image} alt={item.image} />
                </motion.div>
                <h4>
                    <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => addProductToCart(item)}
                    >
                        <div className="btnTitle">U$D</div> {item.price}
                    </button>
                </h4>
            </motion.div>
        </>
    );
};

export default Card;

/*<ProductsBtn  content={price} />*/

/**/
