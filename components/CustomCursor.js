import { useState, useEffect } from "react";
import styles from "../styles/CustomCursor.module.scss";  // Ensure you're using the right class

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isStretching, setIsStretching] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY + window.scrollY, // ✅ Fix: Add scroll position to Y coordinate
            });

            // Detect fast movement to apply stretching effect
            if (Math.abs(e.movementX) > 5 || Math.abs(e.movementY) > 5) {
                setIsStretching(true);
            } else {
                setIsStretching(false);
            }
        };

        // Add mousemove event listener
        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    return (
        <>
            {/* Circle that follows the cursor */}
            <div
                className={`${styles.cursor} ${isStretching ? styles.stretch : ""}`}
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                }}
            ></div>

            {/* Wave effect around the cursor */}
            <div
                className={styles.cursorWave}
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                }}
            ></div>
        </>
    );
};

export default CustomCursor;
