import React from "react";
import { motion } from "framer-motion";
import "../styles/components/Loader.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <motion.div
                className="loader-dot"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [1, 0.5, 1],
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <p className="loader-text">Cargando pregunta...</p>
        </div>
    );
};

export default Loader;
