import { motion } from "framer-motion";
import { useMemo } from "react";

// Function to generate a random number in a given range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

const BlobAnimation = ({
    w = 28,
    h = 28,
    opacity = 0.9,
    fromColor = "orange-700",
    toColor = "orange-400",
    top = "auto",
    left = "auto",
    right = "auto",
    bottom = "auto",
    blur = "lg",
}) => {
    // Memoize random values to keep animations smooth
    const randomValues = useMemo(
        () => ({
            borderRadius1: `${randomInRange(30, 70)}% ${randomInRange(
                10,
                80
            )}% ${randomInRange(30, 70)}% ${randomInRange(30, 70)}%`,
            borderRadius2: `${randomInRange(20, 80)}% ${randomInRange(
                20,
                80
            )}% ${randomInRange(20, 80)}% ${randomInRange(20, 80)}%`,
            scale: randomInRange(1.1, 1.4),
            rotate: randomInRange(-15, 15),
            x: randomInRange(-20, 20),
            y: randomInRange(-20, 20),
            duration: randomInRange(6, 12),
        }),
        []
    );

    return (
        <motion.div
            className={`absolute bg-gradient-to-br from-${fromColor} to-${toColor}`}
            style={{
                width: `${w}rem`,
                height: `${h}rem`,
                opacity,
                filter: `blur(${
                    blur === "lg" ? "1.5rem" : blur === "md" ? "1rem" : "0.5rem"
                })`,
                top: top !== "auto" ? `${top}` : "auto",
                left: left !== "auto" ? `${left}` : "auto",
                right: right !== "auto" ? `${right}` : "auto",
                bottom: bottom !== "auto" ? `${bottom}` : "auto",
            }}
            animate={{
                borderRadius: [
                    "50%",
                    randomValues.borderRadius1,
                    randomValues.borderRadius2,
                    "50%",
                ],
                scale: [1, randomValues.scale, 1],
                rotate: [0, randomValues.rotate, 0],
                x: [0, randomValues.x, 0],
                y: [0, randomValues.y, 0],
            }}
            transition={{
                duration: randomValues.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
        />
    );
};

export default BlobAnimation;
