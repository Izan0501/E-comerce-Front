import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { getXboxGames } from "../api/getXboxGames";

export const XboxSection = ({ addProductToCart, addProductToList }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getXboxGames()
            .then((data) => setProducts(data))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <motion.div className="wrapper" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -1726 }}
                    className="carousel"
                    whileTap={{ cursor: "grabbing" }}
                >
                    {products.map((item) => (
                        <Card
                            addProductToCart={addProductToCart}
                            addProductToList={addProductToList}
                            key={item._id}
                            item={item}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
};

export default XboxSection;
